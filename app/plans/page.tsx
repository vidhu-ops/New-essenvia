import { SiteHeader } from "@/components/essentra/SiteHeader";

export default function PlansPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-4xl px-4 py-16">
        <h1 className="font-serif text-4xl text-[#1B4332]">Plans &amp; pricing</h1>
        <p className="mt-4 text-[#64748B]">
          Your plan is determined by your customized basket—not by picking “small, medium, or large” for every product.
        </p>
        <div className="mt-10 space-y-4">
          {[
            { name: "Essentra Essential", cad: "$120.99/mo + tax" },
            { name: "Essentra Family", cad: "$134.99/mo + tax" },
            { name: "Essentra Plus", cad: "$149.99/mo + tax" },
          ].map((p) => (
            <div key={p.name} className="flex items-center justify-between rounded-xl border border-[#E2E8F0] bg-white p-5">
              <span className="font-semibold">{p.name}</span>
              <span className="text-[#1B4332]">{p.cad}</span>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
