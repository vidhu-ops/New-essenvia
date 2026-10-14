import { ConsoleLayout } from "@/components/essentra/ConsoleLayout";
import { prisma } from "@/lib/prisma";

export default async function AdminOrdersPage() {
  const orders = await prisma.order.findMany({
    include: { customer: true },
    orderBy: { createdAt: "desc" },
    take: 50,
  });

  return (
    <ConsoleLayout title="Admin" allowed={["ADMIN", "MANAGER"]}>
      <h1 className="font-display text-2xl text-ink">Orders</h1>
      <p className="mt-2 text-sm text-ink-muted">Fulfillment pipeline — warehouse updates status from the pick console.</p>
      <div className="mt-6 overflow-x-auto">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead>
            <tr className="border-b border-line text-ink-soft">
              <th className="py-2">Order</th>
              <th className="py-2">Customer</th>
              <th className="py-2">Status</th>
              <th className="py-2">Zone</th>
              <th className="py-2">Created</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((o) => (
              <tr key={o.id} className="border-b border-line/70">
                <td className="py-2 font-mono text-xs">{o.orderNumber}</td>
                <td className="py-2">
                  {o.customer.firstName} {o.customer.lastName}
                </td>
                <td className="py-2">{o.status.replaceAll("_", " ")}</td>
                <td className="py-2">{o.deliveryZone ?? "—"}</td>
                <td className="py-2 text-ink-muted">{o.createdAt.toLocaleDateString("en-CA")}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ConsoleLayout>
  );
}
