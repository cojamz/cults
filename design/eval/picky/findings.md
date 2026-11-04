# Picky UI bot: running list

What the picky UI bot (scripts/picky/, README there) found on the live game, newest first, and what was done about
each. One line per finding: what a player sees, what's wrong, status. Each run's raw list and screenshots:
/mnt/project-files/picky/<date-time>/findings.md.

Status words: **fixed (version)**, **fixing**, **sent** (to the thread that owns it), **open** (ours, not started),
**Cory** (a question only he can answer), **by design** (with the reason; the check got an exception).

## 2026-11-04

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
