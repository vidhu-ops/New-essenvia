#!/usr/bin/env node
/** PDF for Essenvia full contract package HTML (file:// or served). */
import { copyFileSync, mkdirSync } from "node:fs";
import { chromium } from "playwright";
import path from "node:path";
import { pathToFileURL, fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(__dirname, "..");
const htmlPath = path.join(root, "public", "Essenvia-Full-Contract-Package.html");
const outPath = path.join(root, "public", "Essenvia-Full-Contract-Package.pdf");
const artifactsPdf = path.join("/opt/cursor/artifacts", "Essenvia-Full-Contract-Package.pdf");

const base = process.env.BASE_URL?.replace(/\/$/, "");
const url = base
  ? `${base}/Essenvia-Full-Contract-Package.html`
  : pathToFileURL(htmlPath).href;

const browser = await chromium.launch({ channel: "chrome", headless: true });
const page = await browser.newPage();
await page.goto(url, { waitUntil: "networkidle", timeout: 300000 });
await page.evaluate(async () => {
  if (document.fonts?.ready) await document.fonts.ready;
});
await page.emulateMedia({ media: "print" });
await page.pdf({
  path: outPath,
  format: "A4",
  printBackground: true,
  margin: { top: "10mm", right: "10mm", bottom: "12mm", left: "10mm" },
  scale: 0.92,
});
await browser.close();

console.log(`Wrote ${outPath}`);

try {
  mkdirSync(path.dirname(artifactsPdf), { recursive: true });
  copyFileSync(outPath, artifactsPdf);
  console.log(`Copied to ${artifactsPdf}`);
} catch (e) {
  console.warn("Artifacts copy skipped:", e.message);
}
