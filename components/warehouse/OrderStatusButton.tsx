"use client";

import { useTransition } from "react";
import { updateOrderStatus } from "@/lib/actions/admin";

const steps = ["PAYMENT_CONFIRMED", "PICKING", "PACKED", "OUT_FOR_DELIVERY", "DELIVERED"] as const;

export function OrderStatusButton({ orderId, status }: { orderId: string; status: string }) {
  const [pending, start] = useTransition();
  const idx = steps.indexOf(status as (typeof steps)[number]);
  const next = idx >= 0 && idx < steps.length - 1 ? steps[idx + 1] : null;

  if (!next) return null;

  return (
    <button
      type="button"
      disabled={pending}
      className="mt-3 rounded-md border border-line px-3 py-1.5 text-xs font-medium text-ink hover:bg-white disabled:opacity-50"
      onClick={() => start(async () => updateOrderStatus(orderId, next))}
    >
      Mark {next.replaceAll("_", " ").toLowerCase()}
    </button>
  );
}
