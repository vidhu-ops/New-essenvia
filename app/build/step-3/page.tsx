import Link from "next/link";
import { BuildShell } from "@/components/essentra/build/BuildShell";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function BuildStep3() {
  return (
    <BuildShell step={3} title="Paper products" subtitle="Toilet paper and towels—quantities tuned separately." backHref="/build/step-2">
      <div className="space-y-4">
        {[
          { cat: "Toilet paper", brand: "Charmin", selected: true },
          { cat: "Paper towels", brand: "Bounty", selected: true },
        ].map((row) => (
          <div key={row.cat} className="rounded-xl border-2 border-[#1B4332] bg-white p-4 shadow-sm">
            <p className="text-sm font-medium">{row.cat}</p>
            <p className="mt-1 text-xs text-[#64748B]">Preferred: {row.brand}</p>
            <p className="mt-3 text-xs text-[#40916C]">Quantity: matched to household →</p>
          </div>
        ))}
      </div>
      <Link
        href="/build/step-4"
        className={cn(buttonVariants(), "mt-8 flex h-12 w-full rounded-xl bg-[#1B4332] hover:bg-[#40916C]")}
      >
        Continue
      </Link>
    </BuildShell>
  );
}
