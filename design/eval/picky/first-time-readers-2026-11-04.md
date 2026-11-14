# First-time readers' notes, merged and checked (2026-11-04)

Source: ten readers' notes (about 620 lines) on two played games, live build v0.99.569 (e129b6b):
game A (Red, Green, Magenta, Purple; Pictures look), album-1720-a, readers a00 to a04; game B (Blue, White, Silver,
Yellow; Emoji look), album-1720-b, readers b00 to b04. Picture paths are under /mnt/project-files/picky/.
Each item was checked against the card files (src/engine/v4/content/), the wheel words (src/v4/game/panelText.js), the
screen code and design/decisions.md (newest line wins). "Readers" counts the readers who raised it (of 10).
No code was changed.

Totals: BUG 27 · WORDING 42 · RULEBOOK 8 · DESIGN 7 · NOT AN ISSUE 14

## BUG

**B1. Round III prize "+10" reads "+18"; Largesse's "up to 10" reads "18"**
- Sees: every rim in round III says "+18"; the silver center space says "Give rivals up to 18". Readers planned on 18 and got 10.
- Truth: the prize is RING_VALUE [4, 6, 10] (core.js) and Largesse is up to 10. The wheel's pixel letters (Handjet, decisions Oct 28) draw a zero with a mark inside that reads as an 8 at this size.
- Fix: src/v4/game/Wheel.jsx (rim prize run and the big space numbers): draw digits in a face whose zero has no inner mark, or turn off the slashed/dotted zero for numbers.
- Pictures: album-1720-a/album/0112-g1-table-turn-8.png, album-1720-b/album/0138-g1-table-turn-8.png, album-1720-b/album/0082-hover-emoji-round-II-space-2-5.png
- Readers: 6 (a03, a04, b00, b01, b03, b04)

