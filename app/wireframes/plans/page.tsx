import { WFBlock, WFButton, WFrame } from "@/components/wireframe/WFrame";

export default function WireframePlans() {
  return (
    <WFrame id="WF-12" title="Plans & Pricing" prev={{ href: "/wireframes/home", label: "Home" }} next={{ href: "/wireframes/build/step-1", label: "Build" }}>
      <WFBlock label="Promise">
        <p className="text-sm font-medium">One simple monthly price. No credits or per-item fees.</p>
      </WFBlock>
      {[
        { name: "Essentra Essential", price: "$120.99/mo + tax" },
        { name: "Essentra Family", price: "$134.99/mo + tax" },
        { name: "Essentra Plus", price: "$149.99/mo + tax" },
      ].map((p) => (
        <WFBlock key={p.name} className="mt-3">
          <p className="font-bold">{p.name}</p>
          <p className="text-sm">{p.price}</p>
          <p className="mt-1 text-xs text-zinc-500">Plan assigned from your customized basket</p>
        </WFBlock>
      ))}
      <div className="mt-4">
        <WFButton primary>Build My Essentra Box</WFButton>
      </div>
    </WFrame>
  );
}
