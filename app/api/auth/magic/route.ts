import { NextResponse } from "next/server";
import { createSession, sessionFromUser } from "@/lib/auth";
import { consumeMagicLinkToken } from "@/lib/magic-link";
import { prisma } from "@/lib/prisma";

export async function GET(req: Request) {
  const url = new URL(req.url);
  const token = url.searchParams.get("token");
  if (!token) {
    return NextResponse.redirect(new URL("/login?error=missing-token", url.origin));
  }
  const email = await consumeMagicLinkToken(token);
  if (!email) {
    return NextResponse.redirect(new URL("/login?error=invalid-token", url.origin));
  }
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    return NextResponse.redirect(new URL("/login?error=no-user", url.origin));
  }
  await createSession(sessionFromUser(user));
  return NextResponse.redirect(new URL("/account", url.origin));
}
