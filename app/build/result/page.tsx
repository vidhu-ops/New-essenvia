import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function BuildResult() {
  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      <header className="border-b border-[#E2E8F0] bg-white px-4 py-4 text-center">
        <p className="font-serif text-lg text-[#1B4332]">Your Essentra package</p>
      </header>
      <div className="mx-auto max-w-lg px-4 py-8">
        <Card className="overflow-hidden border-[#40916C]/30">
          <div className="bg-gradient-to-br from-[#1B4332] to-[#40916C] px-6 py-8 text-white">
            <p className="text-sm text-[#D8F3DC]">Recommended plan</p>
            <p className="font-serif text-3xl">Essentra Family</p>
            <p className="mt-4 font-serif text-5xl tracking-tight">
              $134.99
              <span className="text-lg font-sans font-normal text-[#D8F3DC]">/mo + tax</span>
            </p>
            <p className="mt-3 text-sm text-[#D8F3DC]/90">One price on your invoice—no line-item wholesale math.</p>
          </div>
          <CardContent className="pt-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-[#64748B]">Your box includes</p>
            <ul className="mt-4 space-y-3 text-sm">
              {[
                "Tide liquid detergent · 1.47L",
                "Charmin toilet paper · 12 mega rolls",
                "Bounty paper towels · 6 rolls",
                "Cascade pods · 43 count",
                "+ kitchen & cleaning items",
              ].map((line) => (
                <li key={line} className="flex gap-2 border-b border-[#E2E8F0]/80 pb-3 last:border-0">
                  <span className="text-[#40916C]">●</span>
                  {line}
                </li>
              ))}
            </ul>
            <p className="mt-6 rounded-lg bg-[#D8F3DC]/50 px-4 py-3 text-xs text-[#1B4332]">
              <strong>Psychology note:</strong> Price appears once, after commitment to preferences—reduces early sticker
              shock and supports endowment effect (“this is my box”).
            </p>
            <p className="mt-4 text-sm text-[#64748B]">First delivery est. <strong className="text-[#1A1A1A]">Oct 18, 2026</strong> · Monthly</p>
            <Link
              href="/build/checkout"
              className={cn(buttonVariants(), "mt-6 flex h-12 w-full rounded-xl bg-[#1B4332] hover:bg-[#40916C]")}
            >
              Start my subscription
            </Link>
            <Link href="/build/step-1" className="mt-4 block text-center text-sm text-[#40916C] hover:underline">
              Edit preferences
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
