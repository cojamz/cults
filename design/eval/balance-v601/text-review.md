# Text vs code review: Nov 5 new members (live v0.99.601, worktree /home/user/w-632137e0)

Read-only. Prices "as seen" = card-file s+1 in color, w+1 any (content/index.js addWild, EXTRA_WILD 2, COLOR_SHIFT 1). Deck check run against content/cull.js CUT + CUT10 with rules.deck 10.

## Wrong

1. **Downsizers** (white) is near dead: text "cast out one of your members costing 3 or less"; code `cost = d.s + d.w` (trading.js:864, the as-seen price) `<= 3` (trading.js:554). After the Nov 5 +1, every colored member in the 10-card decks costs 4 or more as seen; the only dealt member at 3 or less is grey Frontrunner (0+3). The 4:19pm call "for named costs, yes go up by 1" moved Guest of Honor, Ushers, Converts and Snobs 3 -> 4, but Downsizers (bot-tested Nov 4 at "3 or less" on the old prices) went live at 6:11pm still saying 3. Text and code agree; the number is the bug. Cory approved the text with "3" in it, so this is a question for him (4 or less reaches Night Traders, Last-Minute Shopper, Window Dressers, Cashier, Critic, Regular, Toastmaster, Guest of Honor, Accomplice, Seat Filler and others).
2. **Matchmaker** ignores grey: decisions.md 1778 (Nov 4) "grey counts as a color ... as New Blood, Matchmaker and Housewarming read it"; code `matchmaker()` calls `newColor(ctx, owner, member)` with no `{ grey: true }` (yellow.js:112), so `pool` leaves out 'guest' (yellow.js:66) and a first grey member pays nothing. Guest Book and New Blood pass `{ grey: true }` (yellow.js:55, :74). Also: the rulebook line 1778 says was printed ("Where a card says 'a color none of your members have', grey counts as a color.") is not in design/rulebook.md or src/v4/glossary.js.

## Hidden

3. **Power Shoppers** pays at Round End when it shouldn't: text "your second member in a turn"; code keys the turn as `${round}:${turns.length}` (market.js:764). A Round End recruit (Last-Minute Shopper) keeps the last turn's key, so if the owner placed the round's last minion and recruited one member on that turn, the Last-Minute Shopper recruit counts as the "second member in a turn": +2 followers off-turn. (core.js:1006 already says a Round End recruit is not "this turn" for Gather etc.)
4. **Counterfeiters** can't target a rival with Bodyguards: text "turn all of a rival's resources into one color"; code `touchable = canSteal(p, o, 'change')` (yellow.js:118), and Bodyguards' `guardSteal: kind !== 'swap'` (thieves.js:737) blocks 'change'. Bodyguards prints only "Rivals can't steal from you." Same for Leveler/Puppeteers; pre-existing rule, but Counterfeiters is new to the deck and a table would let it through.
5. **Heist Crew** price: decisions.md 1867 (Cory 10:00pm UTC) "6 magenta + 2 any"; code `m('hoardbreaker', 'Heist Crew', 5, 2, ...)` = 6 magenta + 3 any as seen (live board shows 6 + 3). The "6 + 2" was the pre-1:49pm seen price, and the 6:25pm price-correction list (which re-fixes every other new member to the number said to Cory) leaves Heist Crew out. Every other new member's price matches its latest line: Power Shoppers 4+3, Last-Minute Shopper 3+1, Night Manager 2+3, Ballroom Dancers 4+3, Kingmakers 3+2, Patron Saints 4+3, Downsizers 3+2, Night Traders 3+1, Counterfeiters 3+2. Snitch (3+2) and Matchmaker (4+3) have no Nov 5 price line; they carry the global +1.

## Unclear

6. **Ballroom Dancers**: text "+2 followers per minion on Silver spaces"; code `onSilver` counts every player's minions, squatters included (silver.js:109-115). Patron Saints prints "anyone's" for the same kind of count; Ballroom doesn't, so a table may count only its owner's minions.
7. **Snitch**: text "they lose 1 follower"; code skips only when the thief's total is 0 and then does `info.thief.bonus -= 1` (thieves.js:862-863), so a thief whose followers are all from members drops below what their members are worth (loose followers go negative). The rulebook says a member's followers "can't be stolen"; a table may read "lose" the same way. Edge case, worth one line in the rules.
8. **Power Shoppers**: "second member" counts recruit events (`card.shopN += 1`, market.js:766), not member weight, so recruiting one "counts as 2" member is your first member, not your second. Plain reading probably agrees, but nothing says so.

## Style / stale faces

9. The members-page lab view at ?deck10 (src/v4/lab/deck10.js:105, :264) still marks **Snitch** and **Matchmaker** `cut: true` with Oct 31 reasons; both are now dealt. Marked as a proposal, not a rule, but it contradicts the live deck.
10. Emoji alt-look shorts exist only for Snitch ("A rival steals from you: they −1 follower") and Matchmaker ("First member of a new color: +2 in colors you choose, +1 follower"); both match their rules. The other 11 new members have no emoji entry and show their picture and full text (fine). Every other hover/panel line reads `def.text` directly, so it can't drift. Ten use a stand-in picture from the card they replaced (art/index.js:172-179), which is expected until their own art is drawn.

## Clean (code does what the text says; dealt in the 10-card deck; replaced card cut)

- **Last-Minute Shopper** (blue, round I, in for Shopaholics): +2 blue then an optional paid recruit at onAllPlaced, before contests (market.js:959); nothing affordable logs and skips. Clean.
- **Night Manager** (purple, in for Early Birds): onRoundEnd, `lastPlaced.pid === owner.id` this round, +1 per purple member counting worth-N as N (purple.js:884-892). Clean.
- **Kingmakers** (silver): 3 silver from the bank to a chosen rival (auto with one rival), +3 followers, before contests (silver.js:866-876, :378-384). Clean.
- **Patron Saints** (silver): every player's silver members, counts-as-2 as 2, before contests (silver.js:879-885), as the Nov 5 6:00pm line says. Clean.
- **Heist Crew** (magenta, in for Grifter): rules match (once per game, rival's biggest pile, half rounded down, use refunded when no pile of 2+); Desperado/Sticky Fingers add as their own texts say. Clean apart from finding 5.
- **Night Traders** (yellow, in for Meddler): up to 3 one-for-one swaps of your own before contests (yellow.js:584-592). Clean.
- **Snitch** (magenta, in for Cutpurse), **Power Shoppers** (blue, in for Doormen), **Ballroom Dancers**, **Counterfeiters** (in for Drifters), **Downsizers** (in for Raiders), **Matchmaker** (in for Gardeners): dealt, replaced card cut; text findings above.

Deck counts on the 10-card decks: blue 10, purple 10, yellow 10, but silver 11, white 11, magenta 11. The 11s predate Nov 5 (same counts at 764a5709), so the swaps were one-for-one; the rulebook's "10 members per color" is not true for those three.
