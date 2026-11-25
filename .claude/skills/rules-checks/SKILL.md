---
name: rules-checks
description: Check that every Cults card and rule does what its text says and nothing crashes or goes silent: the check:v4 gate, fire and log audits, fuzz, setup matrix, replays and the GitHub verdict. Use on every change before shipping, after a rules or card edit, or when a saved game breaks.
---
# Rules checks

The "does it work" layer. Cheap, certain, and run on every change; nothing else is worth reading if these are red.

## Checklist
1. **While iterating**: `npm run check:v4:quick -- --related <files>` (~2 min). For a shared engine change, name the tests instead: `npm run check:v4:quick -- --tests src/test/engine/v4/<a>.test.js,<b>.test.js` (`--related` can pull in 69 files). One file alone: `npx vitest run <file>`. Parallel threads set `V4_OUTDIR=.v4-build-<name>` and `V4_PORT`.
2. **Before shipping**: `npm run check:v4 -- --commit <sha>` on a committed snapshot. Whole-suite runs reuse passing test files whose inputs didn't change (unit cache). Firefox too for any screen change (`-- --firefox`).
3. **A new or changed card**: its own unit tests (one per sentence of the card), plus `node scripts/v4-fire-audit.mjs 200` (every recruited member leaves a log line naming it) and `node scripts/v4-log-audit.mjs 40` (every change to a player is in the log). Cory's rule: every number on the table traces to a log line. At a few games the fire audit's SILENT list is mostly cards that never got the chance; read it at 200 games, and exit 1 there is real.
4. **A new setup option or price change**: `node scripts/v4-setup-matrix.mjs` and src/test/engine/v4/setup-combos.test.js (every option with every other, named costs checked).
5. **Hunting crashes**: `V4_FUZZ=heavy npx vitest run src/test/engine/v4/fuzz-tables.test.js` (random tables and moves, every invariant after every move).
6. **A broken saved game**: `node scripts/v4-replay.mjs <record.json>` names the first illegal move; `npm run records:refresh -- --check` after a rules change.
7. **After a major update** (version step, color set, screen overhaul): `bash scripts/v4-major-verdict.sh "<why>"`, then `node scripts/v4-verdict.mjs`.
8. **Before shipping a card change**: `node scripts/card-diff.mjs live HEAD`; check every line against Cory's words in design/decisions.md.

## Rules for reading
- The box has 4 CPUs: re-run a failing timing test alone once before calling it real.
- Never weaken an assertion to pass; a regression seen twice becomes a gate.
- A test that calls one of Cory's logged calls a bug is a question for him, not a fix.
- Gates already red on live are in e2e/v4/known-red.json; add one only after seeing it fail on the live commit.

## Pitfalls we hit
- Three of four "red on live" gates were stale fixtures after new prices (Oct 21): fixtures name the exact card by key and price.
- A shared-engine change with --related ran 69 files and overloaded the box; name the tests.
- Running the gate on the live tree while other threads edit is not a verdict; use --commit.

Full tool rows: .claude/skills/test-apparatus/references/tools.md, "Rules". Harness details: .claude/rules/harness.md, "Checks".
