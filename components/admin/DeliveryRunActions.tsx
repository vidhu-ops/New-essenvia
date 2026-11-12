"use client";

import { useTransition } from "react";
import { advanceDelivery } from "@/lib/actions/pipeline";

export function DeliveryRunActions({ runId, stage }: { runId: string; stage: string }) {
  const [pending, start] = useTransition();
  if (stage === "DELIVERED" || stage === "FAILED") return null;
  return (
    <button
      type="button"
      disabled={pending}
      onClick={() => start(async () => advanceDelivery(runId))}
      className="rounded-md border border-line px-2 py-1 text-xs font-medium hover:bg-paper-warm disabled:opacity-50"
    >
      {pending ? "…" : "Next step"}
    </button>
  );
}
