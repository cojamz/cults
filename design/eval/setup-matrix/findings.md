# Setup audit (Nov 3, live in v0.99.547)

Bots played one game for every combination of the setup options: players 2 to 6, member deck 10 or 15, swap card on or off, contests As printed or By color, shop Current / Grey piles / All piles, round III members in round II or III, Classic and a random table. 480 games with Normal bots and 480 with random legal moves, every rule checked after every move. Members look (emoji) is a display setting only; every member in both decks has its emoji.

Everything without piles worked. What broke, all in the two piles shops, and the fix now live:

- Grey piles: swapping one of your members for a pile's top copy (Anarchist, the swap card, Demote) put your member into the face-up row as an extra, so the row grew to 9 in round III. Now your member goes to the bottom of the deck when the row is full. All piles already did this.
- All piles: after a swap with a pile, a second Demote (from a copy) still offered the Party Crasher copy that had just gone back under its pile. Swaps with a pile now settle at once.
- Grey piles, 2 players: Scouts ("On Use, once per round: send any shop members to the bottom of the pile, then refill.") could send the same card again and again, because the short deck dealt it straight back. The game never ended. Now a card Scouts sent can't be picked again in the same use.
- Setup screen: with either piles shop, Blue is greyed in Custom ("Blue doesn't play with piles.") instead of failing only at Start; an online host's Start checks the shop too. With All piles, "Round III members join in" now reads "Round I: every pile is open from the start", since piles open from round I (Cory, Nov 1) and the choice changed nothing.

Kept as is (judgement call): Scouts stays one of the five Grey piles although Spoilsport replaced it in the shuffled deck. Cory picked it for the piles ("scouts good"), and ten Spoilsports would cancel most contests.

Rerun any time: node scripts/v4-setup-matrix.mjs (the test src/test/engine/v4/setup-matrix.test.js keeps a slice of it in every check).
