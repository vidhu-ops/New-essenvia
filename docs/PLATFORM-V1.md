# Essentra Platform — production web app (this repo)

Josh’s October 2026 brief is implemented as a **production-oriented** Next.js application: public marketing site, Build My Box, Stripe-ready checkout, customer account, admin operations, rep and warehouse consoles.

**Full requirements:** [`PRODUCTION-SPEC.md`](./PRODUCTION-SPEC.md)

## Surfaces

| Surface | URL | Notes |
|---------|-----|--------|
| Public website | `/`, `/how-it-works`, `/products`, `/plans`, `/why`, `/faq`, `/about`, `/contact` | Mobile-first, legal footer |
| Legal | `/legal/*` | Draft Terms, Privacy, Subscription, etc. |
| Build My Box | `/build/step-1` … `/build/result` | Questionnaire → package engine |
| Checkout | `/build/checkout` | Stripe Checkout when configured; demo DB otherwise |
| Account | `/account`, `/account/delivery`, `/account/billing` | Skip/pause/cancel, address, billing |
| Login | `/login` | Staff password + customer magic link |
| Admin backend | `/admin` + sidebar modules | Production line, delivery, DB view, sales reps |
| Admin | `/admin/catalog`, `/admin/packages`, `/admin/customers`, `/admin/orders` | **Editable** catalog & thresholds |
| Production | `/admin/production` | Queue → pack → QC → dispatch (linked to orders) |
| Delivery drivers | `/delivery` | Assigned stops + status updates |
| Sales rep | `/rep`, `/rep/customize`, `/rep/signup` | Tablet-oriented flow (Terminal = Stripe env) |
| Warehouse | `/warehouse` | Pick list + status progression |
| Health | `/api/health` | Load balancer probe |
| Wireframes | `/wireframes` | Phase 0 lo-fi (unchanged) |

## Architecture

- **Next.js 16** App Router — UI + Route Handlers + Server Actions  
- **Prisma 5** — SQLite locally; **PostgreSQL** in production (`DATABASE_URL`)  
- **Auth** — JWT session cookie, edge **middleware** RBAC, magic links for customers  
- **Stripe** — optional Billing + webhooks + Customer Portal  
- **Audit** — admin mutations logged to `AuditLog`  

## Environment

Copy [`.env.example`](../.env.example). Minimum: `DATABASE_URL`, `AUTH_SECRET`, `NEXT_PUBLIC_APP_URL`.  
Add `STRIPE_*` and `RESEND_API_KEY` for live payments and email.

## Commands

```bash
npm install
npx prisma db push && npm run db:seed
npm run dev -- -p 4321
npm run build
```

Staff logins: set `SEED_STAFF_PASSWORD`, run `npm run db:staff`. Admin email: `admin@essentra.ca`.

## Roadmap (outside this monolith)

NestJS API split, Expo apps, delivery-zone waitlists, Stripe Terminal offline, versioned supplier costs, counsel-approved legal copy.
