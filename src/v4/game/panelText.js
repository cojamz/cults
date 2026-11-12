// What a space's panel says, for a first-time player who hasn't read the rulebook (Cory, 2026-10-15: "we tried to get
// too cute with the action visual language. now it's hard to decipher"). Three lines at most, no pictures:
//   main   line 1, biggest: the gain as a number and its resource dot ("+3 gold"), or followers ("+1 @f")
//   verb   line 1 instead when the space gains nothing directly: the verb in plain words ("Copy a space")
//   second line 2: the rest as a short, complete plain phrase that makes sense alone ("+1 to a rival")
//   note   line 3, small and only if needed: a clarification ("you pick who")
// The only marks are the resource dot (a resource word right after a number) and the follower mark (@f). The
// space's name opens with its hover, whose rule sentence (the engine's action text) uses the same words for the same
// idea ("copy", "in the shop", "on the board"). design/eval/words/decipher-w3.md checks every line against the rule.
import { richUp, richText } from '../../engine/v4/content/price.js';
import { pipEffect } from '../shorts.js';
import { contextFor, printsPlus1 } from '../../engine/v4/core.js';
import { quadrant } from '../../engine/v4/index.js';
// named costs follow every member's price (content/price.js MORE), as the engine's rule text does (picky bot, Nov 6:
// the wheel said "costing 9 or less" beside a hover card saying 10, after the Nov 5 11:08pm price change)
import { MORE } from '../../engine/v4/content/price.js';

