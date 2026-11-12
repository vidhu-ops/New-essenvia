import { AdminShell } from "@/components/admin/AdminShell";
import { ProductionJobActions } from "@/components/admin/ProductionJobActions";
import { prisma } from "@/lib/prisma";

export default async function AdminProductionPage() {
  const jobs = await prisma.productionJob.findMany({
    include: {
      order: { include: { customer: true } },
    },
    orderBy: [{ priority: "desc" }, { createdAt: "asc" }],
  });

  return (
    <AdminShell title="Production line">
      <h1 className="font-display text-2xl text-ink">Production line</h1>
      <p className="mt-2 text-sm text-ink-muted">
        Queued → Packing → QC → Ready for dispatch. Completing dispatch creates a delivery run.
      </p>
      <div className="mt-8 overflow-x-auto">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead>
            <tr className="border-b border-line text-ink-soft">
              <th className="py-2">Order</th>
              <th className="py-2">Customer</th>
              <th className="py-2">Stage</th>
              <th className="py-2">Priority</th>
              <th className="py-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((j) => (
              <tr key={j.id} className="border-b border-line/70">
                <td className="py-2 font-mono text-xs">{j.order.orderNumber}</td>
                <td className="py-2">
                  {j.order.customer.firstName} {j.order.customer.lastName}
                </td>
                <td className="py-2">{j.stage.replaceAll("_", " ")}</td>
                <td className="py-2">{j.priority}</td>
                <td className="py-2">
                  <ProductionJobActions jobId={j.id} stage={j.stage} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {jobs.length === 0 && (
          <p className="py-8 text-center text-ink-muted">No jobs yet. Complete a checkout to enqueue production.</p>
        )}
      </div>
    </AdminShell>
  );
}
