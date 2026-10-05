# Deploy Essentra wireframes to Vercel

This project is a **static-friendly Next.js 16** app (wireframes + brand preview + docs paths). No database or secrets are required for the demo.

## 1. Put the code in a Git repository

### Option A — Cursor “Create repo” (recommended)

1. In this agent chat, use **Create repo** to attach a permanent GitHub repository to this project.
2. After creation, ensure `main` contains this codebase (already pushed from the agent if you started from New Project).

### Option B — New GitHub repo manually

```bash
git clone <your-origin-or-github-url> essentra-design
cd essentra-design
# If you only have files locally:
git init && git add -A && git commit -m "Essentra wireframes Phase 0"
git branch -M main
git remote add origin git@github.com:YOUR_ORG/essentra-design.git
git push -u origin main
```

Suggested repo name: **`essentra-design`** or **`essentra-wireframes`**.

## 2. Import into Vercel

1. Go to [https://vercel.com/new](https://vercel.com/new) and sign in with GitHub.
2. **Import** the repository you created.
3. Vercel auto-detects **Next.js**. Use these settings:

| Setting | Value |
|---------|--------|
| Framework Preset | Next.js |
| Root Directory | `./` |
| Build Command | `npm run build` (default) |
| Output Directory | (default) |
| Install Command | `npm install` (default) |

4. **Environment variables:** none required for wireframes demo.
5. Click **Deploy**.

First deploy URL will look like: `https://essentra-design-xxxxx.vercel.app`

## 3. Custom “dummy” domain on Vercel

For a stable demo link without buying a domain:

1. Vercel project → **Settings** → **Domains**
2. Use the default `*.vercel.app` subdomain, or add a subdomain you control (e.g. `wireframes.essentra.ca`) with the DNS records Vercel shows.

For a **free preview subdomain** only, rename the project under **Settings → General → Project Name** to something like `essentra-wireframes` so the URL becomes:

`https://essentra-wireframes.vercel.app`

## 4. What to show stakeholders

| URL path | Content |
|----------|---------|
| `/` | Brand look & feel (homepage) |
| `/wireframes` | Wireframe hub |
| `/wireframes/build/step-1` … `step-5` | Build My Essentra Box flow |
| `/wireframes/build/result` | Package + **CAD** price |
| `/wireframes/checkout` | Checkout wireframe |
| `/wireframes/account` | Customer dashboard |
| `/wireframes/sales` | Sales rep tablet |
| `/wireframes/admin` | Admin dashboard |

Proposal PDF source: export `docs/Essentra-Platform-Design-Proposal-CAD.md` and `docs/Essentra-Master-Service-Agreement-CAD.md` from the repo.

## 5. Local preview

```bash
npm install
npm run dev -- -p 4321
```

Open [http://127.0.0.1:4321/wireframes](http://127.0.0.1:4321/wireframes)

## 6. Troubleshooting

- **Build fails on Vercel:** run `npm run build` locally; fix any TypeScript errors, then push.
- **404 on routes:** ensure you did not set a wrong Root Directory in Vercel.
- **Full platform later:** this repo is Phase 0 UI only; production Essentra will add NestJS, Postgres, and Stripe on separate services or a monorepo—wireframes deploy stays valid as a design reference.
