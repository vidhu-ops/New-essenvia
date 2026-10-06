import Link from "next/link";
import { MarketingLayout } from "@/components/essentra/MarketingLayout";

const files = [
  {
    title: "Complete platform proposal (CAD) — PRIMARY",
    file: "Essentra-Platform-Design-Proposal-CAD.md",
    desc: "Architecture, journeys, Canadian competitors, phase pricing ($4,905 total), growth tables, wireframes.",
  },
  {
    title: "Master Service Agreement (CAD)",
    file: "Essentra-Master-Service-Agreement-CAD.md",
    desc: "Contract, Schedule A (SOW), Schedule B (growth).",
  },
  {
    title: "IIDATECH “Complete Digital Front” archive (CAD)",
    file: "IIDATECH-Complete-Digital-Front-Proposal-CAD.md",
    desc: "Original Oct 2026 narrative + USD→CAD pricing summary preserved.",
  },
];

export default function DocsPage() {
  return (
    <MarketingLayout>
      <div className="mx-auto max-w-3xl px-4 py-16">
        <p className="rounded-lg border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-950">
          <strong>Your proposal was not deleted.</strong> The homepage is a design preview only. All IIDATECH pricing
          and documents are below and in the <code className="rounded bg-white px-1">docs/</code> folder in git (commit{" "}
          <code className="rounded bg-white px-1">ba9bcbb</code> onward).
        </p>

        <h1 className="mt-8 font-serif text-4xl text-[#1B4332]">Original proposal &amp; pricing</h1>
        <p className="mt-4 text-[#64748B]">
          Browse:{" "}
          <a
            href="https://cursor.com/codebase/vidhu-gupta/essentra-box"
            className="font-medium text-[#40916C] underline"
          >
            cursor.com/codebase/vidhu-gupta/essentra-box
          </a>{" "}
          → open <strong>docs/</strong>
        </p>

        <section className="mt-10 rounded-xl border border-[#E2E8F0] bg-white p-6">
          <h2 className="text-lg font-semibold text-[#1B4332]">Platform build (unchanged totals)</h2>
          <p className="mt-2 text-sm text-[#64748B]">USD $3,450 → CAD **$4,905** at 1.4246 FX</p>
          <table className="mt-4 w-full text-left text-sm">
            <thead>
              <tr className="border-b text-[#64748B]">
                <th className="py-2">Phase</th>
                <th className="py-2">CAD</th>
              </tr>
            </thead>
            <tbody className="text-[#1A1A1A]">
              {[
                ["0 Discovery", "$285"],
                ["1 Foundation", "$425"],
                ["2 Customer web", "$2,135"],
                ["3 Operations", "$425"],
                ["4 Sales", "$285"],
                ["5 Admin", "$710"],
                ["6 App", "$355"],
                ["7 Launch", "$285"],
              ].map(([p, c]) => (
                <tr key={p} className="border-b border-[#E2E8F0]/80">
                  <td className="py-2">{p}</td>
                  <td className="py-2 font-medium">{c}</td>
                </tr>
              ))}
              <tr>
                <td className="py-2 font-semibold">Total</td>
                <td className="py-2 font-semibold">$4,905</td>
              </tr>
            </tbody>
          </table>
        </section>

        <ul className="mt-10 space-y-6">
          {files.map((f) => (
            <li key={f.file} className="rounded-xl border border-[#E2E8F0] bg-white p-5">
              <h2 className="font-semibold text-[#1B4332]">{f.title}</h2>
              <p className="mt-2 text-sm text-[#64748B]">{f.desc}</p>
              <p className="mt-3 font-mono text-xs text-[#40916C]">docs/{f.file}</p>
              <Link
                href={`/documents/${f.file}`}
                className="mt-3 inline-block text-sm font-medium text-[#1B4332] underline"
              >
                Open raw markdown in browser →
              </Link>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-sm text-[#64748B]">
          Lo-fi wireframes: <Link href="/wireframes" className="underline">/wireframes</Link> · Hi-fi UI preview:{" "}
          <Link href="/" className="underline">/</Link> (optional; not the business document)
        </p>
      </div>
    </MarketingLayout>
  );
}
