import Link from "next/link";

type WFrameProps = {
  id: string;
  title: string;
  children: React.ReactNode;
  prev?: { href: string; label: string };
  next?: { href: string; label: string };
};

export function WFrame({ id, title, children, prev, next }: WFrameProps) {
  return (
    <div className="min-h-screen bg-[#f4f4f5] text-zinc-900">
      <header className="border-b-2 border-zinc-800 bg-white px-4 py-3">
        <div className="mx-auto flex max-w-lg flex-wrap items-center justify-between gap-2">
          <Link href="/wireframes" className="text-xs font-semibold uppercase tracking-wide text-zinc-600">
            ← Wireframes
          </Link>
          <span className="rounded bg-zinc-900 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-white">
            {id}
          </span>
        </div>
        <h1 className="mx-auto mt-2 max-w-lg text-lg font-bold">{title}</h1>
        <p className="mx-auto max-w-lg text-xs text-zinc-500">Lo-fi wireframe — Essentra Phase 0</p>
      </header>

      <main className="mx-auto max-w-lg px-4 py-6">{children}</main>

      <nav className="sticky bottom-0 border-t-2 border-zinc-300 bg-white px-4 py-3">
        <div className="mx-auto flex max-w-lg justify-between gap-3">
          {prev ? (
            <Link href={prev.href} className="flex-1 rounded border-2 border-zinc-800 py-2 text-center text-sm font-medium">
              ← {prev.label}
            </Link>
          ) : (
            <span className="flex-1" />
          )}
          {next ? (
            <Link href={next.href} className="flex-1 rounded border-2 border-zinc-800 bg-zinc-900 py-2 text-center text-sm font-medium text-white">
              {next.label} →
            </Link>
          ) : (
            <span className="flex-1" />
          )}
        </div>
      </nav>
    </div>
  );
}

export function WFBlock({ label, className = "", children }: { label?: string; className?: string; children?: React.ReactNode }) {
  return (
    <div className={`border-2 border-dashed border-zinc-400 bg-white/80 p-3 ${className}`}>
      {label && <p className="mb-2 text-[10px] font-bold uppercase tracking-wide text-zinc-500">{label}</p>}
      {children}
    </div>
  );
}

export function WFButton({ primary, children }: { primary?: boolean; children: React.ReactNode }) {
  return (
    <div
      className={`rounded py-3 text-center text-sm font-semibold ${
        primary ? "border-2 border-zinc-900 bg-zinc-900 text-white" : "border-2 border-zinc-800 bg-white"
      }`}
    >
      {children}
    </div>
  );
}

export function WFProgress({ step, total }: { step: number; total: number }) {
  return (
    <div className="mb-4">
      <p className="mb-1 text-xs text-zinc-600">
        Step {step} of {total}
      </p>
      <div className="flex h-2 gap-1">
        {Array.from({ length: total }).map((_, i) => (
          <div key={i} className={`flex-1 rounded-sm ${i < step ? "bg-zinc-800" : "bg-zinc-300"}`} />
        ))}
      </div>
    </div>
  );
}

export function WFOption({ selected, children }: { selected?: boolean; children: React.ReactNode }) {
  return (
    <div
      className={`rounded border-2 py-3 text-center text-sm font-medium ${
        selected ? "border-zinc-900 bg-zinc-100" : "border-zinc-400 bg-white"
      }`}
    >
      {children}
    </div>
  );
}
