# Essentra Platform V1 (this repo)

Josh’s October 2026 brief is implemented as a **working web application** on one stack:

| Surface | URL | Notes |
|---------|-----|--------|
| Public website | `/`, `/how-it-works`, `/products`, `/plans`, `/why`, `/faq`, `/about`, `/contact` | Mobile-first brand site |
| Build My Box | `/build/step-1` … `/build/result` | Guided questionnaire → **package engine** |
| Checkout | `/build/checkout` | Creates customer, subscription, order in SQLite |
| Login | `/login` | Admin, rep, warehouse demo users |
| Admin | `/admin`, `/admin/catalog`, `/admin/packages`, `/admin/customers` | Wholesale costs, thresholds, subscribers |
| Sales rep | `/rep` | Compare → customize flow (tablet-oriented) |
| Warehouse | `/warehouse` | Pick list from orders |
| Wireframes | `/wireframes` | Original Phase 0 lo-fi (unchanged) |

## Architecture

- **Next.js 16** (App Router) — marketing + apps + Route Handlers  
- **SQLite + Prisma** — categories, SKUs, packages, subscriptions, orders (seeded, admin-configurable data)  
- **Package engine** — sums wholesale basket cost, maps to Essential / Family / Plus via adjustable thresholds  
- **Stripe** — checkout UI ready; production wires Stripe Billing + Terminal  

## Commands

```bash
npm install
npx prisma db push && npm run db:seed
npm run dev -- -p 4321
```

Demo passwords: `essentra-demo` for `admin@essentra.ca`, `rep@essentra.ca`, `warehouse@essentra.ca`.

## Next production steps

NestJS API extraction, PostgreSQL on AWS ca-central-1, Stripe live, Expo customer app, barcode scanning, legal pages from counsel.
