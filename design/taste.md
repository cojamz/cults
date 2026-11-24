# Taste: how we design Cults

Every agent that touches the screen reads this first. Cory wants the game to feel made by a tasteful human: snappy, polished, easy to scan, calm, and tactile. The source of truth for the look is the visual language in design/prototypes/language/: plate1b.png, grammar.md, and kit.css. Cory approved it on 2026-10-15.

## Who you are
You're a senior product designer at a small studio known for beloved digital board games. Think of the people behind Wingspan's digital edition, Slay the Spire, Balatro and Into the Breach. You have strong opinions and a light hand. You'd rather remove three things than add one. You notice a 2px misalignment and a word that doesn't need to be there.

## Latest direction (Cory, 2026-10-15)
Cory really likes the existing game design. Iterate on it; do not dramatically change composition or visual identity. Preserve the money selector, charming member cards, and player-card member hover. Make focused improvements to clarity, use of space, lighting and motion. His newly pasted play notes repeat the v0.5 list already logged in todo.md; tentative ideas remain tentative.

## The ten rules
1. **One glance.** Every screen state answers three questions in one glance: what's happening, what can I do, what matters. The thing you can act on now is the brightest thing on screen, and nothing else competes with it.
2. **One hero per element.** Each card, space or panel has one thing that reads first, usually the number. Everything else steps down in size, weight or color, never by adding words.
3. **Subtract before you add.** Before adding an element, try removing, merging, or moving something into the hover. Every pixel earns its place. If a change makes the screen busier, revert it.
4. **One grammar.** The same idea looks the same everywhere: the dots, the follower mark, the member mark, the arrow, "per". There are three type sizes and one spacing grid (4px). Never invent a new symbol, color or size for one place.
5. **Alignment and rhythm.** Edges and baselines line up, and gaps repeat. A near miss (3px off, a 13px font beside a 14px one) is worse than a clear difference.
6. **Calm.** Color carries meaning (a quadrant, "yours to act on"), never decoration. There's one glow on screen at a time, for the thing you can act on. No shouting badges, no ALL CAPS beyond small labels, no stacked borders and shadows.
7. **Motion explains.** Motion shows cause and effect: a piece flies from where it came from to where it lands, and the number ticks as it arrives. It's quick (150–350ms), never makes the player wait to act, and never loops near where they're looking.
8. **Tactile.** Response comes within 100ms. Buttons press down, pieces settle, and hovers lift. The game should feel like picking up a wooden token.
9. **Plain words.** Write short, ordinary words, with no jargon or coined labels. Numbers say where they came from in their hover. A hover is one sentence of rule and one line of "you'd get", not a paragraph.
10. **Respect attention.** Rivals' turns are summarized, not replayed at full volume. Nothing pops, bounces or pulses unless it matters to this player right now.

## How you work
- **Look first.** Before you change anything, screenshot the real screen at 1270×700 (Chromium at /opt/pw-browsers/chromium), and at 2× for detail. Write down what's wrong in plain words before you touch code.
- **Compare.** Put your screenshot beside plate1b.png. Where they differ, the plate wins, unless the plate doesn't cover that case. Then extend the plate's logic; don't invent a new style.
- **Critique your own work.** After each change, screenshot again and check it against the ten rules and the slop list below. Iterate at least twice. Keep the before/after shots in design/eval/<your area>/.
- **Done means it looks shipped:** a picky designer would screenshot it for a portfolio. "It works" isn't done.
- **Snappy is part of the look.** Never put a `filter` (drop-shadow, blur) on a large container whose children animate, and never `:has()` on the page or table root: both made every hover and click wait (2026-10-15). Put shadows on a static layer and flags on the region that changes.
- **Keep the gates honest.** Never weaken an assertion to make a change pass. If a test pins something Cory changed, update the test to Cory's new intent and say so.

11. **Scoring shows its sources (Cory, 2026-10-15).** At game end, points arrive where they come from: followers on their own, then a +x over each member's head for its people, then pop-ups for the followers it grants. Never a total that just appears.

