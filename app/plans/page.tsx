import { MarketingLayout } from "@/components/essentra/MarketingLayout";
import { HumanCta } from "@/components/essentra/HumanCta";

export default function PlansPage() {
  return (
    <MarketingLayout>
      <article className="mx-auto max-w-2xl px-5 py-16 md:py-20">
        <h1 className="font-display text-[2rem] text-ink">Pricing</h1>
        <p className="mt-6 text-[17px] leading-[1.7] text-ink-muted">
          You’ll see one line on your receipt. We don’t show a low price then add fees for brand names or bigger rolls.
        </p>
        <dl className="mt-10 space-y-8">
          <div>
            <dt className="font-medium text-ink">Essentra Essential — $84.99/mo + tax</dt>
            <dd className="mt-2 text-[16px] text-ink-muted">For homes that use a bit less across categories.</dd>
          </div>
          <div>
            <dt className="font-medium text-ink">Essentra Family — $94.99/mo + tax</dt>
            <dd className="mt-2 text-[16px] text-ink-muted">The usual fit after the questionnaire.</dd>
          </div>
          <div>
            <dt className="font-medium text-ink">Essentra Plus — $104.99/mo + tax</dt>
            <dd className="mt-2 text-[16px] text-ink-muted">When you go through paper or detergent fast.</dd>
          </div>
        </dl>
        <p className="mt-10 text-[15px] text-ink-soft">Plan names and amounts can be adjusted in our admin tools—not hard-coded forever.</p>
        <HumanCta href="/build/step-1" className="mt-8 inline-block">
          Find my plan
        </HumanCta>
      </article>
    </MarketingLayout>
  );
}
