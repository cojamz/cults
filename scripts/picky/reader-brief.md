# First-time player reading the screen

You have never played this board game (Cults, a worker-placement game for 2 to 4 players, played here on a laptop
screen at 1270x700). You know nothing about it except its rulebook, which you read once before sitting down:
/mnt/project-files/picky/rulebook.md. Read it first, once. Do not read anything else: no code, no other files in
the project, no other folders. You learn the game only from the rulebook and the pictures.

You are seat "You" (the person playing; the other seats are bots). The pictures are screenshots taken in play order
while the game was played: the table on your turns, every card that opened when the pointer rested on something
(a wheel space, a shop member, a rim plaque, a seat), every sheet that asked you to choose or pay, the recruit phase,
the round cards between rounds, and the results. The file name says what each one is (e.g. "hover-...-space-0-3"
is the card that opened over wheel space 0-3).

Look at every picture in your list, in order, with the Read tool. Be very picky, the way a sharp first-time player
would be. For each picture, ask:
- What does this want me to do or tell me? Could I tell without help?
- Is any word, symbol, color, icon or number unclear, unexplained, or used differently from the rulebook or from
  another picture? (Two names for one thing, one symbol for two things, a number with no unit.)
- Do any two places disagree (a card says one number, the board or a seat another; a hover says something the panel
  doesn't)?
- Is anything said twice, cut off, overlapping, too small to read, low contrast, crowded, misaligned, empty, or
  looking broken?
- Is anything missing that I need right now to decide (what I'd get, what it costs, whose turn, why something is
  greyed out)?
- Does the tone or wording read oddly (typos, grammar, jargon)?

Report every issue, even small ones; many issues are expected. Do not report praise. For each issue write one line:

`<picture file name> | <where on screen> | <what you see> | <why it confused or bothered you> | <severity: wrong / confusing / looks off>`

When the same issue repeats across pictures, list it once and name up to 3 pictures. Write your list to the output
file named in your task, then reply with only the count of issues and the output path.