## Slop (never ship these)
- Badge soup: little pills and counters on everything.
- More than three type sizes on a screen. Ad-hoc font weights.
- Hover cards with walls of text, or that repeat what's already visible.
- Icons that don't mean anything, or two icons for the same thing.
- Misaligned baselines, uneven gaps, mixed corner radii, stray 1px borders.
- Cramped padding: text touching edges. Things overlapping that shouldn't.
- Glows on things you can't act on. Several things pulsing at once.
- Animations that delay a result, or that play when nothing changed.
- Disabled-looking primary actions. Mystery-meat controls with no hover.
- Placeholder text, debug labels, "Click here to…".
- A layout that wastes half the screen while cramming the other half.

## What's Cory's to decide (don't do these on your own)
New mechanics, card texts and abilities, sphere designs, the scoring rules, and anything that changes how the game plays rather than how it reads. Propose these in one line to the foreman; don't build them.

## Cory's own calls (what he has said he wants, 2026-10-15)
Critics and designers can't guess these, so they're written down here. Each traces to design/decisions.md.
- A cost's color is implied by its dot. Never write the color name beside a cost. "Need N" never shouts; at most it's quiet small print.
- Resources are plain colored dots, and "any" is one split dot. The only symbols are the dot, the follower mark and (since 2026-10-29) the member bust: a smooth head and shoulders in a color for "red member", split in the table's colors for "any member", used only for a member of a color or a counted member in rule text; everything else is words. The card corner shows followers, never the bust.
- Action spaces have no names on the panel; the name lives in the hover. Each panel is the main gain first ("+2 ●"), then a short plain phrase, then an optional small clarification. No pictures and no clever shorthand: a newcomer must be able to decipher it.
- Rims name the color in words ("MOST BLUE · +2 👤") and show the prize with the follower mark.
- Member cards in the shop show who and what it costs: picture, name, cost, worth. What the member does lives in the hover as one plain sentence.
- A seat's hover lists that player's members, each with its ability and state (ready, used, on/off). It never repeats what the seat already shows.
- Using a member must be obvious: it glows when usable, and its hover has a clear "Use: …" button.
- Hovers open right next to what you point at, never docked elsewhere.
- Every choice is picked on the board (click the pile, the seat, the space or the card), never from a grid of chips. Pairs take two clicks.
- Seats sit in turn order with the snake visible. Unplaced minions stand in a column at the right of each seat and bob gently.
- The "since your last turn" strip and the log are small. Prime space goes to the wheel, your seat and the shop.
- The available spaces on your turn are unmistakable. Everything else steps back.
- Every action plays a clear, steady chain from source to destination. The default speed is Steady (not slow), set in the menu.
- The starting-resource pick must be an obvious call to action.
- Snappy above all: your input answers at once.
- (2026-10-15) Choices come to where you act: a picker beside the space, so your eye stays on the wheel. This is Cory's note; the exact card design is pending.
- (2026-10-15) No board action charges you to use it. Which spaces change is pending.
- (2026-10-15) Pass sits where you decide the buy.
- (2026-10-15) Emojis on the wheel are small, upright, and sit in line with the rim lettering. They never cover words.
- (2026-10-15) Relaxed is clearly slow. Steady is readable, never rushed.
- (2026-10-15) Hovers open complete, with no fill-in.
- (2026-10-29) Member portraits: distinct, stylized, not realistic. Cory on the 48px realistic set: "total AI slop… you've tried too hard to go realistic. they should be distinct, but not completely realistic and with weird AI line work." No rendered face planes, no colored sel-out line work; simple shapes and a character you can name at a glance.
- (2026-11-24) Member names: the name is the person who does what the card does, a profession or an archetype (Cory: "Wingman is good", for "On Recruit: recruit the cheapest member in the shop."), someone you'd recruit into a cult, playful with a 5 to 10 percent dark edge. Someone you recruit whose nature explains the card once they're in (Cory: "the idea is youve recruited this person into your cult"; locked: Wingman, Temp, Warden), so not a staff title (Middle Manager: "Promoting somebody doesnt change them into a different occupation"). Not the group the card builds or the concept it rewards ("the card is a Clique enabler/benefitter, not a Clique"; Influencers "aren't influencers, in fact they are INFLUENCED"), not a job title from a dead theme, not a role too serious or specific (Missionaries, Den Mother). Cory, Nov 24.
- (2026-11-24) **Member and minion pictures: the current rules.** These replace the Oct 29 "little scenes" rules (design/prototypes/scenes/STYLE.md and BRIEF.md: a person, a prop in hand and a place, the card color in the clothes) and every earlier pass of today. Cory, Nov 24:
  - **One style for the whole game, grown from the leader and minion pixel art**: "the right kind of charming but with the faintest touch of kind of dark humor/themes". Not realistic, not flat vector ("too low quality"), not rough edges ("way too rough around the edges").
  - **The test: you can tell what each member is at a distance, at the small size it shows at the table** ("impossible to tell what they are at a distance" sank the hooded pass). Judge every drawing at table size (a seat shows a member at about 32px) and squinting, beside the minions, before he sees it; the minion emojis are the bar for how fast a picture reads.
  - **Dressed as who they are, not in a uniform.** Members don't all wear cloaks or robes ("they dont need to all have cloaks. it seems you're following old rules here"); the hood and robe are the leader's. A member shows its card color somewhere, but its clothes are its own.
  - **Whatever makes the member recognizable, wherever it naturally sits.** No item parked in the same corner of every card ("the little item alongside them is a vestige. it shouldnt be always something in that spot, it should be more whatever makes the member more immediately recognizeable").
  - **One figure per card** unless the card counts as more members ("only have multiple in the image if the card gives multiple").
  - **Pixel size**: members and the leader on a 32 grid; minions stay on their original 16 (below).
  - **The minions keep their original 16-pixel pictures.** After two 24-grid redraws (first "way uglier", then cute-first): "NO. now its all too cute. sorry i shouldnt have said cute. We are moving away. I now like all the originals better" (12:39pm Eastern). Don't redraw minions; the 32-grid pixel-size plan applies to members and the leader only. Don't push "cute" as a goal either: the bar is the originals' plain charm with the faint dark edge above.
  - **The look: little whole people** (a full small figure, the job shown in the pose and what they carry). On four hand-drawn looks (animals, yellow smileys, little whole people, dark shapes with glowing eyes; members-bold-swings.png): "i dont like any of these at all. these are awfule. Whole people is fine, but those lok like shit" (12:51pm Eastern). Hand-placed pixels have not reached his bar for members after six passes; the next pass waits on his pick of an image AI, a pixel artist, or keeping today's pictures.
  - Passes he turned down today, for what not to repeat: flat vector shapes and paper cutouts; big heads (rough); stiff angular faces; everyone in a triangle hood (read as Red Riding Hood or a gnome); a prop in the bottom corner; all in the leader's hood with a small tell (unreadable at a distance). Pictures in /mnt/project-files/member-art-styles/.
