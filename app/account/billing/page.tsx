import Link from "next/link";
import { redirect } from "next/navigation";
import { ConsoleLayout } from "@/components/essentra/ConsoleLayout";
import { activeSubscription, getCustomerAccount } from "@/lib/account-data";
import { getSession } from "@/lib/auth";
import { formatCad } from "@/lib/package-engine";
import { stripeEnabled } from "@/lib/stripe";

export default async function AccountBillingPage() {
  const session = await getSession();
  if (!session) redirect("/login?next=/account/billing");
  const customer = await getCustomerAccount(session.id);
  if (!customer) redirect("/build/step-1");
  const sub = activeSubscription(customer);

  return (
    <ConsoleLayout title="Account" allowed={["CUSTOMER", "ADMIN", "MANAGER", "SUPPORT"]}>
      <h1 className="font-display text-2xl text-ink">Billing</h1>
      {sub ? (
        <div className="mt-6 rounded-lg border border-line bg-paper-warm p-6 text-sm text-ink-muted">
          <p>
            Plan: <span className="font-medium text-ink">{sub.package.name}</span>
          </p>
          <p className="mt-2">
            Monthly: <span className="font-medium text-ink">${formatCad(sub.monthlyPriceCents)} + tax</span>
          </p>
          {stripeEnabled() && sub.stripeCustomerId ? (
            <p className="mt-4">
              <Link href="/api/stripe/portal" className="text-green-light underline">
                Open Stripe billing portal
              </Link>{" "}
              (payment methods & invoices)
            </p>
          ) : (
            <p className="mt-4 text-ink-soft">
              Demo mode: card on file is simulated. Connect Stripe in production for Customer Portal.
            </p>
          )}
        </div>
      ) : (
        <p className="mt-6 text-ink-muted">No billing profile yet.</p>
      )}
      <p className="mt-8 text-sm text-ink-soft">
        See <Link href="/legal/subscription" className="underline">Subscription Terms</Link> and{" "}
        <Link href="/legal/refunds" className="underline">Refunds</Link>.
      </p>
    </ConsoleLayout>
  );
}
