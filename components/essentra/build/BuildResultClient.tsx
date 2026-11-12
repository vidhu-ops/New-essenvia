"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { HumanCta } from "@/components/essentra/HumanCta";
import { useBuildStore } from "@/lib/build-store";

type Calc = {
  packageName: string;
  monthlyPriceDisplay: string;
  items: {
    description: string;
    brand: string;
    quantity: number;
    sizeLabel: string;
    imageUrl: string;
    imageAlt: string;
  }[];
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
    return <p className="py-12 text-center text-ink-muted">Matching your plan…</p>;
  }

  return (
    <>
      <div className="rounded-lg border border-line bg-paper-warm p-5">
        <p className="text-sm text-ink-soft">Your plan</p>
        <p className="font-display text-2xl text-ink">{calc.packageName}</p>
        <p className="mt-3 font-display text-3xl text-ink">
          ${calc.monthlyPriceDisplay}
          <span className="font-body text-base text-ink-soft"> / month + tax</span>
        </p>
      </div>
      <ul className="mt-6 space-y-3">
        {calc.items.map((item) => (
          <li key={`${item.description}-${item.sizeLabel}`} className="flex gap-3 rounded-md border border-line bg-white p-3">
            <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-md bg-paper-warm">
              <Image src={item.imageUrl} alt={item.imageAlt} fill className="object-cover" sizes="64px" />
            </div>
            <div className="min-w-0 flex-1 text-[15px]">
              <p className="font-medium text-ink">{item.description}</p>
              <p className="text-sm text-ink-muted">
                {item.brand} · {item.sizeLabel} × {item.quantity}
              </p>
            </div>
          </li>
        ))}
      </ul>
      <p className="mt-6 text-sm text-ink-muted">One monthly charge—no per-item surcharges at checkout.</p>
      <div className="mt-8 space-y-3">
        <HumanCta href="/build/checkout" size="large" className="block w-full text-center">
          Start subscription
        </HumanCta>
        <Link href="/build/step-1" className="block text-center text-sm text-green-light underline">
          Change answers
        </Link>
      </div>
    </>
  );
}
