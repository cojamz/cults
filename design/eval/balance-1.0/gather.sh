#!/usr/bin/env bash
# Pull the runners' results (Hard, Very Hard) and this box's Very Hard shards, dedupe by game, rebuild the reports.
set -euo pipefail
cd /home/user/patrons
D=design/eval/balance-1.0; R=/mnt/project-files/balance-1.0/raw; T=/tmp/claude-0/gather
rm -rf $T; mkdir -p $T $R/hard $R/veryhard
for b in runner-hard-1 project-thread-x1cltz runner-normal-1 runner-vh-a runner-vh-b runner-vh-c; do git fetch -q origin claude/$b 2>/dev/null || true; done
for b in runner-hard-1 project-thread-x1cltz runner-normal-1 runner-vh-a runner-vh-b runner-vh-c; do git archive origin/claude/$b design/eval/balance-1.0/raw 2>/dev/null | tar -x -C $T || true; done
cp $T/design/eval/balance-1.0/raw/hard/* $R/hard/ 2>/dev/null || true
cp $T/design/eval/balance-1.0/raw/veryhard/* $R/veryhard/ 2>/dev/null || true
cp /home/user/vh-run/out/veryhard/* $R/veryhard/ 2>/dev/null || true
for L in hard veryhard; do
  # whole games only, one line per game number (a shard can exist as .part and .jsonl)
  cat $R/$L/*.jsonl $R/$L/*.part 2>/dev/null | node -e '
    const seen=new Set(),out=[];for(const l of require("fs").readFileSync(0,"utf8").split("\n")){if(!l.trim())continue;let r;try{r=JSON.parse(l)}catch{continue}if(seen.has(r.game))continue;seen.add(r.game);out.push(l)}process.stdout.write(out.join("\n")+"\n")' > $R/$L-4p.jsonl
  n=$(wc -l < $R/$L-4p.jsonl)
  node scripts/v4-balance-report.mjs $R/$L-4p.jsonl --json=$D/report-$L-4p.json > $D/report-$L-4p.md
  # choice logs: a .choices file can hold a game twice only if a shard was re-run; the report counts decisions, close enough
  node scripts/v4-choice-report.mjs "$R/$L/*.choices" --md=$D/choices-$L.md --json=$D/choices-$L.json --min=15 >/dev/null
  echo "$L: $n games"
done