// A value that grows by round prints this round's number, and says it grows in plain words (w3b #12/#13, w3a #54: the
// "2 · 4 · 6 by round" run under "+4●" said the number twice, and "+2●" alone read as flat). It takes line 2 when the
// panel has nothing else to say there, else line 3 (joined onto line 2 it made the line too long, and a line 2 that
// doesn't fit drops whole). The run itself is the hover's rule sentence. Round III has nothing left to grow into.
// what grows, said when a space does more than one thing (Cory, 2026-10-22: "'more each round' is confusing on actions
// that do multiple things")
// "+3 / more each round" read as 3 more every round (Cory, 2026-10-24: "+X more each round reads weird and is probably
// wrong"): a growing space says next round's number instead, and nothing in round III
// "+4 next round" then read as a promise to the taker (Cory, Oct 24): the growth is said as the space's schedule,
// round by round, no verb (/card-words: a schedule, not a promise)
// One rule for every space that grows (picky bot, Nov 4: Build Up printed "+3 green / I +3 · II +4 · III +5", saying its
// number twice, while Gather, Stash, Savings, Hold Up, Sleep In and Right Away printed one number and read as flat):
// line 1 is this round's number, the schedule sits in line 3 wherever the panel has room, and the hover's I / II / III
// rows say it on every space.
const run = (f, unit = '') => `${unit}${[1, 2, 3].map(n => `${['I', 'II', 'III'][n - 1]}\u00a0${f(n)}`).join('\u00a0· ')}`;
// Line 2 stays within about 16 letters a line: at 1270×700 a narrow panel holds two short lines of it (Cory: "cut words
// or step the size down. Never clip and never abbreviate into code"); a line 2 that doesn't fit drops whole. A condition
// that decides the gain never sits only in line 3 (at 1270×700 line 3 shows on few rings: measured on five tables, w3),
// and where line 2 can drop too (the center ring always, a ring II verb at some turns of the wheel) the space is whole
// in line 1 (w2b #2/#24: "Gain each color" gave nothing without its "per full set"; "Take a member" hid that it's a
// rival's; w3: "Pay all your purple" without its "for 2 extra turns").
const P = {
  gold: {
    // "+1 to anyone" (w3): the gift goes to a rival only, never to you. "1 of what?" says gold; "you pick who" read
    // awkwardly (live panel r1): the note runs on from line 2 ("…to a rival / of your choice")
    jv: { main: '+3 gold', second: '+1 gold to a rival', note: 'of your choice' },
    rush: r => ({ main: `+${2 * r} gold`, note: run(n => `+${2 * n}`) }),
    // "Save 4" read as keeping 4 resources (blind testers, 2026-10-15): it's money off, said as a shop says it
    discount: { verb: '4 off', second: 'your next member' },
    steal: { verb: 'Steal up to 3 gold', second: 'from rivals' }, // the steal and its "up to" said (wording pass, Nov 12)
    // live (round 3 skeptic: "+1●" in big type paid +5): line 1 is this turn's gain, the rate small under it
    // live: "1 per member" ("you have" made a third line that lifted the minion off its panel, spaces gate Nov 1)
    windfall: (r, now) => (now == null ? { main: '+1 gold', second: 'per member' } : { main: `+${now} gold`, second: '1 per member' }),
    strike: { verb: 'Double your gold' },
  },
  red: {
    // Nov 10 round I (Cory): Borrow, Trending and Gather
    // the catch in line 1 (picky bot, Nov 11: a tight ring or a taken space shows line 1 alone, and it read as a member to
    // keep; decisions Oct 25 and Nov 1: a space's catch is on the wheel)
    borrow: { verb: 'Recruit the cheapest for free, this round only', second: 'it returns to the shop at round end', note: '+1 red' },
    trending: { verb: '+1 per shop member of', second: 'the most common color', note: '+1 red' },  // off the wheel since Nov 11 (Late Shift)
    // Cory's words, split later (picky bot, Nov 11: taken, line 1 alone read "Free member costing up to" with no number)
    lateshift: { verb: 'Recruit for free, costing up to 2 per minion', second: 'you placed this round, this one included', note: '+1 red' }, // Cory, Nov 11
    gather: { main: '+3 red', second: '+4 @f if you recruit a color you have', note: '+1 red' }, // New Blood's form
    // the +2 red sat in line 3, which drops on the outer ring (round I review, Oct 25): it takes line 2, as Right Away's purple
    evenswap: { verb: 'Use a shop member’s On Recruit', second: '+2 red', note: 'it stays in the shop' },
    turnout: r => ({ main: `+${r + 1} red`, second: '+1 @f per 3 spent on a member', note: run(n => `+${n + 1}`, 'red: ') }), // per 3 paid (Cory, Nov 9)
    opendoor: { verb: 'Recruit the cheapest', second: 'in the shop, free', note: '+1 red' }, // all piles' Walk-In (Open Door's old words)
    // "+1 red to all" read as everyone, you too, or not (picky bot, Nov 4): yours, then the rivals'; "each rival +1"
    // took a second line and dropped on the outer ring; "pile" as its card says
    hire: { verb: 'Recruit the top of the pile', second: '+1 red, rivals +1' }, // the rivals' red sat in line 3, which drops on the outer ring (blind panel, Nov 1)
    // the gain first, then the action, split by a comma (wording pass, Nov 12: "…3 more +3 red" ran together)
    hireup: { verb: '+3 red, promote (cost up to +3)' }, // whole in line 1: ring II drops line 2
    trade: { verb: '+3 red, demote (cost up to −3)' },
    take: { verb: `Recruit for free, costing ${9 + MORE} or less`, second: '+1 red' },
  },
  market: {
    // Nov 10 (Cory): Test Drive, the new Out of Style, Word of Mouth and the recruit ladder from the discard pile (3/5/7)
    testdrive: { verb: 'Discard a shop member', second: 'use its effect now', note: '+1 blue' },
    // Recruit Twice's and Spree's shape, whole in line 1 (picky bot, Nov 11: a tight ring showed a bare "+3 blue")
    markdown: { verb: '+3 blue, recruit from the discard pile, 2 less' }, // whole in line 1 (picky bot, Nov 11)
    wordofmouth: { verb: '+1 @f per 2 members', note: '+1 blue' },
    bargain: r => ({ main: `+${r + 1} blue`, second: 'Discard 1 shop member', note: run(n => `+${n + 1}`, 'blue: ') }), // Cory, Oct 31 ("may" made line 2 too long; it dropped)
    restock: { verb: 'Discard 3 shop members', second: '+1 of each one’s color', note: '+1 blue' },
    // line 2 was too long and dropped whole at the wheel's bottom, taking the blue with it (round I review, Oct 25)
    showroom: r => ({ main: `+${r + 2} blue`, second: 'peek at the top 4', note: run(n => `+${n + 2}`, 'blue: ') }), // +3/+4/+5 (Nov 5)
    clearance: { verb: '+5 blue, recruit from the discard pile' },
    pricecheck: { verb: 'Bury a shop member for half its cost in blue', note: '+1 blue' },
    spree: { verb: '+7 blue, recruit 2 from the discard pile' },
  },
  purple: {
    hourly: r => ({ main: `+${3 + r} purple`, second: run(n => `+${3 + n}`) }),
    // "per rival ahead" read as ahead on score (blind testers, 2026-10-15): it counts minions placed, said in line 2
    catchup: (r, now) => ({ main: `+${now ?? 1} purple`, second: now == null ? '+1 per rival who placed more' : '1, +1 per rival who placed more', note: 'minions this round' }),
    // Say whose placed minions count; "on the board" alone read as counting all players' minions.
    windup: (r, now) => (now == null ? { main: '+1 purple', second: 'per minion you placed' } : { main: `+${now} purple`, second: '1 per minion you placed', note: 'this one too' }),
    // "per minion to place" read as +2 (round 3 skeptic): live, it's the count after this one
    planahead: (r, now) => (now == null ? { main: '+1 purple', second: 'per minion to place' } : { main: `+${now} purple`, second: '1 per minion left to place' }),
    // free since 2026-10-15 (Cory: no board action requires spending). A ring II verb can drop line 2: whole in line 1
    // line 1 alone must not read as a flat +2 (text review, 2026-10-23: line 2 drops on ring II)
    // its "+1 purple." leads the card, so it's the space's own gain, not the first taker's +1 (picky bot, Nov 11: the face
    // stripped it as if it were); it takes line 2 as Crunch Time's +2 did, the token said in line 1
    lastcall: { verb: '+1 @f and +1 purple per minion left, then go last', second: '+1 purple' }, // 'skip till others are out' didn't fit line 2 and dropped (blind panel, Nov 1)
    // the center drops line 2, so it's whole in line 1. Your own next turns, moved up, not extra ones (Cory, 2026-10-15)
    // Cory, 2026-10-22: place on taken spaces for the rest of the round
    // Cory, 2026-10-22: the old game's "Gain 4 purple, skip next turn"
    // the token in line 1 (picky bot, Nov 11: a tight ring showed a bare "+5 purple")
    skip: r => ({ verb: `+${r + 3} purple, take the Goes Last token`, note: run(n => `+${n + 3}`, 'purple: ') }),
    // On a Roll (Nov 10, Cory's Purple plan): Hold Up's place
    // the token sat in line 3, which most rings drop (picky bot, Nov 11): line 1 says it
    onaroll: { verb: '+2 purple per turn in a row, then go last' },
    holdup: r => ({ main: `+${r + 1} purple`, second: 'the next turn is skipped, even yours', note: run(n => `+${n + 1}`, 'purple: ') }),
    // the center ring can drop line 2 (round III since Oct 22): line 1 says it whole
    // Cory, 2026-10-28: +5 purple and a minion this round
    // that minion goes on the Goes Last token (Cory, Nov 6): said in line 1 (picky bot, Nov 11)
    crowdin: { verb: '+4 purple, +1 minion, then go last', second: 'the extra minion this round' },
    // its +2 in line 1, as Promote's +3 (picky bot, Nov 11: taken, line 2 hides and "Your next two turns, now" stood alone)
    rally: { verb: '+2 purple, your next 2 turns right after' },
    again: r => ({ verb: `+${r + 1} purple, your next turn right after`, note: run(n => `+${n + 1}`, 'purple: ') }), // 2/3/4 since Nov 6 (Cory); the wheel said 1/2/3 (Cory, Nov 9)
  },
  silver: {
    // "others get 1" left "1 of what?" (live panel r1): silver
    // Cory's words, set as a verb: as a gain, "then" stood alone on a line in the big gain type (picky bot, Nov 11)
    // "each rival", the card's words; its trailing +1 is the first taker's, on the hover's badge (wording pass, Nov 12)
    toast: { main: '+4 silver', second: 'each rival +2 silver' }, // Cory, Nov 11
    // words for the arrow: a panel's only marks are the dot and the follower mark (picky bot, Nov 11)
    polish: { main: '+2 silver', second: 'then turn all your silver into one color' }, // Cory, Nov 11
    // "+2 per silver" read as per silver you hold (Cory, Nov 1: "VERY misleading"): the giving leads
    // "+2 @f each" read as each rival (picky bot, Nov 4): per silver given, never "per silver" alone (Cory, Nov 1)
    // the followers in line 1 too: line 2 drops on a tight ring and left only the giving (picky bot, Nov 11)
    partygifts: { verb: 'Give rivals up to 3 silver, +2 @f per silver given', note: 'from the bank' },
    favors: { main: '+2 silver', second: 'rivals give you 1, get 2 silver' }, // off the wheel since Nov 6 (Sweet Nothings)
    // Sweet Nothings, Potluck's place (Cory, Nov 6): +2 per silver given, never "per silver" alone (Cory, Nov 1)
    sweetnothings: { main: '+3 silver', second: 'give rivals up to 3: +2 any per silver given' },  // off the wheel since Nov 11 (Flaunt)
    // Cory's words, as a verb with the rate in line 1: as a gain the words set huge, and a tight ring dropped the rate so
    // it read as a flat +1 of each (picky bot, Nov 11)
    flaunt: { verb: '+1 each other color per 3 silver held', second: 'up to 3' }, // Cory, Nov 11
    // ring II's line 2 drops at some turns of the wheel and left a bare "+3 silver" (picky bot, Nov 4): whole in line 1
    tongue: { verb: '+3 silver, then turn silver into colors' }, // off the wheel since Nov 11 (Buyout)
    // (all in line 1 it ran six lines deep on a tight ring II, past its panel: picky bot, Nov 11; shorter words are Cory's)
    buyout: { verb: "Recruit a rival's member", second: 'pay them its cost in silver' }, // Cory, Nov 11
    // Largesse keeps "+1 @f each": the center ring holds about ten letters there, and "per silver given" dropped line 2
    // whole (picky bot, Nov 4); its hover says per silver you give
    largesse: { verb: 'Give rivals 12 silver', second: '+10 @f', note: 'from the bank' },
  },
  yellow: {
    // Yellow 2.0 (Oct 31): the wheel printed the old Harvest ("+1 yellow, +1 per other color you hold") and only the
    // yellow of Dilute, Big Dilute and Makeover; Melting Pot's long sentence ran off its panel (Claude, gut call, Nov 1)
    harvest: { main: '+3 any', second: 'colors you choose' }, // flat since Nov 11 (Cory)
    // New Blood and Big New Blood (Nov 4): Gather's shape, the condition in line 2
    dilute: { main: '+2 yellow', second: '+3 yellow if you recruit a new color' }, // flat since Nov 11 (Cory)
    // Housewarming took Big New Blood's place (Nov 4, overnight quality loop)
    // cap follows the engine (yellow.js: 4 + MORE since the Nov 8 cut to 5); the panel kept 6 + MORE and said 7 (picky bot, Nov 8)
    housewarming: { main: '+2 yellow', second: `free new-color member, up to ${4 + MORE}` }, // off the wheel since Nov 11 (Makeover)
    // Cory's words on one line: taken, line 2 hides and "Per member color:" stood alone (picky bot, Nov 11)
    meltingpot: { verb: 'Per member color: +1 @f and +1 of it' }, // Cory, Nov 11; grey: 1 of any (hover)
    makeover: { verb: '+4 yellow, then rearrange all', second: 'into any colors' },
    // Cory's words, "rivals discard" moved up to line 1: the center ring showed a bare "+5 yellow" (picky bot, Nov 11)
    offering: { verb: '+5 yellow, each rival discards', second: '2 of each of your member colors' }, // Cory, Nov 11
    bloom: r => ({ main: `+${r} yellow`, second: '+1 of each fewest color', note: run(n => `+${n}`, 'yellow: ') }),
    // Match the current rule: the yellow arrives before the optional swaps.
    // the condition sat in line 3, which the wheel drops: the board read "pick a color: each rival" (Cory, Nov 3: "wtf is
    // this action text"). Whole in line 1 now.
    transmute: { verb: '+1 yellow per minion on the color with the most minions', note: '+1 yellow' }, // Survey (Cory, Nov 5): anyone's minions
    prism: { verb: '+1 each other color', second: 'per 3 yellow', note: 'you keep the yellow' },
    // "Members pay out" was all a tight ring II showed: the gain first, whole in line 1
    gather: { verb: '+1 per member', second: 'in its own color' },
    // the center drops line 2: "other" belongs in line 1 (w4b #11: "+1 each per full set" lost it)
    flourish: { verb: '+1 each other color, per full set' },
  },
  thieves: {
    pickpocket: { verb: 'Steal 1 per minion you placed', second: 'this round, this one included', note: '+1 magenta' }, // Nov 10 (Cory)
    catchup: { main: '+2 magenta', second: 'per rival with more resources', note: '+1 magenta' }, // Nov 10 (Cory)
    // the give-back in line 1 (picky bot, Nov 11: a tight ring showed only the steal)
    swindle: { verb: `Steal a member up to ${6 + MORE} for a shop member`, second: 'you give them one', note: '+1 magenta' }, // Nov 10 (Cory)
    tipoff: { main: '+3 magenta' }, // a plain stand-in for the open round I space (Cory, Nov 10 10:42pm)
    hideout: { verb: 'Steal 1, then safe from steals', second: 'this round', note: '+1 magenta' },
    rob: { verb: 'Steal 4 @f and 4 resources', note: '+1 magenta' }, // Nov 10 (Cory) // any rivals (Nov 5) // Nov 4: followers, not half a pile
    ransom: { verb: `Rival pays or loses a member costing ${6 + MORE} or less`, note: '+1 magenta' },
    heist: { verb: 'Recruit a rival’s member for free', note: '+1 magenta' },
  },
  trading: {
    // "+1 per higher score" (w3b): the players ahead are rivals with more followers
    haggle: (r, now) => ({ main: `+${now ?? 2} white`, second: now == null ? '+1 per rival with more @f' : '2, +1 per rival with more @f' }),
    buylow: { main: '+1 @f', second: 'per 3 white you hold' },
    pawn: r => ({ main: `+${r} @f`, second: 'or 2 white per @f', note: run(n => `+${n}`) }),
    // the gain first: "Sell followers" lost its "3 white each" on ring II whenever the panel was tight (w3 words pass)
    sellhigh: { main: '+3 white', second: 'per follower sold', note: 'up to 2' },
    // "loose" is a rulebook word a newcomer won't remember (w3a #57): what it means, in the glossary's own words
    dividend: (r, now) => (now == null ? { main: '+1 white', second: 'per @f bought or won' } : { main: `+${now} white`, second: '1 per @f bought or won' }),
    // "All for followers" hid that you pay (tester A, live panel r1; the charge is Cory's call): it says so in line 1
    boom: { verb: 'Pay all your resources: +1 @f each', second: 'you may keep your white' },
    // White's Oct 22 spaces (Cory's set): they had no panel words, so the board cut each to its first four words
    nestegg: { main: '+3 white' }, // Nov 11 stand-in (Cory)
    modestmeans: { main: '+2 white', second: '+1 per rival with more members' }, // Nov 11 (Cory)
    stipend: r => ({ main: `+${r + 2} white`, second: `+${r} @f if you recruit a member`, note: run(n => `+${n + 2}`, 'white: ') }), // 3/4/5 since Nov 6 // Gather's shape (Cory, Oct 31)
    // White's three round I spaces lead with their white, then the follower part (Cory, Nov 4: "the white actions are hard
    // to understand what they do at a glance"): Splurge's +1 white sat on line 3, which most rings drop
    splurge: r => ({ main: '+2 white', second: r === 2 ? '+1 @f per resource spent on a member' : '+1 @f per 2 spent on a member' }), // per 1 in round II (Cory, Nov 1)
    // rounds II and III: "then turn up to 2 resources into 2 @f each" was too long for line 2, which dropped whole and
    // left a bare "+1 white" (picky bot, Nov 4): the same rule in fewer words
    exchange: r => ({ main: '+2 white', second: r === 1 ? 'then turn 1 resource into 2 @f' : `turn up to ${r} into 2 @f each` }),
    // the gain leads: on ring II only one line fits, and the two read the same as "Bury one of your members"
    farewell: { verb: 'Discard a member for its cost in @f', note: '+1 white' },
    estatesale: { verb: 'Discard a member for its cost in white', note: '+1 white' },
    writeoff: { verb: 'Give a member to a rival for its cost in white', note: '+1 white' },
    cashin: { verb: 'Turn all your white into @f', note: '+1 white' },
  },
  echo: {
    // whose minion in line 1: taken, line 2 hides, and Cover and Reprise both read "Copy an action" (picky bot, Nov 11)
    hum: { verb: 'Copy an action with a rival’s minion', note: '+1 green' },
    // line 2 runs on from line 1 (picky bot, Nov 11: "…on Green / this one included" read as "Green. This one included")
    chant: { verb: '+1 green per minion on Green', second: 'any player’s, this one included', note: '+1 green' },
    // the hover's own words, "since your last turn" (w4b #22: "a rival just took" said it two ways); "the" as the hover
    // has it (picky bot, Nov 11)
    echo: { verb: 'Copy the previous action', note: '+1 green' },
    // Cory, 2026-10-28: a rival member's On Recruit, not a space
    encore: { verb: 'Copy a rival member’s On Recruit', note: '+1 green' },
    crowd2: { main: '+3 green', second: '+1 @f per minion on Green', note: 'any player’s, this one included' }, // Crowd, Sample's place (Nov 10, Cory)
    // one word for it, the hover's (w3a #22: "redo" here, "copy" there)
    refrain: { verb: 'Copy an action with your minion', note: '+1 green' }, // whose minion in line 1 (picky bot, Nov 11)
    // "not green" in line 1: the center ring drops line 2 (picky bot, Nov 11)
    eternity: { verb: 'Copy your actions on a color, not green', note: '+1 green' }, // your own minions only (Cory, Nov 11 11:20pm)
  },
};

