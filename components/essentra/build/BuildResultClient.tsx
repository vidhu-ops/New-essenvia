"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { HumanCta } from "@/components/essentra/HumanCta";
import { useBuildStore } from "@/lib/build-store";

type Calc = {
  packageName: string;
  monthlyPriceDisplay: string;
  items: { description: string; brand: string; quantity: number }[];
};

export function BuildResultClient() {
  const selections = useBuildStore((s) => s.selections);
  const [calc, setCalc] = useState<Calc | null>(null);

  useEffect(() => {
    fetch("/api/build/calculate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ selections }),
    })
      .then((r) => r.json())
      .then(setCalc);
  }, [selections]);

  if (!calc) {
    return <p className="py-20 text-center text-ink-muted">Calculating your package…</p>;
  }

  return (
    <>
      <div className="border border-line bg-paper-warm p-6">
        <p className="text-[14px] text-ink-soft">Your Essentra package</p>
        <p className="mt-1 font-display text-2xl text-ink">{calc.packageName}</p>
        <p className="mt-4 font-display text-4xl text-ink">
          ${calc.monthlyPriceDisplay}
          <span className="font-body text-base text-ink-soft"> / month + tax</span>
        </p>
      </div>
      <ul className="mt-8 space-y-3 border-t border-line pt-8 text-[15px] text-ink-muted">
        {calc.items.map((item) => (
          <li key={item.description}>
            {item.description} × {item.quantity}
          </li>
        ))}
      </ul>
      <p className="mt-6 text-[15px] text-ink-muted">One simple monthly price — no credits or per-item surcharges.</p>
      <div className="mt-10 space-y-3">
        <HumanCta href="/build/checkout" className="block w-full text-center">
          Start my subscription
        </HumanCta>
        <Link href="/build/step-1" className="block text-center text-[15px] text-green-light underline decoration-line underline-offset-4">
          Change my answers
        </Link>
      </div>
    </>
  );
}
