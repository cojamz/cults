# Naming members (Cory, Nov 24)

**Use the naming skill: `.claude/skills/naming/SKILL.md`** (Cory, Nov 25: "you are really bad at naming. Try making it a skill imbued with all the principles we've talked about, and the examples ive mentioned as bad. i dont want to pick. i want you to improve"). It holds every principle and verdict (references/verdicts.md), the blind first read that replaced judges' taste, and every place a name must change. Claude picks one name per card and builds it; Cory is not asked to choose.

Cory, Nov 24 4:11pm, after Red took five rounds of one-at-a-time fixes: "this is too slow. you aren't getting it. do better, i dont want to have to manually fix your bad ideas for every member". The verdicts behind this guide: design/pitch-ledger.md (tag names), design/brainstorm/2026-11-24-red-member-names-village.md.

## The goal (Cory, 4:17pm)
"Goal is more very accurate name for the ability/member rather than thematic link." The name tells a first-time player what the card does before they read it. Accuracy beats theme: a clever village link that needs explaining loses to a plain name that says the ability. A current name that is already accurate and not modern can stay.

## The world
An old village, long ago (Cory 1:00pm: "I like old village. It doesn't have to be modern"). Members are people of old village times: a trade, a rank, a social role. Folklore and fairy tale where they name the ability best (Fairy Godmother, Pied Piper, Changeling), but not everywhere (Cory 4:17pm: "Some dipping into fairytale/folklore stuff is fine. Just doesnt have to be literally everything."). Playful, 5 to 10 percent dark.

## The test
"You recruited a ___, and of course they ___ (the card's effect)." The role's everyday business must be the card, read naturally, in one pass. It must still make sense the next time the effect happens. A member that counts as 2 gets a plural name (a pair or a group). No name another live member already has, or one a player would mix up with it (Warden and Watchmen).

## Action names (the wheel's spaces)
Cory, 4:19pm: "and the action names. BIG overhaul." and 4:23pm: "remember the action names are something the cult leader is doing in theory". An action name is what the cult leader does on that space, a verb or a deed in the same old village world ("Poach", "Stash" are the shape), and it says the space's effect as plainly as a member's name says its card. Never a person, place or thing; never the same word as a member's name (Swindler and Swindle).

## His yeses, and why they work
- **Tavern Keeper** (+1 red per 2 members): a fuller house takes in more.
- **Guild Master** (+1 follower for recruiting a color you have): more of the same trade.
- **Ferryman** (+1 red per recruit, "eh but ok"): a coin for every soul he brings across.
- **Fairy Godmother** (promote or demote one of yours): turns someone grander or humbler; magic really does change who they are.
- **Pied Piper** (send a rival's member to the shop for one that costs the same or more): leads one of theirs away.
- **Warden** (your members can't be swapped): keeps everyone locked in.
- **Governess** (recruit the cheapest shop member with her): a child comes with her.
- **Journeyman** (trade itself for a member costing up to 3 more): only stays a while, moves on; can be hired again.
- **Swindler** (swap yours for a rival's that costs more, each round): always gets the better end of a trade.
- **Abbess** (+2 when a rival's member joins you): takes in anyone a rival lets go.
- **Dyer** (grey members count as your biggest color): colors the plain ones.

## His nos, and why they failed
- Modern words or modern idioms: Wingman, Temp, Consultant, Brand Manager, Orientation Leader, Bean Counter, Recruiter, Headhunter, Doorbusters, Regular, Restockers, Last Callers, Book Cookers (Nov 25: "thats not on theme", "yes. but rename them WELL."; "wingman and temp are bad... more old timey").
- Too literal, the job is the mechanic word for word: Recruiting Sergeant ("feels off"), Town Crier, Horse Trader ("thinking too simply").
- Doesn't make sense after the effect, or the story points the wrong way: Apprentice, Frog Prince ("doesnt make sense that the frog prince would still exist and could do the same the next round"), Landlord ("charges every other member 1 red? somehow?").
- Obscure words a player needs a dictionary for, even when judges score them high: Forestallers (Nov 25: "Forestallers is also bad"; three judges had scored it 8 of 10).
- Named storybook or nursery-rhyme characters: Hansel, Mother Goose, Rumpelstiltskin, Bridge Troll ("TOO fairy tale/nursery rhyme", "moved too far from general old village times").
- Weak tie to the effect: Gatekeeper, Tailor, Puritan, Dowager ("eh", "need better options"), Matriarch, Shepherd ("both bad"), Interior Decorator.
- Jobs inside a cult or kinds of people as phrases: Missionaries, Elders, Den Mother, Social Butterfly, Picky Eaters, Clique ("focusing too much on the concept and not what the card actually does").

## How to make a list (so he doesn't fix them one by one)
1. Read this file and the color's live cards (`node .claude/skills/brainstorm/scripts/live-board.mjs <color> --members`).
2. For each member write at least five candidates, then score each against the test and the nos above; cut any that matches a "no" shape.
3. Pick one best name per member yourself (step 4), build it, and tell Cory each card's text and its "of course" line; he overrules by saying no.
4. Blind first read, then Claude picks (Nov 25, after Forestallers): a fresh cheap-model reader sees only the shuffled names and guesses each card (.claude/skills/naming/references/blind-read.md); only names whose guess lands and whose word the reader knows survive. Judges scoring on these principles (Cory 4:17pm: "use judges to review") may rank close calls, but a judge's score never rescues a name that fails the blind read. Claude picks one per card and builds it; no pick list to Cory.
5. Log his verdicts in design/pitch-ledger.md and add each new yes or no to this file the same turn.
6. **Every new member or action, including one added from Cory's maybes, gets its name here before it is dealt**, and the name goes on design/names-approved.md; src/test/engine/v4/names-theme.test.js fails on any dealt name not on it (Cory, Nov 26, on Doorbusters, added from his maybes with its pitch name the night of the rename pass: "thats not on theme", "how did Doorbusters slip through the cracks?").
`node .claude/hooks/name-check.mjs` (presend runs it) refuses a message that pitches a name he already turned down.
