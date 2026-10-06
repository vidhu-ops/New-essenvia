import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export default function BuildCheckout() {
  return (
    <div className="min-h-screen bg-[#FAFAF8] py-8">
      <div className="mx-auto max-w-lg px-4">
        <Link href="/build/result" className="text-sm text-[#40916C] hover:underline">
          ← Review package
        </Link>
        <h1 className="mt-4 font-serif text-2xl text-[#1B4332]">Checkout</h1>
        <p className="mt-2 text-sm text-[#64748B]">Trust cues up front: recap, tax clarity, secure payment via Stripe.</p>
        <div className="mt-8 rounded-xl border border-[#E2E8F0] bg-white p-4">
          <p className="font-medium">Essentra Family</p>
          <p className="text-2xl font-serif text-[#1B4332]">$134.99/mo + applicable tax</p>
        </div>
        <form className="mt-8 space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label htmlFor="fn">First name</Label>
              <Input id="fn" className="mt-1 bg-white" placeholder="Jordan" />
            </div>
            <div>
              <Label htmlFor="ln">Last name</Label>
              <Input id="ln" className="mt-1 bg-white" placeholder="Lee" />
            </div>
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" className="mt-1 bg-white" placeholder="you@example.com" />
          </div>
          <div>
            <Label htmlFor="postal">Postal code</Label>
            <Input id="postal" className="mt-1 bg-white" placeholder="M5V 2T6" />
          </div>
          <label className="flex gap-2 text-xs text-[#64748B]">
            <input type="checkbox" className="mt-0.5 accent-[#1B4332]" defaultChecked />
            I authorize recurring monthly billing and agree to subscription terms (placeholder).
          </label>
          <button type="button" className={cn(buttonVariants(), "h-12 w-full rounded-xl bg-[#1B4332] hover:bg-[#40916C]")}>
            Pay securely with Stripe
          </button>
        </form>
      </div>
    </div>
  );
}
