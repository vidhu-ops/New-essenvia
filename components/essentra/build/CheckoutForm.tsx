"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useBuildStore } from "@/lib/build-store";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function CheckoutForm() {
  const router = useRouter();
  const selections = useBuildStore((s) => s.selections);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    province: "ON",
    postalCode: "",
    deliveryNotes: "",
  });

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ selections, customer: form }),
    });
    const data = await res.json();
    setLoading(false);
    if (!res.ok) {
      setError(data.error ?? "Checkout failed");
      return;
    }
    if (data.stripeCheckoutUrl) {
      window.location.href = data.stripeCheckoutUrl;
      return;
    }
    const q = new URLSearchParams({ order: data.orderNumber });
    if (data.magicLink) q.set("signin", data.magicLink);
    router.push(`/build/confirmed?${q.toString()}`);
  }

  return (
    <>
      <Link href="/build/result" className="text-[15px] text-green-light underline decoration-line underline-offset-4">
        Back to your box
      </Link>
      <h1 className="mt-6 font-display text-[1.65rem] text-ink">Checkout</h1>
      <p className="mt-2 text-[16px] text-ink-muted">
        Subscribe in CAD. With Stripe configured, you&apos;ll complete payment on Stripe Checkout; otherwise this demo activates your box locally.
      </p>
      <form onSubmit={submit} className="mt-8 space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <Label htmlFor="fn">First name</Label>
            <Input id="fn" required className="mt-1 rounded-md border-line bg-white text-ink" value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} />
          </div>
          <div>
            <Label htmlFor="ln">Last name</Label>
            <Input id="ln" required className="mt-1 rounded-md border-line bg-white text-ink" value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} />
          </div>
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" required className="mt-1 rounded-md border-line bg-white text-ink" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
        </div>
        <div>
          <Label htmlFor="phone">Mobile</Label>
          <Input id="phone" required className="mt-1 rounded-md border-line bg-white text-ink" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
        </div>
        <div>
          <Label htmlFor="addr">Delivery address</Label>
          <Input id="addr" required className="mt-1 rounded-md border-line bg-white text-ink" value={form.addressLine1} onChange={(e) => setForm({ ...form, addressLine1: e.target.value })} />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <Label htmlFor="city">City</Label>
            <Input id="city" required className="mt-1 rounded-md border-line bg-white text-ink" value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} />
          </div>
          <div>
            <Label htmlFor="postal">Postal code</Label>
            <Input id="postal" required className="mt-1 rounded-md border-line bg-white text-ink" value={form.postalCode} onChange={(e) => setForm({ ...form, postalCode: e.target.value })} />
          </div>
        </div>
        <label className="flex gap-2 text-[14px] leading-snug text-ink-muted">
          <input type="checkbox" className="mt-1 accent-green" required defaultChecked />
          <span>
            I authorize recurring monthly charges and agree to the{" "}
            <Link href="/legal/subscription" className="text-green-light underline" target="_blank">
              Subscription Terms
            </Link>{" "}
            and{" "}
            <Link href="/legal/privacy" className="text-green-light underline" target="_blank">
              Privacy Policy
            </Link>
            .
          </span>
        </label>
        {error && <p className="text-sm text-red-700">{error}</p>}
        <button type="submit" disabled={loading} className="w-full rounded-md bg-green py-3.5 text-[15px] font-medium text-[#faf8f5] hover:bg-[#2f3d2f] disabled:opacity-60">
          {loading ? "Processing…" : "Complete subscription"}
        </button>
      </form>
    </>
  );
}
