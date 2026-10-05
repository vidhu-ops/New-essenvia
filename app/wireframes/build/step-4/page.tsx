import { WFBlock, WFButton, WFrame, WFProgress } from "@/components/wireframe/WFrame";

export default function BuildStep4() {
  return (
    <WFrame
      id="WF-06"
      title="Build My Box — Kitchen"
      prev={{ href: "/wireframes/build/step-3", label: "Paper" }}
      next={{ href: "/wireframes/build/step-5", label: "Cleaning" }}
    >
      <WFProgress step={4} total={5} />
      {["Dishwasher pods (Cascade)", "Dish soap (Dawn)", "Kitchen garbage bags", "Large garbage bags (Glad/Hefty)"].map(
        (row) => (
          <WFBlock key={row} className="mt-3">
            <p className="text-sm font-medium">{row}</p>
            <p className="text-xs text-zinc-500">Brand chips + size/qty</p>
          </WFBlock>
        ),
      )}
      <div className="mt-6">
        <WFButton primary>Continue</WFButton>
      </div>
    </WFrame>
  );
}
