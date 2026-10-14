import Link from "next/link";
import { notFound } from "next/navigation";
import { MarketingLayout } from "@/components/essentra/MarketingLayout";
import { isLegalSlug, legalPages } from "@/lib/legal-content";

export default async function LegalPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  if (!isLegalSlug(slug)) notFound();
  const doc = legalPages[slug];

  return (
    <MarketingLayout>
      <article className="mx-auto max-w-2xl px-5 py-16">
        <p className="text-sm text-ink-soft">Legal · Draft for counsel review</p>
        <h1 className="mt-2 font-display text-3xl text-ink">{doc.title}</h1>
        <p className="mt-4 text-[16px] leading-relaxed text-ink-muted">{doc.summary}</p>
        <div className="mt-10 space-y-8">
          {doc.sections.map((s) => (
            <section key={s.heading}>
              <h2 className="font-display text-xl text-ink">{s.heading}</h2>
              <p className="mt-3 text-[16px] leading-relaxed text-ink-muted">{s.body}</p>
            </section>
          ))}
        </div>
        <p className="mt-12 text-sm text-ink-soft">
          Questions? <Link href="/contact" className="text-green-light underline">Contact us</Link>
        </p>
      </article>
    </MarketingLayout>
  );
}
