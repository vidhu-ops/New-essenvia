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

## What’s in the repo

- Interactive wireframes: `npm install && npm run dev -- -p 4321` → `/wireframes`
- CAD proposal: `docs/Essentra-Platform-Design-Proposal-CAD.md`
- Contract template: `docs/Essentra-Master-Service-Agreement-CAD.md`
- Vercel deploy: `docs/DEPLOY-VERCEL.md`

---

## Deploy to Vercel

Import **`vidhu-gupta/essentra-box`** at [vercel.com/new](https://vercel.com/new) (or connect GitHub if the repo is mirrored there). See `docs/DEPLOY-VERCEL.md`.
