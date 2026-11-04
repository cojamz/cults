# The overnight quality loop (Nov 4)

Cory, Nov 4 ~11:55pm: iterate "until every action and every member ... checks off X number of boxes of a rubric"; rank by "feeling good in the game, being interesting, related to the theme, interacting with other colors", redesign from the bottom, keep each color's identity, "never throw away a previous member", test with a balance check plus "very smart bots ... assessing the level of strategy and how fun it is ... can they tell what's going on, is it clear what outcome their actions will have, can you feel like you're gaining momentum ... influence the chances that you can win ... catch up". Then: run it overnight without him, with evaluators that check themselves. Members first; round III spaces stay unless the case is strong; the goal is everything over a bar, not touching everything.

## The rubric (v1.1: C4 and C10 changed after judge 3 overrated stings Cory says feel bad; see process/log.md)
Each card scores 0, 1 or 2 on ten questions. 0 = fails it, 1 = fine, 2 = a reason people like the card.

| # | Question | 2 looks like | 0 looks like |
|---|---|---|---|
| C1 Clear | Can a table read it cold and say what will happen before choosing it? | One sentence in card words; outcome known in advance | Needs a rules lookup, hidden math, or surprises its owner |
| C2 Trackable | Does it translate to the board game: nothing written down, nothing held in your head, the state easy to look up on the table? | Everything it needs is visible on the board or the card | Players must remember or write something down, even if they technically could track it |
| C3 Feels good | Does it feel powerful when it fires? | A big moment, a rule bent, a relative amount | +1 of something, forgettable |
| C4 Fun | Does someone at the table react, and does it feel fair to the person it hits? | A sting the victim shrugs off or can see coming and block, a gift, a block, a "nice" | Nobody notices, or the victim feels robbed: losing a member before round III, choosing their own punishment, being singled out with no answer (Cory on Shake Down: "just feels too bad") |
| C5 Interacts | Does it care about its color's spaces/members or other colors (implicit beats "rival")? | Combos named in two or more cards / colors | Works the same in any cult |
| C6 Its color | Is it a natural fit in its color, or does it play with the color's neighboring members? It need not use the keyword literally (a green card needn't copy). | Feels like it belongs and adds an angle or a link the color lacks | Feels pasted in from another color, or repeats a sibling |
| C7 Momentum | Do choices stack: does it build an engine or answer one, with a payoff you can see coming? | Gets better with the cards around it | Same value in any game |
| C8 Agency | Is there a real decision in buying, aiming or timing it? | Two sides worth weighing (target, timing, when to buy) | Always buy / never buy; autopilot |
| C9 Catch-up | Can a trailing player use it cleverly, or does it only reward the leader? | Pays more to the player behind, or punishes runaway | Pure rich-get-richer, no counterplay |
| C10 Worth it | At its price, is it a real option against the best alternative, with an answer at the table, and would a first-time player understand it and where it fits after reading it once or twice? | Often the right pick, rivals have a counter, and a new player gets it | Dead, must-buy, strong with no counter, or a new player can't see what it's for |
| C11 Defendable (half weight: 0 or 1) | Can rivals answer it if it gets going? Some snowball is fine; nothing that grows in a vacuum. | 1: the table can block, take, swap or race it (a cost low enough to Promote, Demote or Poach counts) | 0: once it runs, nobody can touch it (Cory, Nov 4: "a 20-cost member ... very difficult to promote it or demote it") |

Hard fails (the card is at the bottom whatever it scores): any randomness (only Red recruiting from the top of the pile is allowed; Cory, Nov 4: "a big thing is we avoid randomness"); relies on a rival having more resources than you (Cory, Nov 4); needs tracking a table can't do (Nov 1); a single-member card with a plural name or a multi-member card with a singular name; text that restricts beyond Cory's call.

The bar: 13 of 20 or more, no 0 on C1, C3 or C4, no hard fail. A redesign must clear the bar and beat the card it replaces by at least 3 points with paper judges (Cory, Nov 4), then pass the play gate.

Round III spaces are judged on the same rubric but only reworked when they score under 10.

## The judges
1. **Paper judges** (3 independent fresh agents, .claude/agents/card-judge.md): score every live card on the rubric from the live text and the color's other cards. Median of the three is the score.
2. **Play judge** (.claude/agents/play-judge.md): reads decision-by-decision sheets of Hard-bot games (scripts/v4-critique.mjs) where the new card was in a cult, as that seat, and answers the play questions: could I tell what it would do, did it build toward something, did it change a decision, did it help me catch up or run away, did anyone else at the table feel it. Scores C1, C3, C4, C7, C8, C9 again from play.
3. **Balance gate** (scripts/trial/trial.mjs, Hard bots, deck 10, By color): the new card is taken in at least 8% of games where it shows; its owners' win rate is within 12 points of an even share; no crash; the game's small-cult share stays at or above 20%.

