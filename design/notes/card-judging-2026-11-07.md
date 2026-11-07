# How we judge every card (Nov 7)

Cory, Nov 7: "come up with a really, really good robust evaluation system… well-rounded… not to overweight on the color interaction… it becomes really likely for us to hit local maximas… it needs to be thought of in a way of like how they all connect to each other." Then: "don't skimp on integrity."
Doc for Cory: https://claude.ai/artifact/9US8nrf77fdKoBfZUvQUTF (do not edit while he reads it). This file is the working copy for readers and agents.

## The ten questions (v2, after calibration run 1: design/eval/card-judging/run1-result.md; each 1 to 5, one line of reason, a played turn behind it; no weighted total)
1. Can a table read it and run it? One sentence, nothing to remember, works with cardboard. A new exception to how turns or placement work, or a card that is mostly cost arithmetic, scores 2 or lower unless one plain sentence covers it with nothing to remember. (Cory's "intuitive"; "simpler, more elegant"; "too focused on member costs"; "we can't cheat and do it digitally")
2. Does someone at the table feel it? A sting, a gift, a reason to block, or the owner's own payoff moment (a combo landing, a big turn). Quiet engine pieces count when the owner notices them paying. Score 2 or lower only when nobody, owner included, would notice it fired. (Cory's "fun")
3. Is there a real choice? Taking or using it costs something, and both sides of any choice can win. (Oct 31 "nobody would ever choose")
4. Is it the right size for its slot or price? Round I 2 to 4, round II changes what you own, round III a burst; members return about twice their cost. Two-sided: too strong for its round scores as low as too weak. ("everything should feel vaguely powerful"; "way too strong… like +10 blue in round 2")
5. What does it combine with? It builds an engine or counters one. ("Engine building, not good picks in a vacuum")
6. Is it its color's own? A way into the color's theme. A sibling that does the same verb at a different size, or pays in a different thing, is fine. Score 2 or lower only when it repeats a card already in its color at the same scale and payoff, or does another color's verb.
7. Does it touch the other colors? Through resources, members, the shop, the pile, turn order, followers, contests. Never naming or needing another color, never friction. (Nov 7 lens)
8. Does it hold up across tables? Round I and III, 2 to 4 players, any mix of colors. (colors rotate between games)
9. What does real play say? Cory's games, then Hard and Very Hard bots, the skill ladder, AI players. His notes outrank bots.
10. Is it better than what it replaces, and does the color need it? Play the old card and the new one in the same turn. A change that is tiny, that removes a card players like, or that gives the color a job it already has scores 2 or lower. New cards in an open slot: does the color lack what this does? ("What's wrong with hot streak?"; "That's like a tiny change"; "magenta already has this")

Flag: any question at 2 or lower, or weakest in its color on two or more. Every score of 2 or lower needs a 4-player played turn.
v1 (nine questions, run 1): 26 of 44 agreed with Cory (59%), failed the bar.

## Three layers
1. The card (the nine questions).
2. Its color as a set: strong to weak range, several ways into the theme, own counters, a go-deep card and a cheap pickup, no two cards doing one job, round III pays off rounds I and II.
3. The whole game as a card web: each card tagged with what it gives, takes and counters in shared pieces. Finds orphans, untouched pieces, overlaps, and colors that only work with one other present. "How winners won" (distinct winning plans) is the check.
A change must improve or hold all three layers.

## Calibration
Score about 40 ruled cards and pitches blind; if it disagrees with Cory on more than about 1 in 5, fix the questions first. Each color: a fresh reader, then a skeptic who tries to knock down every low score. Files: design/eval/card-judging/.
