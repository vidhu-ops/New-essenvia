import Link from "next/link";

const frames = [
  { id: "WF-01", title: "Homepage", href: "/wireframes/home" },
  { id: "WF-02", title: "How It Works", href: "/wireframes/how-it-works" },
  { id: "WF-12", title: "Plans & Pricing", href: "/wireframes/plans" },
  { id: "WF-03", title: "Build My Box — Household", href: "/wireframes/build/step-1" },
  { id: "WF-04", title: "Build My Box — Laundry", href: "/wireframes/build/step-2" },
  { id: "WF-05", title: "Build My Box — Paper", href: "/wireframes/build/step-3" },
  { id: "WF-06", title: "Build My Box — Kitchen", href: "/wireframes/build/step-4" },
  { id: "WF-07", title: "Build My Box — Cleaning", href: "/wireframes/build/step-5" },
  { id: "WF-08", title: "Package result", href: "/wireframes/build/result" },
  { id: "WF-09", title: "Checkout", href: "/wireframes/checkout" },
  { id: "WF-10", title: "Customer dashboard", href: "/wireframes/account" },
  { id: "WF-11", title: "Sales rep tablet", href: "/wireframes/sales" },
  { id: "WF-13", title: "Admin dashboard", href: "/wireframes/admin" },
];

export default function WireframesIndex() {
  return (
    <div className="min-h-screen bg-zinc-100 px-4 py-10">
      <div className="mx-auto max-w-2xl">
        <Link href="/" className="text-sm text-zinc-600 hover:underline">
          ← Brand preview home
        </Link>
        <h1 className="mt-4 text-2xl font-bold">Essentra wireframes</h1>
        <p className="mt-2 text-sm text-zinc-600">
          Phase 0 lo-fi screens for approval. Mobile-first (~390px). See{" "}
          <code className="rounded bg-white px-1">docs/Essentra-Platform-Design-Proposal-CAD.md</code>.
        </p>
        <ul className="mt-8 space-y-2">
          {frames.map((f) => (
            <li key={f.href}>
              <Link
                href={f.href}
                className="flex items-center justify-between rounded-lg border-2 border-zinc-800 bg-white px-4 py-3 hover:bg-zinc-50"
              >
                <span>{f.title}</span>
                <span className="text-xs font-bold text-zinc-500">{f.id}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
