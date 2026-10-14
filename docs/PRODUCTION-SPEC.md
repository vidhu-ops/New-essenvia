# Essentra — production specification (detailed)

This document expands Josh’s October 2026 platform brief and the Essenvia CAD agreement into **acceptance-ready requirements** for the public website and web application. The codebase implements **Phase 1–2** in a single Next.js deploy; later phases (NestJS split, Expo, Terminal) remain optional extractions.

## 1. Product summary

**Essentra** is a Canadian subscription for national-brand household essentials. Customers complete a guided **Build My Box** flow; the **package engine** maps their basket’s wholesale cost to **Essential**, **Family**, or **Plus** with **one public monthly price** (no wholesale or margin shown). Operations teams manage catalog, thresholds, orders, and fulfillment through role-based consoles.

## 2. Personas & roles

| Role | Primary surfaces | Capabilities |
|------|------------------|--------------|
| **Customer** | Marketing site, build flow, `/account` | Subscribe, skip/pause/cancel, update delivery, billing portal |
| **Sales rep** | `/rep/*` (tablet) | Compare, customize, attribute signup, Stripe Terminal (production) |
| **Warehouse** | `/warehouse` | Pick/pack, status transitions, bin lookup |
| **Support / Manager** | Admin (read + configured write) | Customers, exceptions, refunds (Stripe) |
| **Admin / Owner** | `/admin/*` | Catalog costs, package thresholds, orders, audit trail |

## 3. Customer journey (web)

1. **Discover** — `/`, `/how-it-works`, `/products`, `/plans`, `/why`, `/faq`
2. **Build** — `/build/step-1` … `step-5` → `/build/result` (server-side package calculation)
3. **Checkout** — `/build/checkout` — address, consents, payment
   - **Production:** Stripe Checkout / Billing; subscription `PENDING` until webhook confirms
   - **Demo:** local DB activation when Stripe keys absent
4. **Confirm** — `/build/confirmed` + email receipt + magic-link sign-in
5. **Account** — `/account`, `/account/delivery`, `/account/billing`
   - View box line items, next delivery/billing dates
   - Skip next cycle, pause, cancel (policy-driven; admin-configurable in full build)
   - Stripe Customer Portal when configured

## 4. Package engine (business rules)

- Sum **active SKU wholesale costs** × quantities from resolved basket.
- Select package where `minInternalCostCents ≤ total ≤ maxInternalCostCents`.
- If no band matches, use highest `sortOrder` package (Plus cap).
- **Admin** edits thresholds and public `priceCents` without code deploy.
- **Future:** versioned supplier costs, substitute SKUs, promotional overrides.

## 5. Payments & billing (production)

| Item | Requirement |
|------|-------------|
| Provider | Stripe Billing (CAD), Apple Pay / Google Pay via Checkout |
| Charge timing | Configurable; default **3 days before ship** (SiteSetting) |
| States | `PENDING`, `ACTIVE`, `PAST_DUE`, `PAUSED`, `CANCELLED` |
| Webhooks | `checkout.session.completed`, `invoice.paid`, `invoice.payment_failed`, `customer.subscription.updated` |
| PCI | No PAN storage; Stripe.js / Checkout only |
| Rep | Stripe Terminal + offline queue (Phase 4) |

Env: `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, price IDs per plan slug.

## 6. Authentication & security

| Item | Implementation |
|------|----------------|
| Staff | Email + password (bcrypt), session cookie `essentra_session` (HTTP-only, SameSite=Lax) |
| Customers | Magic-link email (primary); optional password later |
| Middleware | Edge protection for `/admin`, `/warehouse`, `/account`, `/rep` |
| RBAC | Role checked on server for every mutation |
| Audit | `AuditLog` on admin writes |
| Secrets | `AUTH_SECRET`, Stripe keys via env / host vault |
| TLS | Enforced at host (Vercel / AWS) |

## 7. Admin console (modules)

| Module | Route | MVP in repo | Full production |
|--------|-------|-------------|-----------------|
| Overview | `/admin` | KPIs | + alerts |
| Catalog & costs | `/admin/catalog` | **Editable wholesale & inventory** | Substitutes, cost history |
| Packages | `/admin/packages` | **Editable prices & bands** | A/B pricing |
| Customers | `/admin/customers` | List | Detail, support notes |
| Orders | `/admin/orders` | List + status | Refunds, re-ship |
| Warehouse | `/warehouse` | Pick list + **status update** | Barcode, batch pick |
| Analytics | — | — | GA4, cohort, LTV |
| Content / FAQ | — | Static pages | CMS |

## 8. Legal & compliance (Canada)

Placeholder pages until counsel finalizes copy (linked from footer and checkout):

- Terms of Service, Subscription Terms, Privacy Policy (PIPEDA-oriented)
- Shipping & Delivery, Refunds, Cancellation, Accessibility

Checkout requires explicit subscription authorization checkbox linking to Subscription Terms.

## 9. Infrastructure

| Layer | Local | Production target |
|-------|-------|-------------------|
| App | Next.js 16 App Router | Vercel or AWS (ca-central-1) |
| DB | SQLite file | **PostgreSQL** (Neon / RDS) |
| ORM | Prisma 5 | Migrations in CI |
| Email | Console log | Resend / SES |
| Object storage | — | S3 for SKU images (optional) |

See `.env.example` and `docs/DEPLOY-VERCEL.md`.

## 10. Observability & quality

- App Router: `error.tsx`, `loading.tsx`, `not-found.tsx`
- Structured audit log for admin mutations
- **Recommended:** Sentry, health check route `/api/health`

## 11. Out of scope (this repo, documented for roadmap)

- NestJS API extraction
- Expo customer / rep native apps
- Full delivery-zone waitlist engine
- Penetration test (separate SOW)

## 12. Demo credentials

After `npm run db:seed`: `admin@essentra.ca`, `rep@essentra.ca`, `warehouse@essentra.ca` — password `essentra-demo`.

Customers created via checkout receive a **magic link** (logged in dev when email is not configured).
