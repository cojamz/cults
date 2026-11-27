# What Wallflower doubles: audit (Nov 3, from Cory's "copying Polish didnt double with Wallflower. gotta audit what wallflower works with")

Wallflower: "Whenever you copy an action, double the resources it gives you."

How a copy works in the engine: a copy either hands over the space's recorded gain (a chip, e.g. "+3 green"), or, for a space that trades, takes, recruits, gives an extra turn or asks a choice (copyDoesIt or "redo"), the copier does the action again. Wallflower and Translator only touched the first kind.

| Copy path | Before | After |
|---|---|---|
| Echo / Reprise / Understudy / Stunt Double / Sleepwalker / Opening Act / Tribute Band copying a plain-gain space (Build Up, Golden Years…) | doubled | doubled (unchanged) |
| Same copiers on a do-it-again space: Polish, Sweet Talk, Toast's rivals, Allowance, Exchange, Sleep In, Hold Up, Right Away, Overtime, Crunch Time, Last Call, Walk-In, Open Door, Tryout, Gather, Promote, Demote, Out of Style, Peek, Recruit Twice, Bury, Spree, Stash, any steal or trade | not doubled (Cory's bug) | every resource the space puts in your pool is doubled; what you pay, rivals' gains and followers are not |
| Cover (copy an empty action) | never doubled | doubled |
| Copying an Echo/Reprise/Cover space | its +1 green not doubled; the copy inside it doubled | +1 green doubled; the copy inside doubled once (never twice) |
| Translator ("What you copy comes as green") on do-it-again spaces and Cover | not green | green |
| Impersonator holding a rival's Wallflower, Translator, Choir, Ensemble, Bait or Impressionist | did nothing | works like the member |
| Sample, Greatest Hits, Tryout's On Recruit (copy a member's On Recruit) | not doubled | not doubled: an On Recruit isn't an action (Tryout's own +2 red is) |
| Doppelganger as Wallflower | doubled | doubled; two Wallflowers still double, not quadruple |

Open for Cory (default in brackets, built that way):
1. A copied steal: you get double, the rival loses only what the card takes [yes].
2. A copied conversion (Polish, Sweet Talk's "turn silver into other colors"): the colors you get are doubled, so a copied Sweet Talk turns 1 silver into 2 [yes, same as Polish].

Tests: src/test/engine/v4/wallflower-copies.test.js.
