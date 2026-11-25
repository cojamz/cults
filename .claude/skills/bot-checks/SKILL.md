---
name: bot-checks
description: Test the Cults bots and what skill is worth: a skill principle built into the strongest bot against today's strongest bot, bot misplay audits, how much of a game is luck, how close contests end. Use when building or changing a bot, when Cory says bots "make dumb decisions", or to decide which bot level's numbers to trust.
---
# Bot checks

Cory, Nov 12 (.claude/rules/testing.md): never one existing level against another (we know the stronger one wins); a skill test is one principle from design/notes/skilled-play-2026-11-12.md built into the strongest bot, against the strongest bot as it is today, on the same deals.

## Checklist
1. **Question and expected answer** in Cory's words; if the answer is known, don't run.
2. **Build the principle as a bot option** (a flag read from `opts` in src/engine/v4/bots.js or thinker.js; existing ones include `spite`, `ease`, `together`, `robust`, `tempo`, `cloak`), off by default so today's bot is unchanged.
3. **One change against a named control**: `DECK=10 node scripts/v4-bot-duel.mjs --a='{"level":"veryhard","ease":true}' --b='{"level":"veryhard"}' --tables=20 --par=2 --limit=600 --out=design/eval/vh-duel/<label>.jsonl`. Each table plays twice with seats swapped, so the deal and seat cancel. Sum with `node scripts/skill/duel-sum.mjs <file>`: seats won and followers per seat, A minus B. 20 tables is a first read; a gain under about 2 followers a seat needs 40+ tables before anyone quotes it.
4. **Bots playing badly**: `DECK=10 node scripts/v4-normal-audit.mjs --games=4` (Normal's worst picks against the best option played out), `scripts/v4-bot-choice-audit.mjs` (every Normal choice), `scripts/v4-bot-strategy-audit.mjs` (Hard's timing of On Use cards), `scripts/v4-choice-check.mjs --prompt=…` (one card's choice).
5. **AI players playing badly**: `node scripts/v4-ai-audit.mjs <game dir> --gap=3`.
6. **How much is luck, how close are contests**: `scripts/skill/luck.mjs`, `scripts/skill/margins.mjs` (both take --limit).
7. Long runs: a check-in every 30 minutes, scheduled when you start. Runs and their reporting on a cheaper model than Fable.
8. **Log the run**: `node .claude/skills/test-apparatus/scripts/log-run.mjs --tool=bot-duel --question="…" --control="Very Hard today" --change="Very Hard + <option>" --result="…" --link=<jsonl>`.

## Which bot to trust
Normal: cheap volume, trust only when Hard agrees (one Hard beats three Normals ~60%). Hard: the default for prices and win rates. Very Hard: confirms strong combos and breaks Normal/Hard ties. The balance run's trust stage says how far to trust each.

## Pitfalls we hit
- An hour of Easy, Normal and Hard against each other was sent as a skill result (Nov 12): known answer, wasted tokens.
- A duel with no --limit sat an hour on one stuck game (Nov 12).
- "Robust bot (ease + together, half weight) vs today's Very Hard: 22 games, no gain" (Nov 12): too few tables to tell a small gain from none; say so in the report.

## Past work
Bot levels and the big-followers target (design/eval/bots.md), a stronger Very Hard (design/eval/vh-duel), planning and learning Hard (design/eval/hard-learn*, hard-value*, legacy), BOTSMART (design/eval/bots-smart), bot and AI-player audits (design/eval/bot-audit-2026-11-11, ai-audit-2026-11-12), skill tests and contest margins (pf/skill, design/eval/skill-2026-11-12).
