import { MarketingLayout } from "@/components/essentra/MarketingLayout";

const faqs = [
  {
    q: "Is every product the same size in a plan?",
    a: "No. You might need more paper towels than detergent. That’s why we ask category by category.",
  },
  {
    q: "Will checkout surprise me with add-ons?",
    a: "No. One plan price plus tax. That’s the design.",
  },
  {
    q: "Can I skip a month?",
    a: "Yes—we’re building skip and pause into the account. Exact cut-offs will be in your subscription terms.",
  },
  {
    q: "Do you ship outside Canada?",
    a: "Canada first. Delivery zones will be configurable as we roll out.",
  },
];

export default function FAQPage() {
  return (
    <MarketingLayout>
      <article className="mx-auto max-w-2xl px-5 py-16">
        <h1 className="font-display text-[2rem] text-ink">Common questions</h1>
        <dl className="mt-10 space-y-10">
          {faqs.map((f) => (
            <div key={f.q}>
              <dt className="font-medium text-ink">{f.q}</dt>
              <dd className="mt-2 text-[16px] leading-relaxed text-ink-muted">{f.a}</dd>
            </div>
          ))}
        </dl>
      </article>
    </MarketingLayout>
  );
}
