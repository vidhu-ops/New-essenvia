# Preview admin, warehouse, delivery, and rep on Vercel

All consoles live in **one Next.js app** (not separate repos). After deploy, open:

| Surface | URL |
|---------|-----|
| **Console map (start here)** | `/consoles` |
| Admin | `/admin` |
| Warehouse | `/warehouse` |
| Delivery | `/delivery` |
| Sales rep | `/rep` |
| Customer account | `/account` |
| Public site | `/` |

## 1. Vercel environment variables

Set these for **Production** and **Preview** (so preview deployments can sign in):

| Variable | Required | Purpose |
|----------|----------|---------|
| `AUTH_SECRET` | Yes | Session cookies (min 32 chars) |
| `DATABASE_URL` | Yes for consoles | **Postgres** (Neon, Vercel Postgres, Supabase). SQLite files do not work on Vercel. |
| `NEXT_PUBLIC_APP_URL` | Yes | Your deployment URL (e.g. `https://xxx.vercel.app`) |
| `RUN_DB_SEED` | Yes (first deploy) | Set `1` to seed catalog + packages when the DB is empty |
| `SEED_STAFF_PASSWORD` | Yes for staff login | Min 12 chars — shared password for all staff demo accounts |

Optional: `RESEND_API_KEY` for magic-link email; Stripe vars when testing payments.

## 2. Build

`vercel.json` runs `npm run vercel-build`, which:

1. Sets Prisma to **postgresql** when `DATABASE_URL` is Postgres  
2. Runs `prisma db push`  
3. Seeds catalog if `RUN_DB_SEED=1` and SKUs are empty  
4. Upserts staff users if `SEED_STAFF_PASSWORD` is set  
5. Runs `next build`

## 3. Sign in

1. Open **`/consoles`** on your deployment.  
2. Use **Sign in preset** for a role, or go to **`/login **.  
3. Staff password = value of **`SEED_STAFF_PASSWORD`** (not stored in the repo).

| Email | Lands on |
|-------|----------|
| `admin@essentra.ca` | `/admin` |
| `warehouse@essentra.ca` | `/warehouse` |
| `delivery@essentra.ca` | `/delivery` |
| `rep@essentra.ca` | `/rep` |

Customers: complete **Build my box** checkout or use **magic link** on `/login`.

## 4. Health check

`GET /api/health` returns `{ ok: true }` when the database is reachable.

## 5. Local parity

```bash
cp .env.example .env
# Set DATABASE_URL, AUTH_SECRET, SEED_STAFF_PASSWORD, RUN_DB_SEED=1
npm install && npx prisma db push && npm run db:seed && npm run db:staff
npm run dev -- -p 4321
```

Open [http://127.0.0.1:4321/consoles](http://127.0.0.1:4321/consoles).