import { productImageBySku } from "@/lib/product-images";

/** Marketing fallback when the database is not wired (e.g. first Vercel deploy before seed). */
export type CatalogRow = {
  id: string;
  skuCode: string;
  sizeLabel: string;
  customerDescription: string;
  imageUrl: string | null;
  brand: { name: string };
  category: { name: string; sortOrder: number };
};

const rows: Omit<CatalogRow, "id">[] = [
  { skuCode: "TD-L-LIQ", brand: { name: "Tide" }, category: { name: "Laundry detergent", sortOrder: 1 }, sizeLabel: "1.09 L", customerDescription: "Tide liquid laundry detergent", imageUrl: productImageBySku["TD-L-LIQ"]?.src ?? null },
  { skuCode: "GN-L-LIQ", brand: { name: "Gain" }, category: { name: "Laundry detergent", sortOrder: 1 }, sizeLabel: "1.02 L", customerDescription: "Gain liquid laundry detergent", imageUrl: productImageBySku["GN-L-LIQ"]?.src ?? null },
  { skuCode: "CH-12", brand: { name: "Charmin" }, category: { name: "Toilet paper", sortOrder: 2 }, sizeLabel: "12 rolls", customerDescription: "Charmin bath tissue — 12 mega rolls", imageUrl: productImageBySku["CH-12"]?.src ?? null },
  { skuCode: "CH-24", brand: { name: "Charmin" }, category: { name: "Toilet paper", sortOrder: 2 }, sizeLabel: "24 rolls", customerDescription: "Charmin bath tissue — 24 mega rolls", imageUrl: productImageBySku["CH-24"]?.src ?? null },
  { skuCode: "BN-6", brand: { name: "Bounty" }, category: { name: "Paper towels", sortOrder: 3 }, sizeLabel: "6 rolls", customerDescription: "Bounty select-a-size paper towels", imageUrl: productImageBySku["BN-6"]?.src ?? null },
  { skuCode: "CS-POD-14", brand: { name: "Cascade" }, category: { name: "Dishwasher pods", sortOrder: 4 }, sizeLabel: "14 ct", customerDescription: "Cascade ActionPacs — 14 count", imageUrl: productImageBySku["CS-POD-14"]?.src ?? null },
  { skuCode: "CS-POD-43", brand: { name: "Cascade" }, category: { name: "Dishwasher pods", sortOrder: 4 }, sizeLabel: "43 ct", customerDescription: "Cascade ActionPacs — 43 count", imageUrl: productImageBySku["CS-POD-43"]?.src ?? null },
  { skuCode: "DW-STD", brand: { name: "Dawn" }, category: { name: "Dish soap", sortOrder: 5 }, sizeLabel: "573 mL", customerDescription: "Dawn ultra dish soap", imageUrl: productImageBySku["DW-STD"]?.src ?? null },
  { skuCode: "GL-LG", brand: { name: "Glad" }, category: { name: "Large garbage bags", sortOrder: 6 }, sizeLabel: "20 bags", customerDescription: "Glad ForceFlex large drawstring bags", imageUrl: productImageBySku["GL-LG"]?.src ?? null },
  { skuCode: "GL-KT", brand: { name: "Glad" }, category: { name: "Kitchen garbage bags", sortOrder: 7 }, sizeLabel: "40 bags", customerDescription: "Glad kitchen catchers", imageUrl: productImageBySku["GL-KT"]?.src ?? null },
  { skuCode: "SF-LS", brand: { name: "Gain" }, category: { name: "Fabric softener", sortOrder: 8 }, sizeLabel: "1.53 L", customerDescription: "Gain liquid fabric softener", imageUrl: productImageBySku["SF-LS"]?.src ?? null },
  { skuCode: "CL-AP", brand: { name: "Dawn" }, category: { name: "All-purpose cleaner", sortOrder: 9 }, sizeLabel: "828 mL", customerDescription: "Spray all-purpose cleaner", imageUrl: productImageBySku["CL-AP"]?.src ?? null },
  { skuCode: "WP-80", brand: { name: "Hefty" }, category: { name: "Disinfecting wipes", sortOrder: 10 }, sizeLabel: "80 ct", customerDescription: "Disinfecting wipes canister", imageUrl: productImageBySku["WP-80"]?.src ?? null },
];

export function staticCatalog(): CatalogRow[] {
  return rows.map((d, i) => ({ ...d, id: `static-${i}` }));
}