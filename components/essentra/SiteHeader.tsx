"use client";

import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "/how-it-works", label: "How it works" },
  { href: "/plans", label: "Pricing" },
  { href: "/consoles", label: "Consoles" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-paper/95">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-5 py-4">
        <Link href="/" className="font-display text-[1.35rem] text-green">
          Essentra
        </Link>
        <nav className="hidden gap-6 md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-[15px] text-ink-muted hover:text-ink">
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link href="/login" className="hidden text-[15px] text-ink-muted hover:text-ink sm:inline">
            Sign in
          </Link>
          <Link
            href="/build/step-1"
            className="rounded-md bg-green px-5 py-2.5 text-[15px] font-semibold text-[#faf8f5] hover:bg-[#2f3d2f] md:px-6 md:py-3 md:text-base"
          >
            Build my box
          </Link>
          <button type="button" className="p-2 text-ink md:hidden" aria-label="Menu" onClick={() => setOpen(!open)}>
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>
      {open && (
        <nav className="flex flex-col gap-1 border-t border-line px-5 py-3 md:hidden">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="py-2.5 text-ink-muted" onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
          <Link href="/products" className="py-2.5 text-ink-muted" onClick={() => setOpen(false)}>
            Products
          </Link>
          <Link href="/faq" className="py-2.5 text-ink-muted" onClick={() => setOpen(false)}>
            FAQ
          </Link>
        </nav>
      )}
    </header>
  );
}
