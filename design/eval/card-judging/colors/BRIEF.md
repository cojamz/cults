# Brief for each color reader (Nov 7, Cory: "both": lay out each color for him to mark, keep tuning)

You lay out ONE color of the board game Cults so the designer, Cory, can mark every card star, fine or weak. You do not decide for him; you show each card at its best and its worst, plainly. Do not commit or push.

Read first:
- design/notes/card-judging-v2-2026-11-07.md (the method) and design/notes/card-judging-v2-fixes-2026-11-07.md (fixes).
- design/rulebook.md (rules). Live cards: `node .claude/skills/brainstorm/scripts/live-board.mjs <id> --members` (ids: red, echo=Green, thieves=Magenta, market=Blue, purple, trading=White, yellow, silver; with no id it also prints grey guest members). The live board prints the old "Most <color>" contest; the real contests (By color, the main setting) are: Red most red members; Blue most members; White fewest followers; Magenta most resources; Yellow most full sets; Green most minions on Green spaces; Purple whoever placed the round's last minion; Silver most silver.
- Cory's notes on your color's cards: grep design/decisions.md and design/pitch-ledger.md for each card name. His words outrank anything else.

Cory's standing directions (follow them; don't re-argue them):
- No card may need another color in the game; colors meet through shared pieces (resources, members, the shop, the discard pile, turn order and the Goes Last token, followers, contests), never by naming another color's verb. Colors don't overlap.
- No new tokens. The Goes Last token is the only one, and it stays Purple's: only Purple cards take or pass it.
- Purple is the fight over the Goes Last token. White is about fewer followers: members that do their thing (On Recruit, On Use) and then leave, from any color; a cast-out member goes to the discard pile. Yellow rewards going broad and translating currencies. Contest cards wait for a future contests color.
- Approved but not built yet (treat as current): Purple Right Away "+1 purple. Your next turn comes right after this one, and that space gives +2 more of its color in round I, +3 in round II, +4 in round III."; Purple Closer "When you place the round's last minion, do that space's action again." (price 6 purple + 5 any). Green: Stunt Double stays as is.
- Never use internal words ("sphere", "quadrant", ids) in anything Cory reads. Plain game words. Full card text every time a card is named.

Write JSON to design/eval/card-judging/colors/<color-id>.json:
{
 "color": "White", "id": "trading", "contest": "<By color contest in words>",
 "story": { "line": "...", "greatGame": "round I to III in 3-5 sentences: what you build, when it pays, what rivals do", "freshStart": ["4-6 one-line card ideas (spaces and members) if the color started from nothing, full printed text, no new tokens"] },
 "cards": [ { "name": "...", "kind": "space" | "member", "round": "I|II|III" (spaces), "price": "[3 white + 3 any, worth 1]" (members), "text": "exact live text",
   "bestTurn": "the best turn it makes, retold like a player would, with numbers, 4 players",
   "topCase": "round III, built around it, used every chance: the number it pays vs the best alternative; say if it breaks the game",
   "idea": "clean" | "muddy", "ideaWhy": "one line",
   "ties": "one sentence: what it makes better or worse elsewhere through shared pieces",
   "coryNotes": "his words on this card, quoted with date, or empty",
   "band": "star" | "fine" | "weak", "why": "one deciding line, plain words" } ],
 "overlaps": ["pairs of cards in this color (or with another color) doing the same job, with both texts"],
 "notes": "anything Cory should know about this color as a set (range, missing counters, round III payoff), 2-4 sentences"
}
Include every live space (6) and member of the color. Bands: cards Cory has praised are stars unless he said otherwise; the current card is the default; be as hard as he is (in testing, readers were far easier to please than Cory: he turned down whole lists that readers liked). Keep every field short and plain.
