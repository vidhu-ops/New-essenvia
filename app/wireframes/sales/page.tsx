import { WFBlock, WFrame } from "@/components/wireframe/WFrame";

const steps = ["Compare", "Customize", "Package", "Customer info", "Agreement", "Payment", "Done"];

export default function WireframeSales() {
  return (
    <WFrame id="WF-11" title="Sales rep tablet (landscape)" prev={{ href: "/wireframes/account", label: "Account" }} next={{ href: "/wireframes/admin", label: "Admin" }}>
      <WFBlock label="Rep header">
        <p className="text-sm font-bold">Rep: Alex · Territory: GTA-West</p>
      </WFBlock>
      <WFBlock label="Flow" className="mt-3">
        <div className="flex flex-wrap gap-1 text-[10px]">
          {steps.map((s, i) => (
            <span key={s} className={`rounded px-2 py-1 ${i === 2 ? "bg-zinc-800 text-white" : "bg-zinc-200"}`}>
              {s}
            </span>
          ))}
        </div>
      </WFBlock>
      <WFBlock label="Retail comparison + package" className="mt-3">
        <p className="text-xs">Side-by-side: typical retail estimate vs Essentra $134.99/mo (verified data only)</p>
        <p className="mt-2 text-lg font-bold">Essentra Family</p>
      </WFBlock>
      <WFBlock label="Customer + consent" className="mt-3 text-xs">
        <p>Address · Signature · Cooling-off notice</p>
      </WFBlock>
      <WFBlock label="Stripe Terminal" className="mt-3 text-xs">
        <p>Tap/chip → token saved for recurring billing</p>
        <p className="mt-2 font-medium">Creates: account · subscription · order · attribution</p>
      </WFBlock>
    </WFrame>
  );
}
