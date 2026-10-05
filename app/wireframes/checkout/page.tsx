import { WFBlock, WFButton, WFrame } from "@/components/wireframe/WFrame";

export default function WireframeCheckout() {
  return (
    <WFrame id="WF-09" title="Checkout" prev={{ href: "/wireframes/build/result", label: "Package" }} next={{ href: "/wireframes/account", label: "Account" }}>
      <WFBlock label="Order summary">
        <p className="font-bold">Essentra Family — $134.99/mo</p>
        <p className="text-xs">HST/GST calculated at payment</p>
      </WFBlock>
      <WFBlock label="Contact" className="mt-4 space-y-2 text-xs">
        <p>[ First name ] [ Last name ]</p>
        <p>[ Email ] [ Mobile ]</p>
      </WFBlock>
      <WFBlock label="Delivery address (Canada)" className="mt-4 space-y-2 text-xs">
        <p>[ Street ] [ Unit ]</p>
        <p>[ City ] [ Province ▼ ] [ Postal code ]</p>
        <p>[ Delivery instructions ]</p>
      </WFBlock>
      <WFBlock label="Payment — Stripe" className="mt-4 text-xs">
        <p>Apple Pay · Google Pay · Card</p>
        <p className="text-zinc-500">PCI: no card numbers stored on Essentra servers</p>
      </WFBlock>
      <WFBlock label="Consents" className="mt-4 text-xs">
        <p>☑ Subscription terms & recurring billing authorization</p>
        <p>☑ Privacy policy (placeholder until legal review)</p>
      </WFBlock>
      <div className="mt-6">
        <WFButton primary>Complete subscription</WFButton>
      </div>
    </WFrame>
  );
}
