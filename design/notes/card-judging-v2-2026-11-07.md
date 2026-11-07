# How we judge every card, version 2 (Nov 7)

Readable version for Cory (version 3, same system, Nov 7, after "I like it. but i need you to rewrite the whole thing in a far more readable way"): https://claude.ai/artifact/Q4KdT3BT91tj6BFWaq7xBP

Cory, Nov 7, on version 1: "it reads as, I don't know, a little not quite right to me." Written by the "Critically review the card evaluation" thread after an independent critic's read (it agreed on every point below). Doc for Cory: https://claude.ai/artifact/85jojr6Nr1VZL7gNA1MuuM (do not edit while he reads it). Supersedes design/notes/card-judging-2026-11-07.md (kept for the record). Calibration: run it on design/eval/card-judging/holdout-*.md, framing each call the way Cory made it (a pick from the list he saw).

## What was off in the first version

- **It was a checklist.** Ten separate grades from 1 to 5, and a card was flagged if any grade was low. Judges gave most cards 3s across the board, so the grades couldn't tell a card you loved from one you cut. The Red member "Whenever any player recruits a red member, +2 followers (+3 if it's you)." got 3s and 4s and passed. You sent it to the cut pile. Your own calls rest on one deciding reason ("way too strong", "too focused on member costs", "I like hot streak").
- **It judged each card alone.** You judge side by side. Many of your calls were picks from a list ("these are bad except high tide", "C"), and several nos really meant "keep the old one" ("What's wrong with hot streak?").
- **It sized a card by its usual turn.** Your "way too strong" calls are about the best case: Moonlighters, and "+10 blue in round 2".
- **It leaned on cost math.** One judge marked down a card you called "a really good one" ("When recruited: turn all your white into followers.") on five questions, all from one sum about its price.
- **It left out what you ask for most.** Is it exciting, does it feel powerful, is it elegant? "Can a table read it" is not the same as elegant.
- **Ties between colors got asked four ways**: what it combines with, is it its color's own, does it touch other colors, does the color need it. So they outweighed everything else, which you asked us not to do.
- **The guard against local maxima was only on paper.** The work was still "find the weakest card, patch it". Nothing asked what a color could be if it started fresh.
- **Its test against your calls was too small to trust.** Two judges using the same questions matched you on 18 of 22 and 12 of 22.

## The new version in short

We judge a color as a hand of cards, not one card at a time. Each color first gets its story. A few hard rules from your past calls catch broken cards. Then every card gets three questions answered in plain sentences, with no scores. Last, the color's cards are sorted into stars, fine and weak by comparing them with each other and with the same slot in other colors.

## Step 1. The color's story, before any card

- **One line**: what the color is about, in your words where you've given them. Yellow "rewards going broad… translate currencies"; Purple is "battling for a token"; White is "fewer followers… you use stuff and then you get rid of it".
- **A great game with this color**, round I to round III, in a short paragraph: what you build, when it pays off, what rivals do about it.
- **A fresh start**: the spaces and 4 or so members we'd make if the color had nothing yet.

Cards that fit neither the story nor the fresh start are where we look first. This is the real guard against local maxima: each color is compared with a different shape of itself, not only with a slightly patched copy. Each color's page opens with its story, so you can correct it there.

## Step 2. Hard rules, pass or fail

These come from your past nos. A card that breaks one gets fixed, not ranked.

- A table can track it with cards and tokens, with nothing to remember.
- It works in a game without any one other color.
- A space does everything the moment it's taken. Lasting effects belong on members.
- Every choice has two sides that someone would pick.
- It uses the game's pieces as they really are (for example, the follower cards in the shop are fixed).
- It isn't the same shape as something you've already turned down.
- It adds no new token. Tokens come only from Cory; the Goes Last token is the only one now (Cory, Nov 7: "tokens are a thing that need to come from me… I don't want you, like, willy-nilly throwing tokens in the game"). "A table can track it with cards and tokens" means the pieces already in the game.

## Step 3. Three questions, answered in sentences

1. **The moment.** Tell the best turn this card makes, the way a player would retell it after the game. Does it feel powerful? Who reacts? The owner counts: a combo landing is a reaction. Then play its top case: round III, built around it, used every chance it gets. Too big is as wrong as too small. The answer is strong, fine or flat, plus whether the top case breaks the game.
2. **The idea.** Is it one clean idea that sounds like its color? Muddy means cost math, a mechanic with a bonus stuck on, a new exception to how turns work, or a near twin of a card beside it at the same moment. The answer is clean or muddy, with the reason in one line.
3. **The ties.** What does it make better or worse elsewhere, through the pieces every game has: resources, members, the shop, the discard pile, turn order and the Goes Last token, followers, contests? Does it do that differently from the cards beside it and from other colors? The answer is one sentence. It's one question of three, so it can't outweigh the rest.

## Step 4. Compare, don't grade

- **Within the color**: spaces side by side, members side by side, sorted into stars, fine and weak. A weak card is the one you'd miss least, with the reason.
- **Across colors**: every round III space side by side, then round II, the round I spaces, the cloaks and the cheap members. A flat one stands out next to the others.
- **Against the current card**: a replacement has to make a clearly better moment, or the current card stays. Cards you've praised count as stars unless you say otherwise.

## Step 5. Evidence sits beside the call

Your notes on a card come first. Bot numbers (how often it's bought, how often its owner wins) get one line, and they can only raise a question, never decide one. No new bot games unless you ask.

## Keeping it honest

- Three fresh readers per color. Each gives a band and the one deciding reason. The majority wins, and a split is shown to you as a split.
- We test it against your past calls the way you made them ("from these four, you picked C"). Before it touches the game, it has to find your pick on 18 calls it has never seen. You get that number with how sure we can be of it.
- Calls with no reason on record ("absolutely not") are your taste, and we don't claim the system can see them.

## What you get back

One page per color: its story, then each card in its band with its full text and one deciding line. For the weak cards and the fresh-start ideas, 2 or 3 options side by side for you to pick from. No scores.

## Five of your past calls, the old version and this one

- **"When recruited: turn all your white into followers."** Old: flagged on five questions from a cost sum. New: a strong moment (save white, cash it all in at once) and a clean idea, so a star. You: "a really good one".
- **Yellow round III, "Recruit one shop member of each color you hold, paying only its colored part."** Old: passed. New: muddy (cost math), and no big moment beside Initiation ("Recruit a member in the shop costing 8 or less, for free. +1 red.") or Poach ("Recruit a rival's member you choose, for free. +1 magenta."), so weak. You: "i hate that round III".
- **Moonlighters, "From round II: after your last minion, +1 minion, placed right away on a space a rival already took."** Old: passed. New: its top case is a second Initiation in round III, a free member costing up to 8, so it breaks the game. You: "WAY too fucking strong".
- **Hot Streak's replacement, "Whenever you place a minion once everyone else is out of minions, +2 followers."** Old: passed. New: beside Hot Streak ("One Time Use: +3 followers per turn in a row you've taken just before this one."), Hot Streak has the bigger moment, so the current card stays. You: "What's wrong with hot streak?"
- **Silver round III, "Give a rival a shop member you choose. Gain followers equal to its cost. +1 silver."** Old: passed on its own. New: beside High Tide ("Each rival +1 silver, then gain 1 follower per silver the rival with the most silver holds."), High Tide is the star and this one is weak. You: "these are bad except high tide".