**B2. Side rims print sideways: "+6" reads "9+", "+10" reads "01+"**
- Sees: the rims on the left and right of the wheel run top-to-bottom or bottom-to-top, so the prize reads as "9+" or "01+" and some letters look upside down.
- Truth: the prize is +6 / +10. rimLabel/rimRuns pick "facing top" with |angle| < 90, so a rim near 90° is set on its side.
- Fix: Wheel.jsx: keep the prize number (and ideally the side rims' words) upright, as the leader emojis already are.
- Pictures: album-1720-a/album/0055-g1-table-turn-4.png, album-1720-b/album/0064-g1-table-turn-4.png, album-1720-b/album/0136-g1-recruit-phase.png
- Readers: 7 (a00, a01, a02, a03, b01, b02, b03)

**B3. "You'd get" on Walk-In shows the face-down top card**
- Sees: Walk-In's hover says "+2 members" or "+1 member", and its WHY row names the hidden card's On Recruit ("Roadie: +1 green"). Cover copying Walk-In does the same.
- Truth: the pile is face down; previewSpace runs Walk-In on the real state, so the real top card's worth and ability leak (preview.js claims "nothing hidden leaks").
- Fix: src/engine/v4/preview.js: for a recruit from the pile, run on a copy whose pile top is hidden (or report "+1 member, unknown" and no WHY from that card).
- Pictures: album-1720-a/album/0006-hover-pictures-round-I-space-0-2.png, album-1720-a/album/0058-hover-pictures-round-II-space-0-2.png, album-1720-a/album/0066-hover-pictures-round-II-space-1-4.png
- Readers: 3 (a00, a01, a03)

**B4. Sleep In, Right Away and Last Call all say "a turn after this one"**
- Sees: Sleep In "+4 purple, a turn after this one", Right Away the same words, Last Call "3 turns after this one", which reads as 3 extra turns.
- Truth: Right Away moves your next turn up; Sleep In and Last Call send your minions after everyone else's. The preview's "early" count (earlyMoves) also counts the Goes Last reorder.
- Fix: preview.js earlyMoves counts only turns moved up; Info.jsx previewWords/changeWords say "your next minion goes last" for the Goes Last token.
- Pictures: album-1720-a/album/0022-hover-pictures-round-I-space-3-0.png, album-1720-a/album/0074-hover-pictures-round-II-space-3-0.png, album-1720-a/album/0135-hover-pictures-round-III-space-3-4.png
- Readers: 3 (a00, a02, a03)

**B5. Cloaks go by two names: "Green Cloak" on the seat, "Impressionist" in the log**
- Sees: the seat card says Red Cloak, Green Cloak, Magenta Cloak, Silver Cloak, White Cloak, Blue Cloak, Purple Cloak; popups, the log, "since your last turn" and WHY rows say Recruiter, Impressionist, Fence, Caterer, Money Changers, Bargain Bin, Pocket Watch, Guest Book. Readers hunted for a member called Recruiter.
- Truth: the cloaks are artifacts with internal names (content files: 'tuningfork' Impressionist, Pocket Watch, Guest Book...); the seat shows the cloak name, the log lines use the artifact name.
- Fix: one name everywhere the player reads: the engine log lines and popups for artifacts print the cloak name (or the seat says "Green Cloak (Impressionist)"); src/v4/game/cloak.js plus the log formatter in src/v4/format.js.
- Pictures: album-1720-a/album/0044-g1-table-turn-2.png, album-1720-a/album/0156-g1-table-turn-9.png, album-1720-b/album/0180-g1-recruit-phase.png
- Readers: 6 (a01, a02, a03, a04, b01, b04)

**B6. Ability popups beside a seat show a number that matches neither the card nor the seat**
- Sees: Fence "Whenever a rival steals from you, +2 magenta. P2: +1 magenta"; Recruiter "P4: +3 red" after 2 recruits; Money Changers "P2: +2 white" when P2's white rose 1, later stuck at +3 then jumping to +4; Bargain Bin "+8 so far" in the seat card but "+4", then "+3" in the popup.
- Truth: Fence pays +2 per steal. The popup's line is some other figure (net change after the steal, or a running total) with no "so far" and no time span.
- Fix: the seat's fired-ability popup (seat tip drawn from CultSeat.jsx reactions): print this firing's payout ("+2 magenta"), and if a total is wanted, say "so far this game" and use the same total as the seat card (RivalCard.jsx).
- Pictures: album-1720-a/album/0052-g1-recruit-phase.png, album-1720-b/album/0121-g1-table-turn-6.png, album-1720-b/album/0194-g1-sheet-choose.png
- Readers: 5 (a01, a04, b01, b02, b04)

**B7. Deprogrammers' popup reads as if its owner lost the follower**
- Sees: "Whenever you take a rival's member out of their cult, they lose 1 follower. P3: −1 follower", next to P3, who owns Deprogrammers; it was the reader who lost it.
- Truth: the rival loses the follower; the popup names the owner.
- Fix: same popup: name who it hit ("You −1 follower").
- Pictures: album-1720-a/album/0049-g1-table-turn-3.png, album-1720-a/album/0156-g1-table-turn-9.png
- Readers: 2 (a01, a04)

**B8. Popups and tips left on screen, or half-faded over seats**
- Sees: a Fence tip still open at the start of the next turn; Pocket Watch, Recruiter, Roadie cards staying over seats; a see-through ghost of a popup over "20 members"; an Anarchist hover still open after the recruit; a faded Money Changers tip over P2; "Turn skipped" faded over P2's resources.
- Truth: these should close or finish fading; text under them can't be read.
- Fix: the seat popups and hover layer (CultSeat.jsx, HoverCards.jsx): close on the next move and remove after the fade ends (no half-opacity rest state).
- Pictures: album-1720-a/album/0168-g1-table-turn-11.png, album-1720-a/album/0155-g1-recruit-phase.png, album-1720-b/album/0220-g1-sheet-choose.png
- Readers: 4 (a01, a02, a04, b04)

**B9. Exchange and Sweet Talk lose their rule on the wheel**
- Sees: in rounds II and III Exchange's space shows only "+1 white"; Sweet Talk shows only "+3 silver".
- Truth: panelText puts the rule on line 2 ("then turn up to 2 resources into 2 followers each", "then turn silver into colors"), and line 2 drops whole on tight rings; the file's own rule is that a space must be whole in line 1 where line 2 can drop.
- Fix: src/v4/game/panelText.js: Exchange and Sweet Talk get a verb line that says the rule ("Turn up to 2 into 2 followers each", "+3 silver, turn silver into colors").
- Pictures: album-1720-b/album/0138-g1-table-turn-8.png, album-1720-b/album/0073-hover-emoji-round-II-space-1-2.png, album-1720-b/album/0081-hover-emoji-round-II-space-2-4.png
- Readers: 4 (b00, b01, b02, b03)

**B10. Promote and Demote "Could swap" says "of the same cost", and offers swaps to a player with no members**
- Sees: "Could swap 5 members for 10 members of the same cost" while the reader holds 0 members; Demote "14 members for 22 members of the same cost".
- Truth: Promote is up to 2 more, Demote up to 2 less, and you must give one of your own members. HoverCards.jsx targetLines hard-codes "of the same cost", and the pair list isn't limited to the viewer's members.
- Fix: src/v4/game/HoverCards.jsx targetLines: say "costing up to 2 more/less" from the space, and count only the viewer's own members as the given side (none: "you have no member to give").
- Pictures: album-1720-a/album/0059-hover-pictures-round-II-space-0-3.png, album-1720-a/album/0060-hover-pictures-round-II-space-0-4.png, album-1720-a/album/0117-hover-pictures-round-III-space-0-4.png
- Readers: 2 (a01, a03)

**B11. Initiation's lit members miss some it can take**
- Sees: pointing at Initiation ("costing 8 or less") lights Party Crasher, Patriarch, Fan Club and Extortionist but not Agents (3), Gossip (6) or Night Owls (8).
- Truth: red.js Initiation offers every shop member costing 8 or less.
- Fix: the hover's lit set (HoverCards.jsx / preview targets) for a space not yet open: light every member the rule allows.
- Pictures: album-1720-a/album/0061-hover-pictures-round-II-space-0-5.png
- Readers: 1 (a01)

**B12. The shop hover never says what you're short of**
- Sees: pointing at a shop member shows only its name and ability; no cost, worth or what you're missing.
- Truth: the rulebook promises "Point at a card to see what you're short of", and MemberCard in Info.jsx has that line, but the shop card's hover doesn't use it.
- Fix: the shop card hover (ShopCards.jsx / HoverCards.jsx) shows MemberCard's short-of line; or cut the rulebook line.
- Pictures: album-1720-a/album/0032-hover-pictures-round-I-shop-1.png, album-1720-b/album/0093-hover-emoji-round-II-shop-8.png, album-1720-b/album/0167-hover-emoji-round-III-shop-16.png
- Readers: 5 (a00, a02, b00, b02, b03)

**B13. Pay sheet uses the follower mark where the card uses the member mark**
- Sees: Gossip's shop card says "1" with the member bust; its pay sheet says "1" with the follower mark (sometimes a grey/black mix).
- Truth: cards show the member bust and count (Cory, Oct 29, decisions line 1422).
- Fix: src/v4/game/PayPicker.jsx: the worth badge uses MemberGlyph like the shop card.
- Pictures: album-1720-a/album/0110-g1-sheet-pay.png, album-1720-a/album/0043-g1-sheet-pay.png, album-1720-b/album/0135-g1-sheet-pay.png
- Readers: 5 (a01, a04, b01, b03, b04)

**B14. Two seats show the Goes Last token at once**
- Sees: after the reader takes Sleep In, their seat shows the moon token, and P2's seat still shows it holding 3 minions with "goes last".
- Truth: there is one token; taking it sends the minions on it home (rulebook, Turn order).
- Fix: CultSeat.jsx token pill: draw it only for the token's current holder (check the state field it reads).
- Pictures: album-1720-a/album/0109-g1-recruit-phase.png, album-1720-a/album/0110-g1-sheet-pay.png
- Readers: 1 (a03)

**B15. Round III scoring card hides your own row**
- Sees: "Round III scored" lists the rivals; the reader's row is under "More below", and P4's last line is cut ("+10 end-").
- Truth: your own result is the one you need on that card.
- Fix: src/v4/game/RoundEnd.jsx: always show your row (pin it, or make the card tall enough at 1270x700).
- Pictures: album-1720-a/album/0175-g1-round-card.png, album-1720-b/album/0221-g1-round-card.png
- Readers: 2 (a04, b04)

**B16. The gain chip covers the words beside it on your seat**
- Sees: the "+5" / "+6" chip sits on "your last in a row" or "your turn, 2 left" and hides its last word; P4's "+2" sat on its "10" ("+2 0").
- Fix: src/v4/game/seat.css: give the chip its own room in the head row.
- Pictures: album-1720-a/album/0108-g1-table-turn-7.png, album-1720-a/album/0173-g1-table-turn-12.png, album-1720-b/album/0110-g1-table-turn-5.png
- Readers: 4 (a03, a04, b02, b04)

**B17. The turn line wraps, gets cut, or sits under a popup**
- Sees: "Your next turn, now (Right Away): place a minion" and "Your turn — recruit a member or followers" wrap to two lines; the line is cut behind the pay sheet ("Round I of 3 · Place · Rec..."); popups cover it.
- Fix: the header in GameScreen.jsx / layout.css: one line at 1270x700 (shorter words), above sheets and seat popups.
- Pictures: album-1720-a/album/0106-g1-recruit-phase.png, album-1720-a/album/0171-g1-recruit-phase.png, album-1720-b/album/0121-g1-table-turn-6.png
- Readers: 5 (a01, a02, a04, b01, b02)

**B18. Leaders' portraits turn into padlock shapes**
- Sees: in some frames every seat's hooded leader looks like a padlock (Emoji look), and in game A all seats get a padlock while pointing at Lie Low, the reader's too.
- Truth: nobody is locked; nothing on screen says what the lock shape means. In the Emoji look the leader's hood frame itself reads as a padlock.
- Fix: src/v4/art leader sprites (the frame that looks like a lock) and the Lie Low hover marking in HoverCards.jsx (mark nothing, or only the taker as "safe").
- Pictures: album-1720-b/album/0073-hover-emoji-round-II-space-1-2.png, album-1720-b/album/0098-hover-emoji-round-II-shop-38.png, album-1720-a/album/0070-hover-pictures-round-II-space-2-2.png
- Readers: 4 (a01, b00, b01, b02)

**B19. Lie Low sheet: a number spills past the sheet's edge**
- Sees: P3's purple "5" cell runs past the right edge of the Lie Low sheet.
- Fix: the steal sheet's grid (SplitPicker.jsx / its CSS): fit the last column.
- Pictures: album-1720-a/album/0051-g1-sheet-choose.png
- Readers: 1 (a01)

**B20. Shop card text and cost overlap, stray marks on cards**
- Sees: with "details" on, Doormen's text runs over its cost ("3 blue 5" cut); a faint "P" and number over Night Watch's cost row.
- Fix: src/v4/game/shop.css: clamp the details text above the cost row; find the stray label over Night Watch (likely a flight leftover in flight.js).
- Pictures: album-1720-b/album/0193-g1-sheet-choose.png, album-1720-a/album/0162-g1-recruit-phase.png
- Readers: 2 (a04, b04)

**B21. The round medallion covers the center spaces' words**
- Sees: the "II" disc in the middle sits over "Give rivals up to 10 … +1 each".
- Fix: Wheel.jsx: keep the center spaces' words clear of the medallion (shorter lines or smaller disc).
- Pictures: album-1720-b/album/0136-g1-recruit-phase.png
- Readers: 1 (b03)

**B22. Pointing at a space lights other spaces with square boxes**
- Sees: hovering Cover lights open spaces with yellow rectangles inside the curved wedges; a stray rectangle around the taken Promote space.
- Fix: the lit-space outline in Wheel.jsx / its CSS: follow the wedge's shape.
- Pictures: album-1720-a/album/0014-hover-pictures-round-I-space-1-4.png, album-1720-a/album/0148-hover-pictures-round-III-shop-16.png
- Readers: 2 (a00, a04)

**B23. Party Gifts' "+1" chip covers the rival's silver count**
- Sees: the chip on each rival button sits over that rival's silver total.
- Fix: src/v4/game/giftcard.css: move the chip off the count.
- Pictures: album-1720-b/album/0189-g1-sheet-choose.png, album-1720-b/album/0190-g1-sheet-choose.png
- Readers: 1 (b04)

**B24. Help Yourself's "You'd get" says a smaller steal than the rule**
- Sees: round III Help Yourself "+1 green; steal 4 in colors you pick" where the rule says steal 5; Echo copying round II Help Yourself "steal 3" where the rule says 4.
- Truth: the preview splits off the part every branch shares (here 1 green) and prints the rest as "steal N", so the total reads one short and the green looks like a gift.
- Fix: Info.jsx youdWords: print the whole steal ("steal 5 resources, at least 1 green") or never split a steal.
- Pictures: album-1720-a/album/0125-hover-pictures-round-III-space-2-0.png, album-1720-a/album/0063-hover-pictures-round-II-space-1-1.png, album-1720-a/album/0081-hover-pictures-round-II-plaque-echo.png
- Readers: 3 (a01, a02, a03)

**B25. Potluck's "You'd get" says you steal and pick**
- Sees: "steal 3 in colors you pick"; the card says each rival gives you 1 resource of their choice.
- Truth: silver.js favorAll: each rival chooses what to give.
- Fix: Info.jsx youdWords: for a rival's choice say "+3 resources, their pick", not "steal … you pick".
- Pictures: album-1720-b/album/0080-hover-emoji-round-II-space-2-3.png, album-1720-b/album/0154-hover-emoji-round-III-space-2-3.png
- Readers: 2 (b01, b03)

**B26. Farewell and Estate Sale previews disagree for the same member**
- Sees: Farewell "up to +2 followers, −1 member" (no follower loss) while Estate Sale "−1 member, −1 follower"; Farewell's top (+5) doesn't match Estate Sale's (+7) for the same member.
- Truth: casting out a member costs its followers either way; Farewell then gains followers equal to its cost.
- Fix: Info.jsx changeWords: show the cast-out member's followers on both (Farewell's line is netting the followers it gains against the ones it loses, so it hides the loss).
- Pictures: album-1720-b/album/0074-hover-emoji-round-II-space-1-3.png, album-1720-b/album/0148-hover-emoji-round-III-space-1-3.png, album-1720-b/album/0149-hover-emoji-round-III-space-1-4.png
- Readers: 2 (b01, b03)

