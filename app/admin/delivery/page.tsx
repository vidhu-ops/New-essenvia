import { AdminShell } from "@/components/admin/AdminShell";
import { DeliveryAssignForm } from "@/components/admin/DeliveryAssignForm";
import { DeliveryRunActions } from "@/components/admin/DeliveryRunActions";
import { prisma } from "@/lib/prisma";

export default async function AdminDeliveryPage() {
  const [runs, drivers] = await Promise.all([
    prisma.deliveryRun.findMany({
      include: { order: { include: { customer: true } } },
      orderBy: { scheduledFor: "asc" },
    }),
    prisma.user.findMany({ where: { role: "DELIVERY" }, orderBy: { name: "asc" } }),
  ]);

  return (
    <AdminShell title="Delivery ops">
      <h1 className="font-display text-2xl text-ink">Delivery operations</h1>
      <p className="mt-2 text-sm text-ink-muted">Assign drivers from delivery staff. Drivers use the delivery app.</p>
      <div className="mt-8 space-y-4">
        {runs.map((r) => (
          <div key={r.id} className="rounded-lg border border-line bg-white p-4">
            <div className="flex flex-wrap justify-between gap-2">
              <span className="font-mono font-medium">{r.order.orderNumber}</span>
              <span className="text-sm text-ink-muted">{r.stage.replaceAll("_", " ")}</span>
            </div>
            <p className="mt-1 text-sm text-ink-muted">
              {r.order.customer.firstName} {r.order.customer.lastName} · {r.order.customer.city}
            </p>
            <div className="mt-3 flex flex-wrap items-center gap-3">
              {r.stage === "UNASSIGNED" && drivers.length > 0 && (
                <DeliveryAssignForm runId={r.id} drivers={drivers.map((d) => ({ id: d.id, name: d.name }))} />
              )}
              <DeliveryRunActions runId={r.id} stage={r.stage} />
            </div>
          </div>
        ))}
        {runs.length === 0 && (
          <p className="text-ink-muted">No delivery runs. Finish production (dispatch) on an order first.</p>
        )}
      </div>
    </AdminShell>
  );
}