## Checks on the judges (meta)
Run before trusting a ranking, and again each night:
- **Cory's taste, as one check, not the target** (Cory, Nov 4: "don't try and just replicate me"): cards Cory has said he dislikes mostly land in the bottom half, ones he praised mostly in the top half (design/eval/quality-loop/calibration.md). Bar: 70%. A miss is read before it is fixed: the judge may be right and the old call stale.
- **Planted cards:** four made-up cards are hidden in the list (one unclear, one that relies on a rival having more, one dull "+1", one great). The three bad ones must land in the bottom 15%, the great one in the top half.
- **Agreement:** the three paper judges' rank order correlates at 0.6 or more (Spearman) pairwise.
- When a check fails: rewrite the judge prompt with the misses as examples, rerun; log it in design/eval/quality-loop/judge-log.md.

## The loop (each batch)
1. Rank (median paper score, worst first). Take the worst 4 to 6 members under the bar, at most 2 per color.
2. Design: a designer agent follows .claude/rules/pitching.md for each, makes 3 candidates in the color's identity, writes each against the rubric and the six principles, keeps the best.
3. Paper gate: fresh judges score the candidates blind next to the old card. Below the bar or under +2: back to step 2 once, else skip the slot.
4. Build: switch REPLACE<n>=1 in content/replace<n>.js, old card kept as a retired card (never deleted); tests.
5. Play gate: trial.mjs (60 Hard games a side), play judge on 3 owner seats per new card.
6. Ship what passes: card made live, old card retired and copied to design/archive/members/, decision logged "(Claude, under Cory's overnight quality loop)", desk go, v4-play.sh, a line in /mnt/project-files/desk/morning.md.
7. Re-rank the touched colors (synergies move) and go again.