**B27. Small cut-offs**
- Sees: the results log's first line half under "Game over"; "COULD CHOOSE" / "WOULD RECRUIT" labels wrapping off the hover's left edge; "SPARE MINIONS" wrapping in round III.
- Fix: Results.jsx log top padding; HoverCards.jsx label column width; SinceStrip.jsx pool caption width.
- Pictures: album-1720-a/album/0177-g1-results-scrolled.png, album-1720-a/album/0046-hover-pictures-round-I-shop-11.png, album-1720-b/album/0220-g1-sheet-choose.png
- Readers: 4 (a01, a04, b01, b04)

## WORDING

**W1. A resource at 0 loses its color**
- Sees: on seats, a color you have none of shows "0 ○", a hollow ring with no color, so four zeros look the same; the pay sheet's KEEPING row shows dashed colorless circles, and its slot count changes (four slots, then three). White resources are also a pale ring, so white looks like "none".
- Truth: decisions (Oct 21, mockup A) dim zeros; the color itself was never meant to go.
- Fix: src/v4/game/CultSeat.jsx / seat.css and PayPicker.jsx: keep each slot's dot in its color, dimmed at 0; same four slots in a fixed order on the pay sheet.
- Pictures: album-1720-a/album/0003-g1-table-turn-1.png, album-1720-a/album/0162-g1-recruit-phase.png, album-1720-a/album/0110-g1-sheet-pay.png
- Readers: 10 (all)

**W2. Space names never appear on the wheel, but every log line uses them**
- Sees: the log, "since your last turn", toasts and hovers say "Help Yourself", "Heist", "Potluck", "Out of Style"; the wheel shows only what each space does, so readers can't find the space a rival took.
- Truth: the wheel shows effects on purpose (panelText.js: the name opens with the hover). The strip has panelWords for the board's own words.
- Fix: display-only either way: log and strip lines add the board's words ("Heist (Steal 3 followers)"), or the taken space flashes when its line is pointed at (SinceStrip.jsx, trail.js). Printing names on the wheel is the bigger call (see D-list if wanted).
- Pictures: album-1720-a/album/0042-g1-recruit-phase.png, album-1720-b/album/0045-g1-recruit-phase.png, album-1720-b/album/0179-g1-sheet-choose.png
- Readers: 9 (a00, a01, a02, a03, a04, b01, b02, b03, b04)

**W3. The dark circle on every shop card is unexplained**
- Sees: a number in a black circle top-left (3, 5, 6, 8, 14) with no label; readers took it for an id, a level or a score.
- Truth: it's the card's total price (decisions Oct 21 and Oct 29).
- Fix: ShopCards.jsx: a title/aria "Costs 5 in all", and the rulebook's Shop section names it (see R4).
- Pictures: album-1720-a/album/0003-g1-table-turn-1.png, album-1720-a/album/0044-g1-table-turn-2.png, album-1720-b/album/0045-g1-recruit-phase.png
- Readers: 9 (a00, a01, a02, a03, a04, b00, b01, b02, b03)

**W4. "DECK" on the shop, "pile" in the rules and hovers**
- Sees: the shop label says DECK and Walk-In's face "Recruit the top of the deck"; the rulebook and Walk-In's hover say pile.
- Fix: one word: ShopCards.jsx label and panelText.js hire ("top of the pile").
- Pictures: album-1720-a/album/0003-g1-table-turn-1.png, album-1720-a/album/0115-hover-pictures-round-III-space-0-2.png, album-1720-b/album/0089-hover-emoji-round-II-plaque-market.png
- Readers: 5 (a00, a01, a03, b00, b02)

