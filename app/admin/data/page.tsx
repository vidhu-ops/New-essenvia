import { AdminShell } from "@/components/admin/AdminShell";
import { prisma } from "@/lib/prisma";

const tables: { label: string; count: () => Promise<number> }[] = [
  { label: "Users", count: () => prisma.user.count() },
  { label: "Customers", count: () => prisma.customer.count() },
  { label: "Subscriptions", count: () => prisma.subscription.count() },
  { label: "Orders", count: () => prisma.order.count() },
  { label: "Order line items", count: () => prisma.orderLineItem.count() },
  { label: "Product SKUs", count: () => prisma.productSku.count() },
  { label: "Categories", count: () => prisma.category.count() },
  { label: "Brands", count: () => prisma.brand.count() },
  { label: "Packages", count: () => prisma.subscriptionPackage.count() },
  { label: "Production jobs", count: () => prisma.productionJob.count() },
  { label: "Delivery runs", count: () => prisma.deliveryRun.count() },
  { label: "Audit log", count: () => prisma.auditLog.count() },
  { label: "Login tokens", count: () => prisma.loginToken.count() },
  { label: "Site settings", count: () => prisma.siteSetting.count() },
];

export default async function AdminDatabasePage() {
  const rows = await Promise.all(
    tables.map(async (t) => ({ label: t.label, count: await t.count() })),
  );

  return (
    <AdminShell title="Database">
      <h1 className="font-display text-2xl text-ink">Database view</h1>
      <p className="mt-2 text-sm text-ink-muted">Read-only row counts. Use Prisma Studio locally for deep edits.</p>
      <table className="mt-8 w-full max-w-lg text-left text-sm">
        <thead>
          <tr className="border-b border-line text-ink-soft">
            <th className="py-2">Table</th>
            <th className="py-2 text-right">Rows</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.label} className="border-b border-line/70">
              <td className="py-2 font-medium">{r.label}</td>
              <td className="py-2 text-right font-mono">{r.count}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </AdminShell>
  );
}
