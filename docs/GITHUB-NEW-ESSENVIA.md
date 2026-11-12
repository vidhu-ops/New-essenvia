# GitHub + Vercel — `vidhu-ops/New-essenvia`

Canonical GitHub remote for production deploys (Vercel).

| Item | Value |
|------|--------|
| GitHub | [https://github.com/vidhu-ops/New-essenvia](https://github.com/vidhu-ops/New-essenvia) |
| Cursor Origin (dev) | `vidhu-gupta/essentra-box` |
| Framework | Next.js 16 (`vercel.json` present) |
| Database on Vercel | Postgres via `cursor-app.json` or set `DATABASE_URL` |

## One-time: replace GitHub repo with this codebase

From a machine with GitHub access (`gh auth login`):

```bash
git clone https://origin.cursor.com/git/vidhu-gupta/essentra-box.git essentra-platform
cd essentra-platform
git remote add github https://github.com/vidhu-ops/New-essenvia.git
git push github main --force
```

Or clone GitHub and reset:

```bash
git clone https://github.com/vidhu-ops/New-essenvia.git
cd New-essenvia
git remote add upstream https://origin.cursor.com/git/vidhu-gupta/essentra-box.git
git fetch upstream main
git reset --hard upstream/main
git push origin main --force
```

## Vercel environment variables

Set in the Vercel project linked to **New-essenvia**:

| Variable | Required |
|----------|----------|
| `AUTH_SECRET` | Yes (long random string) |
| `DATABASE_URL` | Yes (Postgres; Vercel Postgres or Neon) |
| `NEXT_PUBLIC_APP_URL` | Yes (your `*.vercel.app` or custom domain) |
| `STRIPE_*` | Optional until live payments |
| `RESEND_API_KEY` | Optional (magic-link email) |
| `SEED_STAFF_PASSWORD` | Only when running staff seed in prod |

**Do not** run `npm run db:seed` in production without setting `SEED_STAFF_PASSWORD`; staff accounts are not created from a public demo password.

## Build settings (Vercel)

- **Build command:** `npm run build`
- **Install command:** `npm install`
- **Output:** default for Next.js

After each push to `main`, Vercel redeploys automatically.
