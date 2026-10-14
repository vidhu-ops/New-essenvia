import { redirect } from "next/navigation";
import { DeliveryForm } from "@/components/account/DeliveryForm";
import { ConsoleLayout } from "@/components/essentra/ConsoleLayout";
import { getCustomerAccount } from "@/lib/account-data";
import { getSession } from "@/lib/auth";

export default async function AccountDeliveryPage() {
  const session = await getSession();
  if (!session) redirect("/login?next=/account/delivery");
  const customer = await getCustomerAccount(session.id);
  if (!customer) redirect("/build/step-1");

  return (
    <ConsoleLayout title="Account" allowed={["CUSTOMER", "ADMIN", "MANAGER", "SUPPORT"]}>
      <h1 className="font-display text-2xl text-ink">Delivery</h1>
      <p className="mt-2 text-sm text-ink-muted">Update where we ship your monthly box. Changes apply before your cut-off date.</p>
      <DeliveryForm initial={customer} />
    </ConsoleLayout>
  );
}
