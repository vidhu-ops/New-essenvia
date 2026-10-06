import Link from "next/link";
import { BuildProgress } from "./BuildProgress";

export function BuildShell({
  step,
  title,
  subtitle,
  children,
  backHref,
}: {
  step: number;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  backHref?: string;
}) {
  return (
    <div className="min-h-screen bg-paper">
      <header className="border-b border-line bg-paper-warm">
        <div className="mx-auto flex max-w-lg items-center justify-between px-5 py-4">
          <Link href="/" className="font-display text-lg text-green">
            Essentra
          </Link>
          <Link href="/" className="text-[14px] text-ink-soft hover:text-ink">
            Save & come back
          </Link>
        </div>
      </header>
      <div className="mx-auto max-w-lg px-5 py-8">
        <BuildProgress step={step} total={5} />
        <h1 className="mt-8 font-display text-[1.65rem] leading-snug text-ink">{title}</h1>
        {subtitle && <p className="mt-3 text-[16px] leading-relaxed text-ink-muted">{subtitle}</p>}
        <div className="mt-8">{children}</div>
        {backHref && (
          <Link href={backHref} className="mt-10 inline-block text-[15px] text-green-light underline decoration-line underline-offset-4">
            Back
          </Link>
        )}
      </div>
    </div>
  );
}
