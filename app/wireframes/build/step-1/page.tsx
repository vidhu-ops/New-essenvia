import { WFBlock, WFButton, WFrame, WFOption, WFProgress } from "@/components/wireframe/WFrame";

export default function BuildStep1() {
  return (
    <WFrame id="WF-03" title="Build My Box — Household" next={{ href: "/wireframes/build/step-2", label: "Laundry" }}>
      <WFProgress step={1} total={5} />
      <WFBlock label="Question">
        <p className="font-medium">How many people live in your household?</p>
      </WFBlock>
      <div className="mt-4 grid grid-cols-3 gap-2">
        <WFOption selected>1</WFOption>
        <WFOption>2</WFOption>
        <WFOption>3</WFOption>
        <WFOption>4</WFOption>
        <div className="col-span-2">
          <WFOption>5+</WFOption>
        </div>
      </div>
      <WFBlock label="Helper" className="mt-4 text-xs text-zinc-600">
        Used to estimate consumption—not to pick a “size tier” for every product.
      </WFBlock>
      <div className="mt-6">
        <WFButton primary>Continue</WFButton>
      </div>
    </WFrame>
  );
}
