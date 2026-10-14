"use server";

import { revalidatePath } from "next/cache";
import { requireRole } from "@/lib/auth-server";
import { prisma } from "@/lib/prisma";

export async function updateDeliveryAddress(data: {
  addressLine1: string;
  addressLine2?: string;
  city: string;
  province: string;
  postalCode: string;
  deliveryNotes?: string;
}) {
  const user = await requireRole(["CUSTOMER", "ADMIN", "MANAGER", "SUPPORT"]);
  await prisma.customer.update({
    where: { userId: user.id },
    data,
  });
  revalidatePath("/account/delivery");
}

export async function subscriptionAction(subscriptionId: string, action: "skip" | "pause" | "cancel" | "resume") {
  const user = await requireRole(["CUSTOMER", "ADMIN", "MANAGER", "SUPPORT"]);
  const sub = await prisma.subscription.findFirst({
    where: { id: subscriptionId, customer: { userId: user.id } },
  });
  if (!sub) throw new Error("NOT_FOUND");

  let status = sub.status;
  if (action === "skip") status = "SKIPPED";
  else if (action === "pause") status = "PAUSED";
  else if (action === "cancel") status = "CANCELLED";
  else if (action === "resume") status = "ACTIVE";

  await prisma.subscription.update({ where: { id: subscriptionId }, data: { status } });
  revalidatePath("/account");
}
