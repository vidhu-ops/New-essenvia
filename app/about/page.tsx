import { MarketingLayout } from "@/components/essentra/MarketingLayout";

export default function AboutPage() {
  return (
    <MarketingLayout>
      <div className="mx-auto max-w-3xl px-5 py-16">
        <h1 className="font-display text-4xl text-ink">About Essentra</h1>
        <p className="mt-6 text-[17px] leading-relaxed text-ink-muted">
          Essentra is a subscription household essentials delivery company for Canada. We deliver recognizable national
          brands your family already buys — Tide, Charmin, Bounty, Dawn, and more — in one customized box and one monthly
          price.
        </p>
      </div>
    </MarketingLayout>
  );
}
