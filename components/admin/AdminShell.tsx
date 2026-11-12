import Link from "next/link";
import { adminModules } from "@/lib/admin-modules";
import { getSession } from "@/lib/auth";

export async function AdminShell({ children, title }: { children: React.ReactNode; title?: string }) {
  const session = await getSession();
  if (!session || !["ADMIN", "MANAGER"].includes(session.role)) {
    return (
      <div className="mx-auto max-w-lg px-5 py-20 text-center">
        <p className="font-display text-xl text-ink">Admin sign-in required</p>
        <Link href="/login?next=/admin" className="mt-4 inline-block text-green-light underline">
          Sign in
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-paper">
      <header className="border-b border-line bg-paper-warm">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-5 py-4">
          <div>
            <Link href="/admin" className="font-display text-lg text-green">
              Essentra Admin
            </Link>
            <p className="text-xs text-ink-soft">
              {title ?? "Backend console"} · {session.name}
            </p>
          </div>
          <Link href="/" className="text-sm text-ink-muted hover:text-ink">
            Public site
          </Link>
        </div>
      </header>
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-8 lg:grid-cols-[220px_1fr]">
        <nav className="space-y-1 text-sm">
          {adminModules.map((m) => (
            <Link
              key={m.href}
              href={m.href}
              className="block rounded-md border border-transparent px-3 py-2 hover:border-line hover:bg-paper-warm"
            >
              <span className="font-medium text-ink">{m.label}</span>
              {m.connected && (
                <span className="ml-2 text-[10px] font-semibold uppercase tracking-wide text-green-light">live</span>
              )}
              <span className="mt-0.5 block text-xs text-ink-soft">{m.description}</span>
            </Link>
          ))}
        </nav>
        <main>{children}</main>
      </div>
    </div>
  );
}
