# Lens log

One entry per use: date, job, lens version, prediction hit rate, what changed and why. Count uses here; every third use runs the heavy anti-local-minima step (SKILL.md section 6).

## Versions
- v1.3 (2026-11-01, use 1): SKILL± needs the tier difference past 2 SE as well as 8 points; a 100-game Hard run flagged 7 members SKILL− on noise.
- v1.2 (2026-11-01, use 1): noise floor for before/after reads (lens.mjs --before), after round 6's small moves turned out to sit inside the spread of untouched cards. Feel probe reports the taker's place per space.
- v1.1 (2026-11-01, use 1): confounds added: member-count correction hides cheap bodies; feel probe can't see conversions, color changes, timing or buy spaces; artifacts read as a setup choice. Feel probe: round leaders keyed by round end (v1 mislabeled the setup snapshot as round I), dead = 1 or less (v1's 0 or less could never fire since every space gives +1). lens.mjs: DEAD and RARE read from the raw runs (v1 only saw cards with 30+ owners, so nothing could be DEAD).
- v1 (2026-11-01): lenses S1–S6, F1–F6; lens.mjs thresholds z 2, dead 3%, skill 8 points, color 8 points, 30 owners; feel probe v1.

## Uses
### Use 1 · 2026-11-01 · overnight 0.99 balance pass, all 8 colors, decks 10 and 15 · v1
- What would make every lens wrong at once: bots that never block and never play around triggers, so every space lift and every "whenever a rival…" card is off the same way. Countered by: reading Hard and Very Hard, and playing flagged turns out on paper.
- Final hit rate 1 of 10 clean (3 partial). Biggest misses: trusting the last run's headline (Greatest Hits would drop, White sweeps) and guessing deck effects on color instead of on the shop. Next use: predict from mechanisms, and add a shop-dilution lens (share of the row nobody buys) since it was the real deck-15 effect.
- Interim (deck 10 Normal in): three tool bugs found and fixed before any finding went out (see v1.1). Hit rate below in predictions.md.
- Changes: v1.1 (first use; heavy step due at use 3, but run in part now because the skill is new: outside-principles walk).
- Outside-principles walk (run early because the skill is new):
  - 1 interesting decisions: kept. Green's copy spaces swing with the table (real choice); Peek, Build Up, Savings, Harvest, Stash, Allowance are fixed numbers, six fuel spaces with no spread. That's one per color, as intended.
  - 2 feedback brakes: round I leader wins 36% at 4 seats, fine; at 2 seats 63%, weak brake. Gap logged in findings.
  - 3 blocking: every round I space is taken 2+ times a game at 4 seats; nothing goes untaken. Lacking a lens for "fought over" (how often the space a seat wanted was gone). Candidate lens S7 if it keeps coming up.
  - 4 counter to the counter: Greatest Hits has no counter but turn order; Agents ("Rivals can't copy your actions.") doesn't stop it. Logged.
  - 5 kingmaking: Party Gifts, Largesse and Help Yourself let the chooser pick who gets or loses. Bots can't show it. New confound noted in findings; a human-table question.
  - 7 lucky shop: not measured. Candidate: winners' round I buys vs everyone's. Next use.
  - 9 your fault, not the card's: Tryout and Lie Low empty turns; Recruit Twice with nothing to pay. All in findings.
  - 10 snowball the end: gain climbs 2.7 / 4.6 / 5.2. Kept.
  - 14 cost curve: Silver has four cards at 8 to 11, all rarely bought. Added to findings.
- What would make every lens wrong at once (answer, use 1): run-to-run noise. Two runs on the same seeds moved untouched cards by sd 4 points, so any single-run lift under 8 is a coin flip. Lens v1.2 now asks for the floor.
- 2026-11-01 4:30am, balance thread: scored batch-5 predictions (3 ✅, 4 ❌). Lens that helped: payoff timing (Greatest Hits copies pay round III amounts). Lens that misled: reading worth-N members by raw win share; added a step to subtract the count's share first.