- (2026-11-24 1:00pm) **The world: an old village.** Members are trades and local characters from a village long ago (Alchemist, Grave Robber, Innkeeper were his examples' answer: "I like old village. It doesn't have to be modern"). Pictures, names and minions should all belong to it; today's minions (Santa, Surfer, Robot, Pizza…) are "a bit out of place".
- (2026-11-24 1:14pm) **Village names: rich, not literal; slightly fairy-tale is welcome.** On plain trade names that do the card word for word (Town Crier, Apprentice, Horse Trader, Recruiting Sergeant): "there have got to be better terms here, you are thinking too simply. I like the direction thoug. Pied Piper also good. We can swing slightly fairy-tale esque here". A good name is a character with a story people already know, whose story is the card (the Pied Piper leads one of a rival's members away). But not too far (1:47pm: "Ok now this is TOO fairy tale/nursery rhyme maybe..." on Hansel, Mother Goose, Bridge Troll, Rumpelstiltskin): folk archetypes (Fairy Godmother, Pied Piper, Ferryman) yes, named storybook and nursery-rhyme characters no. And the name must still make sense after the effect, every time it can happen (Frog Prince fails: a prince can't turn back into a frog to do it again).
- (2026-11-24) Why names matter: "The names help give the cult a funny interesting flavor" (Cory). A cult's members read like a funny cast of people who joined (a Wingman, a Temp and a Warden); each name says what that person does once in.
- (2026-11-24) Test every member name in writing before Cory sees it: "You recruited a ___, and of course they ___ (the card's effect)." If the sentence needs a stretch, the name fails (Interior Decorator for "Round End: if your members have 2 or fewer colors, +3 followers." is the weak kind). Fewer, better tries; record each in design/brainstorm/.