**W5. "place a minion on a glowing space"**
- Sees: the prompt says glowing; the rulebook says pale spaces with gold edges; nothing obviously glows.
- Fix: GameScreen.jsx prompt "on an open space" (or the rulebook says "lit"); one description.
- Pictures: album-1720-a/album/0003-g1-table-turn-1.png, album-1720-a/album/0141-hover-pictures-round-III-shop-17.png, album-1720-b/album/0003-g1-table-turn-1.png
- Readers: 4 (a00, a01, a04, b00)

**W6. Rivals gain in "You'd get" with no reason given**
- Sees: Out of Style, Bury, Farewell, Estate Sale: "rivals +1 blue in all"; Sleep In, Hold Up, Overtime: "rivals +1 purple in all"; nothing in the space gives rivals anything.
- Truth: a rival's cloak pays (Blue Cloak on members going to the bottom; Purple Cloak on skips). The WHY row lists only the viewer's own reasons.
- Fix: Info.jsx / preview reasons: add "WHY P4's Blue Cloak: +1 blue" for rivals' gains.
- Pictures: album-1720-b/album/0066-hover-emoji-round-II-space-0-1.png, album-1720-b/album/0140-hover-emoji-round-III-space-0-1.png, album-1720-a/album/0131-hover-pictures-round-III-space-3-0.png
- Readers: 5 (a03, b00, b01, b02, b03)

**W7. A space's lone "+1 blue." line on hovers**
- Sees: hovers end with a line holding only "+2 red." (with a period); on Out of Style it sits under "+1 blue per member sent." and reads as a duplicate.
- Truth: it's the space's flat gain of its color.
- Fix: Info.jsx RuleText: join the flat gain to the rule ("…per member sent, and +1 blue") or label it ("Also +1 blue"), no trailing period.
- Pictures: album-1720-a/album/0004-hover-pictures-round-I-space-0-0.png, album-1720-b/album/0089-hover-emoji-round-II-plaque-market.png, album-1720-b/album/0140-hover-emoji-round-III-space-0-1.png
- Readers: 6 (a00, a01, b00, b01, b02, b03)

**W8. Unlabeled leader faces on the rims**
- Sees: small player faces sit on each rim, stack, and move between turns; readers guessed minions or cloak wearers.
- Truth: they mark who leads that contest now (Wheel.jsx, title "X leads").
- Fix: the rulebook line (R5) plus a word: "· leads:" before the faces on the rim, or the standings card naming them.
- Pictures: album-1720-a/album/0003-g1-table-turn-1.png, album-1720-a/album/0072-hover-pictures-round-II-space-2-4.png, album-1720-b/album/0089-hover-emoji-round-II-plaque-market.png
- Readers: 6 (a00, a02, a03, b00, b01, b02)

**W9. Seat card headings are jargon and some members are filed oddly**
- Sees: "USES", "EVERY ROUND / Whenever", "STANDING AND SCORING / Always", "DONE OR PLAIN"; empty headings with nothing under them; Mob (a Round End card) under "Always"; Regular (a Whenever) under "Every round"; "MEMBERS 0" plus "No members yet"; "RESOURCES 1" plus "1●"; Volunteer as a pill, not a card.
- Fix: src/v4/game/RivalCard.jsx COLS: plain headings (e.g. "Use on your turn", "Triggers", "Scoring", "On Recruit / no ability"), hide empty ones, file by the card's own timing word.
- Pictures: album-1720-a/album/0093-hover-pictures-round-II-seat-2.png, album-1720-a/album/0150-hover-pictures-round-III-seat-1.png, album-1720-b/album/0100-hover-emoji-round-II-seat-0.png
- Readers: 5 (a02, a04, b02, b03, b04)

**W10. "Game End, if it ended now: nothing"**
- Sees: next to a seat with 2 to 7 followers; reads as scoring zero.
- Truth: it means no game-end bonus.
- Fix: RivalCard.jsx line 68: "no game-end bonus".
- Pictures: album-1720-a/album/0038-hover-pictures-round-I-seat-0.png, album-1720-a/album/0091-hover-pictures-round-II-seat-0.png, album-1720-b/album/0038-hover-emoji-round-I-seat-0.png
- Readers: 3 (a01, a02, b00)

**W11. Seat card member list doesn't show each card's count**
- Sees: "MEMBERS 8" with three cards listed; "13 members" with five to seven cards; icons that don't add up to the count.
- Truth: the counts are right (Line Cutters 3 + Deprogrammers 4 + Stunt Double 1 = 8); the cards in the panel don't carry their member badge.
- Fix: RivalCard.jsx: each member in the list shows its count badge like the shop card.
- Pictures: album-1720-a/album/0093-hover-pictures-round-II-seat-2.png, album-1720-a/album/0151-hover-pictures-round-III-seat-2.png, album-1720-b/album/0175-hover-emoji-round-III-seat-0.png
- Readers: 4 (a02, a04, b02, b03)

**W12. "Since your last turn" doesn't say what you lost**
- Sees: the reader's Line Cutters was taken and they dropped 5 to 1 followers, but the list says only "P3 Reprise", "P3 Tryout"; members vanish, whole shop rows change, scores drop 14 to 13 with no line.
- Fix: SinceStrip.jsx / trail.js: a line for every change to your own seat (member taken, followers lost) ahead of the rest; "P3 took your Line Cutters".
- Pictures: album-1720-a/album/0049-g1-table-turn-3.png, album-1720-a/album/0163-g1-table-turn-10.png, album-1720-b/album/0124-g1-table-turn-7.png
- Readers: 5 (a01, a02, a04, b01, b02)

**W13. Strip and log lines that don't say who got what**
- Sees: "P4 Walk-In: you +1 red · +1 red"; "P3 Party Gifts: you +3 silver (Caterer) · +6 followers"; "P3 Walk-In: you +1 red · +6 · +1 magenta +1 purple"; "P2 Heist: +1 magenta +3 followers" (from whom?); Potluck "P2 took 1 of your blue" after the reader chose to give it. A round I move shows after round II starts with no mark (Peek "+2 blue" against a "+4" face; Heist listed while the wheel shows it free).
- Fix: trail.js / format.js: one owner per part ("you +1 red (Red Cloak); P4 +1 red"), name the loser of a steal, "gave" for gifts, and a "Round I" divider in the strip.
- Pictures: album-1720-a/album/0044-g1-table-turn-2.png, album-1720-a/album/0103-g1-table-turn-6.png, album-1720-b/album/0089-hover-emoji-round-II-plaque-market.png
- Readers: 6 (a01, a02, a03, b01, b02, b04)

**W14. "You took …" box hides what you got**
- Sees: "You took Lie Low +1 magenta +1 red / +2 more"; "+3 more", "+5 more" with no way to see them; gains from later cards filed under the space (Window Shopper under Party Gifts, Right Away under Sleep In and Greatest Hits); Tryout showing only "+2 red".
- Fix: the toast component in GameScreen.jsx: list every line (or open on click), and group by source.
- Pictures: album-1720-a/album/0052-g1-recruit-phase.png, album-1720-a/album/0110-g1-sheet-pay.png, album-1720-b/album/0194-g1-sheet-choose.png
- Readers: 5 (a01, a03, a04, b02, b03)

