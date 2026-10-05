import Link from "next/link";
import { SiteHeader } from "@/components/essentra/SiteHeader";

export default function HowItWorksPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="font-serif text-4xl text-[#1B4332]">How it works</h1>
        <p className="mt-4 text-[#64748B]">
          Essentra is not a shopping cart. You answer a short guided questionnaire; we assemble your household box and
          show one monthly price in Canadian dollars.
        </p>
        <ol className="mt-10 space-y-8">
          {[
            "Share household size and consumption habits.",
            "Choose preferred brands in each essential category.",
            "See your package, delivery timing, and single monthly rate.",
            "Subscribe securely; manage skips, pauses, and preferences in your account.",
          ].map((text, i) => (
            <li key={text} className="flex gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#D8F3DC] font-bold text-[#1B4332]">
                {i + 1}
              </span>
              <p className="pt-2 text-lg">{text}</p>
            </li>
          ))}
        </ol>
        <Link
          href="/wireframes/build/step-1"
          className="mt-12 inline-block rounded-full bg-[#1B4332] px-6 py-3 text-sm font-semibold text-white"
        >
          Try the wireframe flow
        </Link>
      </main>
    </>
  );
}
