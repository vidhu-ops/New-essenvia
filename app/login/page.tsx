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
    const next = searchParams.get("next");
    router.push(next && next.startsWith("/") ? next : data.redirect);
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

function MagicLinkForm() {
  const searchParams = useSearchParams();
  const emailDefault = searchParams.get("email")?.trim() ?? "";
  const [message, setMessage] = useState("");
  const [devLink, setDevLink] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMessage("");
    setDevLink("");
    const fd = new FormData(e.currentTarget);
    const email = String(fd.get("magic-email") ?? "").trim();
    const res = await fetch("/api/auth/magic-request", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    const data = await res.json();
    setMessage(data.message ?? "Check your email for a sign-in link.");
    if (data.devLink) setDevLink(data.devLink);
  }

  return (
    <form onSubmit={onSubmit} className="mt-8 space-y-3 border-t border-line pt-8">
      <h2 className="font-display text-lg text-ink">Customer magic link</h2>
      <p className="text-sm text-ink-muted">We email a one-time link — no password needed after checkout.</p>
      <input
        name="magic-email"
        type="email"
        defaultValue={emailDefault}
        required
        placeholder="you@example.com"
        className="w-full rounded-md border border-line bg-paper-warm px-3 py-2 text-ink"
      />
      <button type="submit" className="w-full rounded-md border border-line py-2.5 text-[15px] font-medium text-ink hover:bg-paper-warm">
        Email sign-in link
      </button>
      {message && <p className="text-sm text-ink-muted">{message}</p>}
      {devLink && (
        <p className="text-xs text-ink-soft">
          Dev link:{" "}
          <a href={devLink} className="break-all text-green-light underline">
            {devLink}
          </a>
        </p>
      )}
    </form>
  );
}

export default function LoginPage() {
  return (
    <MarketingLayout>
      <div className="mx-auto max-w-md px-5 py-16">
        <h1 className="font-display text-3xl text-ink">Sign in</h1>
        <p className="mt-2 text-[15px] text-ink-muted">Staff use password. Customers can use a magic link.</p>
        <Suspense fallback={<p className="mt-8 text-sm text-ink-muted">Loading form…</p>}>
          <LoginForm />
          <MagicLinkForm />
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
