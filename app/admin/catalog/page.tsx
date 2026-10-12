import { ConsoleLayout } from "@/components/essentra/ConsoleLayout";
import { prisma } from "@/lib/prisma";
import { formatCad } from "@/lib/package-engine";

export default async function AdminCatalogPage() {
  const skus = await prisma.productSku.findMany({
    include: { brand: true, category: true },
    orderBy: { skuCode: "asc" },
  });

  return (
    <ConsoleLayout title="Admin" allowed={["ADMIN", "MANAGER"]}>
      <h1 className="font-display text-2xl text-ink">Catalog & wholesale costs</h1>
      <p className="mt-2 text-sm text-ink-muted">Visible to management only — never shown to customers or reps.</p>
      <div className="mt-6 overflow-x-auto">
        <table className="w-full min-w-[720px] text-left text-sm">
          <thead>
            <tr className="border-b border-line text-ink-soft">
              <th className="py-2">SKU</th>
              <th className="py-2">Category</th>
              <th className="py-2">Product</th>
              <th className="py-2">Wholesale</th>
              <th className="py-2">On hand</th>
              <th className="py-2">Bin</th>
            </tr>
          </thead>
          <tbody>
            {skus.map((s) => (
              <tr key={s.id} className="border-b border-line/70">
                <td className="py-2 font-mono text-xs">{s.skuCode}</td>
                <td className="py-2">{s.category.name}</td>
                <td className="py-2">
                  {s.brand.name} · {s.customerDescription}
                </td>
                <td className="py-2">${formatCad(s.wholesaleCostCents)}</td>
                <td className="py-2">{s.inventoryOnHand}</td>
                <td className="py-2">{s.warehouseBin}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </ConsoleLayout>
  );
}
