import { BuildShell } from "@/components/essentra/build/BuildShell";
import { HumanCta } from "@/components/essentra/HumanCta";

export default function BuildStep5() {
  return (
    <BuildShell step={5} title="Cleaning" backHref="/build/step-4">
      <ul className="space-y-2 text-[15px] text-ink-muted">
        <li>Fabric softener</li>
        <li>Multi-surface cleaner</li>
        <li>Disinfecting wipes</li>
      </ul>
      <div className="mt-10">
        <HumanCta href="/build/result" className="block w-full">
          See my box
        </HumanCta>
      </div>
    </BuildShell>
  );
}