## The meta loop (Cory, Nov 4: "the meta loop that keeps improving this process ... acts as me kind of giving feedback here. But like, don't try and just replicate me")
After each batch a fresh process reviewer (.claude/agents/process-reviewer.md) reads the batch's paper scores, play-judge notes, trial numbers and the designer's candidates, and answers:
- **Did the paper judges predict play?** A card the paper judges liked and the play judge found dull (or the reverse) means a rubric question is measuring the wrong thing. Fix the question or its examples.
- **Did the gates pass anything that looks bad, or stop anything good?** Read the passed cards cold as a player; read one rejected card's games.
- **Is the designer stuck in a groove?** Same shapes (another "whenever a rival", another follower-per-X) across a batch, or ideas the pitch ledger already refused.
- **Are colors drifting?** Each color's theme in one sentence before and after; still recognizable?
- **Is the loop just copying Cory?** If every change moves scores toward the calibration list and nothing else, the judges are imitating, not judging.
It changes at most two things per batch (a rubric line, a judge prompt, the designer's brief, a gate number), says why, and the next batch tests the change. Every change goes in design/eval/quality-loop/process-log.md and the morning note.

## Sources and skills every lane uses (Cory, Nov 4: "make sure you're leveraging brainstorming skil, previously articulated principles etc, any other skills")
Chat threads load no skills: read each SKILL.md by path from .claude/skills/<name>/ on claude/gifted-newton-3lcy3i.
- Designers: **brainstorm** (SKILL.md, references/cheatsheet.md, references/verdicts.md) for every pitch; **rework-members** (design/member-process.md) for member concepts strong to weak with counters; **rework-color** for a color's spaces (Actions); **card-words** for the printed text, hover and faces; **review-text** after any text change.
- Evaluators and Process critic: **game-feel** (lenses.md, predictions written before data, lens-log) and **eval-quadrant** (judging a color on paper); the strategist and design-critic agents (.claude/agents/) as second opinions.
- Lab: **balance-run** for any whole-game balance question; trial.mjs for card-against-card.
- Cory's principles, all of them, beyond the rubric: design/notes/replacements-principles-2026-11-03.md (his six, final), .claude/rules/pitching.md, .claude/rules/working-with-cory.md, design/decisions.md (the game is whatever this says), design/pitch-ledger.md and design/strategy.md, design/desk.md (his words verbatim), /mnt/project-files/harness/rules-live.md, /mnt/project-files/replacements/lighter-touch.md and rival-resources-audit.md (what tested fair, what to pull back, rival-resource rule), design/1.0.md, the project instructions.

## Paper gate rules (v1.2, from the Process critic's pre-mortem, director accepted 12:10am)
- Old card and candidates are scored in the same call, under shuffled anonymous labels, with only the printed text and the color's board (never the pitch file). Each batch adds one decoy: an unchanged live card next to its own copy. If the copy beats the original by 2 or more, that batch's passes are void and the judge prompt is fixed first.
- Text budget: a candidate is one sentence, at most 4 words longer than the card it replaces (or 20 words if that's more), unless all three judges give it C1=2.
- Shape budget: at most one card per shape per batch ("per rival with more/fewer X", "whenever a rival ...", "+1 follower per X").
- Not adopted: making "counts a rival's followers or members" a hard fail. Cory's rule is about resources, and followers and members aren't resources (rival-resources-audit.md); such cards still answer C9 honestly.
- The play gate's win rate (about 20 owner games, about plus or minus 20 points) is a "nothing broken" check, not a quality score; quality comes from the judges.

## v2 changes from Cory's notes (Nov 4, 12:08am)
- **Bigger batches:** each slot gets 4 to 5 candidates, not 3. Each designer runs up to 3 slots at once.
- **Built right before it's tested** (Cory: "you need to check that like what you actually implemented is working correctly"): before any bot game, every new card passes (a) a unit test per sentence of its text, (b) a scripted scenario that sets up the turn from its pitch and checks the state after, (c) a read of 3 bot games' logs where it fired, checking the log line says what the card says. The Lab refuses a trial without all three. A bug found later voids that card's trial.
- **Beat the old card by 3**, so a replacement wins on at least two questions.
- **Whole-set check against local minima** (Cory: "the previous card maybe fit better into the set overall, or was less obvious how it was a connector"): the paper gate also scores the color as a set, with and without the swap: does each card have a role, do the combos still connect, is any role now missing. A replacement that lowers the set score fails even if it beats the old card. A card named in two or more other cards' combo lines is a connector: its replacement must keep those links or make new ones, and the judges see the cards it connects to.

## Steering: the meta harness (owned by the Process critic)
The Process critic checks the judges and designers; steering checks whether the whole game is moving toward the feel Cory wants, and changes the plan when it isn't.
- **The dashboard, after every batch** (/mnt/project-files/quality/dashboard.md): per color, the median card score, the share of cards over the bar, and a set score (judges score each color as a whole: distinct roles, combos that connect, a clear plan to win with it). Per game, from a fast bot run on the current build: choices per turn, how often a turn touches a rival, whether the round I leader just wins (catch-up), wins by 5 or fewer members (at least 20%), the round-by-round climb in what a turn gives, and dead or must-buy cards. From the play judge, the average answers to Cory's questions: could I tell what would happen, did my choices stack into momentum, could I change my chances, could I catch up.
- **Predictions first:** before each batch, the Process critic writes what the batch should move on the dashboard; after, it scores the prediction. Two misses in a row from the same steering rule and the rule is rewritten.
- **What steering can change, each batch:** which colors get designer time (largest gap from the bar first; a color with every card over the bar and a good set score is done and its lane moves on); rubric weights (a question whose paper score doesn't predict the play judge's loses weight; when a game metric lags, the question tied to it counts double next batch, e.g. catch-up lagging doubles C9); the designer brief; batch size; and explore against exploit.
- **Explore against exploit:** when fewer than 1 in 5 candidates pass two batches running, the next batch explores (wilder briefs, at least one rule-bending idea per slot, the game-feel skill's step 6 wild alternatives). When more than 3 in 5 pass, the bar was too easy: raise it by 1 and log why. Every third batch, one slot per lane is an exploration slot regardless.
- **Every steering change** is logged in process/log.md and the morning note with the dashboard numbers that caused it.
- **Plain fuel spaces** (director, 12:12am, on the Evaluators' note that 21 of 54 spaces fail the bar mostly on C4): each color keeps one plain "+N of its color" space as an anchor (the game-feel lens allows one zero-spread space per color). That one space is exempt from the no-0-on-C4 rule; a color's second plain space is not.

## Done: exit criteria (Cory, Nov 4: "maybe like an exit criteria for when you're done?")
The loop stops working a color when all hold, and stops altogether when every color does:
1. Every card in the color clears the bar (protected cards Cory praised count as clear, and are listed for him if the judges disagree).
2. The color's set score meets its target (3 judges, at least 15 of 20, no missing role).
3. The game dashboard hits its targets two batches running: round I leader wins under 40% at 4 seats, last after round II wins at least 10%, wins with 5 or fewer members at least 20%, no must-buy or dead card per color beyond one, play-judge averages at 1.5 of 2 or better on clear outcome, momentum, agency and catch-up.
4. Diminishing returns: two batches running where even explore mode passes under 1 in 5 and the dashboard doesn't move.
When done, the loop stops instead of churning. It writes a final report (what changed, the before-and-after dashboard, and the cards the judges still doubt), ships nothing more, and frees the runners. If only rule 4 is met and the others aren't, the report says the remaining gap is a design question for Cory, not more card swaps.

## Done, tightened (Process critic, 12:11am, director adopted)
- **Frozen anchors:** 10 live cards that never change are scored in every judge run. If their median moves more than 0.5, that run's scale has drifted and it counts toward no pass and no "done". The Evaluators pick the 10 and list them in evals/anchors.md.
- **Strategy diversity** joins the dashboard and rule 3: count distinct winning plans; no single plan over about 30% of wins (today mixed-wide plus red-wide take 40%). Cory's 1.0 line is "confident in the strategy/fun", not card scores.
- **Table load** joins the dashboard: per cult at the end of a typical game, words of card text on the table and the number of "whenever" triggers; and once a night, one fresh agent reads a full game as a first-time player and says what it lost track of.
- **Rule 3 is relative:** today's game numbers already pass the absolute bars (round I leader wins 32%, last after round II wins 21%, small cults 30%; Nov 3 fast run), so rule 3 means "no worse than the 12:10am baseline on every number, and diversity met".
- **Rule 4 can't be met by giving up:** only explore candidates with a shape not already in their color count toward it.
- **Rules 1 and 2 need stable anchors** on the run that declares done.
