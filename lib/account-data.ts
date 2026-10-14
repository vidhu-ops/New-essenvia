import { prisma } from "@/lib/prisma";

export async function getCustomerAccount(userId: string) {
  return prisma.customer.findUnique({
    where: { userId },
    include: {
      subscriptions: {
        orderBy: { createdAt: "desc" },
        include: {
          package: true,
          lineItems: {
            include: { sku: { include: { brand: true, category: true } } },
          },
        },
      },
      orders: { orderBy: { createdAt: "desc" }, take: 10 },
    },
  });
}

export function activeSubscription(customer: NonNullable<Awaited<ReturnType<typeof getCustomerAccount>>>) {
  return customer.subscriptions.find((s) => s.status !== "CANCELLED") ?? customer.subscriptions[0];
}
