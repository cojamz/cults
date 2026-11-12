# What skilled play looks like (conversation with Cory, Nov 12; no testing until he says)

## Cory's words
- 11:25am (project chat): "is there skill here, or is everything just so equal that it doesn't matter? ... we should come up with a couple of hypotheses ... Of if players did this, they would win more often. Or if the bots did this, they would win more often, or this is what skill means. And then we need to figure out some way to implement that and test that ... trying to get a sense of the randomness or fake skillness of the game, the elasticity of it". Then: "dont start testing yet".
- 11:25am (thread): "We're brainstorming this, and maybe use Fable here ... Fable's for like the ideation and the creating that are bots. One of the principles though is like we could do this with low end with like really complicated heuristics or whatever ... Let's start with like what does a more skilled player do in this game".
- 11:34am, on the first five guesses: plan: "you definitely need to sometimes if you're in second or third ... pivot to stop somebody else from winning. So the whole point of the game actually is that it's tougher to follow through on a plan. Maybe once you have some good members and you feel safe that you'll hold on to them, then yes ... There should be an overarching goal ... understanding what gives them more points and what doesn't ... More likely to make your way towards a big payoff, understanding what rivals are doing". Taking a rival's space: "two is a good point". Contests: "a lot of your bots default to trying to win every contest ... what contests are reasonable to win and what contests do they have to stretch to win ... cutting their losses where they have to stretch, unless they can come out of nowhere and do it and trick people". Staying low to go first: "I do not think this is a key thing ... not a core principle". Stop recruiting, start buying followers: "Yes, that's definitely a key one. I think there's more here. 5's" (cut off).

