# Calibration set: Cory's real taste, for checking card critics

Built Nov 4 2026 (Claude) from: design/decisions.md (DEC), design/pitch-ledger.md (PL), design/desk.md (DESK), design/strategy.md (STRAT), design/lessons/working-with-cory-changelog.md (CHG), design/eval/critic-review-2026-11-02/review.md (REV), /mnt/project-files/action-review/ (AR), /mnt/project-files/replacements/ (REP). Live = `node .claude/skills/brainstorm/scripts/live-board.mjs --members` on branch claude/gifted-newton-3lcy3i at bf42a005.
Quotes are verbatim from those files (Cory's typos kept). A quote the coordinator relayed with no message id is marked (unverified-id). "Now:" says what the card is today.

How to use it: a critic that scores a card should agree with section 1 (low) and 2 (high), and should flag every rule in section 3. Section 5 lists cases where Claude's own loop overrode something Cory liked; a loop judge should treat those as warning signs.

## 1. DISLIKED

### 1a. Live or recently live cards and spaces he said are bad, weak, too strong, confusing, or don't fit
- **Mob** (Red member) "Game End: +1 follower per red member you have." · "Mob is probably just too strong needs rework?" · Nov 3 8:01pm · DEC, DESK. Now: Claude's go-with-gut text "Round End: +2 followers per rival with fewer red members than you." (Nov 4); still counts as 4.
- **Dilute** (Yellow I) "+2 yellow, then change up to 3 of rivals' resources one for one." · "ok but complex" (Oct 30, PL) then "I still don't like Dilute" · Nov 3 8:01pm · DEC. Now: replaced by New Blood (Claude, Nov 4). Big Dilute's screen "cumbersome" (DEC Nov 4).
- **Melting Pot** (Yellow II) "+1 per color among your members, in colors you choose. +2 yellow." · "Melting Pot is worded strangely" · Nov 3 8:01pm · DEC. Earlier "+2 any per color" was "too strong" (Oct 30, DEC). Now reworded, same effect.
- **Fan Club** (Green member) "On Recruit: +1 green per Green space with anyone's minion." · "Fan club really makes no sense." · Nov 3/4 · REP fan-club-options.md, PL. Now: "On Recruit: copy an action the player with the most followers has a minion on." (Claude, Nov 4).
- **Creditors** (Silver member) "Game End: each rival loses 1 follower per 3 silver they hold." · "creditors doesn't make sense, nobody would ever have extra silver laying around. you just buy followers." · Nov 3 8:52pm · DESK. Now: Creditor "On Use, once per round: a rival you choose gives you 2 followers, then gains 3 silver." (Claude, Nov 4).
- **Leaders' Tax** wheel text (Yellow I) "+1 yellow. Choose a color: each rival with more of it than you gives you 1 of it." · "wtf is this action text" · Nov 3 ~10pm · DEC. Then the whole card fell under his rival-resources rule. Now: "Choose a color: +1 of it per rival with a minion on its spaces. +1 yellow." (Claude, Nov 4).
- **Heist** (Magenta II, was Crime Wave) "Steal half of one rival's pile of one color, rounded down." · covered by "anything that relies on a rival having more of resources should be reworked" · Nov 3 8:56pm · DEC. Now: "Steal 3 followers from a rival. +1 magenta." (Claude, Nov 4).
- **Shake Down** (Magenta II) live: "Choose a rival. They choose one of their members costing 5 or less, then pay you its cost or you steal it." · "feels bad for the other player… too good, awkward" (Oct 15, DEC) and "just feels too bad" for the receiver, goes to redesign · Oct 24 · DEC. Still live, never redesigned.
- **Loyalists** (Red member) live: "Your other members can't be swapped." · "Loyalists are too strong… just have no counter and prevent member meddling, its frustrating when a player is ahead and takes it and protects their engine." · Oct 27 · DEC. Earlier "Loyalists seems too cheap" (Oct 22). Price raised; text still a no-counter shield.
- **Lie Low** (Magenta I) live: "Steal 1 resource. Rivals can't steal from you this round. +1 magenta." · "its hard to track" (Oct 31, DEC) and with Bodyguards piling steals on the unprotected: "this feels bad. We'll remember it." · Nov 1 · DEC. Still live.
- **Stash** (Magenta I) live: "+2/3/4 magenta. This turn, if you recruit a member, +1/2/3 followers." · cut: "maybe help yourself is enough" then "yes" · Oct 31 · DEC. Stays live only until a replacement is picked.
- **Cash In** (White III) live: "Turn all your white into followers. +1 white." · "keep Cash In as something to reconsider. white in general needs a little revisiting." · Nov 1 · DEC.
- **Encore / Sample** (Green II) · "Encore mostly repeats Echo", one copy too many (Oct 28); "needs a rework or a better action, not a tweak" · Oct 30 · DEC. Now Sample "Copy the On Recruit of a rival's member." (his "maybe copy an On Recruit"); still on the backlog list.
- **Greatest Hits** (Green III) · rework "yes, backlog, not now" (Oct 29); old version "+40 in balance runs" · DEC. Now "Copy the On Recruit of each of your members" (his, Nov 1).
- **Extortionist** (Magenta member) live: "On Recruit and Round Start: steal 2 resources from the rival with the most resources." · "Extortionist probably needs some work. A lot of members probably need some work" · Oct 27 · DEC. Still reads "most resources" (Claude kept it under the rival-resources rule).
- **Go-Between** (Yellow member, still in the 15 deck) "Whenever a space gives you resources, you may change 1 of them to any color." · "It's going to be annoying in the games and dumb in the UI anyways." · Nov 1 · DEC. Replaced by Tourist in the 10 deck.
- **Yellow rearranging** (Makeover, Trade Seeds, Dilute screens) · "the yellow rearrange resources feels pretty bad" · Nov 1 · DEC; Yellow rearranging "never felt useful" · Nov 2 · PL (but see Makeover in 2).
- **Line Cutters** (grey, was Front-runner) "You go first every round." · "basically a dead card round 3" (Oct 28); "it seems pretty weak now" · Nov 1 · DEC. Now worth 3.
- **Old Doormen** (Blue) "Whenever a rival recruits more than once in a turn (swaps count), +1 blue." · "We'll figure out something else for Doormen within blue." · Nov 1 · DEC. Replaced by his offensive Doormen.
- **Sweet Talk** (Silver II) live · "Sweet Talk might be a little too strong, but thats ok." · Oct 31 · DEC (mild).
- **Largesse** (Silver III) live · "a little bit of an issue, but I think it's interesting" · Nov 1 · DEC (mixed).
- **Party Gifts** words · "party gifts action text is VERY misleading" · Nov 1 · DEC. Reworded to "Give rivals… from the bank".
- **Harvest** color picker · "all the other purchasing selectors are solid and elegant. This one doesnt meet the bar" · Nov 4 (via coordinator) · DEC.
- **Peek** screen · "Peek UI is unintuitive" · Oct 27 · DEC.
- **Spoilsports** name (counts as 1) · "why is spoilsports only 1 member, title implies more" / "it should just be one" · Nov 3 9:39pm · DEC.
- **Recruiter** (Red Cloak) tests · he was "skeptical of the test" (Nov 1); "it probably just needs to be reworked" · Nov 1 · DEC. Cloaks: "nerf red a little and buff white a touch" · Nov 3 8:52pm · DESK.
- **Bargain Bin** (Blue Cloak) at +1 · "tough one. leave at +1" · Nov 1 · DEC (mixed).
- **Shopkeeper/Landlord** (White) · "not really on theme, but it's fine for now" · Oct 22 · DEC.
- **Big Tent** · "a little similar to HR" · Oct 31 · DEC. **Explorer** · "a little generic, and definitely too expensive" · Oct 31 · DEC.
- **Kickback** (Gold I) · "strong resource gain with a little flavor", but too close to Silver · Oct 15 · DEC (Gold is off every table).
- **Lottery Winner** (Gold) · "doesn't like it" · Oct 15 · DEC. Now reworked by Claude (Nov 4).
- **Hustler** (Gold, cut) · "bad, nothing players have to remember" · Oct 15 · DEC. **Bookkeeper** called bad, **Overseer** cut · Oct 18 · STRAT.
- **Crowd In** (old Purple III) "This round you can place on taken spaces." · too strong with Greatest Hits; "It should just be like, +5 purple and gain a minion this round." · Oct 28 · DEC. Now Overtime "+3 purple. +1 minion this round."
- **Open Door** "Recruit the cheapest shop member" · "I don't really like recruit cheapest member" · Oct 27 · DEC (but he put it back for All piles, Nov 1). **Even Swap** · "Swap definitely needs a rework" · Oct 27 · DEC.
- **Chorus** (Green I) · "I don't like chorus" · Oct 27 · DEC. **Rush Hour** · "i still don't like rush hour" (Oct 22, PL); "I don't love those round 2 actions" · Oct 22 · DEC.
- **Overtime** (old: pay 8 purple for 2 extra turns) · "overtime fucking SUCKS" · Oct 15 · PL; "lose a minion for slight position gain" · DEC.
- **Sell High** · "what's a loose follower?" · Oct 15 · DEC. **Top Up** · "too bad in Round 3, and even Round 2" (Oct 17, STRAT), later "too strong round 1" · Oct 30 · DEC.
- **Late Bloomers** · "maybe needs redesign" (anti-synergy, counts itself) · Oct 24 · DEC.
- **Pilgrim** · "too weak late… can't be doubled" · Oct 31 · DEC. **Peddler** · "feels similar to something earlier" · Oct 31 · DEC.
- **Old Maid** name · "i don't like old maid" (Oct 27, DEC), yet he renamed Saboteur to Old Maid himself Oct 31 ("we need to rename the saboteur to the old maid"). Ambiguous; treat as resolved by the later call.
- **Moguls** · "I don't really like moguls" · Oct 28 · DEC. **Small Talk** · "I don't like small talk" · Oct 31 · DEC.

### 1b. Refused at pitch (name, one line, his words)
- Return the Favor "+1 silver. Each rival gives you 1/2/3 of their silver." · "the exact fucking kind of thing i dont want players to have to keep track of. Sponsor sucks. Commission sucks. Keep Good Deed sucks. bad ideas." · Oct 31 · PL.
- Magenta A "Each rival chooses: give you 1 resource, or you steal 2" · "nobody would ever choose not to give one. really basic strategic thing that makes me have no confidence in you." · Oct 31 · PL.
- Member principles: members that upgrade their color's spaces (Talent Scouts, Lookouts, Night Shift…) · "those principles are terrible... if you spend a turn to buff your crime wave, you've wasted a turn and somebody else is going to take crime wave... keeping track of who gets bonus what on which square is not great." · Nov 3 · PL.
- Members count as 2 in their color's contest · "no. the incentives need to be more inherent." · Nov 2 · PL.
- Magenta round I steal ideas (steal 1 from each rival with more followers / with a minion on a color / biggest pile…) · "these don't feel thoughtful or interesting. i feel like we're missing something elegant" · Oct 31 · PL.
- Build Up variants (on-recruit copy twice, previous player recruited) · "i'm done with this you're suggestions are bad." · Oct 31 · PL.
- Stash variants "+2/3/4 magenta, if you recruit, steal 1/2/3" · "magenta already has this but stealing, no?" · Oct 31 · PL.
- Yellow round I Plant / Mix / Bloom / Trade Seeds swap · "these are all so weak and uninteresting. wtf" · Oct 30 · PL.
- Market Day "each rival gives you 1 resource, then gains 1 yellow"; Keep Up; Shared Harvest · "still fucking awful small ball gains. nothing interesting or related to the color goal" · Oct 30 · PL.
- Wander "+1 of each other color whose space has your minion"; Window Shopping; Graft · "Wander is bad. max +2 round 1. and maybe 4 tops in later rounds. Window shopping isnt really aligned with yello? it doesnt make sense. Graft doesnt make sense?" · Oct 30 · PL.
- Melting Pot (pool and split evenly), Fusion, Bazaar, Cross-Pollinate, Mixed Bag · "no. I just don't think your brainstorming is good are you using the skill?" · Oct 30 · PL.
- Pick of the Crop, Your Pick, Top Up · "these aren't very good or creative." · Oct 30 · PL.
- County Fair "recruit one shop member of each color you hold, paying only its colored part" · "i hate that round III. also you're too focused on member costs" · Oct 30 · PL.
- Yellow as the contests color (Keep Pace, Win Now) · "no, contests are a separate color. Yellow rewards going broad… translate currencies (kind of like launderer). think harder" · Oct 30 · PL.
- Rule on Yellow's rim "Yellow pays any member's colored part" · "that's not how the rims work… so fucking dumb" · Oct 30 · PL.
- Square Up "+1 of each color you hold, for each color you hold" · "seems confusing" · Oct 30 · DEC. Big Top Up · "way too strong" · Oct 30 · PL.
- Yellow III "+2 of every other color" · "doesn't feel very good"; swap one for one / raise one color · "both terrible" · Oct 22 · PL.
- Grey movers Picketers, Exile, Royalties · "it needs to be simpler, more elegant" · Nov 1 · PL. Usurper re-pitch · "no. other ideas here" · Nov 1 · PL.
- Insomniac "When your turn is skipped, you still recruit."; Holdouts "+2 followers when you place once everyone is out" · "No to Insomniac… I also don't like holdouts. I like hot streak." · Nov 1 · PL.
- White I "+1 white; whenever a rival buys followers this round, +1 white"; Yellow III "yellow counts in another contest" · "that's more of a member effect. it's difficult to keep track of at the table. i don't like actions with ongoing effects" · Oct 22 · PL.
- White II "This turn your follower recruit has no limit" · "what does that even mean? the follower recruits are the cards in the shop…" · Oct 22 · PL.
- White members (followers equal to priciest member; +1 follower per white member per follower buy) · "complicated for no reason"; "so strong… What the fuck is this?" · Oct 22 · PL.
- White round I fresh pair · "i don't like these. can we get more" · Oct 22 · PL. "uhg i don't like these" · Oct 22 · PL.
- White "Once per game: turn all your resources into white" · "That's too strong… why are you doing these so piecemeal?" · Oct 23 · PL.
- Purple II "one turn after this one" · "a smaller crunch time….. do you understand this game at all?" · Oct 22 · PL.
- Trade places in turn order · "I like changing turn order. but it'd be very confusing at a table." · Oct 22 · PL.
- Silver II "Swap all your silver for a rival's pile of one color" · "second option is obviously too good, no? i have one silver, i use that to take all of somebody's gold" · Oct 22 · PL.
- Silver II Pass the Plate, Matching Gift, Silver Lining · "neither. the current idea is best but needs tweaks. silver needs and OUTLET" · Oct 31 · PL.
- Silver II Treat, Buyout, Rising Tide · "I don't like 2. I don't like 3. I don't like 4." · Oct 31 · PL.
- Grand Gift, Pay It Forward · "these are bad except high tide" · Oct 31 · PL.
- Gold directions (hoard grows, Payday, gold as any) · "all bad. the core gold idea doesn't work as well now that almost all colors will give resource based points at round end" · Oct 21 · PL.
- Magenta member rework (Bodyguard 1+5, Kingpin per member, Robin Hood × round) · "those magenta changes look awful" · Oct 21 · PL; Robin Hood "absolutely shouldn't scale" · PL.
- Blue round II Cash in a card · "way too strong. it would be like +10 blue in round 2" · Oct 20 · PL.
- Blue round II dig "pull a pile card into the shop" · "No this is so weak. shit like this makes me feel like you dont understand the game at all" · Oct 20 · PL.
- Blue round II claim · "promote and ransom are just straight up way better" · Oct 20 · PL.
- Blue members (+1 blue when a shop member goes down; recruit pile top) · "getting blue from cards going to the bottom seems too strong between rounds" · Oct 20 · PL.
- Green II Kick Out, Any Color, Backup Singers, Second Wind · "i don't like these" · Oct 28 · PL.
- Green I "Copy the next / your last / the first action" · "not thinking broadly enough" · Oct 18 · PL.
- Guests Doorman, Bookie, Hanger-On, Tagalong, Kingmaker · ❌; Busybody · "a little too purple leaning" · Oct 28 · PL. Guest 8s (Bidder, Ringmaster…) · "these are bad", "still no good 8 ideas" · Oct 28 · PL.
- Yellow members round 2 (Tourist-if-every-color, Collector, Pen Pal, Busker, Pilgrim) · "none" · Oct 31 · PL.
- Sphere-level: Tempo, Territory, Patronage · "bad ideas" · Oct 14; agent quadrants · "mostly sucked" · Oct 9; neutral rule-benders · "I don't like your neutrals" · Oct 14 · PL.
- Two-step gift picker · "very bad/confusing"; cute action shorthand · "We tried to get too cute… now it's hard to decipher" · Oct 15 · PL.
- Greatest Hits copies at round I amounts · "copying round 1 amounts is too confusing"; copy 1 · "just makes it the same as other copies. I need better thinking" · Nov 1 · PL.
- Barter (recruit paying followers) · "no, I don't like that" · Oct 14 · PL. Relay · "it doesn't make sense" · Oct 14 · PL.
- Starting member draft · "i do like players having to go with the flow and not getting to plan everything" · Oct 23 · PL.
- 10-cost "each rival gives you a member" guest · "would be bad in 2 and 3 player games" · Oct 28 · DEC.
- Magenta Heist member "One Time Use: steal half of every rival's pile of one color" · "interesting but too complicated" · Oct 28 · DEC.
- Member cards styled by type (borders and tones) · "the borders and colors are making for confusing visuals… counterintuitive" · Oct 28 · DEC.

## 2. LIKED
- **Echo** "Copy the previous action. +1 green." · "absolutely perfect" (the bar for round I: simple, strategic, scales) · Oct 18 · DEC. Live.
- **Recluse** "Game End: +2 followers per rival with more members than you." · "I love this one a lot." · Oct 15 · DEC. Live.
- **Squatter** (now Party Crasher) · "really great… maybe TOO strong in round III" · Oct 15 · DEC. **Party Crasher** · "I like party crasher. It doesn't seem like aggressively too strong" · Nov 1 · DEC. Live.
- **Doppelganger** · "really good" / "great, too cheap" · Oct 15/18 · DEC. Live.
- **Impressionist** · "great" (Oct 18); "I like it" (Oct 29) · DEC. Live as Green Cloak.
- **Stunt Double** · "Elegant." · Oct 18 · DEC. Live.
- **Crunch Time** "Your next two turns come right after this one." · "Crunch Time is great" · Oct 21 · DEC. Live (bots and critic rate it low; his gut wins).
- **Last Call** shape · "YES now you're cooking" · Oct 22 · DEC. Live.
- **High Tide** "Each rival +1 silver, then gain 1 follower per silver the rival with the most holds." · "1 is quite good. then you try to get others more silver, and you can pay yours down. I like it quite a bit" (Oct 22); "actually it was kind of fun" (Oct 28) · DEC. Not live: he replaced it with Largesse himself (Oct 31 8:17pm).
- **Rising Tide** · "I like this one a lot" · Oct 15 · DEC. Not live (he cut it Oct 31).
- **Party Favors / Potluck** "+2 silver. Each rival gives you 1 resource of their choice, then gains 2 silver." · "I really like party favors" (Oct 31); "I lean on keeping party favors" (Nov 1) · PL, DEC. Live.
- **Party Gifts** · "Party Gifts is a good idea. Can I got 5 more?" · Oct 31 · PL. Live.
- **Makeover** "+4 yellow, then rearrange your resources into any mix of colors." · "oh no i like makeover as is" · Nov 2 · DEC. Live.
- **Spree** · "I still don't think this is weak" · Oct 29 · PL. **Recruit Twice** · "it can be a 20 follower swing" · Nov 1 · DEC. **Buy Twice** · "I like Buy Twice" · Oct 20 · PL. Live.
- **Splurge** shape · "1 is really good" · Oct 22 · PL. **Exchange** shape · "I like 1 actually" · Oct 22 · PL. **Estate Sale** shape · "yeah 3 is good improves on mine" · Oct 22 · PL. Live.
- **Cashier** "On Recruit: turn all your white into followers." · "a really good one… a good example" · Oct 22 · DEC. Live.
- **Farewell / Estate Sale** casting out a spent member · "the whole idea of white is you're supposed to be able to do this" · Nov 1 · DEC.
- **Hot Streak** · "I like hot streak. What's wrong with hot streak?" · Nov 1 · PL. Live.
- **Con Men** · "i like con men" · Nov 1 · DEC. Live.
- **Scout(s)** · "I like scout, why cut? just bad? make it more members maybe"; piles "scouts good" · Nov 1 · DEC. Out of the shuffled deck (see 5).
- **Gardener** · "i like" · Oct 31 · DEC. **Big Tent** · "I like the big tent suggestion" · Oct 31 · DEC. **Matchmaker** stays · "yea" · Oct 31. Live.
- **Choir** · "choir I like for green" · Oct 28 · DEC. **Muse** · "He likes Muse" · Oct 27 · DEC (replaced, see 5).
- **Agents** · "i like agents moved around as a sabotage bocker" · Oct 28 · DEC. Live.
- **Snitch** · "I like the counter" · Oct 21 · DEC. **Fence** · "yes… i think" · Oct 21. Live.
- **Inquisitor** · "I like inquisitor actually" · Oct 28 · DEC. **Second Wind / Coach** · "Yeah I like the On Recruit use one of your One Time Use members again" · Oct 28 · DEC.
- **Headhunters** (recruit a rival's member) · "definitely say yes to the headhunter" · Nov 1 · PL.
- **Pocket Watch** · "3. yeah i like it" · Oct 24 · DEC. Live.
- **Underdog** · likes it, interactive · Oct 15 · DEC. **Treasurer** · "really good"; **Penny Pincher** good · Oct 15 · DEC (Gold off tables).
- **Trade Seeds** · "trade seeds is good" · Oct 30 · DEC (replaced, see 5).
- **Dye Job** · "I like dye job" · Oct 30 · PL (later "I don't like our Round II actions (Fill Out, Dye Job)", Oct 30 1:29pm).
- **Bandwagon** · "dynamic as the round goes on" · Oct 15 · DEC. Not live.
- **Gift Wrapper** "Whenever you give rivals silver, +1 follower." · "2. yes" · Nov 1 · DEC (replaced, see 5).
- **Two shop decks** · "two shop decks is rather smart" · Oct 23 · PL.
- **Goes Last token** · "a Goes Last token actually is fine… it can come with the purple set" · Nov 1 · PL. Colors with pieces: "individual colors have their own little accompaniments".
- **Cloaks** · leader wears the color, "better than the artifact cards themselves" · Nov 1 · DEC.
- **Artifacts on any move** · "i like the artifacts linking to any move, not just your own." · Nov 1 · DEC.
- **Critic review diagnosis** · "yes, every turn is biggest turn/number, and you never quite feel the payoff (except for sometimes)"; likes directions 1 (resources worth more to one player) and 3 (each rim its own contest) · Nov 2 · DEC.
- **By color contests** · "own contest. very likely we will go that way" · Nov 3 · DEC.
- **Playtest of v0.99.537** · "Everything worked as expected. Things are feeling good!" · Nov 3 8:09pm · DESK.
- **New members volume** · "eh lets overindex on bringing them in. We'll fix them up as I play with the new versions" · Nov 3 9:24pm · DESK.
- **Balance-1.0 list format** · "really good… I like this kind of style" · Nov 1 · CHG.

## 3. RULES OF TASTE
- Nothing relies on a rival holding more resources · "anything that relies on a rival having more of resources should be reworked" · Nov 3 8:56pm · DEC (CHG/REP date it Nov 4).
- Players spend everything; nothing assumes held piles at game end · "nobody would ever have extra silver laying around. you just buy followers." · Nov 3 · DESK. One buy a turn stays: "no definitely not." · Nov 3 · DEC.
- Feel powerful · "everything should feel vaguely powerful" · Oct 9 · STRAT. "every action should feel GOOD to take, and distinct" · Oct 15 · DEC.
- Implicit interaction · "implicit, not explicit, interaction (Green's copying does this well)" · Oct 15 · DEC.
- Cory's three for new cards · "intuitive and easy to understand, fun to play, interacts with either the color, with other colors, or both" · Nov 3 · DEC.
- Engine or counter, without over-indexing · "not EVERYTHING needs to support the engine… the best and most elegant ones will be engine builder OR counter in the right situations. but don't over-index on that." · Nov 3 · DEC.
- Engine-building over vacuum choices · "more about the engine building than about making good action choices in a vacuum" (Oct 22); "you never quite feel the payoff" (Nov 2) · REP principles.md.
- Table-trackable · "we can't cheat and do it digitally. the mechanism itself has to translate to a tabletop game." · Nov 1 · CHG. "its hard to mentally track number of steals a round" · Oct 27 · DEC. "at a table it would be too hard to keep track of and remember what 22 of your members do" · Oct 27 · DEC.
- No ongoing-effect actions · "i don't like actions with ongoing effects" · Oct 22 · PL.
- No space buffs from members · "keeping track of who gets bonus what on which square is not great" · Nov 3 · PL.
- Choices must be real · "nobody would ever choose not to give one. really basic strategic thing" · Oct 31 · PL.
- Simpler and elegant · "it needs to be simpler, more elegant" · Nov 1 · PL. "maybe the members should be more emoji like? and simpler concepts?" · Nov 3 · DESK.
- Build exactly what he said · "crunch time doesn't need any explanation… only you overthought it" · Oct 21 · CHG. "why'd you change that? they should be kept as is" · Nov 1 · CHG.
- Names feel right · "they should FEEL right… nothing should feel tryhard or arbitrary" · Nov 3 (unverified-id) · DESK. Names say what a card does · Oct 15 · DEC.
- Singular names for one-member cards · "why is spoilsports only 1 member, title implies more" / "it should just be one" · Nov 3 · DEC (mirror of the Nov 1 plural rule).
- Incentives inherent, not multipliers · "the incentives need to be more inherent" · Nov 2 · DEC.
- Not auto-buys · "the members need to be such that they aren't auto buys. the engine-building isn't quite there yet" · Nov 3 (unverified-id) · DESK.
- Mild sting only · "stuff can feel bad for the other player, just not CRAZY bad, like straight up losing a member (unless it's a round-III action)" · Oct 15 · DEC.
- No rescue clauses · "taking a space you can't use is on you" · Oct 14 · STRAT.
- No space that charges you · "no board action should require spending" · Oct 15 · STRAT.
- No out-of-turn minion placement · Oct 14 · PL ("I don't like your neutrals").
- Round I size · "max +2 round 1. and maybe 4 tops in later rounds" · Oct 30 · PL.
- Round II bar · claim "promote and ransom are just straight up way better"; dig "so weak" · Oct 20 · STRAT. "I like an R2 thats close to an R3" · Oct 31 · DEC.
- One round III space per color · "colors have one round 3 space" · Oct 27 · DEC.
- No round-end members (mostly) · "I don't like round end stuff" (Oct 23, PL); "i dont like round end" · Oct 31 · DEC.
- More follower triggers · "more members should give follower triggers. like side quests" · Oct 31 · DEC.
- Don't overtune size · "Its more of like a 30% adjustment than a 50% adjustment" · Oct 27 · DEC. Target cult 8 to 10 cards · Oct 27 · DEC. "i don't love that more members always wins" · Oct 25 · DEC.
- Too much rival-resource changing · "way too much 'change rivals resource'… nothing really benefits from that" · Nov 1 · PL.
- Yellow's identity · "Yellow rewards going broad… translate currencies"; "contests are a separate color" · Oct 30 · PL. "this is more currency manipulation that it is treating different members" · Oct 30 · DEC.
- Not focused on costs · "you're too focused on member costs" · Oct 30 · PL.
- A pile of one color isn't special · "the core gold idea doesn't work as well now that almost all colors will give resource based points at round end" · Oct 21 · PL.
- Scaling that shouldn't · Robin Hood "absolutely shouldn't scale" · Oct 21 · PL.
- Works at 2 and 3 players · "would be bad in 2 and 3 player games" · Oct 28 · DEC.
- Members live where their idea lives · Busybody "a little too purple leaning" · Oct 28 · PL; principle Oct 15 · DEC.
- Paying for itself on arrival allowed, not loved (Mime) · Oct 15 · DEC.
- Wild counts work for the owner · "Dabblers always works optimally for the player in the logic" · Nov 1 · DEC.
- Prices · "at a minimum things should cost 2 (one color, one wild)" · Oct 21 · DEC; lean pricier, lift with followers first · CHG.
- Bot stats aren't design flaws; human play refines · "let's not overdo it. we'll use humans to refine" · Oct 21 · DEC. "we should start thinking more of patterns than individual cards" · Nov 3 (unverified-id) · DESK.
- Go with the flow · "i do like players having to go with the flow and not getting to plan everything" · Oct 23 · PL.
- Mechanic first · "Don't over-index on cult." · STRAT (undated).

## 4. ACTION IDEAS HE LIKED, NOT LIVE NOW
- Magenta I: "Steal 1 of each contest's color from its leader, if it isn't you." · "A, but i want more ideas" · Oct 31 2:16pm · PL; standing pick for Stash's slot (DEC, design/1.0.md). Not live. Risk: it reads rivals' piles, so it may clash with his Nov 3 rival-resources rule, and By color contests change what "leading" means.
- Round II follower-per-contest bonus · "maybe that follower bonus should go to a round II action" · Nov 2 · DEC. Not live (Claude dropped it from Big Dilute, Nov 3, on a bot number).
- Night Owls "+1 minion, placed after everyone else's" · "fits the name better" · Nov 1 · DEC. Not live: Claude changed it to "placed right away" Nov 3 on bot data.
- White III "Take 2 followers from each rival ahead of you." · "I like #1 i suppose" · Oct 21/22 · PL, DEC. Not live (Cash In).
- White "gain the prize of one contest you lead now" · "good, a little too strong in round 3", saved for a contests color · Oct 22 · PL. Not live.
- White I "+1 follower and +1 white × round" · "yeah. let's do that." · Oct 22 · PL. Not live (Allowance went Gather-style Oct 31).
- Purple I Catch Up (his idea): 1, 2 or 3 purple for your first, second or third minion placed · "the tension: take it early for less, or hold out" · Oct 15 · DEC. Not live.
- Bandwagon (grows as the round fills) · "dynamic as the round goes on" · Oct 15 · DEC. Not live.
- High Tide · "I like it quite a bit" · Oct 22 · DEC. Not live (his own swap to Largesse).
- Rising Tide · "I like this one a lot" · Oct 15 · DEC. Not live (he cut it).
- Yellow III "Do one round I action of each other color" · "i like that quite a bit. it becomes a bit too strong with green" then "let's nix this idea" · Oct 22 · PL. Not live, nixed by him.
- Yellow Rainbow "for each color among your members, do one round I action of that color" · "Its so similar to green. idk but maybe" · Oct 30 · PL. Not live.
- Rainmaker "Raise each of your colors to match your yellow" · liked (as a once-per-game member) · Oct 30 · DEC. Not live.
- Dye Job "Turn up to 8 of rivals' resources into yellow… +1 yellow per 2 turned" · "I like dye job" · Oct 30 · PL; then "I don't like our Round II actions" the same day. Not live.
- Fill Out "Raise each color to the number of colors you hold." · "Fill Out is ok" then disliked · Oct 30 · DEC. Not live.
- Gold "bank" (each gold action adds a coin to a visible pot) · "I do like a gold 'bank'" · Oct 21 · PL. Gold is backlog.
- Contest prizes 3/6/9 · "maybe the competition points need to be buffed? … Im thinking maybe 3 6 9" · Oct 27 · DEC. Not live (4/6/10).
- Set bonuses as trios · "i like trios across colors but they could also be within colors", "could be scaling bonuses as you collect" · Oct 27 · DEC. Not built.
- Follower-spending color · "yes but table this" · Oct 27 · DEC. Not built.
- Greatest Hits directions (trade your recruit; copy the leader's round I actions; share the hits) · no verdict · Nov 1 · PL.
- Nov 3 action review picks: fix going wide through red members that count as several; new Purple spaces that fit going last; Largesse "up to 6" · Claude's defaults only, no verdict logged · AR list.md, PL. Not live.
- Heist and Leaders' Tax reworks · Claude shipped under go-with-your-gut Nov 4, no Cory verdict yet · AR rival-resource-spaces.md. Live on the branch.
Liked and live (for contrast): Gather "+1/2/3 followers if you recruit" ("B", Oct 31), Savings shop dig ("C", Oct 31), Splurge, Exchange, Estate Sale, Party Gifts, Potluck, Sweet Talk (his words), Makeover, Sample (his On Recruit idea), Overtime (his "+5 purple and gain a minion"), Hold Up (his "the next TURN is skipped, even your own"), Last Call, Sleep In's go-last (his concept), Crunch Time, Echo, Recruit Twice, Spree, Tryout +2 red ("1 yes").

## 5. Where Claude's own loop overrode something he liked (warning signs for an unattended loop)
- **Muse** replaced by Impersonator (Nov 3); he "likes Muse" (Oct 27) and said "no to replacing small '+1 when a rival does X' cards first" (Oct 27).
- **Gift Wrapper** (his "2. yes", Nov 1) replaced by Hostesses (Nov 3).
- **Trade Seeds** ("trade seeds is good", Oct 30) replaced by Leaders' Tax (coordinator, Nov 3), after he did ask to replace it Nov 2 ("let's see ideas for 3"). Resolved by him, not a breach.
- **Scouts** ("I like scout, why cut?", Nov 1) replaced by Spoilsport in the shuffled deck (Nov 3); kept in piles.
- **HR** (his Archivist idea, Oct 28) replaced by Sore Loser; **Kingpin** ("1 yea", Oct 21) by Kidnapper; **Triplets** (his Twins → Triplets) by Body Snatchers.
- **Night Owls** placement he chose ("fits the name better") reverted on bot data (Nov 3).
- All ran under "use your judgement" / "make judgement calls", but they break "build his calls exactly" and "a test… calling one of his logged calls a bug is a question for him". A loop judge should hold any change to a card he named positively for his eyes.

## Play scores depend on when the card was bought (evaluators, Nov 4 7:10am)
On the four play anchors, Godparent scored 1.58 and Mentor 1.50 (both bought early), while Extortionist scored 0.83 and Proselytizers 0.58 (both bought by Hard bots in round III). Those two cards are not weaker on paper; the late buy left the sheet only a turn or two to show the card working. So an absolute play score tracks purchase timing as much as the card itself. That is why the ship gate is now blind A/B play against the old card from the same seeded seat (scripts/quality/play-ab.mjs), and why absolute play scores only rank cards.
