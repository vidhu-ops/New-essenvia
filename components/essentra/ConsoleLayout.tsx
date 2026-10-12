import Link from "next/link";
import { getSession } from "@/lib/auth";

const nav: Record<string, { href: string; label: string }[]> = {
  ADMIN: [
    { href: "/admin", label: "Overview" },
    { href: "/admin/catalog", label: "Catalog & costs" },
    { href: "/admin/packages", label: "Packages" },
    { href: "/admin/customers", label: "Customers" },
  ],
  SALES_REP: [
    { href: "/rep", label: "Compare" },
    { href: "/rep/customize", label: "Customize" },
    { href: "/rep/signup", label: "Sign & pay" },
  ],
  WAREHOUSE: [{ href: "/warehouse", label: "Pick orders" }],
  CUSTOMER: [
    { href: "/account", label: "My box" },
    { href: "/account/delivery", label: "Delivery" },
    { href: "/account/billing", label: "Billing" },
  ],
};

export async function ConsoleLayout({
  children,
  title,
  allowed,
}: {
  children: React.ReactNode;
  title: string;
  allowed: string[];
}) {
  const session = await getSession();
  if (!session || !allowed.includes(session.role)) {
    return (
      <div className="mx-auto max-w-lg px-5 py-20 text-center">
        <p className="font-display text-xl text-ink">Sign in required</p>
        <Link href="/login" className="mt-4 inline-block text-green-light underline">
          Go to login
        </Link>
      </div>
    );
  }
  const links = nav[session.role] ?? [];

  return (
    <div className="min-h-screen bg-paper">
      <header className="border-b border-line bg-paper-warm">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-4">
          <div>
            <Link href="/" className="font-display text-lg text-green">
              Essentra
            </Link>
            <p className="text-xs text-ink-soft">{title} · {session.name}</p>
          </div>
          <nav className="flex flex-wrap gap-4 text-sm text-ink-muted">
            {links.map((l) => (
              <Link key={l.href} href={l.href} className="hover:text-ink">
                {l.label}
              </Link>
            ))}
            <Link href="/" className="hover:text-ink">
              Public site
            </Link>
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-6xl px-5 py-8">{children}</main>
    </div>
  );
}
