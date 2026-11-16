# Deploy Essentra (full platform) on Vercel

This repository is **not** wireframes-only. It is the **production Next.js app** from the October 2026 brief: marketing site, Build My Box, checkout, customer account, **admin**, **warehouse**, **delivery**, and **sales rep** consoles.

Wireframes remain at `/wireframes` for design reference; stakeholders should use `/consoles` to open every live module on one deployment.

## 1. Git repository (required)

| Use | Repository |
|-----|------------|
| **Vercel import** | [github.com/vidhu-ops/New-essenvia](https://github.com/vidhu-ops/New-essenvia) — branch `main` |
| **Cursor Origin** | `vidhu-gupta/essentra-box` — sync to GitHub with `npm run git:sync` when you work from Cursor |

Only push to **one** remote that Vercel watches. After every Origin push, mirror to GitHub so Vercel builds the latest code.

## 2. Vercel project settings

| Setting | Value |
|---------|--------|
| Framework | Next.js |
| Root Directory | `./` |
| Build Command | `npm run vercel-build` (from `vercel.json` — do not override with plain `npm run build` unless you run DB setup separately) |
| Install Command | `npm install --include=dev  (from `vercel.json`) |

## 3. Environment variables (Production + Preview)

Without Postgres and `AUTH_SECRET`, the site may **build** but staff logins and admin consoles **will not work** (you only get static marketing pages).

| Variable | Required | Purpose |
|----------|----------|---------|
| `AUTH_SECRET` | Yes | Session JWT signing (32+ chars) |
| `DATABASE_URL` | Yes for consoles | **Postgres only** (Neon, Vercel Postgres, etc.) — not `file:./dev.db` |
| `NEXT_PUBLIC_APP_URL` | Yes | `https://YOUR-PROJECT.vercel.app` |
| `RUN_DB_SEED` | First deploy | `1` to seed catalog when SKU table is empty |
| `SEED_STAFF_PASSWORD` | For staff preview | 12+ chars — creates admin/warehouse/delivery/rep users on deploy |

Optional: `STRIPE_*`, `RESEND_API_KEY` — see [`.env.example`](../.env.example).

After setting env vars, **Redeploy** so `vercel-build` can run `prisma db push`, seed, and staff bootstrap.

## 4. Verify after deploy

1. Open `/api/health` — expect `database.ok: true` and SKU count &gt; 0 when seed ran.
2. Open **`/consoles`** — links to admin, warehouse, delivery, rep, account, build.
3. Sign in: `admin@essentra.ca` + your `SEED_STAFF_PASSWORD`.

Details: [PREVIEW-CONSOLES.md](./PREVIEW-CONSOLES.md).

## 5. Local full stack (what you had in development)

```bash
cp .env.example .env
# Edit SEED_STAFF_PASSWORD and AUTH_SECRET if you like
npm install
npx prisma db push && npm run db:seed
npm run dev -- -p 4321
```

- App: http://127.0.0.1:4321  
- Console map: http://127.0.0.1:4321/consoles  
- Wireframes (Phase 0 UI): http://127.0.0.1:4321/wireframes  

SQLite (`file:./dev.db`) is **local only**.

## 6. Troubleshooting

| Symptom | Cause |
|---------|--------|
| Build fails with `tsx: not found` | Deploy commit before `f6f04c2`; pull latest `main` |
| Build OK but `/admin` redirects to login forever | Missing `AUTH_SECRET` or staff not seeded — set `SEED_STAFF_PASSWORD` + redeploy |
| `/api/health` shows no DB | No Postgres `DATABASE_URL`, or SQLite URL on Vercel |
| Site looks like “only marketing” | Database not connected — not a different product; same app without data |
| Wrong code on Vercel | Project connected to a different repo/branch than `vidhu-ops/New-essenvia` `main` |

## 7. Cursor hosted preview (alternative to Vercel)

This repo includes `cursor-app.json` with `"database": "postgres"` for Cursor **Publish app** — hosted preview with a managed database and sign-in, without wiring Vercel yourself. Use when you want the full consoles working quickly from the agent.

Platform map: [PLATFORM-V1.md](./PLATFORM-V1.md) · Requirements: [PRODUCTION-SPEC.md](./PRODUCTION-SPEC.md).