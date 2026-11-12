"use client";

import { useTransition } from "react";
import { assignDriver } from "@/lib/actions/pipeline";

export function DeliveryAssignForm({
  runId,
  drivers,
}: {
  runId: string;
  drivers: { id: string; name: string }[];
}) {
  const [pending, start] = useTransition();

  return (
    <select
      disabled={pending}
      defaultValue=""
      className="rounded-md border border-line px-2 py-1 text-xs"
      onChange={(e) => {
        const id = e.target.value;
        if (!id) return;
        start(async () => assignDriver(runId, id));
      }}
    >
      <option value="">Assign driver…</option>
      {drivers.map((d) => (
        <option key={d.id} value={d.id}>
          {d.name}
        </option>
      ))}
    </select>
  );
}
