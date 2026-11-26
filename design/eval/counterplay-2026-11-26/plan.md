# Counterplay and real plans for the strongest bot (thread "Teach bots counterplay and real plans", Nov 26)

## Cory's words (Nov 26, on the review "Cults review: change, keep or cut")
- "I'm suspicious that your bots aren't like doing enough counterplay, and that's the issue."
- "it seems like the bots are trying to optimize for every single competition, every game, and that's just not how you should fucking play." (Bride and Groom: ignore the silver contest, let silver pile up from gifts, then double it.)
- Dominion: followers only is big money; "only followers plus a member from the early round should be winning".
- One player winning Went last every round, all four on 0 in a contest: "a problem with the other players", "bad counterplay".

## Tests (each: one change, today's Very Hard as the control, same deals, every table played twice with seats swapped)
1. **Counterplay** (`deny`): Very Hard also plays out the move the leading rival wants most right now (their best open space, or their best face-up member), even when its own rating ranks that move low. It takes it only if the played-out games say slowing the leader is worth more than its own best move. Question: does weighing the leader's best move make the strongest bot win more? Expected: a small gain; a one-game probe (seed 3, Hard) added the move 6 times and took it once.
2. **Skip contests you can't win** (`ease`, built Nov 12): a contest is worth the chance of winning it given the gap and the turns left, so a lead nobody can catch gets no more effort and a gap it can't close is let go. Nov 12 on the old game: 42 games, +2.3 ± 1.6 followers a seat (a maybe). Rerun on today's game (Gold gone, new members, 10-card deck).

Command: `DECK=10 TODAY=1 node scripts/v4-bot-duel.mjs --a='{"level":"veryhard","<flag>":true}' --b='{"level":"veryhard"}' --tables=30 --par=2 --limit=900`. Summary: `node scripts/skill/duel-sum.mjs <jsonl>`.

## After
Whichever wins becomes part of the strongest bot; then the three questions get rechecked with it: do members feel optional (does buying followers only still tie), does one player still sweep Went last, and do contests still end with everyone on 0.
Not tested: a habit tied to one card (Bride and Groom's pile-up) — that needs the card valued by what it will double, a separate change.
