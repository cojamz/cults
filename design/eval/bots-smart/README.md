# Smarter bot decisions (BOTSMART, Nov 4)

Cory, Nov 4: "It's the bots making good decisions in general, like strategic decisions." Trigger: Encore lost its A/B because bots used it with nothing good to recruit.

## What changed (src/engine/v4/bots.js, thinker.js; on with BOTSMART=1 or opts.smart)
- A use that changes nothing until the buy (Encore, discounts, second buys) is judged by how much it improves that buy (followUpGain), not by the card's rule.
- A use that pays on this turn's placement (Party Crasher) is judged by the best space it opens (placeUse).
- Hard plays each once-per-game use "now" against "keep it", both to game end on the same 6 seeds (holdOrUse).
- Recruits and spaces are credited with what they change in the owner's Round End payouts (roundEndPay; Mob, set counters).
- Tried and off (BOTHOLD=1): a use must also beat what keeping the card is worth. It held cards too long.

## Head to head (Hard vs Hard, 4 seats, same tables played twice with seats swapped, 10-card deck, By color, BOTSEE)
- duel-1 (now-or-later rollouts only): 24 games, smart won 15 seats to 9, +0.6 followers.
- duel-2 (hold bar, no rollouts): 23 games, 12 to 13, -2.7.
- duel-3 (hold bar + rollouts + Round End): 48 games, 22 to 29, -2.2 ± 1.2.
- duel-4 (rollouts + Round End, no hold bar; 58aca38a): 48 games, 28 to 23, +0.25 ± 1.2, better on 14 of 24 tables.

## Card trial
- Encore in Cory's wording, 60 games a side, MUST=echo: owners won 25% on today's bots (q-d-encore-c2), 31% on the first smart version (q-d-encore-smart). Chronicler 40% -> 35%.

## Audit
scripts/v4-bot-strategy-audit.mjs + v4-bot-strategy-report.mjs. Its "best moment" is the best of many noisy measures after the fact, so it overstates poor timing on both sides; the head to head is the real test.

Open misplays from other threads: misplays.md.

## Later rounds' contests (Nov 4 afternoon)
- Splurge probe: bots skipped a round I recruit with Splurge's bonus because spending 3 resources cut their forecast of later rounds' contests by up to 16 followers (FUTURE_CONTESTS 0.4).
- duel-5 (smart with future 0.1 vs smart): 48 games, 24 seats to 25, +1.8 ± 1.9 followers, recruits 13.5 members vs 11.6. Not clear enough to switch; opts.future stays a test setting.

## Loan payback (a9d5de76)
- Choices valued as if the chooser still had a buy this turn; under BOTSMART only when it's queued.
