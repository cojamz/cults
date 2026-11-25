---
name: combo-probe
description: Hunt for broken combos and abuse in Cults: can a player trying hard break a card, and do new cards chain with copy, give, steal or swap cards into a runaway turn. Use after new members or spaces land, when Cory says something "seems broken" or "super strong", or for the "crazy combo probers".
---
# Combo probe

Three tools, from cheap and certain to expensive and broad. A combo found here is a played-out scene Cory can read, never a bot number alone (working-with-cory.md: "A claim from bot or AI games on an interaction card needs a played-out example").

## Checklist
1. **List the pairs** before running anything. For each new card, the live cards it touches: copiers (Green's copy spaces, Wallflower), givers and takers (Write-Off, Buyout, steals, swaps, Body Snatchers, Pied Piper), counters (anything "per member", "per color"), doublers, and once-per-game cards. `node .claude/skills/brainstorm/scripts/live-board.mjs <color> --members` for the text.
2. **Hand-built scenes (seconds each, the certain part)**: one vitest per pair through the real handlers, in `src/test/engine/v4/combos-<topic>-<date>.test.js` (models: combos-nov11.test.js, new-members-combos-nov25.test.js; helpers in cards-helpers-b.js). Each test names the pair and what a table would do, set at the biggest real state (round III, right after the copies and gifts that feed it). A runaway turn is 10+ followers outside round III's center (pitching.md step 9).
3. **Abuse hunt per card (10-20 min each)**: `DECK=10 node scripts/v4-abuse.mjs <card> --games=12 --rivals=hard` writes design/eval/abuse/<key>.md: the same game with and without a private copy, the abuser trying every option. Flags a gain of 3+ followers clearly above 0, or a card whose own followers beat its price by 3. The balance run's abuse stage does this across all cards ranked.
4. **Many games, every invariant (an hour per 1,000)**: copy scripts/members/nov25-hunt.mjs for the batch, or run the fuzz (`V4_FUZZ=heavy npx vitest run src/test/engine/v4/fuzz-tables.test.js`). Finds crashes, stuck turns, steals that move the wrong amount. Every game gets a time limit.
5. **One choice suspected** ("bots pick terrible options"): `DECK=10 FORCE=<color> node scripts/v4-choice-check.mjs --prompt="<prompt text>"`.
6. **Log the run** (`node .claude/skills/test-apparatus/scripts/log-run.mjs …`).

## Sorting what you find
- A rule bug (the game does something the card doesn't say): fix it, add the scene as a test, ship.
- Works as printed but strong: a question for Cory, never a fix. Check design/decisions.md first; his logged calls aren't bugs.
- Report like pf/combos/2026-11-11-combo-run.md: what was checked in one line, fixes shipped, then each flagged combo with both cards' full text and the played turn with numbers.

## Past runs
Nov 5 and Nov 11-12 combo tests by color (src/test/engine/v4/combos-*.test.js), Nov 11 combo run (16 scenes, 425 games), Wallflower audit (design/eval/wallflower-2026-11-03), Body Snatchers check (design/eval/bodysnatchers-2026-11-12), Nov 25 new-member hunt (5,800 games). More: .claude/skills/test-apparatus/references/history.md.
