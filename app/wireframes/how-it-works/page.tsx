import { WFBlock, WFrame } from "@/components/wireframe/WFrame";

export default function WireframeHowItWorks() {
  return (
    <WFrame
      id="WF-02"
      title="How It Works"
      prev={{ href: "/wireframes/home", label: "Home" }}
      next={{ href: "/wireframes/build/step-1", label: "Build flow" }}
    >
      <WFBlock label="Intro">
        <p className="text-sm">Not a catalog. A guided plan for your household essentials.</p>
      </WFBlock>
      {["Household", "Customize brands", "One price", "Deliver monthly", "Manage in account"].map((s, i) => (
        <WFBlock key={s} label={`Step ${i + 1}`} className="mt-3">
          <p className="font-medium">{s}</p>
          <p className="mt-1 text-xs text-zinc-600">Supporting copy + illustration placeholder</p>
        </WFBlock>
      ))}
    </WFrame>
  );
}
