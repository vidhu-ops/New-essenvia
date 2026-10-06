#!/usr/bin/env node
/**
 * Print the combined IIDATECH design pack to PDF (requires dev server or `npm run start`).
 * Usage: node scripts/generate-design-pack-pdf.mjs
 * Env: BASE_URL (default http://127.0.0.1:4321)
 */
import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const outPath = path.join(root, "public", "Essentra-IIDATECH-Complete-Design-Pack.pdf");
const base = process.env.BASE_URL || "http://127.0.0.1:4321";
const url = `${base.replace(/\/$/, "")}/Essentra-IIDATECH-Complete-Design-Pack.html`;

async function waitForServer(maxMs = 60000) {
  const start = Date.now();
  while (Date.now() - start < maxMs) {
    try {
      const res = await fetch(url, { method: "HEAD" });
      if (res.ok) return;
    } catch {
      /* retry */
    }
    await new Promise((r) => setTimeout(r, 1500));
  }
  throw new Error(`Design pack not reachable at ${url}. Start: npm run dev -- -p 4321`);
}

await mkdir(path.dirname(outPath), { recursive: true });
await waitForServer();

const browser = await chromium.launch({
  channel: "chrome",
  headless: true,
});
const page = await browser.newPage();
await page.setViewportSize({ width: 1280, height: 900 });
await page.goto(url, { waitUntil: "networkidle", timeout: 180000 });
await page.evaluate(async () => {
  if (document.fonts?.ready) await document.fonts.ready;
  const step = Math.max(window.innerHeight, 400);
  for (let y = 0; y < document.body.scrollHeight; y += step) {
    window.scrollTo(0, y);
    await new Promise((r) => setTimeout(r, 80));
  }
  window.scrollTo(0, 0);
});
await page.emulateMedia({ media: "print" });
await page.pdf({
  path: outPath,
  format: "A4",
  printBackground: true,
  margin: { top: "10mm", right: "8mm", bottom: "10mm", left: "8mm" },
  scale: 0.88,
});
await browser.close();

console.log(`Wrote ${outPath}`);
