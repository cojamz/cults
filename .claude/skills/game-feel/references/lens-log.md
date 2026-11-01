# Lens log

One entry per use: date, job, lens version, prediction hit rate, what changed and why. Count uses here; every third use runs the heavy anti-local-minima step (SKILL.md section 6).

## Versions
- v1.2 (2026-11-01, use 1): noise floor for before/after reads (lens.mjs --before), after round 6's small moves turned out to sit inside the spread of untouched cards. Feel probe reports the taker's place per space.
- v1.1 (2026-11-01, use 1): confounds added: member-count correction hides cheap bodies; feel probe can't see conversions, color changes, timing or buy spaces; artifacts read as a setup choice. Feel probe: round leaders keyed by round end (v1 mislabeled the setup snapshot as round I), dead = 1 or less (v1's 0 or less could never fire since every space gives +1). lens.mjs: DEAD and RARE read from the raw runs (v1 only saw cards with 30+ owners, so nothing could be DEAD).
- v1 (2026-11-01): lenses S1–S6, F1–F6; lens.mjs thresholds z 2, dead 3%, skill 8 points, color 8 points, 30 owners; feel probe v1.

## Uses
### Use 1 · 2026-11-01 · overnight 0.99 balance pass, all 8 colors, decks 10 and 15 · v1
- What would make every lens wrong at once: bots that never block and never play around triggers, so every space lift and every "whenever a rival…" card is off the same way. Countered by: reading Hard and Very Hard, and playing flagged turns out on paper.
- Interim (deck 10 Normal in): three tool bugs found and fixed before any finding went out (see v1.1). Hit rate below in predictions.md.
- Changes: v1.1 (first use; heavy step due at use 3, but run in part now because the skill is new: outside-principles walk).
