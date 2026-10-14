"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function GlobalError({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="mx-auto flex min-h-[60vh] max-w-lg flex-col justify-center px-5 py-20 text-center">
      <h1 className="font-display text-2xl text-ink">Something went wrong</h1>
      <p className="mt-3 text-ink-muted">We could not load this page. Try again or return home.</p>
      <div className="mt-8 flex flex-wrap justify-center gap-4">
        <button type="button" onClick={() => reset()} className="rounded-md bg-green px-5 py-2.5 text-sm font-medium text-[#faf8f5]">
          Try again
        </button>
        <Link href="/" className="rounded-md border border-line px-5 py-2.5 text-sm text-ink-muted hover:text-ink">
          Home
        </Link>
      </div>
    </div>
  );
}
