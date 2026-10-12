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
    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ selections, customer: form }),
    });
    setLoading(false);
    if (!res.ok) {
      alert("Checkout failed — check email not already used.");
      return;
    }
    const data = await res.json();
    router.push(`/build/confirmed?order=${encodeURIComponent(data.orderNumber)}`);
  }

  return (
    <>
      <Link href="/build/result" className="text-[15px] text-green-light underline decoration-line underline-offset-4">
        Back to your box
      </Link>
      <h1 className="mt-6 font-display text-[1.65rem] text-ink">Checkout</h1>
      <p className="mt-2 text-[16px] text-ink-muted">
        Secure subscription setup · Stripe in production · demo creates a live account in the local database
      </p>
      <form onSubmit={submit} className="mt-8 space-y-4">
        <div className="grid grid-cols-2 gap-3">
          <div>
            <Label htmlFor="fn">First name</Label>
            <Input id="fn" required className="mt-1 rounded-md border-line bg-white" value={form.firstName} onChange={(e) => setForm({ ...form, firstName: e.target.value })} />
          </div>
          <div>
            <Label htmlFor="ln">Last name</Label>
            <Input id="ln" required className="mt-1 rounded-md border-line bg-white" value={form.lastName} onChange={(e) => setForm({ ...form, lastName: e.target.value })} />
          </div>
        </div>
        <div>
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" required className="mt-1 rounded-md border-line bg-white" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} />
        </div>
        <div>
          <Label htmlFor="phone">Mobile</Label>
          <Input id="phone" required className="mt-1 rounded-md border-line bg-white" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} />
        </div>
        <div>
          <Label htmlFor="addr">Delivery address</Label>
          <Input id="addr" required className="mt-1 rounded-md border-line bg-white" value={form.addressLine1} onChange={(e) => setForm({ ...form, addressLine1: e.target.value })} />
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div>
            <Label htmlFor="city">City</Label>
            <Input id="city" required className="mt-1 rounded-md border-line bg-white" value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} />
          </div>
          <div>
            <Label htmlFor="postal">Postal code</Label>
            <Input id="postal" required className="mt-1 rounded-md border-line bg-white" value={form.postalCode} onChange={(e) => setForm({ ...form, postalCode: e.target.value })} />
          </div>
        </div>
        <label className="flex gap-2 text-[14px] leading-snug text-ink-muted">
          <input type="checkbox" className="mt-1 accent-green" required defaultChecked />
          I authorize monthly payments and agree to subscription terms (placeholder until counsel approves).
        </label>
        <button type="submit" disabled={loading} className="w-full rounded-md bg-green py-3.5 text-[15px] font-medium text-[#faf8f5] hover:bg-[#2f3d2f] disabled:opacity-60">
          {loading ? "Creating subscription…" : "Complete subscription (demo)"}
        </button>
      </form>
    </>
  );
}
