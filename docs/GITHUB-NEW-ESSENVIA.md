# GitHub + Vercel â€” `vidhu-ops/New-essenvia`

Canonical GitHub remote for production deploys (Vercel).

If Vercel still shows **Source: `vercel deploy`** (not a commit), follow **[VERCEL-GIT-FIX.md](./VERCEL-GIT-FIX.md)** Step 2.

| Item | Value |
|------|--------|
| GitHub | [https://github.com/vidhu-ops/New-essenvia](https://github.com/vidhu-ops/New-essenvia) |
| Cursor Origin (dev) | `vidhu-gupta/essentra-box` |
| Framework | Next.js 16 (`vercel.json` present) |
| Database on Vercel | Postgres via `cursor-app.json` or set `DATABASE_URL` |

## Keep GitHub in sync (after every agent push)

Cloud Agents push **Origin** automatically. GitHub updates when you either:

1. **Recommended:** Add a personal **`GH_TOKEN`** (repo write on `New-essenvia`) to your [Cloud Agent environment secrets](https://cursor.com/docs/cloud-agent), then agents can run `bash scripts/sync-remotes.sh`.
2. **Manual:** On your machine with `gh auth login`: `bash scripts/push-to-github.sh` or `git push github main`.

Verify both remotes match:

```bash
git fetch origin github
git rev-parse origin/main github/main   # SHAs should match
```

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
| `AUTH_SECRET` | **Yes** â€” min 32 characters (build/runtime; omitting fails middleware in production) |
| `DATABASE_URL` | **Yes for consoles** â€” Postgres (Neon / Vercel Postgres]). Homepage works without DHì…‘µ¥¸½İ…É•¡½ÕÍ”½É•À¹••A½ÍÑÉ•Ì¸ğ)ğ9aQ}AU	1%}AA}UI1€ğe•Ì€¡å½ÕÈ€¨¹Ù•É•°¹…ÁÁ€½ÈÕÍÑ½´‘½µ…¥¸¤ğ)ğIU9}	}M€ğM•Ğ€Å€½¸™¥ÉÍĞ‘•Á±½äÑ¼Í••…Ñ…±½œğ)ğM}MQ}AMM]=I€ğ5¥¸€ÄÈ¡…ÉÌƒŠPÍ¡…É•ÍÑ…™˜Á…ÍÍİ½É™½ÈÁÉ•Ù¥•Ü±½¥¹Ìğ)ğMQI%A|©€ğ=ÁÑ¥½¹…°Õ¹Ñ¥°±¥Ù”Á…åµ•¹ÑÌğ)ğIM9}A%}-e€ğ=ÁÑ¥½¹…°€¡µ…¥Œµ±¥¹¬•µ…¥°¤ğ)ğM}MQ}AMM]=I€ğ=¹±äİ¡•¸ÉÕ¹¹¥¹œÍÑ…™˜Í••¥¸ÁÉ½ğ((¨©¼¹½Ğ¨¨ÉÕ¸¹Á´ÉÕ¸‘ˆéÍ••‘€¥¸ÁÉ½‘ÕÑ¥½¸İ¥Ñ¡½ÕĞÍ•ÑÑ¥¹œM}MQ}AMM]=I€ìÍÑ…™˜…½Õ¹ÑÌ…É”¹½ĞÉ•…Ñ•™É½´„ÁÕ‰±¥Œ‘•µ¼Á…ÍÍİ½É¸((ŒŒ	Õ¥±Í•ÑÑ¥¹Ì€¡Y•É•°¤((´€¨©	Õ¥±½µµ…¹è¨¨¹Á´ÉÕ¸‰Õ¥±‘€(´€¨©%¹ÍÑ…±°½µµ…¹è¨¨¹Á´¥¹ÍÑ…±±€(´€¨©=ÕÑÁÕĞè¨¨‘•™…Õ±Ğ™½È9•áĞ¹©Ì()™Ñ•È•… ÁÕÍ Ñ¼µ…¥¹€°Y•É•°É•‘•Á±½åÌ…ÕÑ½µ…Ñ¥…±±ä¸(