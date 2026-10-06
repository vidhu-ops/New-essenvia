import Link from "next/link";
import { BuildShell } from "@/components/essentra/build/BuildShell";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const items = ["Dishwasher pods", "Dish soap", "Kitchen bags", "Large garbage bags"];

export default function BuildStep4() {
  return (
    <BuildShell step={4} title="Kitchen essentials" backHref="/build/step-3">
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item} className="flex items-center justify-between rounded-xl border border-[#E2E8F0] bg-white px-4 py-3">
            <span className="text-sm font-medium">{item}</span>
            <span className="text-xs text-[#40916C]">Configured</span>
          </li>
        ))}
      </ul>
      <Link
        href="/build/step-5"
        className={cn(buttonVariants(), "mt-8 flex h-12 w-full rounded-xl bg-[#1B4332] hover:bg-[#40916C]")}
      >
        Continue
      </Link>
    </BuildShell>
  );
}
