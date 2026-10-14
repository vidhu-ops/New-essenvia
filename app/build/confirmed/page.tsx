import Link from "next/link";
import { MarketingLayout } from "@/components/essentra/MarketingLayout";

export default async function ConfirmedPage({
  searchParams,
}: {
  searchParams: Promise<{ order?: string; signin?: string }>;
}) {
  const { order, signin } = await searchParams;
  return (
    <MarketingLayout>
      <div className="mx-auto max-w-lg px-5 py-20 text-center">
        <p className="font-display text-3xl text-ink">You&apos;re all set</p>
        <p className="mt-4 text-ink-muted">
          Order <span className="font-mono text-sm">{order ?? "confirmed"}</span>. First delivery in about two weeks.
        </p>
        <p className="mt-2 text-sm text-ink-soft">We sent a receipt and account link to your email.</p>
        {signin && (
          <Link href={signin} className="mt-6 inline-block rounded-md bg-green px-5 py-2.5 text-sm font-medium text-[#faf8f5]">
            Open your account
          </Link>
        )}
        <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm">
          <Link href="/account" className="text-green-light underline">
            Account dashboard
          </Link>
          <Link href="/" className="text-green-light underline">
            Back home
          </Link>
        </div>
      </div>
    </MarketingLayout>
  );
}
