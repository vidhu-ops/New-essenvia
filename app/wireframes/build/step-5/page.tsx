import { WFBlock, WFButton, WFrame, WFProgress } from "@/components/wireframe/WFrame";

export default function BuildStep5() {
  return (
    <WFrame
      id="WF-07"
      title="Build My Box — Cleaning"
      prev={{ href: "/wireframes/build/step-4", label: "Kitchen" }}
      next={{ href: "/wireframes/build/result", label: "Your package" }}
    >
      <WFProgress step={5} total={5} />
      {["Fabric softener", "Multi-surface cleaner", "Disinfecting wipes"].map((row) => (
        <WFBlock key={row} className="mt-3">
          <p className="text-sm font-medium">{row}</p>
          <p className="text-xs text-zinc-500">Preference + consumption</p>
        </WFBlock>
      ))}
      <div className="mt-6">
        <WFButton primary>See my package</WFButton>
      </div>
    </WFrame>
  );
}
