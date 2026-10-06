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
    <div className="min-h-screen bg-gradient-to-b from-[#D8F3DC]/40 to-[#FAFAF8]">
      <header className="border-b border-[#E2E8F0]/60 bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-lg items-center justify-between px-4 py-4">
          <Link href="/" className="font-serif text-lg text-[#1B4332]">
            Essentra
          </Link>
          <Link href="/" className="text-xs text-[#64748B] hover:text-[#1B4332]">
            Save & exit
          </Link>
        </div>
      </header>
      <div className="mx-auto max-w-lg px-4 py-8">
        <BuildProgress step={step} total={5} />
        <h1 className="mt-6 font-serif text-2xl text-[#1B4332]">{title}</h1>
        {subtitle && <p className="mt-2 text-sm leading-relaxed text-[#64748B]">{subtitle}</p>}
        <div className="mt-8">{children}</div>
        {backHref && (
          <Link href={backHref} className="mt-8 inline-block text-sm text-[#40916C] hover:underline">
            ← Back
          </Link>
        )}
      </div>
    </div>
  );
}
