#!/usr/bin/env bash
# Push essentra-box (Cursor Origin) → vidhu-ops/New-essenvia on GitHub.
# Requires: git, GitHub auth (gh auth login or SSH).
set -euo pipefail

GITHUB_REPO="${GITHUB_REPO:-https://github.com/vidhu-ops/New-essenvia.git}"
ORIGIN_REPO="${ORIGIN_REPO:-https://origin.cursor.com/git/vidhu-gupta/essentra-box.git}"

WORKDIR="${1:-}"
if [[ -z "$WORKDIR" ]]; then
  WORKDIR=$(mktemp -d)
  trap 'rm -rf "$WORKDIR"' EXIT
  echo "Cloning Origin → $WORKDIR"
  git clone --branch main "$ORIGIN_REPO" "$WORKDIR"
fi

cd "$WORKDIR"
git remote remove github 2>/dev/null || true
git remote add github "$GITHUB_REPO"
echo "Force-pushing main to GitHub (replaces empty/old content)…"
git push github main --force
echo "Done. Open $GITHUB_REPO and confirm files appear on main."
