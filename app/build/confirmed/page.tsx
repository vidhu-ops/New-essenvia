import Link from "next/link";

export default async function ConfirmedPage({
  searchParams,
}: {
  searchParams: Promise<{ order?: string }>;
}) {
  const { order } = await searchParams;
  return (
    <div className="mx-auto max-w-lg px-5 py-20 text-center">
      <p className="font-display text-3xl text-ink">You&apos;re all set</p>
      <p className="mt-4 text-ink-muted">Order {order ?? "confirmed"}. First delivery in about two weeks.</p>
      <p className="mt-2 text-sm text-ink-soft">Receipt email · account ready (password reset flow in production)</p>
      <Link href="/warehouse" className="mt-8 inline-block text-green-light underline">
        View in warehouse console
      </Link>
    </div>
  );
}
