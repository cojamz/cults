#!/usr/bin/env bash
# Play one shard of a balance run on this box (Cory, Nov 6: "cant we just do stuff in parallel?").
# Usage, from any clone of the game repo: bash scripts/balance/shard.sh <commit> <id> <k> <n> [size=deep]
# Plays every n-th game block starting at k at <commit> (run.mjs from the branch tip), copies them to
# /mnt/project-files/balance-runs/<id>/shards/. The box that writes the report then runs run.mjs with the same --id, no --shard.
set -euo pipefail
SHA=$1 ID=$2 K=$3 N=$4 SIZE=${5:-deep}
ROOT=$(git rev-parse --show-toplevel)
git -C "$ROOT" fetch -q origin claude/gifted-newton-3lcy3i
WT="$ROOT/../shard-$ID-$K"
[ -d "$WT" ] || git -C "$ROOT" worktree add -q --detach "$WT" "$SHA"
git -C "$ROOT" show origin/claude/gifted-newton-3lcy3i:scripts/balance/run.mjs > "$WT/scripts/balance/run.mjs"
if [ ! -d "$WT/node_modules" ]; then
  if [ -d "$ROOT/node_modules" ] && git -C "$ROOT" diff --quiet "$SHA" HEAD -- package-lock.json; then ln -s "$ROOT/node_modules" "$WT/node_modules"; else (cd "$WT" && npm ci --silent); fi
fi
cd "$WT"
DECK=10 node scripts/balance/run.mjs --size="$SIZE" --id="$ID" --env='{"CONTESTS":"byColor"}' --workers=4 --shard="$K/$N"
