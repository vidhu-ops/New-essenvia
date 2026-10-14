"use client";

import { useState } from "react";

/** Downloads via fetch + blob so the browser never navigates to a .zip URL (no Save As loop). */
export function FileDownloadButton({
  apiType,
  label,
  className,
}: {
  apiType: "zip" | "html";
  label: string;
  className?: string;
}) {
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState("");

  async function onClick() {
    setBusy(true);
    setError("");
    try {
      const res = await fetch(`/api/design-pack/download?type=${apiType}`);
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "Download failed");
      }
      const blob = await res.blob();
      const disposition = res.headers.get("Content-Disposition") ?? "";
      const match = disposition.match(/filename="([^"]+)"/);
      const filename = match?.[1] ?? (apiType === "zip" ? "design-pack.zip" : "design-pack.html");
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = filename;
      a.rel = "noopener";
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(url);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Download failed");
    } finally {
      setBusy(false);
    }
  }

  return (
    <span className="inline-flex flex-col items-start gap-1">
      <button type="button" disabled={busy} onClick={onClick} className={className}>
        {busy ? "Preparing…" : label}
      </button>
      {error && <span className="text-xs text-red-700">{error}</span>}
    </span>
  );
}
