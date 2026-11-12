import { NextResponse } from "next/server";
import { resolveBasket } from "@/lib/build-resolver";
import type { BuildSelections } from "@/lib/build-types";
import { formatCad, qualifyPackage, totalWholesaleCents } from "@/lib/package-engine";
import { imageForSku } from "@/lib/product-images";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  const body = (await req.json()) as { selections: BuildSelections };
  const skus = await prisma.productSku.findMany({ where: { active: true }, include: { brand: true, category: true } });
  const packages = await prisma.subscriptionPackage.findMany({ where: { active: true } });
  const lines = resolveBasket(body.selections, skus);
  const skuMap = new Map(skus.map((s) => [s.id, s]));
  const internal = totalWholesaleCents(lines, skuMap);
  const pkg = qualifyPackage(internal, packages);

  const items = lines.map((l) => {
    const sku = skuMap.get(l.skuId)!;
    const img = imageForSku(sku.skuCode, sku.customerDescription);
    return {
      description: sku.customerDescription,
      brand: sku.brand.name,
      quantity: l.quantity,
      sizeLabel: sku.sizeLabel,
      imageUrl: sku.imageUrl ?? img.src,
      imageAlt: img.alt,
    };
  });

  return NextResponse.json({
    packageName: pkg.name,
    packageSlug: pkg.slug,
    monthlyPriceCents: pkg.priceCents,
    monthlyPriceDisplay: formatCad(pkg.priceCents),
    items,
    internalCostCents: internal,
  });
}
