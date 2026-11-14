#!/usr/bin/env python3
"""Export downloadable design pack artifacts (standalone HTML + zip)."""
import base64
import zipfile
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
PUBLIC = ROOT / "public"
STORAGE = ROOT / "storage" / "design-pack"
ARTIFACTS = Path("/opt/cursor/artifacts")
HTML_NAME = "Essentra-IIDATECH-Complete-Design-Pack.html"
LOGO_NAME = "iidatech-logo.png"


def main() -> None:
    ARTIFACTS.mkdir(parents=True, exist_ok=True)
    html_path = PUBLIC / HTML_NAME
    logo_path = PUBLIC / LOGO_NAME
    html = html_path.read_text(encoding="utf-8")
    data_uri = "data:image/png;base64," + base64.b64encode(logo_path.read_bytes()).decode("ascii")
    standalone = html.replace(f'src="{LOGO_NAME}"', f'src="{data_uri}"')

    out_html = ARTIFACTS / HTML_NAME
    out_html.write_text(standalone, encoding="utf-8")
    standalone_public = PUBLIC / "Essentra-IIDATECH-Complete-Design-Pack-standalone.html"
    standalone_public.write_text(standalone, encoding="utf-8")

    out_zip = ARTIFACTS / "Essentra-IIDATECH-Complete-Design-Pack.zip"
    with zipfile.ZipFile(out_zip, "w", zipfile.ZIP_DEFLATED) as zf:
        zf.write(html_path, HTML_NAME)
        zf.write(logo_path, LOGO_NAME)
        zf.writestr(
            "README.txt",
            "Open Essentra-IIDATECH-Complete-Design-Pack.html in Chrome, Safari, or Edge.\n"
            "Keep iidatech-logo.png in the same folder as the HTML file.\n",
        )

    STORAGE.mkdir(parents=True, exist_ok=True)
    storage_zip = STORAGE / "Essentra-IIDATECH-Complete-Design-Pack.zip"
    storage_zip.write_bytes(out_zip.read_bytes())

    downloads = PUBLIC / "downloads"
    downloads.mkdir(parents=True, exist_ok=True)
    vercel_zip = downloads / "Essentra-IIDATECH-Complete-Design-Pack.zip"
    vercel_zip.write_bytes(out_zip.read_bytes())

    legacy_public_zip = PUBLIC / "Essentra-IIDATECH-Complete-Design-Pack.zip"
    if legacy_public_zip.exists():
        legacy_public_zip.unlink()

    print(f"Wrote {out_html} ({out_html.stat().st_size:,} bytes)")
    print(f"Wrote {out_zip} ({out_zip.stat().st_size:,} bytes)")
    print(f"Wrote {standalone_public} and {storage_zip}")


if __name__ == "__main__":
    main()
