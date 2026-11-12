import { NextResponse } from "next/server";
import type Stripe from "stripe";
import { getStripe, stripeEnabled } from "@/lib/stripe";
import { ensureProductionJobForOrder } from "@/lib/ops";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  if (!stripeEnabled()) {
    return NextResponse.json({ error: "Stripe not configured" }, { status: 503 });
  }
  const stripe = getStripe()!;
  const sig = req.headers.get("stripe-signature");
  const secret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!sig || !secret) {
    return NextResponse.json({ error: "Webhook misconfigured" }, { status: 400 });
  }

  const raw = await req.text();
  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(raw, sig, secret);
  } catch {
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session;
    const subscriptionId = session.metadata?.subscriptionId;
    const stripeCustomerId = typeof session.customer === "string" ? session.customer : session.customer?.id;
    if (subscriptionId) {
      await prisma.subscription.update({
        where: { id: subscriptionId },
        data: { status: "ACTIVE", stripeCustomerId: stripeCustomerId ?? undefined },
      });
      const order = await prisma.order.findFirst({
        where: { subscriptionId, status: "AWAITING_PAYMENT" },
      });
      if (order) {
        await prisma.order.update({ where: { id: order.id }, data: { status: "PAYMENT_CONFIRMED" } });
        await ensureProductionJobForOrder(order.id);
      }
    }
  }

  if (event.type === "invoice.payment_failed") {
    const invoice = event.data.object as Stripe.Invoice;
    const stripeSubId = invoice.subscription;
    if (typeof stripeSubId === "string") {
      const stripeSub = await stripe.subscriptions.retrieve(stripeSubId);
      const localId = stripeSub.metadata?.subscriptionId;
      if (localId) {
        await prisma.subscription.update({ where: { id: localId }, data: { status: "PAST_DUE" } });
      }
    }
  }

  return NextResponse.json({ received: true });
}