// Spaces whose payout hangs on the table right now: with a state, the panel prints what it pays this turn. The engine's
// own estimate is the payout for these (Name Drop: 1 + the blue members in the shop), so it never drifts from the rule.
// A space that pays per something shows this turn's gain big and its rate small (round 3 skeptic: Bandwagon's "+1●"
// paid +5, Roll Call's +3), for `pid` (the viewer; else whoever's turn it is).
const LIVE = new Set(['gold.windfall', 'purple.windup', 'trading.haggle', 'trading.dividend']);
function liveYield(qid, action, state, pid) {
  if (!state || !LIVE.has(`${qid}.${action.key}`) || typeof action.estimate !== 'function') return null;
  const p = state.players && state.players[pid ?? state.current ?? 0];
  if (!p) return null;
  try { const n = action.estimate(contextFor(state), p); return Number.isFinite(n) ? Math.max(0, Math.round(n)) : null; } catch { return null; }
}

/**
 * { main, verb, second, note } for a space this round (any may be null; note may be { byRound: [a, b, c] }).
 * Pass `state` for the board's live face (what a space pays this turn); without it, the printed rule.
 */
export function panelText(qid, action, round = 1, state = null, pid = null) {
  return richPanel(state, panelFace(qid, action, round, state, pid));
}
/** A panel's lines as this table reads them: under Richer every named member cost moves up 2 (content/price.js). */
export function richPanel(state, t) {
  if (!richUp(state) || !t) return t;
  const out = {};
  for (const k of Object.keys(t)) out[k] = richText(state, t[k]);
  return out;
}
function panelFace(qid, action, round, state, pid) {
  const r = Math.max(1, Math.min(3, round));
  let v = P[qid] && P[qid][action.key];
  if (typeof v === 'function') v = v(r, liveYield(qid, action, state, pid));
  if (v) {
    // the space's own +1 of its color isn't printed on the wheel: the hover shows it as a badge by the name (Cory, Nov 9:
    // "visually better added rather than extra lines of text", not "a visual element repeated many many times on the board")
    let own = null;
    try { own = quadrant(qid).resource; } catch { /* none */ }
    // only a +1 the card prints last, as that +1: Last Call's "+1 purple." leads its card and is its own gain (picky bot,
    // Nov 11: the face stripped it)
    let printed = true;
    try { const def = quadrant(qid).actions.find(x => x.key === action.key); if (def) printed = printsPlus1(def, qid); } catch { /* keep */ }
    const plusOne = t => typeof t === 'string' && own && printed && t === `+1 ${own}`;
    if (plusOne(v.note)) v = { ...v, note: null };
    if (plusOne(v.second)) v = { ...v, second: v.note || null, note: null };
    // a space's flat gain ("+1 white") sat in line 3, which the wheel drops first: on most rings it never showed
    // (text review, 2026-10-23). With line 2 free, it moves up there; line 2 shows wherever the panel has room.
    const flat = typeof v.note === 'string' && /^\+\d+ [a-z]+$/.test(v.note);
    if (flat && !v.second) return { main: v.main || null, verb: v.main ? null : v.verb || null, second: v.note, note: null };
    return { main: v.main || null, verb: v.main ? null : v.verb || null, second: v.second || null, note: v.note || null };
  }
  // the plain spheres: "+2 blue +1 red" is the gain, a clause a line when the panel is narrow
  const [main, ...rest] = String(pipEffect(qid, action, r)).split(' · ');
  return { main, verb: null, second: rest.length ? rest.join(', ') : null, note: null };
}

