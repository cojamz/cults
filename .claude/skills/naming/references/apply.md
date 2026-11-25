# Building a new name everywhere

Read when: step 7 of the naming skill. Code ids and art ids never change; only the shown name moves.

1. **Card file**: `src/engine/v4/content/<sphere>.js`, the second argument of `m('<id>', '<Name>', ...)`. Leave a comment with the old name and "named through .claude/skills/naming".
2. **Hard-coded log lines and prompts** naming the card: `grep -rn "'<Old>\|<Old>:\|s <Old>" src/engine/v4` (log lines like `${owner.name}'s Restockers: ...`, prompts like `Book Cookers: pick a color`, `toToken(ctx, owner, 1, 'Last Callers')`, `startLaunder(ctx, owner, 'Book Cookers')`, core.js prompts such as the round-start recruit).
3. **Tests that look for those lines**: `grep -rln "<Old>" src/test e2e` and change the expected text (cards-*.test.js, fire-audit, combos-*, member-use.test.jsx, format.test.js). Never weaken an assertion; only the name changes.
4. **Art maps**: `src/v4/art/index.js` (portrait borrow lists keyed by name), `src/v4/art/emojiMembers.js` (key is the name in kebab case, e.g. `'penny-pincher'`; pick an emoji for the new name).
5. **New picture**: draw it for the new name in `design/art/members/` (a new `newN.py` with `ALL=lambda:[('<Name>',fn())]`, from kit.py and the color's module), add it to `export.py`'s NEW7 map (name to id), and write it into `src/v4/art/members48/index.js` (re-export, or replace that id's px/pal in place). Look at it beside the old one at sc=5 before shipping. Members worth 2+ show that many people.
6. **design/names-approved.md**: add the new name, remove the old one, keep the list sorted. `src/test/engine/v4/names-theme.test.js` fails on any dealt name not listed.
7. **Rename map**: design/names/ if the color has one, and design/decisions.md (one line: was, now, card text, why).
8. **Run**: `npx vitest run src/test/engine/v4/names-theme.test.js` plus every test file step 3 touched, then `npm run check:v4:quick`, then ship with `scripts/v4-ship-ui.sh` or `scripts/v4-play.sh` (publishing is pre-approved).

Old comments and retired deck notes (src/v4/lab/deck10.js history, cull.js) keep the old name; they record history.
