#!/usr/bin/env bash
# Run the full browser verdict after a major update (Cory, Nov 5: only "after major updates in the project").
# Writes the live version into play/MAJOR on main, which starts .github/workflows/v4-verdict.yml on the branch tip.
# Usage: bash scripts/v4-major-verdict.sh "<why, e.g. v1.0 release>"
set -euo pipefail
cd "$(git rev-parse --show-toplevel)"
WHY=${1:?say why this is a major update}
git fetch -q origin main
WT=$(mktemp -d)/main
git worktree add -q --detach "$WT" origin/main
VER=$(node -e "console.log(require('$WT/play/build.json').version)")
echo "$VER $(date -u +%FT%TZ) $WHY" > "$WT/play/MAJOR"
git -C "$WT" add play/MAJOR
git -C "$WT" commit -qm "Major update verdict: $VER ($WHY)"
for i in 1 2 3 4; do git -C "$WT" push -q origin HEAD:main && break; sleep $((2**i)); git -C "$WT" pull -q --rebase origin main; done
git worktree remove --force "$WT"
echo "Verdict started for $VER. Read it in about an hour: node scripts/v4-verdict.mjs"
