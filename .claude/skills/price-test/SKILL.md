---
name: price-test
description: Find what a Cults member should cost, from bot games. Use for "price testing", "is X too cheap/too strong", a new member's first price, a price change Cory asked about, or the price list at the end of a balance report.
---
# Price test

Cory sets prices; this gives him the evidence. His standing rules: prices are educated guesses refined by human play, lean pricier, never below 2, lift a weak card with followers before cutting its price, and any price change moves everything that reads a price the same turn (.claude/rules/working-with-cory.md, "Spending and numbers").

## Checklist
1. **Question and expected answer** in Cory's words (.claude/rules/testing.md). "Is Tax Men too cheap at 3 red + 2 any?" Expect a direction before running.
2. **Look it up**: `grep -i <card> .claude/skills/test-apparatus/runs.md` and the last balance run's price list. Use a recent answer if the card and its neighbors haven't changed.
3. **Screen first, every card at once** (cheap, Normal bots, ~1 h): `node scripts/v4-fair-price.mjs screen --games=3000 --jitter=0.4 --out=<dir>/screen.json`. Every game moves every member's price ±40% at random; the fit gives each card a demand curve and a fair price, and lists outliers. Why first: it finds which 5-10 cards deserve the expensive test.
4. **Sweep the outliers at Hard, paired** (~2 h for 8 cards): `node scripts/v4-fair-price.mjs sweep <key,key> --level=hard --deltas=-4,-2,0,2,4 --games=200 --out=<dir>/sweep.json`. Same seed forked with and without a private copy of the card at each price; fair price = where owning it stops gaining followers. Add Cory's named cards even if the screen didn't flag them.
5. **Confirm one new price in the whole game** when the sweep says move it: `PRICE="<key>=<colored>/<any>" DECK=10 LEVEL=hard node scripts/v4-balance.mjs 1 200 <out>.jsonl` against the same games without PRICE, read with `node scripts/v4-balance-report.mjs`. A new price can move a card into another round's deck, as the game would.
6. **Economy-wide dials** (every price up or down, color share) are a different question: scripts/econ/ (`sweep.mjs`, then `compare.mjs <dir> base <mix>`), same deals, leads with how the game feels.
7. **Log the run** (`node .claude/skills/test-apparatus/scripts/log-run.mjs …`).

## Reading and reporting
- Measure what moved on the same deals (followers, buys, wins paired by game), never win rate alone: about 100 games move win rates 5-8 points by chance.
- Under 30 owners: "too few to read".
- The report ends in a price list grouped by color: each member, its full text and printed price, the proposed price or follower change, the number behind it in game words ("in the same 200 games, whoever bought it at 5 ended 3 followers ahead of the same seat without it"). One phone-friendly table (working-with-cory.md, "How messages read").
- Nothing changes a price without Cory, except under his "go with your gut" for fixes (log it in design/decisions.md).

## Related tools
`scripts/v4-member-value.mjs` (what one member is worth handed over at round II), card trials with a price env (`quality-eval`, trial section), design/eval/member-payback (does each member pay for its own price, Nov 12). Full rows: .claude/skills/test-apparatus/references/tools.md, "Prices".
