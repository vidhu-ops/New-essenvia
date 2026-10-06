"use client";

import Link from "next/link";
import { useState } from "react";
import { BuildShell } from "@/components/essentra/build/BuildShell";
import { OptionTile } from "@/components/essentra/build/OptionTile";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const sizes = ["1", "2", "3", "4", "5+"];

export default function BuildStep1() {
  const [selected, setSelected] = useState("3");

  return (
    <BuildShell
      step={1}
      title="Who lives in your home?"
      subtitle="Household size helps us estimate consumption—it does not force every product to the same “size tier.”"
    >
      <div className="grid grid-cols-3 gap-2">
        {sizes.map((s) => (
          <OptionTile key={s} selected={selected === s} onClick={() => setSelected(s)}>
            <span className="block text-center text-lg">{s}</span>
            {s === "5+" && <span className="block text-center text-[10px] text-[#64748B]">people</span>}
          </OptionTile>
        ))}
      </div>
      <Link
        href="/build/step-2"
        className={cn(buttonVariants(), "mt-8 flex h-12 w-full rounded-xl bg-[#1B4332] hover:bg-[#40916C]")}
      >
        Continue
      </Link>
    </BuildShell>
  );
}
