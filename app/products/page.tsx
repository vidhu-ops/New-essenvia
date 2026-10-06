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
      <article className="mx-auto max-w-2xl px-5 py-16">
        <h1 className="font-display text-[2rem] text-ink">Categories we cover first</h1>
        <p className="mt-6 text-[17px] leading-relaxed text-ink-muted">
          National brands where supply makes sense—Tide, Charmin, Bounty, and the rest of your list from the brief. The
          exact SKUs live in our catalog, not in the website code.
        </p>
        <ul className="mt-10 list-inside list-disc space-y-2 text-[16px] text-ink-muted">
          {categories.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </article>
    </MarketingLayout>
  );
}
