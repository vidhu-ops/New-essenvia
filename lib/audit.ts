import { prisma } from "@/lib/prisma";

export async function writeAudit(input: {
  actorId?: string;
  actorEmail?: string;
  action: string;
  entity: string;
  entityId?: string;
  detail?: string;
}) {
  await prisma.auditLog.create({ data: input });
}
