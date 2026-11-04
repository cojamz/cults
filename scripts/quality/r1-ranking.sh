#!/usr/bin/env bash
# Rebuild the published ranking from a judging round's files: bash scripts/quality/r1-ranking.sh [round dir, default r1]
set -e
R=${1:-r1}; D=design/eval/quality-loop/$R
node scripts/quality/ranking.mjs "$D" --board design/eval/quality-loop/r1/board-with-plants.txt \
  --plants "Night Shift,Envy,Clerk" --good Scavenger --split /mnt/project-files/quality/evals/calibration-split.md \
  --protected "Echo,Recluse,Party Crasher,Doppelganger,Impressionist,Stunt Double,Crunch Time,Potluck,Makeover,Cashier,Hot Streak,Con Men,Agents" \
  --label "$R" --out "$D/ranking.md" --json "$D/ranking.json"
cp "$D/ranking.md" /mnt/project-files/quality/ranking.md; cp "$D/ranking.json" /mnt/project-files/quality/ranking.json
