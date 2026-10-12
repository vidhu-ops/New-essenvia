import type { ProductSku } from "@prisma/client";
import type { BuildSelections } from "@/lib/build-types";

/** Map questionnaire answers to one SKU per category (admin catalogue drives IDs). */
export function resolveBasket(
  selections: BuildSelections,
  skus: ProductSku[],
): { skuId: string; quantity: number }[] {
  const byCode = new Map(skus.map((s) => [s.skuCode, s]));
  const household = parseInt(selections.householdSize.replace("+", ""), 10) || 2;
  const qtyMult = household >= 4 ? 2 : household >= 3 ? 1 : 1;

  const laundryCode =
    selections.laundryBrand === "gain" ? "GN-L-LIQ" : "TD-L-LIQ";

  const lines: { skuId: string; quantity: number }[] = [];
  const add = (code: string, qty = 1) => {
    const sku = byCode.get(code);
    if (sku) lines.push({ skuId: sku.id, quantity: qty });
  };

  add(laundryCode, qtyMult);
  add("CH-24", selections.toiletPaperQty === "high" ? 2 : 1);
  add("BN-6", selections.paperTowelQty === "high" ? 2 : 1);
  add("CS-POD", 1);
  add("DW-STD", 1);
  add("GL-LG", 1);
  add("GL-KT", 1);
  add("SF-LS", selections.fabricSoftener ? 1 : 0);
  add("CL-AP", 1);
  add("WP-80", 1);

  return lines.filter((l) => l.quantity > 0);
}
