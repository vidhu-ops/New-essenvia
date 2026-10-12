import Link from "next/link";
import { ConsoleLayout } from "@/components/essentra/ConsoleLayout";
import { HumanCta } from "@/components/essentra/HumanCta";

export default function RepComparePage() {
  return (
    <ConsoleLayout title="Sales rep" allowed={["SALES_REP", "ADMIN"]}>
      <p className="text-xs font-semibold uppercase tracking-wide text-ink-soft">Step 1 · Compare</p>
      <h1 className="mt-2 font-display text-2xl text-ink">What the household buys today</h1>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border border-line p-5">
          <h2 className="font-medium text-ink">Current routine</h2>
          <ul className="mt-4 space-y-2 text-sm text-ink-muted">
            <li>10 product categories (detergent, paper, kitchen, cleaning)</li>
            <li>3–4 store trips per month</li>
            <li>Typical basket entered from admin retail comparison sheet</li>
          </ul>
        </div>
        <div className="rounded-lg border border-line bg-paper-warm p-5">
          <h2 className="font-medium text-ink">With Essentra</h2>
          <ul className="mt-4 space-y-2 text-sm text-ink-muted">
            <li>Same national brands, one monthly price</li>
            <li>Zero shopping trips</li>
            <li>Delivery to the door · rep credited on signup</li>
          </ul>
        </div>
      </div>
      <div className="mt-10">
        <HumanCta href="/rep/customize">Customize my box</HumanCta>
      </div>
      <p className="mt-6 text-sm text-ink-soft">
        Flow: Compare → Customize → Package → Customer info → Agreement → Payment (
        <Link href="/rep/signup" className="underline">
          demo sign & pay
        </Link>
        )
      </p>
    </ConsoleLayout>
  );
}
