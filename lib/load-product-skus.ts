import { staticCatalog, type CatalogRow } from "@/lib/static-catalog";
import { prisma } from "@/lib/prisma";

export async function loadActiveProductSkus(): Promise<CatalogRow[]> {
  try {
    return await prisma.productSku.findMany({
      where: { active: true },
      include: { brand: true, category: true },
      orderBy: [{ category: { sortOrder: "asc" } }, { skuCode: "asc" }],
    });
  } catch {
    return staticCatalog();
  }
}