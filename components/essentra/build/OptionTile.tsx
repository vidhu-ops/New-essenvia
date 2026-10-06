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
        "min-h-[48px] w-full rounded-md border px-4 py-3 text-left text-[15px] transition-colors",
        "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green",
        selected ? "border-green bg-paper-warm text-ink" : "border-line bg-white text-ink hover:border-[#c4b5a0]",
        className,
      )}
    >
      {children}
    </button>
  );
}
