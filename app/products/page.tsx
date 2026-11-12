import Image from "next/image";
import Link from "next/link";
import { HumanCta } from "@/components/essentra/HumanCta";
import { MarketingLayout } from "@/components/essentra/MarketingLayout";
import { imageForSku } from "@/lib/product-images";
import { prisma } from "@/lib/prisma";

export default async function ProductsPage() {
  const skus = await prisma.productSku.findMany({
    where: { active: true },
    include: { brand: true, category: true },
    orderBy: [{ category: { sortOrder: "asc" } }, { skuCode: "asc" }],
  });

  return (
    <MarketingLayout>
      <article className="mx-auto max-w-4xl px-5 py-14">
        <h1 className="font-display text-[2rem] text-ink">What we stock</h1>
        <p className="mt-4 max-w-xl text-[16px] leading-relaxed text-ink-muted">
          Each size has its own image and SKU—your box always shows the exact count on the label (14 vs 43 pods, 12 vs 24
          rolls, etc.).
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {skus.map((sku) => {
            const img = imageForSku(sku.skuCode, sku.customerDescription);
            const src = sku.imageUrl ?? img.src;
            return (
              <div key={sku.id} className="flex gap-4 rounded-lg border border-line bg-white p-4">
                <div className="relative h-24 w-24 shrink-0 overflow-hidden rounded-md bg-paper-warm">
                  <Image src={src} alt={img.alt} fill className="object-cover" sizes="96px" />
                </div>
                <div>
                  <p className="text-xs font-medium uppercase tracking-wide text-ink-soft">{sku.category.name}</p>
                  <p className="mt-1 font-medium text-ink">
                    {sku.brand.name} · {sku.sizeLabel}
                  </p>
                  <p className="mt-1 text-sm text-ink-muted">{sku.customerDescription}</p>
                  <p className="mt-2 font-mono text-[11px] text-ink-soft">{sku.skuCode}</p>
                </div>
              </div>
            );
          })}
        </div>
        <HumanCta href="/build/step-1" size="large" className="mt-12 inline-block">
          Build my box
        </HumanCta>
        <p className="mt-4 text-sm text-ink-soft">
          <Link href="/how-it-works" className="underline">
            How sizing works
          </Link>
        </p>
      </article>
    </MarketingLayout>
  );
}
