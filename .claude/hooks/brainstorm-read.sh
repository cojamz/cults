#!/bin/bash
# Prints the brainstorm skill and its two references, and marks them read for this box (presend checks the mark
# before any pitch goes to Cory). Cory, Nov 10: "are you using the FUCKING BRAINSTORMING SKILL", "why do i always have to ask?"
cd "$(dirname "$0")/../.." || exit 1
cat .claude/skills/brainstorm/SKILL.md .claude/skills/brainstorm/references/cheatsheet.md .claude/skills/brainstorm/references/verdicts.md
date +%s > /tmp/.cults-brainstorm-read
