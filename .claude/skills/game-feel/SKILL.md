---
name: game-feel
description: Think deeply about Cults' strategy and feel: judge a color, member, space or whole build for meaningful choices, viable paths, interaction, comeback, small-cult wins and no dominant color, and for tension, pacing, clarity and table-trackability; read bot sim data (pick rates, win lift by tier) for what's dead, dominant or a trap; turn it into recommendations for Cory. Self-improving: logs predictions against results and questions its own lenses. Use for any balance report, any "how does this feel / play", any ranking of what to rework, and before a balance recommendation reaches Cory.
argument-hint: <what to judge: "all colors, deck 10 and 15", a color id, a member, or a sim report path>
---

# Game feel and strategy lens

Win rates say who wins. This skill asks what it's like to play, and whether the choices are real. A card can sit at an even win rate and still be dead (nobody buys it), a trap (people buy it and lose), or a dull number (never changes a decision). A card can win too much and still be fine (round III bursts are meant to). Numbers point; the lens explains; Cory decides.

Chat threads load no skills: read this file by path, then the references it names. Speed rule from the brainstorm skill holds here too: the heavy reading is once per thread.

## 0. Before you look at any data: write predictions
Open [references/predictions.md](references/predictions.md). Under a new dated heading, write 5 to 10 predictions in one line each, with a confidence (low/med/high): "Greatest Hits stays the top space at all tiers (high)", "Blue still the weakest color on deck 15 (med)". Write them **before** reading the numbers. This is the self-improvement engine: if you only ever explain data after the fact, every lens looks right.

## 1. Load the real game (once per thread)
- `node .claude/skills/brainstorm/scripts/live-board.mjs <ids> --members` for the colors in question (ids: red, echo, thieves, market, purple, gold, silver, yellow, trading, plus benders for the greys). Live code wins over every doc.
- `grep -n "" design/decisions.md | tail -40`: the last calls. design/strategy.md for the economy (it lags; check against the live board).
- [references/lenses.md](references/lenses.md): the lenses, what each measures, its bar, and its known blind spots. Read it in full.
- The current lens version and the last few entries in [references/lens-log.md](references/lens-log.md).

## 2. Get the numbers (only what the job needs)
- Win and pick data: `scripts/v4-balance.mjs` runs (`DECK=10|15`, `LEVEL=normal|hard|veryhard`), summarized by `node scripts/v4-balance-report.mjs <runs.jsonl> --json=<tier>.json`. Normally the balance thread produces these; read theirs before running your own. Sims only when Cory asked or the coordinator relays his ask, and always name the deck.
- The lens read across tiers: `node .claude/skills/game-feel/scripts/lens.mjs --normal=n.json --hard=h.json --veryhard=v.json --label=deck10 --md=out.md`. It tags members DOMINANT / SLEEPER / TRAP / DEAD / SKILL+ / SKILL−, spaces STRONG / WEAK, colors too strong or weak, the small-cult share and contest sweeps.
- The feel probe: `DECK=10 LEVEL=normal node .claude/skills/game-feel/scripts/feel-probe.mjs 1 100`. About 1 second a game on Normal, 4 seats. It measures choice width, dead placements, how often a turn touches a rival, gain per placement by round, buy-step passes, whether the round I or round II leader runs away, and margins. Spaces that work through the buy (Spree, Recruit Twice) show a small gain there; read them from the buy lines and the win lift instead.

## 3. Apply the lenses
For each color (all of them when asked for "all colors", on each deck asked for), go through [references/lenses.md](references/lenses.md) in order and write one line per lens that has something to say: the finding, the number behind it (with its instrument: Normal, Hard, Very Hard bots), and the card text it's about. Skip lenses that say nothing; don't pad.

Then, for every flagged card, play one turn out in writing before you believe it (the brainstorm rule): 4 players, a named round, what the taker gets here versus the best other buy or space, by name and number. A bot number on an interaction card (Customs, Doorman, Snitch, anything "whenever a rival…") is not a finding until a played-out turn shows a real table would do the same: bots don't play around triggers the way people do.

Read the confounds before calling anything:
- **Price, not design.** A 9 to 11 cost card bought in 1% of games is usually a price signal (bot pick-rate note, Nov 1). Say "price" before "rework".
- **Member count.** Owners of many members win more; the report's lift already corrects for it. A "worth N members" card's lift is partly the count.
- **Few owners.** Under 30 owners in a tier: say "too few to read".
- **Bot blind spots.** Normal values every ongoing ability as about 2× its price fading with turns left, so it misjudges timing cards and round III bursts. SKILL+ (lift climbs with smarter bots) means the card rewards skill: protect it. SKILL− means only weak players lose to it: a feel risk for new tables, not a balance flaw.
- **The followers-only seat** is left out of everything but its own line; it has no target.

## 4. Turn findings into recommendations
Each recommendation Cory reads in the morning is one line he can answer by number:
- the card's **name** and its full printed text, every time;
- what you recommend, as a pick with your default in brackets: a price or follower number (the balance thread can ship those), or a text change, which is **only a recommendation**: never change what a card does without Cory;
- why, in one clause with the number and its instrument, and what a player does differently after.
- A member-count change that crosses the line between 1 and more than 1 needs a new name and art: say so on the line (Cory, Nov 1).
Rank by how much a player would feel it at the table, not by the size of the number. A dead card in every game's shop is felt more than a +6 lift on a round III space.

Feel findings come with table talk: what a player would say ("I never want that card", "he swept white again and nobody could stop it"), marked as Claude's read from AI players.

## 5. Score the predictions, then improve the lens (every use, not optional)
1. Back in [references/predictions.md](references/predictions.md), mark each prediction ✅ / ❌ / ↔ with the number that settled it. Write the hit rate.
2. For each miss, one line: which lens or assumption made the wrong call, and what you'd change.
3. In [references/lens-log.md](references/lens-log.md), log the use (date, job, hit rate, lens version) and any change to a lens, a threshold in lens.mjs, or a confound. Bump the lens version when a lens changes.
4. A lens whose calls missed twice in a row gets rewritten or retired, not patched.

## 6. Get out of local minima (every use; the heavy step every third use)
Every use, answer one question in the log: **what would make every lens here wrong at once?** (Example: if bots never block, every space lift is off in the same direction.)

Every third use (count in lens-log.md), or whenever a recommendation set looks like the last one:
- **Question one lens on purpose.** Pick the lens that has gone longest unchallenged. Argue the opposite in writing ("small cults winning 20% is a bad bar because…"). Keep it, change it, or drop it, and say why in the log.
- **Generate wild alternatives.** Run the brainstorm skill's gate 3 wide (12 seeds) on the single worst problem found, including at least 3 that change a rule rather than a number, and hand the brief to a general-purpose subagent for a fresh angle. Wild ideas are recommendations only, labeled as Claude's.
- **Compare against outside principles.** Walk [references/outside-principles.md](references/outside-principles.md) and note any principle Cults now breaks or any lens it suggests that we lack. Add a new lens if one keeps coming up.
- **Change the instrument.** If every read so far came from Normal bots, the next one leans on Hard or Very Hard, or on a played-out human turn, or on the playtest notes in /mnt/project-files/playtest-*/.

## 7. Deliver
Findings go where the job says (for the overnight balance pass: the recommendations section of /mnt/project-files/balance-0.99.md, coordinated with the balance thread; otherwise design/eval/feel/<date>-<topic>.md). Messages to Cory follow .claude/rules/working-with-cory.md and pass presend. Commit the logs and any lens change the same turn.
