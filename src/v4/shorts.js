import { quadrant } from '../engine/v4/index.js';
import { MORE } from '../engine/v4/content/price.js';

/**
 * A contest's rule as the rim and the round's cards say it: a rule that counts a resource names it as one ("Most
 * purple" → "Most purple resources"). "Most purple" beside "Most magenta members" left "most what?" (live panel r1).
 */
export function ruleWords(qid, rule) {
  let q = null;
  try { q = quadrant(qid); } catch { return rule; }
  const held = q && q.scoring && /^the \w+ you hold when the round ends$/.test(q.scoring.counts || '');
  return held && String(rule).trim().toLowerCase() === `most ${q.resource}` ? `${rule} resources` : rule;
}

// What a space does, in a few words, printed on the space itself so the board reads without hovering (Cory,
// 2026-10-14: "actions readable without hover"). Resource words become symbols via <Rich>. The full text and the
// exact "you'd get" stay in the hover card. A value that grows by round is shown for the current round.
// Keys are "<sphere id>.<action key>". A space with no entry here falls back to its first clause (shortEffect).
const S = {
  gold: {
    jv: '+3 gold · 1 gold to a rival', rush: r => `+${2 * r} gold`, discount: '−4 cost', steal: 'steal 3 gold', windfall: '+1 gold per member', strike: 'double gold',
  },
  red: {
    borrow: 'recruit the cheapest, free; discard it at round end; +1 red', trending: '+1 of the shop’s most common color per member of it; +1 red', gather: '+3 red; +4 followers if you recruit a color you have; +1 red',
    evenswap: 'use a shop member’s On Recruit; +2 red', turnout: r => `+${r + 1} red; +1 follower per 3 paid for a member this turn`, hire: 'recruit the top of the deck; each rival +1 red; +1 red', opendoor: 'recruit the cheapest in the shop, free; +1 red', hireup: 'promote: one costing up to 3 more; +3 red', trade: 'demote: one costing up to 3 less; +3 red', take: `recruit one costing ${9 + MORE} or less, free; +1 red`,
  },
  blue: { a1: '+3 blue', a2: '+2 blue +1 red', a3: '+2 blue +1 green', a4: '+5 blue', a5: '+4 blue +1 gold', a6: '+8 blue' },
  green: { a1: '+3 green', a2: '+2 green +1 gold', a3: '+2 green +1 blue', a4: '+5 green', a5: '+4 green +1 red', a6: '+8 green' },
  purple: {
    hourly: r => `+${3 + r} purple`, catchup: '+1 purple, +1 per rival who placed more', windup: '+1 purple per minion you placed', planahead: '+1 purple per minion left', overtime: '1 extra turn', lastcall: '+1 follower and +1 purple per minion left; take the Goes Last token with the rest on it; +1 purple', skip: r => `+${r + 3} purple; take the Goes Last token with your other minions on it`, onaroll: '+2 purple per turn in a row; take the Goes Last token', holdup: r => `+${r + 1} purple, whoever is next skips, even you`, crowdin: '+4 purple, +1 minion this round', rally: '+2 purple, two turns after this one', again: r => `+${r + 1} purple, your next turn right after this one`,
  },
  silver: {
    toast: r => `+${3 * r} silver · others +${r} silver`, polish: '2 silver → 4 any', partygifts: 'give rivals up to 3 silver, +2 followers each', favors: '+2 silver · each rival gives 1', sweetnothings: '+3 silver · give rivals up to 3, +2 any each', tongue: '+3 silver · turn into colors', largesse: 'give rivals 12 silver, +10 followers',
  },
  yellow: {
    harvest: r => `+${r + 2} any, colors you choose`, bloom: r => `+${r} yellow · +1 of your fewest`, transmute: '+1 yellow per minion on the busiest color · +1 yellow', prism: '+1 each per 3 yellow', gather: '1 per member', flourish: '+1 each per set',
  },
  market: {
    testdrive: 'discard a shop member, use its effect now; +1 blue', markdown: 'recruit from the discard pile now, 2 less; +3 blue', wordofmouth: '+1 follower per 2 members; +1 blue',
    bargain: r => `+${r + 1} blue; may send a shop member to the discard pile, then refill`, restock: '3 shop members to the discard pile; +1 of each one’s color; +1 blue', showroom: r => `peek at 4, may recruit one; +${r + 2} blue`, clearance: 'recruit from the discard pile now; +5 blue', pricecheck: 'bury one, half its cost in blue; +1', spree: 'recruit two from the discard pile now; +7 blue',
  },
  thieves: {
    pickpocket: 'steal 1 per minion you placed this round; +1 magenta', catchup: '+2 magenta per rival with more resources; +1 magenta', swindle: `steal a member costing up to ${6 + MORE}, give them a shop member; +1 magenta`, tipoff: r => `+${r + 1} magenta; +${r} followers if you recruit a member this turn`, hideout: 'steal 1; rivals can’t steal from you this round; +1 magenta', rob: 'steal 4 followers and 4 resources; +1 magenta', ransom: `a rival picks a member costing ${6 + MORE} or less, then pays its cost or loses it; +1 magenta`, heist: 'recruit a rival’s member; +1 magenta',
  },
  trading: {
    stipend: r => `+${r + 2} white; +${r} followers if you recruit a member this turn`, splurge: r => `+1 follower per ${r === 2 ? 1 : 2} paid for a member this turn; +2 white`, exchange: r => `turn up to ${r} into 2 followers each; +2 white`, farewell: 'discard a member for its cost in followers; +1 white', estatesale: 'discard a member for its cost in white; +1 white', cashin: 'all your white into followers; +1 white',
    haggle: '+2 white, +1 per leader', buylow: '+1 follower per 3 white', pawn: r => `${r} follower · may take 2 white each instead`, sellhigh: 'sell 2 for 6 white', dividend: '+1 white per follower bought or won', boom: 'all for followers',
  },
  echo: { hum: 'copy an action with a rival’s minion; +1 green', chant: '+1 green per minion on Green; +1 green', echo: 'copy previous; +1 green', encore: 'copy a rival member’s On Recruit; +1 green', crowd2: '+1 follower per minion on Green; +3 green', refrain: 'copy your action; +1 green', eternity: 'copy every action on one color (not green); +1 green' },
};

