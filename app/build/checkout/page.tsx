import Link from "next/link";
import { HumanCta } from "@/components/essentra/HumanCta";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function BuildCheckout() {
  return (
    <div className="min-h-screen bg-paper py-10">
      <div className="mx-auto max-w-lg px-5">
        <Link href="/build/result" className="text-[15px] text-green-light underline decoration-line underline-offset-4">
          Back to your box
        </Link>
        <h1 className="mt-6 font-display text-[1.65rem] text-ink">Almost done</h1>
        <p className="mt-2 text-[16px] text-ink-muted">Essentra Family · $134.99/mo + tax · paid securely through Stripe</p>
        <form className="mt-8 space-y-4">
          <div className="grid grid-cols-2 gap-3">
            <div>
              <Label htmlFor="fn">First name</Label>
              <Input id="fn" className="mt-1 rounded-md border-line bg-white" />
            </div>
            <div>
              <Label htmlFor="ln">Last name</Label>
              <Input id="ln" className="mt-1 rounded-md border-line bg-white" />
            </div>
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" className="mt-1 rounded-md border-line bg-white" />
          </div>
          <div>
            <Label htmlFor="postal">Postal code</Label>
            <Input id="postal" className="mt-1 rounded-md border-line bg-white" placeholder="M5V 2T6" />
          </div>
          <label className="flex gap-2 text-[14px] leading-snug text-ink-muted">
            <input type="checkbox" className="mt-1 accent-green" defaultChecked />
            I’m OK with monthly billing. (Subscription terms—placeholder until legal review.)
          </label>
          <button type="button" className="w-full rounded-md bg-green py-3.5 text-[15px] font-medium text-[#faf8f5] hover:bg-[#2f3d2f]">
            Pay with Stripe
          </button>
        </form>
      </div>
    </div>
  );
}
