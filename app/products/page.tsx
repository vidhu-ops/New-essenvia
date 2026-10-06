import { MarketingLayout } from "@/components/essentra/MarketingLayout";

const categories = [
  "Laundry detergent",
  "Toilet paper",
  "Paper towels",
  "Dishwasher pods",
  "Dish soap",
  "Large garbage bags",
  "Kitchen garbage bags",
  "Fabric softener",
  "Multi-surface cleaner",
  "Disinfecting wipes",
];

export default function ProductsPage() {
  return (
    <MarketingLayout>
      <div className="mx-auto max-w-4xl px-4 py-16">
        <h1 className="font-serif text-4xl text-[#1B4332]">Our product categories</h1>
        <p className="mt-4 text-[#64748B]">
          Essentra is not a marketplace with hundreds of SKUs on the homepage. You choose preferences inside the builder;
          we handle the bundle. National brands (Tide, Charmin, Bounty, etc.) are configured in admin—not hard-coded.
        </p>
        <ul className="mt-10 grid gap-3 sm:grid-cols-2">
          {categories.map((c) => (
            <li key={c} className="rounded-xl border border-[#E2E8F0] bg-white px-5 py-4 text-sm font-medium">
              {c}
            </li>
          ))}
        </ul>
      </div>
    </MarketingLayout>
  );
}
