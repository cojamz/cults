# Playtest for bugs, Nov 1 (AI players)

Every seat here was an AI: Normal and Hard bots, plus "person" seats clicked through the screen by a script (most moves picked by a Normal bot, the rest random legal picks). How it felt is read off their games, not a human table.

Live build v0.9.903 for games 1 to 8, v0.9.915 for games 11 and 12. Gold, Silver and Yellow left out (still being designed).

## Bugs

1. **"Since your last turn" cut in half** under the turn card in 4-player games once four spare minions show, and its "1 move" count broke onto two lines. Fixed, live in v0.9.915.

Checked and fine: no console errors, no crashes, no stuck turns in 13 games (10 on the live build, 3 on the fix); every seat's score matched the game; undo taken 20 times (placements, chains like Help Yourself's 10 takes, recruits); a reload every round came back to the same move and scores; log, details, color and affordable views; both deck sizes deal the right size.

Looked at and not bugs: the space's card on the hub covers a question's answers for under a third of a second as the question opens (Out of Style, Crime Wave, Demote, Promote). A space card stays open after you answer with Enter (keyboard focus lands on a space, as designed).

## How each game felt

- **Red, Purple, Blue, Magenta, 4 players.** Won by 2 on Most purple every round. One bot ran away with 17 members, one person seat stalled on 3. Lots of Demote swaps.
- **White, Green, Magenta, 3 players.** Won by 52. The winner copied steal spaces (Reprise, Echo, Cover) onto the same rival every turn with Fence paying +1 magenta each time; that rival ended with 0 members after losing Dabblers. Table talk would be "stop picking on me".
- **Purple, White, 2 players vs Hard.** Won by 14 on Most white every round.
- **Green, Blue, White, Red, 4 players.** Won with 105 followers on end-game bonuses and 23 members. Long game, many Peeks.
- **Red, Blue, Magenta, Green, 4 players.** Won by 11 on end-game bonuses, 18 members.
- **Purple, Magenta, White, Blue vs Hard, 4 players.** Won by 6 on Most blue; Help Yourself and Accomplice steals spread across the table.
- **Red, Purple, Green, White, 4 players.** Won by 10 on Most purple every round; Timekeepers and HR scored big at the end.
- **10 per color: Blue, Magenta, Purple, Green, 4 players.** Closest game: won by 1.
- **15 per color: Red, White, Blue vs Hard, 3 players.** Won by 20 on Most white every round.

Pattern worth a human look (AI read, not a design flaw): in 3 of the 7 games with White, the winner took Most white all three rounds.
