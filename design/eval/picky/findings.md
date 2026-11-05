# Picky UI bot: running list

What the picky UI bot (scripts/picky/, README there) found on the live game, newest first, and what was done about
each. One line per finding: what a player sees, what's wrong, status. Each run's raw list and screenshots:
/mnt/project-files/picky/<date-time>/findings.md.

Status words: **fixed (version)**, **fixing**, **sent** (to the thread that owns it), **open** (ours, not started),
**Cory** (a question only he can answer), **by design** (with the reason; the check got an exception).

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
