# Play judges on the new members (live build v0.99.807, Hard bots with pushback, 3 games each)

## Judge 2, batch A
- Lackey: in a cult in only 1 of 18 games. Fired once, +2 green, unseen in the preview, nobody noticed. Mostly an accidental +2.
- Bargainer: clear text; paid +3 at game end twice, never a moment, never changed standings; rivals only touched it by stealing it.
- Night Porter: fired in 1 of 3 games (+4 total); preview showed +2 on every option so it never changed a pick. One bot misplay (took Lord of the Manor after it).
- Shirker: fired every game (+3, +5, +6 purple); best case turned Keep Going into +10 purple. Rivals swapped it away often. Pays purple, never moved standings.

## Judge 1, batch A (agrees with judge 2 on all four; no card built wrong)
- Lackey: clear, built right, fires rarely for a small +2 green nobody sees.
- Bargainer: clear, small end-of-game payoff (+3), felt mostly when rivals steal or swap it.
- Night Porter: works as printed, needs a deliberate plan to go last; ~+4 when it fires vs +10 from buying 10 followers; 2 of 3 sheets bot misplays.
- Shirker: visible purple bump on a few turns, shaped picks but never a moment.

## Batch B (both judges agree on every card)
- Chapman: a steady +2 each time a member of yours is swapped; +6 to +14 a game, best with Promote and Meddler (a 106 to 92 win). Never a moment; rivals hand it points without noticing. Small oddity: no +2 when Chapman itself is swapped away.
- Innkeeper: fires only when a member goes back to the shop, in practice Borrow loans at round end; +3 red once or twice a game, once never in 225 moves. Nobody felt it. Built right.
- Wet Nurse: one real engine (8 fires, +24 red, an 80 to 36 win, choosing among tied cheapest cards); otherwise +6. Not felt by the table. Bug found and fixed: it paid +3 when Buy Secondhand took it from the discard pile (fix fc24b36).
- Beggar: clear but tiny; 0 to 5 followers a game (once the margin of a 62 to 61 win). Rivals feed it by playing silver spaces and never react. Built right.
- Cutthroats: the most felt new member. Pilfer twice took 5 and then 3 followers from a rival, an 8-follower swing that won 74 to 70. The "may take followers instead" is never a choice: followers are always better. One bot misplay (swapped it away right after it worked).

## Judge 1, batch C (no card built wrong)
- Hoarder: nobody bought it on purpose; passed around by swaps and gifts; fired 2 of 3 games for +3, a rider on a hoard already chasing Most resources (+10, +6). Nobody reacted.
- Evictors: the most felt by the table. Discarded a rival's 8-cost and 7-cost member; but the victim gains the same white, and in one game the victim won 95 after it. One bot misplay (never used it, sold it for +10).
- Mendicant: steady +2 to +4 a round for a spend-down plan; also resold for 6 by Bid Farewell. Barely felt.
- Drifters: easy to read; only matters for Most member colors, never decided a game. Open question (not Drifters' text): Welcome Strangers paid "+3 yellow for a new color" before Drifters' color was chosen.
- Judge 2 agrees on all four (no card built wrong). Hoarder: spending down is the better play, since 10 resources buy 10 followers. Evictors: one chain turn (sold through Dowry-Givers for +10, reused by Old Guard). Drifters: changed no outcome in three games.

## Judge 1, batch D (no card built wrong)
- Pilgrims: +2 to +3 at round end; never beat the best other option that turn (Count Heads +6, a contest +6 or +10); nobody reacted. One bot misplay (paid 7 for one +2 in round III when 5 followers for 5 was on offer).
- Spice Merchant: +2 or +3 on recruit and +3 or +4 at the next round start; about 5 to 7 followers for 7 to 9 resources plus a member. Clear, modest, rivals never noticed. In two wins (109 to 91, 91 to 73).
- Jester: value depends entirely on the wheel. With Yellow's Most member colors out it tied 5 colors and the holder won 88 to 87; with nothing reading colors it did nothing. One bot misplay (bought it with no color contest out).

## Gleaner (both judges agree, built right)
- Clear but quiet: widens recruit choices from the discard pile, never a moment, no rival noticed. Best case 4 discard recruits in one game (holder still finished behind). Adds nothing when Blue's Salvage or Bring Back already reach the discard pile. One bot misplay (took it as a free recruit with nothing left to spend).
- Judge 2, batch D agrees (all built right). Pilgrims' best round +3 vs Hold a Fair +4 or +5 and Throw Coins +7; moved none of three results. Spice Merchant modest, unseen. Jester: text says "Counts as a member of every color" but Most member colors counts it as one color (Cory's Nov 7 call: "I think just counts as one") — the card text and the contest disagree; a reader is surprised.