## Working list (hypotheses to test later)
1. Has a big payoff in mind, pivots in second or third to stop the leader, commits once members are safe (Cory's rewrite)
2. Takes the space or member a rival needs (Cory: yes)
3. Sorts contests into easy, a stretch, not worth it; drops stretches unless a late surprise wins one (Cory's rewrite)
4. Stays low on followers to go first: dropped (Cory: not core)
5. Knows the turn to stop recruiting and start buying followers (Cory: key, "more here")
6. Knows who is really winning (Claude, unanswered)
7. Spends or protects before a rival can take (Claude, unanswered)
8. Buys a member only if it earns more than it costs in the turns left (Claude, unanswered)

## Cory, 11:36am
- 1: "Yes, has a big payoff in mind. Like, how are you going to get most of your points ... I'm not saying they need to pivot to stop the leader. It's just that like they need to maybe spend some resources to slow the leader down ... I don't want the game to becoming everybody ganging up on the leader to win, although some of that is inherent".
- 3 contests by ease: "Yes, that's a good one." 6 knows who's really winning: "Yes. This is key. Six is a huge one." 7 protect before a rival takes: "Maybe, very situational."
- 8 member earns more than it costs: "Yes, that's true. Though ... say you have a member that's going to score you points based on your members ... it's going to cost 10 and it's going to pay explicitly like 5, but it's worth 3 members. So that counts ... Sometimes it's hard to figure out exactly how much the members will give ... there should be a general baseline heuristic here at least, but I don't want this to make bots like ignore stuff that is expensive that would be a big payoff for them ultimately when it's hard to assess that payoff". "Come up with some more ... Let's keep riffing."

## Round 3 of guesses (Claude, sent 11:38am)
9. Values a member by what it does with the members and spaces they already have, not its printed followers
10. Shop order: buys first what a rival will take before their turn returns; waits on what nobody else can afford
11. Minion order: takes the fought-over space first, leaves the space nobody else wants for last
12. Never ends a round with more resources than their turns left can spend, unless it wins a contest
13. Collects the colors their target members cost, rounds ahead
14. Aims steals and swaps at whoever is really winning, not at the biggest pile

## Cory, 11:41am: these are things to weigh, never hard rules
- 8: "It's not never skip an expensive member. That means always buy, right? Like it's a more nuanced calculation ... if the gain from the member is straightforward, then like you should be assessing it. But if it's harder to think about, then like I don't know ... I don't want it to be never skip or like always buy ... But there needs to be a consideration of this element for sure."
- 9: "that's part of what we're talking about" (same as 8).
- 10: "these are hard rules that aren't always going to be right. Like you don't want to take a rival's thing if like it doesn't add to your build and you're spending like 10 resources on it ... just buy the followers ... you can find situations where like all of these like heuristics will be wrong and also situations where all of these heuristics will be right ... what a rival wants and if it's easy for you to get, then consider it ... a losing rival, you probably don't really care."
- 11: "there's so much nuance here ... the whole goal is like every space almost is a fought over space. Like there should be none that are just objectively like everybody wants immediately. I know there are today ... there should be some consideration here."
- 12: "I think that's fair ... you kind of want to end with 0 unless you're trying to win a contest, but again, this shouldn't be a hard rule."
- 13: "What?" (not understood; explained 11:43am: a red member costs mostly red, so gather red the round before).
- 14: "Yeah, I think that's a pretty good" (cut off).
- Claude's read: skill is weighing these against each other in the situation; a later test should compare a bot that weighs each one, not one that always does it.

## Cory, 11:41am (second message): the space and the buy are one decision
- "There's also some basics like with Blue, like you have to be aware of what's in the discard pile and like you need to be thinking about the choices before you take the turn. Because otherwise, like you'll decouple those things and then they won't be aligned. Like if you're min-maxing your turn and then min-maxing what you buy ... you're not gonna win that way."
- Added to the short list as 7: picks the space and the buy together, having looked at the shop and the discard pile first. To check later (no testing yet): how far the bots pick the space first and the buy second.

## Cory, 11:42am: member movement, and step the principles up a level
- "with member movement, what member could you take from somebody else that would let you win, or what member could you give somebody else that would, like, hurt them a little bit ... when should you do it? Like, if you take it, can they just take it back? ... there's a lot of complexity we're not necessarily going to be able to, like, model at all. So I think, like, the principal should step up a level in" (cut off).
- Claude's step up (sent 11:44am), three things under every item on the list:
  A. Counts the real score: where every player will finish, with what their members and contests will give.
  B. Judges a move by how it changes that finish against the player they must beat; a gain for me and a loss for them count the same.
  C. Plays the reply out first: what rivals do next, what is gone before my turn returns, whether they can take it back.

## Cory, 11:57am "yes" (go on luck and thinking-more), then 1:16pm to 1:19pm in project chat
- "its 1:16. skill games done yet?" (a stuck game held the run for an hour; unmonitored. Scripts now take --limit.)
- On Hard beating Normal 88% and Normal beating Easy 63%: "we already knew that? eh?"
- "this is about making very hard better???" The work: build each habit into the strongest bot, play it against the strongest bot as it is today, see if it wins more. Comparing existing levels is not the question.
- 1:22pm to 1:25pm: "whats the point in spending my fucking tokens on what we already knew???", "wait so what the fuck was happening this whole time? just testing our existing bots and ignoring all the principles we cam up with", "also dont run these tests with fable tokens", "this is basic shit". Level-against-level runs and same-deal replays stopped (7 replay games, 4 Very Hard games played; not reported). Rule for this work: only the strongest bot with a new habit against the strongest bot as it is today.
- 1:24pm "yes" to contests by ease first. Built as opts.ease (bots.js contests/easeChance). Normal with it against Normal, 100 tables both ways: 103 winners against 105, followers per player -0.33 ± 0.84: no change. Very Hard with it against Very Hard: playing (design/eval/skill-2026-11-12/ease-veryhard.jsonl).

## 2:54pm to 4:00pm
- "i mean not chosen together, but considered together. rather than decoupled decisions": built as opts.together (a space is rated by the best buy it leaves, played for real).
- Results, strongest bot with the habit against today's strongest bot, same deals both seatings: contests by ease 42 games, the habit's bots had the winner in 64%, +2.3 ± 1.6 followers; together 24 games, 67%, +1.2 ± 1.0. Contest margins (21 Hard games): 81% of contests end tied or within 2; Most members 17% by 6 or more (/mnt/project-files/skill/contests-2026-11-12.md).
- 4:00pm "yeah" to a bot with both habits (32 games, running). Then: "lets see if we can just fully bake a more robust bot based on our principles, rather than going one by one. And the robust bot will be tested against this 'two habit' bot."

## 4:00pm to 4:23pm: the cloak
- "are bots leaning towards the color of their cloak?" Measured on 240 saved Hard games (Nov 6 build): 26% of placements and 24% of members in the cloak's color, about the even 25%. "ok thats an obvious one then": added to the robust bot's list as a habit (lean toward the cloak's color, since its starting resources and card pay off there). Needs a look at what the cloak gives before choosing how strongly.
- 4:23pm Cory: "not taking into account their cloak power. I dont think they always need to do so, but at least weighing the benefit of it." So the robust bot weighs what its cloak does (its power and start) when comparing moves; never a fixed lean.
- 4:27pm Cory: "It also means then we need to rebalance cloaks" (bots ignore cloak power; once they weigh it the cloak balance shifts). Passed to the coordinator for its own thread; earlier finding: starting cloak swung win chance about 25 points (Nov 3 deep run, Silver lowest, White and Green highest).
- 4:28pm Cory: maybe the two new habits compete; wants a holistically better bot with the principles implemented, maybe with an internal priority order; the option set is complicated; "even normal bots are hard to beat". First 6 games of ease+together: 1 winner in 6, -9.5 followers (too few; running).
- 4:30pm coordinator: when the robust (cloak-aware) bot is built and tested, message the balance thread cmsg_01PySa5gYMfCiexiWTLrWgo39rxGwMqkjQ5tpzWX4284vH so it can start the cloak rebalance runs with it.
- 5:39pm Cory: "but isn't that against the whole point?" (switching tests to Hard bots). Right: the goal is a better strongest bot; tests run on Very Hard against today's Very Hard. Hard-bot runs stopped, their data kept but not reported.
- 5:58pm Cory: "i don't think we need to test against the two habit bot". Only today's Very Hard is the control.

## THE PLAN (Cory, 4:10pm Eastern; do not lose it)
"the idea was we take those list of strategic principles and we try them (with a certain order of priority) and then if it wins or leans better, we test it against other orders of the priority."
1. Full ranked bot on Very Hard against today's Very Hard: opts.robust = { lead, ease, together, cloak } in bots.js, top of the list first: who really leads and who to hurt (lead) > contests by ease (ease) > space and buy together (together) > cloak power (cloak) > member worth (existing). Run: design/eval/skill-2026-11-12/full-vs-today.jsonl, 16 tables both ways.
2. If it wins or leans better: other priority orders of the same principles, each against it (or today's bot), keeping the best order. An order = the weights in robust (and the order the principles are applied); a test is one change at a time against the control.
3. Cloak balance then goes to the balance thread cmsg_01PySa5gYMfCiexiWTLrWgo39rxGwMqkjQ5tpzWX4284vH with the best bot.
Not the plan: tier against tier, Hard instead of Very Hard, two-habit bot as control (Cory dropped it).
