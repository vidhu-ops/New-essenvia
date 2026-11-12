import Link from "next/link";
import { ConsoleLayout } from "@/components/essentra/ConsoleLayout";
import { HumanCta } from "@/components/essentra/HumanCta";
import { getSession } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export default async function RepDashboardPage() {
  const session = await getSession();
  const attributed =
    session?.role === "SALES_REP"
      ? await prisma.customer.count({ where: { acquiredByRepId: session.id } })
      : await prisma.customer.count({ where: { acquiredByRepId: { not: null } } });

  return (
    <ConsoleLayout title="Sales rep" allowed={["SALES_REP", "ADMIN", "MANAGER"]}>
      <p className="text-xs font-semibold uppercase tracking-wide text-ink-soft">Rep app · v2</p>
      <h1 className="mt-2 font-display text-2xl text-ink">Field dashboard</h1>
      <p className="mt-2 text-sm text-ink-muted">
        Attributed signups on your account: <span className="font-medium text-ink">{attributed}</span>
      </p>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-lg border border-line p-5">
          <h2 className="font-medium text-ink">Compare</h2>
          <p className="mt-2 text-sm text-ink-muted">Walk through store-bought vs Essentra in the home.</p>
          <HumanCta href="/rep/customize" className="mt-4 inline-block" size="large">
            Start customize flow
          </HumanCta>
        </div>
        <div className="rounded-lg border border-line bg-paper-warm p-5">
          <h2 className="font-medium text-ink">Sign & pay</h2>
          <p className="mt-2 text-sm text-ink-muted">Web checkout demo; Stripe Terminal in production.</p>
          <HumanCta href="/rep/signup" variant="secondary" className="mt-4 inline-block">
            Open checkout
          </HumanCta>
        </div>
      </div>
      <p className="mt-8 text-sm text-ink-soft">
        Admin:{" "}
        <Link href="/admin/sales-reps" className="underline">
          rep roster & attribution
        </Link>
      </p>
    </ConsoleLayout>
  );
}
