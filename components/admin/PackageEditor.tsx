"use client";

import { useState, useTransition } from "react";
import { updatePackageThresholds } from "@/lib/actions/admin";
import { formatCad } from "@/lib/package-engine";

export function PackageEditor({
  id,
  name,
  priceCents,
  minInternalCostCents,
  maxInternalCostCents,
}: {
  id: string;
  name: string;
  priceCents: number;
  minInternalCostCents: number;
  maxInternalCostCents: number;
}) {
  const [price, setPrice] = useState(String((priceCents / 100).toFixed(2)));
  const [minC, setMinC] = useState(String(minInternalCostCents));
  const [maxC, setMaxC] = useState(String(maxInternalCostCents));
  const [pending, start] = useTransition();

  return (
    <tr className="border-b border-line/80">
      <td className="py-2 font-medium">{name}</td>
      <td className="py-2">
        <input className="w-24 rounded border border-line px-2 py-1 text-sm" value={price} onChange={(e) => setPrice(e.target.value)} />
      </td>
      <td className="py-2">
        <input className="w-24 rounded border border-line px-2 py-1 text-sm" value={minC} onChange={(e) => setMinC(e.target.value)} />
      </td>
      <td className="py-2">
        <input className="w-24 rounded border border-line px-2 py-1 text-sm" value={maxC} onChange={(e) => setMaxC(e.target.value)} />
      </td>
      <td className="py-2">
        <button
          type="button"
          disabled={pending}
          className="text-xs font-medium text-green-light underline"
          onClick={() =>
            start(async () => {
              const priceCents = Math.round(parseFloat(price) * 100);
              const minInternalCostCents = parseInt(minC, 10);
              const maxInternalCostCents = parseInt(maxC, 10);
              if ([priceCents, minInternalCostCents, maxInternalCostCents].some(Number.isNaN)) return;
              await updatePackageThresholds(id, { priceCents, minInternalCostCents, maxInternalCostCents });
            })
          }
        >
          Save
        </button>
        <span className="ml-2 text-xs text-ink-soft">${formatCad(priceCents)} list</span>
      </td>
    </tr>
  );
}
