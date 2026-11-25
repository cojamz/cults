---
name: price-test
description: Find what a Cults member should cost, from bot games. Use for "price testing", "is X too cheap/too strong", a new member's first price, a price change Cory asked about, or the price list at the end of a balance report.
---
# Price test

Cory sets prices; this gives him the evidence. His standing rules: prices are educated guesses refined by human play, lean pricier, never below 2, lift a weak card with followers before cutting its price, and any price change moves everything that reads a price the same turn (.claude/rules/working-with-cory.md, "Spending and numbers").

## Checklist
1. **Get the card's key, not its name.** `node .claude/skills/test-apparatus/scripts/card-key.mjs "<name>"`. Names collide: "Tax Men" is the live `accomplice` (2 Magenta + 3 any) and a retired `bigtax`; the price tools take the first name match and don't warn. Code colors: thieves = Magenta, market = Blue, trading = White, echo = Green.
2. **Question and expected answer** in Cory's words (.claude/rules/testing.md): "Tax Men (2 Magenta + 3 any) feels too cheap; we expect it to stay ahead of its seat until about +2."
3. **Look it up**: `grep -i "<name>\|<key>" .claude/skills/test-apparatus/runs.md` and the last balance report's price list. A recent answer on unchanged cards is quoted, not re-run.
4. **Pick the path**:
   - **One or a few named cards** → skip the screen, go to the sweep (step 6).
   - **Every card, or new cards with guessed prices** → screen first (step 5), then sweep the outliers.
5. **Screen (every card at once, Normal bots, ~1 h at 3000 games)**: `node scripts/v4-fair-price.mjs screen --games=3000 --jitter=0.4 --workers=2 --out=<dir>/screen.json`. Every game moves every member's price up to 40% at random; the fit gives each card a fair price and prints an outlier list. It's a pointer to where to look, not an answer: Normal bots only.
6. **Sweep (named cards, Hard, paired)**: first time it: `node scripts/v4-fair-price.mjs sweep <key> --level=hard --games=2 --deltas=0`, then scale. Hard games take roughly 20-30 s each, so 200 games × 4 prices for one card is several CPU-hours: put long sweeps on the queue or a runner thread. The real run: `node scripts/v4-fair-price.mjs sweep <key,key> --level=hard --deltas=<list> --games=200 --out=<dir>/sweep.json`. Direction: "too cheap" → `--deltas=0,2,4`; "too strong or too pricey" → `--deltas=-4,-2,0`; unknown → `-4,-2,0,2,4`. Fair price = where the followers gained from owning it crosses 0. With 1-2 games it prints "fair ~–" (no crossing yet); that's normal.
7. **Confirm a new price in the whole game**: control `DECK=10 LEVEL=hard node scripts/v4-balance.mjs 1 200 base.jsonl`, change `PRICE="accomplice=3/3" DECK=10 LEVEL=hard node scripts/v4-balance.mjs 1 200 new.jsonl` (colored/any; key, never name). Read both with `node scripts/v4-balance-report.mjs <file> --json=<out>` and compare the card's buys and its owners' followers on the same games. A new price can move a card into another round's deck, as the game would.
8. **Economy-wide dials** (every price up or down, color share) are a different question: scripts/econ/ (`DECK=10 node scripts/econ/sweep.mjs --games=60`, then `node scripts/econ/compare.mjs <dir> base <mix>`); it leads with how the game feels.
9. **Log the run**: `node .claude/skills/test-apparatus/scripts/log-run.mjs --tool=fair-price-sweep --question="…" --control="same seed without the card" --change="card at printed +0/+2/+4" --result="…" --link=<dir>`.

## Reading and reporting
- Measure what moved on the same deals (followers, buys), never win rate alone: about 100 games move win rates 5-8 points by chance (Cory, Nov 11: "its objectively worse, we're just trying to measure how much worse").
- Under 30 owners: "too few to read".
- The report ends in a price list grouped by color: each member, its full text and printed price, the proposed price or follower change, and the number behind it in game words ("in the same 200 games, whoever bought it at 5 ended 3 followers ahead of the same seat without it"). One phone-friendly table (working-with-cory.md, "How messages read"); no words like "lift", "paired", "holders".
- Nothing changes a price without Cory, except under his "go with your gut" for fixes (log it in design/decisions.md).

## Pitfalls we hit
- Name collisions send the run to the wrong card (step 1).
- Bot pricing was over-trusted once: Cory, Oct 21, "let's not overdo it. we'll use humans to refine". Report a direction and a size, not a final number.
- Seats that only buy followers distort the other seats' numbers; balance batches count them only for that seat (Oct 29).
- Shared-folder appends broke result lines (Nov 7): write runs to local disk, copy to /mnt/project-files after.
- Price changes need the deck limits and named costs moved too (setup-combos.test.js checks); a bot test of a price doesn't do that for you.

## Example
Nov 12, design/eval/member-payback/2026-11-12-pays-for-itself.md (can each member pay for its own price); the fair-price funnel in scripts/v4-fair-price.mjs's header. Other tools: scripts/v4-member-value.mjs (a member handed over at round II), card trials with a price env (quality-eval). Full rows: .claude/skills/test-apparatus/references/tools.md, "Prices".
