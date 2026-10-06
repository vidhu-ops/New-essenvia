#!/usr/bin/env python3
"""Merge Essentra wireframes (1) + how it works (2) into one IIDATECH document."""
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
UP = Path("/home/ubuntu/.cursor/projects/workspace/uploads")
OUT = ROOT / "public" / "Essentra-IIDATECH-Complete-Design-Pack.html"
LOGO_FILE = "iidatech-logo.png"
LOGO_SRC = ROOT / "public" / LOGO_FILE

WIRE = (UP / "Essentra_Wireframes__1__4d3d.html").read_text(encoding="utf-8")
HOW = (UP / "Essentra__how_it_works_and_how_it_looks__2__086a.html").read_text(encoding="utf-8")

# Extract doc2 inner content: hero through rules (skip duplicate colour bar; global palette handles colours)
start = HOW.find('<header class="hero">')
end = HOW.find('<div class="foot">')
if start == -1 or end == -1:
    raise SystemExit("Could not parse doc2 structure")
journey_block = HOW[start:end]
# Include foot from doc2
foot_end = HOW.find("</div>\n\n<script>", end)
journey_foot = HOW[end:foot_end] if foot_end != -1 else ""

# Extract doc2 styles (inside <style>...</style> in head)
style_start = HOW.find("<style>") + len("<style>")
style_end = HOW.find("</style>", style_start)
doc2_css = HOW[style_start:style_end]

# Demo tour script only (palette handled by PALETTE_JS)
script_start = HOW.find('<script>\n(function(){var scs')
script_end = HOW.find("</script>", script_start) + len("</script>")
doc2_scripts = HOW[script_start:script_end] if script_start != -1 else ""

LETTERHEAD_CSS = f"""
.iida-confidential-notice{{position:relative;z-index:45;background:#141413;color:#f5f5f4;padding:12px max(16px,3vw);font-size:12px;line-height:1.5;border-bottom:3px solid #b91c1c}}
.iida-confidential-notice strong{{color:#fff;font-size:13px;display:block;margin-bottom:4px;letter-spacing:.02em}}
.iida-letterhead{{position:relative;z-index:45;border-bottom:2px solid var(--line);background:var(--panel);padding:20px 0 16px;margin-bottom:0}}
.iida-letterhead .inner{{max-width:1240px;margin:0 auto;padding:0 max(16px,3vw);display:flex;flex-wrap:wrap;gap:20px 32px;align-items:center;justify-content:space-between}}
.iida-logo{{display:flex;align-items:center;gap:14px}}
.iida-logo-mark{{flex:none;width:56px;height:auto;display:block}}
.iida-meta{{text-align:right;font-size:13px;color:var(--muted);line-height:1.5;max-width:42ch}}
.iida-meta b{{color:var(--fg);font-size:15px;display:block;margin-bottom:4px}}
.iida-meta .legal{{display:block;margin-top:8px;font-size:11px;color:#7f1d1d;font-weight:600}}
.palette-global{{position:sticky;top:0;z-index:30;background:var(--bg);border-bottom:1px solid var(--line);padding:10px max(16px,3vw);display:flex;flex-wrap:wrap;gap:8px;align-items:center;font-size:13px}}
.palette-global button{{font:inherit;font-weight:600;border:1.5px solid var(--line);background:var(--panel);color:var(--fg);padding:6px 12px;border-radius:99px;cursor:pointer;display:inline-flex;gap:7px;align-items:center}}
.palette-global button i{{width:14px;height:14px;border-radius:50%;display:block}}
.palette-global button[aria-pressed=true]{{border-color:var(--accent);box-shadow:0 0 0 2px rgba(11,122,131,.15)}}
#journey-pack{{margin-top:0;padding-top:8px}}
#journey-pack .bar{{position:static;border:none;padding:0;background:transparent}}
#journey-pack .w{{max-width:1240px;padding:0 max(16px,3vw)}}
@media print{{
  .palette-global,nav.sec{{display:none!important}}
  .iida-confidential-notice,.iida-letterhead{{break-inside:avoid}}
  .stripwrap{{overflow:visible!important}}
  figure.fig{{break-inside:avoid;page-break-inside:avoid}}
}}
"""

IIDATECH_LOGO = f'<img class="iida-logo-mark" src="{LOGO_FILE}" width="56" height="54" alt="IIDATECH logo">'

