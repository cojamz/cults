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
