import Link from "next/link";
import { MarketingLayout } from "@/components/essentra/MarketingLayout";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function HowItWorksPage() {
  return (
    <MarketingLayout>
      <div className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="font-serif text-4xl text-[#1B4332]">How Essentra works</h1>
        <p className="mt-4 text-lg text-[#64748B]">
          We designed the journey so you never build a cart. That removes the{" "}
          <strong className="font-medium text-[#1A1A1A]">paradox of choice</strong> that makes online household shopping
          exhausting.
        </p>
        <ol className="mt-12 space-y-10">
          {[
            {
              t: "Share your household",
              d: "Size and habits—so quantities differ by category, not one generic ‘medium everything’ template.",
            },
            {
              t: "Choose brands you already use",
              d: "Familiar labels reduce switching anxiety (mere-exposure). Admin manages SKUs; nothing is hard-coded.",
            },
            {
              t: "See one monthly price",
              d: "Your basket maps to Essential, Family, or Plus. One number on checkout—no credit math.",
            },
            {
              t: "Deliver & adjust on your terms",
              d: "Skip, pause, or update before cut-off. Control reduces subscription fear (reactance).",
            },
          ].map((s, i) => (
            <li key={s.t} className="flex gap-5">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#D8F3DC] font-serif text-xl text-[#1B4332]">
                {i + 1}
              </span>
              <div>
                <h2 className="text-xl font-semibold">{s.t}</h2>
                <p className="mt-2 text-[#64748B]">{s.d}</p>
              </div>
            </li>
          ))}
        </ol>
        <Link
          href="/build/step-1"
          className={cn(buttonVariants(), "mt-12 inline-flex h-12 rounded-full bg-[#1B4332] px-8 hover:bg-[#40916C]")}
        >
          Start building my box
        </Link>
      </div>
    </MarketingLayout>
  );
}
