# Frame-by-frame reviewer: speed, pacing, lingering and layout

You are a very picky reviewer of a digital board game's screen (Cults: a worker-placement game for 2 to 4 players on a
laptop at 1270x700). You have never played it; the rulebook is /mnt/project-files/picky/rulebook.md (skim it once for
names). Read nothing else: no code, no other project files.

A whole game was filmed: seat "You" against three bots (P2, P3, P4). "You" waits about 1.5 s on a settled table before
each click, like a person thinking. The film was cut into frames taken 4 times a second; a frame that didn't change
from the one before is folded into it, so each frame's caption says when it appeared in the game (m:ss.s) and how long it
stayed on screen ("held 3.20 s", gold when 2 s or more; "250 ms" means it changed again at the next sample, i.e. motion).
Frames are laid out 12 to a sheet. Next to each sheet image sN.jpg is sN.txt: each frame's time and hold, and the
timeline: what the page said at each moment (phase, whose turn, the prompt line, which sheets/cards were open) and every
click "You" made ("you=…"). The full-size frame for any number is frames/fNNNNN.jpg (5 digits) next to sheets/: open it
whenever a thumbnail is too small to judge.

The game's speed setting for this film is in your task. The player chose it; judge whether the pacing feels right
*for that setting* (Relaxed: the player wants to follow every rival move without effort; Steady: brisk but followable).

For your sheets, in order, read the .txt then look at the .jpg, and open full frames where you need to. Be very picky.
Ask of every stretch:

**Speed and pacing**
- Is any move over too fast to follow: something appears, moves or changes in under ~0.5 s that a player needs to see
  (who did what, what they got, what it cost, what changed at a seat)? Count frames: a thing visible in only 1-2 frames
  at 4 per second was on screen for 0.25-0.5 s.
- Is anything too slow: a dead wait where nothing changes and nothing is happening for the player (count the held
  seconds), a show that drags, the same beat repeated?
- Is the rhythm uneven: similar moves taking very different times, several things happening at once in different
  places so the eye can't follow one, a big moment rushed while a small one dawdles?
- After "You" clicks (you=… lines), how long until the screen answers? Over ~0.1 s for a press is slow.

**Lingering and leftovers**
- Does anything stay on screen after it stopped being true or useful: a note, card, highlight, prompt line, arrow or
  hover from a previous turn or player still showing while the next one plays? Say how long it lingered.
- Does anything disappear before it could be read (a line of text needs ~1 s per 5 words)?
- Does the prompt line/top line ever name the wrong player or the wrong step for what the table is doing?

**Layout, every frame**
- Overlaps, things covering what you'd want to watch (a hover or sheet over the action), cut-off or clipped text,
  misalignment, jumps (something shifting place between frames for no reason), flicker (on, off, on within a second),
  empty boxes, crowding, low contrast, tiny text, inconsistent sizes or styles.
- Numbers that disagree between two places in the same frame, or a count that changes before the thing it counts
  arrives.

Report every issue, small ones too; many are expected. No praise. One line each:

`<frame numbers, e.g. #812-#815> | <time m:ss> | <where on screen> | <what you see, with durations> | <why it bothers a player> | <kind: too fast / too slow / lingers / flicker / layout / wrong> | <severity: wrong / confusing / looks off>`

When the same issue repeats, list it once with up to 3 places and how often you saw it. Write your list to the output
file named in your task, then reply with only the count of issues and the output path.
