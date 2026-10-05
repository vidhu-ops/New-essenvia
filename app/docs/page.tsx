import Link from "next/link";
import { SiteHeader } from "@/components/essentra/SiteHeader";

export default function DocsPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="font-serif text-4xl text-[#1B4332]">Proposal &amp; contract (CAD)</h1>
        <p className="mt-4 text-[#64748B]">
          Full documents live in the repository <code className="rounded bg-[#E2E8F0] px-1">docs/</code> folder for
          review, export to PDF, and signature.
        </p>
        <ul className="mt-8 space-y-4 text-[#1A1A1A]">
          <li>
            <span className="font-medium">docs/Essentra-Platform-Design-Proposal-CAD.md</span>
            <p className="text-sm text-[#64748B]">
              Architecture, journeys, Canadian competitors, CAD pricing, wireframe index
            </p>
          </li>
          <li>
            <span className="font-medium">docs/Essentra-Master-Service-Agreement-CAD.md</span>
            <p className="text-sm text-[#64748B]">Master service agreement with Schedule A (SOW) and Schedule B (growth)</p>
          </li>
        </ul>
        <p className="mt-8 text-sm text-[#64748B]">
          Open these Markdown files from your repository checkout or agent workspace. Export to PDF from your editor for
          signature packets.
        </p>
      </main>
    </>
  );
}
