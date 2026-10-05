import { WFBlock, WFrame } from "@/components/wireframe/WFrame";

export default function WireframeAdmin() {
  return (
    <WFrame id="WF-13" title="Admin dashboard" prev={{ href: "/wireframes/sales", label: "Sales" }}>
      <WFBlock label="Sidebar modules">
        <ul className="grid grid-cols-2 gap-1 text-[10px]">
          {[
            "Catalog & SKUs",
            "Wholesale costs 🔒",
            "Packages & thresholds",
            "Customers",
            "Subscriptions",
            "Orders",
            "Inventory",
            "Delivery zones",
            "Reps & territories",
            "Payments",
            "Analytics",
            "Audit log",
          ].map((m) => (
            <li key={m} className="rounded bg-zinc-100 px-2 py-1">
              {m}
            </li>
          ))}
        </ul>
      </WFBlock>
      <WFBlock label="Main — KPIs" className="mt-3">
        <div className="grid grid-cols-2 gap-2 text-xs">
          <p>Active subs: 1,248</p>
          <p>MRR: $168,420 CAD</p>
          <p>Failed payments: 12</p>
          <p>Orders due: 89</p>
        </div>
      </WFBlock>
      <WFBlock label="Package threshold editor" className="mt-3 text-xs">
        <p>Essential max internal cost: [ $___ ] → public $120.99</p>
        <p>Family max: [ $___ ] → $134.99</p>
        <p>Plus max: [ $___ ] → $149.99</p>
      </WFBlock>
    </WFrame>
  );
}
