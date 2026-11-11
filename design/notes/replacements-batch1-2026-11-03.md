# Replacement batch 1 (8 cards), bot games only

Built on the six principles Cory said yes to (Nov 3, principles.md). Each new card takes the old card's place in its color's 10-card deck in bot games only; the game itself is unchanged. Prices are Claude's fill-ins, priced a little high. Live texts checked with the card board.

**1. Red. Turncoats** replaces **Volunteer** ("Worth 1 follower.").
Prints: [3 red + 1 any, worth 2] "Whenever a rival takes one of your members into their cult, recruit a shop member costing up to its cost, for free."
Intuitive: one sentence, a counter like **Snitch** ("Whenever a rival steals from you, they lose 1 follower.").
Fun: the thief thinks twice; when they go ahead, you get a free card the table sees.
Interacts: Red's **Promote** and **Demote**, Magenta's **Shake Down** and **Poach**, and **Double Agent** ("On Recruit: give this member to a rival and recruit one of theirs.").
Powerful: a free member each time someone comes for you.
Engine or counter: a counter to taking; with **Martyrs** ("Whenever this member leaves your cult, gain followers equal to its cost.") the thief also hands you Martyrs' cost in followers.
Its color: a new way into Red's members on the move: getting paid when yours move.

**2. Blue. Scavengers** replaces **Critic** ("Whenever a rival recruits a blue member, +1 follower.").
Prints: [4 blue + 2 any, worth 1] "Whenever a rival sends shop members to the bottom of the pile, you may recruit one of them, paying its cost."
Intuitive: "the bottom of the pile" is already Blue's words.
Fun: digging through the row stops being free.
Interacts: **Out of Style**, **Bury**, **Savings**, **Window Dressers**, **Doormen**, **Blue Cloak (Bargain Bin)** and **Patroness**.
Powerful: an extra recruit outside your turn.
Engine or counter: engine with **Proselytizers** ("Whenever you recruit, +1 follower."); a quiet counter to Blue players who bury what you want.
Its color: a new way into Blue's shop work: working the cards others throw away.

**3. Magenta. Racketeers** replaces **Crew** ("Worth 2 followers.").
Prints: [4 magenta + 2 any, worth 1] "Whenever a rival wins a contest, steal 2 of that color from them."
Intuitive: "steal" and "wins a contest" are words players already use.
Fun: every contest winner pays a tax the table sees coming.
Interacts: every color's contest; **Bodyguards** ("Rivals can't steal from you.") blocks it.
Powerful: about 8 to 12 resources a game with no minion spent (round III's tax comes at game end, so it pays in rounds I and II).
Engine or counter: a counter to holding for contests; engine with **Sticky Fingers** ("Your steals take 1 more resource.").
Its color: a new way into Magenta's stealing: from whoever just won with their pile.

**4. Purple. Night Watch** replaces **Clockmakers** ("Round Start: take your first two turns in a row.").
Prints: [3 purple + 2 any, worth 2] "Whenever a rival takes the Goes Last token, +1 follower per minion on it."
Intuitive: one sentence about the token everyone sees.
Fun: going last now pays a watcher too, so the Last Call player groans.
Interacts: **Last Call** ("...Take the Goes Last token and put your other minions on it."), **Sleep In** ("...Take the Goes Last token and put your next minion on it."), **Night Owls**.
Powerful: a rival's Last Call with 3 minions gives you 3 followers.
Engine or counter: a counter to Purple's going-last plan.
Its color: a new way into Purple's timing: profiting from someone else's.

**5. Yellow. Barterers** replaces **Dyer** ("On Recruit: +1 yellow per color you hold. Round Start: +1 yellow per color you hold.").
Prints: [4 yellow + 2 any, worth 1] "On Recruit and Round Start: swap up to 3 of your resources with one rival's, one for one."
Intuitive: a swap, one for one, like **Dilute** ("+2 yellow, then change up to 3 of rivals' resources one for one.").
Fun: you take the color a rival is holding for a contest and hand back one they don't need.
Interacts: every contest and every colored member cost; **Customs** ("Whenever a rival steals or changes any of your resources, +1 yellow.") pays the other side.
Powerful: swings two contests at once each round start.
Engine or counter: engine with **Tastemaker** ("Whenever you change rivals' resources, +1 follower."); a counter to hoarders.
Its color: a new way into Yellow's translating colors: trading with players, not the bank.

**6. Silver. Hostesses** replaces **Gift Wrapper** ("Whenever you give rivals silver, +1 follower.").
Prints: [4 silver + 2 any, worth 2] "On Recruit and Round Start: give each rival 1 silver. +1 follower per rival who then holds more silver than you."
Intuitive: give, then count who's richer in silver.
Fun: a gift every round, and you want to stay poor in silver.
Interacts: the silver contest (your gifts feed it), **High Society** ("Game End: +2 followers per rival with more silver than you."), **Silver Cloak (Caterer)** ("Whenever silver is gifted, +1 silver.").
Powerful: up to 3 followers a round at 4 players.
Engine or counter: engine with High Society and the cloak.
Its color: a new way into Silver's giving: paying when rivals end up richer.

**7. Grey. Grudge** replaces **Line Cutters** ("You go first every round.").
Prints: [4 any, worth 2] "On Recruit: choose a rival. Game End: steal 4 followers from them if they have more than you."
Intuitive: pick a rival, beat them or rob them; the choice stays put (a marker on their board).
Fun: a rivalry the whole table can see.
Interacts: with whoever leads.
Powerful: a 4-follower swing against the player you're chasing.
Engine or counter: a counter to the leader.
Its color: grey has no theme; it plays with any table.

**8. White. Heirs** replaces **Exporters** ("Whenever you recruit a non-white member, +1 white.").
Prints: [4 white + 3 any, worth 2] "Game End: +1 follower per 2 white you hold."
Intuitive: white left at the end still counts.
Fun: a big white pile at the end is now a choice between **Cash In** ("Turn all your white into followers. +1 white.") and the round III contest.
Interacts: Magenta's **Crime Wave** and **Racketeers** want that pile.
Powerful: a 16-white pile is 8 followers on top of the +10 contest.
Engine or counter: engine with **Shopkeeper** ("On Recruit: +2 white. Round Start: +2 white.").
Its color: a new way into White's "have a lot of white": holding instead of cashing.

## How they're tested
The same games played with the old cards and with these, Normal and Hard bots, 10-card deck, 4 players. For each new card: how often bots recruit it when it shows up, whether its owners win more than expected for its price, and against the card it replaced.
