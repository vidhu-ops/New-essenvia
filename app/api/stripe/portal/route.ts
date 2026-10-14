import { NextResponse } from "next/server";
import { activeSubscription, getCustomerAccount } from "@/lib/account-data";
import { getSession } from "@/lib/auth";
import { getStripe, stripeEnabled } from "@/lib/stripe";

export async function GET(req: Request) {
  if (!stripeEnabled()) {
    return NextResponse.redirect(new URL("/account/billing", req.url));
  }
  const session = await getSession();
  if (!session) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
  const customer = await getCustomerAccount(session.id);
  const sub = customer ? activeSubscription(customer) : null;
  const stripeCustomerId = sub?.stripeCustomerId;
  if (!stripeCustomerId) {
    return NextResponse.redirect(new URL("/account/billing", req.url));
  }
  const stripe = getStripe()!;
  const base = process.env.NEXT_PUBLIC_APP_URL ?? new URL(req.url).origin;
  const portal = await stripe.billingPortal.sessions.create({
    customer: stripeCustomerId,
    return_url: `${base}/account/billing`,
  });
  return NextResponse.redirect(portal.url);
}
