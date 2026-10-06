import { HumanCta } from "@/components/essentra/HumanCta";
import { MarketingLayout } from "@/components/essentra/MarketingLayout";

export default function HowItWorksPage() {
  return (
    <MarketingLayout>
      <article className="mx-auto max-w-2xl px-5 py-16 md:py-20">
        <h1 className="font-display text-[2rem] text-ink">How Essentra works</h1>
        <p className="mt-6 text-[17px] leading-[1.7] text-ink-muted">
          We’re not trying to be another online store with 4,000 SKUs. You answer a short set of questions—mostly “what do
          you buy already?”—and we figure out the box and the plan.
        </p>
        <p className="mt-6 text-[17px] leading-[1.7] text-ink-muted">
          Your toilet paper usage might be high and your detergent moderate. That’s normal. The plan (Essential, Family,
          or Plus) comes from the whole picture, not three sizes of everything.
        </p>
        <p className="mt-6 text-[17px] leading-[1.7] text-ink-muted">
          After you subscribe, you can swap a brand or skip a month before we pack. We’ll spell out cut-off dates clearly
          before launch.
        </p>
        <HumanCta href="/build/step-1" className="mt-10 inline-block">
          Start the questions
        </HumanCta>
      </article>
    </MarketingLayout>
  );
}
