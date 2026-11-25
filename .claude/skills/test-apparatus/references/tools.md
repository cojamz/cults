# Every testing tool, one row each

Read when choosing a tool or looking one up by name. Update the row in the same commit as any change to the tool (rule: .claude/rules/testing.md, rule 7). `node .claude/skills/test-apparatus/scripts/drift.mjs` lists anything under scripts/ this page doesn't name.

Defaults unless a row says otherwise: deck 10 (`DECK=10`), By color contests (`CONTESTS=byColor`), 4 players, today's rules. Time is on this 4-CPU box. "Model" is who may run the turns around it: **code** = plain bot games, cost no tokens beyond the thread's own turns (run them on Sonnet or in a runner thread, never Fable); **Sonnet** = judge agents; **Opus** = only where Cory named it.

**Table warning (Nov 25):** scripts that build tables from `makeTables` or `DEFAULT_QUADRANTS` (v4-reshuffle-count.mjs, v4-sim.mjs, v4-thinker-tables.mjs; v4-fair-price.mjs was fixed in 3ed1127b) can deal the retired Blue and Green 1.0 colors, and some ignore DECK. Check the tables a run dealt before quoting it, or pass the colors explicitly.

Status: **live** (use it), **older twin** (works, prefer the named one), **legacy** (built for an older game or a finished question; read its results, don't run it without a reason).

## Balance (who wins) → skill `balance-run`, read with `game-feel`
| Tool | Question | Command | Time | Model | Status |
|---|---|---|---|---|---|
| scripts/balance/run.mjs | Whole game: win rates by color, member, space, cloak at Normal/Hard/Very Hard; dead, dominant, trap cards; catch-up; kingmaking; length; small-cult wins; abuse hunt; trust | `DECK=10 node scripts/balance/run.mjs --size=smoke\|fast\|deep --env='{"CONTESTS":"byColor"}' [--id=]` | smoke 5 min, fast ~1-1.5 h, deep overnight | code, then Sonnet critic + skeptic | live |
| scripts/balance/trust.mjs | How far to trust the bots: does one strong seat beat Normal tables | inside run.mjs | — | code | live |
| scripts/balance/extras.mjs | Catch-up, interaction, length, how winners won, which colors reward skill | inside run.mjs | — | code | live |
| scripts/v4-balance.mjs | The game batch every balance tool reads: one JSON line per game; PRICE=, ONLY=, MUST=, SEATS=, LEVEL=, CHOICES=, STRONGSEAT | `DECK=10 LEVEL=hard node scripts/v4-balance.mjs <first> <count> <out.jsonl>` | Normal ~1 s/game, Hard ~20 s | code | live |
| scripts/v4-balance-report.mjs | Win share per color/member/space with the expected share for that member count | `node scripts/v4-balance-report.mjs <files.jsonl> [--json=]` | seconds | code | live |
| scripts/v4-choice-report.mjs | Is each space/member a real choice, an auto-pick, filler or dead (from CHOICES= logs) | `node scripts/v4-choice-report.mjs <choices.jsonl> --md=` | seconds | code | live |
| .claude/skills/game-feel/scripts/lens.mjs | Tags cards DOMINANT/TRAP/DEAD/SLEEPER/SKILL across bot levels | `node .claude/skills/game-feel/scripts/lens.mjs --normal= --hard=` | seconds | code | live |
| .claude/skills/game-feel/scripts/feel-probe.mjs | How the game feels in numbers: open spaces per placement, forced placements, dead turns | `DECK=10 node …/feel-probe.mjs <first> <count>` | minutes | code | live |
| scripts/actions/run.mjs + play.mjs + report.mjs | Per space: taken how often, how early, what it earns, how takers do; variants on the same games | `DECK=10 node scripts/actions/run.mjs --games=200 --only=base,<variant>` | ~1 h / 200 games | code | live |
| scripts/runaway.mjs | Does the member leader after round I/II run away; do members change hands | `DECK=10 node scripts/runaway.mjs <games> <level> <colors>` | minutes | code | live |
| scripts/v4-big-followers.mjs | Does pure follower-buying win about 25% (15-30% band) | `node scripts/v4-big-followers.mjs 200 --level=hard` | ~30 min | code | live |
| scripts/v4-deck-runout.mjs | How often the shop runs dry by round | `DECK=ten node scripts/v4-deck-runout.mjs 1 200` | minutes | code | legacy (Oct 31, 50-card deck question) |
| scripts/v4-reshuffle-count.mjs | How often the discard pile shuffles back, by round | `DECK=10 node scripts/v4-reshuffle-count.mjs 60` | minutes | code | live |
| scripts/trial/probe-leftovers.mjs | Do players end holding resources that could have mattered | `DECK=10 CONTESTS=byColor LEVEL=hard node scripts/trial/probe-leftovers.mjs 1 40` | minutes | code | live |
| scripts/pick-runs.mjs | Which questions a player answers many times in a row | `node scripts/pick-runs.mjs 40` | minutes | code | live |
| scripts/v4-hard-batch.mjs | Hard games on random tables | — | — | code | older twin: v4-balance.mjs LEVEL=hard |
| scripts/v4-sim.mjs (`npm run sim:v4`) | Quick greedy-bot win read | `DECK=10 npm run sim:v4 -- 300 4` | minutes | code | older twin: v4-balance.mjs |
| scripts/v4-thinker-tables.mjs | All-Hard tables, seat and pick-position win rates | `node scripts/v4-thinker-tables.mjs 40` | ~1 h | code | older twin: v4-balance.mjs LEVEL=hard |
| scripts/v4-piles-compare.mjs | Members-as-piles variant: how much players reach into each other | `VARIANT=live\|A\|B DECK=10 node scripts/v4-piles-compare.mjs` | ~1 h | code | legacy (piles experiment, Nov 5) |
| scripts/spheres/<color>-sim/-thinker/-value/-actions.mjs | One color's balance with greedy/Hard bots (echo, market, purple, silver, thieves, trading, yellow) | `node scripts/spheres/market-sim.mjs 400` | minutes | code | legacy (Oct color reworks; use balance-run with ONLY/MUST) |

## Prices → skill `price-test`
| Tool | Question | Command | Time | Model | Status |
|---|---|---|---|---|---|
| scripts/v4-fair-price.mjs screen | Every member at once: does its price match its strength (prices jittered ±40%, demand curve and value fit, outlier list) | `DECK=10 node scripts/v4-fair-price.mjs screen --games=3000 --jitter=0.4 --out=` | ~1 h | code | live (Nov 25: deals the 10-card decks and grey test members; before, it dealt the full deck and crashed on them) |
| scripts/v4-fair-price.mjs sweep | A few cards: the price where owning it stops helping (same seed with and without, price at printed −6…+4) | `DECK=10 node scripts/v4-fair-price.mjs sweep <keys> --level=hard --deltas=0,2,4 --games=200` (keys, not names) | Hard forked at round II: ~70 s a game at --budget=60 (Nov 25); time 2 games first, then scale; long sweeps to the queue | code | live |
| scripts/v4-balance.mjs PRICE= | Whole-game effect of a new price (moves the card's round deck as the game would) | `PRICE="key=4/2" DECK=10 LEVEL=hard node scripts/v4-balance.mjs …` | per batch | code | live |
| scripts/v4-member-value.mjs | Followers one member is worth when handed to a seat at round II | `node scripts/v4-member-value.mjs 160 <keys> --level=hard` | ~30 min/card | code | live |
| scripts/econ/play.mjs, sweep.mjs, compare.mjs, report.mjs, mixes.mjs, pair-n12.mjs, sheets.mjs, table-rows.mjs, plus1-summary.mjs | Economy dials (ECON, MEMBER_UP, MEMBER_COLOR): how the game feels with richer/poorer prices, on the same deals | `DECK=10 node scripts/econ/sweep.mjs --games=60`, then `node scripts/econ/compare.mjs <dir> base <mix>` | ~1-2 h | code | live |
| scripts/trial/trial.mjs with a price env | A card at one price against its old price, same deals | see `quality-eval` trial section | 1-2 h | code | live |

## Combos and abuse ("crazy combo probers") → skill `combo-probe`
| Tool | Question | Command | Time | Model | Status |
|---|---|---|---|---|---|
| scripts/v4-abuse.mjs | Can a player trying hard break this card: same game with and without a private copy, the abuser tries every option | `DECK=10 node scripts/v4-abuse.mjs <key> --games=12 --rivals=hard --workers=2` → design/eval/abuse/<key>.md | ~10-20 min/card; only flagged cards | code | live |
| balance-run abuse stage | The same hunt across every card, ranked | inside `run.mjs --size=fast` | — | code | live |
| Hand-built combo scenes (src/test/engine/v4/combos-*.test.js, new-members-combos-nov25.test.js) | Do two named cards chain into a runaway or broken turn, through the real handlers | `npx vitest run src/test/engine/v4/combos-nov11.test.js` | seconds | code (written by the thread) | live: add one per new pair |
| scripts/members/nov25-hunt.mjs | New members in thousands of seeded games, every engine and color invariant after every move | `node scripts/members/nov25-hunt.mjs 1 500 mixed hard out.jsonl 240` | ~1 h / 1,000 | code | live (copy for the next batch) |
| scripts/v4-choice-check.mjs | One choice (by its prompt): do bots pick well, which option is best played out | `DECK=10 FORCE=<color> node scripts/v4-choice-check.mjs --prompt="Test Drive"` | ~20 min | code | live |
| scripts/skill/snatch-watch.mjs | Body Snatchers swaps, worth given vs taken | `DECK=10 node scripts/skill/snatch-watch.mjs --tables=12 --limit=1200 --out=` | ~30 min | code | legacy (Nov 12 question; copy the shape for any swap card) |

## Rules: does every card do what it says → skill `rules-checks`
| Tool | Question | Command | Time | Model | Status |
|---|---|---|---|---|---|
| scripts/v4-check.mjs (`npm run check:v4`) | The gate: all v4 tests, build, every browser e2e | `npm run check:v4 -- --commit <sha>`; `check:v4:quick -- --related <files>`; `--fast` skips e2e; `--firefox` | quick ~2 min, full ~15-30 min | code | live |
| scripts/v4-major-verdict.sh + v4-verdict.mjs | The full gate on GitHub after a major update | `bash scripts/v4-major-verdict.sh "<why>"`, then `node scripts/v4-verdict.mjs` | ~40 min off box | code | live |
| scripts/v4-fire-audit.mjs (+ fire-audit.test.js) | Every recruited member leaves a log line naming it (silent or dead cards) | `node scripts/v4-fire-audit.mjs 200` | ~5 min | code | live |
| scripts/v4-log-audit.mjs (+ log-audit.test.js) | Every change to a player is named in the log | `node scripts/v4-log-audit.mjs 40` | minutes | code | live |
| src/test/engine/v4/fuzz-tables.test.js, fuzz-bots, fuzz-random | Random tables and moves, every invariant after every move | `V4_FUZZ=heavy npx vitest run src/test/engine/v4/fuzz-tables.test.js` | minutes | code | live |
| scripts/v4-setup-matrix.mjs (+ setup-matrix.test.js, setup-combos.test.js) | Every setup option with every other | `node scripts/v4-setup-matrix.mjs` | ~10 min | code | live |
| scripts/v4-replay.mjs | Replay a saved game or record; first illegal move or crash | `node scripts/v4-replay.mjs <record.json>` | seconds | code | live |
| scripts/v4-records-refresh.mjs (`npm run records:refresh`) | Keep the kept records replaying on today's rules | `npm run records:refresh -- --check` | minutes | code | live |
| scripts/card-diff.mjs | Every card whose words, cost or worth changed between two commits | `node scripts/card-diff.mjs live HEAD` | seconds | code | live |
| scripts/ideas/fires.mjs, scripts/quality/fires.mjs | Did a candidate card act in quick games (bought but never acting = build bug) | `node scripts/ideas/fires.mjs <tags>` | minutes | code | live |
| scripts/ideas/lint.mjs | Hard rules a card's words can break (rival acts on your turn, randomness…) | `node scripts/ideas/lint.mjs --text "<card text>"` | seconds | code | live |
| scripts/live-decks.mjs | Every member a new game deals, by color, with text and price | `node scripts/live-decks.mjs [color]` | seconds | code | live |
| .claude/skills/brainstorm/scripts/live-board.mjs | A color's live spaces and members with full text | `node …/live-board.mjs <color> [--members]` | seconds | code | live |
| scripts/v4-bench.mjs | Engine speed, proving the same games were played | `node scripts/v4-bench.mjs` | minutes | code | live (engineering) |

## Card quality and feel → skill `quality-eval`
| Tool | Question | Command | Time | Model | Status |
|---|---|---|---|---|---|
| scripts/trial/trial.mjs | A new card against the card it replaces, same deals (bought how often, owners win how often, how winners won) | `node scripts/trial/trial.mjs new <name> --env='{"REPLACE<n>":"1"}'`, `work`, `report` | 1-2 h, shared across boxes | code | live |
| scripts/quality/paper-gate.mjs | Paper gate: candidates vs the old card, blind letters, anchors and a decoy | `batch`, then 3 gate-judge agents, then `batchscore` | ~30 min | Sonnet | live |
| scripts/quality/ranking.mjs (+ board.mjs, rank-round.sh, ranking-annotate.mjs) | Every live card ranked worst first on the rubric | 3 card-judge agents, then `node scripts/quality/ranking.mjs <dir>` | ~30 min | Sonnet | live |
| scripts/quality/sheets.mjs + play-score.mjs | Play judges: does the card play as written and feel good, from Hard-game decision sheets | `REPLACE7=1 node scripts/quality/sheets.mjs "<card>" --want 3`, 2 play-judge agents, `play-score.mjs` | ~1 h | Sonnet | live |
| scripts/quality/play-ab.mjs | Blind A/B: new vs old card in the same seeds, judges don't know which | `play-ab.mjs <new> <base> …`, judges, `play-ab.mjs score` | ~1 h | Sonnet | live |
| paper-gate.mjs setcheck/setscore (+ set-metrics.mjs) | The color as a whole set with each version in the slot | `setcheck <slot>`, 3 set-judge agents, `setscore` | ~30 min | Sonnet | live |
| scripts/quality/rubric-check.mjs, dashboard.mjs, lab-sheets.mjs, trim.mjs, lib.mjs | Does the rubric agree with play judges; the loop's steering page | see scripts/quality/README.md | — | code | live |
| scripts/ideas/ (pool-report, judges, feel-logs, tiers, page, keep-working.sh) + scripts/lib/pool-rotate.mjs | The idea pipeline: many candidate cards rotated into bot games, judged against the live cards' bar, tiered for Cory | see scripts/ideas/README.md | hours per pool | code + Sonnet judges | live |
| scripts/v4-expert.mjs | AI players play a real game; transcript and per-card feel ratings | `DECK=10 node scripts/v4-expert.mjs new <dir> --colors a,b,c,d` then one agent per seat | ~2 h a game | Sonnet (Opus only if Cory asks) | live |
| scripts/players/ (play, run-matrix, facts, merge-findings, moves-text, page, watch-data) | Player agents: experienced and new AI players, one model call per decision, feel notes, a watch page | `node scripts/players/run-matrix.mjs <games dir> <out> --parallel 4` | hours | Opus 5.5 (Cory, Nov 12) | live |
| scripts/v4-critique.mjs | A saved game written out decision by decision for one seat, to critique play | `node scripts/v4-critique.mjs <save.txt\|record.json> --seat <n> --out sheet.md` (or `botgame <out.txt> --seed N` for a sample) | seconds | code | live |
| scripts/econ/ (feel goals A-G) | How economy dials feel | see Prices | — | code | live |
| .claude/skills/eval-quadrant | Paper evaluator for whole quadrants (Oct 9) | — | — | — | legacy (quadrant era) |

## Bots and skill → skill `bot-checks`
| Tool | Question | Command | Time | Model | Status |
|---|---|---|---|---|---|
| scripts/v4-bot-duel.mjs + skill/duel-sum.mjs | One bot change (a skill principle) against today's strongest bot, seats swapped on every table | `DECK=10 node scripts/v4-bot-duel.mjs --a='{…}' --b='{…}' --tables=20 --limit=<s> --out=` | ~30 min / 20 tables | code | live |
| scripts/v4-bot-levels.mjs | Levels head to head | `node scripts/v4-bot-levels.mjs 100 hard,normal,normal,normal` | ~30 min | code | live (don't run level vs level as a result: testing.md rule 3) |
| scripts/skill/luck.mjs | How much of a game is the deal | `DECK=10 TODAY=1 node scripts/skill/luck.mjs --deals=40 --replays=6 --out=` | ~1 h | code | live |
| scripts/skill/margins.mjs | How close contests are at each round's end | `DECK=10 TODAY=1 node scripts/skill/margins.mjs --games=48 --limit=300 --out=` | ~30 min | code | live |
| scripts/v4-normal-audit.mjs | Normal's worst picks against the best option played out | `DECK=10 node scripts/v4-normal-audit.mjs --games=4` | ~20 min | code | live |
| scripts/v4-bot-choice-audit.mjs | Every Normal choice (target, color, member, trade) played out: what the old way cost | `DECK=10 node scripts/v4-bot-choice-audit.mjs 20` | ~30 min | code | live |
| scripts/v4-bot-strategy-audit.mjs | Hard's timing of On Use cards and other strategic slips | see header | ~1 h | code | live |
| scripts/v4-ai-audit.mjs | An AI player's misplays against the bots' best, with its reasoning | `node scripts/v4-ai-audit.mjs <game dir> --gap=3` | ~20 min | code | live |
| scripts/v4-hard-learn.mjs, v4-hard-tune.mjs, v4-hard-value.mjs | Hard bots that plan, learn from past games, tune, or learn position value | see headers | hours | code | legacy (Oct 30-31 bot research; results in design/eval/hard-*) |

## Screen, speed and look → skill `screen-probes`
| Tool | Question | Command | Time | Model | Status |
|---|---|---|---|---|---|
| scripts/v4-freeze.mjs | Does the page freeze (Cory's "laggy") through a whole game; Chrome 4x and Firefox | `node scripts/v4-freeze.mjs <url> <label>` (`V4_ENGINE=firefox`) | ~30-45 min | code | live: the lag bar |
| scripts/v4-rig.mjs, v4-rig-spread.mjs, v4-rig-work.mjs | Clicks, hovers, frames, idle cost, heap per round; build vs build | `node scripts/v4-rig-spread.mjs <url> <label> --runs=3 --parallel=2` | ~1 h | code | live (Chrome only) |
| scripts/v4-frames.mjs, v4-perf.mjs, v4-spin-deep.mjs, v4-spin-marks.mjs | Smoothness of shows; snappiness trace; wheel spin frames | see headers | minutes | code | live |
| scripts/picky/ (picky.mjs, film.mjs, film-sheets.mjs, before-after.mjs, checks, probes) | Picky UI bot: hovers every card and checks what's shown; films a game frame by frame | `node scripts/picky/picky.mjs --games 2` | ~4 min a game | code + Sonnet frame readers | live |
| scripts/v4-eyes.mjs | Screen-only browser for blind testers (screenshots, coordinates, timings) | `node scripts/v4-eyes.mjs start <url>` | — | testers on Sonnet | live |
| scripts/v4-peek.mjs | Freeze a build and screenshot a played game, laptop and phone | `node scripts/v4-peek.mjs freeze 1`, `shots <url> <dir>` | ~5 min | code | live |
| scripts/v4-playtest.mjs | One full local game through the screen hunting bugs | `node scripts/v4-playtest.mjs <name> <colors> PPBB Hard` | ~10 min | code | live |
| scripts/v4-gif.mjs, v4-deal-clip.mjs, v4-recruit-film.mjs, v4-sweet-film.mjs, v4-faces.mjs, v4-sounds.mjs | Clips, contact sheets and renders for Cory or a critic | see headers | minutes | code | live |
| scripts/design-pod/ (capture, front, measure, names, typescale) | Layout boxes and type scale of the game screen | `node scripts/design-pod/measure.mjs` | seconds | code | live |
| e2e/v4/*.mjs (+ known-red.json) | Browser gates, one per screen behavior | run by check:v4, or `node e2e/v4/<gate>.mjs` | minutes each | code | live |
| Blind panel agents (ui-critic, game-skeptic, boardgame-enthusiast, playtester) | Fresh eyes on the build | only when Cory asks | ~1 h | Sonnet | live |

## Running and bookkeeping
| Tool | What | Command |
|---|---|---|
| scripts/queue/queue.mjs | The shared bot-game queue; runner threads pull 5-game blocks | `node /mnt/project-files/queue/queue.mjs work --label="<thread>" --jobs=4` |
| scripts/eval.mjs | The six-check menu (rules, words, trial, balance, ladder, feel) | `node scripts/eval.mjs` |
| scripts/v4-retro.mjs | Gate wall times and failures, one row in design/eval/harness-metrics.md | `node scripts/v4-retro.mjs` |
| scripts/status.mjs, scripts/desk/ | Thread board and work desk | `node scripts/status.mjs set …` |
| scripts/lib/ (slots, procs, unit-cache, vitest-slot, deck-choice, box-id) | Shared plumbing for the above | — |
| .claude/skills/test-apparatus/scripts/log-run.mjs | Append a run to runs.md | see SKILL.md |
| .claude/skills/test-apparatus/scripts/card-key.mjs | A card's key, id, price and live/retired/pool status by name (names collide) | `node …/card-key.mjs "Tax Men"` |
| .claude/skills/plan-test-round/scripts/plan.mjs (+ dump-cards.mjs) | What changed between two commits, by kind and color, run-log hits, suggested depth | `node …/plan.mjs --since=<sha>` |
| .claude/skills/test-apparatus/scripts/drift.mjs | What the catalogue doesn't name yet | `node .claude/skills/test-apparatus/scripts/drift.mjs` |

## Not testing tools (named so drift stays quiet)
Build, ship and content scripts: v4-play.sh, v4-ship-ui.sh, v4-version.mjs, v4-rules-page.mjs, v4-src-hash.mjs, v4-node-stamp.mjs, v4-art-import.mjs, v4-portrait-import.mjs, v4-portrait4-import.mjs, names-rename.mjs, names-strings.mjs, names-emoji.mjs, harness-sync-main.sh, pages-wait.sh, forward-site/, members/trigger-icons-mock.cjs.
