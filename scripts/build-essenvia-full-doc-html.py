#!/usr/bin/env python3
"""Build printable HTML for Essenvia agreement + quote + branding (full contract package)."""
from pathlib import Path

import markdown

ROOT = Path(__file__).resolve().parents[1]
DOCS = ROOT / "docs"
PUBLIC = ROOT / "public"
LOGO = "iidatech-logo.png"

FILES = [
    ("Essenvia-Software-Development-Platform-Services-Agreement-CAD.md", "Platform agreement"),
    ("Essenvia-Quote-Breakdown-Timeline-Payments-CAD.md", "Quote, timeline & payments"),
    ("Essenvia-Branding-Package-SOW-CAD.md", "Branding package"),
]

CSS = """
@page { margin: 14mm 12mm; }
body { font-family: "Public Sans", system-ui, sans-serif; font-size: 10.5pt; line-height: 1.5; color: #141413; margin: 0; }
.wrap { max-width: 210mm; margin: 0 auto; padding: 8mm 10mm 16mm; }
.letterhead { display: flex; align-items: center; gap: 14px; border-bottom: 2px solid #cfdcde; padding-bottom: 12px; margin-bottom: 16px; }
.letterhead img { width: 48px; height: auto; }
.letterhead .t { font-weight: 800; font-size: 15pt; letter-spacing: -0.02em; }
.letterhead .s { font-size: 9pt; color: #4f646b; }
.conf { background: #141413; color: #f5f5f4; padding: 10px 14px; font-size: 9pt; border-left: 4px solid #b91c1c; margin-bottom: 20px; }
.doc-section { page-break-before: always; }
.doc-section:first-of-type { page-break-before: avoid; }
.doc-section h1 { font-size: 16pt; margin: 0 0 12px; line-height: 1.2; }
.doc-section h2 { font-size: 13pt; margin: 22px 0 8px; }
.doc-section h3 { font-size: 11.5pt; margin: 16px 0 6px; }
.doc-section p, .doc-section li { margin: 0 0 8px; }
.doc-section table { border-collapse: collapse; width: 100%; margin: 12px 0; font-size: 9.5pt; }
.doc-section th, .doc-section td { border: 1px solid #cfdcde; padding: 6px 8px; vertical-align: top; }
.doc-section th { background: #f1f5f5; text-align: left; }
.doc-section blockquote { margin: 12px 0; padding: 8px 12px; border-left: 3px solid #0b7a83; background: #f1f5f5; font-size: 9.5pt; }
.doc-section hr { border: 0; border-top: 1px solid #cfdcde; margin: 20px 0; }
.doc-section pre { white-space: pre-wrap; font-family: inherit; font-size: 9.5pt; }
@media print {
  .no-print { display: none !important; }
}
"""

md = markdown.Markdown(extensions=["tables", "fenced_code", "nl2br", "sane_lists"])

sections_html = []
for filename, label in FILES:
    path = DOCS / filename
    body = md.convert(path.read_text(encoding="utf-8"))
    md.reset()
    sections_html.append(
        f'<section class="doc-section" id="{filename}">'
        f'<p class="no-print" style="color:#4f646b;font-size:9pt">Section: {label}</p>'
        f"{body}</section>"
    )

html = f"""<!DOCTYPE html>
<html lang="en-CA">
<head>
<meta charset="utf-8">
<title>Essenvia — full contract package (IIDATECH)</title>
<link href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@400;600;700&display=swap" rel="stylesheet">
<style>{CSS}</style>
</head>
<body>
<div class="wrap">
  <header class="letterhead">
    <img src="{LOGO}" alt="IIDATECH" width="48" height="46">
    <div>
      <div class="t">IIDATECH · Essenvia engagement</div>
      <div class="s">Full contract package · October 2026 · Confidential</div>
    </div>
  </header>
  <div class="conf">
    <strong>STRICTLY CONFIDENTIAL.</strong> Platform agreement, quote and branding SOW for authorized Essenvia recipients only.
    Unauthorized sharing may result in legal action. Have Canadian counsel review before signing.
  </div>
  {"".join(sections_html)}
  <footer style="margin-top:32px;padding-top:12px;border-top:1px solid #cfdcde;font-size:9pt;color:#4f646b">
    Prepared by IIDATECH for Essenvia · Generated from repository markdown · Not legal advice until reviewed by counsel.
  </footer>
</div>
</body>
</html>
"""

out = PUBLIC / "Essenvia-Full-Contract-Package.html"
out.write_text(html, encoding="utf-8")
print(f"Wrote {out} ({out.stat().st_size:,} bytes)")
