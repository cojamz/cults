#!/bin/bash
# Turns the game's design hooks on for chat threads.
# Why: a project thread starts Claude in the folder that holds the clones (/home/user), not inside the repo, so the
# repo's .claude/settings.json never loads there (that is why "chat threads run no hooks", Oct 31). Claude reads
# <that folder>/.claude/settings.json instead, so this writes one that calls the repo's hooks.
# Run by the cloud environment's setup script (before Claude starts, so the hooks load) and by start.sh.
# Usage: bash .claude/hooks/install-thread-hooks.sh [folder holding the clones]   (default: the repo's parent)
set -e
repo=$(cd "$(dirname "$0")/../.." && pwd)
top=${1:-$(dirname "$repo")}
mkdir -p "$top/.claude"
cat > "$top/.claude/cults-hook.sh" <<'SH'
#!/bin/bash
# Runs one of the game's hooks from whichever clone has it (cults, or its old name patrons). Stdin passes through.
top=$(cd "$(dirname "$0")/.." && pwd)
for r in cults patrons; do
  f="$top/$r/.claude/hooks/$1"
  [ -f "$f" ] || continue
  case "$f" in *.mjs) exec node "$f" ;; *) exec bash "$f" ;; esac
done
exit 0
SH
chmod +x "$top/.claude/cults-hook.sh"
s="$top/.claude/settings.json"
if [ -f "$s" ] && ! grep -q cults-hook.sh "$s"; then cp "$s" "$s.bak"; fi
cat > "$s" <<JSON
{
  "hooks": {
    "SessionStart": [
      { "hooks": [ { "type": "command", "command": "bash '$top/.claude/cults-hook.sh' design-rules.sh", "timeout": 20 } ] }
    ],
    "PreToolUse": [
      {
        "matcher": "mcp__hearthbot__post_message|mcp__hearthbot__edit_message|mcp__hearthbot__request_decision|mcp__hearthbot__post_widget",
        "hooks": [ { "type": "command", "command": "bash '$top/.claude/cults-hook.sh' pitch-gate.mjs", "timeout": 30 } ]
      }
    ]
  }
}
JSON
echo "Design hooks on for threads started in $top (session start rules + pitch gate)."
