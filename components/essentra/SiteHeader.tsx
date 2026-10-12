"use client";

import Link from "next/link";
import { useState } from "react";
const links = [
  { href: "/how-it-works", label: "How it works" },
  { href: "/products", label: "Our products" },
  { href: "/plans", label: "Plans & pricing" },
  { href: "/why", label: "Why Essentra" },
  { href: "/faq", label: "FAQ" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b border-line bg-paper-warm/95">
      <div className="mx-auto flex max-w-5xl items-baseline justify-between gap-4 px-5 py-5">
        <Link href="/" className="font-display text-[1.35rem] font-normal tracking-tight text-green">
          Essentra
        </Link>
        <nav className="hidden gap-7 md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-[15px] text-ink-muted hover:text-ink">
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/login" className="hidden text-[15px] text-ink-muted hover:text-ink sm:inline">
            Log in
          </Link>
          <Link
            href="/build/step-1"
            className="rounded-md bg-green px-4 py-2 text-[15px] font-medium text-[#faf8f5] hover:bg-[#2f3d2f]"
          >
            Build my box
          </Link>
          <button type="button" className="p-2 text-ink md:hidden" aria-label="Menu" onClick={() => setOpen(!open)}>
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>
      {open && (
        <nav className="flex flex-col gap-2 border-t border-line px-5 py-4 md:hidden">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="py-2 text-ink-muted" onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
