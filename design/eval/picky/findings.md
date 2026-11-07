# Picky UI bot: running list

What the picky UI bot (scripts/picky/, README there) found on the live game, newest first, and what was done about
each. One line per finding: what a player sees, what's wrong, status. Each run's raw list and screenshots:
/mnt/project-files/picky/<date-time>/findings.md.

Status words: **fixed (version)**, **fixing**, **sent** (to the thread that owns it), **open** (ours, not started),
**Cory** (a question only he can answer), **by design** (with the reason; the check got an exception).

## 2026-11-07 (morning run)
Run at 7:44am Eastern Nov 7 on v0.99.668 (2 games: red/echo/thieves/purple in pictures, market/trading/silver/yellow in
emoji; raw list /mnt/project-files/picky/2026-11-07-12-44/). The bot flagged nothing; the member sweep of 116 cards in
both looks was clean. The rest are by eye from the shots.

- **Out of Style's pick showed bare dots: "send which color to the discard pile?" over a silver dot, a yellow dot, a
  blue dot and "grey".** The choice counts shop members, but the screen showed resource dots with no names and no
  count of how many would go (each one is +1 blue). Grey and silver read as the same dot. Each choice is now "2 [blue
  member] blue", "2 [silver member] silver", with a test. **fixed (v0.99.669)**
- **The rival banner at round start and between turns names no cause.** "P2, round start ··· +1 yellow +1 silver",
  "P4, round start ··· +1 red +1 green from P3", "P3, between turns ··· −2 yellow +2 blue −1 silver +1 white": only
  the gains, never the member that made them, so a first-time player can't tell why P3 lost 2 yellow. **open** (for
  the coordinator: the top banner's owner)
- **A long turn headline wraps and pushes the round line down** ("Your turn — Out of Style: send which color to the
  discard pile?" on two lines, "pile?" alone, Undo placement pushed to the right edge). **open** (looks off)
- **P2's "took Cover" line says Sleep In twice** ("copied Sleep In: +1 green +5 purple · Sleep In: took the Goes Last
  token"). One name would do. **open** (wording)
- Seen again, already listed: the headline keeping "P2's turn ···" over the top spaces, the banner hiding the wheel's
  top spaces, "Turn skipped" pill over P3's resource counts, bar Members one above the member count (P4 "21 members",
  bar 22; P3 "15 members", bar 16), bare numbers on score parts, "+34 shuffled in for round II" over the shop's count,
  "Since your last turn" lines with no effect ("Round II · P2 Help Yourself", "P2 Sample"), emoji members shown as
  things (Line Cutters a car, Debt Collectors a phone, Old Money a bank, Magpie a chipmunk), white and silver dots alike
  in the emoji look, minions over middle-ring words, rim plaques opening no card (9 and 18 rests), "last turn in a row"
  in header and seat (by design).

## 2026-11-08
Run at 1:42am Eastern Nov 8 on v0.99.667 (2 games: red/echo/thieves/purple in pictures, market/trading/silver/yellow in
emoji; raw list /mnt/project-files/picky/2026-11-07-06-42/). The bot flagged 4 (Housewarming's number; the two below
already listed); the member sweep of 116 cards in both looks was clean. The rest are by eye from the shots.

- **Wheel: Housewarming says "free new-color member, up to 7"; its card says up to 5.** The Nov 8 cut moved the
  engine's cap to 4 + the price setting, but the wheel's line kept 6 + it. Now reads the same as the card, with a
  test. **fixed (v0.99.668)**
- **Shop: Picket Line and Foster Parents are a lone small figure on a blank card.** They took their old cards' small
  figures (Shift Crew's, Greeters') but not their scenes. Seven live members had this (also Copyist, Guest of Honor,
  Duty Collector, Jack-of-All-Trades, Seamstress); each now wears its retired card's scene until its own is drawn.
  Checked on the members page of v0.99.668 (after/foster-parents-v0.99.668.png). **fixed (v0.99.668)**
- **On your turn the headline still says the last rival's turn.** "P3's turn ···" with their story card up, while your
  seat says "your turn" and spare minions show; seen in 9 of 12 table shots, half a second after the table settled
  with nothing animating. With "2 turns in a row" beside it (round II) it reads as P3's two turns. **fixed (v0.99.670)**: once your turn to place comes
  and the table is still, the rival's finished banner folds (its lines are in "Since your last turn")
