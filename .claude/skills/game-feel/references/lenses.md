# The lenses (v1.1, 2026-11-01)

Each lens: the question, why it matters in Cults specifically, how to measure it (data, probe, or paper), the bar, and its blind spot. Lenses are tools, not truths; lens-log.md records when one misled us. Cory's gut on feel beats every bar here.

## Strategy lenses

### S1. Meaningful choices
- Question: at each placement and each buy, are there two or more options a good player would seriously weigh, and does the best one change with the table?
- Why here: Cults' soul is the snake draft over shared spaces (strategy.md, "the three economies": the space, the buy, the pile). A turn where one space is obviously best, or where every space gives the same 2, is a turn with no game in it.
- Measure: probe "open spaces per placement" and "forced" share; per-space gain spread (a space whose gain never varies, ±0.0, is a fixed number: fine as one plain fuel space per color, flat if more). On paper: for a card, write the turn where you'd take it and the turn where you wouldn't. If you can't write the second, it's an auto-pick; if you can't write the first, it's dead.
- Bar: forced placements under 10%; each color has at most one zero-spread space.
- Blind spot: bots pick by value; they don't show whether a human would hesitate. Width isn't depth: 12 open spaces of equal value is one choice.

### S2. Viable paths (no dominant color, no single build)
- Question: can you win going wide on members, going tall on followers, holding for contests, and through each color as your main?
- Measure: lens.mjs color lift across tiers (flag at ±8 in every tier); the small-cult share (winners with 5 or fewer members, bar at least 20% at every seat count); the followers-only seat's line (no target, but if it wins over even share, members are underpriced against packs, or the reverse).
- Bar: no color past ±8 points in every tier; small-cult share at least 20% at 2, 3 and 4 seats.
- Blind spot: a color can be fine overall and still have one build that carries it (a single member or space doing all the work). Check which members the color's winners own.

### S3. Dominant and dead cards
- Question: is anything a must-buy, a never-buy, or a trap?
- Measure: lens.mjs tags. DOMINANT (strong and bought often) is the urgent one: it narrows every game. TRAP (bought often, loses) is the feel-bad one. DEAD (under 3% of the games it shows) wastes a shop slot in every game it's in. SLEEPER (strong, rarely bought) is the least urgent: humans may find it, so watch it.
- Bar: no DOMINANT member; at most one or two DEAD per color; no TRAP.
- Blind spot: price confounds everything (9 to 11 cost cards read as dead to Normal bots). A round III space is supposed to swing: Greatest Hits at +39 is a problem only if it decides games no one could contest (check S4 and S5 too).

### S4. Interaction and counterplay
- Question: does a strong thing have an answer at the table, and do players care what rivals are doing?
- Why here: Cory's favored interaction runs through the board: copying, shared spaces, the shop, contests, steals and swaps. Three reworked colors act on rivals' stuff; Silver gives.
- Measure: probe "touched a rival" by round (sting vs gift); for any strong card, name its counter by card text (Bodyguards against theft, Loyalists against swaps, blocking the space). No counter and STRONG = the top of the list.
- Bar: round II and III placements touch a rival often (about a third or more); every DOMINANT or STRONG card has a named counter.
- Blind spot: bots don't block on purpose or play around triggers, so a "whenever a rival…" card's number is suspect until a played-out turn backs it.

