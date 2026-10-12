# Essentra repository — `vidhu-gupta/essentra-box`

## Browse on the web

**Browse URL:** [https://cursor.com/codebase/vidhu-gupta/essentra-box](https://cursor.com/codebase/vidhu-gupta/essentra-box)

**Visibility:** Private. You can change visibility in **Settings** on that page.

Git remote (HTTPS):

`https://origin.cursor.com/vidhu-gupta/essentra-box.git`

---

## Clone on your machine

Install the [Origin CLI](https://cursor.com/docs/origin/cli), sign in, and clone:

```bash
# Install the Origin CLI
curl -fsSL https://downloads.cursor.com/origin/install.sh | sh

# Sign in (also sets up git credentials)
origin auth login

# Clone the repository
origin repo clone vidhu-gupta/essentra-box
```

If `origin` is not found after install, persist `~/.local/bin` on PATH:

```bash
echo 'export PATH="$HOME/.local/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
```

Then run `origin auth login` and `origin repo clone vidhu-gupta/essentra-box` again.

---

## Link this project to a repository (Create repo)

Your code is pushed on the agent branch. To **create or attach** the GitHub/Origin repo from Cursor:

1. Open this agent run in Cursor.
2. Click **Create repository** (or **Link repository**) in the chat header / project pill.
3. Choose name **`essentra-box`** (or **`essentra-platform`**) under **`vidhu-gupta`**.
4. After linking, pull on your machine:

```bash
origin auth login
origin repo clone vidhu-gupta/essentra-box
cd essentra-box
npm install && npx prisma db push && npm run db:seed
npm run dev -- -p 4321
```

If **`essentra-box`** already exists but this agent cannot push (403), use **Create repository** to sync from the agent, or add your user as collaborator and push from local after clone of the agent export.

**Browse (when linked):** [https://cursor.com/codebase/vidhu-gupta/essentra-box](https://cursor.com/codebase/vidhu-gupta/essentra-box)

---

## What’s in the repo

- **Platform V1:** `/`, `/build/*`, `/login`, `/admin`, `/rep`, `/warehouse` — see `docs/PLATFORM-V1.md`
- Wireframes: `/wireframes`
- Essenvia contract PDF/HTML: `/docs`, `/design-pack`
- CAD proposal archive: `docs/Essentra-Platform-Design-Proposal-CAD.md`
- Vercel deploy: `docs/DEPLOY-VERCEL.md`

---

## Deploy to Vercel

Import **`vidhu-gupta/essentra-box`** at [vercel.com/new](https://vercel.com/new) (or connect GitHub if the repo is mirrored there). See `docs/DEPLOY-VERCEL.md`.
