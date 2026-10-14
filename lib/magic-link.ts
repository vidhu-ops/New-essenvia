import crypto from "crypto";
import { prisma } from "@/lib/prisma";

const TTL_MS = 1000 * 60 * 30;

function hashToken(token: string) {
  return crypto.createHash("sha256").update(token).digest("hex");
}

export async function createMagicLinkToken(email: string): Promise<{ token: string; url: string }> {
  const normalized = email.toLowerCase().trim();
  const token = crypto.randomBytes(32).toString("base64url");
  const tokenHash = hashToken(token);
  const expiresAt = new Date(Date.now() + TTL_MS);
  await prisma.loginToken.create({
    data: { email: normalized, tokenHash, expiresAt },
  });
  const base = process.env.NEXT_PUBLIC_APP_URL ?? "http://127.0.0.1:4321";
  return { token, url: `${base}/api/auth/magic?token=${encodeURIComponent(token)}` };
}

export async function consumeMagicLinkToken(token: string): Promise<string | null> {
  const tokenHash = hashToken(token);
  const row = await prisma.loginToken.findUnique({ where: { tokenHash } });
  if (!row || row.usedAt || row.expiresAt < new Date()) return null;
  await prisma.loginToken.update({
    where: { id: row.id },
    data: { usedAt: new Date() },
  });
  return row.email;
}
