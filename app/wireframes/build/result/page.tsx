import { WFBlock, WFButton, WFrame } from "@/components/wireframe/WFrame";

export default function BuildResult() {
  return (
    <WFrame
      id="WF-08"
      title="Your Essentra Package"
      prev={{ href: "/wireframes/build/step-5", label: "Cleaning" }}
      next={{ href: "/wireframes/checkout", label: "Checkout" }}
    >
      <WFBlock label="Package">
        <p className="text-lg font-bold">Essentra Family</p>
        <p className="text-2xl font-bold">$134.99/mo + tax</p>
        <p className="mt-1 text-xs text-zinc-600">One price · No itemized wholesale costs</p>
      </WFBlock>
      <WFBlock label="Your box" className="mt-4">
        <ul className="space-y-2 text-xs">
          <li>Tide liquid detergent — 1.47L</li>
          <li>Charmin toilet paper — 12 mega rolls</li>
          <li>Bounty paper towels — 6 rolls</li>
          <li>Cascade pods — 43 ct</li>
          <li>+ 6 more categories…</li>
        </ul>
      </WFBlock>
      <WFBlock label="Delivery" className="mt-4 text-xs">
        <p>Frequency: Monthly</p>
        <p>Est. first delivery: Oct 18, 2026</p>
      </WFBlock>
      <div className="mt-6 space-y-2">
        <WFButton primary>Start My Subscription</WFButton>
        <WFButton>Save box (email)</WFButton>
      </div>
    </WFrame>
  );
}