LETTERHEAD_HTML = f"""
<div class="iida-confidential-notice" role="note">
  <strong>STRICTLY CONFIDENTIAL — IIDATECH PROPRIETARY</strong>
  This document is furnished only to authorized Essentra recipients for internal review.
  It may not be copied, forwarded, published, or discussed with third parties without written consent from IIDATECH.
  Any unauthorized use or disclosure of this material may result in civil and criminal legal action.
</div>
<div class="iida-letterhead"><div class="inner">
  <div class="iida-logo">{IIDATECH_LOGO}<div><div style="font-family:Bricolage Grotesque,sans-serif;font-weight:800;font-size:22px;letter-spacing:-.03em;color:var(--fg)">IIDATECH</div><div style="font-size:13px;color:var(--muted)">Digital product · Essentra engagement</div></div></div>
  <div class="iida-meta"><b>Confidential — client review only</b>Prepared for Josh and the Essentra team<br>October 2026 · Combined design pack v3<span class="legal">Sharing, screenshots, or distribution outside the authorized group is prohibited and may lead to legal action.</span></div>
</div></div>
<div class="palette-global" aria-label="Colour options for full document">
  <span style="font-weight:600;color:var(--muted)">Document colours:</span>
  <button type="button" data-theme-pal="lagoon" aria-pressed="true"><i style="background:#0B7A83"></i>Lagoon (v2)</button>
  <button type="button" data-theme-pal="lake" aria-pressed="false"><i style="background:#19707A"></i>Lake</button>
  <button type="button" data-theme-pal="spruce" aria-pressed="false"><i style="background:#2F6B52"></i>Spruce</button>
  <button type="button" data-theme-pal="blue" aria-pressed="false"><i style="background:#1D4ED8"></i>Blue</button>
  <button type="button" data-theme-pal="maple" aria-pressed="false"><i style="background:#A8372C"></i>Maple</button>
</div>
"""

# Scope doc2 CSS to #journey-pack (Literata/Public Sans journey section)
scoped_doc2_css = """
#journey-pack{font:17px/1.65 "Public Sans",system-ui,sans-serif;color:var(--n)}
#journey-pack h1,#journey-pack h2,#journey-pack h3{font-family:Literata,Georgia,serif;font-weight:700;line-height:1.2;margin:0}
#journey-pack[data-pal=lagoon]{--b:#0B7A83;--n:#10242B;--m:#4F646B;--l:#CFDCDE;--t:#EAF3F3;--a:#F4B63D}
""" + "\n".join(
    (
        line
        if line.strip().startswith("@") or not line.strip()
        else line.replace("[data-pal=", "#journey-pack[data-pal=", 1)
        if line.strip().startswith("[data-pal=")
        else "#journey-pack " + line
    )
    for line in doc2_css.splitlines()
    if not line.strip().startswith(":root{")
    and "body{margin:0;background:#fff" not in line
    and "html{scroll-padding-top" not in line
)

JOURNEY_SECTION = f"""
<section class="s" id="journey"><h2>How it works — screen by screen</h2>
<p class="lead">From the companion journey document: why each customer and rep screen exists, what it does for Essentra, and why we expect it to work. Use the colour switcher above on this section too.</p>
<div id="journey-pack" data-pal="lagoon">
{journey_block}
{journey_foot}
</div></section>
"""

