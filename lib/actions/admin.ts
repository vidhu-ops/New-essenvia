"use server";

import { revalidatePath } from "next/cache";
import { writeAudit } from "@/lib/audit";
import { requireRole } from "@/lib/auth-server";
import { prisma } from "@/lib/prisma";

export async function updateSkuInventory(skuId: string, inventoryOnHand: number, wholesaleCostCents: number) {
  const actor = await requireRole(["ADMIN", "MANAGER"]);
  await prisma.productSku.update({
    where: { id: skuId },
    data: { inventoryOnHand, wholesaleCostCents },
  });
  await writeAudit({
    actorId: actor.id,
    actorEmail: actor.email,
    action: "UPDATE",
    entity: "ProductSku",
    entityId: skuId,
    detail: JSON.stringify({ inventoryOnHand, wholesaleCostCents }),
  });
  revalidatePath("/admin/catalog");
}

export async function updatePackageThresholds(
  packageId: string,
  data: { priceCents: number; minInternalCostCents: number; maxInternalCostCents: number }
) {
  const actor = await requireRole(["ADMIN", "MANAGER"]);
  await prisma.subscriptionPackage.update({ where: { id: packageId }, data });
  await writeAudit({
    actorId: actor.id,
    actorEmail: actor.email,
    action: "UPDATE",
    entity: "SubscriptionPackage",
    entityId: packageId,
    detail: JSON.stringify(data),
  });
  revalidatePath("/admin/packages");
}

export async function updateOrderStatus(orderId: string, status: string) {
  const actor = await requireRole(["ADMIN", "MANAGER", "WAREHOUSE"]);
  await prisma.order.update({ where: { id: orderId }, data: { status } });
  await writeAudit({
    actorId: actor.id,
    actorEmail: actor.email,
    action: "UPDATE",
    entity: "Order",
    entityId: orderId,
    detail: status,
  });
  revalidatePath("/warehouse");
  revalidatePath("/admin/orders");
}
