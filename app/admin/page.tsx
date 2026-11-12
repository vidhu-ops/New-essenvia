import Link from "next/link";
import { AdminShell } from "@/components/admin/AdminShell";
import { adminModules } from "@/lib/admin-modules";
import { prisma } from "@/lib/prisma";
import { formatCad } from "@/lib/package-engine";

export default async function AdminHome() {
  const [subs, orders, skus, productionQueued, deliveryOpen, packages] = await Promise.all([
    prisma.subscription.count({ where: { status: "ACTIVE" } }),
    prisma.order.count(),
    prisma.productSku.count({ where: { active: true } }),
    prisma.productionJob.count({ where: { stage: { not: "READY_FOR_DISPATCH" } } }),
    prisma.deliveryRun.count({ where: { stage: { notIn: ["DELIVERED", "FAILED"] } } }),
    prisma.subscriptionPackage.findMany({ orderBy: { sortOrder: "asc" } }),
  ]);

  return (
    <AdminShell title="Overview">
      <h1 className="font-display text-3xl text-ink">Backend admin</h1>
      <p className="mt-2 max-w-2xl text-ink-muted">
        Connect operations one module at a time. Production line is live: every paid order enters the pack queue
        automatically.
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <Stat label="Active subs" value={subs} />
        <Stat label="Orders" value={orders} />
        <Stat label="In production" value={productionQueued} href="/admin/production" />
        <Stat label="Open deliveries" value={deliveryOpen} href="/admin/delivery" />
      </div>
      <h2 className="mt-12 font-display text-xl text-ink">Modules</h2>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
        {adminModules
          .filter((m) => m.href !== "/admin")
          .map((m) => (
            <li key={m.href}>
              <Link
                href={m.href}
                className="block rounded-lg border border-line bg-paper-warm p-4 hover:border-green/40"
              >
                <span className="font-medium text-ink">{m.label}</span>
                {m.connected && (
                  <span className="ml-2 text-[10px] uppercase text-green-light">connected</span>
                )}
                <p className="mt-1 text-sm text-ink-muted">{m.description}</p>
              </Link>
            </li>
          ))}
      </ul>
      <h2 className="mt-12 font-display text-xl text-ink">Package prices</h2>
      <table className="mt-4 w-full text-left text-sm">
        <thead>
          <tr className="border-b border-line text-ink-soft">
            <th className="py-2">Plan</th>
            <th className="py-2">Monthly</th>
          </tr>
        </thead>
        <tbody>
          {packages.map((p) => (
            <tr key={p.id} className="border-b border-line/80">
              <td className="py-2">{p.name}</td>
              <td className="py-2">${formatCad(p.priceCents)} + tax</td>
            </tr>
          ))}
        </tbody>
      </table>
    </AdminShell>
  );
}

function Stat({ label, value, href }: { label: string; value: number; href?: string }) {
  const inner = (
    <>
      <p className="text-sm text-ink-soft">{label}</p>
      <p className="font-display text-3xl text-ink">{value}</p>
    </>
  );
  return href ? (
    <Link href={href} className="rounded-lg border border-line bg-white p-5 hover:bg-paper-warm">
      {inner}
    </Link>
  ) : (
    <div className="rounded-lg border border-line bg-white p-5">{inner}</div>
  );
}
