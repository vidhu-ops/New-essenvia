import Link from "next/link";
import { MarketingLayout } from "@/components/essentra/MarketingLayout";

const files: {
  title: string;
  file: string;
  desc: string;
  href?: string;
}[] = [
  {
    title: "Full contract package (PDF) — Essenvia",
    file: "Essenvia-Full-Contract-Package.pdf",
    desc: "Single PDF: platform agreement + quote/timeline/payments + branding SOW (CAD 2,975 + branding 850–950).",
    href: "/Essenvia-Full-Contract-Package.pdf",
  },
  {
    title: "Platform agreement — Essenvia (CAD) — PRIMARY",
    file: "Essenvia-Software-Development-Platform-Services-Agreement-CAD.md",
    desc: "Full Software Development and Platform Services Agreement: CAD 2,975 fixed fee, 12 weeks, Schedules A–F.",
  },
  {
    title: "App-wise quote, timeline & payments — Essenvia",
    file: "Essenvia-Quote-Breakdown-Timeline-Payments-CAD.md",
    desc: "CAD 2,975 breakdown by app, 12-week Gantt, payment schedule; branding CAD 850–950 with letterhead, brand book, peripherals.",
  },
  {
    title: "Branding package SOW — Essenvia",
    file: "Essenvia-Branding-Package-SOW-CAD.md",
    desc: "Separate branding scope: brand book, letterhead, business card, email signature, document templates, social, packaging.",
  },
  {
    title: "Combined design pack (HTML) — wireframes + journey",
    file: "Essentra-IIDATECH-Complete-Design-Pack.html",
    desc: "IIDATECH letterhead, logo, colour switcher, journey + wireframes. Client PDF at /design-pack (Essentra naming in UI pack).",
    href: "/design-pack",
  },
  {
    title: "Essentra platform proposal (archive)",
    file: "Essentra-Platform-Design-Proposal-CAD.md",
    desc: "Earlier Essentra naming and $4,905 estimate — superseded by Essenvia agreement and quote above.",
  },
  {
    title: "Essentra MSA (archive)",
    file: "Essentra-Master-Service-Agreement-CAD.md",
    desc: "Short-form MSA template — superseded by Essenvia platform agreement.",
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
          <h2 className="text-lg font-semibold text-[#1B4332]">Essenvia platform build (current quote)</h2>
          <p className="mt-2 text-sm text-[#64748B]">
            Fixed **CAD $2,975** · **12 weeks** · sign-now offer (from proposal CAD $3,500). Branding **CAD $850–950** separate.
          </p>
          <table className="mt-4 w-full text-left text-sm">
            <thead>
              <tr className="border-b text-[#64748B]">
                <th className="py-2">Phase</th>
                <th className="py-2">CAD</th>
              </tr>
            </thead>
            <tbody className="text-[#1A1A1A]">
              {[
                ["0 Design & discovery", "$200"],
                ["1 Foundation + admin basics", "$252"],
                ["2 Website + subscriptions", "$1,177"],
                ["3 Operations", "$505"],
                ["4 Sales rep app", "$223"],
                ["5 Admin analytics", "$168"],
                ["6 Customer app", "$210"],
                ["7 Testing & launch", "$240"],
              ].map(([p, c]) => (
                <tr key={p} className="border-b border-[#E2E8F0]/80">
                  <td className="py-2">{p}</td>
                  <td className="py-2 font-medium">{c}</td>
                </tr>
              ))}
              <tr>
                <td className="py-2 font-semibold">Total</td>
                <td className="py-2 font-semibold">$2,975</td>
              </tr>
            </tbody>
          </table>
        </section>

        <ul className="mt-10 space-y-6">
          {files.map((f) => (
            <li key={f.file} className="rounded-xl border border-[#E2E8F0] bg-white p-5">
              <h2 className="font-semibold text-[#1B4332]">{f.title}</h2>
              <p className="mt-2 text-sm text-[#64748B]">{f.desc}</p>
              <p className="mt-3 font-mono text-xs text-[#40916C]">{f.href ?? `docs/${f.file}`}</p>
              <Link
                href={f.href ?? `/documents/${f.file}`}
                className="mt-3 inline-block text-sm font-medium text-[#1B4332] underline"
              >
                {f.href?.endsWith(".pdf")
                  ? "Download PDF →"
                  : f.href
                    ? "Open client preview (PDF + HTML) →"
                    : "Open raw markdown in browser →"}
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
