import Link from "next/link";
import { MarketingLayout } from "@/components/essentra/MarketingLayout";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function WhyPage() {
  return (
    <MarketingLayout>
      <div className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="font-serif text-4xl text-[#1B4332]">Why Essentra</h1>
        <div className="mt-10 space-y-8">
          {[
            {
              title: "Save time, not attention",
              text: "Recurring essentials drain mental energy when repeated every month. Automation frees bandwidth for what matters—especially for busy families.",
            },
            {
              title: "Brands you already trust",
              text: "We lean on recognition, not mystery labels—so the first delivery feels familiar, not risky.",
            },
            {
              title: "One price, emotionally simple",
              text: "Single-plan pricing avoids the pain of paying repeatedly for add-ons—a core complaint with complex subscription commerce.",
            },
            {
              title: "Built for Canada",
              text: "CAD pricing, domestic delivery framing, and policies designed for counsel review before launch.",
            },
          ].map((b) => (
            <div key={b.title}>
              <h2 className="text-xl font-semibold text-[#1A1A1A]">{b.title}</h2>
              <p className="mt-2 leading-relaxed text-[#64748B]">{b.text}</p>
            </div>
          ))}
        </div>
        <Link href="/build/step-1" className={cn(buttonVariants(), "mt-12 rounded-full bg-[#1B4332] hover:bg-[#40916C]")}>
          Build my box
        </Link>
      </div>
    </MarketingLayout>
  );
}
