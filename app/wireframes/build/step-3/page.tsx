import { WFBlock, WFButton, WFrame, WFOption, WFProgress } from "@/components/wireframe/WFrame";

export default function BuildStep3() {
  return (
    <WFrame
      id="WF-05"
      title="Build My Box — Paper products"
      prev={{ href: "/wireframes/build/step-2", label: "Laundry" }}
      next={{ href: "/wireframes/build/step-4", label: "Kitchen" }}
    >
      <WFProgress step={3} total={5} />
      <WFBlock label="Toilet paper">
        <div className="grid grid-cols-2 gap-2">
          <WFOption selected>Charmin</WFOption>
          <WFOption>Other</WFOption>
        </div>
        <p className="mt-2 text-xs">Quantity tier selector</p>
      </WFBlock>
      <WFBlock label="Paper towels" className="mt-4">
        <div className="grid grid-cols-2 gap-2">
          <WFOption selected>Bounty</WFOption>
          <WFOption>Other</WFOption>
        </div>
      </WFBlock>
      <div className="mt-6">
        <WFButton primary>Continue</WFButton>
      </div>
    </WFrame>
  );
}
