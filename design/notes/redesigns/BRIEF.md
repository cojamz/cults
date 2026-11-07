# Redesign brief, per color (Nov 7, 10:40pm Eastern)

Cory's goal (Nov 7): go action by action and member by member, propose stronger versions that tie the colors closer together, "tweaks can be redesigns", "zhuzh up the creativity", and don't let cards "lie that could be redone". Don't overweight color ties; well-rounded.

Inputs (repo /home/user/cults):
- The color's laid-out cards: design/eval/card-judging/colors/<id>.json (bands, best turn, biggest case, overlaps, fresh-start ideas, Cory's notes).
- How Cory says yes and no: design/eval/card-judging/taste-guide.md. Readers have been far easier to please than him; be as hard as he is.
- Method: design/notes/card-judging-v2-2026-11-07.md plus design/notes/card-judging-v2-fixes-2026-11-07.md.
- Pitch rules: .claude/rules/pitching.md, .claude/skills/brainstorm/SKILL.md, references/cheatsheet.md and references/verdicts.md, design/pitch-ledger.md (never re-pitch a refused shape).
- Live cards: `node .claude/skills/brainstorm/scripts/live-board.mjs <id> --members`.

Hard rules: no card needs another color in the game; colors meet through shared pieces (resources, members, shop, discard pile, turn order, followers, contests) and don't do each other's job; no new tokens (the Goes Last token is the only one and only Purple moves it); a space does everything the moment it's taken; nobody decides on another player's turn; a cast-out member goes to the discard pile; contest cards wait for a future contests color; member names are people or groups, never places or things; no internal words.

Do: pick the color's 3 to 5 weakest or most overlapping cards (spaces and members). For each, 2 or 3 candidate replacements, plus "keep the current card" as an option. For every candidate, in writing: full printed text (with price or round), one played 4-player turn with numbers vs the best other option, both sides of any choice, who at the table feels it, its biggest case with numbers, the shared piece it ties through, ledger check. Cut any candidate that fails; send only survivors. Then pick your recommended one per slot, or "keep" if nothing clearly beats the current card.

Write design/notes/redesigns/<id>.md (the full checks) and design/notes/redesigns/<id>.json:
{ "color": "...", "id": "...", "slots": [ { "current": {"name","text","why weak (one line)"}, "options": [ {"name","text","moment (<=20 words, with numbers)","ties (<=12 words)","risk (<=12 words or empty)"} ], "pick": "<option name or 'keep'>", "pickWhy": "<=20 words" } ] }
Do not commit. Reply with one line per slot: current card -> pick.