- **The top banner hides the wheel's top spaces on a rival's turn** (round I-III: "Steal 1, then safe from steals"
  and the space beside it are cut in half under the banner, the top-middle space hidden). Fine while it plays, but it
  stays up into your turn (above), when you want to read the wheel. **fixed (v0.99.670)**, same fix
- **"Turn skipped" pill sits over P3's resource counts** (round III, P3 holding the Goes Last token), hiding their
  green and magenta. **fixed (v0.99.670)**: the tag sits on the seat's bottom edge, left
- **Emoji look mixes pictures and emoji in the shop** (Downsizers, Patron Saints, Ballroom Dancers, Kingmakers show
  their pixel scenes beside Ghost's emoji and Old Money's bank). **fixed (v0.99.670)**: 26 dealt members got an emoji; a test checks every dealt member has one
- **Blue Cloak's question: "+1 of which color (grey is wild)?"** on a table with Silver: grey reads like silver, and
  nothing says it's your Ghost (a grey member) making you choose. **fixed (v0.99.670)**: "Blue Cloak: Ghost is grey, so +1 of any color: which?"
- Seen again, already listed: Impersonator's round III hover runs 169px off the bottom (long "Could choose" list),
  Promote's sheet "Member" label spills 2-3px, bar Members one above the member count (P4 "19 members", bar 20), bare
  numbers on score parts ("2", "4", "8", "11"), "recruiting followers" beside "Bought", emoji members shown as things
  (Recluse a house, Critic a monocle, Regular a coffee cup), minions over middle-ring words, rim plaques opening no card
  (9 and 18 rests).

## 2026-11-07
Run at 7:42pm Eastern Nov 6 on v0.99.662 (2 games: red/echo/thieves/purple in pictures, market/trading/silver/yellow in
emoji; raw list /mnt/project-files/picky/2026-11-07-00-42/). The bot flagged nothing; the member sweep of 116 cards in
both looks was clean. The rest are by eye from the shots.

- **Your hint shows under a rival's turn.** The headline read "P4's turn ···" (their story card in the middle) while
  the line under it said "…or use Anarchist or Party Crasher first" (both games, round III): a hint for you under
  their name. The hint now waits until the headline is yours again. **fixed (v0.99.663)**
