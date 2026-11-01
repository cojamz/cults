#!/bin/bash
# Log Cory's correction of how Claude works into the shared list (chat threads don't run the hook that does this).
# Usage: bash .claude/hooks/correction.sh "his exact words"
# The hook's detector decides whether a prompt is a correction; called by hand it's always one, so if the detector
# passes on it, write the line here (Nov 1: "harness is our meta level how we operate" was silently dropped).
cd "$(git rev-parse --show-toplevel 2>/dev/null || pwd)" || exit 0
F=/mnt/project-files/harness/corrections.jsonl
before=$(wc -l < "$F" 2>/dev/null || echo 0)
Q=$(printf '%s' "$1" | sed 's/</\&lt;/g')
jq -n --arg p "<message from=\"human\" trust=\"principal\">$Q</message>" '{prompt:$p}' | CLAUDE_PROJECT_DIR=$PWD node .claude/hooks/corrections.mjs
after=$(wc -l < "$F" 2>/dev/null || echo 0)
if [ -d "$(dirname "$F")" ] && [ "$after" = "$before" ]; then
  jq -cn --arg t "$1" --arg at "$(date -u +%FT%TZ)" --arg s "${CLAUDE_CODE_SESSION_ID:-chat}" '{at:$at,session:$s,text:$t}' >> "$F"
  echo "Logged to $F"
fi
