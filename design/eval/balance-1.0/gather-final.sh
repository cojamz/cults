#!/usr/bin/env bash
# Pull the runners' results and rebuild the final reports.
# raw2 = games on 291bfb1f; raw3 = games on 45493f55 (Promote/Demote reverted): every red table re-run, plus Very Hard 117-140.
# For any game number present in raw3, the raw3 game wins (same table, right build); the raw2 copy and its choices are dropped.
set -euo pipefail
cd /home/user/patrons
D=design/eval/balance-1.0/final; M=/mnt/project-files/balance-1.0/merged; T=/tmp/claude-0/gather
B="runner-hard-1 project-thread-x1cltz runner-normal-1 runner-vh-a runner-vh-b runner-vh-c runner-hard-red runner-vh-red"
rm -rf $T; mkdir -p $T $D $M
for b in $B; do git fetch -q origin claude/$b 2>/dev/null || true; done
for b in $B; do for p in raw2 raw3 final; do git archive origin/claude/$b design/eval/balance-1.0/$p 2>/dev/null | tar -x -C $T || true; done; done
E=$T/design/eval/balance-1.0
mkdir -p $E/raw2/veryhard; cp /home/user/final-run/out/veryhard/*.jsonl $E/raw2/veryhard/ 2>/dev/null || true
cp /home/user/final-run/out/veryhard/*.choices $E/raw2/veryhard/ 2>/dev/null || true

# merge <old files...> -- <new files...>  -> stdout: one line per game, new wins
merge() { node -e '
  const fs=require("fs"),a=process.argv.slice(1),k=a.indexOf("--"),oldF=a.slice(0,k),newF=a.slice(k+1),key=process.env.KEY||"game";
  const read=f=>{try{return fs.readFileSync(f,"utf8").split("\n").filter(l=>l.trim()).map(l=>{try{return JSON.parse(l)}catch{return null}}).filter(Boolean)}catch{return[]}};
  const neu=newF.flatMap(read),newGames=new Set(neu.map(r=>r.game)),out=[];
  if(key==="game"){const seen=new Set();for(const r of [...neu,...oldF.flatMap(read)]){if(seen.has(r.game))continue;seen.add(r.game);out.push(r)}}
  else{for(const r of oldF.flatMap(read))if(!newGames.has(r.game))out.push(r);out.push(...neu)}
  out.sort((x,y)=>x.game-y.game);process.stdout.write(out.map(r=>JSON.stringify(r)).join("\n")+"\n");
  console.error(`${out.length} rows, ${newGames.size} games from the revert build`)' "$@"; }

# Normal: runner 1 wrote whole files to final/; red tables from raw3/normal
for S in 4 3 2; do
  merge $E/final/normal-${S}p.jsonl -- $E/raw3/normal/normal-${S}p-*.jsonl > $M/normal-${S}p.jsonl
  node scripts/v4-balance-report.mjs $M/normal-${S}p.jsonl --json=$D/report-normal-${S}p.json > $D/report-normal-${S}p.md
  echo "normal ${S}p: $(wc -l < $M/normal-${S}p.jsonl) games"
done

for L in hard veryhard; do
  merge $E/raw2/$L/$L-4p-*.jsonl -- $E/raw3/$L/$L-4p-*.jsonl > $M/$L-4p.jsonl
  node scripts/v4-balance-report.mjs $M/$L-4p.jsonl --json=$D/report-$L-4p.json > $D/report-$L-4p.md
  # choices: every decision of a game re-run on the revert build replaces that game's old decisions
  KEY=choices merge $E/raw2/$L/*.choices -- $E/raw3/$L/*.choices > $M/$L.choices 2>/dev/null || true
  node scripts/v4-choice-report.mjs "$M/$L.choices" --md=$D/choices-$L.md --json=$D/choices-$L.json --min=15 >/dev/null
  echo "$L: $(wc -l < $M/$L-4p.jsonl) games"
done