PALETTE_JS = """
<script>
(function(){
  var maps={
    lagoon:{bg:'#F1F5F5',fg:'#10242B',muted:'#4F646B',line:'#CFDCDE',panel:'#FFFFFF',accent:'#0B7A83',mari:'#F4B63D',j:'lagoon',jpal:{b:'#0B7A83',n:'#10242B',m:'#4F646B',l:'#CFDCDE',t:'#EAF3F3',a:'#F4B63D'}},
    lake:{bg:'#E8F3F4',fg:'#11303A',muted:'#4B6A70',line:'#CBE0E2',panel:'#FFFFFF',accent:'#19707A',mari:'#E9853F',j:'lake',jpal:{b:'#19707A',n:'#11303A',m:'#4B6A70',l:'#CBE0E2',t:'#EEF4FF',a:'#E9853F'}},
    spruce:{bg:'#EDF5F0',fg:'#14302A',muted:'#526A60',line:'#D3E3DA',panel:'#FFFFFF',accent:'#2F6B52',mari:'#E0A030',j:'spruce',jpal:{b:'#2F6B52',n:'#14302A',m:'#526A60',l:'#D3E3DA',t:'#EDF5F0',a:'#E0A030'}},
    blue:{bg:'#EEF4FF',fg:'#0B1F44',muted:'#4A5D7E',line:'#D6E2F5',panel:'#FFFFFF',accent:'#1D4ED8',mari:'#E8A33D',j:'blue',jpal:{b:'#1D4ED8',n:'#0B1F44',m:'#4A5D7E',l:'#D6E2F5',t:'#EEF4FF',a:'#E8A33D'}},
    maple:{bg:'#FAF0EE',fg:'#2B1A18',muted:'#6B5A56',line:'#EBD9D5',panel:'#FFFFFF',accent:'#A8372C',mari:'#3F6F8F',j:'maple',jpal:{b:'#A8372C',n:'#2B1A18',m:'#6B5A56',l:'#EBD9D5',t:'#FAF0EE',a:'#3F6F8F'}}
  };
  function apply(name){
    var m=maps[name]||maps.lagoon;
    var r=document.documentElement;
    r.style.setProperty('--bg',m.bg);r.style.setProperty('--fg',m.fg);r.style.setProperty('--muted',m.muted);
    r.style.setProperty('--line',m.line);r.style.setProperty('--panel',m.panel);r.style.setProperty('--accent',m.accent);r.style.setProperty('--mari',m.mari);
    var jp=document.getElementById('journey-pack');
    if(jp){
      jp.setAttribute('data-pal',m.j);
      Object.keys(m.jpal).forEach(function(k){ jp.style.setProperty('--'+k,m.jpal[k]); });
      jp.querySelectorAll('.card[data-pal]').forEach(function(c){ c.classList.toggle('pick',c.dataset.pal===m.j); });
    }
    document.querySelectorAll('.f').forEach(function(frame){
      var lag=m.j==='lagoon'?m.accent:(m.jpal&&m.jpal.b)||m.accent;
      frame.style.setProperty('--lag',lag);
      frame.style.setProperty('--tint',m.j==='lagoon'?'#E3F2F2':m.jpal.t);
    });
    document.querySelectorAll('.palette-global button,.bar button').forEach(function(b){
      var on=(b.dataset.themePal||b.dataset.p)===name;
      b.setAttribute('aria-pressed',on?'true':'false');
    });
  }
  document.querySelectorAll('.palette-global button').forEach(function(b){
    b.addEventListener('click',function(){ apply(b.dataset.themePal); });
  });
  document.querySelectorAll('#journey-pack .bar button').forEach(function(b){
    b.addEventListener('click',function(){ apply(b.dataset.p); });
  });
  apply('lagoon');
})();
</script>
"""

# Wireframe doc modifications
out = WIRE
out = out.replace("<title>Essentra Wireframes</title>", "<title>Essentra — IIDATECH complete design pack</title>")
out = out.replace(
    "<h1>Essentra look and feel and wireframes</h1><p>Version 2 · 5 October 2026 · prepared by IIDATECH for the Essentra team. Mobile first, one backend, one price for the customer.</p>",
    "<h1>Essentra — look, feel, journey &amp; wireframes</h1><p>Combined pack v3 · IIDATECH letterhead · mobile-first, one backend, one customer price.</p>",
)
out = out.replace(
    "rel=stylesheet>",
    'rel=stylesheet><link href="https://fonts.googleapis.com/css2?family=Literata:opsz,wght@7..72,500;7..72,700&family=Public+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">',
    1,
)
out = out.replace("</style>", LETTERHEAD_CSS + scoped_doc2_css + "\n</style>", 1)
out = out.replace('<div class="wrap">', LETTERHEAD_HTML + '<div class="wrap">', 1)
out = out.replace(
    '<nav class="sec" aria-label="Sections"><a href="#look">Look and feel</a>',
    '<nav class="sec" aria-label="Sections"><a href="#journey">Customer journey</a><a href="#colour">Colour options</a><a href="#look">Look and feel</a>',
)
out = out.replace(
    '<section class="s" id="look">',
    JOURNEY_SECTION + '\n<section class="s" id="look">',
)
out = out.replace(
    '<footer class="end">Wireframes are mid-fidelity',
    '<footer class="end"><img src="' + LOGO_FILE + '" alt="" width="36" height="35" style="vertical-align:middle;margin-right:8px;opacity:.85" aria-hidden="true"><b>IIDATECH</b> · Strictly confidential · Prepared for Essentra · Unauthorized sharing prohibited — legal action may apply.<br>Prices and figures on screens are placeholders. Essentra legal wording awaiting counsel.<br><br>Wireframes are mid-fidelity',
)
# Fix doc2 journey bar duplicate - remove inner bar from journey_block first line? journey_block starts with bar - ok inside journey-pack

out = out.replace("</body></html>", doc2_scripts + PALETTE_JS + "\n</body></html>")

if not LOGO_SRC.is_file():
    raise SystemExit(f"Missing logo at {LOGO_SRC} — add {LOGO_FILE} to public/")

OUT.write_text(out, encoding="utf-8")
print(f"Wrote {OUT} ({OUT.stat().st_size} bytes)")
