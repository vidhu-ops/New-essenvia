"use client";

import { useTransition } from "react";
import { advanceProduction } from "@/lib/actions/pipeline";

export function ProductionJobActions({ jobId, stage }: { jobId: string; stage: string }) {
  const [pending, start] = useTransition();
  if (stage === "READY_FOR_DISPATCH") {
    return <span className="text-xs text-ink-soft">Handed to delivery</span>;
  }
  return (
    <button
      type="button"
      disabled={pending}
      onClick={() => start(async () => advanceProduction(jobId))}
      className="text-xs font-medium text-green-light underline disabled:opacity-50"
    >
      Advance stage
    </button>
  );
}
