# Essentra — Website & platform (V1)

Subscription household essentials for **Canada**: public site, **Build My Essentra Box**, package engine, checkout, admin, sales rep, and warehouse — one Next.js app + SQLite (see **`docs/PLATFORM-V1.md`**). Design proposals and wireframes remain in `docs/` and `/wireframes`.

## Quick start

```bash
npm install
npx prisma db push && npm run db:seed
npm run dev -- -p 4321
```

- **Brand preview:** [http://127.0.0.1:4321](http://127.0.0.1:4321)
- **Client design pack (PDF):** [http://127.0.0.1:4321/design-pack](http://127.0.0.1:4321/design-pack)
- **Wireframes hub:** [http://127.0.0.1:4321/wireframes](http://127.0.0.1:4321/wireframes)

## Documents (review & signature)

| File | Description |
|------|-------------|
| `docs/Essentra-Platform-Design-Proposal-CAD.md` | Full architecture, journeys, Canadian competitors, CAD fees, FX table |
| `docs/Essentra-Master-Service-Agreement-CAD.md` | Contract + SOW (Schedule A) + optional growth (Schedule B) |

**FX:** USD amounts from the October 1, 2026 proposal are converted at **1 USD = 1.4246 CAD** (Bank of Canada, October 2026).

**Subscription list prices (CAD, admin-configurable):**

- Essentra Essential — **$120.99/mo** + tax (from US$84.99)
- Essentra Family — **$134.99/mo** + tax (from US$94.99)
- Essentra Plus — **$149.99/mo** + tax (from US$104.99)

## What this repo is

This is the **approval package** before full platform development (NestJS API, PostgreSQL, Stripe, admin, warehouse, mobile app). Wireframes are lo-fi; the homepage demonstrates look & feel direction.

## Repository

**Create / link repo:** In this Cursor agent, use **Create repository** and name it `essentra-box` (see **[docs/GITHUB-REPO-SETUP.md](docs/GITHUB-REPO-SETUP.md)**).

**Browse (after link):** [cursor.com/codebase/vidhu-gupta/essentra-box](https://cursor.com/codebase/vidhu-gupta/essentra-box)

**Clone:**

```bash
origin auth login
origin repo clone vidhu-gupta/essentra-box
```

## Deploy to Vercel (demo domain)

See **[docs/DEPLOY-VERCEL.md](docs/DEPLOY-VERCEL.md)** for import steps, project naming (`essentra-wireframes.vercel.app`), and stakeholder URL map.

After GitHub exists: **Import** the repo in [Vercel New Project](https://vercel.com/new). No env vars needed for wireframes.

## Next step

Approve Phase 0 + Growth Foundation per the proposal, execute the Master Service Agreement, then begin fixed-price build phases.
