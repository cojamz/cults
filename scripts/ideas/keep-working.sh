#!/usr/bin/env bash
# Keep playing a trial's games until every block is done: restarts `trial.mjs work` when it crashes or exits early
# (blocks claim themselves and are restart-safe, so a restart only re-plays an unfinished block). Any box, any thread.
#   bash scripts/ideas/keep-working.sh <trial> [jobs]
set -u
T="$1"; J="${2:-4}"; cd "$(dirname "$0")/../.."
for try in $(seq 1 20); do
  node scripts/trial/trial.mjs work "$T" --jobs="$J" && st=0 || st=$?
  left=$(node scripts/trial/trial.mjs status "$T" 2>/dev/null | grep -oE '[0-9]+/[0-9]+ blocks done' | awk -F'[ /]' '{ if ($1<$2) n++ } END { print n+0 }')
  [ "$left" = "0" ] && { echo "$T: all blocks done"; exit 0; }
  echo "$T: work exited ($st) with blocks left; restart $try in 30s"; sleep 30
done
echo "$T: gave up after 20 restarts"; exit 1
