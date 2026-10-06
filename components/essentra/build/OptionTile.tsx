"use client";

import { cn } from "@/lib/utils";

export function OptionTile({
  selected,
  onClick,
  children,
  className,
}: {
  selected?: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "min-h-[52px] w-full rounded-xl border-2 px-4 py-3 text-left text-sm font-medium transition-all",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#40916C]/50",
        selected
          ? "border-[#1B4332] bg-white shadow-[0_4px_20px_-8px_rgba(27,67,50,0.35)] ring-1 ring-[#40916C]/20"
          : "border-[#E2E8F0] bg-white/90 text-[#1A1A1A] hover:border-[#40916C]/40",
        className,
      )}
    >
      {children}
    </button>
  );
}
