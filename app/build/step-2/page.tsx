"use client";

import { BuildShell } from "@/components/essentra/build/BuildShell";
import { OptionTile } from "@/components/essentra/build/OptionTile";
import { HumanCta } from "@/components/essentra/HumanCta";
import { useBuildStore } from "@/lib/build-store";

export default function BuildStep2() {
  const { laundryBrand, laundryFormat } = useBuildStore((s) => s.selections);
  const setSelections = useBuildStore((s) => s.setSelections);

  return (
    <BuildShell
      step={2}
      title="Laundry"
      subtitle="Whatever you’d point at on the shelf today is the right answer."
      backHref="/build/step-1"
    >
      <p className="mb-2 text-[13px] font-medium uppercase tracking-wide text-ink-soft">Brand</p>
      <div className="grid grid-cols-2 gap-2">
        {[
          ["Tide", "tide"],
          ["Gain", "gain"],
        ].map(([label, id]) => (
          <OptionTile key={id} selected={laundryBrand === id} onClick={() => setSelections({ laundryBrand: id as "tide" | "gain" })}>
            {label}
          </OptionTile>
        ))}
      </div>
      <p className="mb-2 mt-6 text-[13px] font-medium uppercase tracking-wide text-ink-soft">Liquid or pods</p>
      <div className="grid grid-cols-2 gap-2">
        {[
          ["Liquid", "liquid"],
          ["Pods", "pods"],
        ].map(([label, id]) => (
          <OptionTile key={id} selected={laundryFormat === id} onClick={() => setSelections({ laundryFormat: id as "liquid" | "pods" })}>
            {label}
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