### S5. Comeback and runaway leaders
- Question: if you're behind after round II, can you still win; does the round I leader just win?
- Why here: snake order and fewest-followers-first are the base game's only catch-up. Round III is a cliff (+10 contests, burst spaces), which is a comeback tool when the trailer can reach it.
- Measure: probe "round I leader wins", "round II leader wins", "last after round II wins", against even share (25% at 4). Contest sweeps (one seat wins a color's contest all three rounds) from the report: over 20% of games and decided by contests is a runaway.
- Bar: round I leader wins under about 40% at 4 seats; last after round II wins at least about 10%; no color swept in over 20% of games where the sweep decides the game.
- Blind spot: round II leader winning a lot is normal (it's late); judge round I.

### S6. Small cults and members as the source of followers
- Question: does a 4 or 5 member cult have a real shot, and do members (not just follower packs) produce the score?
- Why here: Cory's bar for 1.0 (at least 20% of wins with 5 or fewer members) and the Oct 20 economy (members are where followers come from; buying followers has no target).
- Measure: report's small-cult share per seat count; probe's member vs follower-card buys by round (round III leaning to follower cards is expected; round II mostly packs means members are overpriced).
- Bar: at least 20% at every seat count; in round II, member buys clearly ahead of follower cards.

### S7. Shop dilution (added after use 1)
- Question: how much of the shop row is cards nobody wants right now?
- Why here: the row is the shared board for recruits (6/7/8 face up). Each dead card in it is a slot nobody can use; the 15-card deck had 23 rarely bought members against 14 on the 10-card deck, the clearest deck difference of the night.
- Measure: lens.mjs DEAD and RARE lists per deck; count per color.
- Bar: at most two RARE per color.

## Feel lenses

### F1. Tension: hold or spend
- Question: does holding for a contest against spending on a member actually bite?
- Measure: contest sweeps and margins; on paper, play a round II end where the leader of a contest must choose between keeping 4 and buying a 4-cost member. If the choice is always the same, the tension is gone.
- Blind spot: bots resolve the tension by formula; humans feel it more.

### F2. Pacing: does the game grow?
- Question: does round III feel bigger than round I, and does every round have at least one exciting turn?
- Measure: probe gain per placement by round (it should climb: roughly 2 to 4 in round I, 4 to 6 in round II, a burst in round III, per the brainstorm strength bands); buy-step passes (round I passes above half means round I feels stuck; some is natural because resources are scarce).
- Bar: gain climbs each round; round III centers are clearly the biggest turn of the game.

### F3. Clarity: can a table read it?
- Question: could four friends play this card without a rules lookup, and see what it did?
- Measure: paper only. Read the printed text cold (the card-words and review-text skills). A card that needs a paragraph to explain, or whose effect you can't see on the board, fails. The rulebook must match.
- Bar: one sentence, done when taken (spaces); a member's trigger visible when it fires.

### F4. No tracking across turns
- Question: does anything ask players to remember what happened earlier (who gave what, last round's count)?
- Why here: Cory's hard line (Return the Favor, Oct 31; Lender's debt; Sleepwalker). "Whenever" lives on members because the card in front of you is the reminder.
- Measure: paper. Any "this round", "since", "already", "last" on a space is a flag; on a member it must be visible state.

### F5. Stings and gifts at the right size
- Question: does harm feel fair (mild before round III, aggression welcome in round III) and does a gift create a real decision for the giver?
- Measure: probe sting/gift rates; on paper, play the victim's turn. Losing a member before round III is the line (Shake Down and the guests he allowed are the exceptions).

### F6. Realistic bots
- Question: would a person make the bots' choices here? If not, the number is about bots, not the game.
- Measure: for any card whose finding rests on bot behavior, write the human turn. Compare Normal against Hard and Very Hard: a SKILL− card that only beats Normal is a bot artifact or a new-player trap. Check bot pick rates against what human playtests did (/mnt/project-files/playtest-*/report.md, the answer key in design/eval/critic-calibration/answer-key.md).

## How to read sim data (cheat sheet)
- Lift = owner win share minus what seats with the same member count win. ±1 SE is printed; trust past 2 SE with 30+ owners.
- Pick rate = games a bot bought it ÷ games it showed in the shop. Low pick + any lift = price or bot blind spot; low pick + negative lift when bought = really weak.
- Across tiers (Normal → Hard → Very Hard): stable lift = a real property of the card; rising = skill reward; falling = only beats weak play.
- A space's lift is the lift of seats that took it at least once; round III spaces have one taker per game, so compare them with each other, not with round I spaces.
- **Member-count correction hides cheap bodies** (found use 1): the report's expected share rises with member count, so a card whose point is extra count (Triplets, Deprogrammers, Early Birds, Panel, Red's recruit spaces) reads weaker than it plays. Read their raw win share and the color's raw lift beside the lift.
- **Feel probe limits** (found use 1): it sums resources and followers, so conversions (Cash In, Polish), color changes (Dilute), timing (Right Away, Last Call, Crowd In's minion) and buy spaces (Splurge, Recruit Twice, Spree) read as small or dead. Its dead share means something only for spaces that give resources.
- **Run-to-run noise beats the printed ±** (found use 1): on the same seeds, a price change re-routes every game, and unchanged cards moved with sd 4 points between two 800-game runs (printed SE 3). A before/after move counts only past about 2× that spread (8 points at 800 games); run `lens.mjs --before=` to get the floor. Smaller moves need a second seed block.
- **Artifacts are a setup choice**: read their lift spread as a choice with a dominated side (brainstorm verdict 15), the highest-feel finding a run can make.
- Never call a balance flaw from one tier, one seat count or one deck alone. Report the instrument every time.