// The shortest form, for the inner rings. Two symbols only (Cory, 2026-10-15: "just simplify visual language
// everywhere"): resource words become dots and "N followers" the follower mark; everything else is a plain word.
const PIPS = {
  gold: { steal: 'steal 3 gold', windfall: '+1 gold per member', strike: 'double gold' },
  red: { hireup: 'promote a member; +3 red', trade: 'demote a member; +3 red', take: `recruit one costing ${9 + MORE} or less, free` },
  purple: { lastcall: '+1 follower, +1 purple per minion left; take the Goes Last token' },
  silver: { partygifts: 'give rivals up to 3 silver, +2 followers each', largesse: 'give rivals 12 silver, +10 followers' },
  yellow: { gather: '+1 per member' },
  market: { clearance: 'recruit from the discard', pricecheck: 'bury for half its cost', spree: 'recruit two from the discard', wordofmouth: '+1 follower per 2 members' },
  thieves: { rob: 'steal 4 followers and 4 resources', swindle: 'steal a member, give a shop member', ransom: 'rival pays or loses a member', heist: 'recruit a rival’s member' },
  trading: { stipend: r => `+${r + 2} white; +${r} if you recruit a member`, splurge: r => `+1 follower per ${r === 2 ? 1 : 2} paid`, exchange: r => `up to ${r} into 2 followers each`, farewell: 'discard one for followers', estatesale: 'discard one for white', cashin: 'all white for followers', sellhigh: 'sell 2 for 6 white', dividend: '+1 white per follower', boom: 'all for followers' },
  echo: { refrain: 'copy yours', eternity: 'copy a color’s actions' },
};
/** The pips-first form of a space's yield (falls back to the few words). */
export function pipEffect(qid, action, round = 1) {
  const v = PIPS[qid] && PIPS[qid][action.key];
  if (typeof v === 'function') return v(Math.max(1, Math.min(3, round)));
  return typeof v === 'string' ? v : shortEffect(qid, action, round);
}

/** The few words printed on a space. `round` is the current round (1–3). */
export function shortEffect(qid, action, round = 1) {
  const v = S[qid] && S[qid][action.key];
  if (typeof v === 'function') return v(Math.max(1, Math.min(3, round)));
  if (typeof v === 'string') return v;
  if (action.short) return action.short;
  // fallback: the first clause, at most 4 words
  return String(action.text || action.name).split(/[,.;:]/)[0].split(/\s+/).slice(0, 4).join(' ');
}
