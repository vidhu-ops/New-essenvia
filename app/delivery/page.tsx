import Link from "next/link";
import { DeliveryRunActions } from "@/components/admin/DeliveryRunActions";
import { ConsoleLayout } from "@/components/essentra/ConsoleLayout";
import { getSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export default async function DeliveryAppPage() {
  const session = await getSession();
  const where =
    session?.role === "DELIVERY"
      ? { driverUserId: session.id, stage: { notIn: ["DELIVERED", "FAILED"] } }
      : { stage: { notIn: ["DELIVERED", "FAILED"] } };

  const runs = await prisma.deliveryRun.findMany({
    where,
    include: { order: { include: { customer: true } } },
    orderBy: { scheduledFor: "asc" },
  });

  return (
    <ConsoleLayout title="Delivery" allowed={["DELIVERY", "ADMIN", "MANAGER"]}>
      <h1 className="font-display text-2xl text-ink">Today&apos;s drops</h1>
      <p className="mt-2 text-sm text-ink-muted">Mark out for delivery, then delivered when the box is handed off.</p>
      <ul className="mt-8 space-y-4">
        {runs.map((r) => (
          <li key={r.id} className="rounded-lg border border-line bg-paper-warm p-5">
            <p className="font-mono font-medium">{r.order.orderNumber}</p>
            <p className="mt-1 text-sm">
              {r.order.customer.firstName} {r.order.customer.lastName}
            </p>
            <p className="text-sm text-ink-muted">
              {r.order.customer.addressLine1}, {r.order.customer.city} {r.order.customer.postalCode}
            </p>
            {r.order.customer.deliveryNotes && (
              <p className="mt-2 text-sm text-ink-soft">Note: {r.order.customer.deliveryNotes}</p>
            )}
            <p className="mt-2 text-xs text-ink-soft">Status: {r.stage.replaceAll("_", " ")}</p>
            <div className="mt-3">
              <DeliveryRunActions runId={r.id} stage={r.stage} />
            </div>
          </li>
        ))}
        {runs.length === 0 && <p className="text-ink-muted">No stops assigned. Check back when dispatch releases orders.</p>}
      </ul>
      <Link href="/admin/delivery" className="mt-8 inline-block text-sm text-green-light underline">
        Admin: assign drivers
      </Link>
    </ConsoleLayout>
  );
}
