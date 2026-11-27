#!/bin/bash
# Resumable duel: keeps only whole tables (both seatings) in <out>.jsonl, then plays the tables still missing up to <last>.
# bash scripts/skill/resume-duel.sh <out.jsonl> <last table> <par> '<A json>' ['<B json>']
cd "$(dirname "$0")/../.."
out=$1 last=$2 par=$3 A=$4 B=${5:-'{"level":"veryhard"}'}
touch "$out"
node -e '
const fs=require("fs");const f=process.argv[1];const rows=fs.readFileSync(f,"utf8").trim().split("\n").filter(Boolean).map(JSON.parse);
const by={};for(const r of rows)(by[r.g]||={})[r.side]=r;
const keep=Object.values(by).filter(p=>p[0]&&p[1]).flatMap(p=>[p[0],p[1]]);
fs.writeFileSync(f,keep.map(r=>JSON.stringify(r)).join("\n")+(keep.length?"\n":""));' "$out"
done=$(node -e 'const fs=require("fs");const g=new Set(fs.readFileSync(process.argv[1],"utf8").trim().split("\n").filter(Boolean).map(l=>JSON.parse(l).g));let n=1;while(g.has(n))n++;console.log(n)' "$out")
[ "$done" -gt "$last" ] && { echo "done: $out"; exit 0; }
DECK=10 TODAY=1 node scripts/v4-bot-duel.mjs --a="$A" --b="$B" --tables=$((last - done + 1)) --first=$done --par=$par --limit=900 --out="$out" >> "${out%.jsonl}.log" 2>&1
