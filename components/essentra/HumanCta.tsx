import Link from "next/link";
import { cn } from "@/lib/utils";

export function HumanCta({
  href,
  children,
  variant = "primary",
  size = "default",
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "text";
  size?: "default" | "large";
  className?: string;
}) {
  if (variant === "text") {
    return (
      <Link
        href={href}
        className={cn(
          "text-[#4a5d4a] underline decoration-[#c4b5a0] underline-offset-4 hover:decoration-[#4a5d4a]",
          className,
        )}
      >
        {children}
      </Link>
    );
  }
  return (
    <Link
      href={href}
      className={cn(
        "inline-block text-center font-medium transition-colors",
        size === "large" ? "text-[17px] px-8 py-4 min-h-[52px]" : "text-[15px] px-6 py-3.5",
        variant === "primary" &&
          "rounded-md bg-[#3a4a3a] text-[#faf8f5] shadow-[0_1px_0_rgba(0,0,0,0.06)] hover:bg-[#2f3d2f]",
        variant === "secondary" &&
          "rounded-md border border-[#d4cdc3] bg-[#faf8f5] text-[#2a2926] hover:border-[#a8a196]",
        className,
      )}
    >
      {children}
    </Link>
  );
}
