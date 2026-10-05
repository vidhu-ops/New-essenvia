import { WFBlock, WFButton, WFrame, WFOption, WFProgress } from "@/components/wireframe/WFrame";

export default function BuildStep2() {
  return (
    <WFrame
      id="WF-04"
      title="Build My Box — Laundry"
      prev={{ href: "/wireframes/build/step-1", label: "Household" }}
      next={{ href: "/wireframes/build/step-3", label: "Paper" }}
    >
      <WFProgress step={2} total={5} />
      <WFBlock label="Brand">
        <p className="mb-2 text-sm font-medium">Detergent brand preference</p>
        <div className="grid grid-cols-2 gap-2">
          <WFOption selected>Tide</WFOption>
          <WFOption>Gain</WFOption>
          <WFOption>Other</WFOption>
          <WFOption>Essentra picks</WFOption>
        </div>
      </WFBlock>
      <WFBlock label="Format" className="mt-4">
        <div className="grid grid-cols-2 gap-2">
          <WFOption selected>Liquid</WFOption>
          <WFOption>Pods</WFOption>
        </div>
      </WFBlock>
      <WFBlock label="Consumption" className="mt-4">
        <p className="text-xs text-zinc-600">Slider / light · typical · heavy (maps to SKU qty)</p>
        <div className="mt-2 h-2 rounded bg-zinc-300" />
      </WFBlock>
      <div className="mt-6">
        <WFButton primary>Continue</WFButton>
      </div>
    </WFrame>
  );
}