**W15. Turn-run words: "2 turns left in a row" and "your turn, 2 left"**
- Sees: two wordings for one count; readers read "2 left" as minions; "last one in a row" stays up during the recruit step.
- Fix: seats.js and GameScreen.jsx say-run: one phrase ("2 turns in a row"), hidden once the minion is placed.
- Pictures: album-1720-a/album/0106-g1-recruit-phase.png, album-1720-a/album/0108-g1-table-turn-7.png, album-1720-b/album/0047-g1-table-turn-2.png
- Readers: 5 (a02, a03, a04, b01, b02)

**W16. Unlabeled "+N" chip beside the follower count**
- Sees: "+3", "+1", "+10", "+26" chips beside seat scores that come and go.
- Fix: CultSeat.jsx: a title and plain hint ("+3 followers since your last turn").
- Pictures: album-1720-a/album/0044-g1-table-turn-2.png, album-1720-a/album/0112-g1-table-turn-8.png, album-1720-b/album/0183-g1-table-turn-9.png
- Readers: 5 (a01, a02, a03, b01, b04)

**W17. Round card words: "picks first", "bought", "gained", "Prizes", "inner ring", "spaces with I, II and III numbers"**
- Sees: "P3 picks first: they have Line Cutters, a member who always picks first" (the card says "go first"); "+1 bought · +10 gained · −4 lost"; "Prizes"; "the inner ring opens" (rulebook: center); "spaces with I, II and III numbers pay more" while only Build Up prints them.
- Fix: src/v4/game/RoundEnd.jsx lines 63 and 152: "goes first"; "recruited followers / won / lost"; "the center opens"; "spaces that grow by round pay more"; "—" for 0 as "0".
- Pictures: album-1720-a/album/0054-g1-round-card.png, album-1720-a/album/0111-g1-round-card.png, album-1720-b/album/0137-g1-round-card.png
- Readers: 5 (a01, a03, b01, b03, b04)

**W18. Only some spaces print their round-by-round amounts, and Build Up says its number twice**
- Sees: Build Up "+3 green / I +3 · II +4 · III +5"; Gather, Stash, Savings, Peek, Hold Up, Sleep In, Right Away grow too but print one number; readers decided they never grow.
- Fix: panelText.js: one rule for all growing spaces (either all show the run, or none and the hover shows it), and Build Up drops the repeat.
- Pictures: album-1720-a/album/0003-g1-table-turn-1.png, album-1720-a/album/0112-g1-table-turn-8.png, album-1720-b/album/0004-hover-emoji-round-I-space-0-0.png
- Readers: 5 (a00, a01, a03, a04, b00)

**W19. Taken spaces lose words and are hard to read**
- Sees: a taken space keeps only "Steal 4" (resources? followers?) or "+2"; "Copy an action" loses "with no minion on it"; taken spaces are dark like the locked ones; dim text on dark brown; minions sit over the words.
- Fix: Wheel.jsx taken-space style: keep the space's words at readable contrast, put the minion beside them, and say "Steal 4 resources".
- Pictures: album-1720-a/album/0073-hover-pictures-round-II-space-2-5.png, album-1720-a/album/0163-g1-table-turn-10.png, album-1720-b/album/0204-hover-emoji-round-III-shop-17.png
- Readers: 6 (a00, a01, a02, a04, b02, b04)

**W20. Walk-In: "+1 red to all"**
- Sees: the face says "+1 red to all" (everyone, me too?); the hover says "Each rival +1 red. +1 red."
- Fix: panelText.js hire: "+1 red, +1 to each rival".
- Pictures: album-1720-a/album/0058-hover-pictures-round-II-space-0-2.png, album-1720-a/album/0115-hover-pictures-round-III-space-0-2.png, album-1720-a/album/0166-g1-recruit-phase.png
- Readers: 4 (a00, a01, a03, a04)

**W21. Party Gifts and Largesse: "+2 followers each"**
- Sees: "each" reads as each rival; the sheet says per silver you give; "from the bank" where the rulebook says supply.
- Truth: per silver given (silver.js). Cory (Nov 1) found "+2 per silver" misleading as "per silver you hold".
- Fix: panelText.js: "+2 @f per silver given"; one word for the bank/supply on cards and rulebook.
- Pictures: album-1720-b/album/0079-hover-emoji-round-II-space-2-2.png, album-1720-b/album/0153-hover-emoji-round-III-space-2-2.png, album-1720-b/album/0188-g1-sheet-choose.png
- Readers: 5 (b00, b01, b02, b03, b04)

**W22. Polish and Harvest sheets: picks already made, header says "+1 of which color?"**
- Sees: header "Polish: +1 of which color?" while the sheet says "+4 in colors you choose"; GETTING is filled before any click and never changes; each click already shows on the seat; Take turns grey and its blue dot turns silver-grey; the 2 silver it cost isn't on the sheet.
- Truth: the engine asks one color at a time (polishPick); the filled row is the suggestion for the rest.
- Fix: the color sheet (SpendPicker.jsx / boardPick.js): header "Pick 4 colors (1 of 4)", GETTING fills with the picks made, Take says "Take the rest as shown", show "−2 silver".
- Pictures: album-1720-b/album/0042-g1-sheet-choose.png, album-1720-b/album/0104-g1-sheet-choose.png, album-1720-b/album/0208-g1-sheet-choose.png
- Readers: 4 (b00, b01, b02, b04)

**W23. Colors that look alike: silver, blue, white, grey; magenta and purple**
- Sees: silver dots and card headers are a blue-grey close to blue; white and silver dots both pale; grey (no color) close to silver; faded I/II/III rows turn blue into silver; magenta and purple dots similar.
- Fix: src/v4/lamp.css color tokens: push silver toward metal grey with a highlight, white to a warm cream with an outline, grey members to a hatched or neutral header.
- Pictures: album-1720-b/album/0089-hover-emoji-round-II-plaque-market.png, album-1720-b/album/0135-g1-sheet-pay.png, album-1720-a/album/0036-hover-pictures-round-I-shop-0.png
- Readers: 6 (a01, b00, b01, b02, b03, b04)

**W24. Colored member marks in card text**
- Sees: Mob "per rival with fewer [red person]", Critic "[blue person]", Heiresses, Old Money's hollow outline person; readers read them as "members", not "red/white members".
- Fix: Rich.jsx / MemberGlyph: print the color word with the mark ("red members"), as the rulebook says a dot is never a substitute for the word.
- Pictures: album-1720-a/album/0105-hover-pictures-round-II-shop-4.png, album-1720-b/album/0048-hover-emoji-round-I-shop-9.png, album-1720-b/album/0197-hover-emoji-round-III-shop-18.png
- Readers: 5 (a02, a04, b00, b02, b04)

**W25. "You'd get" lines that are hard to read**
- Sees: "+5 members (Stunt Double, Deprogrammers)" read as five cards; Shake Down "up to +3 magenta, or +3 magenta, …, their choice" (an option twice); Cover's run-on "…4 turns after this one, or +2 …, +3 followers for 6 your pick"; Melting Pot "+3 yellow, swaps are your pick"; Makeover "+5 yellow, −1 blue"; Exchange "up to +4 followers, −1 white" (net of the +1 white); WHY rows naming members that only one branch brings (Stunt Double, Roadie).
- Fix: Info.jsx youdWords/changeWords: "+1 member worth 5"; drop repeated branches; one branch per line; "in colors you choose" for rearranges; WHY only for parts every branch shares.
- Pictures: album-1720-a/album/0072-hover-pictures-round-II-space-2-4.png, album-1720-a/album/0123-hover-pictures-round-III-space-1-4.png, album-1720-b/album/0087-hover-emoji-round-II-space-3-4.png
- Readers: 5 (a02, a03, b01, b03, b00)

