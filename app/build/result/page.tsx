import { HumanCta } from "@/components/essentra/HumanCta";
import Link from "next/link";

export default function BuildResult() {
  return (
    <div className="min-h-screen bg-paper">
      <header className="border-b border-line bg-paper-warm px-5 py-5 text-center">
        <p className="font-display text-xl text-ink">Here’s what we’d send you</p>
      </header>
      <div className="mx-auto max-w-lg px-5 py-10">
        <div className="border border-line bg-paper-warm p-6">
          <p className="text-[14px] text-ink-soft">Suggested plan</p>
          <p className="mt-1 font-display text-2xl text-ink">Essentra Family</p>
          <p className="mt-4 font-display text-4xl text-ink">
            $134.99
            <span className="font-body text-base text-ink-soft"> / month + tax</span>
          </p>
        </div>
        <ul className="mt-8 space-y-3 border-t border-line pt-8 text-[15px] text-ink-muted">
          <li>Tide liquid · about 1.47L</li>
          <li>Charmin · 12 mega rolls</li>
          <li>Bounty · 6 rolls</li>
          <li>Cascade pods · 43 count</li>
          <li>Plus dish soap, bags, cleaner, wipes—you get the idea.</li>
        </ul>
        <p className="mt-6 text-[15px] text-ink-muted">
          First delivery around <strong className="font-medium text-ink">Oct 18</strong>, then monthly on the same rhythm.
        </p>
        <div className="mt-10 space-y-3">
          <HumanCta href="/build/checkout" className="block w-full text-center">
            Continue to checkout
          </HumanCta>
          <Link href="/build/step-1" className="block text-center text-[15px] text-green-light underline decoration-line underline-offset-4">
            Change my answers
          </Link>
        </div>
      </div>
    </div>
  );
}
