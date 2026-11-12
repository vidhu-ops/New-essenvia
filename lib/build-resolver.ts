import type { ProductSku } from "@prisma/client";
import type { BuildSelections, Frequency } from "@/lib/build-types";

function householdMult(size: string): number {
  const n = parseInt(size.replace("+", ""), 10) || 2;
  if (n >= 5) return 2;
  if (n >= 4) return 2;
  if (n >= 3) return 1.5;
  return 1;
}

function freqMult(f: Frequency): number {
  if (f === "heavy") return 2;
  if (f === "typical") return 1;
  return 1;
}

function roundQty(n: number): number {
  return Math.max(1, Math.round(n));
}

/** Map household + usage frequencies to SKUs and quantities. */
export function resolveBasket(
  selections: BuildSelections,
  skus: ProductSku[],
): { skuId: string; quantity: number }[] {
  const byCode = new Map(skus.map((s) => [s.skuCode, s]));
  const hMult = householdMult(selections.householdSize);
  const laundryMult = freqMult(selections.laundryFrequency) * hMult;
  const dishesMult = freqMult(selections.dishesFrequency) * hMult;
  const cleanMult = freqMult(selections.cleaningFrequency) * hMult;

  const laundryCode =
    selections.laundryBrand === "gain"
      ? selections.laundryFrequency === "heavy"
        ? "GN-L-LIQ"
        : "GN-L-LIQ"
      : selections.laundryFrequency === "heavy"
        ? "TD-L-LIQ"
        : "TD-L-LIQ";

  const dishPodCode =
    selections.dishesFrequency === "heavy" || hMult >= 2 ? "CS-POD-43" : "CS-POD-14";

  const tpCode = hMult <= 1 && selections.cleaningFrequency !== "heavy" ? "CH-12" : "CH-24";
  const tpQty = roundQty(
    hMult * (selections.cleaningFrequency === "heavy" ? 1.5 : selections.cleaningFrequency === "light" ? 1 : 1.15),
  );

  const lines: { skuId: string; quantity: number }[] = [];
  const add = (code: string, qty: number) => {
    if (qty <= 0) return;
    const sku = byCode.get(code);
    if (sku) lines.push({ skuId: sku.id, quantity: qty });
  };

  add(laundryCode, roundQty(laundryMult));
  add(tpCode, tpQty);
  add("BN-6", roundQty(cleanMult * (selections.cleaningFrequency === "heavy" ? 1.5 : 1)));
  add(dishPodCode, roundQty(dishesMult));
  add("DW-STD", roundQty(dishesMult));
  add("GL-LG", 1);
  add("GL-KT", hMult >= 2 ? 2 : 1);
  add("CL-AP", roundQty(cleanMult));
  add("WP-80", roundQty(cleanMult));

  if (selections.extras.includes("fabric-softener")) add("SF-LS", 1);
  if (selections.extras.includes("wipes")) add("WP-80", roundQty(cleanMult));
  if (selections.extras.includes("garbage-large")) add("GL-LG", 2);

  const merged = new Map<string, number>();
  for (const l of lines) {
    merged.set(l.skuId, (merged.get(l.skuId) ?? 0) + l.quantity);
  }
  return Array.from(merged.entries()).map(([skuId, quantity]) => ({ skuId, quantity }));
}
