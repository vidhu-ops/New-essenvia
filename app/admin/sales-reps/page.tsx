import { AdminShell } from "@/components/admin/AdminShell";
import { prisma } from "@/lib/prisma";

export default async function AdminSalesRepsPage() {
  const reps = await prisma.user.findMany({
    where: { role: "SALES_REP" },
    orderBy: { name: "asc" },
  });
  const attributed = await prisma.customer.groupBy({
    by: ["acquiredByRepId"],
    _count: { id: true },
    where: { acquiredByRepId: { not: null } },
  });
  const countMap = new Map(attributed.map((a) => [a.acquiredByRepId, a._count.id]));

  return (
    <AdminShell title="Sales reps">
      <h1 className="font-display text-2xl text-ink">Sales rep network</h1>
      <p className="mt-2 text-sm text-ink-muted">
        Reps use the tablet flow at <code className="rounded bg-paper-warm px-1">/rep</code>. Attributed customers show
        below.
      </p>
      <table className="mt-8 w-full text-left text-sm">
        <thead>
          <tr className="border-b border-line text-ink-soft">
            <th className="py-2">Name</th>
            <th className="py-2">Email</th>
            <th className="py-2">Territory</th>
            <th className="py-2">Signups</th>
          </tr>
        </thead>
        <tbody>
          {reps.map((r) => (
            <tr key={r.id} className="border-b border-line/70">
              <td className="py-2">{r.name}</td>
              <td className="py-2">{r.email}</td>
              <td className="py-2">{r.repTerritory ?? "—"}</td>
              <td className="py-2">{countMap.get(r.id) ?? 0}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </AdminShell>
  );
}
