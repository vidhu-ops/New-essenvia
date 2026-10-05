# Why you do not see a GitHub repo yet

This project was started from **Cursor New Project**. Until you attach GitHub, code is stored on Cursor’s temporary git remote (`origin.cursor.com`), **not** on github.com. That is expected—you will not see `essentra-design` in GitHub until you complete one of the steps below.

All work is committed on branch **`main`** (wireframes, docs, Vercel config).

---

## Option A — Create repo in Cursor (recommended)

1. Open this agent run: [Essentra design wireframes](https://cursor.com/agents/bc-cda6d565-fd14-4bf6-8219-6ff43512ffea)
2. In the chat header / project bar, click **Create repo** (or **Connect repository**).
3. Choose your GitHub account/org and name the repo (e.g. **`essentra-design`**).
4. Confirm—Cursor copies `main` to GitHub.
5. Refresh [github.com/vidhu-gupta?tab=repositories](https://github.com/vidhu-gupta?tab=repositories) (or your org).

Then deploy: [DEPLOY-VERCEL.md](./DEPLOY-VERCEL.md) or the **Publish** button in Cursor.

---

## Option B — Create the repo on GitHub yourself

1. Go to [https://github.com/new](https://github.com/new)
2. Repository name: **`essentra-design`**
3. **Private** or Public (your choice)
4. Do **not** add README, .gitignore, or license (this project already has them)
5. Create repository

On your Mac/PC (with SSH or HTTPS access to GitHub):

```bash
# Clone from Cursor’s remote only works inside the agent VM.
# Easiest: download a zip from the agent, or after Option A use GitHub clone.

# If you already have the folder locally with git history:
cd essentra-design
git remote add github git@github.com:vidhu-gupta/essentra-design.git
git push -u github main
```

If you start from an empty GitHub repo and no local clone, use GitHub’s “push an existing repository” commands with the URL they show after create.

---

## Option C — Download from this agent

If Create repo is unavailable:

1. In Cursor, open the **Files** / workspace view for this agent.
2. Download or sync the project folder.
3. Push to a new GitHub repo using Option B commands.

---

## After GitHub exists

| Step | Action |
|------|--------|
| Vercel | [vercel.com/new](https://vercel.com/new) → Import **`essentra-design`** |
| Demo URL | Rename Vercel project to `essentra-wireframes` → `https://essentra-wireframes.vercel.app` |
| Wireframes | `/wireframes` on that domain |

---

## Verify

You should see on GitHub:

- `docs/Essentra-Platform-Design-Proposal-CAD.md`
- `docs/Essentra-Master-Service-Agreement-CAD.md`
- `app/wireframes/` (all screens)
- `vercel.json`, `README.md`

If anything is missing after Create repo, tell the agent to **push to main** again.
