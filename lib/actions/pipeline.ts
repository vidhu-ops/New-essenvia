"use server";

import { revalidatePath } from "next/cache";
import { writeAudit } from "@/lib/audit";
import { requireRole } from "@/lib/auth-server";
import { advanceDeliveryRun, advanceProductionJob, assignDeliveryDriver } from "@/lib/ops";

export async function advanceProduction(jobId: string) {
  const actor = await requireRole(["ADMIN", "MANAGER", "WAREHOUSE"]);
  await advanceProductionJob(jobId);
  await writeAudit({
    actorId: actor.id,
    actorEmail: actor.email,
    action: "ADVANCE",
    entity: "ProductionJob",
    entityId: jobId,
  });
  revalidatePath("/admin/production");
  revalidatePath("/warehouse");
}

export async function advanceDelivery(runId: string) {
  const actor = await requireRole(["ADMIN", "MANAGER", "DELIVERY"]);
  await advanceDeliveryRun(runId, actor.role === "DELIVERY" ? actor.id : undefined);
  await writeAudit({
    actorId: actor.id,
    actorEmail: actor.email,
    action: "ADVANCE",
    entity: "DeliveryRun",
    entityId: runId,
  });
  revalidatePath("/delivery");
  revalidatePath("/admin/delivery");
}

export async function assignDriver(runId: string, driverUserId: string) {
  const actor = await requireRole(["ADMIN", "MANAGER"]);
  await assignDeliveryDriver(runId, driverUserId);
  await writeAudit({
    actorId: actor.id,
    actorEmail: actor.email,
    action: "ASSIGN",
    entity: "DeliveryRun",
    entityId: runId,
    detail: driverUserId,
  });
  revalidatePath("/admin/delivery");
  revalidatePath("/delivery");
}
