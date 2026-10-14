import Link from "next/link";
import { ConsoleLayout } from "@/components/essentra/ConsoleLayout";
import { HumanCta } from "@/components/essentra/HumanCta";

export default function RepCustomizePage() {
  return (
    <ConsoleLayout title="Sales rep" allowed={["SALES_REP", "ADMIN", "MANAGER"]}>
      <p className="text-xs font-semibold uppercase tracking-wide text-ink-soft">Step 2 · Customize</p>
      <h1 className="mt-2 font-display text-2xl text-ink">Build the household box with the customer</h1>
      <p className="mt-4 max-w-2xl text-ink-muted">
        Use the same engine as the public site. In production this step runs full-screen on a tablet with saved session attribution to your rep ID.
      </p>
      <HumanCta href="/build/step-1" className="mt-8 inline-block">
        Launch build flow
      </HumanCta>
      <p className="mt-6 text-sm">
        <Link href="/rep/signup" className="text-green-light underline">
          Next: customer info & payment →
        </Link>
      </p>
    </ConsoleLayout>
  );
}
