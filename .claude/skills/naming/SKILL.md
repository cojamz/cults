---
name: naming
description: Name a Cults member or wheel action so a first-time player knows what the card does from its name alone, in plain old-village words Cory likes. Use for every new member or action before it is dealt (including ones added from Cory's maybes), every rename, and whenever Cory says a name is bad, "not on theme", or asks for names. Claude picks the name; Cory is not asked to choose.
argument-hint: <the card(s) and their text, e.g. "Restockers: On Use, once per game: discard the whole shop and refill.">
---

# Naming members and actions

Cory, Nov 25: "you are really bad at naming. Try making it a skill imbued with all the principles we've talked about, and the examples ive mentioned as bad. i dont want to pick. i want you to improve."

So the output of this skill is **one name per card, decided and built**, not a pick list. Cory still overrules any name; his no goes into [references/verdicts.md](references/verdicts.md) the same turn, and the next name is better because of it.

## Why names keep failing

Every no on file traces to one of five causes. The steps below exist to catch each one before he sees it.

1. **The word is modern.** Doorbusters, Wingman, Temp, Regular, Restockers, Consultant. The game is an old village, long ago.
2. **The word is obscure.** Forestallers was a real period trade, three judges scored it 8 of 10, and Cory said "Forestallers is also bad". A word a player needs a dictionary for tells them nothing. Judges who know history are not the bar; a casual player across the table is.
3. **It names the concept, not the person.** Clique, Influencers, Picky Eaters, Missionaries, Elders, Last Callers, Book Cookers. A member is someone you recruit, a trade, rank or village role, whose everyday business is the card ("They aren't influencers, in fact they are INFLUENCED").
4. **It is the mechanic word for word, or a role that doesn't do it.** Recruiting Sergeant, Town Crier, Horse Trader ("thinking too simply"); Landlord ("charges every other member 1 red? somehow?"); Frog Prince (makes no sense the next time it fires).
5. **It drifts to storybook.** Hansel, Mother Goose, Rumpelstiltskin, Bridge Troll. Folklore only where it names the ability best (Fairy Godmother, Pied Piper, Changeling).

## Workflow

Copy this checklist into your notes and tick it off. Steps 3 to 5 happen in writing.

```
- [ ] 1. Pin the effect in one plain sentence
- [ ] 2. Load the bar: verdicts.md, and every live name (scripts/check-names.mjs --live)
- [ ] 3. Write 8+ candidates per card, from at least 3 angles
- [ ] 4. Cut with the kill list and the clash check (scripts/check-names.mjs "A, B, C")
- [ ] 5. Blind first read: a fresh reader sees only the names and guesses each card
- [ ] 6. Pick one per card yourself, with its "of course" line
- [ ] 7. Build it everywhere (references/apply.md), with new art
- [ ] 8. Log it; when Cory answers, add his yes or no to verdicts.md
```

### 1. Pin the effect

One sentence a player would say at the table: "once a game, you throw out the whole shop and get a fresh one", "you always go last when you want to". Read the card's code in `src/engine/v4/content/<sphere>.js` and `node .claude/skills/brainstorm/scripts/live-board.mjs <color> --members` for its color. Note what it counts as: a member worth 2 or more gets a plural or group name (Alchemists, Twins, Press Gang); a member worth 1 gets one person.

### 2. Load the bar

Read [references/verdicts.md](references/verdicts.md) (every yes and no Cory has given, with why) and .claude/rules/member-names.md. Run `node .claude/skills/naming/scripts/check-names.mjs --live` for every name in play. The color's family matters a little (Blue is the market and the discard pile, Purple is time and turn order), but accuracy beats theme: "Goal is more very accurate name for the ability/member rather than thematic link."

### 3. Candidates, at least 8, from 3+ angles

Angles that found his yeses:
- **The trade whose daily job is this effect**: Ferryman (a coin per soul brought across), Rag-and-Bone Man (paid for what's thrown out), Innkeeper, Wet Nurse.
- **A plain kind of person everyone knows, whose habit is the effect**: Beggar, Swindler, Laggard, Penny-Pincher, Shirker, Hoarder.
- **A household or family role**: Governess, Firstborn, Abbess.
- **Folklore, only when it is the clearest name**: Fairy Godmother, Pied Piper, Changeling.

Write each with its test line: "You recruited a ___, and of course they ___." It must read naturally in one pass and still make sense the next time the effect happens.

### 4. Cut

Cut any candidate that:
- a player in 2026 would not know without a dictionary (Forestallers, Hindmost, Tout, Purveyor, Chapman-style words only if Cory already said yes);
- is modern, or a modern idiom built from old words (Doorbusters, Last Callers, Book Cookers, Queue-Jumpers, Early Birds, Spring Cleaner);
- names a group or concept instead of someone you recruit, or a place or thing (Ballroom, Packed House);
- is a job inside a cult (Missionaries, Elders, Den Mother);
- is the mechanic word as a job title (Recruiting Sergeant, Restockers);
- is already live, or a near-twin of a live name a player would mix up (Warden and Watchmen; Early Birds beside Early Riser), or shares a word with an action (Swindler and Swindle). `scripts/check-names.mjs` flags exact and shared-word clashes and every name on file as refused;
- reuses a retired card's name for a card that does something similar (it confuses anyone who played the old one).

### 5. Blind first read (the step that replaced judges' taste)

Spawn one fresh agent on a cheap model with [references/blind-read.md](references/blind-read.md): it gets the game in five lines and the surviving names shuffled, with no card text and no reasons. For each name it guesses the card, says whether it knows the word without a dictionary, whether it feels modern or old-village, and whether it raises a smile. A name passes only if the guess lands on the card's effect and the word is known. This is Cory's real bar ("the name tells a first-time player what the card does before they read it"), and it is the test Forestallers would have failed ("no", "beat others to something").

Three judges scoring candidates on principles (member-names.md step 4) may still rank close calls, but a judge's high score never rescues a name that fails the blind read.

### 6. Pick one, yourself

Choose by: the blind read landed > the word is plain > the "of course" line is natural > it raises a smile (playful, 5 to 10 percent dark). Don't send Cory options. Send the name, the card text and the "of course" line, as built and live.

### 7. Build it everywhere

[references/apply.md](references/apply.md) lists every place a name lives: the card file, log lines and prompts that hard-code it, tests that look for those lines, the art and emoji maps, design/names-approved.md (names-theme.test.js fails on any dealt name not on it), and a new picture drawn for the new name in design/art/members/ (a picture of the old name's joke is wrong now). Run the tests apply.md names, then ship.

### 8. Log, then learn

design/decisions.md gets the rename as "(Claude, under Cory's ...)" with the blind-read result; design/pitch-ledger.md gets the names. When Cory answers, his words go into references/verdicts.md (yes or no, and why) and a no also into the "His nos" lines of .claude/rules/member-names.md, which `.claude/hooks/name-check.mjs` reads to refuse that name forever. A no is a lesson: write which of the five causes it was, and add a cut rule in step 4 if none covered it.

## Example (Nov 25, the five Cory sent back)

| Card | Was | Blind read of the winner | Name |
|---|---|---|---|
| Round Start: recruit once, before anyone places. (worth 3) | Forestallers | "first pick or first placement" | **Firstborn** |
| On Use, once per game: discard the whole shop and refill. | Restockers | "clears the shop row and refills it" | **Market Sweeper** |
| Whenever you buy followers, +1 blue. | Regular | "saves or gains cheap resources" | **Penny-Pincher** |
| On Use, once per round: take the Goes Last token. | Last Callers | "goes late in turn order" | **Laggard** |
| On Use, once per game: rearrange your resources into any mix of colors. (worth 3) | Book Cookers | "turn one resource color into another" | **Alchemists** |

Cut on the way: Forestallers, Hindmost, Tout (unknown words); Early Birds (modern, and a twin of Early Riser); Queue-Jumpers, Tail-Ender, Spring Cleaner (modern); Auctioneer (read as "bid on a card"); Straggler, Penny Pincher's old white card, Dawdlers (retired or refused card names for similar cards: Stragglers, Dawdler). The worked record: design/brainstorm/2026-11-25-naming-five.md.
