import Link from "next/link";
import { HeroPhoto } from "@/components/essentra/HeroPhoto";
import { HumanCta } from "@/components/essentra/HumanCta";
import { MarketingLayout } from "@/components/essentra/MarketingLayout";

export default function HomePage() {
  return (
    <MarketingLayout>
      {/* Hero — asymmetric, editorial */}
      <section className="mx-auto max-w-5xl px-5 pb-16 pt-10 md:pb-24 md:pt-16">
        <div className="grid items-start gap-12 md:grid-cols-[1.1fr_0.9fr] md:gap-16">
          <div className="md:pt-6">
            <p className="text-[14px] uppercase tracking-[0.12em] text-ink-soft">Household essentials · Canada</p>
            <h1 className="mt-4 font-display text-[2.35rem] leading-[1.12] text-ink md:text-[3rem]">
              Your household essentials. Delivered automatically.
            </h1>
            <p className="mt-6 max-w-lg text-[17px] leading-[1.65] text-ink-muted">
              Get the brands and everyday essentials your household already uses, customized to your needs and delivered
              directly to your door.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <HumanCta href="/build/step-1">Build My Essentra Box</HumanCta>
              <HumanCta href="/how-it-works" variant="secondary">
                See How It Works
              </HumanCta>
            </div>
            <p className="mt-8 text-[15px] text-ink-soft">
              Takes about five minutes. You can skip or pause a month if life gets busy—we mean that.
            </p>
          </div>
          <HeroPhoto />
        </div>
      </section>

      {/* Steps — prose column, not three identical cards */}
      <section className="border-y border-line bg-paper-warm">
        <div className="mx-auto max-w-5xl px-5 py-16 md:py-20">
          <h2 className="font-display text-2xl text-ink md:text-[1.75rem]">How it works (the short version)</h2>
          <ol className="mt-10 max-w-2xl space-y-10 text-[17px] leading-relaxed text-ink-muted">
            <li>
              <span className="font-medium text-ink">1. Your household.</span> How many people, how fast you go through
              paper goods, which detergent you already buy.
            </li>
            <li>
              <span className="font-medium text-ink">2. Your box & plan.</span> We match you to Essential, Family, or
              Plus—based on your mix, not “small/medium/large” on every single item.
            </li>
            <li>
              <span className="font-medium text-ink">3. Delivery.</span> Same preferences next time unless you change them
              before we pack. One charge. One receipt.
            </li>
          </ol>
          <HumanCta href="/build/step-1" variant="text" className="mt-8 inline-block">
            Try the question flow →
          </HumanCta>
        </div>
      </section>

      {/* Pricing — honest, not card grid */}
      <section className="mx-auto max-w-5xl px-5 py-16 md:py-20">
        <h2 className="font-display text-2xl text-ink">What you’ll pay</h2>
        <p className="mt-4 max-w-xl text-[17px] text-ink-muted">
          Three plans. You see <em className="text-ink">one</em> number on your bill—we don’t add “+$4 for pods” at
          checkout.
        </p>
        <ul className="mt-10 divide-y divide-line border-y border-line">
          <li className="flex flex-wrap items-baseline justify-between gap-2 py-5">
            <div>
              <p className="font-medium text-ink">Essentra Essential</p>
              <p className="mt-1 text-[15px] text-ink-soft">Lighter use across the board</p>
            </div>
            <p className="font-display text-2xl text-ink">
              $120.99<span className="font-body text-sm text-ink-soft">/mo + tax</span>
            </p>
          </li>
          <li className="flex flex-wrap items-baseline justify-between gap-2 bg-[#f0ebe3]/50 py-5 pl-0 md:pl-4">
            <div>
              <p className="font-medium text-ink">Essentra Family</p>
              <p className="mt-1 text-[15px] text-ink-soft">What most homes land on after the questionnaire</p>
            </div>
            <p className="font-display text-2xl text-ink">
              $134.99<span className="font-body text-sm text-ink-soft">/mo + tax</span>
            </p>
          </li>
          <li className="flex flex-wrap items-baseline justify-between gap-2 py-5">
            <div>
              <p className="font-medium text-ink">Essentra Plus</p>
              <p className="mt-1 text-[15px] text-ink-soft">Heavier on detergent, paper, or both</p>
            </div>
            <p className="font-display text-2xl text-ink">
              $149.99<span className="font-body text-sm text-ink-soft">/mo + tax</span>
            </p>
          </li>
        </ul>
        <Link href="/plans" className="mt-6 inline-block text-[15px] text-green-light underline decoration-line underline-offset-4">
          A bit more on how plans are picked
        </Link>
      </section>

      {/* Categories — plain list in copy */}
      <section className="border-t border-line bg-paper-warm px-5 py-16">
        <div className="mx-auto max-w-5xl">
          <h2 className="font-display text-2xl text-ink">What goes in the box</h2>
          <p className="mt-4 max-w-2xl text-[17px] leading-relaxed text-ink-muted">
            Roughly ten categories to start: laundry, toilet paper, towels, dish pods, dish soap, garbage bags (kitchen
            and large), fabric softener, surface cleaner, disinfecting wipes. Brands depend on what we can source well in
            Canada—you’ll pick preferences, not hunt SKUs.
          </p>
          <HumanCta href="/products" variant="text" className="mt-6 inline-block">
            See the category list →
          </HumanCta>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-20 text-center md:text-left">
        <p className="font-display text-[1.65rem] leading-snug text-ink md:max-w-lg">
          If you’re tired of repeating the same store run every month, start with the questionnaire.
        </p>
        <div className="mt-8 md:mt-6">
          <HumanCta href="/build/step-1">Build my box</HumanCta>
        </div>
      </section>
    </MarketingLayout>
  );
}
