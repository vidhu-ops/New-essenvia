import Link from "next/link";
import { cn } from "@/lib/utils";

/** Buttons that feel hand-specified: modest radius, no pill spam */
export function HumanCta({
  href,
  children,
  variant = "primary",
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "text";
  className?: string;
}) {
  if (variant === "text") {
    return (
      <Link href={href} className={cn("text-[#4a5d4a] underline decoration-[#c4b5a0] underline-offset-4 hover:decoration-[#4a5d4a]", className)}>
        {children}
      </Link>
    );
  }
  return (
    <Link
      href={href}
      className={cn(
        "inline-block text-center text-[15px] font-medium transition-colors",
        variant === "primary" &&
          "rounded-md bg-[#3a4a3a] px-6 py-3.5 text-[#faf8f5] shadow-[0_1px_0_rgba(0,0,0,0.06)] hover:bg-[#2f3d2f]",
        variant === "secondary" &&
          "rounded-md border border-[#d4cdc3] bg-[#faf8f5] px-6 py-3.5 text-[#2a2926] hover:border-[#a8a196]",
        className,
      )}
    >
      {children}
    </Link>
  );
}
