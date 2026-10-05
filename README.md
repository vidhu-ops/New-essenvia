# Essentra — Design & Wireframes (Phase 0)

Subscription household essentials platform for **Canada**: design proposal, CAD pricing, service agreement template, brand preview, and interactive wireframes.

## Quick start

```bash
npm install
npm run dev -- -p 4321
```

- **Brand preview:** [http://127.0.0.1:4321](http://127.0.0.1:4321)
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

## GitHub repository

This New Project lives on **Cursor temporary git** until you attach GitHub. You will **not** see a repo on github.com until then.

→ **[docs/GITHUB-REPO-SETUP.md](docs/GITHUB-REPO-SETUP.md)** — click **Create repo** in this agent chat, or create `essentra-design` on GitHub manually.

## Deploy to Vercel (demo domain)

See **[docs/DEPLOY-VERCEL.md](docs/DEPLOY-VERCEL.md)** for import steps, project naming (`essentra-wireframes.vercel.app`), and stakeholder URL map.

After GitHub exists: **Import** the repo in [Vercel New Project](https://vercel.com/new). No env vars needed for wireframes.

## Next step

Approve Phase 0 + Growth Foundation per the proposal, execute the Master Service Agreement, then begin fixed-price build phases.
