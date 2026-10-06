import Link from "next/link";

const legal = [
  { label: "Terms (placeholder)", href: "#" },
  { label: "Subscription terms", href: "#" },
  { label: "Privacy", href: "#" },
  { label: "Shipping", href: "#" },
  { label: "Refunds", href: "#" },
  { label: "Cancellation", href: "#" },
  { label: "Accessibility", href: "#" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-[#E2E8F0] bg-white">
      <div className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <p className="font-serif text-xl text-[#1B4332]">Essentra</p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-[#64748B]">
              Household essentials you already trust—one customized box, one monthly price, delivered across Canada.
            </p>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#1B4332]">Explore</p>
            <ul className="mt-3 space-y-2 text-sm text-[#64748B]">
              <li>
                <Link href="/how-it-works" className="hover:text-[#40916C]">
                  How it works
                </Link>
              </li>
              <li>
                <Link href="/build/step-1" className="hover:text-[#40916C]">
                  Build my box
                </Link>
              </li>
              <li>
                <Link href="/plans" className="hover:text-[#40916C]">
                  Plans
                </Link>
              </li>
              <li>
                <Link href="/design-system" className="hover:text-[#40916C]">
                  UI / UX rationale
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#1B4332]">Legal</p>
            <ul className="mt-3 space-y-2 text-sm text-[#64748B]">
              {legal.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="hover:text-[#40916C]">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs text-[#94A3B8]">Copy for counsel review—not approved legal text.</p>
          </div>
        </div>
        <p className="mt-10 text-center text-xs text-[#94A3B8]">© {new Date().getFullYear()} Essentra · Prices in CAD</p>
      </div>
    </footer>
  );
}
