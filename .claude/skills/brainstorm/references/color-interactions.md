# Color interactions: how two colors meet

Read this in full before any pitch about colors tying together: a color pair, the intersection table, "stitch the colors closer", or a review's "interacts with" line.

Why it matters: Cory wants every color tied to two or three others, and colors rotate between games, so a tie has to come from the game's shared pieces, not from one color reaching for another. Four Red × Blue lists missed this in one morning (Nov 7: "these aren't really blue and red interactions", "ties need to be intuitive", "you are not understanding the exercise"), and he asked for the skill to get "much better at thinking through color interactions".

Contents: 1 what an interaction is · 2 what it is not · 3 contests as the source · 4 the method per pair · 5 his pocket · 6 refused ideas · 7 a worked check

## 1. What Cory means by an interaction

**A moment two colors both cause, and a card that pays off on that moment, whoever caused it, without naming either color.**

His own example (Nov 8, on Martyrs "Whenever this member leaves your cult, gain followers equal to its cost."): "when a member leaves your cult… then it interacts with red. Inherently. Red and white both have stuff with members leaving cults." Red swaps and takes members; White discards its own after using them; Magenta can take one. Martyrs names none of them. It pays off in any game where any of them is present, and is still a plain card when none is.

His second example (Nov 7, White's direction): "you use stuff and then you get rid of it… you could do that with cards from… other colors." White's discard pays off on any color's On Recruit or On Use member. White touches every color through a shared piece (members with timed abilities), not through another color's verb.

So the unit of a color interaction is the **shared moment**, not the color:
- a member leaves a cult · a member joins a cult · a member goes from the shop to the discard pile
- a resource changes hands (stolen, given) · a pile gets big or empty
- a turn moves (skipped, taken in a row, the round's last minion)
- a space is taken twice (copied) · followers are gained outside a recruit
- a contest standing flips (someone passes or drops below a leader)

## 2. What it is not (each drew a no)

- **A generic shop or cult mechanic.** Sell a member back to the shop, lend a member until round end, buy a rival's member by paying them its cost, swap only with a bigger cult, the shop laid out in color rows. Cory, Nov 7: "these aren't really blue and red interactions. they already inherently interact." Any color could print them; they add a new rule, not a tie.
- **Restating the overlap the colors already have.** Red and Blue both work members and the shop; a card that does more of that same thing (Blue recruits two of one color, Red swaps a whole color) is the overlap, not a new tie. The bar is new or underused synergy: something that doesn't happen at the table today.
- **Naming or needing another color's mechanic.** Flatterers ("Whenever a rival copies one of your actions…"), Pickpockets ("Whenever a rival's turn is skipped…"): "you can never rely directly on the mechanics of another color being available… feels like really, really bad design" (verdicts 20). "The mechanics should synergize, but not overlap."
- **Tied to today's cards.** Cory asked for ties "not tied to today's actions or members": cards churn every day. Build from each color's contest and verbs (section 3), never from a live space or member's name.
- **Crossed or clever ties on contests.** "Ties go to whoever has more of the other color" → "no, ties need to be intuitive." A tie rule is the one a table would guess with no rulebook: split, or the plain obvious one. Never a tiebreak that reaches into a second color.
- **Anything already ruled out game-wide:** pile draws, randomness, hidden cards (verdicts 22); members that get cheaper (23); new tokens (21); actions with lasting effects (11).

## 3. Where interactions come from: the contests

Cory, Nov 7: contests are "kind of core to… what do you want to be doing and what's getting rewarded from your color." Design each color from its contest. The live By color contests (decisions.md, Nov 7 to 8; check the latest lines before pitching):

- **Cult shape.** Blue most members (more). White fewest members, 0 counts (fewer). Red most members of one color, grey counts as a color (deeper). Yellow most member colors (wider).
- **What you hold.** Magenta most resources (biggest pile). Silver fewest silver, 0 counts (least).
- **The board.** Purple: placed the round's last minion. Green: most minions on Green spaces.

Readings from the crossings page (design/notes/color-crossings-2026-11-07.html, Claude's):
- **Head-on fights:** Blue × White (more vs fewer members), Red × Yellow (one color deep vs many colors wide).
- **Taking can be giving:** Magenta taking a member helps the victim's White contest; Magenta taking silver helps Silver's fewest silver; every Silver gift fattens a rival for Magenta.
- **Purple touches every color that swings standings in one move** (Red swaps, Magenta steals, Silver gifts, White discards): they all want the last turn.
- **Gaps:** Red × Silver, Blue × Silver, Yellow × Purple barely touch. The discard pile is filled by Blue (from the shop) and White (from cults); nothing takes from it.

An interaction worth pitching usually sits where **one color's verb moves another color's contest count**, or where **two colors both cause the same moment** from section 1.

## 4. The method, in writing, for each pair

1. **Each color's contest and verbs**, one line each, from the live board (`node .claude/skills/brainstorm/scripts/live-board.mjs <a> <b>`), not from memory.
2. **The moments each one causes** (section 1 list). Circle the moments both cause, and the moments one causes that move the other's contest.
3. **What already happens there today.** If the circled moment already pays off at the table, a card that pays it again is restating. Look for the moment that happens and that nothing rewards yet (Martyrs before Martyrs).
4. **The card**, printed text, in shared-piece words only (members, resources, the shop, the discard pile, turns, followers, contests). It must read as one plain sentence a table gets first time.
5. **Two absence checks.** Play it in a game without color A, then without color B. It must still do something sensible in both (and in a game with neither, it may be quiet but never dead or confusing).
6. **Both directions.** One played turn where color A causes the moment and one where color B does, 4 players, named round, what the owner gets versus the best other choice.
7. **Who feels it** (a sting, a gift, a reason to block). Nothing means cut.
8. **The full pitching gates** (SKILL.md and .claude/rules/pitching.md): principles, choices played from both sides, ledger, card judging, public and certain.

A pair with no moment that survives step 3 gets "nothing new here" in the table, not a filler idea. A thin pair is a fine answer; a forced idea costs trust.

## 5. In Cory's pocket (don't pitch as new; may be named as already on hand)

- The two-for-one member swap, either way (give two for one, or one for two): "A two-for-one is interesting… let's keep that in our pocket" (Nov 7, Red × Blue).

## 6. Refused for this exercise (same shape counts as the same idea)

Red × Blue, Nov 7 (design/pitch-ledger.md, "Red × Blue, untapped ties"):
- List 2: swap with the discard pile; recruit every shop member of one color; recruits 1 cheaper per member of that color you hold (no: verdicts 23); give a member to a rival for followers equal to its cost.
- List 3, "not really blue and red interactions": sell a member back to the shop; lend a member until round end; buy a rival's member by paying them its cost; swap only with a bigger cult; shop in color rows.
- List 4, "bad… not understanding the exercise": crossed ties ("ties need to be intuitive"); Blue recruits twice of one color; Red swaps a whole color; a Blue clear paid in the deepest group's color.

Card review 2 (Nov 8, design/notes/card-review-2-2026-11-08.md) was refused in full: "these ideas suck. they don't feel original or elegant at alll." Never resurface its defaults: Long-Lost Cousins, Concerned Parents, Thrift Shoppers, the Old Money rework, the Allowance fix, Godparent and Guest of Honor for Recluse and Heiresses, Silver Cloak "+2 of any colors", High Tide in round II, Silver Barons, Kingmakers +2, Turf, Mugging, the Extortionist fix, Influencers, Leakers, the Pocket Watch fix, the Anarchist and Ghost fixes, Bulk Buyers. (Scouts and Latecomers are the exceptions he asked to see again.) After two nos on lists in a row he asked: redo from the contest and his starred cards, one color at a time.

The color map stitches (Nov 7): Flatterers and Pickpockets (named another color's mechanic).

## 7. Check the moment against the live members first

The first version of this file illustrated the method with "Whenever a member joins your cult from a rival's cult, +2 followers.", which is already the live Foster Parents "Whenever a member joins your cult from a rival's, +2 followers." Step 3 of the method exists for this: print the live members of every color (`live-board.mjs … --members`) and list which cards already pay off the moment before writing a card for it. A moment that is already rewarded needs a different payoff (a recruit instead of followers, a different owner), not the same one again.

Worked check, Blue × White and friends (batch 1, Nov 7): moment "a member leaves your cult". Already paid: Martyrs (the leaving card's owner, followers), Undertaker (your own discards, followers), Bargain Bin (your discards, a resource). Unpaid: refilling. Card: "Whenever one of your members leaves your cult on your turn, recruit an extra time this turn." "On your turn" keeps the extra recruit off a rival's turn. Without White it fires on Silver's member gifts and Red's swaps; without Silver or Red it still fires on White's discards.
