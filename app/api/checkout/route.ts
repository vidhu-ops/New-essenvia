import bcrypt from "bcryptjs";
import { NextResponse } from "next/server";
import { resolveBasket } from "@/lib/build-resolver";
import type { BuildSelections } from "@/lib/build-types";
import { qualifyPackage, totalWholesaleCents } from "@/lib/package-engine";
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

  const skus = await prisma.productSku.findMany({ where: { active: true } });
  const packages = await prisma.subscriptionPackage.findMany({ where: { active: true } });
  const lines = resolveBasket(body.selections, skus);
  const skuMap = new Map(skus.map((s) => [s.id, s]));
  const internal = totalWholesaleCents(lines, skuMap);
  const pkg = qualifyPackage(internal, packages);

  const tempPassword = await bcrypt.hash(`tmp-${Date.now()}`, 10);
  const user = await prisma.user.create({
    data: {
      email: body.customer.email.toLowerCase(),
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

  const sub = await prisma.subscription.create({
    data: {
      customerId: user.customer!.id,
      packageId: pkg.id,
      status: "ACTIVE",
      monthlyPriceCents: pkg.priceCents,
      nextBillingDate: delivery,
      nextDeliveryDate: delivery,
      lineItems: {
        create: lines.map((l) => ({ skuId: l.skuId, quantity: l.quantity })),
      },
    },
  });

  const orderNumber = `ES-${Date.now().toString(36).toUpperCase()}`;
  await prisma.order.create({
    data: {
      orderNumber,
      customerId: user.customer!.id,
      subscriptionId: sub.id,
      status: "PAYMENT_CONFIRMED",
      deliveryDate: delivery,
      deliveryZone: body.customer.postalCode.slice(0, 3),
      lines: { create: lines.map((l) => ({ skuId: l.skuId, quantity: l.quantity })) },
    },
  });

  return NextResponse.json({
    ok: true,
    orderNumber,
    packageName: pkg.name,
    monthlyPriceCents: pkg.priceCents,
    customerId: user.customer!.id,
  });
}
