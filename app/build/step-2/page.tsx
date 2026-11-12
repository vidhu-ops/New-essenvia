"use client";

import { BuildShell } from "@/components/essentra/build/BuildShell";
import { OptionTile } from "@/components/essentra/build/OptionTile";
import { HumanCta } from "@/components/essentra/HumanCta";
import { extraCategories } from "@/lib/build-types";
import { useBuildStore } from "@/lib/build-store";

export default function BuildStep2() {
  const extras = useBuildStore((s) => s.selections.extras);
  const setSelections = useBuildStore((s) => s.setSelections);

  function toggle(slug: string) {
    const next = extras.includes(slug) ? extras.filter((x) => x !== slug) : [...extras, slug];
    setSelections({ extras: next });
  }

  return (
    <BuildShell
      step={2}
      title="Add extras (optional)"
      subtitle="Your core box is already set from your answers. Toggle anything you want on top."
      backHref="/build/step-1"
    >
      <div className="space-y-3">
        {extraCategories.map((cat) => (
          <OptionTile
            key={cat.slug}
            selected={extras.includes(cat.slug)}
            onClick={() => toggle(cat.slug)}
          >
            <span className="block font-medium">{cat.label}</span>
            <span className="mt-0.5 block text-[13px] font-normal text-ink-muted">{cat.hint}</span>
          </OptionTile>
        ))}
      </div>
      <div className="mt-10 space-y-3">
        <HumanCta href="/build/step-3" size="large" className="block w-full text-center">
          Finalize my box
        </HumanCta>
        <HumanCta href="/build/step-3" variant="text" className="block w-full text-center">
          Skip — no extras
        </HumanCta>
      </div>
    </BuildShell>
  );
}
