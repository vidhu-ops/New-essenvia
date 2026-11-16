import Link from "next/link";
import { MarketingLayout } from "@/components/essentra/MarketingLayout";
import { consoleApps, staffPreviewAccounts } from "@/lib/console-apps";

export const metadata = {
  title: "Platform consoles — Essentra",
  robots: { index: false, follow: false },
};

export default function ConsolesPage() {
  const staff = consoleApps.filter((a) => a.kind === "staff");
  const publicApps = consoleApps.filter((a) => a.kind === "public");
  const customer = consoleApps.filter((a) => a.kind === "customer");

  return (
    <MarketingLayout>
      <article className="mx-auto max-w-3xl px-5 py-14">
        <h1 className="font-display text-[2rem] text-ink">Platform preview</h1>
        <p className="mt-4 text-[16px] leading-relaxed text-ink-muted">
          One deployment hosts the public site and every operational console. Use this page on Vercel (or locally) to open
          admin, warehouse, delivery, sales rep, and customer account flows.
        </p>

        <section className="mt-10">
          <h2 className="font-display text-xl text-ink">Staff consoles</h2>
          <p className="mt-2 text-sm text-ink-muted">
            Password is the value you set for <code className="rounded bg-paper-warm px-1">SEED_STAFF_PASSWORD</code> on
            the host (Vercel env or local <code className="rounded bg-paper-warm px-1">.env</code>), after{" "}
            <code className="rounded bg-paper-warm px-1">RUN_DB_SEED=1</code> and a Postgres{" "}
            <code className="rounded bg-paper-warm px-1">DATABASE_URL</code>.
          </p>
          <ul className="mt-6 space-y-4">
            {staff.map((app) => (
              <li key={app.id} className="rounded-lg border border-line bg-white p-5">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="font-medium text-ink">{app.title}</h3>
                    <p className="mt-1 text-sm text-ink-muted">{app.description}</p>
                    <p className="mt-2 text-xs text-ink-soft">
                      Roles: {app.roles.join(", ")}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2 sm:items-end">
                    <Link
                      href={app.href}
                      className="rounded-md border border-line px-4 py-2 text-sm font-medium text-ink hover:bg-paper-warm"
                    >
                      Open console
                    </Link>
                    <Link href={app.loginHref} className="text-sm text-green-light underline">
                      Sign in preset
                    </Link>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-xl text-ink">Staff emails</h2>
          <ul className="mt-4 divide-y divide-line rounded-lg border border-line bg-paper-warm">
            {staffPreviewAccounts.map((row) => (
              <li key={row.email} className="flex flex-wrap items-center justify-between gap-2 px-4 py-3 text-sm">
                <span className="font-mono text-ink">{row.email}</span>
                <span className="text-ink-muted">{row.role}</span>
                <Link href={`/login?email=${encodeURIComponent(row.email)}&next=${row.console}`} className="text-green-light underline">
                  Login → {row.console}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-12">
          <h2 className="font-display text-xl text-ink">Customer &amp; marketing</h2>
          <ul className="mt-4 space-y-3">
            {[...publicApps, ...customer].map((app) => (
              <li key={app.id}>
                <Link href={app.href} className="text-green-light underline">
                  {app.title}
                </Link>
                <span className="text-ink-muted"> — {app.description}</span>
              </li>
            ))}
          </ul>
        </section>

        <p className="mt-12 text-sm text-ink-soft">
          Setup guide:{" "}
          <Link href="/docs" className="underline">
            /docs
          </Link>{" "}
          · Full Vercel steps in repo;" "}
          <span className="font-mono text-xs">docs/PREVIEW-CONSOLES.md</span>
        </p>
      </article>
    </MarketingLayout>
  );
}