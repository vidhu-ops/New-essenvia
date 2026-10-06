import Link from "next/link";
import { MarketingLayout } from "@/components/essentra/MarketingLayout";
import { Card, CardContent } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const plans = [
  { name: "Essentra Essential", price: "120.99", detail: "Lighter overall consumption across categories." },
  {
    name: "Essentra Family",
    price: "134.99",
    detail: "Balanced for typical Canadian family use.",
    featured: true,
  },
  { name: "Essentra Plus", price: "149.99", detail: "Higher volume households or heavier category use." },
];

export default function PlansPage() {
  return (
    <MarketingLayout>
      <div className="mx-auto max-w-4xl px-4 py-16">
        <h1 className="font-serif text-4xl text-[#1B4332]">Plans & pricing</h1>
        <p className="mt-4 max-w-2xl text-[#64748B]">
          Plans are assigned from your customized basket—not from picking “small/medium/large” on every aisle. That keeps
          the mental model honest and the invoice simple.
        </p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {plans.map((p) => (
            <Card key={p.name} className={cn(p.featured && "border-[#40916C] ring-1 ring-[#40916C]/20")}>
              <CardContent className="pt-6">
                {p.featured && <p className="text-xs font-semibold uppercase text-[#40916C]">Most matched</p>}
                <h2 className="mt-1 font-semibold text-[#1B4332]">{p.name}</h2>
                <p className="mt-4 font-serif text-4xl">
                  ${p.price}
                  <span className="text-base font-sans text-[#64748B]">/mo + tax</span>
                </p>
                <p className="mt-3 text-sm text-[#64748B]">{p.detail}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <Link
          href="/build/step-1"
          className={cn(buttonVariants(), "mt-10 inline-flex rounded-full bg-[#1B4332] hover:bg-[#40916C]")}
        >
          Find my plan
        </Link>
      </div>
    </MarketingLayout>
  );
}
