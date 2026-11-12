import { AdminShell } from "@/components/admin/AdminShell";
import { prisma } from "@/lib/prisma";
import { formatCad } from "@/lib/package-engine";

export default async function AdminCustomersPage() {
  const customers = await prisma.customer.findMany({
    include: { subscriptions: { include: { package: true } }, user: true },
    orderBy: { lastName: "asc" },
  });
  return (
    <AdminShell title="Customers">
      <h1 className="font-display text-2xl text-ink">Customers & subscriptions</h1>
      <ul className="mt-6 space-y-3 text-sm">
        {customers.map((c) => (
          <li key={c.id} className="rounded border border-line p-4">
            <span className="font-medium">
              {c.firstName} {c.lastName}
            </span>{" "}
            · {c.user.email}
            {c.subscriptions[0] && (
              <span className="text-ink-muted">
                {" "}
                · {c.subscriptions[0].package.name} ${formatCad(c.subscriptions[0].monthlyPriceCents)}/mo
              </span>
            )}
          </li>
        ))}
        {customers.length === 0 && <p className="text-ink-muted">No customers yet — run a checkout on the website.</p>}
      </ul>
    </AdminShell>
  );
}
