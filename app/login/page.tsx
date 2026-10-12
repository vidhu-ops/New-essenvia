"use client";

import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { Suspense, useState } from "react";
import { MarketingLayout } from "@/components/essentra/MarketingLayout";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const emailDefault = searchParams.get("email")?.trim() ?? "";
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError("");
    const fd = new FormData(e.currentTarget);
    const email = String(fd.get("email") ?? "").trim();
    const password = String(fd.get("password") ?? "");
    const res = await fetch("/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    if (!res.ok) {
      setError(data.error ?? "Login failed");
      return;
    }
    router.push(data.redirect);
    router.refresh();
  }

  return (
    <form onSubmit={onSubmit} className="mt-8 space-y-4" autoComplete="on">
      <div>
        <label htmlFor="login-email" className="block text-sm font-medium text-ink">
          Email
        </label>
        <input
          id="login-email"
          name="email"
          data-testid="login-email"
          className="mt-1 w-full rounded-md border border-line bg-paper-warm px-3 py-2 text-ink"
          type="email"
          defaultValue={emailDefault}
          autoComplete="email"
          required
        />
      </div>
      <div>
        <label htmlFor="login-password" className="block text-sm font-medium text-ink">
          Password
        </label>
        <input
          id="login-password"
          name="password"
          data-testid="login-password"
          className="mt-1 w-full rounded-md border border-line bg-paper-warm px-3 py-2 text-ink"
          type="password"
          autoComplete="current-password"
          required
        />
      </div>
      {error && <p className="text-sm text-red-700">{error}</p>}
      <button type="submit" className="w-full rounded-md bg-green py-3 text-[15px] font-medium text-[#faf8f5]">
        Sign in
      </button>
    </form>
  );
}

export default function LoginPage() {
  return (
    <MarketingLayout>
      <div className="mx-auto max-w-md px-5 py-16">
        <h1 className="font-display text-3xl text-ink">Sign in</h1>
        <p className="mt-2 text-[15px] text-ink-muted">Customers, reps, warehouse and admin use the same login.</p>
        <Suspense fallback={<p className="mt-8 text-sm text-ink-muted">Loading form…</p>}>
          <LoginForm />
        </Suspense>
        <p className="mt-6 text-sm text-ink-soft">
          Demo: <code className="rounded bg-paper-warm px-1">admin@essentra.ca</code>,{" "}
          <code className="rounded bg-paper-warm px-1">rep@essentra.ca</code>,{" "}
          <code className="rounded bg-paper-warm px-1">warehouse@essentra.ca</code> — password{" "}
          <code className="rounded bg-paper-warm px-1">essentra-demo</code>
        </p>
        <p className="mt-4 text-sm">
          <Link href="/build/step-1" className="text-green-light underline">
            New here? Build your box
          </Link>
        </p>
      </div>
    </MarketingLayout>
  );
}
