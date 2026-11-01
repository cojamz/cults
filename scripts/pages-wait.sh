#!/usr/bin/env bash
# Wait (up to 4 min) until no Pages deployment is running on main. Pages refuses a new deployment while one is
# in progress ("due to in progress deployment"), and threads can't re-run it (403), so a push during another
# deploy left live on the old build twice on Nov 1. Sourced by v4-play.sh and harness-sync-main.sh before they push.
pages_wait() {
  local repo=${1:-cojamz/patrons} end=$((SECONDS + 240))
  while [ "$SECONDS" -lt "$end" ]; do
    local busy
    busy=$(gh run list -R "$repo" --branch main --limit 10 --json name,status 2>/dev/null \
      | node -e 'let s="";process.stdin.on("data",d=>s+=d).on("end",()=>{try{const r=JSON.parse(s);console.log(r.filter(x=>/pages/i.test(x.name)&&x.status!=="completed").length)}catch{console.log(0)}})') || busy=0
    [ "${busy:-0}" = 0 ] && return 0
    echo "A Pages deployment is still running on main; waiting before publishing…"; sleep 10
  done
  echo "Pages still busy after 4 min; publishing anyway." >&2
}
