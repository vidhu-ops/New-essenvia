import type { ProductSku, SubscriptionPackage } from "@prisma/client";

export type BasketLine = { skuId: string; quantity: number };

export function totalWholesaleCents(lines: BasketLine[], skuMap: Map<string, ProductSku>): number {
  return lines.reduce((sum, line) => {
    const sku = skuMap.get(line.skuId);
    if (!sku) return sum;
    return sum + sku.wholesaleCostCents * line.quantity;
  }, 0);
}

/** Qualify basket internal cost to one customer-facing package (thresholds from admin). */
export function qualifyPackage(
  internalCostCents: number,
  packages: SubscriptionPackage[],
): SubscriptionPackage {
  const sorted = [...packages].filter((p) => p.active).sort((a, b) => a.sortOrder - b.sortOrder);
  for (const pkg of sorted) {
    if (internalCostCents >= pkg.minInternalCostCents && internalCostCents <= pkg.maxInternalCostCents) {
      return pkg;
    }
  }
  return sorted[sorted.length - 1];
}

export function formatCad(cents: number): string {
  return (cents / 100).toFixed(2);
}
