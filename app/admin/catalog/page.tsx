import { AdminShell } from "@/components/admin/AdminShell";
import { CatalogSkuRow } from "@/components/admin/CatalogSkuRow";
import { prisma } from "@/lib/prisma";

export default async function AdminCatalogPage() {
  const skus = await prisma.productSku.findMany({
    include: { brand: true, category: true },
    orderBy: { skuCode: "asc" },
  });

  return (
    <AdminShell title="Catalog">
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
              <th className="py-2">Edit</th>
            </tr>
          </thead>
          <tbody>
            {skus.map((s) => (
              <CatalogSkuRow
                key={s.id}
                id={s.id}
                skuCode={s.skuCode}
                category={s.category.name}
                label={`${s.brand.name} · ${s.customerDescription}`}
                wholesaleCostCents={s.wholesaleCostCents}
                inventoryOnHand={s.inventoryOnHand}
                warehouseBin={s.warehouseBin}
              />
            ))}
          </tbody>
        </table>
      </div>
    </AdminShell>
  );
}
