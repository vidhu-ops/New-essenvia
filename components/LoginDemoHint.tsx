/** Shown only in local dev when explicitly enabled — never on production publish. */
export function LoginDemoHint() {
  if (process.env.NODE_ENV === "production") return null;
  if (process.env.ALLOW_DEMO_LOGIN_HINT !== "true") return null;
  return (
    <p className="mt-6 text-sm text-ink-soft">
      Local dev staff logins are configured via <code className="rounded bg-paper-warm px-1">SEED_STAFF_PASSWORD</code>{" "}
      when seeding — not listed here.
    </p>
  );
}
