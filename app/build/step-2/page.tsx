"use client";

import Link from "next/link";
import { useState } from "react";
import { BuildShell } from "@/components/essentra/build/BuildShell";
import { OptionTile } from "@/components/essentra/build/OptionTile";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function BuildStep2() {
  const [brand, setBrand] = useState("Tide");
  const [format, setFormat] = useState("Liquid");

  return (
    <BuildShell
      step={2}
      title="Laundry detergent"
      subtitle="Pick what you already trust—recognition lowers perceived risk when switching from in-store shopping."
      backHref="/build/step-1"
    >
      <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[#64748B]">Brand</p>
      <div className="grid grid-cols-2 gap-2">
        {["Tide", "Gain", "Other", "Surprise me"].map((b) => (
          <OptionTile key={b} selected={brand === b} onClick={() => setBrand(b)}>
            {b}
          </OptionTile>
        ))}
      </div>
      <p className="mb-2 mt-6 text-xs font-semibold uppercase tracking-wide text-[#64748B]">Format</p>
      <div className="grid grid-cols-2 gap-2">
        {["Liquid", "Pods"].map((f) => (
          <OptionTile key={f} selected={format === f} onClick={() => setFormat(f)}>
            {f}
          </OptionTile>
        ))}
      </div>
      <p className="mb-2 mt-6 text-xs font-semibold uppercase tracking-wide text-[#64748B]">How much laundry?</p>
      <div className="rounded-xl border border-[#E2E8F0] bg-white p-4">
        <input type="range" className="w-full accent-[#1B4332]" defaultValue={50} aria-label="Laundry volume" />
        <div className="mt-2 flex justify-between text-xs text-[#64748B]">
          <span>Lighter</span>
          <span>Typical</span>
          <span>Heavy</span>
        </div>
      </div>
      <Link
        href="/build/step-3"
        className={cn(buttonVariants(), "mt-8 flex h-12 w-full rounded-xl bg-[#1B4332] hover:bg-[#40916C]")}
      >
        Continue
      </Link>
    </BuildShell>
  );
}
