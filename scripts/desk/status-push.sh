#!/usr/bin/env bash
# Pushes design/workstreams.json to main's status.json, which https://cojamz.github.io/patrons/tracker.html polls
# every 30 s (Cor, Nov 3 9:54pm: "I NEED A WORKSTREAM TRACKER ... it needs to be realtime"). Run after every edit.
set -euo pipefail
cd "$(git rev-parse --show-toplevel)"
WT=$(mktemp -d); trap 'git worktree remove -f "$WT" >/dev/null 2>&1 || true' EXIT
git fetch -q origin main && git worktree add -q -f --detach "$WT" origin/main
node -e '
const fs=require("fs"); const rows=JSON.parse(fs.readFileSync("design/workstreams.json","utf8"));
const updated=new Date().toLocaleString("en-US",{timeZone:"America/New_York",hour:"numeric",minute:"2-digit"})+" Eastern";
fs.writeFileSync(process.argv[1]+"/status.json",JSON.stringify({updated,rows:rows.map(([workstream,blocked,eta])=>({workstream,blocked,eta}))},null,1)+"\n");' "$WT"
cd "$WT"; git add status.json
git diff --cached --quiet && { echo "status.json unchanged"; exit 0; }
git commit -qm "Tracker status $(date -u +%H:%MZ)"
for i in 1 2 3 4; do git push -q origin HEAD:main && { echo "status.json pushed; live within ~1 min"; exit 0; }; git pull -q --rebase origin main; done
echo "push failed" >&2; exit 1
