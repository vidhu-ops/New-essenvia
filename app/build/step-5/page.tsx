import Link from "next/link";
import { BuildShell } from "@/components/essentra/build/BuildShell";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function BuildStep5() {
  return (
    <BuildShell step={5} title="Cleaning" backHref="/build/step-4">
      <ul className="space-y-3">
        {["Fabric softener", "Multi-surface cleaner", "Disinfecting wipes"].map((item) => (
          <li key={item} className="rounded-xl border border-[#E2E8F0] bg-white px-4 py-3 text-sm font-medium">
            {item}
          </li>
        ))}
      </ul>
      <Link
        href="/build/result"
        className={cn(buttonVariants(), "mt-8 flex h-12 w-full rounded-xl bg-[#1B4332] hover:bg-[#40916C]")}
      >
        See my package
      </Link>
    </BuildShell>
  );
}
