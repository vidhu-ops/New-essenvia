"use client";

import { useTransition } from "react";
import { subscriptionAction } from "@/lib/actions/account";

export function SubscriptionActions({ subscriptionId, status }: { subscriptionId: string; status: string }) {
  const [pending, start] = useTransition();

  function run(action: "skip" | "pause" | "cancel" | "resume") {
    start(async () => {
      await subscriptionAction(subscriptionId, action);
    });
  }

  return (
    <div className="flex flex-wrap gap-2">
      {status === "ACTIVE" && (
        <>
          <ActionButton disabled={pending} onClick={() => run("skip")}>
            Skip next delivery
          </ActionButton>
          <ActionButton disabled={pending} onClick={() => run("pause")}>
            Pause
          </ActionButton>
          <ActionButton disabled={pending} onClick={() => run("cancel")} variant="danger">
            Cancel
          </ActionButton>
        </>
      )}
      {(status === "PAUSED" || status === "SKIPPED") && (
        <ActionButton disabled={pending} onClick={() => run("resume")}>
          Resume
        </ActionButton>
      )}
      {status === "PENDING" && <p className="text-sm text-ink-muted">Complete payment to activate your subscription.</p>}
    </div>
  );
}

function ActionButton({
  children,
  onClick,
  disabled,
  variant,
}: {
  children: React.ReactNode;
  onClick: () => void;
  disabled?: boolean;
  variant?: "danger";
}) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={`rounded-md border px-3 py-2 text-sm font-medium disabled:opacity-50 ${
        variant === "danger" ? "border-red-200 text-red-800" : "border-line text-ink hover:bg-paper-warm"
      }`}
    >
      {children}
    </button>
  );
}
