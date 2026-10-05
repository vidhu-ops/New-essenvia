import Link from "next/link";
import { SiteHeader } from "@/components/essentra/SiteHeader";

const plans = [
  { name: "Essentra Essential", price: "120.99", note: "Most households" },
  { name: "Essentra Family", price: "134.99", note: "Higher consumption" },
  { name: "Essentra Plus", price: "149.99", note: "Maximum coverage" },
];

const steps = [
  {
    title: "Tell us about your household",
    body: "Household size, the products you use, preferred brands, and how much you consume.",
  },
  {
    title: "We build your Essentra package",
    body: "We match your customized basket to the right plan—you see one simple monthly price.",
  },
  {
    title: "We deliver your essentials",
    body: "Preferences stay saved. Your box arrives on schedule across Canada.",
  },
];

export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="relative overflow-hidden bg-gradient-to-b from-[#D8F3DC] to-[#FAFAF8] px-4 py-16 md:py-24">
          <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-2">
            <div>
              <p className="mb-3 text-sm font-medium uppercase tracking-widest text-[#40916C]">Canada</p>
              <h1 className="font-serif text-4xl leading-tight text-[#1B4332] md:text-5xl">
                Your household essentials.
                <br />
                Delivered automatically.
              </h1>
              <p className="mt-5 max-w-lg text-lg text-[#64748B]">
                Get the brands and everyday essentials your household already uses—customized to your needs and delivered
                to your door for one simple monthly price.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  href="/wireframes/build/step-1"
                  className="rounded-full bg-[#1B4332] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#40916C]"
                >
                  Build My Essentra Box
                </Link>
                <Link
                  href="/how-it-works"
                  className="rounded-full border border-[#1B4332]/30 bg-white px-6 py-3 text-sm font-semibold text-[#1B4332]"
                >
                  See How It Works
                </Link>
              </div>
            </div>
            <div className="relative mx-auto aspect-square w-full max-w-md rounded-3xl border border-[#E2E8F0] bg-white p-8 shadow-xl">
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-[#40916C]/20" />
              <div className="flex h-full flex-col items-center justify-center rounded-2xl border-2 border-dashed border-[#40916C]/40 bg-[#FAFAF8] p-6 text-center">
                <div className="mb-4 h-32 w-full max-w-[200px] rounded-lg bg-[#1B4332]/10" aria-hidden />
                <p className="font-serif text-xl text-[#1B4332]">Essentra Box</p>
                <p className="mt-2 text-sm text-[#64748B]">Recognizable brands · One monthly price</p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-4 py-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-center font-serif text-3xl text-[#1B4332]">How Essentra works</h2>
            <div className="mt-10 grid gap-8 md:grid-cols-3">
              {steps.map((s, i) => (
                <article key={s.title} className="rounded-2xl border border-[#E2E8F0] bg-white p-6">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#D8F3DC] text-sm font-bold text-[#1B4332]">
                    {i + 1}
                  </span>
                  <h3 className="mt-4 font-semibold text-[#1A1A1A]">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[#64748B]">{s.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-16">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-center font-serif text-3xl text-[#1B4332]">Plans &amp; pricing</h2>
            <p className="mx-auto mt-3 max-w-xl text-center text-sm text-[#64748B]">
              One price per month + applicable tax. No credits, no per-item surcharges. Prices in CAD; managed in admin.
            </p>
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {plans.map((p) => (
                <div key={p.name} className="rounded-2xl border border-[#E2E8F0] p-6 text-center">
                  <h3 className="font-semibold text-[#1B4332]">{p.name}</h3>
                  <p className="mt-4 font-serif text-4xl text-[#1A1A1A]">
                    ${p.price}
                    <span className="text-base font-sans text-[#64748B]">/mo</span>
                  </p>
                  <p className="mt-2 text-xs text-[#64748B]">{p.note}</p>
                </div>
              ))}
            </div>
            <p className="mt-6 text-center text-xs text-[#64748B]">
              Converted from USD list prices at Bank of Canada rate 1 USD = 1.4246 CAD (Oct 2026).
            </p>
          </div>
        </section>

        <section className="px-4 py-16">
          <div className="mx-auto max-w-3xl rounded-3xl bg-[#1B4332] px-8 py-12 text-center text-white">
            <h2 className="font-serif text-3xl">Ready for a simpler household routine?</h2>
            <p className="mt-3 text-[#D8F3DC]">Review interactive wireframes and the full CAD proposal in /docs.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/wireframes" className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-[#1B4332]">
                Open wireframes
              </Link>
              <Link
                href="/docs"
                className="rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white"
              >
                Read proposal (CAD)
              </Link>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t border-[#E2E8F0] px-4 py-8 text-center text-xs text-[#64748B]">
        © {new Date().getFullYear()} Essentra · Design preview · Legal pages are placeholders until counsel review
      </footer>
    </>
  );
}
