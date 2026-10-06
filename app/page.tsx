import Link from "next/link";
import { BoxHeroVisual } from "@/components/essentra/BoxHeroVisual";
import { MarketingLayout } from "@/components/essentra/MarketingLayout";
import { buttonVariants } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const plans = [
  { name: "Essentra Essential", price: "120.99", desc: "Right-sized for lighter household use" },
  { name: "Essentra Family", price: "134.99", desc: "Our most common match for families", featured: true },
  { name: "Essentra Plus", price: "149.99", desc: "Higher consumption across categories" },
];

const categories = [
  "Laundry detergent",
  "Toilet paper",
  "Paper towels",
  "Dishwasher pods",
  "Dish soap",
  "Garbage bags",
  "Fabric softener",
  "Surface cleaner",
  "Disinfecting wipes",
];

export default function HomePage() {
  return (
    <MarketingLayout>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#D8F3DC_0%,_transparent_55%)]" aria-hidden />
        <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 py-16 md:grid-cols-2 md:py-24">
          <div>
            <Badge className="mb-4 border-[#40916C]/30 bg-[#D8F3DC]/60 text-[#1B4332] hover:bg-[#D8F3DC]/60">
              Delivering across Canada
            </Badge>
            <h1 className="font-serif text-4xl leading-[1.1] tracking-tight text-[#1B4332] md:text-[3.25rem]">
              Your household essentials.
              <span className="block text-[#40916C]">Delivered automatically.</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-[#64748B]">
              The brands you already buy—customized to your home, bundled into one calm monthly price. No cart. No
              coupon chaos. No surprise add-ons.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/build/step-1"
                className={cn(buttonVariants(), "h-12 rounded-full bg-[#1B4332] px-8 text-base hover:bg-[#40916C]")}
              >
                Build my Essentra box
              </Link>
              <Link
                href="/how-it-works"
                className={cn(
                  buttonVariants({ variant: "outline" }),
                  "h-12 rounded-full border-[#1B4332]/20 px-8 text-base text-[#1B4332]",
                )}
              >
                See how it works
              </Link>
            </div>
            <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-[#64748B]">
              <li className="flex items-center gap-2">
                <span className="text-[#40916C]">✓</span> Skip or pause anytime
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#40916C]">✓</span> Secure recurring billing
              </li>
              <li className="flex items-center gap-2">
                <span className="text-[#40916C]">✓</span> Preferences saved
              </li>
            </ul>
          </div>
          <BoxHeroVisual />
        </div>
      </section>

      <section className="border-y border-[#E2E8F0] bg-white py-16">
        <div className="mx-auto max-w-6xl px-4">
          <p className="text-center font-serif text-3xl text-[#1B4332]">Three steps. One simple routine.</p>
          <p className="mx-auto mt-3 max-w-xl text-center text-[#64748B]">
            We reduce cognitive load: one decision per screen, defaults where safe, progress you can see.
          </p>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                n: "1",
                title: "Tell us about your household",
                body: "Size, habits, and the brands you already reach for in store.",
              },
              {
                n: "2",
                title: "We build your Essentra package",
                body: "Your basket maps to one plan—you see a single monthly price, not a spreadsheet.",
              },
              {
                n: "3",
                title: "We deliver on schedule",
                body: "Same preferences next month unless you change them before the cut-off.",
              },
            ].map((s) => (
              <Card key={s.n} className="border-[#E2E8F0] shadow-none">
                <CardContent className="pt-6">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#1B4332] font-serif text-lg text-white">
                    {s.n}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-[#1A1A1A]">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#64748B]">{s.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="mx-auto max-w-6xl px-4">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h2 className="font-serif text-3xl text-[#1B4332]">Plans that match your home—not a template</h2>
              <p className="mt-2 max-w-xl text-[#64748B]">
                Anchoring is honest: one visible price. No nickel-and-diming builds trust and reduces checkout anxiety.
              </p>
            </div>
            <Link href="/plans" className="text-sm font-medium text-[#40916C] hover:underline">
              Compare plans →
            </Link>
          </div>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {plans.map((p) => (
              <Card
                key={p.name}
                className={cn(
                  "relative overflow-hidden border-[#E2E8F0]",
                  p.featured && "border-[#40916C] shadow-[0_20px_60px_-30px_rgba(64,145,108,0.5)]",
                )}
              >
                {p.featured && (
                  <div className="bg-[#40916C] px-4 py-1 text-center text-xs font-medium text-white">Most matched</div>
                )}
                <CardContent className="pt-6">
                  <h3 className="font-semibold text-[#1B4332]">{p.name}</h3>
                  <p className="mt-4 font-serif text-4xl text-[#1A1A1A]">
                    ${p.price}
                    <span className="text-base font-sans text-[#64748B]">/mo + tax</span>
                  </p>
                  <p className="mt-2 text-sm text-[#64748B]">{p.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#1B4332] py-16 text-white">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="font-serif text-3xl">Ten essential categories. Your brands inside.</h2>
          <p className="mt-3 max-w-2xl text-[#D8F3DC]/90">
            Familiar national brands signal safety (mere-exposure effect)—you are not gambling on unknown labels.
          </p>
          <div className="mt-8 flex flex-wrap gap-2">
            {categories.map((c) => (
              <span key={c} className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm">
                {c}
              </span>
            ))}
          </div>
          <Link
            href="/products"
            className={cn(
              buttonVariants({ variant: "secondary" }),
              "mt-10 rounded-full bg-white text-[#1B4332] hover:bg-[#D8F3DC]",
            )}
          >
            Explore categories
          </Link>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-3xl px-4 text-center">
          <h2 className="font-serif text-3xl text-[#1B4332]">Make shopping the quiet part of life again</h2>
          <p className="mt-4 text-[#64748B]">
            Start the guided builder—about five minutes, mobile-friendly, no account required until you are ready.
          </p>
          <Link
            href="/build/step-1"
            className={cn(buttonVariants(), "mt-8 h-12 rounded-full bg-[#1B4332] px-10 text-base hover:bg-[#40916C]")}
          >
            Build my Essentra box
          </Link>
          <p className="mt-4 text-xs text-[#94A3B8]">
            <Link href="/design-system" className="underline hover:text-[#40916C]">
              Read why every colour and font was chosen
            </Link>
          </p>
        </div>
      </section>
    </MarketingLayout>
  );
}