**W26. Copy spaces with nothing to copy, and "nobody yet"**
- Sees: Reprise "You'd get +1 green" when you have no minion on the wheel; Echo not saying what it copies; "COULD USE nobody yet", "COULD COPY nobody yet".
- Fix: HoverCards.jsx: "Nothing to copy yet: only the +1 green"; "No shop member has an On Recruit".
- Pictures: album-1720-a/album/0012-hover-pictures-round-I-space-1-2.png, album-1720-a/album/0121-hover-pictures-round-III-space-1-2.png, album-1720-a/album/0113-hover-pictures-round-III-space-0-0.png
- Readers: 4 (a00, a01, a03, b03)

**W27. Hold Up and Leaders' Tax don't show the number that decides them**
- Sees: Hold Up never says who is next; Leaders' Tax shows "+1 yellow" without what each color would pay; its sheet's color dots are unlabeled; "its spaces" is vague.
- Fix: HoverCards.jsx / YoudGet: "Next: P3"; Leaders' Tax lists "red +2, blue +1…"; color sheets label each dot with its name.
- Pictures: album-1720-a/album/0023-hover-pictures-round-I-space-3-1.png, album-1720-b/album/0092-hover-emoji-round-II-plaque-yellow.png, album-1720-b/album/0199-g1-sheet-choose.png
- Readers: 4 (a00, a02, a03, b04)

**W28. Fuel spaces' "You'd get" leaves out the follower part**
- Sees: Gather, Stash, Allowance, Splurge show only "+3 red" or "+1 white", not the followers if you recruit.
- Fix: YoudGet: add "+2 followers if you recruit a member".
- Pictures: album-1720-a/album/0080-hover-pictures-round-II-plaque-red.png, album-1720-b/album/0010-hover-emoji-round-I-space-1-0.png, album-1720-b/album/0146-hover-emoji-round-III-space-1-1.png
- Readers: 4 (a02, b00, b02, b03)

**W29. Your cloak isn't named on your seat, and your turn glow hides its outline**
- Sees: readers learn their cloak only from a WHY row ("Silver Cloak: +1"); their own seat is outlined gold, not the cloak's color.
- Truth: the rulebook says the card is outlined in the cloak's color; on your turn the gold turn glow replaces it.
- Fix: CultSeat.jsx: keep the cloak color as the outline and show the turn another way, and name the cloak on the seat ("Silver Cloak").
- Pictures: album-1720-b/album/0016-hover-emoji-round-I-space-2-0.png, album-1720-b/album/0175-hover-emoji-round-III-seat-0.png, album-1720-a/album/0003-g1-table-turn-1.png
- Readers: 4 (a00, b00, b01, b03)

**W30. Shop header: "1 member affordable", then "6 members"; toggles unexplained**
- Sees: the count under SHOP switches between affordable and total; "details", "cost / color" have no hint; "+28 round II" tag beside the deck.
- Fix: ShopCards.jsx: always "N of 7 affordable"; titles on each toggle ("Sort by cost / by color", "Show every card's ability"); "+28 shuffled in for round II".
- Pictures: album-1720-a/album/0042-g1-recruit-phase.png, album-1720-a/album/0106-g1-recruit-phase.png, album-1720-b/album/0064-g1-table-turn-4.png
- Readers: 5 (a01, a02, a04, b00, b01)

**W31. Pay sheet doesn't say you can change the payment**
- Fix: PayPicker.jsx: one line "Tap a resource to pay with it instead".
- Pictures: album-1720-a/album/0096-g1-sheet-pay.png, album-1720-a/album/0154-g1-sheet-pay.png, album-1720-b/album/0046-g1-sheet-pay.png
- Readers: 3 (a02, a04, b01)

