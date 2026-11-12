import { NextResponse } from "next/server";
import { createMagicLinkToken } from "@/lib/magic-link";
import { prisma } from "@/lib/prisma";
import { sendMagicLinkEmail } from "@/lib/email";

export async function POST(req: Request) {
  const { email } = (await req.json()) as { email: string };
  const normalized = email?.toLowerCase().trim();
  if (!normalized) return NextResponse.json({ error: "Email required" }, { status: 400 });

  const user = await prisma.user.findUnique({ where: { email: normalized } });
  if (!user) {
    return NextResponse.json({ ok: true, message: "If an account exists, we sent a link." });
  }

  const { url } = await createMagicLinkToken(normalized);
  await sendMagicLinkEmail(normalized, url);

  const showDevLink = process.env.NODE_ENV !== "production" && process.env.ALLOW_DEMO_LOGIN_HINT === "true";
  return NextResponse.json({
    ok: true,
    message: "If an account exists, we sent a link.",
    devLink: showDevLink ? url : undefined,
  });
}
