"use client";

import { BuildShell } from "@/components/essentra/build/BuildShell";
import { FrequencyRow } from "@/components/essentra/build/FrequencyRow";
import { OptionTile } from "@/components/essentra/build/OptionTile";
import { HumanCta } from "@/components/essentra/HumanCta";
import { useBuildStore } from "@/lib/build-store";

const sizes = ["1", "2", "3", "4", "5+"] as const;

export default function BuildStep1() {
  const s = useBuildStore((x) => x.selections);
  const setSelections = useBuildStore((x) => x.setSelections);
  const ready = Boolean(s.householdSize);

  return (
    <BuildShell step={1} title="Size your household" subtitle="One screen—we'll pick quantities and your plan from this.">
      <p className="text-[15px] font-medium text-ink">How many people live at home?</p>
      <div className="mt-2 grid grid-cols-5 gap-2">
        {sizes.map((size) => (
          <OptionTile
            key={size}
            selected={s.householdSize === size}
            onClick={() => setSelections({ householdSize: size })}
            className="px-2 text-center text-sm"
          >
            {size === "5+" ? "5+" : size}
          </OptionTile>
        ))}
      </div>

      <div className="mt-8 space-y-6">
        <FrequencyRow
          label="Laundry (loads per week)"
          value={s.laundryFrequency}
          onChange={(laundryFrequency) => setSelections({ laundryFrequency })}
        />
        <FrequencyRow
          label="Dishes (dishwasher / sink)"
          value={s.dishesFrequency}
          onChange={(dishesFrequency) => setSelections({ dishesFrequency })}
        />
        <FrequencyRow
          label="Cleaning (wipes, spray, tidying)"
          value={s.cleaningFrequency}
          onChange={(cleaningFrequency) => setSelections({ cleaningFrequency })}
        />
      </div>

      <p className="mt-8 text-[15px] font-medium text-ink">Detergent brand</p>
      <div className="mt-2 grid grid-cols-2 gap-2">
        {[
          ["Tide", "tide"],
          ["Gain", "gain"],
        ].map(([label, id]) => (
          <OptionTile
            key={id}
            selected={s.laundryBrand === id}
            onClick={() => setSelections({ laundryBrand: id as "tide" | "gain" })}
          >
            {label}
          </OptionTile>
        ))}
      </div>

      <div className="mt-10">
        {ready ? (
          <HumanCta href="/build/step-2" size="large" className="block w-full text-center">
            See my box
          </HumanCta>
        ) : (
          <p className="text-center text-sm text-ink-soft">Pick a household size to continue.</p>
        )}
      </div>
    </BuildShell>
  );
}
