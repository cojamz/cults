# The picky UI bot

Cory, Nov 4: "we need a picky UI bot playing some games and sniffing out these issues" (Timekeeper's line showing a
resource dot for "3 purple" when the card counts members; Big Tent's hover saying its effect twice).

    node scripts/picky/picky.mjs [--games 2] [--url <base>] [--out <dir>] [--no-sweep] [--max-min 25]
                                 [--looks pictures,emoji] [--tables red,echo,thieves,purple;market,trading,silver,yellow]

About 4 minutes a game. With no `--url` it plays what's live: main's `play/` folder (the published build) served
here, since a cloud box can't reach github.io. `--url http://127.0.0.1:5173/` plays a dev server instead.

## What it does

1. **Members page sweep** (both looks): every member's full card on `?lab=members`, Details view, color by color.
2. **Games**: one seat against three bots, a different table and look each game. On each of its turns, with the
   table at rest, it reads the seats and the shop, then rests the pointer on every wheel space, rim plaque, shop card
   and seat member (once a round each) and reads the card that opens. Then it places, recruits and answers choices
   the way the e2e drivers do (e2e/v4/lib/answer.mjs). Table screenshots every few turns and the results screen go
   in `shots/` for a look by eye.

## First-time-player readers (the main catch)

Cory, Nov 4: "this isnt nearly enough issues ... The bot needs to approach it as a player learning the game for the
first time. or at least not have expert context." The checks below catch only what code can measure; most issues
are found by eye. So:

1. `node scripts/picky/picky.mjs --album --games 1 --tables <4 colors> --looks pictures|emoji --out <dir>` saves a
   picture of every screen a player meets, in play order (`<dir>/album/`: home, setup, every table turn, every hover
   card, every sheet and payment, the recruit phase, round cards, results). Two games in parallel cover all 8 colors.
2. Split the list into ~40-picture batches (`split -n l/5 -d`) and give each to a fresh Agent (general-purpose) with
   only scripts/picky/reader-brief.md: the rulebook and the pictures, no code, no project files.
3. One more fresh Agent merges the notes and checks each against the engine, the screen code and
   design/decisions.md: BUG, WORDING, RULEBOOK, DESIGN (Cory's), NOT AN ISSUE. Fix BUG and WORDING; RULEBOOK
   fixes go in design/rulebook.md; DESIGN goes to the coordinator.

## What it checks (checks.mjs)

| check | what |
|---|---|
| said twice | a sentence twice on one card (a two-trigger rule's one line per trigger excepted); the emoji look's one-line rule over the full rule |
| number mismatch | a number in a member's one-line rule its rule doesn't have; a price disc against the cost line; a wheel panel's number its hover never says; a seat's followers, members or resources against the saved game |
| wrong symbol | a resource dot where the rule counts members of that color, or a member figure where it counts resources ("per 3 purple" for "per purple member") |
| rule text differs | the full rule on a card missing words from the member's rule |
| junk text, doubled word | "undefined", "NaN", "[object", "the the" |
| off screen | a hover card running past the screen's edge |
| cut off | text cut by its box or spilling out of it, whole screen, with a card open and without (e2e/v4/lib/textclip.mjs) |
| unlabeled | a final-score bar part with no words or number |
| stuck, page error | the bot's clicks doing nothing; errors in the console |

Severity: **wrong** (says X, does Y), **confusing** (a table would argue or misread), **looks off**.

## Output

`<out>/findings.md` (one line per finding, deduplicated, each with where it was seen and a screenshot),
`findings.json`, `cards.jsonl` (every card read, for new checks), `shots/`. Default out:
`/mnt/project-files/picky/<date-time>/`.

The running list across runs, with what was done about each: design/eval/picky/findings.md.

## Adding a check

Read the card's facts in `probes.mjs` (in-page, self-contained functions) and judge them in `checks.mjs`. A check that
fires on something by design gets an exception with the reason, never a weaker test. `cards.jsonl` from a past run
is the quickest way to try a new check without playing.
