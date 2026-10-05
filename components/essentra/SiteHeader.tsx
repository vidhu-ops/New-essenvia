import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="border-b border-[#E2E8F0] bg-[#FAFAF8]/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="font-serif text-xl font-semibold tracking-tight text-[#1B4332]">
          Essentra
        </Link>
        <nav className="hidden items-center gap-6 text-sm text-[#64748B] md:flex">
          <Link href="/how-it-works" className="hover:text-[#1B4332]">
            How It Works
          </Link>
          <Link href="/plans" className="hover:text-[#1B4332]">
            Plans
          </Link>
          <Link href="/wireframes" className="hover:text-[#1B4332]">
            Wireframes
          </Link>
        </nav>
        <Link
          href="/wireframes/build/step-1"
          className="rounded-full bg-[#1B4332] px-4 py-2 text-sm font-medium text-white hover:bg-[#40916C]"
        >
          Build My Box
        </Link>
      </div>
    </header>
  );
}
