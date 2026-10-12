import { ConsoleLayout } from "@/components/essentra/ConsoleLayout";
import { prisma } from "@/lib/prisma";
import { formatCad } from "@/lib/package-engine";

export default async function AdminPackagesPage() {
  const packages = await prisma.subscriptionPackage.findMany({ orderBy: { sortOrder: "asc" } });
  return (
    <ConsoleLayout title="Admin" allowed={["ADMIN", "MANAGER"]}>
      <h1 className="font-display text-2xl text-ink">Package engine thresholds</h1>
      <p className="mt-2 text-sm text-ink-muted">
        Customer sees one price per plan. Backend sums wholesale cost of the basket and picks the qualifying package.
      </p>
      <table className="mt-6 w-full text-left text-sm">
        <thead>
          <tr className="border-b border-line text-ink-soft">
            <th className="py-2">Package</th>
            <th className="py-2">Customer price</th>
            <th className="py-2">Min internal ¢</th>
            <th className="py-2">Max internal ¢</th>
          </tr>
        </thead>
        <tbody>
          {packages.map((p) => (
            <tr key={p.id} className="border-b border-line/80">
              <td className="py-2">{p.name}</td>
              <td className="py-2">${formatCad(p.priceCents)}</td>
              <td className="py-2">{p.minInternalCostCents}</td>
              <td className="py-2">{p.maxInternalCostCents}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </ConsoleLayout>
  );
}