**W32. "Buy followers" beside "recruit followers"**
- Sees: White Cloak "Whenever any player buys followers", Regular "Whenever you buy followers", round card "bought", final bars "Bought 25", summary "by recruiting followers (+25)".
- Truth: Cory (Oct 21) asked for recruit over buy everywhere; his Nov 3 bars call the part "followers bought".
- Fix: card text for White Cloak and Regular (Cory's words: ask) and RoundEnd.jsx/Sources.jsx labels: one word.
- Pictures: album-1720-b/album/0039-hover-emoji-round-I-seat-1.png, album-1720-b/album/0175-hover-emoji-round-III-seat-0.png, album-1720-b/album/0222-g1-results.png
- Readers: 4 (b00, b01, b03, b04)

**W33. Final score: "Members 12" beside "11 members", and unlabeled bar parts**
- Sees: each bar's Members part is one more than the count under the name; parts carry only a number ("5", "10"), "Play −4" floats outside.
- Truth: the bar counts the leader's 1 (Cory Nov 3); already on the picky running list as open.
- Fix: Sources.jsx: "Members 12 (11 + you)"; label every part or show the label on the widest ones; rename "Play" to "won or lost in play".
- Pictures: album-1720-a/album/0176-g1-results.png, album-1720-b/album/0222-g1-results.png
- Readers: 2 (a04, b04)

**W34. Lie Low: "Take 1" on the sheet, "Steal 1" on the wheel; the shield is unlabeled**
- Fix: boardPick.js / the steal sheet title "Lie Low: steal 1"; CultSeat.jsx shield title "Safe from steals this round".
- Pictures: album-1720-a/album/0051-g1-sheet-choose.png, album-1720-a/album/0160-g1-sheet-choose.png
- Readers: 2 (a01, a04)

**W35. Card hovers leave out limits the rulebook states**
- Sees: Lie Low doesn't say trades still work; Heist doesn't say only recruited or won followers can go; Poach doesn't say it doesn't use your recruit; Overtime doesn't say when the extra minion is placed.
- Fix: the hover's rule notes (Info.jsx glossary terms) add the one-line limit under the rule; card text unchanged.
- Pictures: album-1720-a/album/0018-hover-pictures-round-I-space-2-2.png, album-1720-a/album/0019-hover-pictures-round-I-space-2-3.png, album-1720-a/album/0134-hover-pictures-round-III-space-3-3.png
- Readers: 3 (a00, a02, a03)

**W36. Low-contrast text**
- Sees: grey on dark brown on the middle and center rings before they open; the round card's silver row label; the log's grey on wood; Drifters' white name on yellow; faded shop names when "affordable" is on.
- Fix: lamp.css / card-header.css: raise contrast on dark rings and pale headers; fade the card picture, not its name.
- Pictures: album-1720-a/album/0003-g1-table-turn-1.png, album-1720-b/album/0137-g1-round-card.png, album-1720-b/album/0138-g1-table-turn-8.png
- Readers: 5 (a00, b00, b01, b03, b04)

**W37. The header's ring hint comes and goes**
- Sees: "The dark inner rings open in rounds II and III." shows for a few turns, then disappears; "The middle ring opened this round." fades near invisible.
- Fix: GameScreen.jsx: keep it for the whole round or drop it; never half-faded.
- Pictures: album-1720-a/album/0007-hover-pictures-round-I-space-0-3.png, album-1720-a/album/0060-hover-pictures-round-II-space-0-4.png, album-1720-a/album/0117-hover-pictures-round-III-space-0-4.png
- Readers: 4 (a00, a01, a03, b00)

**W38. The contest card says the prize three ways and the tie rule twice**
- Sees: "whoever has the most silver resources gets 4 followers (+4 / +6 / +10 in rounds I / II / III; ties pay half each, rounded up)… Tied leaders all score."; "A bonus every round, not the final score"; standings in a different order from the seats.
- Fix: ContestStandings in Info.jsx: "Round I: +4 followers to the leader (II +6, III +10). Ties split, rounded up."; seats' order.
- Pictures: album-1720-b/album/0030-hover-emoji-round-I-plaque-silver.png, album-1720-b/album/0091-hover-emoji-round-II-plaque-silver.png
- Readers: 2 (b00, b02)

**W39. Seats list in turn order, with no P1 and no word why**
- Sees: seats reorder between rounds (P3, You, P2, P4); there is no P1 (You is P1).
- Fix: the seat column: a small "turn order" caption; "You (P1)".
- Pictures: album-1720-a/album/0055-g1-table-turn-4.png, album-1720-b/album/0045-g1-recruit-phase.png, album-1720-b/album/0089-hover-emoji-round-II-plaque-market.png
- Readers: 3 (a01, b01, b02)

**W40. Prompts that don't say what a click is for**
- Sees: "Window Shopper: pick a member" (for what?); "Potluck: give P2 1 resource" with no "P2 took Potluck"; "Your turn — Spoilsport: choose one" at round end with Recruit underlined; "...or use Creditor first" with no Creditor marked on the seat; "You →" arrow; "Undo recruit" while the prompt says place a minion.
- Fix: promptFor in src/v4/format.js and the header: name the cause and purpose ("Window Shopper: pick a member to send to the bottom (1 of 2)"; "P2 took Potluck: give them 1 resource").
- Pictures: album-1720-b/album/0182-g1-sheet-choose.png, album-1720-b/album/0193-g1-sheet-choose.png, album-1720-b/album/0220-g1-sheet-choose.png
- Readers: 2 (a04, b04)

**W41. Setup page: unexplained switches and marks**
- Sees: "Swap card", "Contests: As printed / By color", "Random 4", "Very Hard", a "2.0" badge on each color, colored bars under avatars that match no table color, the Person seat shown with a robot face.
- Fix: src/v4/screens (setup): a one-line hint under each switch; drop or explain the "2.0" badge; label the human seat "You".
- Pictures: album-1720-a/album/0002-g1-setup.png, album-1720-b/album/0002-g1-setup.png
- Readers: 2 (a00, b00)

**W42. Smaller wording slips**
- Sees: "Round II of 3" mixes numerals; "2 earlier… open the log" (ellipsis reads as cut-off text); home tagline "Draft the wheel" ("draft" is never used); Red's setup line "swaps with rivals" (rulebook: shop and rival members); Sample's sheet and a few cards say "Passive" for a one-time join (Old Maid) while Martyrs drops the label on its pay sheet; follower tiles 1/5/10 look like blank cards and aren't labeled "recruit followers"; inactive I/II/III rows faded so far their dots change color.
- Fix: one-line fixes in GameScreen.jsx ("Round II of III"), SinceStrip.jsx line 203 ("2 more: open the log"), Screens.jsx tagline, setup color blurb, memberTiming.js labels, ShopCards.jsx rate tiles.
- Pictures: album-1720-a/album/0072-hover-pictures-round-II-space-2-4.png, album-1720-a/album/0055-g1-table-turn-4.png, album-1720-a/album/0001-g1-home.png
- Readers: 6 (a00, a01, a02, a04, b00, b01)

## RULEBOOK

**R1. Setup page section is stale**
- Rulebook: "The setup page picks the member deck: about 15 members per color, or the trimmed 10" and "(or, if the setup page says so, round III members wait for round III)".
- Truth: Cory cut both on Nov 4 10:26am (decisions line 1787): 10 per color only, round III members always join with round II's. The page now has Contests (As printed / By color), Swap card, Members look, bot levels (Easy to Very Hard) and "Random N", none in the rulebook.
- Fix: design/rulebook.md Shop and Setup: drop the two lines; add one line each for Contests, Swap card and bot levels.
- Pictures: album-1720-a/album/0002-g1-setup.png, album-1720-b/album/0002-g1-setup.png
- Readers: 2 (a00, b00)

**R2. "Spare minions" are not in the rulebook**
- Rulebook: "+1 minion … only while a space would still be free".
- Truth: the table has a pool of spare minions (Cory, Oct 29) beside the log that +1 minion cards draw from; when it's empty they give nothing.
- Fix: rulebook Turn order: "Extra minions come from the spare minions beside the log; when none are left, +1 minion gives nothing this round."
- Pictures: album-1720-a/album/0055-g1-table-turn-4.png, album-1720-a/album/0141-hover-pictures-round-III-shop-17.png, album-1720-b/album/0138-g1-table-turn-8.png
- Readers: 8 (a01, a02, a03, a04, b01, b02, b03, b04)

**R3. Turn order rule doesn't allow for Line Cutters**
- Rulebook: "From round II, fewest followers goes first".
- Truth: Line Cutters ("You go first every round.") overrides it.
- Fix: rulebook Turn order: "…unless a card says otherwise (Line Cutters)"; say what happens with two (a Doppelganger copy).
- Pictures: album-1720-a/album/0033-hover-pictures-round-I-shop-43.png, album-1720-a/album/0093-hover-pictures-round-II-seat-2.png, album-1720-b/album/0032-hover-emoji-round-I-shop-43.png
- Readers: 4 (a00, a02, a04, b00)

**R4. The shop's price circle and toggles**
- Rulebook mentions only the "affordable" switch.
- Truth: every card has its total price in a dark circle (Cory, Oct 21/29) and the shop has "details" and "cost / color" switches.
- Fix: rulebook Shop: "The dark circle is the card's total price. 'details' shows every card's ability; 'cost / color' sorts the row."
- Pictures: album-1720-a/album/0003-g1-table-turn-1.png, album-1720-b/album/0003-g1-table-turn-1.png
- Readers: 5 (a00, a02, a04, b00, b01)

**R5. Contest leaders on the rim**
- Rulebook: nothing.
- Truth: the rim shows the current leader's face after the prize.
- Fix: rulebook The wheel: "Each rim shows who leads its contest right now."
- Pictures: album-1720-a/album/0003-g1-table-turn-1.png, album-1720-b/album/0089-hover-emoji-round-II-plaque-market.png
- Readers: 6 (same readers as W8)

**R6. Minions on a seat: dark means placed**
- Truth: placed minions fade on the seat (decisions Oct 21, mockup A); seats are listed in turn order.
- Fix: rulebook On screen: "Your seat shows your minions; placed ones go dark. Seats are listed in turn order."
- Pictures: album-1720-a/album/0072-hover-pictures-round-II-space-2-4.png, album-1720-a/album/0141-hover-pictures-round-III-shop-17.png
- Readers: 3 (a02, a04, a01)

**R7. Terms the cards use that the rulebook never defines**
- "Cast out" (Farewell, Estate Sale: to the bottom of the pile; it counts as leaving your cult); "full set" (one of every color in play: Yellow's contest, Jack-of-All-Trades, Seamstress); "gifted"/"give" (Silver); Dabblers counting as every color (decisions Nov 3: "counts as any color" under the seat), while the rulebook says grey has no color.
- Fix: rulebook glossary lines for cast out, full set and gift, and a Card ruling for Dabblers.
- Pictures: album-1720-b/album/0013-hover-emoji-round-I-space-1-3.png, album-1720-b/album/0185-hover-emoji-round-III-shop-39.png, album-1720-a/album/0094-hover-pictures-round-II-seat-3.png
- Readers: 6 (a02, a04, b00, b02, b03, b04)

**R8. Spaces that grow by round**
- Rulebook: never says a space's amount changes by round; the round card says "spaces with I, II and III numbers pay more".
- Fix: rulebook The wheel: "Some spaces pay more each round; the hover lists round I, II and III."
- Pictures: album-1720-b/album/0004-hover-emoji-round-I-space-0-0.png, album-1720-a/album/0054-g1-round-card.png
- Readers: 3 (b00, b02, a03)

## DESIGN

**D1. Last Call: one follower, or one per minion left?**
- The card reads "+1 purple. +1 follower and +1 purple per minion you have left."; the game pays a follower per minion left (purple.js resolve: bonus += p.left), but Cory's Nov 1 note is "keep it one follower, and give purple per minion". Which is it? Then the words follow.
- Pictures: album-1720-a/album/0026-hover-pictures-round-I-space-3-4.png, album-1720-a/album/0078-hover-pictures-round-II-space-3-4.png, album-1720-a/album/0135-hover-pictures-round-III-space-3-4.png
- Readers: 3 (a00, a02, a03)

**D2. Polish: can you turn silver into silver?**
- Card: "Turn 2 of your silver into 4 of any colors." The game offers only the other colors (silver.js polishPick: otherColors), so silver is missing from the sheet with no reason. Keep "other colors" and change the words, or allow silver?
- Pictures: album-1720-b/album/0057-g1-sheet-choose.png, album-1720-b/album/0104-g1-sheet-choose.png, album-1720-b/album/0208-g1-sheet-choose.png
- Readers: 4 (b00, b01, b02, b04)

**D3. Splurge pays less in round III than in round II**
- Splurge is per 1 resource in round II and per 2 in rounds I and III (Cory, Nov 1, decisions line 1634). Four readers took it for a mistake, against the round card's "pay more". Keep?
- Pictures: album-1720-b/album/0011-hover-emoji-round-I-space-1-1.png, album-1720-b/album/0072-hover-emoji-round-II-space-1-1.png, album-1720-b/album/0146-hover-emoji-round-III-space-1-1.png
- Readers: 4 (b00, b01, b02, b03)

**D4. Print space names on the wheel?**
- Nine readers could not match "Help Yourself", "Potluck" in the log to a space (W2 covers a display-only fix). Names on the faces would cost room the effect words use (panelText.js, Cory Oct 15 "hard to decipher").
- Readers: 9 (see W2)

**D5. Card words first-timers couldn't parse (for a /card-words pass; card text is Cory's)**
- Shake Down "pay you its cost": in what, and if they have no member costing 5 or less? Creditor and Potluck "then gains": who? Drifters "these count as a member of that color"; Tourist and Caravan "each color you hold": resources or members? Meddler "change 1 of each rival's resources one for one": to what, who picks? Debt Collectors "2 silver, if they have it": and with 1? Shoplifter "steal 1 resource": from whom? Hot Streak "per turn in a row you've taken just before this one"; Hawker "starting on your left" (seats are a column); Cash In and Cashier "turn all your white into followers": at what rate? Silver Cloak "whenever silver is gifted": per silver or per gift? Bury "half its cost" and Housewarming "up to 5": which part of the cost? Guest of Honor "take a Silver space", Brokers "a White action" (rulebook says spaces); Fan Club and Extortionist: ties? Line Cutters: two of them? Deprogrammers and Foster Parents: do trades count? Melting Pot: does grey count as a color? Godparent: does "its cost" include the any part?
- Pictures: album-1720-a/album/0072-hover-pictures-round-II-space-2-4.png, album-1720-b/album/0112-hover-emoji-round-II-shop-35.png, album-1720-b/album/0135-g1-sheet-pay.png
- Readers: 8 (a00, a02, a04, b00, b02, b03, b04, a03)

**D6. Keep the build stamp and the "2.0" badges on player screens?**
- "v0.99.569 · e129b6b" under the title and "2.0" on each color tile read as debug text to both readers.
- Readers: 2 (a00, b00)

**D7. Foster Parents' picture reads as a placeholder**
- A tiny figure in a box on a blank pink field beside full scenes. Redraw?
- Pictures: album-1720-a/album/0003-g1-table-turn-1.png
- Readers: 1 (a00)

## NOT AN ISSUE

**N1. Rim plaques open a space card instead of the contest.** The album tool rested the pointer on the middle of each rim word's box ([data-plaque] in scripts/picky/picky.mjs); for a curved line that point is inside the wheel, over a space. The real rim target (rim-hit, above the spaces) opens the standings, as the one plaque the tool happened to hit shows. Fix the tool: rest on [data-rim] instead. Pictures album-1720-a/album/0028-hover-pictures-round-I-plaque-red.png, album-1720-b/album/0090-hover-emoji-round-II-plaque-trading.png, album-1720-b/album/0163-hover-emoji-round-III-plaque-market.png. Readers 6 (a00, a02, a03, b00, b02, b03).

**N2. Initiation's face says "6 or less".** It says "8 or less" in dim text on the dark center (see W36). Pictures album-1720-a/album/0009-hover-pictures-round-I-space-0-5.png. Readers 1.

**N3. Promote's limit hidden under a minion.** That's the album tool's pointer hand resting on the space. Pictures album-1720-a/album/0112-g1-table-turn-8.png, album-1720-a/album/0141-hover-pictures-round-III-shop-17.png. Readers 2.

**N4. "Each round: … +4" means +4 every round.** The rim shows this round's prize and changes to +6 and +10 (Cory, Oct 15: "each round: most gold +4"). Readers 2 (a00, b00).

**N5. Help Yourself and Lie Low show no "+1 magenta".** Help Yourself gives none (Cory, Oct 29); Lie Low's +1 sits in line 3, which drops on the outer ring (intended order). Readers 1.

**N6. "Green Cloak: +1 magenta" on a copy.** The Green Cloak pays +1 of the copied action's color to its holder whenever anyone copies (decisions Nov 3). Readers 2 (a01, a02).

**N7. Demote "Could recruit Doppelganger (5)".** Demote can give to the shop and take a shop member costing up to 2 less (red.js). Readers 1.

**N8. Sample says "Copy the On Recruit".** Copying an On Recruit is not copying an action; the rulebook says so. Cory's words (Oct 28). Readers 2.

**N9. Hover cards cover neighbouring cards and spaces.** A hover has to sit somewhere and closes when the pointer moves; the seat card's size is a taste call. Readers 9.

**N10. Results "+17 for most magenta all three rounds".** 4 + 3 (a tie) + 10 = 17. Readers 1.

**N11. P4 shows 0 resources after setup.** Help Yourself and Echo steals before the reader's first turn took them (strip lines). Readers 1.

**N12. Shop odd bits**: the 8th card centered under the grid (8 cards in 3 columns), cards overlapping mid-deal, no ability on card faces ("details" shows them), Volunteer's "No ability." Readers 3.

**N13. Pay suggestion spends contest colors.** It's a suggestion you can change; not a defect (an engineering choice for PayPicker's suggestion). Readers 2 (b02, b04).

**N14. Empty P5 and P6 rows, logo colors.** Up to six players; the logo isn't a table. Readers 1.
