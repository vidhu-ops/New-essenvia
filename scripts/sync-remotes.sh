#!/usr/bin/env bash
# Push main to Cursor Origin (always) and GitHub (when credentials exist).
set -euo pipefail

GITHUB_REPO="${GITHUB_REPO:-https://github.com/vidhu-ops/New-essenvia.git}"
BRANCH="${BRANCH:-main}"

echo "→ Pushing ${BRANCH} to Origin…"
git push origin "${BRANCH}"

git remote get-url github &>/dev/null || git remote add github "$GITHUB_REPO"

if [[ -n "${GH_TOKEN:-}" ]]; then
  echo "→ Pushing ${BRANCH} to GitHub (GH_TOKEN)…"
  git -c credential.helper= push \
    "https://x-access-token:${GH_TOKEN}@github.com/vidhu-ops/New-essenvia.git" \
    "${BRANCH}"
elif gh auth status &>/dev/null; then
  echo "→ Pushing ${BRANCH} to GitHub (gh)…"
  git push github "${BRANCH}"
else
  echo "⚠ GitHub push skipped: set GH_TOKEN in this environment or run \`gh auth login\`."
  echo "  One-off from your machine: bash scripts/push-to-github.sh"
  exit 0
fi

echo "✓ Origin and GitHub are aligned on $(git rev-parse HEAD)."
