"use client";

import Link from "next/link";
import { BuildShell } from "@/components/essentra/build/BuildShell";
import { OptionTile } from "@/components/essentra/build/OptionTile";
import { HumanCta } from "@/components/essentra/HumanCta";
import { useBuildStore } from "@/lib/build-store";

const sizes = ["1", "2", "3", "4", "5+"];

export default function BuildStep1() {
  const selected = useBuildStore((s) => s.selections.householdSize);
  const setSelections = useBuildStore((s) => s.setSelections);

  return (
    <BuildShell step={1} title="Who lives at home?" subtitle="Rough headcount is enough—we’ll fine-tune quantities later.">
      <div className="grid grid-cols-3 gap-2">
        {sizes.map((s) => (
          <OptionTile key={s} selected={selected === s} onClick={() => setSelections({ householdSize: s })}>
            <span className="block text-center">{s === "5+" ? "5 or more" : s}</span>
          </OptionTile>
        ))}
      </div>
      <div className="mt-10">
        <HumanCta href="/build/step-2" className="block w-full">
          Next
        </HumanCta>
      </div>
    </BuildShell>
  );
}
