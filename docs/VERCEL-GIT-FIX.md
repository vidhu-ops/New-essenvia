# Fix Vercel when GitHub is empty or deploy says `vercel deploy`

## What you are seeing

| Signal | Meaning |
|--------|---------|
| Vercel **Source → `vercel deploy`** | One-off CLI upload, **not** connected to Git |
| Deploy by **anonymousdeploys** | Temporary deploy, not tied to your repo |
| GitHub **New-essenvia** empty | Nothing for Vercel to build from `main` (fixed once `main` has commits) |
| Live site copy (“mental load” / **essenvia+**) | Old or different build than current **Essentra** in Cursor Origin |

Current app code (hero: *“All your home and cleaning needs, delivered on schedule”*, 3-step build) lives on **Cursor Origin** `vidhu-gupta/essentra-box` only until you push to GitHub.

## Step 1 — Put code on GitHub (required)

**Option A — script (recommended)**

On your Mac/PC (with GitHub login):

```bash
# After: origin auth login   OR   gh auth login
curl -fsSL https://raw.githubusercontent.com/vidhu-ops/New-essenvia/main/scripts/push-to-github.sh 2>/dev/null || true
# Or from a clone of essentra-box:
bash scripts/push-to-github.sh
```

Manual equivalent:

```bash
git clone https://origin.cursor.com/git/vidhu-gupta/essentra-box.git
cd essentra-box
git push https://github.com/vidhu-ops/New-essenvia.git main --force
```

**Option B — GitHub website (if repo is empty)**

1. Open [github.com/vidhu-ops/New-essenvia](https://github.com/vidhu-ops/New-essenvia).
2. **Import repository** (Settings → Import) is not needed if you use Option A.

Verify: GitHub `main` shows `app/`, `package.json`, `README.md` (not an empty repo).

## Step 2 — Connect Vercel to Git (not CLI)

1. Vercel → your project (e.g. essenvia+ / racing-hazel).
2. **Settings → Git** → **Connect Git Repository**.
3. Choose **vidhu-ops/New-essenvia**, branch **main**.
4. **Redeploy** (Deployments → … → Redeploy). Source should show a **commit message**, not `vercel deploy`.

## Step 3 — Environment variables

Project → **Settings → Environment Variables** (Production):

| Name | Notes |
|------|--------|
| `AUTH_SECRET` | Long random string |
| `DATABASE_URL` | Postgres URL (Vercel Postgres / Neon) |
| `NEXT_PUBLIC_APP_URL` | `https://your-project.vercel.app` |

Optional later: Stripe, Resend. See [GITHUB-NEW-ESSENVIA.md](./GITHUB-NEW-ESSENVIA.md).

## Step 4 — Build

Default Next.js: **Build** `npm run build`, **Install** `npm install`, root `./`.

Postgres: run migrations/`prisma db push` in build or use a hosted DB with schema already applied.

## Why the agent could not push GitHub

Cloud Agents push **Origin** only. GitHub has no credentials on the agent VM. After you run Step 1 once, Vercel stays in sync on every `git push`.

## Grant Cursor GitHub (optional)

So agents can read **New-essenvia** in chat: [GitHub App install](https://github.com/apps/cursor/installations/new) → allow **vidhu-ops/New-essenvia**.
