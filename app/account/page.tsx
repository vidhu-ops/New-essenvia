import Link from "next/link";
import { redirect } from "next/navigation";
import { SubscriptionActions } from "@/components/account/SubscriptionActions";
import { ConsoleLayout } from "@/components/essentra/ConsoleLayout";
import { activeSubscription, getCustomerAccount } from "@/lib/account-data";
import { getSession } from "@/lib/auth";
import { formatCad } from "@/lib/package-engine";

export default async function AccountPage() {
  const session = await getSession();
  if (!session) redirect("/login?next=/account");

  const customer = await getCustomerAccount(session.id);
  if (!customer) {
    return (
      <ConsoleLayout title="Account" allowed={["CUSTOMER", "ADMIN", "MANAGER", "SUPPORT"]}>
        <p className="text-ink-muted">No subscription on this account yet.</p>
        <Link href="/build/step-1" className="mt-4 inline-block text-green-light underline">
          Build your box
        </Link>
      </ConsoleLayout>
    );
  }

  const sub = activeSubscription(customer);
  const fmtDate = (d: Date | null | undefined) =>
    d ? d.toLocaleDateString("en-CA", { dateStyle: "medium" }) : "—";

  return (
    <ConsoleLayout title="Account" allowed={["CUSTOMER", "ADMIN", "MANAGER", "SUPPORT"]}>
      <h1 className="font-display text-3xl text-ink">My Essentra Box</h1>
      <p className="mt-2 text-ink-muted">Hi {customer.firstName} — here is your active subscription and next delivery.</p>

      {sub ? (
        <>
          <section className="mt-8 rounded-lg border border-line bg-paper-warm p-6">
            <h2 className="font-display text-xl text-ink">{sub.package.name}</h2>
            <p className="mt-2 text-sm text-ink-muted">
              ${formatCad(sub.monthlyPriceCents)} / month + tax · Status{" "}
              <span className="font-medium text-ink">{sub.status.replaceAll("_", " ")}</span>
            </p>
            <p className="mt-1 text-sm text-ink-muted">
              Next delivery {fmtDate(sub.nextDeliveryDate)} · Next billing {fmtDate(sub.nextBillingDate)}
            </p>
            <div className="mt-4">
              <SubscriptionActions subscriptionId={sub.id} status={sub.status} />
            </div>
          </section>

          <section className="mt-10">
            <h2 className="font-display text-xl text-ink">What&apos;s in your box</h2>
            <ul className="mt-4 space-y-2 text-sm text-ink-muted">
              {sub.lineItems.map((li) => (
                <li key={li.id}>
                  {li.sku.brand.name} · {li.sku.customerDescription} × {li.quantity}
                </li>
              ))}
            </ul>
          </section>
        </>
      ) : (
        <p className="mt-8 text-ink-muted">No active subscription.</p>
      )}

      <section className="mt-10">
        <h2 className="font-display text-xl text-ink">Recent orders</h2>
        <ul className="mt-4 space-y-2 text-sm">
          {customer.orders.map((o) => (
            <li key={o.id} className="flex justify-between border-b border-line/60 py-2 text-ink-muted">
              <span className="font-mono text-xs">{o.orderNumber}</span>
              <span>{o.status.replaceAll("_", " ")}</span>
            </li>
          ))}
        </ul>
      </section>
    </ConsoleLayout>
  );
}
