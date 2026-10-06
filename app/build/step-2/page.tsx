"use client";

import { useState } from "react";
import { BuildShell } from "@/components/essentra/build/BuildShell";
import { OptionTile } from "@/components/essentra/build/OptionTile";
import { HumanCta } from "@/components/essentra/HumanCta";

export default function BuildStep2() {
  const [brand, setBrand] = useState("Tide");
  const [format, setFormat] = useState("Liquid");

  return (
    <BuildShell
      step={2}
      title="Laundry"
      subtitle="Whatever you’d point at on the shelf today is the right answer."
      backHref="/build/step-1"
    >
      <p className="mb-2 text-[13px] font-medium uppercase tracking-wide text-ink-soft">Brand</p>
      <div className="grid grid-cols-2 gap-2">
        {["Tide", "Gain", "Something else", "You pick for me"].map((b) => (
          <OptionTile key={b} selected={brand === b} onClick={() => setBrand(b)}>
            {b}
          </OptionTile>
        ))}
      </div>
      <p className="mb-2 mt-6 text-[13px] font-medium uppercase tracking-wide text-ink-soft">Liquid or pods</p>
      <div className="grid grid-cols-2 gap-2">
        {["Liquid", "Pods"].map((f) => (
          <OptionTile key={f} selected={format === f} onClick={() => setFormat(f)}>
            {f}
          </OptionTile>
        ))}
      </div>
      <p className="mb-2 mt-6 text-[13px] font-medium uppercase tracking-wide text-ink-soft">How much laundry?</p>
      <div className="rounded-md border border-line bg-white p-4">
        <input type="range" className="w-full accent-green" defaultValue={50} aria-label="Laundry volume" />
        <div className="mt-2 flex justify-between text-[13px] text-ink-soft">
          <span>Less</span>
          <span>Typical</span>
          <span>Nonstop</span>
        </div>
      </div>
      <div className="mt-10">
        <HumanCta href="/build/step-3" className="block w-full">
          Next
        </HumanCta>
      </div>
    </BuildShell>
  );
}
