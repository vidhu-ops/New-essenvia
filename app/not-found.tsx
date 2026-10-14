import Link from "next/link";
import { MarketingLayout } from "@/components/essentra/MarketingLayout";

export default function NotFound() {
  return (
    <MarketingLayout>
      <div className="mx-auto max-w-lg px-5 py-24 text-center">
        <h1 className="font-display text-3xl text-ink">Page not found</h1>
        <p className="mt-4 text-ink-muted">That link may have moved. Start from the homepage or build your box.</p>
        <div className="mt-8 flex flex-wrap justify-center gap-4 text-[15px]">
          <Link href="/" className="text-green-light underline">
            Home
          </Link>
          <Link href="/build/step-1" className="text-green-light underline">
            Build my box
          </Link>
        </div>
      </div>
    </MarketingLayout>
  );
}
