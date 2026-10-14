import Link from "next/link";
import { ConsoleLayout } from "@/components/essentra/ConsoleLayout";
import { HumanCta } from "@/components/essentra/HumanCta";

export default function RepSignupPage() {
  return (
    <ConsoleLayout title="Sales rep" allowed={["SALES_REP", "ADMIN", "MANAGER"]}>
      <p className="text-xs font-semibold uppercase tracking-wide text-ink-soft">Step 5 · Sign & pay</p>
      <h1 className="mt-2 font-display text-2xl text-ink">Agreement & payment</h1>
      <p className="mt-4 max-w-2xl text-ink-muted">
        Production uses Stripe Terminal for in-home card present payments, offline queueing, and automatic rep commission attribution. This demo routes through web checkout.
      </p>
      <HumanCta href="/build/checkout" className="mt-8 inline-block">
        Open checkout (web demo)
      </HumanCta>
      <p className="mt-6 text-sm text-ink-soft">
        <Link href="/rep" className="underline">
          ← Back to compare
        </Link>
      </p>
    </ConsoleLayout>
  );
}
