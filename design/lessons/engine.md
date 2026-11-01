# Lessons: engine (see README.md for the format)
- 2026-11-01: Silver's gift hooks looped over membersOf, so Caterer held as Silver's artifact never paid (found only by force-testing in the real UI). Fix: a color's own hook loop uses ctx.abilitiesOf (members plus artifact); core's eachMember already does.
