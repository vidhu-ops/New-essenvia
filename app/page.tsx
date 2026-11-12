import Link from "next/link";
import { HeroPhoto } from "@/components/essentra/HeroPhoto";
import { HumanCta } from "@/components/essentra/HumanCta";
import { MarketingLayout } from "@/components/essentra/MarketingLayout";

export default function HomePage() {
  return (
    <MarketingLayout>
      <section className="mx-auto max-w-5xl px-5 pb-20 pt-12 md:pb-28 md:pt-16">
        <div className="grid items-center gap-10 md:grid-cols-2 md:gap-14">
          <div>
            <h1 className="font-display text-[2.2rem] leading-[1.12] text-ink md:text-[2.75rem]">
              All your home and cleaning needs,
              <span className="block text-green">delivered on schedule.</span>
            </h1>
            <p className="mt-5 max-w-md text-[17px] leading-relaxed text-ink-muted">
              Tell us how many people live at home and how often you run laundry, dishes, and cleaning—we size your box.
              Add extras only if you want them.
            </p>
            <div className="mt-9">
              <HumanCta href="/build/step-1" size="large" className="w-full sm:w-auto">
                Build my box
              </HumanCta>
            </div>
            <p className="mt-5 text-[15px] text-ink-soft">About 90 seconds · One monthly price · Skip or pause anytime</p>
          </div>
          <HeroPhoto />
        </div>
      </section>

      <section className="border-t border-line bg-paper-warm py-14">
        <div className="mx-auto grid max-w-5xl gap-8 px-5 md:grid-cols-3">
          {[
            { t: "Quick fit", d: "Household size + laundry, dishes, and cleaning frequency." },
            { t: "Your plan", d: "Essential, Family, or Plus—matched to your mix automatically." },
            { t: "Delivered", d: "National brands to your door. Change before we pack." },
          ].map((s) => (
            <div key={s.t}>
              <h2 className="font-display text-lg text-ink">{s.t}</h2>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-muted">{s.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-14 text-center md:text-left">
        <p className="text-[15px] text-ink-muted">
          <Link href="/plans" className="text-green-light underline">
            See plans & pricing
          </Link>{" "}
          ·{" "}
          <Link href="/products" className="text-green-light underline">
            Product sizes we stock
          </Link>
        </p>
      </section>
    </MarketingLayout>
  );
}
