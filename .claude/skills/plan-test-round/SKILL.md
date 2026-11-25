---
name: plan-test-round
description: Plan a Cults testing round from what changed: how many changes, what kind (wording, screen, prices, new or reworked cards, rules engine, bots) and how big, pick which test tools to run, how deep, in what order, each with its question, control and one change, skipping what we already know. Use whenever Cory asks for a testing round, "test the new stuff", "bring the testing apparatus to bear", or before any batch of runs.
---
# Plan a testing round

Cory, Nov 25: "there should be a meta skill that evaluates what to use when i ask for testing round based on the number, level, quality of changes etc". The plan is what the coordinator reads before any run starts (project instructions: "Before any test or bot run starts, the coordinator reads its plan and checks it answers Cory's actual question").

Why plan first: the box has 4 CPUs and one balance run fills it, judge agents cost tokens, and twice runs answered questions we already knew (Nov 12: "whats the point in spending my fucking tokens on what we already knew???"). A plan spends CPU where the changes are and tokens only where a number has flagged something.

## Checklist
1. **Cory's words, verbatim**, at the top of the plan. If he named cards, they are in the plan whatever the depth.
2. **Is there a plan already?** `ls /mnt/project-files/*/plan.md` and the board (`node scripts/status.mjs board`): if a thread is already running a round for this ask, update its plan instead of writing a second one, and tell that thread.
3. **Facts of what changed**: `node .claude/skills/plan-test-round/scripts/plan.mjs` (20-60 s; `--help` for flags). By default it compares against the build the last balance run played (the newest "Build <sha>" in design/eval/balance-runs/, by commit date) and says which file it used; pass `--since=<sha>` when the last round of this kind was something else (a price round: the last fair-price row in runs.md). It prints new, changed, renamed, repriced and removed cards and spaces, a price change shared by many members as one economy rule, names now on a different card, files by area, bot-code changes, every run logged since that commit (a broad hunt answers for many cards), and a suggested depth. "New effect text" can be wording only: check the card's code diff before treating it as a rule change.
4. **Pick the depth** from the table below. Go up one level when Cory named the round as big ("full weight"), or when a change touches a card many others read (copy, give, swap, "per member"). Go down when the run log already answers it on these same cards.
5. **Write each run as a row**: tool, question in Cory's words, control, the one change, whether we already know the answer (yes → skip it and say why), time, model. Model is "code" for bot games (run them from a Sonnet thread or a runner, never Fable), "Sonnet" for judges, "Opus" only for player agents Cory asked for.
6. **Order**: rules gates → words → combo scenes (seconds, certain) → bot runs one at a time, longest last or on the queue (/mnt/project-files/queue/README.md) → judges only on what the numbers flagged → the feel step and the report. Each long run gets a 30-minute check-in scheduled when it starts, and every game a time limit. Finish time: add the stages' times in order (the box runs one heavy job at a time; queue jobs run beside it on runner boxes), plus 30 minutes for judges and the report, and quote it in Eastern.
7. **Skipped, with why**: list every family you're not running and the reason (answer known, nothing in this round touches it, too costly for the question). This is where most savings are.
8. **Write it** to /mnt/project-files/<round>/plan.md (shape: /mnt/project-files/full-test-pass/plan.md, the Nov 25 worked example), message the coordinator the link (from a thread: message_coordinator; if /mnt/project-files isn't writable, design/eval/<round>/plan.md in the repo, pushed), and show Cory a short version only if he asked for the plan: his words, the depth in one line, what runs, what's skipped, the finish time in Eastern.
9. **As each run finishes**: its row in runs.md (`node .claude/skills/test-apparatus/scripts/log-run.mjs …`), and the plan's row marked done with the link.

## Cory's words → the tool that answers them
| He says | First command (then its family skill) |
|---|---|
| "balance evaluations", "who wins too much", "is X color strong" | `DECK=10 node scripts/balance/run.mjs --size=fast --env='{"CONTESTS":"byColor"}' --id=<round>` (balance-run) |
| "price testing", "is X too cheap", "what should X cost" | every card: `node scripts/v4-fair-price.mjs screen --games=3000`; named cards: `… sweep <key> --level=hard` (price-test) |
| "crazy combo probers", "is this broken", "does X break with Y" | combo scenes in src/test/engine/v4/combos-*.test.js, then `scripts/v4-abuse.mjs <key>` on flagged cards (combo-probe) |
| "quality evals", "is X a good card", "does it feel good" | ranking with card-judges, then play judges on Hard sheets (quality-eval) |
| "new card vs the old one" | `node scripts/trial/trial.mjs new <name> --env='{"REPLACE<n>":"1"}'` (quality-eval) |
| "do the cards work", "bugs", "does every setup work" | `npm run check:v4 -- --commit <sha>`, fire audit, setup matrix, a seeded hunt (rules-checks, combo-probe) |
| "bots are dumb", "does skill matter", a skill principle | `scripts/v4-normal-audit.mjs`; a principle: `scripts/v4-bot-duel.mjs` (bot-checks) |
| "laggy", "the screen shows X wrong" | `scripts/v4-freeze.mjs`, the picky bot (screen-probes) |
| "the economy", "everything 1 more" | `scripts/econ/sweep.mjs` (price-test, step 8) |

## Depth
| Depth | When | What runs (family skill) | Rough cost |
|---|---|---|---|
| **Light** | Wording, names, screen or art only; no card effect, number or rule changed | Quick gate on changed files (rules-checks); review-text on reworded cards; the browser gate for a changed look, freeze probe if motion or speed changed (screen-probes) | minutes, no runs |
| **Numbers** | 1-4 price or worth changes, no new effects | Quick gate + setup-combos test (rules-checks); Hard sweep on each changed card, deltas in the direction asked (price-test); whole-game confirm only if a sweep says move | 1-4 CPU-hours |
| **Cards** | 1-4 new or reworked cards in 1-2 colors | Unit test per sentence + fire audit (rules-checks); review-text; combo scenes for each card's pairs (combo-probe); card trial against the replaced card, or a Hard sweep for a new slot (quality-eval, price-test); play judges per card; abuse only where flagged | 2-6 CPU-hours, ~2 Sonnet judges per card |
| **Bots** | Bot code only, and the diff changes how bots choose moves (not just a new card's choices) | One duel: the change against today's strongest bot, same tables (bot-checks). No balance run: bot changes don't change the game | 30-60 min |
| **Full** | 5+ new or changed cards, 3+ colors, the rules engine, many cards removed, or Cory asks for "everything" | Rules checks and words for every changed card; combo scenes for every new card's pairs; then the bot runs below decide where the costly steps go: abuse and play judges only on cards the balance run, price screen or scenes flagged (cap about 6), plus Cory's named cards. Plus: full check:v4, and a seeded hunt with every invariant unless the run log already has one on these cards (rules-checks, combo-probe); balance run fast, deep overnight only if Normal and Hard disagree (balance-run); price screen, then Hard sweeps on its outliers and Cory's named cards (price-test); abuse on flagged cards; paper ranking of the new cards (quality-eval); feel step (game-feel) | overnight; ~10-15 Sonnet judge agents |
| **Release** | A version step or a 1.0 call | Full with the deep balance run, the browser verdict on GitHub, feel games on every color, a blind panel only if Cory asks | a night plus a day |

## What we already know (don't run)
- A stronger bot beats a weaker one; a nerf makes a card weaker; a level against a level (testing.md rules 1 and 3).
- The skill ladder, unless bot code changed: the balance run's trust stage covers how much skill matters.
- Anything in runs.md on the same cards since their last change (plan.mjs lists the hits).
- Normal-only reads when Hard runs the same question: Normal is volume, trusted only when Hard agrees.
- As printed contests: no runs (By color is the game, Cory Nov 3). The 15-card deck: untested setting, no runs.

## Pitfalls we hit
- A run with no per-game limit and no check-in sat an hour on one stuck game (Nov 12).
- Two bot jobs at once on this box slow both and break timing tests; one heavy run at a time, the rest to the queue or a runner thread.
- A card name can point at two cards (Tax Men): resolve keys with `node .claude/skills/test-apparatus/scripts/card-key.mjs "<name>"` before writing commands.
- Reports must cover every member, color and space, not only the cards that changed (Cory, Oct 29: "you should be looking at everything"), and end with a price list (Nov 12).

## Example
`node .claude/skills/plan-test-round/scripts/plan.mjs --since=0e4119d7` on Nov 25 (the last deep run's build, v0.99.606): 1,441 commits; 43 new members, 46 with new effect text, 49 renamed only, 43 cards removed (Gold among them), every color and the rules engine touched → **Full**. The plan that came out of it, written by hand before this skill: /mnt/project-files/full-test-pass/plan.md.
