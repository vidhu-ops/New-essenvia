import { WFBlock, WFrame } from "@/components/wireframe/WFrame";

export default function WireframeAccount() {
  return (
    <WFrame id="WF-10" title="Customer dashboard" prev={{ href: "/wireframes/checkout", label: "Checkout" }} next={{ href: "/wireframes/sales", label: "Sales" }}>
      <WFBlock label="My Essentra Box">
        <p className="text-xs">Product list · brands · sizes · qty</p>
      </WFBlock>
      <WFBlock label="My Subscription" className="mt-3">
        <p className="text-sm font-medium">Essentra Family — $134.99/mo</p>
        <p className="text-xs">Active · Next billing Nov 2, 2026</p>
      </WFBlock>
      <WFBlock label="My Delivery" className="mt-3">
        <p className="text-xs">Next delivery Nov 5 · Instructions on file</p>
      </WFBlock>
      <WFBlock label="Actions" className="mt-3 grid grid-cols-2 gap-2 text-xs font-medium">
        <span className="rounded border border-zinc-400 py-2 text-center">Skip</span>
        <span className="rounded border border-zinc-400 py-2 text-center">Pause</span>
        <span className="rounded border border-zinc-400 py-2 text-center">Swap brand</span>
        <span className="rounded border border-zinc-400 py-2 text-center">Update address</span>
      </WFBlock>
      <WFBlock label="Payment · Orders · Support" className="mt-3 text-xs text-zinc-600">
        Stripe portal link · History · Contact
      </WFBlock>
    </WFrame>
  );
}
