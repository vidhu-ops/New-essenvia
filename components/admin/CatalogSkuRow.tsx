"use client";

import { useState, useTransition } from "react";
import { updateSkuInventory } from "@/lib/actions/admin";
import { formatCad } from "@/lib/package-engine";

export function CatalogSkuRow({
  id,
  skuCode,
  category,
  label,
  wholesaleCostCents,
  inventoryOnHand,
  warehouseBin,
}: {
  id: string;
  skuCode: string;
  category: string;
  label: string;
  wholesaleCostCents: number;
  inventoryOnHand: number;
  warehouseBin: string | null;
}) {
  const [wholesale, setWholesale] = useState(String((wholesaleCostCents / 100).toFixed(2)));
  const [onHand, setOnHand] = useState(String(inventoryOnHand));
  const [pending, start] = useTransition();

  return (
    <tr className="border-b border-line/70">
      <td className="py-2 font-mono text-xs">{skuCode}</td>
      <td className="py-2">{category}</td>
      <td className="py-2">{label}</td>
      <td className="py-2">
        <input
          className="w-20 rounded border border-line px-2 py-1 text-sm"
          value={wholesale}
          onChange={(e) => setWholesale(e.target.value)}
          aria-label={`Wholesale ${skuCode}`}
        />
      </td>
      <td className="py-2">
        <input
          className="w-16 rounded border border-line px-2 py-1 text-sm"
          value={onHand}
          onChange={(e) => setOnHand(e.target.value)}
          aria-label={`On hand ${skuCode}`}
        />
      </td>
      <td className="py-2">{warehouseBin ?? "—"}</td>
      <td className="py-2">
        <button
          type="button"
          disabled={pending}
          className="text-xs font-medium text-green-light underline disabled:opacity-50"
          onClick={() =>
            start(async () => {
              const cents = Math.round(parseFloat(wholesale) * 100);
              const qty = parseInt(onHand, 10);
              if (Number.isNaN(cents) || Number.isNaN(qty)) return;
              await updateSkuInventory(id, qty, cents);
            })
          }
        >
          Save
        </button>
        <span className="ml-2 text-xs text-ink-soft">${formatCad(wholesaleCostCents)} was</span>
      </td>
    </tr>
  );
}
