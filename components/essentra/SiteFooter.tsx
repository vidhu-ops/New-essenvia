import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-line bg-paper-warm">
      <div className="mx-auto max-w-5xl px-5 py-12">
        <p className="font-display text-xl text-green">Essentra</p>
        <p className="mt-3 max-w-md text-[15px] leading-relaxed text-ink-muted">
          We’re building a simpler way to keep a Canadian home stocked—without turning it into another online shopping
          chore.
        </p>
        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[14px] text-ink-soft">
          <Link href="/how-it-works" className="hover:text-ink">
            How it works
          </Link>
          <Link href="/plans" className="hover:text-ink">
            Pricing
          </Link>
          <Link href="/docs" className="hover:text-ink">
            Business proposal
          </Link>
          <Link href="/wireframes" className="hover:text-ink">
            Wireframes (internal)
          </Link>
        </div>
        <p className="mt-10 text-[13px] text-ink-soft">© {new Date().getFullYear()} Essentra · Prices in CAD + tax</p>
      </div>
    </footer>
  );
}
