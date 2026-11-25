---
name: quality-eval
description: Judge whether a Cults card is good (clear, fun, interacts, fits its color, plays as written) with paper judges, play judges, blind A/B, set judges, card trials against the card it replaces, the idea pipeline, AI-player games and player agents. Use for "quality evals", a new or reworked card before it reaches Cory, a rework candidate list, or "how does it feel to play".
---
# Quality eval

Bots measure strength; judges and AI players measure clarity and feel. Calibration (design/eval/card-judging/run4-result.md) showed paper judges match Cory's picks only at chance on unseen calls, so: paper cuts rule breaks and weak turns, play judges and AI players say how it feels, bots say how strong, Cory's marks are the taste signal. Judges are fresh agents on Sonnet (testing.md rule 4), and never see Cory's likes and dislikes or the designers' reasoning.

## First: which path
- **A live card, no replacement in sight** ("is Spice Merchant a good card?"): fires check → words → ranking (paper) → play judges. No paper gate, no A/B (they compare two versions).
- **A new card replacing a live one**: fires check → words → paper gate → card trial → play judges or blind A/B → set check if it's one of two linked slots.
- **Many candidate cards** (an idea pool): the idea pipeline, scripts/ideas/README.md, start to finish.
- **"How does the game feel"** (not one card): AI-player games or player agents. Not for a one-card question: ~2 h and many tokens a game.

## Checklist
1. Question and expected answer in Cory's words; `grep -i "<name>\|<key>" .claude/skills/test-apparatus/runs.md`. Keys and old names: `node .claude/skills/test-apparatus/scripts/card-key.mjs "<name>"`.
2. **Did it act**: a live card: `DECK=10 BOTSEE=1 node scripts/quality/fires.mjs "<Card name>" --colors <its code color>,<3 others> --want 3 --max 40` (Hard by default; it rolls games until the card fires, so raise --max for a rare card). A pool candidate: `node scripts/ideas/fires.mjs <pool tags>`. A card bought but never acting is a build bug: fix it before any judge reads it.
3. **Words**: the review-text skill on it; a table must read it right the first time.
4. **Paper**:
   - Ranking (live card): `node scripts/quality/board.mjs <color> > board.md`, three fresh card-judge agents (.claude/agents/card-judge.md) score it on /mnt/project-files/quality/principles.md, then `node scripts/quality/ranking.mjs <dir with judge-*.json>`.
   - Paper gate (new vs old): spec in /mnt/project-files/quality/evals/gate/specs/<id>.json, `node scripts/quality/paper-gate.mjs batch <batch> <spec.json…>`, three gate-judge agents, `paper-gate.mjs batchscore <batch>`. A run whose anchors moved or whose decoy gained is void.
5. **Strength (new vs old)**: card trial, `node scripts/trial/trial.mjs new <name> --env='{"REPLACE<n>":"1"}'`, then `work <name>` (any thread helps) and `report <name>`; 1-2 h, same deals both ways. scripts/trial/README.md.
6. **Play**: `node scripts/quality/sheets.mjs "<Card name>" --want 3 --jobs 2` (add the REPLACE env only for a candidate behind a switch) writes trimmed Hard-game sheets to /mnt/project-files/quality/evals/play/<card>/; two fresh play-judge agents read them; `node scripts/quality/play-score.mjs <folder>`. A "built wrong" line blocks the card. For new vs old, blind A/B instead: `node scripts/quality/play-ab.mjs <newDir> <baseDir> "<new name>" "<new text>" "<old name>" "<old text>" --out <dir>`, judges, `play-ab.mjs score <dir>` (ships at +0.3 and a Clear outcome median above 0).
7. **Report** through the game-feel skill and Cory's voice rules: full card text, one played turn, which sources agree. Nothing ships on judges alone without his yes.
8. **Log the run**: `node .claude/skills/test-apparatus/scripts/log-run.mjs --tool=<ranking|play-judges|trial|…> --question="…" --result="…" --link=<folder>`.

## Pitfalls we hit
- Feel judges scoring one version alone gave everything about 3 of 5 and moved a point on a repeat (economy test, Nov 7): compare two versions side by side, blind, order shuffled.
- The shared folder handed back stale state mid-game for AI-player games (Nov 7); v4-expert heals from the move log, but check heal.log.
- AI players were "legit terrible" (Cory, Nov 11): audit their games with scripts/v4-ai-audit.mjs before quoting their opinions as balance.
- Judges given Cory's past calls just echo them; keep them blind.

## Detail lives in
scripts/quality/README.md (every judge step and pass bar), scripts/ideas/README.md (the pipeline), scripts/trial/README.md (trials), /mnt/project-files/player-agents/plan.md (player agents, Opus per Cory Nov 12), design/notes/testing-setup.md (which checks go with which change). Agents: .claude/agents/card-judge.md, gate-judge.md, play-judge.md, set-judge.md. Example outputs: /mnt/project-files/quality/ranking.md, /mnt/project-files/quality/evals/play/.
