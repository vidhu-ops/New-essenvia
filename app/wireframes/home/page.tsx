import { WFBlock, WFButton, WFrame } from "@/components/wireframe/WFrame";

export default function WireframeHome() {
  return (
    <WFrame id="WF-01" title="Homepage" next={{ href: "/wireframes/how-it-works", label: "How it works" }}>
      <WFBlock label="Header">
        <div className="flex justify-between text-sm font-bold">
          <span>Essentra</span>
          <span className="text-zinc-500">Menu ≡</span>
        </div>
      </WFBlock>
      <WFBlock label="Hero" className="mt-4">
        <p className="font-bold leading-snug">Your household essentials. Delivered automatically.</p>
        <p className="mt-2 text-xs text-zinc-600">
          Brands you already use. One monthly price. Home delivery across Canada.
        </p>
        <div className="mt-4 space-y-2">
          <WFButton primary>Build My Essentra Box</WFButton>
          <WFButton>See How It Works</WFButton>
        </div>
        <div className="mt-4 h-36 rounded border border-dashed border-zinc-400 bg-zinc-100 text-center text-xs leading-[9rem] text-zinc-500">
          [ Essentra box + product imagery ]
        </div>
      </WFBlock>
      <WFBlock label="3 steps" className="mt-4">
        <ol className="list-decimal space-y-2 pl-4 text-xs">
          <li>Tell us about your household</li>
          <li>We build your Essentra package</li>
          <li>We deliver your essentials</li>
        </ol>
      </WFBlock>
      <WFBlock label="Plans (CAD)" className="mt-4">
        <div className="space-y-2 text-xs">
          <p>Essential — $120.99/mo + tax</p>
          <p>Family — $134.99/mo + tax</p>
          <p>Plus — $149.99/mo + tax</p>
        </div>
      </WFBlock>
      <WFBlock label="Categories · Brands · Benefits · FAQ · CTA" className="mt-4 text-xs text-zinc-600">
        Scroll sections · Footer legal links (placeholder copy)
      </WFBlock>
    </WFrame>
  );
}
