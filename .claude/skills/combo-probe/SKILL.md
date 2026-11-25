---
name: combo-probe
description: Hunt for broken combos and abuse in Cults: can a player trying hard break a card, and do new cards chain with copy, give, steal or swap cards into a runaway turn. Use after new members or spaces land, when Cory says something "seems broken" or "super strong", or for the "crazy combo probers".
---
# Combo probe

Three tools, from cheap and certain to expensive and broad. A combo found here is a played-out scene Cory can read, never a bot number alone (working-with-cory.md: "A claim from bot or AI games on an interaction card needs a played-out example"). Scenes first because they cost seconds and prove a rule; bot hunts only for what the scenes can't reach.

## Checklist
1. **Which cards are new.** `node .claude/skills/plan-test-round/scripts/plan.mjs --since=<last tested commit>` lists new members, new spaces and changed text between two commits (the last balance report's "Build <sha>" line is a good --since). Per-card tests already written: src/test/engine/v4/members-nov25.test.js and friends (`ls src/test/engine/v4 | grep -i members`).
2. **List the pairs** before running anything. For each new card, the live cards it touches: copiers (Green's copy spaces, Forger, Mimics, Impersonator, Wallflower), givers and takers (Write-Off, Buyout, steals, swaps, Swindler, Pied Piper, Changeling), counters ("per member", "per color", "per color you hold"), doublers, and once-per-game or once-per-round cards. Full text: `node .claude/skills/brainstorm/scripts/live-board.mjs <color> --members` (code colors: thieves = Magenta, market = Blue, trading = White, echo = Green). Keys: `node .claude/skills/test-apparatus/scripts/card-key.mjs "<name>"`.
3. **Hand-built scenes (seconds each, the certain part)**: one vitest per pair in `src/test/engine/v4/combos-<topic>-<date>.test.js`, set at the biggest real state (round III, right after the copies and gifts that feed it). A runaway turn is 10+ followers outside round III's center (pitching.md step 9). Two styles, both in src/test/engine/v4/new-members-combos-nov25.test.js, copy from there:
   - **One handler** (lines 1-30, Beggar with Good Samaritans): `table(quads, { members: [[…p1 keys], […p2 keys]] })` from `./cards-helpers-b.js`, then `s.queue = []; s.pending = null`, `contextFor(s)` from `../../../engine/v4/core.js`, and the card's handler from `quadrant('<code color>').handlers` (`defById` from `../../../engine/v4/content/index.js` for the def). Set resources on `p.res`, followers land in `p.bonus`.
   - **A whole turn** (lines 55-95, Usher with Journeyman and Mimics; Old Guard with Doppelganger): `still({...})`/`go(s, queue)` from `./pool-helpers.js` or `sceneQ({...})` from `./cards-helpers.js`, then `applyMove` from core.js, answering each prompt by matching its option label. Assert on `s.log` lines too: every change must be named in the log.
   Run: `npx vitest run src/test/engine/v4/combos-<topic>-<date>.test.js`.
4. **Abuse hunt, only for cards the scenes flagged or Cory named (10-20 min each)**: `DECK=10 node scripts/v4-abuse.mjs <key> --games=12 --rivals=hard --workers=2` writes design/eval/abuse/<key>.md (the folder appears on first run): the same game with and without a private copy, the abuser trying every option. Flags a gain of 3+ followers clearly above 0, or a card whose own followers beat its price by 3. For every card at once, the balance run's abuse stage already does this ranked; don't repeat it by hand.
5. **Many games, every invariant (about an hour per 1,000 at Hard)**: `node scripts/members/nov25-hunt.mjs <first> <last> <bot|random|mixed> <hard|normal> <out.jsonl> [limitSec=240]` (copy and rename it for the next batch; its test set is the Nov 25 members), or the fuzz: `V4_FUZZ=heavy npx vitest run src/test/engine/v4/fuzz-tables.test.js`. Finds crashes, stuck turns, steals that move the wrong amount. Always keep the per-game limit.
6. **One choice suspected** ("bots pick terrible options"): `DECK=10 FORCE=<code color> node scripts/v4-choice-check.mjs --prompt="<start of the choice's prompt text>" --games=10 --seeds=12`; it plays every option of that choice out and compares the bots' pick with the best.
7. **Log the run**: `node .claude/skills/test-apparatus/scripts/log-run.mjs --tool=combo-scenes --question="…" --change="<pairs>" --result="<n> scenes, <k> fixes, <m> flagged" --link=<test file or report>`.

## Sorting what you find
- A rule bug (the game does something the card doesn't say): fix it, keep the scene as its test, ship.
- Works as printed but strong: a question for Cory, never a fix. Check design/decisions.md first; his logged calls aren't bugs (Nov 1, Promote/Demote was reverted after a test called it a bug).
- Report like /mnt/project-files/combos/2026-11-11-combo-run.md: what was checked in one line, fixes shipped, then each flagged combo with both cards' full text and the played turn with numbers.

## Pitfalls we hit
- A copy turn's story card repeated lines and showed payouts with no cause; still-frame judges missed it and Cory caught it in minutes (Nov 6). Read the log lines in your scene, not just the totals.
- Echo copying Last Call was reported as "double followers" from an AI player's quote; it was wrong (Oct 29). Every interaction claim gets a scene.
- Running v4-abuse on every new card by hand burns hours of CPU the balance run's abuse stage already spends.

## Past runs
Nov 5 and Nov 11-12 combo tests by color (src/test/engine/v4/combos-*.test.js), Nov 11 combo run (16 scenes, 425 games), Wallflower audit (design/eval/wallflower-2026-11-03), Body Snatchers check (design/eval/bodysnatchers-2026-11-12), Nov 25 new-member hunt (5,800 games). More: .claude/skills/test-apparatus/references/history.md.
