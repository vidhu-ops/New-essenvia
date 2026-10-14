"use client";

import { useState, useTransition } from "react";
import { updateDeliveryAddress } from "@/lib/actions/account";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type Props = {
  initial: {
    addressLine1: string;
    addressLine2?: string | null;
    city: string;
    province: string;
    postalCode: string;
    deliveryNotes?: string | null;
  };
};

export function DeliveryForm({ initial }: Props) {
  const [form, setForm] = useState({
    addressLine1: initial.addressLine1,
    addressLine2: initial.addressLine2 ?? "",
    city: initial.city,
    province: initial.province,
    postalCode: initial.postalCode,
    deliveryNotes: initial.deliveryNotes ?? "",
  });
  const [saved, setSaved] = useState(false);
  const [pending, start] = useTransition();

  return (
    <form
      className="mt-6 max-w-lg space-y-4"
      onSubmit={(e) => {
        e.preventDefault();
        setSaved(false);
        start(async () => {
          await updateDeliveryAddress({
            ...form,
            addressLine2: form.addressLine2 || undefined,
            deliveryNotes: form.deliveryNotes || undefined,
          });
          setSaved(true);
        });
      }}
    >
      <div>
        <Label htmlFor="addr">Street address</Label>
        <Input id="addr" required className="mt-1" value={form.addressLine1} onChange={(e) => setForm({ ...form, addressLine1: e.target.value })} />
      </div>
      <div>
        <Label htmlFor="addr2">Unit / buzzer (optional)</Label>
        <Input id="addr2" className="mt-1" value={form.addressLine2} onChange={(e) => setForm({ ...form, addressLine2: e.target.value })} />
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div>
          <Label htmlFor="city">City</Label>
          <Input id="city" required className="mt-1" value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} />
        </div>
        <div>
          <Label htmlFor="postal">Postal code</Label>
          <Input id="postal" required className="mt-1" value={form.postalCode} onChange={(e) => setForm({ ...form, postalCode: e.target.value })} />
        </div>
      </div>
      <div>
        <Label htmlFor="notes">Delivery notes</Label>
        <Input id="notes" className="mt-1" value={form.deliveryNotes} onChange={(e) => setForm({ ...form, deliveryNotes: e.target.value })} />
      </div>
      <button type="submit" disabled={pending} className="rounded-md bg-green px-5 py-2.5 text-sm font-medium text-[#faf8f5] disabled:opacity-60">
        {pending ? "Saving…" : "Save address"}
      </button>
      {saved && <p className="text-sm text-green-light">Address updated.</p>}
    </form>
  );
}
