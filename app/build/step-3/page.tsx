import { BuildShell } from "@/components/essentra/build/BuildShell";
import { HumanCta } from "@/components/essentra/HumanCta";

export default function BuildStep3() {
  return (
    <BuildShell step={3} title="Paper products" subtitle="Two quick picks—we’ll size them separately." backHref="/build/step-2">
      <div className="space-y-4 text-[15px]">
        <div className="rounded-md border border-green bg-paper-warm p-4">
          <p className="font-medium text-ink">Toilet paper</p>
          <p className="mt-1 text-ink-muted">Charmin (change if you like)</p>
        </div>
        <div className="rounded-md border border-green bg-paper-warm p-4">
          <p className="font-medium text-ink">Paper towels</p>
          <p className="mt-1 text-ink-muted">Bounty</p>
        </div>
      </div>
      <div className="mt-10">
        <HumanCta href="/build/step-4" className="block w-full">
          Next
        </HumanCta>
      </div>
    </BuildShell>
  );
}
