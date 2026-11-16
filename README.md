# Essentra — production website & web app

Canadian subscription household essentials: **marketing site**, **Build My Box**, **package engine**, **Stripe-ready checkout**, **customer account**, **admin console**, **sales rep** and **warehouse** tools — one deployable Next.js application.

## Quick start

```bash
cp .env.example .env
npm install
npx prisma db push && npm run db:seed
npm run dev -- -p 4321
```

- **App:** [http://127.0.0.1:4321](http://127.0.0.1:4321)
- **All consoles (preview map):** [http://127.0.0.1:4321/consoles](http://127.0.0.1:4321/consoles) — see [docs/PREVIEW-CONSOLES.md](docs/PREVIEW-CONSOLES.md) for Vercel
- **Requirements (detailed):** [docs/PRODUCTION-SPEC.md](docs/PRODUCTION-SPEC.md)
- **Platform map:** [docs/PLATFORM-V1.md](docs/PLATFORM-V1.md)
- **Design pack / contracts:** [http:///127.0.0.1:4321/docs](http://127.0.0.1:4321/docs)

## Production checklist

| Area | Status in repo |
|-----|-------------|
| Marketing + SEO metadata | ✓ |
| Build flow + package engine | ✓ |
| Checkout (demo + Stripe) | ✓ with `STRIPE_*` env |
| Customer account (skip/pause/cancel, address) | ✓ |
| Magic-link sign-in | ✓ (email via Resend or console in dev) |
| Middleware RBAC | ✓ |
| Admin edit catalog & packages | ✓ |
| Orders + warehouse status | ✓ |
| Legal placeholders + checkout consent | ✓ |
| Health check `/api/health` | ✓ |
| PostgreSQL | Set `DATABASE_URL` (Prisma) |
| NextJS / Expo / Terminal | Roadmap — see PRODUCTION-SPEC |

## Staff logins

Set `SEED_STAFF_PASSWORD` in `.env`, then run `npm run db:staff` (or full `db:seed`).

| Email | Role |
|-------|------|
| `admin@essentra.ca` | Admin |
| `rep@essentra.ca` | Sales rep |
| `warehouse@essentra.ca` | Warehouse |
| `delivery@essentra.ca` | Delivery |

Password is whatever you set in `SEED_STAFF_PASSWORD` (configured for admin in your environment).

New customers: complete checkout → magic link (shown on confirmation page in dev).

## Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev -- -p 4321` | Development server |
| `npm run build` | Production build |
| `npm run db:seed` | Reset demo catalog & staff users |
| `npm run design-pack:pdf` | Client design pack PDF |
| `npm run essenvia:pdf` | Essenvia contract PDF |

## Deploy

See [docs/DEPLOY-VERCEL.md](docs/DEPLOY-VERCEL.md). Set `AUTH_SECRET`, `DATABASE_URL` (Postgres recommended), `NEXT_PUBLIC_APP_URL`, and Stripe keys for live subscriptions.

## Repository

| Remote | URL |
|--------|-----|
| **GitHub (Vercel)** | [vidhu-ops/New-essenvia](https://github.com/vidhu-ops/New-essenvia) |
| **Cursor Origin** | `vidhu-gupta/essentra-box` |

Push Origin → GitHub: [docs/GITHUB-NEW-ESSENVIA.md](docs/GITHUB-NEW-ESSENVIA.md) · `npm run git:sync`
