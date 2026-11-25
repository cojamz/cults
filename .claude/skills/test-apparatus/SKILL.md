---
name: test-apparatus
description: The map of every Cults testing tool (balance, prices, combos, rules, quality and feel judges, bots, screen) and the log of every run. Read it before any test, sim, eval, audit or probe, to pick the tool and find past answers; append a row after every run; update it whenever a tool is built or changed.
---
# The test apparatus

Cory, Nov 25: "quality evals, crazy combo probers, etc. all the different tools we've built. separately, we should better catalogue that system/things we've done into past. maybe into skills? ... needs to be living as we work".

This skill is the front door. It points each question at the tool family that answers it, keeps the full tool list and the history of past runs, and holds the run log every thread appends to. The family skills hold the how-to.

**Asked for a testing round, or more than one test? Start with the `plan-test-round` skill**: it reads what changed and picks the tools, depth and order. This page is the map it draws from.

## Before any test (checklist)
1. **Write the question in Cory's words and the answer you expect** (.claude/rules/testing.md). If we already know the answer, don't run it.
2. **Look it up first**: `grep -i <card or topic> .claude/skills/test-apparatus/runs.md references/history.md`. A run on the same question and a recent commit may already answer it; quote it instead of re-running.
3. **Pick the family** from the table below and read its skill. Each one says the command, the control, the cost, and which model may run it.
4. **Name the control and the one change**, the bot level (Hard is the default; Normal is volume only), deck 10, By color contests, a time limit per game.
5. **Spend**: bot games are plain code; the turns around them are not. No Fable tokens on runs or judging (testing.md rule 4): runs and judges go to Sonnet or a runner thread. Long bot runs go through the queue (/mnt/project-files/queue/README.md) or a trial, never ranges by message. Check every 30 minutes.

## After any test (keeps it living)
1. Append one row to `runs.md` (here): `node .claude/skills/test-apparatus/scripts/log-run.mjs --tool=<tool> --question="<Cory's words>" --control="…" --change="…" --result="<one line>" --link=<report path>`. It fills the date and commit.
2. A finding Cory should see goes through the family skill's report step, not straight from the log.

## When you build or change a tool (the rule)
Same commit: its row in `references/tools.md` (question, command, cost, model) and, if it opens a new kind of test, a line in its family skill. `node .claude/skills/test-apparatus/scripts/drift.mjs` lists any script, eval folder or test file the catalogue doesn't name; start.sh prints its count every thread. A tool that is superseded gets marked "older twin: use X", not deleted from the list.

## Which family answers which question
| Question | Family skill | Main tools |
|---|---|---|
| Who wins too often or too rarely: colors, members, spaces, cloaks; catch-up, kingmaking, small-cult wins | `balance-run` (then `game-feel` for the read) | scripts/balance/run.mjs, v4-balance.mjs + v4-balance-report.mjs, lens.mjs |
| Is this card priced right; what should it cost | `price-test` | v4-fair-price.mjs screen and sweep, v4-balance.mjs PRICE=, v4-member-value.mjs, trial price runs, econ/ |
| Can a player break this card; do these cards chain into a runaway turn | `combo-probe` | v4-abuse.mjs, hand-built combo scenes (src/test/engine/v4/combos-*.test.js), members/nov25-hunt.mjs, v4-choice-check.mjs |
| Does every card do what it says; does it crash; do all setups work | `rules-checks` | check:v4, fire audit, log audit, fuzz, setup matrix, replay, records, GitHub verdict |
| Is this card good: clear, fun, interacts, fits its color (paper and play) | `quality-eval` | quality/paper-gate, ranking, play judges, blind A/B, set judges, idea pipeline, AI-player games, player agents |
| A new card against the one it replaces, same deals | `quality-eval` (trial section) | scripts/trial/trial.mjs |
| Do the bots play well; does skill win; how much is luck | `bot-checks` | v4-bot-duel.mjs, skill/, v4-normal-audit.mjs, v4-bot-choice-audit.mjs, v4-ai-audit.mjs |
| Does the screen freeze, lag, mislabel, or read wrong | `screen-probes` | v4-freeze, v4-rig, picky bot, v4-eyes, v4-peek, films; blind panels |
| Do the words match what the card does | `review-text`, `card-words` | the text review |
| How does a color or card feel; what to rework | `game-feel` | lenses, feel-probe.mjs |

`node scripts/eval.mjs` is the older six-check menu (rules, words, trial, balance, ladder, feel); design/notes/testing-setup.md says which checks go with which change (a price change, a new card, a batch, a 1.0 call). Still right; this skill adds the rest.

## References (read when)
- `references/tools.md`: every tool, one row each, with the question it answers, command, time, model and status. Read when choosing between two tools or looking for one by name.
- `references/history.md`: every past test and review folder by date, and where the big balance runs live. Read before claiming something was never tested, or when Cory asks "didn't we test that".
- `runs.md`: the run log, newest last. Read before a run (step 2); append after.
