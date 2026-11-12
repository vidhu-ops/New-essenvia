import { prisma } from "@/lib/prisma";
import { nextDeliveryStage, nextProductionStage } from "@/lib/pipeline";

export async function ensureProductionJobForOrder(orderId: string) {
  const existing = await prisma.productionJob.findUnique({ where: { orderId } });
  if (existing) return existing;
  return prisma.productionJob.create({
    data: { orderId, stage: "QUEUED" },
  });
}

export async function ensureDeliveryRunForOrder(orderId: string) {
  const existing = await prisma.deliveryRun.findUnique({ where: { orderId } });
  if (existing) return existing;
  const order = await prisma.order.findUnique({ where: { id: orderId } });
  return prisma.deliveryRun.create({
    data: {
      orderId,
      stage: "UNASSIGNED",
      scheduledFor: order?.deliveryDate ?? undefined,
    },
  });
}

export async function advanceProductionJob(jobId: string) {
  const job = await prisma.productionJob.findUnique({ where: { id: jobId } });
  if (!job) throw new Error("NOT_FOUND");
  const next = nextProductionStage(job.stage);
  if (!next) throw new Error("NO_NEXT");
  const updated = await prisma.productionJob.update({ where: { id: jobId }, data: { stage: next } });
  if (next === "READY_FOR_DISPATCH") {
    await ensureDeliveryRunForOrder(job.orderId);
    await prisma.order.update({ where: { id: job.orderId }, data: { status: "READY_FOR_DISPATCH" } });
  } else {
    await prisma.order.update({ where: { id: job.orderId }, data: { status: next } });
  }
  return updated;
}

export async function advanceDeliveryRun(runId: string, driverUserId?: string) {
  const run = await prisma.deliveryRun.findUnique({ where: { id: runId } });
  if (!run) throw new Error("NOT_FOUND");
  const next = nextDeliveryStage(run.stage);
  if (!next) throw new Error("NO_NEXT");
  const data: { stage: string; driverUserId?: string; deliveredAt?: Date } = { stage: next };
  if (driverUserId) data.driverUserId = driverUserId;
  if (next === "DELIVERED") data.deliveredAt = new Date();
  const updated = await prisma.deliveryRun.update({ where: { id: runId }, data });
  if (next === "OUT_FOR_DELIVERY") {
    await prisma.order.update({ where: { id: run.orderId }, data: { status: "OUT_FOR_DELIVERY" } });
  }
  if (next === "DELIVERED") {
    await prisma.order.update({ where: { id: run.orderId }, data: { status: "DELIVERED" } });
  }
  return updated;
}

export async function assignDeliveryDriver(runId: string, driverUserId: string) {
  return prisma.deliveryRun.update({
    where: { id: runId },
    data: { driverUserId, stage: "ASSIGNED" },
  });
}
