import bcrypt from "bcryptjs";
import crypto from "crypto";
import { NextResponse } from "next/server";
import { resolveBasket } from "@/lib/build-resolver";
import type { BuildSelections } from "@/lib/build-types";
import { createMagicLinkToken } from "@/lib/magic-link";
import { sendWelcomeEmail } from "@/lib/email";
import { qualifyPackage, totalWholesaleCents } from "@/lib/package-engine";
import { getStripe, priceIdForPackageSlug, stripeEnabled } from "@/lib/stripe";
import { ensureProductionJobForOrder } from "@/lib/ops";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  const body = (await req.json()) as {
    selections: BuildSelections;
    customer: {
      firstName: string;
      lastName: string;
      email: string;
      phone: string;
      addressLine1: string;
      addressLine2?: string;
      city: string;
      province: string;
      postalCode: string;
      deliveryNotes?: string;
    };
    repId?: string;
  };

  const email = body.customer.email.toLowerCase().trim();
  const existing = await prisma.user.findUnique({ where: { email } });
  if (existing) {
    return NextResponse.json({ error: "An account with this email already exists. Sign in to manage your box." }, { status: 409 });
  }

  const skus = await prisma.productSku.findMany({ where: { active: true } });
  const packages = await prisma.subscriptionPackage.findMany({ where: { active: true } });
  const lines = resolveBasket(body.selections, skus);
  const skuMap = new Map(skus.map((s) => [s.id, s]));
  const internal = totalWholesaleCents(lines, skuMap);
  const pkg = qualifyPackage(internal, packages);

  const tempPassword = await bcrypt.hash(crypto.randomBytes(32).toString("base64url"), 10);
  const user = await prisma.user.create({
    data: {
      email,
      passwordHash: tempPassword,
      role: "CUSTOMER",
      name: `${body.customer.firstName} ${body.customer.lastName}`,
      phone: body.customer.phone,
      customer: {
        create: {
          firstName: body.customer.firstName,
          lastName: body.customer.lastName,
          addressLine1: body.customer.addressLine1,
          addressLine2: body.customer.addressLine2,
          city: body.customer.city,
          province: body.customer.province,
          postalCode: body.customer.postalCode,
          deliveryNotes: body.customer.deliveryNotes,
          acquiredByRepId: body.repId,
        },
      },
    },
    include: { customer: true },
  });

  const delivery = new Date();
  delivery.setDate(delivery.getDate() + 14);

  const useStripe = stripeEnabled() && Boolean(priceIdForPackageSlug(pkg.slug));
  const sub = await prisma.subscription.create({
    data: {
      customerId: user.customer!.id,
      packageId: pkg.id,
      status: useStripe ? "PENDING" : "ACTIVE",
      monthlyPriceCents: pkg.priceCents,
      nextBillingDate: delivery,
      nextDeliveryDate: delivery,
      lineItems: {
        create: lines.map((l) => ({ skuId: l.skuId, quantity: l.quantity })),
      },
    },
  });

  const orderNumber = `ES-${Date.now().toString(36).toUpperCase()}`;
  const order = await prisma.order.create({
    data: {
      orderNumber,
      customerId: user.customer!.id,
      subscriptionId: sub.id,
      status: useStripe ? "AWAITING_PAYMENT" : "PAYMENT_CONFIRMED",
      deliveryDate: delivery,
      deliveryZone: body.customer.postalCode.slice(0, 3).toUpperCase(),
      lines: { create: lines.map((l) => ({ skuId: l.skuId, quantity: l.quantity })) },
    },
  });
  if (!useStripe) {
    await ensureProductionJobForOrder(order.id);
  }

  const base = process.env.NEXT_PUBLIC_APP_URL ?? new URL(req.url).origin;
  const { url: magicUrl } = await createMagicLinkToken(email);
  await sendWelcomeEmail(email, magicUrl, orderNumber);

  if (useStripe) {
    const stripe = getStripe()!;
    const priceId = priceIdForPackageSlug(pkg.slug)!;
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      customer_email: email,
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${base}/build/confirmed?order=${encodeURIComponent(orderNumber)}&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${base}/build/checkout?cancelled=1`,
      metadata: {
        subscriptionId: sub.id,
        customerId: user.customer!.id,
        orderNumber,
      },
      subscription_data: {
        metadata: { subscriptionId: sub.id },
      },
    });
    return NextResponse.json({
      ok: true,
      stripeCheckoutUrl: session.url,
      orderNumber,
      packageName: pkg.name,
      monthlyPriceCents: pkg.priceCents,
    });
  }

  return NextResponse.json({
    ok: true,
    orderNumber,
    packageName: pkg.name,
    monthlyPriceCents: pkg.priceCents,
    customerId: user.customer!.id,
    magicLink:
      process.env.NODE_ENV !== "production" && process.env.ALLOW_DEMO_LOGIN_HINT === "true" ? magicUrl : undefined,
  });
}
