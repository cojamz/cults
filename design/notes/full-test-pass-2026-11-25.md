# Full test pass on v0.99.804 (Nov 25) — plan

Cory, Nov 25 11:25pm: "let's run balance evaluations and then price testing on the game now with the new members. let's bring the full weight of our testing apparatus to bear on the latest version", then "and quality evals, crazy combo probers, etc. all the different tools we've built."

Everything: deck 10, By color contests, 4 players unless named. Bots and scripts are plain code; every judge agent runs on Sonnet (no Fable, no Opus tokens on judging). One box, 4 CPUs, so stages run in order. Check-in every 30 min.

Already done, not repeated: rule bugs (3,800 games + 2,000 clean, thread "Test the new members in play"); its rough read (Tax Men strong, Bargainer weak, Doorbusters no read) becomes the targets below.

| # | Tool | Question (Cory's words) | Control | One change | Answer we expect? | Time |
|---|------|-----|-----|-----|-----|-----|
| 0 | balance smoke | does the pipe run on the new game (not a result) | — | — | engineering check, not reported | 5 min |
| 1 | balance-run fast (Normal 4/3/2p, Hard 4p, trust, abuse, packet) | "balance evaluations": which colors, spaces, members, cloaks win too often or too rarely now | last full run, nov6-v606-deep (v0.99.606) | tonight's game (new members, no Gold, flat scalers, rule fixes) | no: ~15 members never measured; Gold's removal changes every table | ~1.5 h |
| 2 | fair-price screen (every member's price jittered ±40%, Normal) | "price testing": does each cost match its strength | each card at its printed price, same games | that card's price moved | no: new members have guessed prices | ~1 h |
| 3 | fair-price sweep, Hard, paired seeds | for the ~8 worst outliers of 1+2, plus Tax Men, Bargainer, Doorbusters (round III fork): the price where owning it stops helping | same seed without the card | the card offered at printed −4…+4 | no | ~2 h |
| 4 | abuse hunt (v4-abuse, Very Hard search) — the "crazy combo prober" | can a player trying hard break any new member | same seeds, abuser without the card | abuser holds the card | no: new members never abuse-tested | ~1.5 h |
| 5 | combo scenes (hand-built, like Nov 11's) | do new members chain into runaway turns with copy/give/steal spaces (Wallflower, Write-Off, Buyout, Doppelganger) | — | each pair | no | 30 min |
| 6 | quality paper ranking (3 card-judge agents, Sonnet) | "quality evals": do the new members clear the bar on paper (clear, fun, interacts) | rubric anchors + the color's live members | — | no | 30 min |
| 7 | play judges (2 play-judge agents, Sonnet) on Hard-game sheets | for the 4 cards flagged by 1–4: does it play the way the text promises and feel good | — | — | no | 1 h |
| 8 | balance feel step (critic + skeptic agents, Sonnet) | which findings survive a second look | — | — | — | 30 min |

Skipped, with why: skill ladder (stronger bot beats weaker: known; the trust stage in #1 covers how much skill matters); AI expert player games (~2 h of agent tokens per game; offer one after the report if the numbers raise a feel question); deep overnight run (only if #1 shows a split Normal and Hard disagree on).

Out: one page for Cory, phone-friendly, by color, each finding with full card text and a played turn, ending in a price list (cheaper / pricier / leave) for his call. Nothing ships without him except clear engine bugs.

Also (Cory: "catalogue that system... maybe into skills? needs to be living"): one skill, .claude/skills/test-apparatus/, listing every tool with the question it answers, its command, its cost, its last run and result link; each run appends its row, so it stays current.
