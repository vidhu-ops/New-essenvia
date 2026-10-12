import { ConsoleLayout } from "@/components/essentra/ConsoleLayout";
import { prisma } from "@/lib/prisma";
import { formatCad } from "@/lib/package-engine";

export default async function AdminHome() {
  const [subs, orders, skus, packages] = await Promise.all([
    prisma.subscription.count({ where: { status: "ACTIVE" } }),
    prisma.order.count(),
    prisma.productSku.count({ where: { active: true } }),
    prisma.subscriptionPackage.findMany({ orderBy: { sortOrder: "asc" } }),
  ]);

  return (
    <ConsoleLayout title="Admin" allowed={["ADMIN", "MANAGER"]}>
      <h1 className="font-display text-3xl text-ink">Operating console</h1>
      <p className="mt-2 max-w-2xl text-ink-muted">
        Manage catalogue, package thresholds, subscriptions, and orders without changing code — as specified in your
        platform brief.
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <div className="rounded-lg border border-line bg-paper-warm p-5">
          <p className="text-sm text-ink-soft">Active subscribers</p>
          <p className="font-display text-3xl text-ink">{subs}</p>
        </div>
        <div className="rounded-lg border border-line bg-paper-warm p-5">
          <p className="text-sm text-ink-soft">Orders</p>
          <p className="font-display text-3xl text-ink">{orders}</p>
        </div>
        <div className="rounded-lg border border-line bg-paper-warm p-5">
          <p className="text-sm text-ink-soft">Active SKUs</p>
          <p className="font-display text-3xl text-ink">{skus}</p>
        </div>
      </div>
      <h2 className="mt-12 font-display text-xl text-ink">Packages (customer-facing prices)</h2>
      <table className="mt-4 w-full text-left text-sm">
        <thead>
          <tr className="border-b border-line text-ink-soft">
            <th className="py-2">Plan</th>
            <th className="py-2">Monthly price</th>
            <th className="py-2">Internal cost band (¢)</th>
          </tr>
        </thead>
        <tbody>
          {packages.map((p) => (
            <tr key={p.id} className="border-b border-line/80">
              <td className="py-2 font-medium">{p.name}</td>
              <td className="py-2">${formatCad(p.priceCents)} + tax</td>
              <td className="py-2">
                {p.minInternalCostCents} – {p.maxInternalCostCents}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </ConsoleLayout>
  );
}