- **The middle story card runs off the bottom of the screen** on a long rival turn (round III, P2 took Echo and copied
  three times: the card's last line "bought 1 follower (paid 1 magenta)" was cut at the screen's edge, shot
  table-g1-t08.png). **open** (for the coordinator: the animation thread's card)
- **A steal is told twice on the turn card.** "Took Help Yourself · +4 green +1 magenta · 4 green, 1 magenta from P4",
  and "You took Lie Low · +1 magenta +1 red · 1 red from P2": the stolen coins sit in the gain and again in the "from"
  line. A gate pins this form ("+3 gold", "3 gold from you"); one line ("+4 green +1 magenta from P4") would read
  better, but it is the turn card's owner's call after Cory's "no repeats". **open** (for the coordinator)
- **A rival's last turn card fades out over the wheel's words** (round I, "P4 took Reprise" half see-through over
  "Copy an action" and "Free member costing", text on text, shot table-g1-t01.png). Brief. **open** (looks off)
- Seen again, already listed: bar Members one above the member count (P4 "12 members", bar 13), bare numbers on score
  parts ("3", "5", "8", "4"), "recruiting followers" beside "Bought", "+37 shuffled in for round II" over the shop's
  count, "You had nothing to copy" after placing Reprise, emoji members shown as things (Old Money a bank, Critic a
  monocle, Window Dressers a window), rim plaques opening no card on 9 and 18 rests, "2 turns in a row" in header and
  seat (by design).

## 2026-11-06 (fourth run)
Run at 1:50pm Eastern Nov 6 on v0.99.652 (2 games: red/echo/thieves/purple in pictures, market/trading/silver/yellow in
emoji; raw list /mnt/project-files/picky/2026-11-06-18-50/). The bot flagged nothing; the member sweep of 116 cards in
both looks was clean. The rest are by eye from the shots.

- **"You has no minions left to place: Right Away does nothing."** The do-nothing note swapped the name for "You" but
  kept "has". Notes said to you now turn the verb ("You have", "You recruit"). **fixed (v0.99.656)**
- **Greatest Hits with nothing to copy: "None of their members has an On Recruit to copy."** "Their" named no one; the
  space copies your own members. Now "You have no member with an On Recruit to copy." **fixed (v0.99.656)**
- **Since your last turn: "P3 Build Up: +3 green (+3 green)".** The space's board words in brackets repeated the gain.
  The brackets now drop when the gain says the same. **fixed (v0.99.656)**
- **Round III, the magenta rim reads "most mag enta resources"** with a gap inside the word (shot table-g1-t12.png;
  round I's rim was whole). The rims are drawn as pictures letter by letter since today's lag work (rimPictures.js),
  so it is likely a letter placed off its spot there. **open** (for the coordinator: the lag thread's file)
- **Exchange: the header and the sheet say the same line** ("Exchange: turn up to 2 resources into 2 followers each"
  in the header, wrapped to two lines, and "Turn up to 2 resources into 2 followers each" on the sheet under it).
  **open** (looks off)
- **Emoji look: more members shown as things** (Regular a coffee cup, Trendsetters nail polish, Godparent a gift box,
  Snobs a peacock, Patroness a hat, Critic a monocle face). Same family as the earlier lists. **open** (for the
  coordinator)
- **Rim plaques: about 9 of 12 pointer rests a game opened no card** (the bot's own count, both games). Not seen by
  eye; may be the bot pointing at a rim during a turn. **open** (check)
- Gate already red without this run's changes: e2e/v4/hotseat.mjs ("after undo and a new placement the pill still says
  'Placement undone, place again'", and a 13px "This doesn't use up your recruit" off the type scale). Failed the same
  on the branch with these changes stashed. **open** (for the coordinator)
- Seen again, already listed: bar Members one above the member count (You "10 members", bar 11; "3 members", bar 4),
  bare numbers on score parts ("4", "4", "7", "7"), "recruiting followers" beside "Bought", a rival's line with "you
  +1 white · P4 +3 silver", "P2 took 1 silver" tag on your seat, white and silver dots alike in the emoji look,
  "2 turns in a row" in header and seat (by design).

## 2026-11-06 (third run)
Run at 7:42am Eastern Nov 6 on v0.99.641 (2 games: red/echo/thieves/purple in pictures, market/trading/silver/yellow in
emoji; raw list /mnt/project-files/picky/2026-11-06-12-42/). The bot flagged nothing; the member sweep of 117 cards in
both looks was clean. The rest are by eye from the shots.

- **A last note covers the results headline.** "Your Sore Loser: you won no contest; steals 5 followers from P2." sat
  over "P3 wins with 96 followers" as the results opened. On the results screen the note now shows at the foot.
  **fixed (v0.99.642)**
- **Peek's header says "then Done" while the button reads "Keep this order".** The button only says Done once you've
  moved a card. Now "then Done, or keep this order." **fixed (v0.99.642)**
- **Sore Loser's note reads "you won no contest; steals 5 followers"** (no one doing the stealing). Its log line is
  "<name>'s Sore Loser: <name> won no contest; steals …". **open** (wording)
- **Emoji look: more members shown as things** (Cashier a receipt, Guest of Honor a medal, Martyrs a candle,
  Jack-of-All-Trades tools, Dabblers a rainbow, Anarchist the Ⓐ sign, Toastmaster two glasses, Window Dressers a
  window, Caravan a camel, Magpie a chipmunk). Same family as the second run's list. **open** (for the coordinator)
- **Reprise placed with nothing to copy** (round I, your first minion): the wheel let you take it and only a note
  afterwards said "You had nothing to copy." Rule is fine; a first-timer gets no warning before placing. **open**
- Seen again, already listed: bar Members one above the member count (P3 "11 members", bar 12), bare numbers on
  score parts ("5", "9", "7"), minions over middle-ring words (Copy a rival member's On Recruit), white and silver dots
  alike in the emoji look, "2 turns in a row" in header and seat (by design).

## 2026-11-06 (second run)
Run at 1:42am Eastern Nov 6 on v0.99.640 (2 games: red/echo/thieves/purple in pictures, market/trading/silver/yellow in
emoji; raw list /mnt/project-files/picky/2026-11-06-06-42/). The bot flagged 3 spaces; the member sweep of 117 cards in
both looks was clean. The rest are by eye from the shots.

- **Wheel's named costs one behind the cards again.** After the Nov 5 11:08pm price (members ease back to + 1 color
  + 2 any), the engine's caps moved to 10 (Initiation), 7 (Shake Down) and 7 (Housewarming), but the wheel and short
  lines still said 9, 6 and 6, hand-typed. They now read the same price setting the rule text does, so the next price
  change moves them too. **fixed (v0.99.641)**
- **A passing note covers the paying sheet's header.** "Tryout: no shop member has an On Recruit effect." sat over the
  sheet for 5 followers, hiding "5 followers". While a sheet is open the note now shows at the foot of the screen.
  **fixed (v0.99.641)**
- **Emoji look: more members shown as things** (Window Shopper eyes, Brokers a chart, Seamstress a spool, Dyer a paint
  swatch, Duty Collector a tag, Heiresses a diamond, Tourist a camera, Extra Hand a hand), same family as Recluse's
  house and Old Money's bank above. **open** (looks off; for the coordinator, emoji members' owner)
- Seen again, already listed: a boxed "+1 follower" float over your white count, taken spaces losing their second line
  (Housewarming "+2 yellow"), bare numbers on narrow score parts ("4", "10"), bar "Members + leader 21" beside "20
  members".

## 2026-11-06
Run at 7:43pm Eastern Nov 5 on v0.99.602 (2 games: red/echo/thieves/purple in pictures, market/trading/silver/yellow in
emoji; raw list /mnt/project-files/picky/2026-11-06-00-43/). The bot flagged 3 spaces; the member sweep of 117 cards in
both looks was clean. The rest are by eye from the shots.

- **Wheel kept the old named costs after every member went up 1.** Initiation's space read "Free member costing 8 or
  less" (its card: 9 or less), Shake Down's "costing 5 or less" (card: 6), Housewarming's "up to 5" (card: up to 6).
  The emoji look's one-liners said 8 and 5 too, and Promote and Demote's pictures and one-liners still said "up to 2
  more/less" (card: up to 3, Cory Nov 5). All now match the cards. **fixed (v0.99.603)**
- **A boxed "+0" sits over a rival's silver count** (P2, round III, at the start of your turn), hiding the number. A
  gain of nothing shouldn't show. **open** (looks off)
- **Mannequin is a thing, not a person** (blue, "Blue members in the shop count as your members when contests are
  scored."). Cory, Nov 5: member names are people or groups. Name is the card owner's. **open** (for the coordinator)
- **Emoji look: Recluse shows a house, Old Money a bank building.** Reads as a place, not a member. **open** (looks off)
- Seen again, already listed: taken spaces lose their second line (Housewarming "+2"), minions over middle-ring words
  (Initiation), final-score sentence "recruiting followers" beside "Bought", bare numbers on narrow score parts, bar
  Members one above the member count, "Since your last turn" lines with no effect ("Round II · P2 New Blood").

## 2026-11-05 (fourth run)
Run at 1:44pm Eastern Nov 5 on v0.99.597 (2 games: red/echo/thieves/purple in pictures, market/trading/silver/yellow in
emoji; raw list /mnt/project-files/picky/2026-11-05-18-44/). The bot flagged nothing; the member sweep of 109 cards in
both looks was clean. The rest are by eye from the shots.

- **Exchange's sheet: "Turn up to 1 into 2 followers each".** Round I, the sheet never said what you turn in (any
  resource; the shot turns in a blue) and said "each" for one. Now "Turn up to 1 resource into 2 followers", and
  "Turn up to 2 resources into 2 followers each" in round II. **fixed (v0.99.598)**
- **Shake Down's pick: your seat grows the same empty dark box under your members** (round II, "P2 is shaking you
  down. Which member is at stake?"), hiding the "3 members" line. Same as Sample's pick below. **open** (looks off)
- **"Since your last turn" lines that say nothing happened:** "Round II · P3 Cover" and "Round II · P4 Farewell" carry
  no gain or effect, so a reader can't tell what the space did. **open** (wording)
- **Final score: an 85px part shows a bare "14"** (P2's and P3's Members parts) and a 60px one a bare "10" (your
  Prizes), while a wider one says "Members 18". "Members 14" doesn't fit; a shorter name for Members and Prizes would.
  **open** (looks off)
- Seen again, already listed: taken spaces lose their second line ("Steal 5 resources", "+9 silver"), minions over
  middle-ring words (Promote, Demote, "+3 silver, then turn silver into colors"), bar Members one above the member count.

## 2026-11-05 (third run)
Run at 7:43am Eastern Nov 5 on v0.99.593 (2 games: red/echo/thieves/purple in pictures, market/trading/silver/yellow in
emoji; raw list /mnt/project-files/picky/2026-11-05-12-43/). The bot flagged only the Promote sheet's "Member" label
(already listed); the member sweep of 119 cards in both looks was clean. The rest are by eye from the shots.

- **Final score sentence counted members three ways.** "P4 won by 6, … then by recruiting 12 members (+13)" sat beside
  "13 members" under P4's name and "Members 14" on the bar. The sentence now says "from members (+14)", the bar's own
  number. **fixed (v0.99.594)**
- **Demote's sheet offers rivals' members to give away** (round II, "Demote a member": P2's Line Cutters, Foster
  Parents, Deprogrammers, Cutpurse and P3's four lit beside your Cheerleaders). Cory's Nov 4 9:38pm call says Promote
  and Demote give away only your own member; a later commit (011ef83d, "reach any cult again … pending his confirm")
  put the old reach back with no line in decisions.md. **closed**: Cory reversed his own call (Nov 5, "i like it better as any"); now logged in decisions.md. The live reach is his.
- **Taken spaces lose their second line, so two read the same.** Round III with both taken: the outer "Copy an action
  with your minion" and the middle "Copy an action with no minion on it" both read "Copy an action"; "Steal 4 resources
  split among rivals" reads "Steal 4 resources"; "Copy previous action +1" drops its +1. **open** (wording)
- **"RED CLOAK" tag under your seat is covered by the next seat's "+2 followers" float** (round I, P4 gaining from
  Goes Last), while the float rises. Same family as the "P4 took 1 red" tag. **open** (looks off, brief)
- **Emoji look: lit white and silver dots on a seat are nearly the same pale circle** (P4: "4 white", "1 silver" in
  round III). Only the silver one's sheen tells them apart at seat size. **open** (looks off)

## 2026-11-05 (second run)
Run at 1:42am Eastern Nov 5 on v0.99.592 (2 games: red/echo/thieves/purple in pictures, market/trading/silver/yellow in
emoji; raw list /mnt/project-files/picky/2026-11-05-06-42/). The bot flagged 1 (Impersonator's hover off the screen,
already listed); the member sweep of 119 cards in both looks was clean. The rest are by eye from the shots.

- **Final score: wide "Won in play" part showed a bare number.** A part too narrow for "Won in play" now says "Play 22".
  **fixed (v0.99.593)**
- **"P4 took 1 red" tag sits on the corner of P4's seat**, over the seat's "+2 followers" badge (round II, after
  Promote). **open** (looks off)
- **Middle ring, round III: a placed minion covers the space's words** ("Rival pays or loses a member costing 5 or
  less" reads "costing … or less"; same on Copy a rival member's On Recruit, Free member costing 8 or less, Demote).
  The outer ring's taken spaces keep their words clear. **open** (looks off)
- **Final score sentence says "recruiting followers", the bar says "Bought".** ("P3 won by 2, mostly by recruiting
  followers (+27)" beside "Bought 27".) One name for one thing; the shop's tiles say "Recruit". **open** (wording)
- **Round III header and your seat both say "2 turns in a row"** (listed earlier): **by design**, the header and the
  seat say the same words on purpose (Cory, Nov 4, wanting to see how many stacked turns are left).

## 2026-11-05
Run at 7:42pm Eastern Nov 4 on v0.99.582 (2 games: red/echo/thieves/purple in pictures, market/trading/silver/yellow in
emoji; raw list /mnt/project-files/picky/2026-11-05-00-42/). The bot flagged 3; the rest are by eye from the shots.

- **Shake Down: "pay 3 (3 red)" says the number twice.** The headline read "P4 is taking your Deprogrammers: pay 3 (3
  red) to keep it?" and the button "Pay P4 3 ( 3● ) to keep Deprogrammers", with stray spaces inside the brackets. One
  color now reads "pay 3 red"; a mix keeps "4 (2 red, 2 gold)". **fixed (this run)**
- **Final score: "Members 11" shows as "Members 1".** The label-fits estimate didn't know the screen's width, so P2's
  last digit was cut. A label wider than its part now drops to the shorter name, then the number alone.
  **fixed (this run)**
- **Final score: wide parts show a bare number** ("22", "17", "18" on the "Won in play" part, about 100px wide): a
  first-time player can't tell what the number is without pointing at it. Now "Play 22". **fixed (v0.99.593)**
- **Round III header and your seat both say "2 turns in a row".** Said twice on one screen. **by design** (see Nov 5 second run)
- **Sample's pick: the chosen rival's seat grows an empty dark box under its members.** **open** (looks off)
- **Shop header during the round II deal: "+30 shuffled in for round II" sits over "0 of 7 affordable".** Only while
  cards fly in. **open** (looks off)
- **Promote sheet: shop names cut ("Second-")** and the "Member" label spills 2-3px (already listed). **open**
- **Members bar vs member count** (P4: 9 members, bar 10; every cult is off by one in game 2) is the open "12 members
  beside Members 13" item: the bar counts the leader's 1 plus card worth for everyone, not only the leader. **open**
- Gates already red without this run's changes (not ours; for the coordinator): src/test/v4/ui/turn-labels-truth.test.js
  ("P1 again (snake order)" where a gap message was expected), and e2e/v4/scoring.mjs (Chronicler fixture grants 1, the
  gate expects 8, since Chronicler's rework). **open**

## 2026-11-04
Run at 1:42pm Eastern on v0.99.574 (2 games: red/echo/thieves/purple in pictures, market/trading/silver/yellow in
emoji; raw list /mnt/project-files/picky/2026-11-04-18-42/). Fixes pushed in 39af1154; this run's box couldn't
publish, so they go live with the next site update.

- **Final score bars: thin parts still empty.** The earlier fix only labeled parts over 3.5% of the longest bar, so a
  2-follower part (your Members with 1 member, your Prizes) and P2's 3-follower Play were blank slivers 10-16px wide.
  Every part is now at least 22px and always shows its number. **fixed (39af1154, awaiting publish)**
- **Paying sheet: a color you pay all of shows a grey dashed ring over "0".** Paying 2 blue and 3 silver left two
  identical grey rings in Keeping: no way to tell which color is gone. The ring now wears its color.
  **fixed (39af1154, awaiting publish)**
- **Turn card: "+4 more" under "You took Toast +3 silver".** The folded lines read like a gain of 4. Now "and 4 more".
  **fixed (39af1154, awaiting publish)**
- **Rival's line "P3 Toast: you +3 silver · +9 silver".** The second gain has no name: it's P3's, but a reader has to
  work that out. **open**
- **Seat badge "−2" beside a 1-follower total** (P4, round II) reads at a glance as "−21". **open** (looks off)

- **Final score bars: a thin part is an empty box.** A 2 or 3 follower part (P3's Play, your Prizes) showed no number
  until pointed at. Now a thin part shows its number alone. **fixed (v0.99.565)**
- **Promote's sheet: the space card sits on top of the choices.** The card of the space being resolved waits on the
  wheel's hub, drawn above everything; Promote's big sheet covers the hub, so the card covered P2's members in the
  "For" rows. It now steps away while any choice sheet is up. **fixed (v0.99.567)**
- **Promote sheet: "Member" label spills 2-3px past its column.** Tiny. **open**
- **Wheel: a resource dot hugs the number before it** ("up to 10 ●" reads close to "18" at 1x zoom). Check at the
  screen size Cory plays at before touching. **open**
- **Final score: "12 members" beside "Members 13".** The bar counts 1 for the leader (its hover says so), the label
  under the name counts cards. Reads as a mismatch at a glance. **open** (wording only; no rule changes)
- **Emoji look: one-line rule over the full rule** (Big Tent, Deprogrammers, Body Snatchers and every emoji card), and
  Timekeeper's "per 3 purple" line. Fixed by the "Remove emoji symbols from member cards" thread; the bot's sweep of
  all 117 members in both looks is clean on v0.99.563. **fixed (v0.99.563)**
- **Two-trigger cards print their effect twice** (Host, Roadie, Cutpurse, Extortionist: "On Recruit: …" and
  "Round Start: …" with the same words). **by design**: one line per trigger is how the card text says it does both.

## First-time readers' list (98 items, design/eval/picky/first-time-readers-2026-11-04.md): status Nov 4, 3:15pm Eastern
- Bugs B1-B27: fixed in v0.99.574 and v0.99.576, except B19 (not reproduced), B21 (only on small boards; numeral now scales), B10's
  "pairs only your own members" (open question for Cory in decisions.md), B17's hover over the header (left).
- Wording W1-W42: fixed in v0.99.579 and v0.99.580, except W24 and W37 (Cory's logged calls), W32 (card text: his words),
  W9's heading names (his mockup 13 call), W19's minion position, W22's pre-filled Getting row, W33's narrow bars, W40's
  "use Creditor first" (not reproduced).
- Rulebook R1-R8: pushed. DESIGN items (D-list): not started; Cory's.
- Open from the fix passes: the cloak popup shows the artifact's picture (Cory, Nov 1: "don't use the artifact pictures");
  Impersonator's round III hover runs off the screen bottom (long "Could choose" list).
- Next run: `node scripts/picky/picky.mjs --album` then fresh reader agents (scripts/picky/README.md); paused for the token budget.
