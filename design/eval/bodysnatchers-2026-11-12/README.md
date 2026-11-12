# Body Snatchers check, Nov 12

Cory, Nov 12: "body snatchers seems... super broken? way too strong wtf. am i missing something? are the bots just using it as idiots like usual"

Card (live): Body Snatchers, Red, 3 red + 4 any (7), worth 2. "Round Start: swap one of your members with any rival's member." Cost puts it in round II's deck, so a bought copy swaps once, at round III's start. The member you take counts as your recruit (its On Recruit fires).

Run: scripts/skill/snatch-watch.mjs, 16 tables (15 finished), 4 Very Hard bots, Red at every table, 10-card decks, today's rules. Log: vh-red.jsonl.

Result: it swapped in 5 of 15 games; the snatcher won 1 (a tie). Bots picked poor swaps every time:
- g2: Cosmopolitans (1) for Exchange Students (1); best on offer was Cheerleaders (3) for Early Traders (1).
- g6: gave Deprogrammers (4) for Dabblers (2): a loss.
- g9: Thrift Hunters (1) for Dabblers (2); best was Duty Collector (3).
- g12: Anchorites (1) for Cheerleaders (3): the one good pick.
- g14: swapped Body Snatchers itself for Con Men; best was Heist Crew (4) for Accomplice (1).
So bot data says nothing about the card's strength: Very Hard misuses it.

On paper, played well: your worst member (worth 1) for a rival's best, e.g. Mob (worth 4; Round End: +2 followers per rival with fewer red members than you): up to 10 followers move from them to you, for 7 resources, once a game. Strong but bounded; Cory's call whether that's too much.

Bot follow-up (engineering): the bots' swap choice ignores what the taken member is worth to the rival; fix before trusting any bot read on swap cards.
