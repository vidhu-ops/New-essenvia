# Essentra UI/UX & Human Psychology Design System

**Version:** 1.0 · Phase 0 look & feel  
**Audience:** Product, design, development, marketing  
**Principle:** Customer-facing simplicity; psychology serves clarity—not dark patterns.

---

## 1. Brand intent

Essentra must read as a **national, premium household service** within **5–10 seconds** of landing:

- *What:* Recurring box of recognizable essentials  
- *How:* Guided customization, not a catalog  
- *Price:* One monthly number  
- *Feeling:* Calm, trustworthy, family-safe  

We deliberately avoid visual language associated with dropshipping (neon sale badges, cluttered grids, countdown timers) because those cues trigger **scam heuristic** and **low-trust** associations—fatal for recurring billing.

---

## 2. Colour palette & psychology

| Token | Hex | Where used | Psychological rationale |
|-------|-----|------------|-------------------------|
| **Essentra Forest** | `#1B4332` | Primary buttons, headers, hero emphasis | Dark green connects to **growth, stability, and domestic care** (biophilia). Unlike red (urgency/discount), green supports **long-horizon trust**—appropriate for subscriptions. |
| **Essentra Sage** | `#40916C` | Links, progress bars, accents, “Most matched” | Mid-tone green is **calming** (lower arousal than saturated primaries). Used for feedback and progress so the interface feels **coaching**, not **pushing**. |
| **Essentra Mint** | `#D8F3DC` | Section washes, badges, soft highlights | Light cool-green backgrounds **reduce visual noise** vs. gray blocks; supports **safe home** mood for family buyers. |
| **Warm Canvas** | `#FAFAF8` | Page background | Slightly warm white avoids **clinical sterility** of pure `#FFF` (often used by hospital/low-cost brands) and reads **premium subtle**. |
| **Charcoal** | `#1A1A1A` | Primary text | High readability without harsh `#000` contrast fatigue on mobile. |
| **Slate** | `#64748B` | Secondary text | De-emphasizes supporting copy (**selective attention**); keeps focus on CTAs and price moments. |
| **Border** | `#E2E8F0` | Cards, dividers | Light structure without boxing users in (**cognitive framing** stays open). |

**Accessibility:** Body text pairs target WCAG AA for common sizes; primary green buttons use light foreground `#F8FAF9`.

---

## 3. Typography

| Role | Typeface | Sizes (mobile-first) | Rationale |
|------|----------|----------------------|-----------|
| **Display / H1–H2** | Source Serif 4 | 40–52px hero; 28–32px sections | Serif headlines activate **competence + tradition** heuristics—useful when asking for **financial commitment**. Differentiates from geometric SaaS sans competitors. |
| **UI / body** | DM Sans | 16–18px body; 14px labels | Humanist sans optimized for **screen legibility** and **approachability** at arm’s length (phone). |
| **Labels / meta** | DM Sans uppercase tracking | 11–12px | **Signifiers** for form sections; small caps pattern aids **scanning** without shouting. |

**Line length:** Marketing prose capped ~65 characters where possible—reduces **cognitive load** (reading comfort research).

---

## 4. Layout & spacing

- **8px grid** internally; generous **24–32px** section padding on mobile—**breathing room** signals premium and prevents **choice overload** from dense tiles.  
- **Single-column** build flow on mobile—**serial position** keeps user focused on one decision.  
- **Max-width ~512px** on builder—optimal thumb reach zone for primary actions (Fitts’s Law).

---

## 5. Component decisions

### Primary CTA (pill button, forest fill)

- **One per viewport** in funnel screens.  
- Rounded-full shape: **approachable**, not corporate rectangle.  
- Hover → sage: **affordance** without jarring color jumps.

### Secondary CTA (outline)

- Serves **System 2** users who need “How it works” before **System 1** commitment to builder.  
- Dual-process theory: both paths valid; outline prevents feeling trapped.

### Cards

- White on canvas with light border—**figure/ground** separation without heavy shadows (shadows reserved for **hero box** and **featured plan** to draw **visual hierarchy**).

### Progress bar (Build My Box)

- **Goal-gradient effect:** users accelerate as completion nears.  
- **Percent label:** sets honest time expectation—reduces **uncertainty anxiety** (major drop-off driver).

### Option tiles (builder)

- Large tap targets (min 52px height)—**motor + elderly-friendly**.  
- Selected state: border + subtle ring—**recognition** without relying on color alone.

### Featured plan (“Most matched”)

- **Social proof** nudge without hiding other plans (**autonomy** preserved—important for Canadian consumers and subscription regulations mindset).

---

## 6. Page-level UX

### Homepage hero

- **Headline first**, price later—users must understand *category* before *cost* (mental model formation).  
- **Box illustration** abstracted (categories, not 50 SKUs)—prevents **catalog overwhelm**.  
- Trust bullets under CTAs: **risk reversal** (skip/pause/secure)—addresses **loss aversion** on subscriptions.

### Build My Box (5 steps)

| Step | Content | Psychology |
|------|---------|--------------|
| 1 Household | Numeric tiles | Easy anchor for later quantity defaults |
| 2 Laundry | Brand + format + slider | **Familiar brands** → lower switching cost |
| 3 Paper | Separate TP vs towels | Validates “not one-size-fits-all” narrative |
| 4 Kitchen | Checklist confidence | **Completion bias**—visible progress |
| 5 Cleaning | Final categories | **Consistency**—finish what you started |
| Result | Single CAD price + contents | **Endowment** + **transparent recap** before pay |
| Checkout | Recap + Stripe + consent | **Peak-end rule**—end on secure, clear summary |

### Design system page (`/design-system`)

Living reference for stakeholders—links behaviour to research names (Hick, Zeigarnik, etc.) for **shared vocabulary** in reviews.

---

## 7. What we explicitly avoid

| Pattern | Why avoided |
|---------|-------------|
| Countdown timers | Fake urgency → **trust erosion** + chargeback risk perception |
| 40-product grids | **Paradox of choice**; contradicts “simple box” promise |
| Per-item +$ surcharges in UI | **Pain of paying** multiplied; violates one-price brand |
| Popups on entry | **Reactance**—users feel manipulated |
| Dark patterns in cancel | Legal/ethical risk; hurts **retention quality** |

---

## 8. Motion (future)

- Subtle 200–300ms transitions on tile select—**feedback** without distraction.  
- No autoplay video with sound—**control** remains with user.

---

## 9. Implementation map

| Surface | Route |
|---------|--------|
| Marketing home | `/` |
| Design rationale (live) | `/design-system` |
| Guided builder (hi-fi) | `/build/step-1` … `/build/checkout` |
| Lo-fi approval wireframes | `/wireframes/*` (unchanged for comparison) |

---

## 10. Approval checklist

- [ ] Josh/Essentra: brand feels **premium + family**, not discount  
- [ ] Builder feels **fast and calm** on mobile  
- [ ] Single-price moment is **clear** on result + checkout  
- [ ] Psychology doc aligns with **no dark patterns** policy  

---

*This document complements `Essentra-Platform-Design-Proposal-CAD.md` and should evolve in Phase 0 reviews.*
