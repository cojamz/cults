#!/bin/bash
# SessionStart (startup, resume, clear and compact): puts the design rules back in front of Claude.
# Cory, Nov 11: "how do we actually make it happen in the future vs you saying 'golly ill make sure!' and then doing
# jack shit after a few compactions". Whatever Claude remembers after a compaction, this text comes back every time.
cd "$(dirname "$0")/../.." || exit 0
src=$(cat 2>/dev/null | sed -n 's/.*"source" *: *"\([a-z]*\)".*/\1/p')
echo "CULTS DESIGN RULES (printed by the session-start hook on every start, resume and compaction${src:+; this one: $src})"
case "$src" in compact) w=compacted;; resume) w=resumed;; *) w=;; esac
[ -n "$w" ] && echo "You were just $w. A memory of having read the brainstorm skill or done its steps is not proof; the written record is."
cat <<'TXT'
- In a chat thread, first command: bash .claude/hooks/start.sh (game branch claude/gifted-newton-3lcy3i).
- ANY idea for a card, action, member, rule or number shown to Cory goes through the brainstorm skill, every step:
  1. bash .claude/hooks/brainstorm-read.sh (prints the skill, marks it read for 12 hours)
  2. play every idea in writing through .claude/rules/pitching.md steps 1 to 9, including step 9, the biggest real case, with its numbers
  3. write the record: design/brainstorm/<date>-<topic>.md from design/brainstorm/TEMPLATE.md, one "## Idea: <Name>" block per idea, every step filled, "Verdict: send" or "Verdict: cut"
  A hook refuses any message, decision card or widget to Cory that pitches a name with no complete record (pitch-gate.mjs). Write the record; never work around the gate.
- Pitching steps today (from pitching.md):
TXT
grep -E '^[0-9]+\. \*\*' .claude/rules/pitching.md | sed -E 's/^([0-9]+)\. \*\*([^*]+)\*\*.*/    \1. \2/'
cat <<'TXT'
- Before every message to Cory: node .claude/hooks/presend.mjs <<'EOF' (message) EOF. Work from Cory's own words, never a summary.
TXT
exit 0
