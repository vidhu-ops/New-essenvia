"use client";

import { cn } from "@/lib/utils";
import type { Frequency } from "@/lib/build-types";

const labels: { value: Frequency; title: string }[] = [
  { value: "light", title: "Light" },
  { value: "typical", title: "Typical" },
  { value: "heavy", title: "Heavy" },
];

export function FrequencyRow({
  label,
  value,
  onChange,
}: {
  label: string;
  value: Frequency;
  onChange: (v: Frequency) => void;
}) {
  return (
    <div>
      <p className="text-[15px] font-medium text-ink">{label}</p>
      <div className="mt-2 grid grid-cols-3 gap-2">
        {labels.map((opt) => (
          <button
            key={opt.value}
            type="button"
            onClick={() => onChange(opt.value)}
            className={cn(
              "min-h-[44px] rounded-md border text-sm font-medium transition-colors",
              value === opt.value
                ? "border-green bg-green text-[#faf8f5]"
                : "border-line bg-white text-ink-muted hover:border-[#c4b5a0]",
            )}
          >
            {opt.title}
          </button>
        ))}
      </div>
    </div>
  );
}
