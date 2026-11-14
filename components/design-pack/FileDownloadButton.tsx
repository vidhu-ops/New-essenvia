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
      const fetchUrl =
        apiType === "html"
          ? "/Essentra-IIDATECH-Complete-Design-Pack-standalone.html"
          : "/downloads/Essentra-IIDATECH-Complete-Design-Pack.zip";
      const res = await fetch(fetchUrl);
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error ?? "Download failed");
      }
      const blob = await res.blob();
      const disposition = res.headers.get("Content-Disposition") ?? "";
      const match = disposition.match(/filename="([^"]+)"/);
      const filename =
        match?.[1] ??
        (apiType === "zip"
          ? "Essentra-IIDATECH-Complete-Design-Pack.zip"
          : "Essentra-IIDATECH-Complete-Design-Pack.html");
      const blobUrl = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = blobUrl;
      a.download = filename;
      a.rel = "noopener";
      document.body.appendChild(a);
      a.click();
      a.remove();
      URL.revokeObjectURL(blobUrl);
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
