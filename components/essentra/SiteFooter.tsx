import Link from "next/link";

const legal = [
  { href: "/legal/terms", label: "Terms" },
  { href: "/legal/subscription", label: "Subscription" },
  { href: "/legal/privacy", label: "Privacy" },
  { href: "/legal/shipping", label: "Shipping" },
  { href: "/legal/refunds", label: "Refunds" },
  { href: "/legal/cancellation", label: "Cancellation" },
  { href: "/legal/accessibility", label: "Accessibility" },
];

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-line bg-paper-warm">
      <div className="mx-auto max-w-5xl px-5 py-12">
        <p className="font-display text-xl text-green">Essentra</p>
        <p className="mt-3 max-w-md text-[15px] leading-relaxed text-ink-muted">
          Household essentials for Canadian homes — one box, one monthly price, national brands you already trust.
        </p>
        <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-[14px] text-ink-soft">
          <Link href="/how-it-works" className="hover:text-ink">
            How it works
          </Link>
          <Link href="/plans" className="hover:text-ink">
            Pricing
          </Link>
          <Link href="/contact" className="hover:text-ink">
            Contact
          </Link>
          <Link href="/login" className="hover:text-ink">
            Sign in
          </Link>
        </div>
        <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2 text-[13px] text-ink-soft">
          {legal.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-ink">
              {l.label}
            </Link>
          ))}
        </div>
        <p className="mt-10 text-[13px] text-ink-soft">© {new Date().getFullYear()} Essentra · Prices in CAD + tax</p>
      </div>
    </footer>
  );
}
