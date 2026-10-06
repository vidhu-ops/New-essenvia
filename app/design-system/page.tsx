import { MarketingLayout } from "@/components/essentra/MarketingLayout";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const swatches = [
  {
    name: "Essentra Forest",
    hex: "#1B4332",
    why: "Deep green signals stability, care, and domestic responsibility—not discount retail red. It anchors trust for a service that enters the home monthly.",
  },
  {
    name: "Essentra Sage",
    hex: "#40916C",
    why: "Mid green is approachable and calming (parasympathetic-friendly). Used for progress, success, and secondary actions so the UI feels supportive, not pushy.",
  },
  {
    name: "Essentra Mint",
    hex: "#D8F3DC",
    why: "Soft mint washes reduce visual stress and segment sections without harsh gray boxes—important for family-oriented, ‘safe home’ positioning.",
  },
  {
    name: "Warm Canvas",
    hex: "#FAFAF8",
    why: "Slightly warm off-white avoids clinical ‘hospital white’ and reads premium/subtle vs. pure #FFFFFF used by bargain sites.",
  },
  {
    name: "Slate muted text",
    hex: "#64748B",
    why: "Cool gray for body secondary text maintains readability (WCAG-aware pairs) while keeping attention on primary decisions and price.",
  },
];

const typeScale = [
  {
    role: "Source Serif 4 — headlines",
    sample: "Your household essentials.",
    className: "font-serif text-4xl text-[#1B4332]",
    why: "Serif display conveys heritage and sincerity—consumers trust ‘established’ brands for recurring household spend (authority heuristic).",
  },
  {
    role: "DM Sans — UI & body",
    sample: "Build my box in about five minutes.",
    className: "text-lg text-[#64748B]",
    why: "Humanist sans maximizes legibility on mobile at 16px+ and feels friendly—not tech-bro geometric sans common on SaaS landing pages.",
  },
];

const principles = [
  {
    title: "One primary action per screen",
    body: "Hick’s Law: fewer competing CTAs speed decisions. Build flow uses a single green Continue button; marketing pages pair one solid + one outline CTA max.",
  },
  {
    title: "Price after personalization",
    body: "Endowment effect—users value ‘their’ box more after investing preferences. Package price appears on the result screen, not step 1.",
  },
  {
    title: "Progress bar on builder",
    body: "Goal-gradient effect: visible completion increases follow-through. Percent label sets honest expectation (~5 steps).",
  },
  {
    title: "Rounded corners (12–16px)",
    body: "Contour bias: softer shapes feel safer and more human—aligned with family brand, not sharp fintech aggression.",
  },
  {
    title: "No fake urgency",
    body: "Loss aversion from countdown timers erodes long-term subscription trust. We use calm copy: skip, pause, secure billing.",
  },
  {
    title: "Recognizable brands in UI copy",
    body: "Mere-exposure: Tide, Charmin, etc. reduce switching anxiety vs. anonymous ‘Brand A’ labels.",
  },
  {
    title: "Sticky header with single CTA",
    body: "Recognition over recall—‘Build my box’ always reachable without scrolling, but header stays lightweight to avoid banner blindness.",
  },
  {
    title: "Featured plan card",
    body: "Social proof framing (‘Most matched’) guides choice without hiding other tiers—supports autonomy while nudging default.",
  },
];

export default function DesignSystemPage() {
  return (
    <MarketingLayout>
      <div className="mx-auto max-w-4xl px-4 py-16">
        <Badge className="mb-4 bg-[#D8F3DC] text-[#1B4332]">Phase 0 · UI / UX specification</Badge>
        <h1 className="font-serif text-4xl text-[#1B4332]">Look, feel & human psychology</h1>
        <p className="mt-4 text-lg leading-relaxed text-[#64748B]">
          Every token below maps to a behavioural goal: reduce anxiety, increase trust, and make subscription feel simpler
          than a grocery run—not to manipulate, but to respect cognitive limits.
        </p>

        <section className="mt-16">
          <h2 className="font-serif text-2xl text-[#1B4332]">Colour system</h2>
          <div className="mt-6 space-y-4">
            {swatches.map((s) => (
              <div key={s.hex} className="flex gap-4 rounded-xl border border-[#E2E8F0] bg-white p-4">
                <div className="h-16 w-16 shrink-0 rounded-lg border border-black/5" style={{ background: s.hex }} />
                <div>
                  <p className="font-semibold">
                    {s.name} <span className="font-mono text-sm text-[#64748B]">{s.hex}</span>
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-[#64748B]">{s.why}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="font-serif text-2xl text-[#1B4332]">Typography</h2>
          <div className="mt-6 space-y-6">
            {typeScale.map((t) => (
              <div key={t.role} className="rounded-xl border border-[#E2E8F0] bg-white p-6">
                <p className="text-xs font-semibold uppercase tracking-wide text-[#40916C]">{t.role}</p>
                <p className={cn("mt-3", t.className)}>{t.sample}</p>
                <p className="mt-4 text-sm text-[#64748B]">{t.why}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="font-serif text-2xl text-[#1B4332]">Components</h2>
          <div className="mt-6 flex flex-wrap gap-3">
            <span className={cn(buttonVariants(), "rounded-full bg-[#1B4332]")}>Primary CTA</span>
            <span className={cn(buttonVariants({ variant: "outline" }), "rounded-full")}>Secondary</span>
            <Badge className="bg-[#D8F3DC] text-[#1B4332]">Trust badge</Badge>
          </div>
          <p className="mt-4 text-sm text-[#64748B]">
            Primary buttons use forest fill (commitment). Outline buttons satisfy explorers who need more information
            before the same journey (dual-process theory: System 2 before System 1 checkout).
          </p>
        </section>

        <section className="mt-16">
          <h2 className="font-serif text-2xl text-[#1B4332]">Experience principles</h2>
          <Accordion className="mt-6 rounded-xl border border-[#E2E8F0] bg-white px-4">
            {principles.map((p, i) => (
              <AccordionItem key={p.title} value={`item-${i}`}>
                <AccordionTrigger className="text-left font-medium text-[#1A1A1A]">{p.title}</AccordionTrigger>
                <AccordionContent className="text-[#64748B]">{p.body}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        <p className="mt-12 text-sm text-[#94A3B8]">
          Full specification:{" "}
          <code className="rounded bg-[#E2E8F0] px-1">docs/UI-UX-PSYCHOLOGY-DESIGN-SYSTEM.md</code>
        </p>
      </div>
    </MarketingLayout>
  );
}
