import { BuildResultClient } from "@/components/essentra/build/BuildResultClient";
import { BuildShell } from "@/components/essentra/build/BuildShell";

export default function BuildStep3() {
  return (
    <BuildShell step={3} title="Your box & plan" subtitle="Matched from your household and usage." backHref="/build/step-2">
      <BuildResultClient />
    </BuildShell>
  );
}
