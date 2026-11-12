import { HumanCta } from "@/components/essentra/HumanCta";
import { MarketingLayout } from "@/components/essentra/MarketingLayout";

export default function HowItWorksPage() {
  return (
    <MarketingLayout>
      <article className="mx-auto max-w-2xl px-5 py-16">
        <h1 className="font-display text-[2rem] text-ink">How Essentra works</h1>
        <ol className="mt-8 space-y-6 text-[17px] leading-relaxed text-ink-muted">
          <li>
            <span className="font-medium text-ink">1. One short survey.</span> People in the home, plus how often you do
            laundry, dishes, and cleaning.
          </li>
          <li>
            <span className="font-medium text-ink">2. Optional extras.</span> Add softener, more wipes, or bags—only if
            you want them.
          </li>
          <li>
            <span className="font-medium text-ink">3. Deliver.</span> Your plan (Essential, Family, or Plus) and box are
            set from that mix—one monthly price.
          </li>
        </ol>
        <HumanCta href="/build/step-1" size="large" className="mt-10 inline-block">
          Start the survey
        </HumanCta>
      </article>
    </MarketingLayout>
  );
}