/**
 * The board's own words for a space on one line, for text off the wheel (the strip's "(…)", the setup hints):
 * "+3 gold, +1 to a rival", "+1 purple per minion to place", "Trade for followers: 1 for 1, up to 4". The follower mark
 * stays "@f" (Rich draws it). The strip used to print an older short table ("4 for followers") the board no longer says.
 */
export function panelWords(qid, action, round = 1) {
  const t = panelText(qid, action, round);
  const one = t.main || t.verb || '';
  if (!t.second) return one;
  // a continuation reads straight on ("Copy a space a rival just took", "+1 purple per minion to place"); a verb's
  // terms after a colon ("Trade for followers: 1 for 1, up to 4"); a second gain after a comma ("+3 gold, +1 to a rival")
  const glue = /^(a|an|as|taken|this|from|per|then|and|on|in|of|for|to|with|unless)\b/.test(t.second) ? ' ' : t.verb ? ': ' : ', ';
  return `${one}${glue}${t.second}`;
}

/** Every entry, for the decipher table and the tests: [qid, key, lines] (round 2). */
export const panelEntries = () => Object.entries(P).flatMap(([qid, m]) => Object.keys(m).map(key => [qid, key, panelText(qid, { key }, 2)]));

/** A line as plain text (for measuring). A { byRound } note (none left here) reads "2 · 4 · 6 by round". */
export const lineText = line => (!line ? '' : typeof line === 'string' ? line : `${line.byRound.join(' · ')} by round`);
