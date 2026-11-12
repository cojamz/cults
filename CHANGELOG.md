# Cults changelog

Player-facing releases, newest first. What's live is main's play/build.json: a section newer than that version is on the branch, not yet published. Agent process: [design/releasing.md](design/releasing.md). Verified retrospective source/deployment timeline: [design/release-history.md](design/release-history.md).

## v0.99.744 — 2026-11-12

- The **Goes Last token** holds all your other minions, from every card: **Overtime**, **Latecomers** and the rest say so.
- Round end: the flying followers read "+4 followers" and what paid them (the color's contest, or the member), big enough to read. The log lists every player's count for each contest, and what a **Mannequin** added.
- Hovers: your members row opens the member you point at (the next one's hover reached over it). A space whose numbers change by round prints its card sentence, not "2/1/2". **Splurge**'s You'd get no longer showed +1 white partway through a turn.
- **Purists** joins in round I; **Banker**, **Brethren**, **Merchant** and **Extortionist** cost 7, **Mentor** and **Clan** 8. **Test Drive** on **Seat Filler** now recruits the member you pick. **Minimalists**: "Game End: +2 followers per member you have costing 8 or more."
- Easy and Normal bots open on Build Up less often.

## v0.99.743 — 2026-11-12

- You'd get: free recruits never show a price

## v0.99.742 — 2026-11-12

- Clearer action words: panels lead with the gain, the +1 says only the first taker gets it, You'd get names your best pick and its price

## v0.99.741 — 2026-11-11

- A space's hover adds up: Why names the space's own part (On a Roll: 2 turns in a row, +4) beside a cloak's or member's

## v0.99.740 — 2026-11-11

- Round End members resolve player by player in turn order: a later **Paupers** sees the silver an earlier **Cat Burglars** took.
- **Bodyguards** and **Snitch** answer one Heist once, not once per pick. **Splurgers** and **Barker** each give their own extra followers buy.
- **Swap Shoppers**' member from the discard pile counts as your recruit and can't take a member Loyalists protects. **Power Shoppers** pays once a turn. **Mimics** can use Fan Club's and Stunt Double's On Recruit. **Last Callers** takes the token after your last minion too. **Early Traders** swaps after other Round Start income.
- Fixed: two ways a game could loop forever (Double Agent swapped straight back; copies copying each other). **Test Drive** now fires Round End members.

## v0.99.739 — 2026-11-11

- New members: Brethren and Purists (Red), Last Callers (Purple), Leavetakers and Minimalists (White)

## v0.99.738 — 2026-11-11

- Blue: **Swap Shoppers**, **Thrift Hunters** and **Repeat Customers** join; **Power Shoppers** pays +3; **Repossessors** sends a rival's member to the discard pile; Critic, Window Dressers and Trendsetters leave.
- **Consolation Prize** (was Sore Loser): "Round End: if you win no contest, +5 followers." Mob and Buskers leave. Yellow's Headhunters shows as **Talent Scouts**.
- Fixed: a game could stall when Sample copied Mimics, which copied a member that copied Sample again. Sample no longer offers Mimics.

## v0.99.737 — 2026-11-11

- **Greatest Hits** copies only your own minions: "Choose a color other than green. Copy every action with your minion on its spaces."

## v0.99.736 — 2026-11-11

- Magenta: Bodyguards steals 1 back instead of blocking; Cat Burglars (steal 3 at round end) replace Second-Story Man; Kidnappers: at round end a rival you choose gives you a member, worth 2; Double Agent swaps for a rival's member costing up to 8

## v0.99.735 — 2026-11-11

- **Greatest Hits** copies only rivals’ minions: "Choose a color other than green. Copy every action with a rival’s minion on its spaces." **Tribute Band** is out of Green’s deck; **Ensemble** "Whenever you copy your own action, +1 follower." takes its place. Purple Cloak: "Whenever you take the Goes Last token, +2 purple." (was +3). Magenta Cloak: "Whenever you steal, +2 magenta." (was +1).

## v0.99.734 — 2026-11-11

- **Night Traders** is now **Early Traders**: "Round Start: swap up to 4 of your resources for other colors, one for one."
- **Matchmaker**: "Whenever you recruit a yellow member, +2 wild, +3 followers."
- New Yellow members **Exchange Students** "On Recruit: swap one of your members for a rival’s member that costs the same.", **Headhunters** "On Use, once per game: recruit a member costing up to 6 for free." and **Cosmopolitans** "Round End: +1 follower per color among your members."
- Out of the deck: Jack-of-All-Trades, Seamstress, Counterfeiters.

## v0.99.733 — 2026-11-11

- **Loan Officers** now reads "On Use, once per round: swap up to 5 of your silver for rivals’ resources, one for one."
- New Silver members **Bookies** "On Recruit: turn in up to 4 silver for 2 followers each." and **Hustlers** "On Recruit: swap all your silver with a rival’s."
- **Guest of Honor** and **Patrons** are White members now.
- Out of the deck: Debt Collectors, Ballroom Dancers, High Society, Toastmaster.

## v0.99.732 — 2026-11-11

- Doppelganger recruited with Buyout now does its copy's On Recruit.

## v0.99.731 — 2026-11-11

- New Silver member **Splurgers**: "Whenever you recruit a silver member, you may also buy followers."
- New Silver member **Toll Collectors**: "Whenever any player buys followers with silver, +1 follower."

## v0.99.730 — 2026-11-11

- New Silver member **Paupers**: "Round End: if you hold no silver, +3 followers."
- New Silver member **Loan Officers**: "On Use, once per round: give a rival up to 5 of your silver, then take as many of their resources, you choose which."

## v0.99.729 — 2026-11-11

- Wheel: each space's face now says its catch (Borrow's round-end discard, Markdown's 2 less, Swindle's give-back, the Goes Last token, Flaunt's per 3 silver); a minion no longer covers a taken space's words.
- Heist counts as one steal: the Magenta Cloak and Fence pay +1 magenta once per Heist, not once per pick.
- Polish: a later taker turns all its silver after the +2; only the last +1 silver is lost.
- Hovers: a claimed first-taker +1 shows struck through; You'd get counts followers you steal and names the member a steal comes from.
- Log and seats: clearer lines for gifts, Borrow's round-end discard and shop members given; your seat says "your turn next" while a rival's move plays; Markdown's and Promote/Demote's sheets fit.
- Rulebook: member worth, Goes Last token, spare minions, timing words, fewest contests, copies and Promote/Demote explained.

## v0.99.728 — 2026-11-11

- A question for you during a rival's turn (like Gift Swappers asking for a member) is no longer covered by their turn card.

## v0.99.727 — 2026-11-11

- When Agents stops a copy, the log says Agents is why

## v0.99.726 — 2026-11-11

- Yellow: Makeover "+4 yellow. Then rearrange your resources into any colors." moves to round II in place of Housewarming; new round III space Offering "+5 yellow. Each rival discards 2 of each color among your members."

## v0.99.725 — 2026-11-11

- Red: Late Shift replaces Trending in round I: "Recruit a shop member costing up to 2 per minion you’ve placed this round, for free. +1 red."

## v0.99.724 — 2026-11-11

- Write-Off replaces Estate Sale; Agents: your actions can't be copied

## v0.99.723 — 2026-11-11

- The Live/Test cards setting is gone: every game plays the Test version's members (Anchorites, Old Guard, Repossessors, Protesters, Gift Swappers, Purifiers) with today's spaces.
- New setup setting, **Space +1**: "Once a game" (the default) gives a space's "+1 of its color" only to the first player to take it; a dot under the space shows it's still there, and the +1 flies to you on its own. Copies never get it. "Every time" plays as before.

## v0.99.722 — 2026-11-11

- Yellow: Harvest "+3 in colors you choose." in every round; New Blood "+2 yellow. If you recruit a member this turn in a color none of your members have: +3 yellow."; Melting Pot "For each color among your members: +1 follower and +1 of that color (grey: 1 of any color)."

## v0.99.721 — 2026-11-11

- Farewell and Estate Sale: shorter words, same effect

## v0.99.720 — 2026-11-11

- White: Modest Means replaces Allowance: "+2 white. +1 white per rival with more members than you."; Nest Egg "+3 white." replaces Exchange for now. Silver: Toast "+4 silver. Each rival +2 silver. +1 silver."; Flaunt replaces Sweet Nothings; Polish reworded.

## v0.99.719 — 2026-11-11

- Members on loan from Borrow show a dashed ring and a LOAN tag in the player cards; their card says they leave at round end.

## v0.99.718 — 2026-11-11

- Silver: Polish reads "+3 silver. Then turn all your silver into one other color."; Buyout replaces Sweet Talk: "Recruit a rival's member, paying them its cost in silver. +1 silver."

## v0.99.717 — 2026-11-11

- Brokers gives +2 followers whenever a White action gives you followers; new Red member Clan replaces Patriarch

## v0.99.716 — 2026-11-11

- Magenta: Help Yourself reads "Steal 1 resource per minion you've placed this round. +1 magenta."; Stash is "+3 magenta." for now; a member Swindle gives a rival is not a recruit (no On Recruit).
- Red: Clan replaces Patriarch: "Round End: +1 follower per member in your biggest group of one color (grey counts)."
- Fixes: a choice's name above the wheel no longer gets cut off; a member's card opens sooner when you move to the next one; the turn card fits a short screen; your skipped seat dims; a few small labels are easier to read.

## v0.99.715 — 2026-11-10

- Song Request is now Buskers and counts as two members; Martyrs gives +4 white and +4 followers when discarded; Gift Swappers: each player gives a member they choose; Window Shopper's grey discards give a color you pick; you can still use a member after a last follower recruit; Sore Loser's steal shows at round end; your turn's headline is yours after a rival's round-start card

## v0.99.714 — 2026-11-10

- Godparents is now called Patrons.

## v0.99.713 — 2026-11-10

- Rival steals and swaps now play at full speed; rival recruits a little quicker

## v0.99.712 — 2026-11-11

- New actions, in the normal game and with Test cards: Red Borrow, Trending, Gather; Blue Test Drive, Markdown, Word of Mouth; Green Crowd; Purple On a Roll; Magenta Catch Up, Swindle.
- Changed: Out of Style discards 3 shop members you pick; Recruit Twice and Spree recruit from the discard pile now; Build Up, Cover and Greatest Hits have new text; Help Yourself steals 1 per minion you've placed this round; Heist steals 4 followers and 4 resources.
- The Goes Last token now holds all your other minions (Sleep In, On a Roll).
- Extra Hand: On Recruit, +1 minion this round.
- Test cards keep only their Silver, Trading and Yellow swaps.

## v0.99.711 — 2026-11-09

- Test cards: Recruit Twice is back in Blue round II

## v0.99.710 — 2026-11-09

- Test cards: three new member-movement cards. Gift Swappers and Purifiers join the grey members; Foreclose takes Recruit Twice's place on Blue.

## v0.99.709 — 2026-11-09

- Kingmakers: give rivals up to 3 of your own silver, +1 follower per silver given.

## v0.99.708 — 2026-11-09

- Drag a shop card to put your shop in your own order for the round.

## v0.99.707 — 2026-11-09

- Sweet Talk: set every silver you turn on one card, press once, and it all flies in one go. Exchange's turn-in too.

## v0.99.706 — 2026-11-09

- Godparent, Guest of Honor and Nosy Neighbors: tap the member, then the rival (no more wall of buttons); grey-member colors, Spoilsport and Heist Crew picks on the same card

## v0.99.705 — 2026-11-09

- Kingmakers now gives rivals 3 silver from the bank, split as you choose (no followers). Godparent is now Godparents.

## v0.99.704 — 2026-11-09

- A recruited member's picture flies to the middle, its card stays 3.5 seconds to be read, then shrinks back to the picture and flies to its new owner. Resource counts tick up faster.

## v0.99.703 — 2026-11-09

- Richer economy deals a full deck again (round I had only 2 members), and every cost named on a card goes up 2 with member prices

## v0.99.702 — 2026-11-09

- Copy spin report now says whether a stall was the page's own code or the browser's drawing

## v0.99.701 — 2026-11-08

- The board's landing no longer redraws the whole table, and the seats' minions bob in two frames, so Firefox stays responsive while anything moves

## v0.99.700 — 2026-11-08

- Gather: +1 follower for every 3 resources you pay on a member this turn

## v0.99.699 — 2026-11-08

- The board turns on its own layer, so a spin no longer redraws the printed board; the menu's Copy spin report records how smoothly the board turned in your browser

## v0.99.698 — 2026-11-08

- Firefox: the wheel's ring words are redrawn in smaller slices, so animations keep moving while they draw

## v0.99.697 — 2026-11-08

- Smoother animations in Firefox: the wheel's outer-ring words no longer freeze the table each time a contest leader changes

## v0.99.696 — 2026-11-08

- Test cards: a Purple space's Goes Last token holds all your other minions.

## v0.99.695 — 2026-11-08

- Plainer card words: the gain comes first, 'If you recruit a member this turn:', and a space's +1 of its color is a small badge by its name instead of a line.

## v0.99.694 — 2026-11-08

- Setup hovers are now one short line per setting; a color's hover is brief

## v0.99.693 — 2026-11-08

- Test cards: Closing Time takes Crunch Time's place.

## v0.99.692 — 2026-11-08

- The round's score card, simpler: big totals, only the winners highlighted, where followers came from on hover.

## v0.99.691 — 2026-11-08

- Setup: point at a setting's name (Bots, Speed, Economy, Cards, Table) to see what each choice does; plainer color lines with each color's real contest, and a fuller card when you point at a color; Members look and Swap card are off the setup screen for now; hover cards now wait a beat before opening

## v0.99.690 — 2026-11-08

- Clearer words: the wheel shows what each space really gives, growing spaces read as +2/+3/+4, 'Discard' replaces 'Cast out', rivals' gains are named, and choices show players as their emoji.

## v0.99.689 — 2026-11-08

- Test cards: every Purple space takes the Goes Last token.

## v0.99.688 — 2026-11-08

- The round's score card is cleaner: one line per contest with everyone's count, gains as small tags, and the next round's order shown as faces.

## v0.99.687 — 2026-11-08

- The Test cards now have pictures (borrowed for now) and emoji.

## v0.99.686 — 2026-11-08

- New setup setting, Cards: Test. Plays Cory's Nov 8 try-it cards: Protection Racket, Round Robin, Bequest, Rummage, Medley and Swap Meet in place of six spaces; Anchorites, Old Guard, Repossessors and Protesters in the decks.

## v0.99.685 — 2026-11-07

- The middle card never leaves or folds before its last line has been read

## v0.99.684 — 2026-11-07

- New setup setting, Economy: Richer. Every member costs 1 more of its color and 1 more of any (grey: 2 more of any), and every space gives 1 more of its color. Today's prices stay the default.

## v0.99.683 — 2026-11-07

- Smaller fixes from the frame review: Turn skipped says whose card did it; steal picker counts down as you click and closes on the last take; the round card shows every player; results open the moment the last round card closes; cloak lines name the cloak; no white flash on load; your banner never hides your own dialog

## v0.99.682 — 2026-11-07

- A rival's lines on the middle card appear as each move happens on the board, never seconds later, and keep their words; no empty bar at a turn's start; round scoring waits for each count before the next prize; your own turn sits under its own label in Since your last turn

## v0.99.681 — 2026-11-07

- Relaxed speed: the story card's lines no longer hold the table so long a round stalls; a story card never starts its lines over

## v0.99.680 — 2026-11-07

- The top line and the lit seat always name the player actually moving; no leftover banner over a round's scoring; the Place/Recruit tabs hide during scoring and starting picks; a finished turn's row no longer flies across the board

## v0.99.679 — 2026-11-07

- Cleaner turns: a hover card no longer pops up after a click or stays over the space you just took; the shop keeps its order through a round; payments fly as −N; a seat's member count waits for its card; follower chips clear each turn

## v0.99.678 — 2026-11-07

- The menu now sits in the bottom right corner of the screen (top right on narrower laptops)

## v0.99.677 — 2026-11-07

- Other players' mouse cursors take the color of the cloak they wear.

## v0.99.676 — 2026-11-07

- A new round's first turn waits until the shop's new row is dealt (bots no longer move before the deal)

## v0.99.675 — 2026-11-07

- Scouts takes Party Crasher's place; Latecomers takes Bouncers' place

## v0.99.674 — 2026-11-07

- A menu switch hides your mouse from the other players in online games.

## v0.99.673 — 2026-11-07

- Your own Harvest is quicker: the coins you pick fly at Steady's pace, and a quick Take never goes a color at a time

## v0.99.672 — 2026-11-07

- Online games show the other players' mouse cursors, each with their emoji and name.

## v0.99.671 — 2026-11-07

- The shop's new members come off the pile face down, slide into their slots and turn face up there; a new round's row starts dealing sooner

## v0.99.670 — 2026-11-07

- On your turn the last rival's banner folds away, so the headline says Your turn and the wheel's top spaces show; Turn skipped sits on the seat's bottom edge, off its counts; every member has an emoji in the emoji look; a grey member's cloak question names the member

## v0.99.669 — 2026-11-07

- Out of Style's pick shows a member figure, the color's name and how many shop members go, instead of bare dots

## v0.99.668 — 2026-11-07

- Wheel: Housewarming's space says up to 5, like its card; Picket Line, Foster Parents, Copyist, Guest of Honor, Duty Collector, Jack-of-All-Trades and Seamstress show a full picture in the shop

## v0.99.667 — 2026-11-07

- Harvest is quicker: a rival's color picks play as one step instead of five

## v0.99.666 — 2026-11-07

- A rival's turn is told in a banner at the top of the wheel, in the table's own pictures: bold space and member names, each cult's emoji, the cloak's tile, and recruits as what was paid for the member and its followers

## v0.99.665 — 2026-11-06

- New contests: Red most members of one color (grey counts), White fewest members, Silver fewest silver, Yellow most member colors; Blue keeps most members

## v0.99.664 — 2026-11-06

- The middle card stays whole on screen on long turns, tells a steal once ("+3 gold from you"), and stays solid as it moves to the log

## v0.99.663 — 2026-11-06

- Your own hint ("…or use a member first") no longer shows under a rival's turn

## v0.99.662 — 2026-11-06

- The middle card is readable: each payout on the line of what caused it, no repeats, lines one at a time with time to read them; the shop refills before the next turn, dealt in one smooth slide

## v0.99.661 — 2026-11-06

- Round-end contests count up and pay out without stutters: the wheel's rim words no longer redraw as each contest lights up

## v0.99.660 — 2026-11-06

- The middle story card also tells your own turn; a 'choosing a space' card while a rival thinks; 'P2 again' when a player goes twice

## v0.99.659 — 2026-11-06

- The finished turn now sits whole as the last line of Since your last turn, with names you can hover; a copy says what it copied

## v0.99.658 — 2026-11-06

- Copying Toast or Potluck gifts the rivals too, so the Silver Cloak pays on it.

## v0.99.657 — 2026-11-06

- Round Start's icon is a sun, to pair with Round End's moon

## v0.99.656 — 2026-11-06

- A note that says an action did nothing now reads "You have…", and the since-your-turn line no longer repeats a gain in brackets

## v0.99.655 — 2026-11-06

- Round End's icon is a moon, so it no longer looks like Round Start's hourglass

## v0.99.654 — 2026-11-06

- The finished turn's card moves to the log faster

## v0.99.653 — 2026-11-06

- Rival turns read clearer: the story card sits in the wheel's middle until their moves finish, recruits fly straight to the seat, round-start recruits get a card

## v0.99.652 — 2026-11-06

- Overtime: Take the Goes Last token: its extra minion is placed after everyone else's.

## v0.99.651 — 2026-11-06

- Silver Cloak: Whenever you gift silver, +2 silver (was +3).

## v0.99.650 — 2026-11-06

- Blue Cloak: +1 of each discarded member's color (grey: any color), was +2.

## v0.99.649 — 2026-11-06

- Ghost costs 5 again

## v0.99.648 — 2026-11-06

- A rival's turn is told on one story card in the middle of the wheel, line by line, then it flies to their seat

## v0.99.647 — 2026-11-06

- Spoilsport: choose any contest; nobody wins it this round

## v0.99.646 — 2026-11-06

- Foster Parents is back in round I (3 red + 3 any); Ballroom Dancers costs 1 silver more (6 silver + 4 any)

## v0.99.645 — 2026-11-06

- The deck view is compact: one row per color, cheapest first, with a check for bought members and a red cross for ones on the discard pile

## v0.99.644 — 2026-11-06

- Night Managers now counts as 2 members (and scores 2 followers).

## v0.99.643 — 2026-11-06

- Night Owls is out of the purple deck (Cory)

## v0.99.642 — 2026-11-06

- The last note of a game no longer covers the results headline; Peek's instructions name its Keep this order button.

## v0.99.641 — 2026-11-06

- The wheel's free-member and Shake Down costs match the cards again; a passing note no longer covers the paying sheet

## v0.99.640 — 2026-11-06

- Every cloak now pays only for your own moves: Green +2 when you copy an action or member, Blue +2 of a member's color when you discard it, Magenta +1 when you steal, Purple +3 when you take the Goes Last token, Silver +3 when you gift silver, White +2 when you buy followers. A grey member counts as any color.

## v0.99.639 — 2026-11-06

- Greatest Hits no longer loops forever when your Impersonator takes a rival's Stunt Double

## v0.99.638 — 2026-11-06

- Tribute Band costs 10 green + 6 any; Sleepyheads gives +3 followers when you take the Goes Last token

## v0.99.637 — 2026-11-05

- Foster Parents now joins from round II (its new price)

## v0.99.636 — 2026-11-05

- Members cost 1 less than last night's raise: printed price + 1 of its color + 2 any. Cards that name a cost come down 1 with it (Initiation 10 or less, Housewarming up to 7, Shake Down 7 or less, Light Fingers 10 or more)

## v0.99.635 — 2026-11-05

- Discard pile beside the deck; timing icons on their own line; no Passive keyword

## v0.99.634 — 2026-11-05

- Loyalists costs 2 red + 2 any

## v0.99.633 — 2026-11-05

- Ballroom Dancers 5 silver + 3 any; Last-Minute Shopper +3 blue; Night Traders swaps up to 4; Heist Crew counts as 4 members; Foster Parents 3 red + 3 any

## v0.99.632 — 2026-11-05

- Every member costs 2 more: 1 more of its own color and 1 more any. Cards that name a cost go up 2 with it (Initiation 11 or less, Housewarming up to 8, Shake Down 8 or less, Light Fingers 11 or more)

## v0.99.631 — 2026-11-05

- Largesse: give rivals 12 silver from the bank, split as you choose, for +10 followers.

## v0.99.630 — 2026-11-05

- Member rules open with timing icons; the version shows on the home screen again

## v0.99.629 — 2026-11-05

- White's round I spaces each give 1 more white: Allowance +3/+4/+5, Splurge and Exchange +2.

## v0.99.628 — 2026-11-05

- Debt Collectors can be used again each round (it was stuck at once per game)

## v0.99.627 — 2026-11-05

- Victors is out of the grey deck (Cory: it's bad); the grey deck deals 11 again

## v0.99.626 — 2026-11-05

- Debt Collectors: once per round (was once per game), and 1 any cheaper

## v0.99.625 — 2026-11-05

- Sweet Nothings replaces Potluck on Silver round II: +3 silver, give rivals up to 3 of your silver, +2 of any colors each (Cory)

## v0.99.624 — 2026-11-05

- Shorter member text: Extortionist and Kidnapper pick the rival, Guest of Honor and Downsizers take any member, Anarchist swaps same cost; 'On Recruit and at Round Start'; the version shows in the in-game menu

## v0.99.623 — 2026-11-05

- Bandwagon is renamed Survey (Cory)

## v0.99.622 — 2026-11-05

- Cheerleader pays after every contest, with the other members that answer contests

## v0.99.621 — 2026-11-05

- Round end plays in order: Round End cards, then the contests, then the members that answer them (Cheerleader, Cheerleaders, Victors, Sore Loser), then Game End members; the round card lists them the same way

## v0.99.620 — 2026-11-05

- Right Away gives +2 purple in round I, +3 in round II, +4 in round III.

## v0.99.619 — 2026-11-05

- Ghost redrawn as a sheet with eyes, holding a candle

## v0.99.618 — 2026-11-05

- Night Watch is out of the purple deck (Cory: it made no sense); its replacement comes next

## v0.99.617 — 2026-11-05

- Last-Minute Shopper's round-end recruit is a normal recruit (a member or followers); Night Manager is now Night Managers; Night Watch is out of the Purple deck

## v0.99.616 — 2026-11-05

- The member browser shows which members are already bought, and by whom

## v0.99.615 — 2026-11-05

- Ghost has its own picture: a pale lady ghost with a candle in a dark hallway

## v0.99.614 — 2026-11-05

- Coins and followers cross the table about twice as fast on Relaxed, and a gain's coins leave together; cards and pauses keep their pace.

## v0.99.613 — 2026-11-05

- Smoother animations: the wheel's outer ring no longer freezes the page for half a second after moves

## v0.99.612 — 2026-11-05

- Leaders' Tax is now Bandwagon: +1 yellow per minion on the busiest color's spaces, +1 yellow (no color to choose)

## v0.99.611 — 2026-11-05

- Mannequin's shop members no longer count against you in White's Fewest members contest

## v0.99.610 — 2026-11-05

- Impersonator shows the ability it copied on its card and seat, and its choice lays out the rival members as cards

## v0.99.609 — 2026-11-05

- Matchmaker (and War Chest, Charmers): pick your colors on one card and press Take once, like Harvest, instead of clicking your stacks once per coin.

## v0.99.608 — 2026-11-05

- Polish (and every pick-your-colors card) takes all its coins at once: they fly together instead of one every 2 seconds.

## v0.99.607 — 2026-11-05

- Sample lays out the rival members you can copy as cards to pick; an action that finds nothing to do now says so on screen

## v0.99.606 — 2026-11-05

- Patron Saints scores at Game End (+1 follower per silver member, anyone's), back to 4 silver + 3 any

## v0.99.605 — 2026-11-05

- Night Traders and Tinker: set your swaps with − and + on one card, then one press (was give, get, three times)

## v0.99.604 — 2026-11-05

- Patron Saints costs 6 silver + 3 any; Power Shoppers gives +4 followers on your second member in a turn

## v0.99.603 — 2026-11-05

- The wheel's spaces now show the same named costs as their cards: Initiation 9 or less, Shake Down 6 or less, Housewarming up to 6, Promote and Demote up to 3.

## v0.99.602 — 2026-11-05

- Downsizers reaches members costing 4 or less; Heist Crew 6 magenta + 2 any; Matchmaker counts grey as a color

## v0.99.601 — 2026-11-05

- New members in the cut slots: Heist Crew, Night Traders, Counterfeiters, Last-Minute Shopper, Power Shoppers, Night Manager, Ballroom Dancers, Kingmakers, Patron Saints, Downsizers

## v0.99.600 — 2026-11-05

- Cards that name a cost go up 1 with the new prices: Initiation 9 or less, Housewarming up to 6, Shake Down 6 or less, Guest of Honor 4 or less

## v0.99.599 — 2026-11-05

- Every member costs 1 more (the extra any-color resource every member pays goes from 1 to 2), so fewer member cards per game

## v0.99.598 — 2026-11-05

- Exchange's sheet says what you turn in: "Turn up to 1 resource into 2 followers"

## v0.99.597 — 2026-11-05

- Your Nov 5 yeses: member changes and cuts, new prices, Help Yourself from one rival, Heist split among rivals, Spree +6, Overtime +4, Peek +3/+4/+5, Promote and Demote reach 3, Melting Pot by member colors

## v0.99.596 — 2026-11-05

- Members list: scrolling on a Mac is smooth again

## v0.99.595 — 2026-11-05

- Recruit Twice and Spree now say how many extra recruits they give

## v0.99.594 — 2026-11-05

- Final score: the winner's sentence names members with the same number as the Members bar

## v0.99.593 — 2026-11-05

- Final score: a narrow 'won in play' part now says 'Play 22' instead of a bare number

## v0.99.592 — 2026-11-04

- Playtest fixes: Hawker out, Mannequin in; Promote and Demote give only your own member (chips show one total); Tryout can use Fan Club, Stunt Double and Understudy, not Impersonator; copied members' passives pay (Doppelganger as Patroness); Sore Loser says why it didn't steal; Relaxed is much slower

## v0.99.591 — 2026-11-04

- Members list: smoother scrolling while rivals take their turns

## v0.99.590 — 2026-11-04

- Wheel: the outer ring's words are crisp and readable again

## v0.99.589 — 2026-11-04

- Round I's deck deals only members costing 4 or less; pricier ones wait for later rounds

## v0.99.588 — 2026-11-04

- Rules: glossary trimmed to words the deck uses

## v0.99.587 — 2026-11-04

- Copyist (whenever you copy an action, +1 follower) replaces Roadie in green; Tribute Band costs 12 (9 green + 3 any)

## v0.99.586 — 2026-11-04

- Bouncers now skips the next rival when the first one has Early Birds

## v0.99.585 — 2026-11-04

- Rules: two lines corrected

## v0.99.584 — 2026-11-04

- Rules: shorter, with pictures

## v0.99.583 — 2026-11-04

- The rulebook is rewritten to read easily: a one-minute overview, then short sections

## v0.99.582 — 2026-11-04

- Fixes: a game could place a minion after it ended (an extra minion given after the last placement), and a recruit could freeze when Barker had left your cult.

## v0.99.581 — 2026-11-04

- Two new grey members: Cheerleaders (Whenever you win a contest, +2 followers.) and Victors (Whenever you win a contest, +2 of its color.); the grey deck deals 12. The round-end card names them under the contest their owner won.

## v0.99.580 — 2026-11-04

- Seats keep each color's dot when you have none; the since-your-last-turn strip says what you lost and who got what; one phrase for turns in a row; your seat names your cloak; choices off your turn say Your call; steal sheets say Steal. Polish's suggestion no longer turns silver back into silver.

## v0.99.579 — 2026-11-04

- Clearer words for first-time players: hovers explain rivals' gains, copies with nothing to copy, steals and each space's limits; the shop says pile and how many you can afford; the round card and final bars label every number; setup switches have a hint. Silver, magenta and grey members are easier to tell apart.

## v0.99.578 — 2026-11-04

- White: Barker reads "Each time you recruit a member, you may also recruit followers." and stacks with Spree. Runs on React 19 (no visible change).

## v0.99.577 — 2026-11-04

- Barker and Magpie have their own pictures.

## v0.99.576 — 2026-11-04

- Seat popups show the real payout and whose follower was lost, cloaks go by their cloak name everywhere, the Goes Last token shows on the right seat, leaders blink one at a time, and the Party Gifts badge no longer covers the silver count. Thin score-bar parts always show their number.

## v0.99.575 — 2026-11-04

- White: Barker ("Each turn, you may recruit followers one extra time.") takes Landlord's place.

## v0.99.574 — 2026-11-04

- Clearer screen for first-time players: round III rims read +10, rim prizes stand upright, Exchange and Sweet Talk say their whole rule on the wheel, the pay sheet shows the member count, your row stays in view on the round card, hover previews never name a face-down card and say steals and gifts plainly. Polish may now pick silver too. The version line is off the home screen.

## v0.99.573 — 2026-11-04

- High Society is back in Silver's members; Socialites comes out (Cory: High Society stays).

## v0.99.572 — 2026-11-04

- Bug chirps twice, Crab snips three times, Frog croaks a little longer, Wizard casts a new spell

## v0.99.571 — 2026-11-04

- Charity Ball replaces Philanthropist and Socialites replaces High Society. Contests now score one at a time in turn order, each prize paid before the next counts. Idle animations run slower to save work.

## v0.99.570 — 2026-11-04

- New Blood: recruiting a member of a new color now gives +2/+3/+4 yellow instead of followers. Picking your emoji on the setup screen plays its sound, and so does another player picking theirs in an online room.

## v0.99.569 — 2026-11-04

- White's Splurge and Exchange on the wheel lead with their +1 white, then the follower part.

## v0.99.568 — 2026-11-04

- Hovering a copy space or member (Sample, Greatest Hits, Tryout, Bootlegger, Impostors, Doppelganger, Impersonator) lists the members it could copy right now, with whose they are and their text.

## v0.99.567 — 2026-11-04

- Choice sheets: the card of the space you're resolving no longer sits on top of the sheet's choices

## v0.99.566 — 2026-11-04

- Your minion's sound plays as it lands. Farewell and Estate Sale go back to always casting out one of your members to the bottom of the pile

## v0.99.565 — 2026-11-04

- Final score: a thin part of a score bar shows its number instead of an empty box

## v0.99.564 — 2026-11-04

- Stacked turns count down: "3 turns left in a row" beside the headline and on your seat

## v0.99.563 — 2026-11-04

- Fixes: a member's Round Start no longer fires twice when a Kidnapper takes it; Early Birds keeps your turn even if you recruit it after Sleep In; a once-per-game member stays used after it changes hands; Dabblers counts as 2 in every color count; Farewell and Estate Sale say you may cast out.

## v0.99.562 — 2026-11-04

- Member cards show only their written rule again: the emoji symbol line is gone, so hovers no longer say it twice

## v0.99.561 — 2026-11-04

- Picket Line (Purple I) for Shift Crew; Duty Collector (Yellow) for Customs Officer

## v0.99.560 — 2026-11-04

- New cards: Foster Parents (Red I) for Greeters, Guest of Honor (Silver I) for Polisher, Jack-of-All-Trades (Yellow I) for Tastemaker; Housewarming (Yellow II space) for Big New Blood. Fixes: Night Watch and Customs Officer pay only as printed. Setup: the Shop, Member deck and Round III members choices are gone.

## v0.99.559 — 2026-11-04

- Fix: a space's 'this turn, if you recruit a member' followers (Gather, Stash, Allowance, New Blood) no longer pay out on a recruit made off your turn.

## v0.99.558 — 2026-11-04

- Harvest's and Exchange's Take no longer gets stuck when you take two of one color.

## v0.99.557 — 2026-11-04

- Setup's Start button sits under every setting; bots give Guest of Honor away only in round III; test fixes

## v0.99.556 — 2026-11-04

- White Cloak: "Whenever any player buys followers, +1 white (+2 if it's you)." Courier reads "Whenever you take a consecutive turn, +1 of each other color."

## v0.99.555 — 2026-11-04

- Rival moves play one at a time, each held a beat to read, with the seats a move doesn't touch dimmed; Gardener is now Gardeners; switch-gated trial cards (off by default)

## v0.99.554 — 2026-11-04

- Emoji members: every member is now a pixel drawing of its emoji, in the same style as the minions

## v0.99.553 — 2026-11-04

- Smoother play: the strip of rival moves no longer measures itself on every step

## v0.99.552 — 2026-11-03

- Spinning the wheel in Firefox no longer stalls: the rim's words are drawn once and turn as a picture. The chair whose turn it is lights up more smoothly.

## v0.99.551 — 2026-11-03

- Pizza's "pizza pizza" is faster

## v0.99.550 — 2026-11-03

- Exchange picks its turn-in whole, like a payment, on the same card as Harvest

## v0.99.549 — 2026-11-03

- Since your last turn: a piece that doesn't fit on a move's one line is hidden whole, never cut

## v0.99.548 — 2026-11-03

- Nine cards change: Creditor (was Creditors) makes a rival give you 2 followers and gives them 3 silver, once a round; Fan Club copies an action of the player with the most followers; Dilute and Big Dilute become New Blood and Big New Blood (followers when you recruit a member of a new color); Melting Pot reads more plainly; Mob pays each round for every rival with fewer red members; High Society pays a follower whenever a rival takes a Silver space; Lottery Winner gives 2 gold, then doubles your gold; Upstart gives 2 silver per rival with more followers; Safecracker steals 2 from each rival

## v0.99.547 — 2026-11-03

- Since your last turn shows one line per rival move and stays up when your turn starts; recruits play one step at a time (coins in, to the middle, then to the buyer); Heist steals 3 followers; Leaders' Tax pays +1 per rival with a minion on the color; starting a new game keeps the unfinished one in Past games; Grey piles row keeps its size after a pile swap; Scouts never re-picks a member; setup screen notes for piles

## v0.99.546 — 2026-11-03

- Pizza's minion sings "pizza pizza" when it's placed

## v0.99.545 — 2026-11-03

- Pizza's minion lands with just the knock for now

## v0.99.544 — 2026-11-03

- Harvest lets you pick each resource; hovering a resource shows what it does; members can show as one emoji (setup option); Relaxed is slower; new minion sounds for Surfer, Dinosaur, Pizza, Bee, Ninja and Cactus

## v0.99.543 — 2026-11-03

- Four more new members: Night Watch (Purple) replaces Clockmakers, Second-Story Man (Magenta) replaces Sticky Fingers, Hawker (Blue) replaces Connoisseurs, and Sore Loser (Grey) replaces HR. Each shows up in the same round as the card it replaces.

## v0.99.542 — 2026-11-03

- Wallflower doubles every action it copies, as its card says; a cult's Members row shows Dabblers once as 2 any-color, so the color counts add up

## v0.99.541 — 2026-11-03

- Under By color, the pay screen's warning about giving up a contest lead now reads that color's real contest (Green: minions, not green held)

## v0.99.540 — 2026-11-03

- A recruit's seat keeps its old member count until the card lands; old member notes leave when the next action shows; a rival's cloak pick no longer covers the wheel into your turn

## v0.99.539 — 2026-11-03

- Members that count as 1 have singular names: Spoilsport, Timekeeper, Godparent, Philanthropist, Customs Officer, Tourist, Kidnapper, Impersonator

## v0.99.538 — 2026-11-03

- Four more new members: Impersonators (Green) replaces Muse, Creditors (Silver) replaces Collector, Kidnappers (Magenta) replaces Kingpin, and Godparents (Silver) replaces Hangers-On. All four can show up from round I, like the cards they replace.

## v0.99.537 — 2026-11-03

- With By color contests, Red's contest is most red members (each card counts once).

## v0.99.536 — 2026-11-03

- Starting a game freezes the page for less time (the table is laid out once, not twice)

## v0.99.535 — 2026-11-03

- Tryout and Sample no longer offer Drifters, whose effect did nothing from there. With 5 or 6 colors each rim's words stay on their own color.

## v0.99.534 — 2026-11-03

- With 5 or 6 players the round's scoring card is wider, so every cult's row, yours included, shows without scrolling.

## v0.99.533 — 2026-11-03

- Small polish: a seat's follower change shows beside its count, rival moves no longer cover a hover card you're reading, long space names wrap on the hub card, the end screen's Play and End bars show, final cult cards line up, and many spare minions no longer run into Log

## v0.99.532 — 2026-11-03

- Long member names in a crowded swap break at a natural seam (Deprogram-mers) instead of being cut off.

## v0.99.531 — 2026-11-03

- New pictures for Body Snatchers, Hostesses and Spoilsports

## v0.99.530 — 2026-11-03

- Body Snatchers' swap says what it does: one of yours for a rival's of the same cost. The end screen names a loss (Play −5), not just −5.

## v0.99.529 — 2026-11-03

- New pictures for Greeters, Landlord, Meddler and Misers

## v0.99.528 — 2026-11-03

- Card words made consistent, same rules: every round-scaled gain reads +N in round I, II and III; Walk-In says pile; no card repeats its worth in its text

## v0.99.527 — 2026-11-03

- New names, same rules: Initiation (was Recruit a Member), Overtime (Crowd In), Heist (Crime Wave), Sample (Encore), Potluck (Party Favors), Greeters (Recruit Bonus), Landlord (Shopkeeper), Misers (Heirs), Meddler (Ringleader)

## v0.99.526 — 2026-11-03

- Extortionist costs 1 more magenta; Gardener is worth 2 followers.

## v0.99.525 — 2026-11-03

- Four new members: Hostesses (Silver) replaces Gift Wrapper, Heirs (White) replaces Exporters, Spoilsports (grey) replaces Scouts, and Body Snatchers (Red) replaces Triplets. For now each wears the old card's picture.

## v0.99.524 — 2026-11-03

- Leaders' Tax asks "Which color?" with its rule under it

## v0.99.523 — 2026-11-03

- Yellow: Leaders' Tax replaces Trade Seeds: +1 yellow, choose a color, each rival with more of it than you gives you 1

## v0.99.522 — 2026-11-03

- By color contests: a Green tie splits the prize like every other contest (no tie-break).

## v0.99.521 — 2026-11-03

- Bots a little faster again (same games).

## v0.99.520 — 2026-11-03

- Night Owls: its one more minion is placed right away, instead of after everyone else's.

## v0.99.519 — 2026-11-03

- Clicks answering a choice (a steal, a gift, a pick) show their answer sooner; the rest of the table follows a frame later.

## v0.99.518 — 2026-11-03

- Bots think faster on big tables (5 and 6 players) and when Green is in play.

## v0.99.517 — 2026-11-03

- Green Cloak (Impressionist) gives +1 of the copied color, not +2; with By color contests, Red's contest is most red again.

## v0.99.516 — 2026-11-03

- By color contests: Green ties go to whoever holds the most green, and White is now fewest followers.

## v0.99.515 — 2026-11-03

- Cleanup: unused code removed and bots a little faster again.

## v0.99.514 — 2026-11-03

- The game loads faster: about a quarter less to download before the home screen, and bots think faster.

## v0.99.513 — 2026-11-03

- Clearer words for Doormen, Night Owls, Sleep In and Last Call; Doormen's replacement can cost up to 2 less, or any amount more.

## v0.99.512 — 2026-11-03

- The end screen shows one bar per cult: where its followers came from (members, prizes, bought, game-end), each part opens what's in it

## v0.99.511 — 2026-11-03

- By color contests: Yellow is most full sets of every color, Purple is whoever placed the round's last minion.

## v0.99.510 — 2026-11-03

- Members cost 1 more of their own color and 1 less of any color. The Contests setting is now As printed or By color, where each color has its own goal.

## v0.99.509 — 2026-11-02

- Splurge pays +1 follower per resource you pay in round II (still per 2 in rounds I and III).

## v0.99.508 — 2026-11-02

- Bots now weigh every option on every choice, so they find the strongest play instead of a shortlist.

## v0.99.507 — 2026-11-02

- New table setting, Contests: try other contest goals (members count 2, minions on a color's spaces, or White's fewest members).

## v0.99.506 — 2026-11-02

- Makeover is back to +4 yellow, then rearrange your resources into any mix of colors

## v0.99.505 — 2026-11-02

- Scouts has a Done button under the shop, so you can stop after sending some.

## v0.99.504 — 2026-11-01

- Yellow's rearranging takes one tap per resource: Dilute and Big Dilute show each rival's piles with an Into color, Trade Seeds keeps what you give picked, Makeover's + moves one straight over

## v0.99.503 — 2026-11-01

- Magenta Cloak: "Whenever a rival steals from you, +2 magenta." Purple Cloak: "Whenever a player's turn is skipped, +2 purple." The swap card now costs 2 resources in any colors.

## v0.99.502 — 2026-11-01

- The Green Cloak's payouts now show as Green Cloak in the game log.

## v0.99.501 — 2026-11-01

- With the swap card on, it sits beside the follower buys, so the shop's members stay in neat rows.

## v0.99.5 — 2026-11-01

- Grey piles: 10 copies each, Con Men back in the shop, no Blue with piles.

## v0.99.4 — 2026-11-01

- New table setting, Shop: Current (as before, the default), Grey piles (five grey members are piles you can buy several of, out every game beside the shop row) or All piles (ten piles a game, ten copies each, every one open from round I; no Blue; Red's round I space is Open Door: recruit the cheapest member in the shop). A pile shows its copies as card edges and how many are left.

## v0.99.3 — 2026-11-01

- Red Cloak: whenever you recruit a member, +1 red (swaps and steals count). Exchange says the white comes first, Promote and Demote show their cost limit on the wheel, and a member's Use button names the member.

## v0.99.2 — 2026-11-01

- The Goes Last token: Last Call, Sleep In and Night Owls put minions on it, and its holder places them once every hand is empty. New table setting, off by default: the swap card. Doormen sends a rival's member to the bottom of the pile and gives them a shop member costing up to 2 more. Blue Cloak pays when any member goes to the bottom. Red Cloak pays +1 red when you recruit from the shop. Raiders steals from any rival. Tourists joins Yellow's deck in place of Go-Between. Anarchist costs 6, Party Crasher 5. Desperado boosts every steal. Spaces show their limits and payoffs on the wheel, and Party Gifts says what it gives.

## v0.99.1 — 2026-11-01

- Artifacts are now colored cloaks: your leader wears its color and your player card is outlined in it, so everyone sees who each color's moves pay (Red Cloak, Blue Cloak and so on).

## v0.99.0 — 2026-11-01

- 0.99: every color and both decks polished, with tonight's balance calls and card fixes; the whole game passes every check

## v0.9.972 — 2026-11-01

- Bodyguards and Lie Low stop steals, not trades; new words for Promote, Demote, Double Agent and Lie Low; Mob worth 4; Tribute Band 14; Window Shopper sends 2; Caterer +1; Desperado +2 to every steal

## v0.9.971 — 2026-11-01

- Recruiter pays when a rival casts out a member with Farewell or Estate Sale; Guest Book counts your first grey member as a new color; Customs pays once per change, not once per resource

## v0.9.970 — 2026-11-01

- Bargain Bin pays +1 blue when the shop refreshes at the start of rounds II and III; Raiders' steal pays Fence

## v0.9.969 — 2026-11-01

- Polisher asks how much silver to turn, 1 to 3

## v0.9.968 — 2026-11-01

- Dabblers and Drifters never work against their owner: Big Tent counts colors without Dabblers, Matchmaker pays like Guest Book, Connoisseurs pays for your Dabblers and for Drifters that pick Blue; Bargain Bin's card shows what it has gained

## v0.9.967 — 2026-11-01

- Skipped turns show on the table ("Turn skipped" on the seat), and Pocket Watch and Gossip pay as it shows; Guest Book pays for a new color even with Dabblers

## v0.9.966 — 2026-11-01

- Last Call no longer skips turns that already come last (no extra Gossip or Pocket Watch); Stash pays its printed +2/+3/+4 magenta

## v0.9.965 — 2026-11-01

- Recruiter: +2 red also when a rival's member is swapped into the shop

## v0.9.964 — 2026-11-01

- Promote and Demote back as they were

## v0.9.963 — 2026-11-01

- Fence: +1 magenta whenever any player steals. Impressionist: +2 of its color whenever any player copies an action. Caterer: +2 silver whenever a player is gifted silver.

## v0.9.962 — 2026-11-01

- Promote and Demote swap one of your own members, within 2 of its cost; Scouts pays Patroness and Bargain Bin

## v0.9.961 — 2026-11-01

- Cory's balance calls: Greatest Hits copies your members' On Recruits; Recruiter pays +2 red when a member leaves a rival's cult; Tryout +2 red; Money Changers +1 white whenever anyone buys followers; Recruit Twice +3 blue, Spree +5 blue; HR +2 per color, costs 10; Last Call +1 purple and +1 follower, +1 purple per minion left; Line Cutters (was Front-runner) worth 3; Scouts worth 2; Hangers-On, Debutantes, Smooth Talkers and Debt Collectors worth 2.

## v0.9.960 — 2026-11-01

- Hangers-On, Debutantes, Smooth Talkers and Debt Collectors pictures show two people.

## v0.9.959 — 2026-11-01

- Line Cutters picture shows three people and Scouts shows two.

## v0.9.958 — 2026-11-01

- Line Cutters picture shows two people jumping the queue.

## v0.9.957 — 2026-11-01

- Lie Low: steal 1; rivals can't steal or recruit from you this round (swaps still go through).

## v0.9.956 — 2026-11-01

- Clicks answer a little sooner: the shop is measured once per click instead of twice, and a card's text fit is remembered instead of measured again.

## v0.9.955 — 2026-11-01

- Balance: Collector costs 6.

## v0.9.954 — 2026-11-01

- Balance: Grifter 8, Recluse 4, Big Tent 7, Caravan 9, Collector 5, HR 13; Deprogrammers worth 4; Caterer +2 silver, Money Changers +2 white.

## v0.9.953 — 2026-11-01

- Long names on the top-of-the-pile cards break at a natural point (Trend-setters).

## v0.9.952 — 2026-11-01

- Long names fit on the top-of-the-pile cards, Undo works while your move's animation is still playing, and "since your last turn" names Collector when it pays you.

## v0.9.951 — 2026-11-01

- A rival's long chain of bonuses plays every piece to the end, a little faster, instead of skipping its last beats.

## v0.9.950 — 2026-11-01

- Deprogrammers picture shows four people.

## v0.9.949 — 2026-11-01

- Clicks with member details on answer a little faster: the shop measures its cards once instead of card by card.

## v0.9.948 — 2026-11-01

- A crowded swap (round III Demote) fits on its card: members show as names with prices, and after your pick only the members you can swap for are listed.

## v0.9.947 — 2026-11-01

- A rival's hover card scrolls again when you roll the mouse wheel over their seat.

## v0.9.946 — 2026-11-01

- Yellow's spaces on the wheel say what they do now: Harvest, Dilute, Big Dilute, Makeover and Melting Pot had old or half text. A shop member a space would recruit glows again.

## v0.9.945 — 2026-11-01

- Caterer pays +1 silver once for Party Favors, as for Toast, not once per rival who answers.

## v0.9.944 — 2026-11-01

- Giving silver one at a time (Party Gifts, Largesse, Philanthropists) shows how many you've given, how many are left, and a +1 on each rival you've picked.

## v0.9.943 — 2026-11-01

- Tastemaker copied by a Doppelganger now pays its follower when you change rivals' resources.

## v0.9.942 — 2026-11-01

- Connoisseurs, Snobs, Doormen and Bouncers pictures show two people, and Shift Crew shows four.

## v0.9.941 — 2026-11-01

- Big Spender's second recruit says Big Spender in the header, and no longer claims a pass keeps it for later (it's used up once you use it).

## v0.9.940 — 2026-11-01

- Silver gets its tenth member, Gift Wrapper; Yellow gets Caravan, Tastemaker and Spice Route

## v0.9.939 — 2026-11-01

- The rules page: a skip stays in its round and never carries into the next.

## v0.9.938 — 2026-11-01

- Greatest Hits now copies any 3 round I actions with a minion on them. Balance numbers: Last Call +1 follower per minion left; Customs 6, Loyalists 5, Grifter 7, HR 12, Proselytizers 8, Deprogrammers 3, and a few members worth more followers.

## v0.9.937 — 2026-11-01

- Your own seat's hover shows the same card as a rival's, with your Use buttons in it. Roadie also pays when you recruit it.

## v0.9.936 — 2026-11-01

- The rules page: Silver's line now that it's redesigned, and Classic for five and six players.

## v0.9.935 — 2026-11-01

- Caterer picked as Silver's artifact now pays its +1 silver whenever you give a rival something.

## v0.9.934 — 2026-11-01

- Paying, recruiting and answering a choice answer faster: the table redraws in your click instead of a beat after it.

## v0.9.933 — 2026-11-01

- Party Crasher and Big Spender light up on your seat and can be used (the last fix missed the seat)

## v0.9.932 — 2026-11-01

- Big Family, Makeover, Bulk Buyer, Shareholder, Choir, Gift Wrapper, Caravan, Tastemaker and Spice Route get scene pictures.

## v0.9.931 — 2026-11-01

- Late Risers, Shopaholics, Impostors, Deprogrammers, Recruit Bonus and Mentor & Protégés pictures show as many people as they count.

## v0.9.930 — 2026-11-01

- Every yellow and silver member now has a scene picture: Customs, Harmonist, Matchmaker, Ringleader, Leveler, Big Tent, Guest Book, Gleaner, Sower, Silversmith, Steward, Toastmaster, Dowager, Smooth Talker, Philanthropists, Polisher, Collector, Debt Collector and High Society.

## v0.9.929 — 2026-11-01

- Party Favors: every rival answers at the same time

## v0.9.928 — 2026-11-01

- Gardener, Drifters, Tinker and Agitator get scene pictures like the other members.

## v0.9.927 — 2026-11-01

- Fan Club with no minion on a Green space says so instead of "+0 green".

## v0.9.926 — 2026-11-01

- Party Crasher and Big Spender can be used again: their Use button was dimmed as if it would do nothing

## v0.9.925 — 2026-11-01

- Drifters: every color can be picked, even ones you hold none of; its card says which color it counts as; Guest Book pays for it

## v0.9.924 — 2026-11-01

- Eleven more member pictures show as many people as the card counts, and Book Cookers and Puppeteers get their first pictures.

## v0.9.923 — 2026-11-01

- Proselytizers, Night Owls, Early Birds, Bodyguards and Clockmakers pictures show two people, as many as they count.

## v0.9.922 — 2026-11-01

- The results no longer say a cult "goes last" after the game ends.

## v0.9.921 — 2026-11-01

- Purple's 10-card deck: Gossip is back, Extra Shift is out.

## v0.9.920 — 2026-11-01

- Silver: Toastmaster, Polisher and Collector join in round I

## v0.9.919 — 2026-11-01

- Members that count as 2 or more have plural names: Proselytizers, Trendsetters, Night Owls, Heiresses, Alchemists…

## v0.9.918 — 2026-11-01

- Out of Style says grey, not neutral, for grey members.

## v0.9.917 — 2026-11-01

- Silver's new deck of 10 members: Smooth Talker, Philanthropists, Polisher, Collector, Debt Collector and High Society join Caterer, Toastmaster, Hanger-On and Debutante

## v0.9.916 — 2026-11-01

- Walk-In and Recruit Twice no longer show a bold On Recruit; wheel faces print the catch: Walk-In '+1 red to all', Last Call 'then you go last'; the round-end note points at the I, II, III numbers; '1 member affordable'

## v0.9.915 — 2026-11-01

- "Since your last turn" no longer shows cut in half under the turn card when four spare minions are out.

## v0.9.914 — 2026-11-01

- Turn stories name the artifact (Impressionist, Pocket Watch) instead of "A member"; the results no longer keep a space's card open over them, and each cult's member count sits above its pictures; Yellow bots stop changing a rival's color back; a click on a rival's artifact picks that rival; Makeover's card says "rearrange your resources".

## v0.9.913 — 2026-11-01

- Members count as many members as they're worth in followers (Proselytizer 2, Trendsetter 3, Mob 5…)

## v0.9.912 — 2026-11-01

- Classic is now Blue, Red, Yellow and Purple (3 players drop Purple, 2 drop Yellow too); Gold is off the table picker and the members page for now.

## v0.9.911 — 2026-11-01

- Silver's new spaces: Toast, Polish, Party Gifts, Party Favors, Sweet Talk and Largesse

## v0.9.910 — 2026-11-01

- New games use the 10-per-color decks by default; 15 per color is one click away on the setup screen and in the lobby.

## v0.9.909 — 2026-11-01

- Con Men steals 5 when recruited (was a once-per-game use). Grey's 10-card deck keeps Scout and Old Maid and drops Coach and Tiebreaker.

## v0.9.908 — 2026-10-31

- Member details cards are back to the earlier look; the crossed-off price still sits beside the new one.

## v0.9.907 — 2026-10-31

- Two decks: pick 10 or 15 members per color on the setup screen and in the online lobby. Early Bird, Timekeepers, Critic, Recluse, Cashier, Go-Between and Drifters are cheaper and join in round I; Doorman costs 5.

## v0.9.906 — 2026-10-31

- Member details cards redesigned: each picture fills the room its rule leaves, rules sit centered with margins and one text size per row, and no card shows an empty box or a sliver of a picture.

## v0.9.905 — 2026-10-31

- The rules page matches the game: one follower purchase per turn, current card names, members and their worth, when round II and III members arrive, a line per color

## v0.9.904 — 2026-10-31

- A discounted member shows its crossed-off price right beside the new one ("~~7~~ free") instead of above it.

## v0.9.903 — 2026-10-31

- Members page can show a deck proposal (add ?deck10).

## v0.9.902 — 2026-10-31

- The Saboteur is now the Old Maid, with new art; the card works the same

## v0.9.901 — 2026-10-31

- With member details on, a long ability over a discounted price ("free" in round III) no longer pushes the price off the card: the small picture makes room.

## v0.9.900 — 2026-10-31

- Your name in your seat no longer shrinks to "Y…" next to a long turn note like "two turns in a row"; follower buys keep their size and drop the cut-off "FOLLOWERS" label when member details are on.

## v0.9.899 — 2026-10-31

- Neutral members are called grey: the tag, the deck list and the glossary say Grey.

## v0.9.898 — 2026-10-31

- Allowance: +2 white in round I, +3 in round II, +4 in round III. This turn, if you recruit a member, +1 follower (+2, +3). Stash: the same in magenta.

## v0.9.897 — 2026-10-31

- Yellow 2.0: new spaces, a new 15-member deck and the Guest Book artifact

## v0.9.896 — 2026-10-31

- Poach reads: Recruit a rival's member you choose.

## v0.9.895 — 2026-10-31

- Late in a game the log no longer skips a line that repeats the one before it (a second Harvest pick, a Big Spender recruit).

## v0.9.894 — 2026-10-31

- Savings' wheel face says it can send a shop member to the bottom.

## v0.9.893 — 2026-10-31

- Savings: +2 blue in round I, +3 in round II, +4 in round III. Before you recruit, you may send one shop member to the bottom of the pile, then refill.

## v0.9.892 — 2026-10-31

- New bot level: Very Hard, which looks three times as far ahead as Hard.

## v0.9.891 — 2026-10-31

- Gather's wheel face shows its new +2 red and the followers for recruiting a member.

## v0.9.890 — 2026-10-31

- Gather: +2 red in round I, +3 in round II, +4 in round III. This turn, if you recruit a member, +1 follower (+2 in round II, +3 in round III).

## v0.9.889 — 2026-10-30

- Shoplifter costs 7, Heiress 9, Coach 7, Old Money 6, Grifter 6. Mob costs 12 and counts as 4 members. Shopaholics, Mentor & Protégés, Impostors, Late Risers, Deprogrammers (was Movement Penalty) and Launderers are each worth 1 more follower and member. Dabblers lets you pick its color for Recruiter and other +1 of its color cards.

## v0.9.888 — 2026-10-29

- Promote and Demote give +3 red. HR counts guests as a color. Recruiter: whenever you recruit a member, +1 of its color.

## v0.9.887 — 2026-10-29

- Crowd In gives +3 purple (was +4).

## v0.9.886 — 2026-10-29

- Fence pays +1 magenta once per steal: a steal split among rivals pays 1, and each separate steal pays again.

## v0.9.885 — 2026-10-29

- Fence pays its +1 magenta once per turn, not on every steal. Con Men steals 5 when you choose to use it, not the moment you recruit it.

## v0.9.884 — 2026-10-29

- Choosing a rival (Shake Down and the like): point at their members to see their cards.

## v0.9.883 — 2026-10-29

- Double Agent costs 8. Broker, Clockmaker, Ensemble, Alchemist, Restocker and Early Bird are each worth 1 more follower.

## v0.9.882 — 2026-10-29

- Launderers: rearrange your resources into any mix of colors, on one card with − and + for every color.

## v0.9.881 — 2026-10-29

- Clockmaker: take your first two turns in a row each round. Courier pays whenever you take two turns in a row. Cards say "+1 minion" for a new minion and "your next turn comes right after this one" for going twice in a row. A copied Right Away comes right away, even after Last Call. Help Yourself gives no magenta. Loyalists stops Double Agent.

## v0.9.880 — 2026-10-29

- Double Agent costs 7 (was 4). New pictures: HR is four office staff at a desk, Fan Club three fans, Tribute Band a three-piece band.

## v0.9.879 — 2026-10-29

- Bots now pick the best empty action when they take Cover, instead of a random one.

## v0.9.878 — 2026-10-29

- Peek: drag the top 4 into any order, click a numbered card to take its number back, then Done.

## v0.9.877 — 2026-10-29

- The turn headline no longer clips its words in Firefox.

## v0.9.876 — 2026-10-29

- Members page: a card's hover stays on screen, and each color's artifact shows as a small artifact beside its spaces, not as a member

## v0.9.875 — 2026-10-29

- Members count as their printed member count only (Trendsetter and the like are 1 member). Fan Club counts as 3 members (cost 6), Big Family 4 (cost 6), Tribute Band 3, Crew, Shift Crew, Mentor & Protégé, Choir and Raiders 2.

## v0.9.874 — 2026-10-29

- Round-end scoring plays about 40% quicker at every speed and flows rim to rim with no still pauses

## v0.9.873 — 2026-10-29

- Cards you use say On Use, once per game or once per round. Coach activates one of your members' On Use ability as a free extra use. Cleaner words on Tiebreaker, Alchemist, Recruit Bonus, Agents, Tribute Band and more.

## v0.9.872 — 2026-10-29

- Hover a rival's seat for their whole cult: members in columns by card type, priciest first, with their artifact, round-start income, game-end score, resources and members by color up top. Members they haven't used yet glow; used ones are turned face down.

## v0.9.871 — 2026-10-29

- The shop's member cards fill the panel: two to a row at 6 members, taller at 7 and 8; Details shows each whole picture.

## v0.9.870 — 2026-10-29

- Hard bots now think ahead about which member to swap or take, not just where to place and what to buy.

## v0.9.869 — 2026-10-29

- Your leader opens Say: click your own leader to talk (the Say button is gone), and every quick line has its own little emoji.

## v0.9.868 — 2026-10-29

- The words on the wheel's rim sit in the middle of the band.

## v0.9.867 — 2026-10-29

- The full member card shows its picture big, filling the window

## v0.9.866 — 2026-10-29

- HR counts as 4 members and costs 10.

## v0.9.865 — 2026-10-29

- Member pictures fill the whole middle of each card

## v0.9.864 — 2026-10-29

- Promote and Demote can swap with a rival's member too. Con Men cost 7.

## v0.9.863 — 2026-10-29

- Con Men cost 7.

## v0.9.862 — 2026-10-29

- Every member's picture is now a little scene: the person in a place that says what they do

## v0.9.861 — 2026-10-29

- Spare minions now sit under the cults beside Log; the followers on the wheel's rim glow less.

## v0.9.860 — 2026-10-29

- The spare minions count no longer jumps huge between rounds.

## v0.9.859 — 2026-10-29

- Hover a member or artifact to see what it has gained you this game; a member that scores at game end also says what it would score if the game ended now.

## v0.9.858 — 2026-10-29

- Bots now weigh what a swap or a stolen member does for every player, so they push a Saboteur into the leader's cult and use Anarchist and Headhunter on rivals.

## v0.9.857 — 2026-10-29

- Recruiter: whenever you add a member to your cult, +1 red. Buying followers no longer counts.

## v0.9.856 — 2026-10-29

- Every member scores its member count: Revelers scores 3, Dabblers, Con Men and Ensemble 2. Cards show the member mark and count at the top; the price circle is smaller.

## v0.9.855 — 2026-10-29

- Front-runner costs 2 and Extra Hand 9. Agents: your actions can't be copied (you can still copy them). Crowd In gives +4 purple. Twins are now Triplets, worth 3 followers.

## v0.9.854 — 2026-10-29

- Member cards: the price circle at the top is a bit smaller.

## v0.9.853 — 2026-10-29

- Member cards now match the card design you picked, with bigger costs and slightly bigger rule text.

## v0.9.852 — 2026-10-29

- The full member card (hover, tap, members page) is back to the card you picked: price, name and worth on one bar, the rule under the picture.

## v0.9.851 — 2026-10-29

- Member cards: smaller price and follower number; the separate member count tag is gone.

## v0.9.850 — 2026-10-29

- Connoisseur back to 4.

## v0.9.849 — 2026-10-29

- Twelve member prices from overnight bot balance runs: Heiress 8, Exporter 7, Grifter 5, Accomplice 3, Bodyguard 8, Night Owl 8, Extra Hand 8, Launderers 4, Agents 3, Bait 3, Connoisseur 3, Scout 3.

## v0.9.848 — 2026-10-29

- The darkest faces are lit so they read clearly at card size.

## v0.9.847 — 2026-10-29

- Every member has a new, sharper portrait, with a wider range of skin tones, and cards that count as several members show that many people.

## v0.9.846 — 2026-10-29

- Coach can't hand back a member used this same turn (it could loop forever with Tribute Band and Tryout).

## v0.9.845 — 2026-10-29

- Members worth 2 or more followers show the member count tag too (they count as that many members).

## v0.9.844 — 2026-10-29

- Member cards get a cleaner trading-card look: bigger prices and costs, larger rule text, the name on the color bar, and a tag on members that count as more than one.

## v0.9.843 — 2026-10-29

- Launderers lets you rearrange all your resources: one color for all of them in a click, or split them color by color.

## v0.9.842 — 2026-10-29

- All 15 guests are in: new Dabblers, Cheerleader, Anarchist, Scout, Con Men, HR and Coach; Big Spender is back as Once per game; Freelancer is now Alchemist.

## v0.9.841 — 2026-10-29

- Members in card text are now a little head-and-shoulders symbol: a red one for a red member, a split one for any member.

## v0.9.840 — 2026-10-29

- One Time Use is now called Once per game, on every card and in the rules.

## v0.9.839 — 2026-10-29

- Member cards are back to their earlier look while the new card design is reworked.

## v0.9.838 — 2026-10-29

- Every member's picture redrawn with more detail; members that count as 2 or more show that many people; new guests have pictures

## v0.9.837 — 2026-10-29

- Member cards look like trading cards: the name on a bar in its color, the price in a dark circle and the worth beside it, bigger text, and card keywords like One Time Use and Game End in bold.

## v0.9.836 — 2026-10-28

- Guests: Party Crasher (was Squatter) and Extra Hand are One Time Use; new Saboteur (−3 followers whenever it joins a cult); Launderers worth 2; Front-runner and Tiebreaker cheaper; Straggler is out.
- Green has 15 members (Connector is out). Ensemble counts as 2 members, Impostor costs 6, Tribute Band plays the actions of a rival you choose, Understudy copies the action taken the previous turn, and Hot Streak is One Time Use at +3 followers per turn in a row.

## v0.9.835 — 2026-10-28

- Extortionist steals 2 from the richest rival when recruited and at each round start. Shake Down: the rival picks which of their members is at stake.

## v0.9.834 — 2026-10-28

- Green has 16 members: Understudy, Wallflower, Fan Club and Roadie join, and Tribute Band plays the leader's actions. Accomplice is back at 2: steal 3 resources.

## v0.9.833 — 2026-10-28

- Cards that could be used once a game now say One Time Use.

## v0.9.832 — 2026-10-28

- The members page shows each color's artifact up top and fits a whole color on one screen.

## v0.9.831 — 2026-10-28

- The wheel no longer freezes for a moment after it stops turning

## v0.9.830 — 2026-10-28

- The members page is now a color explorer: pick a color to see its spaces by round, its artifact and its member deck together.

## v0.9.829 — 2026-10-28

- Encore now copies the On Recruit of a rival's member instead of a space. Sleep In gives +4 purple in round I, +5 in round II, +6 in round III.

## v0.9.828 — 2026-10-28

- Demote now swaps for a shop member costing up to 2 less (a 5 for a 5, 4 or 3), and Promote and Demote give +2 red.

## v0.9.827 — 2026-10-28

- The top half of the wheel's ring sits further from the spaces

## v0.9.826 — 2026-10-28

- A small pool of spare minions stands by the wheel from round II. Each extra minion or extra turn flies from it to the player, and cards that give one warn when it's empty.

## v0.9.825 — 2026-10-28

- The wheel's ring words sit centered in the ring

## v0.9.824 — 2026-10-28

- Crowd In now gives +5 purple and one more minion this round, instead of letting you place on taken spaces.

## v0.9.823 — 2026-10-28

- Restocker has its Use button again (it was hidden because it gives no resources).

## v0.9.822 — 2026-10-28

- Walk-In's recruit now flies off the deck, opens in the middle and lands in your seat, like a shop recruit.

## v0.9.821 — 2026-10-28

- Echo, Reprise, Tryout, Walk-In, Exchange and Splurge give +1 of their color again

## v0.9.820 — 2026-10-28

- The wheel's ring and the big numbers on its spaces are in slightly pixel letters

## v0.9.819 — 2026-10-28

- Details view: text a touch smaller, new member pictures shown whole

## v0.9.818 — 2026-10-28

- Rivals' follower buys play at the same quicker pace as the rest of their turn

## v0.9.817 — 2026-10-28

- A player on Last Call (or a copy of it) shows "goes last" on their seat for the rest of the round.

## v0.9.816 — 2026-10-28

- The wheel turns smoothly in Firefox: no redraw of the whole board each time a spin lands

## v0.9.815 — 2026-10-28

- A member you can use now glows and says USE in your seat; one saved for later shows a small light

## v0.9.814 — 2026-10-28

- Your click answers at once right after a rival's turn

## v0.9.813 — 2026-10-28

- A Doppelganger copying Muse now shows its own +1 green by your cult, beside Muse's

## v0.9.812 — 2026-10-28

- Fixed games freezing for good at the end of a round, or a step behind after your own move

## v0.9.811 — 2026-10-28

- Every member and artifact redrawn as a bigger portrait, with a glow in its color

## v0.9.810 — 2026-10-28

- A members page at play/members/: every member's card, by color

## v0.9.809 — 2026-10-28

- Out of Style is back to +1 blue per member sent

## v0.9.808 — 2026-10-28

- The starting pick's panel goes away once the first moves play, instead of staying up through bots' turns

## v0.9.807 — 2026-10-28

- Seat figures' glow and outline are drawn into the picture, so Firefox stops redrawing them while they bob

## v0.9.806 — 2026-10-28

- Your first click of a turn answers sooner: it no longer waits to cut the last settle short

## v0.9.805 — 2026-10-28

- Your clicks do less redrawing: the table redraws once for your move instead of three or four times

## v0.9.804 — 2026-10-28

- Rival turns move on as the last piece lands; the cards slide home underneath

## v0.9.803 — 2026-10-28

- Smoother play: each move takes far less work to figure out, bots keep thinking off the page after one slow turn, and flying pieces, the wheel's dim and the seat-pick glow no longer make Firefox redraw by hand every frame

## v0.9.802 — 2026-10-28

- Long rival turns play out instead of jumping to the end: they speed up a little to fit

## v0.9.801 — 2026-10-28

- Tiebreaker costs 5, down from 7.

## v0.9.8 — 2026-10-28

- Out of Style can send neutral members to the bottom: pick the gray neutral dot.

## v0.9.7 — 2026-10-28

- Coins, followers and members no longer vanish partway: every flight lands, even when the page is busy

## v0.9.6 — 2026-10-28

- The wheel turns lighter in Firefox: its glows and shadows rest while it spins

## v0.9.5 — 2026-10-28

- Pointing at a copy space late in the game (Greatest Hits, Cover) no longer freezes the page for seconds, and every move does less work

## v0.9.4 — 2026-10-28

- Your own moves answer faster: the table draws your move in one go instead of in pieces

## v0.9.3 — 2026-10-28

- The shop fits on screen at narrower laptop widths (about 1100 wide): every card and "Done, no recruit" show at once, and Peek's top-of-the-pile row no longer covers Done.

## v0.9.2 — 2026-10-28

- Say: quick lines or your own words to the table, shown beside your seat and in the log
- Every finished game is saved: Past games on the home screen reads any of your last 12 move by move, or saves it
- Peek shows the top of the pile as a row: click to number the order, or Keep this order; the row stays lit to recruit from
- Doppelganger does the copied member's On Recruit; Squatter on Greatest Hits is checked
- Prices: Front-runner 4, Launderer 5, Straggler 8, Tribute Band 12; Loyalists: your other members can't be swapped
- Spree keeps all three recruits when one of them is a member you can use (Speculator)
- Panel's Promote or Demote picker is titled by what it does
- Members sent back to the pile or shop keep nothing from before; Farewell and Release refill a short shop
- Rounds run lighter: an idle table costs a fraction of before, and late-game clicks answer faster

## v0.9.1 — 2026-10-27

- Out of Style gives a flat +2 blue; the wheel's words match the new round I spaces

## v0.9.0 — 2026-10-27

- Round I spaces reworked: Red's Tryout (use a shop member's On Recruit) and Walk-In (recruit the deck's top member, each rival +1 red); Green's Build Up +3/+4/+5, Echo and Reprise +2, Reprise opens in round I, Cover copies an action with no minion on it; Magenta's Help Yourself steals 3/4/5 and Stash +3/+4/+5; Blue's Savings +3/+4/+5 and Out of Style +2; Splurge pays on member recruits only, Exchange +2

## v0.8.100 — 2026-10-27

- Contest prizes are +4 / +6 / +10 by round (ties get half, rounded up: +2 / +3 / +5), and every member costs 1 more of any color
- Rounds II and III draw from all three decks: round III members shuffle in with round II's
- A recruited member shows whole at the wheel's middle, then flies to its buyer; the pay sheet closes once you've paid
- Picks light up in the shop (Churn, Peek, buys), "Done, no recruit" is amber, the wheel is about 6% bigger
- Hovering an artifact shows it; member pop-ups linger; the ring note fades
- Late games run lighter, and the wheel no longer turns by itself
- Trendsetter fires on member recruits only, and Peek never shows a card twice

## v0.8.99 — 2026-10-27

- Member cards print two clear keywords: 'On Recruit:' and 'Round Start:' (was 'Now and at round start' and 'When recruited')

## v0.8.98 — 2026-10-27

- The round prize on each wheel rim reads bigger and bolder, in plain case, on a slightly thicker rim

## v0.8.97 — 2026-10-27

- The room shows each color's artifact under what its spaces do, and the menu has a volume slider beside Sound on

## v0.8.96 — 2026-10-27

- Bigger text across the game, a step up from 1400px-wide windows, and shop members keep their picture with details on

## v0.8.95 — 2026-10-27

- The log under the player cards shows every turn since yours that fits, and no longer opens over the fourth player's card

## v0.8.94 — 2026-10-26

- Late in a game, bot turns no longer stall: no step's animation holds the screen past about 4 seconds, at any speed

## v0.8.93 — 2026-10-26

- Ordering Peek's cards, the rest of the shop fades back so only the four read as clickable.

## v0.8.92 — 2026-10-26

- Greatest Hits: you pick the order of its copies by clicking your lit spaces on the wheel (playtester Maxwell's idea)

## v0.8.91 — 2026-10-26

- Promote's and Demote's picker shows every player's row whole

## v0.8.90 — 2026-10-26

- Promote's and swaps' rows fade at the edge when there are more; the space's hover closes when its question opens; the swap hover says '9 members for 7 shop members'; round summaries say gained/lost, not won; a member's bubble shows its whole rule; the rules explain the artifact pick

## v0.8.89 — 2026-10-26

- Your seat keeps a line of what rivals took from you since your last turn: resources, followers, members, and swaps ('P2 swapped your Busker for Doorman'); seats say '1 member'

## v0.8.88 — 2026-10-26

- Last Call keeps you waiting until everyone else is out of minions, even when a rival skips a turn after you take it. The shop no longer shows one member twice.

## v0.8.87 — 2026-10-26

- Churn's tap button says Send to bottom; Spree's Done ends every recruit left and its prompt counts them; a steal's card stays put between picks; Shake Down asks 'P4 is taking your Trendsetter: pay 3 to keep it?'; extra clicks on Pay can't open the deck

## v0.8.86 — 2026-10-25

- Extortionist costs 6.

## v0.8.85 — 2026-10-25

- Smoother: bots think without holding up the screen, and flying pieces and counts share one frame loop.

## v0.8.84 — 2026-10-25

- Snappier: hovers open the moment you point, your choices light as the last piece lands, rival turns play quicker, and round II and III members shuffle into the deck.

## v0.8.83 — 2026-10-25

- The artifact list during the draft uses the table's text sizes.

## v0.8.82 — 2026-10-25

- Round decks: round II and III members are shuffled into the deck when their round starts (cost 3 or less round I, 4 round II, 5 and up round III).

## v0.8.81 — 2026-10-25

- Member decks: Shopkeeper and Busker cost 3; Recluse joins White; Stylist leaves Blue; Proselytizer, Mentor & Protégé, Bodyguard and Shopaholic are worth 1 more follower.

## v0.8.80 — 2026-10-25

- A card you're reading stays open while rivals take their turns.

## v0.8.79 — 2026-10-25

- The artifact draft says: A boon for your cult. Comes with 1 resource.

## v0.8.78 — 2026-10-25

- Even Swap and Peek show their +2 on the wheel.

## v0.8.77 — 2026-10-25

- The artifact draft says what an artifact is: your cult's bonus all game.

## v0.8.76 — 2026-10-25

- Artifacts are picked only from the list on the wheel, which says whose pick it is; a taken one leaves the list.

## v0.8.75 — 2026-10-25

- Gather gives +3/+4/+5 red, Hold Up +2/+3/+4 purple, Crunch Time +2 purple.

## v0.8.74 — 2026-10-25

- Dragging the wheel snaps it round to the next side right away, even while rivals are moving.

## v0.8.73 — 2026-10-25

- The artifact draft shows every artifact's picture and what it does, no hover needed.

## v0.8.72 — 2026-10-25

- Artifacts: at the start each player picks an artifact and 1 of its color. Each has its own picture on the player card.

## v0.8.71 — 2026-10-24

- New members: Headhunter (Red), Fixer (Magenta), Window Shopper and Restocker (Blue), Timekeepers (Purple), Old Money (White). Bulk Buyer, Appraiser and Makeover leave the deck.

## v0.8.70 — 2026-10-24

- Growing spaces show their numbers round by round (I +2 · II +3 · III +4) instead of "+4 next round".

## v0.8.69 — 2026-10-24

- Growing spaces show their numbers round by round (I +2 · II +3 · III +4) instead of "+4 next round".

## v0.8.68 — 2026-10-24

- Prices: Trendsetter, Makeover and Window Dresser cost 3; Patroness 7; Early Bird, Bouncer, Gossip and Go-Getter 2 cheaper; Tribute Band 7; Mob 12.

## v0.8.67 — 2026-10-24

- Growing spaces on the wheel say next round's number ("+3 red, +4 next round") instead of "more each round".

## v0.8.66 — 2026-10-24

- Sleep In gives +3 purple (was +4).

## v0.8.65 — 2026-10-24

- Even Swap gives +2 red. Recruit a Member takes a shop member costing 8 or less.

## v0.8.64 — 2026-10-24

- "Cast out" on Undertaker and Appraiser too: one word for sending your own member to the bottom of the pile.

## v0.8.63 — 2026-10-24

- "Cast out": Farewell and Estate Sale cast out one of your members to the bottom of the pile.

## v0.8.62 — 2026-10-23 — shipped (source 07ec995, main 7b510cc)

- The wheel shows more of each space: Right Away's and Crunch Time's purple, and Last Call's followers per minion left.

## v0.8.61 — 2026-10-23 — shipped (source 523b518, main 500e3bc)

- Clearer card text: Allowance, Top Up, Late Bloomers and Exchange; the board's words now match each card (Sweet Talk, Help Yourself, Redistribute, Golden Years, Chorus, Harvest).

## v0.8.60 — 2026-10-22 — shipped (source c1eee17, main eb45b92)

- Peek: the 4 cards you peek at sit beside the shop instead of replacing it, and ones you can't afford stay visible, faded

## v0.8.59 — 2026-10-22 — shipped (source c919007, main 3eb46a0)

- The shop shows 6, 7 and 8 members in rounds I, II and III. Peek gives +2/+4/+6 blue; Lie Low no longer steals; Raiders (renamed) costs 4. Redistribute counts its own space, and the details view shows total cost. Members fly between players online too; seats list members oldest to newest. Top Up: fewest colors get a flat +1, only its yellow grows each round. Wheel and card words match what the spaces do. After an update, players in a game started on the version before go back to their seat on that version.

## v0.8.58 — 2026-10-22 — shipped (source 314e445, main a5cca4f)

- Loyalists costs 5 (was 3). Sticky Fingers: "Your steals take 1 more resource", now members' steals too.

## v0.8.57 — 2026-10-22 — shipped (source 33d3f67, main 1458721)

- Right Away scales (+1, +2, +3 purple). Gossip pays when a turn is really skipped. Closer pays whoever places the round's last minion, now cheaper. Copying Sleep In, Hold Up, Right Away, Crunch Time, Last Call, Crowd In, High Tide or Allowance does the whole action. Stunt Double repeats the space you just took.

## v0.8.56 — 2026-10-22 — shipped (source 8b73f52, main f6ea99e)

- Help Yourself now steals its followers from the rivals you take from, instead of getting them from the bank.

## v0.8.55 — 2026-10-22 — shipped (source 4fd20c7, main 6272bf6)

- Even Swap, Promote and Demote now offer "Don't swap", so the swap is your choice; you keep the +1 red.

## v0.8.54 — 2026-10-22 — shipped (source f45c601, main 84d5563)

- Hover cards put each separate effect on its own line.

## v0.8.53 — 2026-10-22 — shipped (source ba3d88d, main 37b3327)

- The glossary lists the cards that use each word and adds Skip, Get rid of, Turn into followers and more; the Members list shows colors not in this game, dimmed. Right Away now scales by round.

## v0.8.52 — 2026-10-22 — shipped (source 24f6038, main 1aecb82)

- White prices: Exporter, Undertaker and Appraiser cost more; Money Changer, Heiress, Broker and Martyr are worth 2 followers

## v0.8.51 — 2026-10-22 — shipped (source 95516d9, main c272a6e)

- Copying Open Door now recruits the cheapest member in the shop at that moment, instead of nothing once the first player's pick was gone.

## v0.8.50 — 2026-10-22 — shipped (source 8f3e174, main 1e93cb7)

- Dragging or spinning the wheel no longer redraws the whole board each frame, so it turns smoother.

## v0.8.49 — 2026-10-22 — shipped (source 2a10608, main 3c7959f)

- White is redesigned: six new spaces about turning what you have into followers, 12 members, and the contest is Most white

## v0.8.48 — 2026-10-22 — shipped (source 1c61d84, main 0e0f24e)

- Custom table picker: Blue is tagged 2.0

## v0.8.47 — 2026-10-22 — shipped (source 61ccbf3, main 318800d)

- Silver's round III space is now High Tide: each rival +1 silver, then gain 1 follower per silver the rival with the most silver holds.

## v0.8.46 — 2026-10-22 — shipped (source 10b225b, main cb2f026)

- Custom table picker: a small 2.0 / 1.5 / 1.0 tag on each color shows which are redesigned

## v0.8.45 — 2026-10-22 — shipped (source dc4564e, main 9747394)

- Purple redesign: new actions (Sleep In, Hold Up, Right Away, Last Call, Crunch Time, Crowd In), six new members, fresh prices, and a II+ tag on members that work from round II.

## v0.8.44 — 2026-10-22 — shipped (source cd94f94, main 9c45335)

- The log now says every change: each space's gain, every swap, who got paid, new cards in the shop, and what caused it.

## v0.8.43 — 2026-10-22 — shipped (source b7e4550, main 24e5221)

- Five and six player games: Purple joins the board at 5 players, Yellow at 6, with shorter chairs so everyone fits.

## v0.8.42 — 2026-10-22 — shipped (source f4bd276, main e87c033)

- Purple round II: "+2 purple. This round you can place on taken spaces" replaces Plan Ahead.

## v0.8.41 — 2026-10-21 — shipped (source aa791b5, main 29f6ecf)

- Crunch Time's hover says 2 turns after this one.

## v0.8.40 — 2026-10-21 — shipped (source 99b8c53, main ccd71ed)

- Crunch Time reads "Take two turns after this one."

## v0.8.39 — 2026-10-21 — shipped (source 42f448f, main e7599be)

- Crunch Time reads "Take your next 2 turns now" again.

## v0.8.38 — 2026-10-21 — shipped (source 82542e6, main 7196887)

- The final results open with every total already in place; no second count-up after round III.

## v0.8.37 — 2026-10-21 — shipped (source 214e269, main 8d3c539)

- Taking back a placement with Escape (Kickback) now really frees the space again.

## v0.8.36 — 2026-10-21 — shipped (source 1eb83e7, main ce32b97)

- Snappier: a rival's seat card opens as soon as you rest on it, the start of your turn no longer stutters, and rivals' turns run a touch quicker.

## v0.8.35 — 2026-10-21 — shipped (source f9882c0, main 97b0632)

- New member prices for Magenta, Blue, Red, Green and the guests: educated guesses from bot tests, leaning a little pricier, nothing below 2 (one color, one wild). Most cards got cheaper; human play will set the rest. Price list: /mnt/project-files/member-balance/prices-2026-10-21.md
- The new Blue members are in: Shopaholic, Patroness, Snob, Stylist, Connoisseur, Plus-One, Doorman, Critic, Regular, Window Dresser, Makeover, Trendsetter. Window Dresser, Makeover and Trendsetter are now worth 3 followers each.
- Guests: Front-runner, Tiebreaker ("Ties you're in go to you alone") and Launderer ("turn all your resources into one color you choose") join the deck.
- Recruit Bonus is worth 2 followers. Shopaholic's second recruit is named in the game log.

## v0.8.34 — 2026-10-21 — shipped (source 08776e3, main 9b95004)

- Crunch Time's hover says 2 more turns now.

## v0.8.33 — 2026-10-21

- Crunch Time takes 2 more turns now from the end of your round, so your next turns stay where they were and you finish early.

## v0.8.32 — 2026-10-21 — shipped (source 9aec1a1)

- Recruiting means bringing members or followers into your cult yourself: buying followers now counts for "whenever you recruit" cards (Recruiter, Proselytizer, Shoplifter); a member a rival forces on you never does. The step after placing is called Recruit.

## v0.8.31 — 2026-10-21 — shipped (source cbf1440)

- Members say "Recruit" instead of "Buy": "Done, no recruit", "Undo recruit", "Recruit twice this turn". "Buy followers" stays. The space Buy Twice is now Recruit Twice.

## v0.8.30 — 2026-10-21 — shipped (source bd09cf9)

- New player panels: the follower total is big on the right, minions left in a row under the name, resources in one even strip, members sorted by cost with room for two rows. The turn story folds to one line and opens on a tap.

## v0.8.29 — 2026-10-21 — shipped (source d12bd01)

- Player panels no longer slide up a step after the round I picks.

## v0.8.28 — 2026-10-21

- Magenta members: Kingpin now pays per magenta member; new Snitch, Fence and Shoplifter; prices set from balance tests

## v0.8.27 — 2026-10-21 — shipped (source 6266070)

- Faster: your minion stands on the space the moment you click, the wheel spin no longer stalls, round II starts with no dim pause, the shop stops redrawing on rivals' turns, and card flights cost less to draw.

## v0.8.26 — 2026-10-21 — went live together with v0.8.27

- Shorter, more consistent card texts: one opener then a colon, "When recruited:", "each rival", "steal", growing amounts written per round. No card works differently.

## v0.8.25 — 2026-10-21 — shipped (source ed22298)

- Member swaps with the shop cross both portraits at once. A big gain flies every coin (12 coins as 12) without slowing the turn. Round end is smoother: the scoring card fades up, totals count as prizes land, minions fill their columns as they arrive. The follower mark on each rim has a soft sheen. Bots now judge member swaps properly.

## v0.8.24 — 2026-10-21 — shipped (source 2831c45)

- Shop: long abilities in details view fit their card, and a discounted card's old price no longer runs into its worth. The since-your-last-turn story never shows a line cut in half, and a tall turn card sums up its last lines so the story's heading stays visible.

## v0.8.23 — 2026-10-21 — shipped (source 1343cb1)

- Clearer motion: a space's result shows beside its space, members pop out of their seat when they act, a recruit shows itself at the middle before flying to its buyer, and a steal says what was taken at once. Round start plays in steps: minions home, income seat by seat, then the shop refills. Skipping no longer sets off a burst of sounds. Undo plays the move backwards.

## v0.8.22 — 2026-10-21 — shipped (source febdee1)

- Laptops: chairs run full height beside a narrower shop; the story holds two turns. Big screens scale the whole table. Silver, white and colorless members get their own card look. Your first placement each round says which rings are open.

## v0.8.21 — 2026-10-21 — shipped (source e606c44)

- "Safe this round" is a small shield. Big coin piles on the pay sheet stay short and print their count. A buy or recruit pulses before its reward flies. At round start the old shop cards go into the deck and the new ones deal out.

## v0.8.20 — 2026-10-21

- Churn's space on the wheel says what it does: send 3 to the bottom

## v0.8.19 — 2026-10-21 — shipped (source c20f7b7, main 0dae66e)

- Blue reworked: churn the shop, peek at the pile, buy twice, bury, Spree; the shop grows 5/6/7 by round.

## v0.8.18 — 2026-10-20 — shipped (source 902e175)

- Round cards appear faster (no fade-in blur). The final results show where each cult's points came from: followers, then each member's people, then the followers it grants.

## v0.8.17 — 2026-10-20 — shipped (source 84b7374)


- Shop: an "affordable" toggle fades the members you can't pay for.
- Red's shop swap names both members.
- Rules that grow by round read as I / II / III lines, with this round lit (hovers, member cards, seat lists).
- "P2 took 1 gold" shows as a small tab on the robbed seat.
- Gift cards keep their way-out button ("Swap nothing", "Take all") in a footer, apart from the caption.
- Contest rim marks sit on the line of text.
- Grifter: only its first sentence. Top Up gives +1 × round. Feastmaker is now Chefs: 6 yellow + 3 any, worth 2 followers.
- Overseer and Social Climber leave the deck (Purple and Blue deal 9 members until their replacements).
- A player named Pants gets Max's tall leader.
## v0.8.16 — 2026-10-20 — shipped (source 9d04664, main e943baa)

- Guest members are colorless: no sphere counts them, and their whole cost is paid in any colors.

## v0.8.15 — 2026-10-20 — shipped (source da1b0c7, main 7497f03)

- A busy rival's chair shows more of its members: "safe this round" sits under the member count.

## v0.8.14 — 2026-10-20 — shipped (source 33aefd2, main e79d4fe)

- Bigger wheel: the shop column is narrower on laptops.

## v0.8.13 — 2026-10-20 — shipped (source 80aa541, main 251daf6)

- Bots no longer swap back a member they swapped away.
- A member swapped into the shop comes back clean, with no trace of its old owner.
- A member stolen this round can still be released.
- The turn story tells a steal's followers once, not twice.

## v0.8.12 — 2026-10-20 — shipped (source a74317c, main eea5b26)

- The shop row fills all its slots at 7 members: the deck stands two cards tall.

## v0.8.11 — 2026-10-20 — shipped (source 2817a9b, main 0c5101b)

- The shop shows 7 members face up, down from 8.

## v0.8.10 — 2026-10-21 — shipped (source 3ff1ac7, main 5ba1b6f)

- Shop cards show their total cost as a faint number in the top-right corner.

## v0.8.9 — 2026-10-19 — shipped (source eab7757, main d657180)

- Straggler destinations stay visible and can be inspected before moving.

## v0.8.8 — 2026-10-19 — shipped (source 68c9bf0, main f366272)

- Round I: steal×round plus safety; steal per already occupied Magenta action; steal×round plus followers×round.
- Round II: take half a rival’s one-color pile, rounded down; ransom a member costing5 or less. Round III: take a rival’s member without replacement.
- Every action gives+1 Magenta. Stolen resources keep their colors, including ransom payments and member effects. Split general steals freely across rivals; doubling/+1 apply once to the overall total.
- Bodyguard protects both resources and members. Updated wheel/hover text, exact half-stack choices and direct original-color resource flights.

## v0.8.7 — 2026-10-19 — shipped (source c387ebd, main d090f0c)

- Magenta contests reward held magenta resources.

## v0.8.6 — 2026-10-19 — shipped (source 12aab9d, main 190bf16)

- Larger printed costs and follower symbols on shop cards.

## v0.8.5 — 2026-10-19 — shipped (source 8619ed0, main 8b6cc10)

- Retinue counts as three, Yellow is warmer, and the opening draft shows the upcoming snake order.

## v0.8.4 — 2026-10-19 — shipped (source 1acee1a, main 70c0fa4)

- Payment passives sit above the money selector with tighter spacing; member abilities remain readable in dark ink.
- Member hovers put costs beside names, retain whole abilities and controls, and sort by cost inside effect groups. Redundant ownership lines are gone.
- Details can be toggled during member choices; your explicit reading preference survives subsequent choices and visits.

## v0.8.3 — 2026-10-19 — shipped (source cf9e23c, main a189343)

- Larger shop cards; details reveal abilities in place without rearranging or scrolling the desktop market.

## v0.8.2 — 2026-10-19 — shipped (source ff53560, main 4735862)

- Red’s twelve-member deck now includes Panel, Loyalists and two new recruit/movement passives. Volunteer is free; Twins costs 2 red; Mob counts as 5 members/followers. The upper prices are 6 / 8 / 10.
- Panel promotes or demotes another member. Loyalists blocks your own and rivals’ swaps; taking members still triggers Recruiter. Printed follower groups count equally as members.
- Impostor and Doppelganger become copies without triggering the copied member’s On Recruit; ongoing abilities and future Round Start effects remain.
- Chorus excludes itself. Copy Previous follows the latest action regardless of its owner. On Recruit and Round Start are bold throughout member rules.
- Followers and members share one shop with matching card art/cost layouts. Swap targeting no longer leaves stale hover highlights.

## v0.8.1 — 2026-10-18 — shipped (source 68e9a5d, main 2222a66)

- Red and Green round prizes now reward held resources instead of members.

## v0.8.0 — 2026-10-18 — shipped (source c643d18, main 99a7ee8)

- Red's six actions now recruit, promote, demote, exchange equal-cost members, or gain 2/3/4 red by round. Every Red action includes +1 red.
- Promote and Demote can change any cult; Even Swap can exchange any two equal-cost members across cults and the shop. Cost compares printed colored plus wild cost.
- Taking a member for yourself triggers Recruit effects. Giving a member to another cult does not. Green copies ask for fresh swap targets.
- Swaps preserve shop size and transfer only unused extra minions. Existing Red members remain while their redesign is discussed.

## v0.7.0 — 2026-10-18 — shipped (source 4b6a8fe, main d6241e1)

- Green copies now choose again through copied copy actions. Each chain prevents revisiting an action, and each Green action gives +1 Green. Encore targets rivals; Reprise targets your actions.
- Chorus and Build Up replace Hum and Crescendo. Green's twelve-member deck includes Impostor, Connector, Agents and Bait, plus revised existing abilities and prices. Stunt Double copies on recruit; Tribute Band is once per game.
- Copy-all resolves each choice and recruit before continuing; nested choices survive save/reload. Copying Extra Hand grants the current round's unplaced extra minion.
- Bait visibly deducts followers without removing members; totals stop at zero and score breakdowns account for losses.
- Shorter pauses while members pass through the center; flight and landing animations keep their full duration.

## v0.6.5 — 2026-10-18

- Smoother animations: the idle bobbing and breathing pause while a move plays out. At 4× CPU slowdown, that halves the page's work and cuts the worst stall from 0.4s to 0.13s.

## v0.6.4 — 2026-10-18

- Prices: Heir 4+2, Revelers 3+1, Alchemist 4+2, Squatter 5+2, Lamplighter 6+2 are cheaper; Freelancer 3+3 and Front-runner 4 cost more.

## v0.6.3 — 2026-10-18 — shipped (source ebbe04f, main 2817380d)

- A resumed game on your turn takes your first click at once (it waited 2-3s).
- Redistribute on the wheel says "from every rival" (it still said "from rivals with more resources").

## v0.6.2 — 2026-10-18 — shipped (source f9a419f, main 15e674c)

- At round end, followers fly only from where they really came from: no stray flights from the follower shop, and a closing recruit's followers come off the new card.

## v0.6.1 — 2026-10-18 — shipped (source 4be3a95, main 65b79ea)

- When Crunch Time puts a player back to back, the turn line says so ("P1 took turns early with Crunch Time") instead of blaming snake order.
- The round card shows the coming round's snake: "Snake order: P4, P2, You, P3, P3, You, P2, P4 …".
- An extra turn names its card: "Night Owl: extra turn" (also Go-Getter, Late Riser); Crunch Time's turns read "Crunch Time: next turn, now".
- A member used before placing leads the turn card and keeps its own gains (Tribute Band's copy no longer reads as Spree's).
- A magenta steal reads once: "1 gold from P2, 1 red from P3, as magenta".

## v0.6.0 — 2026-10-17 — shipped (source 41f09d8, main 11c3ee2)

- Member competitions count members of that arc's own color; Gold, Silver and Yellow keep their conditions.
- Local/online legal lights and turns wait for actual action animation completion; scoring awards wait for arrival.
- Remove the round-end pre-screen and fixed gaps; improve swap, steal and wheel rendering.
- Cutpurse offers resource choice; Poach gives no replacement; Extortionist triggers on5+ follower purchases; Go-Getter can activate after its last-turn purchase.
- Payment shows member ability; Basic Blue/Green leave normal setup; Straggler/Squatter cues and card wording improved.
- Version now includes a release number and build reference. Public build manifest includes version and full source commit.
- Checked: unit tests and build pass; a full laptop game and an online game finish. Every browser test that still fails also fails on v0.5 (old test expectations, see design/HANDOFF.md), except the phone smoke test (phone is out of scope for now).

## Historical v0.5 — verified source6c1e97eb — 2026-10-17

- Reverse RoundI resource draft; printed follower value also counts as member quantity; tied leaders each get half prize.
- Corrected theft/member effects, multiplayer display and market interactions.
- Desktop, online fallback and phone checks passed; exact evidence and remaining work are in design/HANDOFF.md.
- Earlier releases reused the samev0.5 label. Git history and feedback audits retain those individual fixes; no invented release numbers.

## Recorded v0.2 — 2026-10-14 — historical source

- Central Cults name/version marker introduced in [20573121](https://github.com/cojamz/patrons/commit/205731217a93ffb499fcc3804fe140653df4a336), following the deterministic v4 engine and local/online UI work.
- v0.5 replaced it on October15. No v0.3/v0.4 release is inferred; see the separate deployment timeline for published builds.

## Legacy recorded changelog (preserved)

The original entries below predate the current release-numbering scheme. Their dates and wording are preserved; they do not imply deployment of the new v4 candidate.

# Changelog

All notable changes to Patrons are documented here.

---

## [2026-03-06] — Multiplayer Draft Fix + Animation Overhaul + Opponent Feedback

### Fixed
- **Multiplayer draft stuck state** — HostSync null guard: `currentDecision?.playerId !== slot` evaluated to `true` when `currentDecision` was null, rejecting valid draft picks. Now only rejects when there IS a pending decision for a different player.

### Added
- **Active turn tab pulse** — Breathing box-shadow animation on the active player's tab using their player color. CSS keyframe `turnPulse`, no Framer Motion.
- **AI/remote thinking dots** — Three pulsing dots with staggered delays when watching opponent's turn. CSS keyframe `thinkDot`.
- **Action space flash** — Inset + outer glow burst when a worker lands on an action. 800ms duration (was 400ms). CSS keyframe `placeFlash`.
- **Board turn flash** — 2px horizontal bar in incoming player's color at the top of the board on turn change. Framer Motion AnimatePresence.
- **Board dim during watching** — Always-mounted overlay, `opacity: 0.15` when AI/remote player's turn, `0` otherwise. CSS transition.
- **Victim tab flash** — Red background flash on player tab when they receive negative resource/favor deltas. CSS keyframe `tabHit`.
- **Active effects banner** — Pills for active effects (2x Next Gain, Shop -2 Cost, No Shopping) between player tabs and panel content. Framer Motion for mount/unmount.
- **Market sold flash** — Gold border pulse on empty card slot when a power card is purchased. CSS keyframe `marketSoldFlash`.
- **Action name display** — TurnIndicator shows "→ Action Name" in god color after AI/remote player places a worker. Uses `ACTION_LOOKUP` map built from gods data.
- **Placement banner** — Floating overlay on action section showing "PlayerName → ActionName" when opponent places. CSS keyframe `placementBannerIn`, 2s duration. Works on both focused and collapsed god views.
- **Resource drip pills** — "+3 gold" / "-2 black" pills float upward from the action section when resources change from a placement. CSS keyframe `deltaDripFloat`, 1.8s duration.
- **Rejoin interstitial** — Replaced auto-rejoin with a prompt showing room code, game status, and Rejoin/Leave buttons. Works during champion draft too.

### Changed
- **Watching detection generalized** — All visual feedback (dim, dots, action name, banner) triggers for any non-local player turn (AI or remote human), not just AI.
- **Flash intensity** — `placeFlash` now uses both `inset` and outer `box-shadow` for more impact.

### Stats
- All CSS-first for persistent elements, Framer Motion only for transient mount/unmount
- Compositor-friendly properties only (opacity, transform, box-shadow)
- No `backdrop-filter` anywhere
- Deployed to https://cornycolonies.netlify.app

---

## [2026-03-05] — Symbol Language + Artifact Card Rework

### Changed
- **RichEffect symbol expansion** — "resource"/"resources" now replaced with wildcard icon inline. Tier numerals Ⅰ/Ⅱ/Ⅲ render as styled tier badge pills matching ActionSpace styling.
- **Green action descriptions** — "T1"/"T2" replaced with Unicode Ⅰ/Ⅱ in all 5 green repeat action effect strings.
- **Artifact card layout** — Reworked focused view: 80px centered image left, name + description + cost right, both vertically centered. Cards fill available space with `flex: 1` grid.
- **Yellow Favor condition** — Removed redundant "color" from "+1 Favor each time you gain a resource color you had 0 of".
- **Thieves' Gloves** — "When you steal resources, +1 any resource" → "When you steal, gain +1 any" (avoids triple wildcard icon).
- **Voodoo Doll** — Removed redundant "(triggers Favor condition)" from description.

### Added
- **Artifact image aliases** — 12 card IDs mapped to existing image assets from old card names: poisoned_blade→cursed_blade, flux_capacitor→capacitor, chrono_compass→crystal_watch, temporal_patent→hourglass, resonance_crystal→crystal_ball, philosophers_stone→prismatic_gem, skeleton_key→obsidian_coin, golden_scope→gold_vault, rainbow_scepter→golden_chalice, extraction_vial→abundance_charm, slag_catcher→emerald_coin, timeline_splitter→travelers_journal.

### Stats
- All 24 power cards now have artifact images
- Deployed to https://cornycolonies.netlify.app

---

## [2026-03-04 LATE] — UX Polish Sprint + Multiplayer First Connection

### Changed
- **Action text stacked vertically** — Name on one line, effect text below. Eliminates awkward mid-phrase wrapping in 4-player layout.
- **Inactive readability** — Locked/occupied actions and shops raised from opacity 0.25-0.45 to 0.55-0.70. Text colors also brightened. Still clearly deemphasized but fully legible.
- **Favor text styling** — Changed from golden `#F5D98A` to white `#FFFFFF` with subtle 3s CSS pulse animation (`favorPulse` keyframe).
- **Shop effect text** — Reduced from 13px to 12px with 1.4 line height for more natural wrapping in 3-column layout. Inactive shop text also brightened.
- **Favor condition** — Max-width 55%, font 12→11px to prevent awkward wraps.
- **Turn phase HUD** — TurnIndicator now shows explicit phase: "Place a worker · 3 left" / "Buy Phase" / "End Turn" instead of just worker count.
- **Player tabs by turn order** — Tabs sorted by `game.turnOrder` (lowest Favor first) instead of player ID.
- **RoundTracker removed** — Removed from top-right HUD; round info now in TurnIndicator as "Round 1/3".
- **Alchemist's Trunk** — Description updated: "now + each round" → "now and at the start of each round".

### Added
- **Aegis visibility** — Gold shield artifact card appears in player's Artifacts row when they hold the Aegis. Shows title + "Protected" label.
- **Styled resource tooltips** — Hover over blessings shows god-colored tooltip with playstyle descriptions (e.g., "Hoard riches to fuel your economy..."). Replaces native browser `title` tooltip.
- **Firebase database rules** — `database.rules.json` added to repo with `v3rooms` path for multiplayer.
- **WaitingOverlay leave button** — "Leave Game" escape hatch for stuck multiplayer sessions.
- **GodArea overflow:hidden** — Both focused and collapsed containers prevent content spill during grid column transition.

### Fixed
- **Siphon/Ransack/Plunder abort** — These actions now return `abort: true` when no valid steal targets (Aegis/no resources), reverting worker placement instead of consuming it.
- **Multiplayer auth** — Firebase Anonymous Auth enabled, database rules configured for `v3rooms` path with `auth != null`.

### Multiplayer Progress
- First real multiplayer connection: rooms create, players join, anonymous auth works.
- Champion draft flow has routing bug: both players see waiting screen instead of draft UI.
- Guest game view shows only WaitingOverlay during draft phase (should show game board behind).

### Stats
- Tests: 647 passing
- Deployed to https://cornycolonies.netlify.app

---

## [2026-03-04] — Layout Rework + Modal Speed + Rules Reference + AI

### Changed
- **GodArea compact headers** — Single-row layout: god name (uppercase) + title + favor condition inline. Both focused and collapsed views reworked for space efficiency.
- **Shops 3-column layout** — Side-by-side cards with colored top border, type label + cost on first line, effect text below. Replaces vertical row list.
- **Artifacts 2×grid** — Large images (68px), 14px names, 12px descriptions. Gets `flex: 1` to fill remaining vertical space.
- **Actions natural height** — Changed from `flex: 1` to `flex-shrink: 0` so they don't hog empty space.
- **ActionSpace bigger** — Height 36→42px, name text 12→13px, effect text 11→12px.
- **AI purchasing simplified** — Replaced MCTS-based logic with 60% random chance, random pick from all affordable shops and cards. Removed `heuristicShopDecision` and `heuristicCardDecision`.
- **Chronis glory condition** — "repeat or copy an action" → "repeat an action"
- **Fortunate hint text** — "Choose blessings to start with — pick colors that match your strategy"

### Added
- **RulesReference component** — Full tabbed reference (Overview, Gods, Champions, Artifacts, Shops, Key Rules) pulling data from engine files at runtime. Accessible from setup screen and ? button.
- **Skeleton Key resolver** — `resolveDecision` handler for skeleton_key sourceId (steals most abundant resource from target)
- **Rainbow Scepter resolver** — `resolveDecision` handler for rainbow_scepter sourceId (gains 1 of chosen color)

### Fixed
- **Modal speed** — `AnimatePresence mode="wait"` → `mode="popLayout"` for parallel enter/exit (~80ms vs ~200ms)
- **RichEffect Favor spacing** — `margin: '0 1.5px'` on Favor spans prevents "+1Favor" squishing
- **Favor condition wrapping** — Removed `whiteSpace: nowrap` + `overflow: hidden` so long conditions aren't cut off

### Stats
- Tests: 647 passing
- Deployed to https://cornycolonies.netlify.app

---

## [2026-03-03 LATE] — UX Overhaul: Ticker Tape, Player Tabs, Icons

### Changed
- **TurnAnnouncement complete rewrite** — Unified pill language: left side shows player name + action/shop source, right side shows resource delta icons (inline `ResourceIcon`) + favor as ★. Collapsed by default (~280px, ~1.5 pills visible), click to expand. Card triggers get their own pills. Count badge when collapsed with multiple messages.
- **PlayerPanel tab rework** — Each tab shows: player name + worker icon, Favor (14px bold bright white with ★), worker count as small patron icons, active turn halo glow (`boxShadow`), phase label for active player. No auto-switch to current player's tab; human player tab stays selected unless pending decision needs attention.
- **GodArea headers** — `ResourceIcon` (22px) replaces `GodIcon` (18px) in both focused and collapsed column headers.
- **Action effects use inline gem icons** — New `RichEffect` component in ActionSpace.jsx parses effect text, replaces "+3 green" with `+3 <ResourceIcon type="green" />`. "any" renders as `<WildcardIcon />`.
- **Event drip duration** — `useGameEvents` expiry extended from 1500ms to 2500ms for better visibility.

### Fixed
- **Tribute counts as steal** — Added `isStealing: true` to tribute action return in `blackActions.js`, triggering STEAL_ACTION event dispatch for Black Favor condition.
- **Chrono Compass unhandled** — Added `turnOrderChoice` case to DecisionModal router in App.jsx (position buttons with worker icons) + AI handler in useAITurns.js (AI picks first position).

### Stats
- Tests: 647 passing
- Files: TurnAnnouncement.jsx (rewrite), PlayerPanel.jsx (tab rework), ActionSpace.jsx (RichEffect), GodArea.jsx (ResourceIcon headers), blackActions.js (tribute), useGameEvents.js (expiry), App.jsx (Chrono Compass), useAITurns.js (turnOrderChoice AI)
- Deployed to https://cornycolonies.netlify.app

---

## [2026-03-03 EVE] — Playtesting Bug-Fix Sprint

### Fixed
- **repeatHappensTwice** — Green strong shop "Next repeated action happens twice" effect was set but never consumed. Now consumed in GameEngine.js step 9 with proper repeat loop.
- **Temporal Patent** — Power card wasn't triggering because `ACTION_REPEATED` event was missing `originalPlayerId`. Added lookup from `roundActions`.
- **Shop glow after purchase** — `shouldHighlightMarket` now checks `!purchaseMadeThisTurn` to stop highlighting after buying.
- **Blessed/Haggle discount display** — New `getCardCost()` helper in GodArea.jsx applies discounts to `any` cost first, then overflow to specific colors. Both focused and collapsed views use discounted costs.
- **Golden Ring not firing** — Event type mismatch (`turn.start` vs `phase.turn_start`) in powerCards.js + missing TURN_START dispatch for first player of each round in GameProvider.jsx.
- **Eternity chain broken by decisions** — Added `_actionChainQueue` state field + `processPendingChains` export + useEffect continuation in GameProvider to resume chains after decision resolution.
- **Repeat self-exclusion** — Reverted REPEAT_EXCLUDED back to just `green_eternity`. Added per-handler self-exclusion (relive can't pick relive, recall can't pick recall, foresight can't pick foresight).
- **Chrono Compass unhandled** — Added `turnOrderChoice` case to DecisionModal router (shows position buttons with player worker icons) + AI handler in useAITurns (AI picks first position).

### Flagged
- **`doubleNextTheft`** — Black strong shop sets this effect but nothing in the engine consumes it (orphaned).

### Stats
- Tests: 647 passing
- Files: GameEngine.js, GameProvider.jsx, GodArea.jsx, App.jsx, useAITurns.js, greenActions.js, powerCards.js, rules.js

---

## [2026-03-03 PM] — Checkpoint: Roadmap & Arbiter Planning

### Added
- **Roadmap briefing** (`memory/roadmap-briefing.md`) — comprehensive strategic plan covering:
  - "The Arbiter" automated bug-finding system (invariant checker + fuzzer + interaction matrix)
  - Multiplayer E2E testing plan (Firebase infra ~85% done)
  - Unified pill taxonomy + contextual tooltip system
  - Snappy/tactile feel improvements (sub-100ms response, spring physics)
- Full codebase research across 5 parallel agents (engine, UI, multiplayer, tests, docs)

### Stats
- Tests: 647 passing
- Balance rework: fully shipped (all 4 gods redesigned + implemented)
- Game-bot: upgraded to full 3-round games
- Performance: CSS animations replace Framer Motion glow pulses

---

## [2026-03-03] - Balance Rework Shipped + Performance + Game-Bot

### Changed
- Full balance rework: all 4 gods redesigned and implemented (`23268ce`, `6fd6f5c`)
- Performance: replaced Framer Motion glow pulses with CSS animations, memoized grid (`51d964b`)
- Fixed layout shift: memoized theme vars, initialized focused god, preconnected fonts (`6c75009`)
- Updated UI layer for balance rework: new decision modals, AI turns, lobby fixes (`23304f6`)

### Added
- Game-bot upgraded to play full 3-round games with bug detection (`e190e37`)
- Robust integration tests for balance rework (`c58baf3`)

### Fixed
- 6 post-rework bugs: chooseColor modal, Distill +3, turn effects, phase gates (`e56264a`)
- ROUND_END effect cleanup (`c58baf3`)

---

## [2026-03-03] - HUD Event Ribbon + Balance Rework Design Sprint

### Changed
- **TurnAnnouncement rewrite**: Single-toast cycling → persistent two-line pill ribbon. Messages stack left-to-right (max 10), scrollable history, auto-scroll to newest. Each pill: accent pip + worker icon + title (line 1) + resource deltas or body text (line 2).
- **RoundTracker compact**: Collapsed from 3-box I/II/III segments to compact "R1" gold badge with progress dots.
- **TurnIndicator rework**: Removed turn order preview. Distinct sub-phases: "N workers left" → "Buy or End Turn" → "End Turn".
- **Poisoned Blade rename**: Cursed Blade → Poisoned Blade (display name only, IDs unchanged) across powerCards.js, gods.js, blackHandlers.js, PlayerPanel.jsx.
- **Negative Favor**: Removed Math.max(0, ...) floor from stateHelpers.js, blackActions.js, shopResolver.js. Favor can now go negative.

### Added (Design Only — not yet in code)
- **Balance rework design doc**: `.claude/balance-rework-notes.md` — full redesign specs for Yellow and Gold
- **Yellow god redesign**: New identity (Exchange/Conversion), new Favor condition (+1 per 0→N color gain), 7 reworked actions, 3 new shops, 6 power cards (2 new: Extraction Vial, Slag Catcher; renamed: Philosopher's Stone)
- **Gold god redesign**: 7 new actions (Patronage, Levy, Hoard, Haggle, Austerity, Tariff, Cash In), 3 reworked shops, 6 power cards (3 new: Rainbow Scepter, Golden Scope, Golden Idol; removed: Gold Vault, Gold Idol)
- **Weak shops framework**: All 4 gods get a 1-cost-of-color shop (Gold→Favor, Black→steal Favor, Green→tempo, Yellow→2 any)

### Technical Details
- 416 tests still passing
- Commit `a81d09b`: HUD polish, event ribbon, compact indicators, negative Favor, Poisoned Blade rename

---

## [2026-03-02] - UX Polish Sprint — Visual Feedback & Player Clarity

### Added
- **`useGameEvents` hook** (`src/v3/hooks/useGameEvents.js`): State diff engine that detects resource changes, turn changes, worker placements, favor deltas, power card triggers, and new log entries. Powers all visual feedback components. Events auto-expire after 2.5s.
- **Floating resource deltas** (`FloatingDeltas.jsx`): God-colored "+2" / "-1" labels float upward from the resource counter when values change. Positioned above the Blessings section in PlayerPanel.
- **Turn change announcement** (`TurnAnnouncement.jsx`): Cinematic center-screen banner showing "Your Turn" or "Player's Turn" on turn boundaries. Portaled to body, auto-dismisses (1.6s human, 0.9s AI). Worker icon with breathing glow.
- **Action result toast** (`ActionToast.jsx`): Brief banners below the top HUD showing latest game log entries. Stacks up to 3, god-colored accent pips, auto-dismisses with slide animation.
- **Last-placed worker glow**: Most recently placed worker token gets a breathing god-colored glow (2.5s cycle). Tracked via `game.roundActions` last entry. Passes `isLastPlaced` through GodArea → ActionSpace → WorkerToken.
- **Power card trigger flash**: When a power card activates (detected via log entry matching), the PowerCardSlot plays a scale pulse (1→1.08→1) with expanding god-colored box-shadow.
- **Resource pulse on change**: ResourceDisplay gems now flash with a colored background when values change — gold for gains, red for losses. Builds on existing `useAnimatedValue` direction detection.

### Changed
- **TurnIndicator → Phase Breadcrumb**: Restructured from flat labels to flowing breadcrumb: `Round 1 › Action Phase › Player's Turn (3) › Choose Target`. Active segment highlighted, decision crumb pulses amber. Chevron separators replace pipe dividers. Contextual hint preserved below breadcrumb.

### Technical Details
- 416 tests still passing (no engine changes)
- New files: `useGameEvents.js`, `FloatingDeltas.jsx`, `TurnAnnouncement.jsx`, `ActionToast.jsx`
- Modified: `TurnIndicator.jsx`, `WorkerToken.jsx`, `ActionSpace.jsx`, `GodArea.jsx`, `PowerCardSlot.jsx`, `ResourceDisplay.jsx`, `PlayerPanel.jsx`, `App.jsx`
- Z-index tiers: deltas=z-30, toast=z-45, announcement=z-55 (below modals at z-50+)
- `useGameEvents` uses shallow ref comparison — no GameProvider changes needed
- Card trigger detection: scans new log entries for known power card names

---

## [2026-03-02] - Ship Single-Player Sprint

### Fixed
- **Handler frequency reset**: `resetHandlerFrequencies` called before `dispatchEvent` in GameProvider (was after, making `once_per_round` handlers fire every time)
- **AI turns fully functional**: handles all decision types (gem selection, target player, steal gems, action choice, nullifier placement, resource redistribution), never cancels (always submits best-effort answer)
- **Cancel during chained decisions**: `preDecisionSnapshot` preserved from original state instead of being overwritten at each chained decision step
- **Abort mechanism**: action handlers return `{ abort: true }` when no valid targets; engine saves pre-placement state and reverts worker placement
- **Relive tier filter**: only allows repeating Tier 1 actions (was allowing all tiers)
- **Double next gain shop**: all 4 action handler files (gold, black, green, yellow) now check for `doubleNextGain` effect, apply doubling, and consume it
- **Tome of Deeds**: changed from "cannot be stolen" to "cannot be reduced" — blocks ALL glory loss via `glory_reduction_immunity` modifier in every `removeGlory` function
- **Golden Scepter**: partially investigated (fires twice during echo — two RESOURCE_GAINED events), not yet resolved

### Added
- **AI shop + power card purchasing**: evaluates both shops and power cards after placing worker, picks best by priority (cards=7, strong/vp shops=5, weak shops=3)
- **Purchase limit enforcement**: one shop OR power card per turn, from accessed god only (`purchaseMadeThisTurn` flag)
- **Champion draft order**: last place drafts first (reversed from `[1,2,3]` to `[3,2,1]`)
- **Rules interstitial**: 4-slide tutorial overlay before game setup (place workers, build engine, earn favor, 3 rounds)
- **Favor accounting tooltip**: click-to-expand breakdown in RoundTransition, hover tooltip in PlayerPanel with source labels
- **Dynamic echo text**: echo/copy actions show actual last action + player name instead of static description
- **VP condition banner**: prominent gold gradient pill with glow on both focused and collapsed god views
- **Section hint tooltips**: `?` icon on Shops/Powers sections with portal tooltip explaining purchase rules
- **Turn order display**: shows upcoming 4 turns computed via snake draft algorithm
- 6 new tests (doubleNextGain integration, purchase limit, draft order) — 416 total

### Changed
- **Shops visual redesign**: row/list layout with colored left border (was card-style, too similar to powers)
- **Powers visual redesign (collapsed)**: god-glow cards with circular icon badges, distinct from shops
- **Occupied action spaces**: use god colors instead of player colors to preserve god identity
- **Worker tokens**: smaller (20px) with subtle drop-shadow on occupied spaces
- **AI timing**: slowed across the board (2s place, 1.8s market, 1.5s decisions, 2.5s round advance)
- **Balance AI**: Tome of Deeds value increased (6→8 with black, 3→5 without)

### Technical Details
- 416 tests passing (was 410)
- `preDecisionSnapshot` logic: `state.preDecisionSnapshot || { game: state.game, log: state.log }`
- `abort` flow: `executeAction` saves `preplacementState` before worker placement, checks `actionResult.abort`, reverts if set
- `getDynamicEffect()` in GodArea.jsx computes real-time effect text for `copySource` actions
- `tryAIPurchase()` replaces `tryAIBuyCard()` — evaluates all affordable shops + cards, sorts by priority

---

## [2026-03-01] - Playtesting Bug Fixes, UX Improvements, Tooltip Portal Fix

### Fixed
- **Bug A**: TargetPlayer modal showed empty for black steal actions — added `options` field to all 3 targetPlayer decisions in `blackActions.js`
- **Bug B**: AI placed all workers without alternating turns — rewrote `useAITurns.js` with atomic place→endTurn using `processingRef` guard, removed `occupiedSpaces` from deps
- **Bug C**: Power card market never refilled between rounds — added `powerCardDecks` to game state in `createGame`, added refill logic to `executeRoundStart` in `phases.js`
- **stealGems decision type completely unhandled** — added DecisionModal routing (App.jsx), GemSelection steal mode, GameProvider submitDecision handling, AI handler in useAITurns
- Player tabs overlapping god panel content — gradient background on tabs strip, increased board padding (pb-28→pb-36), adjusted board height calc
- Excessive empty space in collapsed god panels — removed `flex-1` from collapsed actions container in GodArea
- Tooltip stacking context — FloatingTooltip rendered via React portal to `document.body` to escape z-10 grid, now visible above z-50 player panel

### Added
- Round transition favor breakdown — shows "+X this round" / "-X this round" deltas per player in `RoundTransition.jsx`
- Tooltip coverage: power card icons (name + description), resource gems (god name + title), worker icons (X of Y remaining), favor counter, disabled end turn button (who we're waiting for)
- UX contract test suite (`uxContract.test.js`) — 8 tests validating engine↔UI field contracts, turn alternation, market refill, and stress simulations (10 random 2P games, 5 random 4P games)
- Playwright MCP installed for future visual playtesting (`claude mcp add playwright`)

### Technical Details
- 391 tests passing (383 original + 8 new UX contract tests)
- GemSelection.jsx supports steal mode: increment limited by `targetResources[type]`, "They have: X" label
- GameProvider snapshots glory before `advanceRound()` to compute deltas, attaches `lastRoundGloryDeltas` and `lastRoundPreGlory` to game state
- `powerCards` imported as `powerCardsData` alias in PlayerPanel to avoid naming conflict with champion's cards array

---

## [2025-11-21] - Red R1 Shop Balance & Multiplayer Modal Targeting

### Fixed
- Red R1 shop infinite loop: Excluded blueR1ShopBenefit, blueAnyShopBenefit, and purpleShopHybrid from repeat to prevent recursion
- Red R1 shop balance: Now only repeats Round 1 actions (not R2/R3) - too powerful when repeating later rounds
- Multiplayer patron swap modals: Added targetPlayerId routing so each patron owner sees their own modals and makes their own decisions (uncommitted)

### Changed
- Shop text clarity: "R1" → "Round 1" for better readability
- Red R1 shop functionality: Limited to Round 1 actions only via allowedRounds parameter

### Technical Details
- Added `targetPlayerId` parameter to executeAction function (line 1119)
- Created `effectiveTargetPlayerId` variable defaulting to player.id
- Updated selectTargetPlayer to accept and pass through targetPlayerId
- Updated ~30 modal calls (showChoice, showGemSelection, showStealGems, selectTargetPlayer) to use effectiveTargetPlayerId
- Added round filtering to executeRepeatAction with allowedRounds parameter
- Multiplayer modal targeting builds successfully, ready for testing

**Commits**: c9d069b, c84b3d1, 6f19a69, 551c089
**Uncommitted**: Multiplayer modal targeting implementation (src/App.jsx)

---

## [2025-11-17] - VP Shop Fixes & UI Improvements

### Fixed
- Yellow VP shop now prompts for gem selection instead of auto-deducting gems
- VP shops limited to 1 per turn (separate tracking from regular shops)
- VP shop purchase now ends turn - regular shops blocked after VP shop
- Copy last gain bug: yellowHybrid2 now correctly copies other players' gains
- Red R2 shop multiplayer: Fixed next player detection with optional chaining

### Changed
- Action log now shows player names instead of "Player X"
- Action log filters out zero-value resources for cleaner display
- Action log visual improvements: gradient, icons, better spacing
- Repeat action exclusions simplified: only excludes redRepeatAction itself
- Shop text clarity: "a player" → "another player" (Red R3, Black R1/R2/R3)
- Phase indicators updated to show "Turn Complete" after VP shop
- Turn flow: Place workers → Regular shop (optional) → VP shop (optional) → End

### Technical Details
- Added `vpShopUsed` state tracking (resets on turn end and round advance)
- Added `USE_VP_SHOP` reducer action
- VP shop `handlePurchase` now async to support gem selection modal
- VP shop state synced to Firebase for multiplayer
- Added `formatLogMessage()` helper for better log readability
- Updated exclusion lists in 5 locations to allow more action repeats

**Commits**: 8815305, 96556a8, b90d751, ce1aaa5, df49c34, 5970f91

---

## [2025-11-16] - Playtesting Bug Fix Session (7 bugs)

### Fixed
- VP shops now start OPEN instead of closed
- Red auto VP double-counting: 4 VP → 2 VP (action once, repeat once)
- Patron swap (redHybrid1) now benefits both players in multiplayer
- Blue auto VP only applies when Blue layer is in the game
- Purple auto VP only applies when Purple layer is in the game
- Yellow R2/R3 shops now properly refund costs when cancelled
- Double next gain effect now persists across turns and rounds

### Changed
- Yellow shop functions now return true/false to indicate success/cancellation
- executeShopBenefit now checks return values and propagates failures
- Auto VP checks added: automaticVPs?.blue and automaticVPs?.purple

### Technical Details
All bugs discovered through user playtesting. Fixes tested and verified before committing.

**Commits**: a6cf1b7, 41e1bd2, 1f7b4f9, e282e6a, 185a2b5, a5ab8e9, 06ae507

---

## [2025-11-16] - Purple/Red Analysis & Layer Swap

### Added
- Black layer now default in basic mode (replacing Purple)
- Comprehensive documentation of 12 purple/red layer bugs

### Changed
- Basic mode now uses: Red, Yellow, Blue, **Black** (was Purple)
- Purple still available in advanced mode random selection
- Updated game mode description text

### Analysis Findings
**Purple Layer Bugs (12 total)**:
- 3 game-breaking: Exclusion list inconsistencies, infinite turns, TAKE_BACK_WORKER bug
- 4 critical: Auto VP amount wrong, last-to-run-out logic, extra turn stacking, double-decrement
- 4 moderate: Partial workers, extra turn with 0 workers, force placement bonus, repeat take back
- 1 unclear: Skip turn stacking (strategy or exploit?)

**Decision**: Purple too complex with multiple edge cases. Swapped Black (simpler stealing mechanics) into basic mode.

**Commit**: aedd4d0

---

## [2025-11-16] - Yellow Layer Implementation

### Added
- `lastGain: {}` property to player state initialization
- lastGain tracking in UPDATE_RESOURCES reducer (tracks OTHER players' gains, not own)

### Fixed
- Yellow auto VP description now correctly states "per complete set of all colors" instead of "per different color gem"
- lastGain tracking prevents players from copying their own gains (only tracks other players)

### Changed
- yellowHybrid2 action now works correctly with proper lastGain tracking

**Commit**: aeb0900

---

## [2025-11-16] - Multiplayer & UI Bug Fixes Session

### Fixed
- Round summary modal now shows on automatic round advance (not just manual)
- End Turn button only shows to current player in multiplayer
- Actions no longer get stuck in limbo when validations fail (pendingPlacements bug)
- Yellow shops now show correct updated definitions (synced inlineShopData with shopData.js)
- Verified shop cost modifiers properly reset each round

### Added
- VP breakdown to round summary modal (more prominent display)
- VP breakdown to end-game screen with detailed sources
- Round transition modal now shows to all players in multiplayer
- Any player can close the round modal, syncs to all clients

### Changed
- Round modal visibility in multiplayer - all players see it
- Pending placement marker set only after validations pass
- VP breakdown styling improved (text-sm, darker color)

**Commits**: c6664d6, 8c4b86f, d010714, e59cd87, 64e0645

---

## [2025-01-16] - Meta-Framework Enhancements

### Added
- TODO.md for persistent task tracking across sessions
- CHANGELOG.md with auto-generated history from git commits
- Enhanced `/checkpoint` command to update all 3 state files (implementation_state.md, TODO.md, CHANGELOG.md)
- Enhanced `/start` command to read TODO.md and CHANGELOG.md for better context restoration

### Changed
- Improved context preservation workflow: /checkpoint updates everything, /start reads everything
- Better session continuity with persistent task tracking

**Commit**: e787245

---

## [2025-11-16] - Multiplayer & Turn Flow Fixes

### Added
- Automatic room cleanup (24-hour expiration) to prevent database clutter
- `createdAt` timestamp to all Firebase rooms
- Debug logging for turn validation (multiplayer debugging)

### Fixed
- Firebase configuration blocking multiplayer sync
- Room creation timeouts causing game state divergence
- Turn validation issues preventing players from taking actions
- Firebase rules now allow room cleanup while maintaining security

### Changed
- Turn flow restructured: VP shops now independent from regular shops
- Players can buy BOTH regular shop (R1/R2/R3) AND VP shop in same turn
- Phase indicator shows available shop options more clearly

**Commits**: fd18e9c, 1f79980, 2df9e93, d97acf3

---

## [2025-11-16] - Yellow Layer Redesign

### Changed
- Complete redesign of Yellow layer actions, shops, and automatic VP
- Clarified Red swap action text for better player understanding
- Refined Red layer text for clarity

**Commits**: c27f0a4, b828bef, 18f4d9b

---

## [2025-11-16] - Worker → Patron Terminology Update

### Changed
- Updated all user-facing text from "Workers" to "Patrons"
- Updated all hardcoded shop text with new terminology
- Rebuilt app with terminology updates

**Commits**: 2d5f710, ee63be6, 3322e87, 8f8a3a7

---

## [2025-11-16] - Red Layer Redesign

### Changed
- Replaced problematic Red actions with improved versions
- Fixed VP rewards for Red layer actions

**Commits**: eb6f176

---

## [2025-11-16] - Shop Timing & Phase Indicators

### Added
- Phase indicators showing current game phase
- Active Effects Display system

### Changed
- Overhauled shop timing rules for clearer turn structure
- Updated documentation for shop timing rule changes

### Fixed
- Bug fixes from production testing

**Commits**: b0ee169, 5c500e0, d7704e7

---

## [2025-11-15] - Meta-Framework & Documentation

### Added
- `/checkpoint` system for tracking implementation state
- Comprehensive v0.5 documentation:
  - DEVELOPER_GUIDE.md
  - CODE_NAVIGATION.md
  - Updated README.md, CLAUDE.md, IMPLEMENTATION_SPEC.md

### Changed
- Archived all v0 files to `archive/` directories
- Cleaned up workspace for v0.5 development
- Replaced CLAUDE.md with v0.5 version

**Commits**: ae93f37, a8397ba, 716efab, e2104a8

---

## [2025-11-15] - UI Polish & Visual Improvements

### Fixed
- Shop cost display issues
- End Turn button display

### Changed
- Restructured player cards to two-row vertical layout
- Made player cards taller (more square proportions)
- Combined all top elements into single row
- Moved automatic VP text to center of layer header
- Made Round and Player Turn indicators same height as player cards

**Commits**: e03aa23, 5ae5266, 0fb99fc, 2612332, 3c032a3, a93fedc, 1c8d080, c3071a5, 5588360, 770daaf, dc869de

---

## Earlier History

See git log for complete history. Project migrated from single-file HTML (v0) to modular Vite/React architecture (v0.5) in November 2025.
