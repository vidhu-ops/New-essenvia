import Link from "next/link";
import { FileDownloadButton } from "@/components/design-pack/FileDownloadButton";
import { MarketingLayout } from "@/components/essentra/MarketingLayout";

const PDF = "/Essentra-IIDATECH-Complete-Design-Pack.pdf";
const HTML = "/Essentra-IIDATECH-Complete-Design-Pack.html";

const btnOutline =
  "inline-flex items-center rounded-xl border border-[#E2E8F0] bg-white px-5 py-3 text-sm font-semibold text-[#1B4332] hover:bg-[#F8FAFC] disabled:opacity-60";

export default function DesignPackPage() {
  return (
    <MarketingLayout>
      <div className="mx-auto max-w-3xl px-4 py-16">
        <p className="text-sm font-semibold uppercase tracking-wide text-[#64748B]">Client deliverable</p>
        <h1 className="mt-2 font-serif text-4xl text-[#1B4332]">Essentra design pack (IIDATECH)</h1>
        <p className="mt-4 text-[#64748B]">
          Combined journey, colour directions, and wireframes under IIDATECH letterhead. Use the PDF to email or print;
          use the HTML link for interactive colour switching and the “See it move” demo.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href={PDF}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-xl bg-[#1B4332] px-5 py-3 text-sm font-semibold text-white hover:bg-[#2d6a4f]"
          >
            Open PDF preview
          </a>
          <a
            href={PDF}
            target="_blank"
            rel="noopener noreferrer"
            className={btnOutline}
          >
            View PDF in new tab
          </a>
          <Link href={HTML} className={btnOutline}>
            Open interactive HTML
          </Link>
          <FileDownloadButton apiType="html" label="Download HTML (single file)" className={btnOutline} />
          <FileDownloadButton apiType="zip" label="Download HTML + logo (zip)" className={btnOutline} />
        </div>

        <section className="mt-12 overflow-hidden rounded-xl border border-[#E2E8F0] bg-white shadow-sm">
          <p className="border-b border-[#E2E8F0] bg-[#F8FAFC] px-4 py-2 text-sm text-[#64748B]">PDF preview</p>
          <iframe
            title="Essentra IIDATECH design pack PDF"
            src={PDF}
            className="h-[min(80vh,900px)] w-full bg-[#525659]"
          />
        </section>

        <p className="mt-8 text-sm text-[#64748B]">
          Regenerate after edits: <code className="rounded bg-[#F1F5F9] px-1">npm run design-pack:merge</code> then{" "}
          <code className="rounded bg-[#F1F5F9] px-1">npm run design-pack:pdf</code> and{" "}
          <code className="rounded bg-[#F1F5F9] px-1">npm run design-pack:export</code>.
        </p>
      </div>
    </MarketingLayout>
  );
}
