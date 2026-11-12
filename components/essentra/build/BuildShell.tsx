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
  const total = 3;
  return (
    <div className="min-h-screen bg-paper">
      <div className="mx-auto max-w-lg px-5 pb-12 pt-6">
        <div className="flex items-center justify-between">
          <Link href="/" className="font-display text-lg text-green">
            Essentra
          </Link>
          <Link href="/" className="text-sm text-ink-soft hover:text-ink">
            Exit
          </Link>
        </div>
        <BuildProgress step={step} total={total} />
        <h1 className="mt-6 font-display text-[1.75rem] leading-snug text-ink">{title}</h1>
        {subtitle && <p className="mt-2 text-[16px] leading-relaxed text-ink-muted">{subtitle}</p>}
        <div className="mt-6">{children}</div>
        {backHref && (
          <Link href={backHref} className="mt-8 inline-block text-[15px] text-green-light underline decoration-line underline-offset-4">
            Back
          </Link>
        )}
      </div>
    </div>
  );
}
