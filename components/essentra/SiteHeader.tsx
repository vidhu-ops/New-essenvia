"use client";

import Link from "next/link";
import { useState } from "react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
const links = [
  { href: "/how-it-works", label: "How it works" },
  { href: "/products", label: "Products" },
  { href: "/plans", label: "Plans" },
  { href: "/why", label: "Why Essentra" },
  { href: "/faq", label: "FAQ" },
  { href: "/docs", label: "Proposal & pricing" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[#E2E8F0]/80 bg-[#FAFAF8]/90 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Link href="/" className="font-serif text-xl font-semibold tracking-tight text-[#1B4332]">
          Essentra
        </Link>
        <nav className="hidden items-center gap-6 lg:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="text-sm text-[#64748B] transition-colors hover:text-[#1B4332]">
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link
            href="/build/step-1"
            className={cn(buttonVariants({ variant: "ghost" }), "hidden text-[#64748B] sm:inline-flex")}
          >
            Sign in
          </Link>
          <Link
            href="/build/step-1"
            className={cn(
              buttonVariants(),
              "rounded-full bg-[#1B4332] px-5 hover:bg-[#40916C] h-10",
            )}
          >
            Build my box
          </Link>
          <button
            type="button"
            className="ml-1 rounded-lg p-2 text-[#1B4332] lg:hidden"
            aria-label="Menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="text-lg">{open ? "✕" : "☰"}</span>
          </button>
        </div>
      </div>
      <div className={cn("border-t border-[#E2E8F0] bg-white lg:hidden", open ? "block" : "hidden")}>
        <nav className="flex flex-col gap-1 px-4 py-3">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-lg px-3 py-2 text-sm text-[#64748B] hover:bg-[#D8F3DC]/50"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
