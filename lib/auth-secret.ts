/** Session signing material — never ship a fallback secret in production. */
export function getAuthSecretBytes(): Uint8Array {
  const raw = process.env.AUTH_SECRET?.trim();
  const isProd =
    process.env.NODE_ENV === "production" || process.env.VERCEL === "1" || process.env.CURSOR_APP === "1";
  if (!raw || raw.length < 32) {
    if (isProd) {
      throw new Error("AUTH_SECRET must be set (min 32 characters) in production");
    }
    throw new Error("Set AUTH_SECRET in .env (min 32 characters) for local development");
  }
  return new TextEncoder().encode(raw);
}
