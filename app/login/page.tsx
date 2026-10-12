"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { MarketingLayout } from "@/components/essentra/MarketingLayout";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
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
    <MarketingLayout>
      <div className="mx-auto max-w-md px-5 py-16">
        <h1 className="font-display text-3xl text-ink">Sign in</h1>
        <p className="mt-2 text-[15px] text-ink-muted">Customers, reps, warehouse and admin use the same login.</p>
        <form onSubmit={onSubmit} className="mt-8 space-y-4">
          <label className="block text-sm font-medium text-ink">
            Email
            <input
              className="mt-1 w-full rounded-md border border-line bg-paper-warm px-3 py-2"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>
          <label className="block text-sm font-medium text-ink">
            Password
            <input
              className="mt-1 w-full rounded-md border border-line bg-paper-warm px-3 py-2"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>
          {error && <p className="text-sm text-red-700">{error}</p>}
          <button type="submit" className="w-full rounded-md bg-green py-3 text-[15px] font-medium text-[#faf8f5]">
            Sign in
          </button>
        </form>
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
