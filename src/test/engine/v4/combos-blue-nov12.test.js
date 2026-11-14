// @vitest-environment node
// Combo tester, Blue's Nov 11 members (Cory, Nov 11 3:41pm-8:49pm) and the grey Consolation Prize (Nov 11 3:56pm):
// Swap Shoppers ("On Use, once per round: swap one of your members for a discard-pile member that costs the same."),
// Thrift Hunters ("Whenever you recruit from the discard pile, +2 followers."), Repeat Customers ("On Recruit: +3 blue,
// then recruit from the discard pile."), Power Shoppers ("Whenever you recruit your second member in a turn, +3
// followers."), Repossessors ("On Use, once per game: discard a rival's member costing up to 8.") and Consolation Prize
// ("Round End: if you win no contest, +5 followers."), played against each other and the cards they touch. Each scene
// checks the outcome against the printed text. Harness: combos-magenta-nov12.test.js's scene/drive/go.
import { describe, it, expect } from 'vitest';
import { createGame, resume, followers, applyMove, contextFor } from '../../../engine/v4/core.js';
import { stray } from './stray.js';
import { defById } from '../../../engine/v4/content/index.js';
const names = (s, i) => s.players[i].members.map(u => defById(s.cards[u].def).name);
// queue: tasks to run instead of turns (e.g. [{ t: 'allPlaced' }] for Round End, [{ t: 'round', r: 3 }] for Round Start)
function scene({ quads, n = 2, seed = 7, round = 3, res = [], members = [], shop = [], turns = null, queue = null, left = 5, rules, prep }) {
  const s = createGame({ seats: Array.from({ length: n }, (_, i) => ({ name: `P${i + 1}`, kind: 'bot' })), seed, quadrants: quads, ...(rules ? { rules } : {}) });
  Object.assign(s, { queue: [], pending: null, round, slots: {}, order: [], log: [] });
  delete s.echo;
  s.players.forEach((p, i) => { p.res = Object.fromEntries(s.resources.map(r => [r, 0])); Object.assign(p.res, res[i] || {}); p.bonus = 0; p.discount = 0; p.left = left; });
  s.pile = [...s.shop, ...s.pile]; s.shop = [];
  const grab = def => { const k = s.pile.findIndex(u => s.cards[u].def === def); if (k < 0) return stray(s, def); return s.pile.splice(k, 1)[0]; };
  members.forEach((list, i) => { for (const d of list || []) { const u = grab(d); s.players[i].members.push(u); s.cards[u].recruitedRound = 0; s.cards[u].recruitedBy = i; } });
  for (const d of shop) s.shop.push(grab(d));
  s.queue = queue ? queue.map(t => ({ ...t })) : (turns || [0, 1, 0, 1, 0, 1]).map(p => ({ t: 'turn', p }));
  if (prep) prep(s);
  return resume(s);
}
// steps: regexes on option label/id, consumed in order when one matches; a pay takes its default; anything else stops
function drive(s, steps, max = 80) {
  const trail = [];
  for (let k = 0; k < max && s.pending; k++) {
    const o = s.pending.options, want = steps[0];
    let hit = want && o.find(x => want.test(x.id) || want.test(x.label || ''));
    if (hit) steps.shift();
    else if (s.pending.kind === 'pay') hit = o.find(x => x.default) || o[0];
    else { trail.push(`STOP @${s.pending.kind} P${s.pending.player + 1}: ${s.pending.prompt} :: ${o.map(x => `${x.id}=${x.label}`).join(' | ')}`); break; }
    trail.push(`> P${s.pending.player + 1} ${s.pending.kind}: ${hit.id} (${hit.label}) @ ${s.pending.prompt}`);
    s = applyMove(s, { player: s.pending.player, option: hit.id });
  }
  return { s, trail };
}
const dump = (title, s, trail) => console.log(`\n===== ${title}\n${trail.join('\n')}\n--- log\n${s.log.join('\n')}\n--- ${s.players.map((p, i) => `${JSON.stringify(p.res)} f${followers(s, p)} b${p.bonus} m${names(s, i).join(',')} left${p.left}`).join(' / ')}`);
const has = (s, re) => s.log.some(l => re.test(l));
const DUMP = !!globalThis.process?.env?.COMBO_DUMP;
const go = (title, sc, steps) => { const r = drive(scene(sc), steps); if (DUMP) dump(title, r.s, r.trail); return r; };
const uidOf = (s, i, def) => s.players[i].members.find(u => s.cards[u].def === def);
// every log line reads as a sentence: no undefined, NaN, [object Object] or empty names
const cleanLog = s => { for (const l of s.log) expect(l).not.toMatch(/undefined|NaN|\[object|null|'s :|\(\)/); };
const mimicPrompt = s => (s.pending?.prompt || '').startsWith('Mimics:');
const mimicLabels = s => (mimicPrompt(s) ? s.pending.options.map(o => o.label) : []);

// put members on the discard pile (the last one ends on top), from the deck or made up
const disc = (...defs) => st => {
  for (const d of defs) {
    const k = st.pile.findIndex(u => st.cards[u].def === d);
    const u = k < 0 ? stray(st, d) : st.pile.splice(k, 1)[0];
    (st.discard ||= []).push(u);
  }
};
const both = (...fs) => st => fs.forEach(f => f(st));
const discNames = s => (s.discard || []).map(u => defById(s.cards[u].def).name);
const QB = ['market', 'trading', 'red', 'yellow'];
const END = [{ t: 'allPlaced' }, { t: 'endRound' }];
const BUY = [{ t: 'buy', p: 0 }];
const lines = (s, re) => s.log.filter(l => re.test(l));
const bonusOf = (s, i) => s.players[i].bonus;

const QE = ['market', 'echo', 'red', 'yellow'];
const QT = ['market', 'thieves', 'red', 'yellow'];
const ss = s => uidOf(s, 0, 'market.swapshoppers');
const useOpt = (s, uid) => (s.pending?.options || []).some(o => o.id === `use:${uid}`);

describe('Swap Shoppers: "On Use, once per round: swap one of your members for a discard-pile member that costs the same."', () => {
  it('an empty discard pile: says so, and the card stays unused for later this round', () => {
    const { s } = go('ss-empty', { quads: QB, round: 2, queue: BUY, members: [['market.swapshoppers', 'red.twins']] }, [/use:/]);
    expect(s.log).toContain("P1's Swap Shoppers: no discard-pile member costs the same as one of yours.");
    expect(names(s, 0)).toEqual(['Swap Shoppers', 'Triplets']);
    expect(s.cards[ss(s)].used).toBeFalsy();
    expect(useOpt(s, ss(s))).toBe(true);
    cleanLog(s);
  });

  it('nothing on the discard pile costs the same (Panel 9 against 7 and 5): no swap', () => {
    const { s } = go('ss-nocost', { quads: QB, round: 2, queue: BUY, members: [['market.swapshoppers', 'red.twins']], prep: disc('red.panel') }, [/use:/]);
    expect(s.log).toContain("P1's Swap Shoppers: no discard-pile member costs the same as one of yours.");
    expect(discNames(s)).toEqual(['Panel']);
    expect(names(s, 0)).toEqual(['Swap Shoppers', 'Triplets']);
  });

  it('only same-cost pairs are offered; yours goes to the discard pile, theirs joins your cult', () => {
    const { s } = go('ss-basic', { quads: QB, round: 2, queue: BUY, members: [['market.swapshoppers', 'red.twins']], prep: disc('red.movementpenalty', 'red.bigfamily') }, [/use:/]);
    expect(s.pending.options.map(o => o.label)).toEqual(['Triplets ↔ Deprogrammers (5)', 'Don’t swap']);
    const { s: t } = drive(s, [/Triplets ↔/]);
    expect(names(t, 0)).toEqual(['Swap Shoppers', 'Deprogrammers']);
    expect(discNames(t)).toEqual(['Big Family', 'Triplets']);
    expect(t.log).toContain("P1's Swap Shoppers: swaps Triplets for Deprogrammers from the discard pile.");
    expect(t.cards[ss(t)].used).toBe(true);
    cleanLog(t);
  });

  it("Leavetakers on the owner (\"Whenever one of your members leaves your cult, +2 white.\"): the swapped-out member pays +2 white", () => {
    const { s } = go('ss-leave', { quads: QB, round: 2, queue: BUY, members: [['market.swapshoppers', 'trading.leavetakers', 'red.twins']], prep: disc('red.movementpenalty') }, [/use:/, /Triplets ↔/]);
    expect(s.log).toContain("P1's Leavetakers: Triplets left: +2 white.");
    expect(s.players[0].res.white).toBe(2);
    cleanLog(s);
  });

  it('swapping out Leavetakers itself (7 for Thrift Hunters 7): it leaves your cult, so +2 white', () => {
    const { s } = go('ss-leave-self', { quads: QB, round: 2, queue: BUY, members: [['market.swapshoppers', 'trading.leavetakers']], prep: disc('market.thrifthunters') }, [/use:/, /Leavetakers ↔ Thrift/]);
    expect(names(s, 0)).toEqual(['Swap Shoppers', 'Thrift Hunters']);
    expect(s.log).toContain("P1's Leavetakers: Leavetakers left: +2 white.");
    expect(s.players[0].res.white).toBe(2);
  });

  it('once per round: not offered again the same round, offered again after Round Start', () => {
    const { s } = go('ss-round', { quads: QB, round: 2, queue: [{ t: 'buy', p: 0 }, { t: 'round', r: 3 }], res: [{ blue: 1 }], members: [['market.swapshoppers', 'red.twins']], prep: disc('red.movementpenalty', 'red.loyalists') },
      [/use:/, /Triplets ↔/]);
    // the same buy step after the swap: no second use
    expect(s.cards[ss(s)].used).toBe(true);
    expect(useOpt(s, ss(s))).toBe(false);
    const { s: t } = drive(s, [/^pass$/]);
    expect(t.round).toBe(3);
    expect(t.cards[ss(t)].used).toBeFalsy();
  });

  it('a used once-per-game member (Repossessors) swapped onto the discard pile stays used for the rival who recruits it (Cory, Nov 4: "once per game is once for the card")', () => {
    const { s } = go('ss-usedgame', { quads: QB, round: 2, queue: [{ t: 'buy', p: 0 }, { t: 'turn', p: 1 }], res: [{}, { blue: 20, red: 20 }],
      members: [['market.swapshoppers', 'market.repossessors'], ['red.twins']],
      prep: both(disc('echo.mimics'), st => { st.cards[uidOf(st, 0, 'market.repossessors')].used = true; }) },
      [/use:/, /Repossessors ↔ Mimics/, /Recruit Twice/, /Repossessors/, /pay:/]);
    expect(names(s, 0)).toEqual(['Swap Shoppers', 'Mimics']);
    const repo = uidOf(s, 1, 'market.repossessors');
    expect(repo).toBeDefined();
    expect(s.cards[repo].used).toBe(true);
    expect(useOpt(s, repo)).toBe(false);
    cleanLog(s);
  });

  it('Loyalists on the owner ("Your other members can’t be swapped."): only Loyalists itself can be swapped (was: every member offered; fixed)', () => {
    const { s } = go('ss-loyal', { quads: QB, round: 2, queue: BUY, members: [['market.swapshoppers', 'red.loyalists', 'red.twins']], prep: disc('red.movementpenalty') }, [/use:/]);
    expect(s.pending.options.map(o => o.label)).toEqual(['Loyalists ↔ Deprogrammers (5)', 'Don’t swap']);
  });

  // Cory's calls (Nov 1: "A member you get by your own swap is recruited (its On Recruit fires)"; Nov 4: "Any time you bring
  // a minion into your own cult by your own choice is a recruit"): the member Swap Shoppers takes is your recruit
  // (was: a plain arrival, no recruit triggers; fixed Nov 12).
  it('the member taken from the discard pile is your recruit: Thrift Hunters pays +2', () => {
    const { s } = go('ss-thrift', { quads: QB, round: 2, queue: BUY, members: [['market.swapshoppers', 'market.thrifthunters', 'red.twins']], prep: disc('red.movementpenalty') }, [/use:/, /Triplets ↔/]);
    expect(names(s, 0)).toContain('Deprogrammers');
    expect(s.log).toContain("P1's Thrift Hunters: Deprogrammers from the discard pile, +2 followers.");
  });
  it('a yellow member swapped in: Matchmaker and Brethren pay, and Power Shoppers counts it as the first member that turn', () => {
    const { s } = go('ss-recruit-hooks', { quads: QB, round: 2, queue: [{ t: 'buy', p: 0 }, { t: 'buy', p: 0 }], res: [{ red: 10 }], shop: ['red.intern'],
      members: [['market.swapshoppers', 'yellow.matchmaker', 'red.brethren', 'market.powershoppers', 'silver.dowager']], prep: disc('yellow.exchangestudents') },
      [/use:/, /Dowager ↔ Exchange Students/, /./, /./, /Intern/, /pay:/]);
    expect(names(s, 0)).toEqual(['Swap Shoppers', 'Matchmaker', 'Brethren', 'Power Shoppers', 'Exchange Students', 'Intern']);
    expect(has(s, /Matchmaker/)).toBe(true);
    expect(has(s, /Brethren/)).toBe(true);
    expect(lines(s, /Power Shoppers/)).toEqual(["P1's Power Shoppers: a second member this turn, +3 followers."]);
    cleanLog(s);
  });
  it('Repeat Customers swapped in (8 for Power Shoppers 8): its On Recruit gives +3 blue', () => {
    const { s } = go('ss-rc', { quads: QB, round: 2, queue: BUY, members: [['market.swapshoppers', 'market.powershoppers']], prep: disc('market.repeatcustomers') }, [/use:/, /Power Shoppers ↔/]);
    expect(names(s, 0)).toContain('Repeat Customers');
    expect(s.players[0].res.blue).toBe(3);
  });
});

describe('Thrift Hunters ("Whenever you recruit from the discard pile, +2 followers.") and Repeat Customers ("On Recruit: +3 blue, then recruit from the discard pile.")', () => {
  it('Recruit Twice takes Repeat Customers off the discard pile, and its On Recruit takes Triplets: +2 followers twice, +3 blue', () => {
    const { s } = go('th-rc', { quads: QB, round: 2, turns: [0], res: [{ red: 20, blue: 20 }], members: [['market.thrifthunters']], prep: disc('red.twins', 'market.repeatcustomers') },
      [/Recruit Twice/, /Repeat Customers/, /pay:7-0-1-0/, /Triplets/, /pay:3-0-2-0/]);
    expect(names(s, 0)).toEqual(['Thrift Hunters', 'Repeat Customers', 'Triplets']);
    expect(lines(s, /Thrift Hunters/)).toEqual(["P1's Thrift Hunters: Repeat Customers from the discard pile, +2 followers.", "P1's Thrift Hunters: Triplets from the discard pile, +2 followers."]);
    expect(s.log).toContain("P1's Repeat Customers: +3 blue.");
    expect(bonusOf(s, 0)).toBe(4);
    expect(s.players[0].res).toMatchObject({ blue: 20 + 5 - 7 + 3 - 3, red: 20 - 1 - 2 });
    cleanLog(s);
  });

  it('Repeat Customers from the shop: no Thrift Hunters for it, +2 for the member it takes off the discard pile', () => {
    const { s } = go('th-rc-shop', { quads: QB, round: 2, queue: BUY, res: [{ red: 20, blue: 20 }], shop: ['market.repeatcustomers'], members: [['market.thrifthunters']], prep: disc('red.twins') },
      [/Repeat Customers/, /pay:/, /Triplets/, /pay:/]);
    expect(lines(s, /Thrift Hunters/)).toEqual(["P1's Thrift Hunters: Triplets from the discard pile, +2 followers."]);
    expect(bonusOf(s, 0)).toBe(2);
  });

  it('Repeat Customers with an empty discard pile: +3 blue, and says the pile is empty', () => {
    const { s } = go('rc-empty', { quads: QB, round: 2, queue: BUY, res: [{ red: 20, blue: 20 }], shop: ['market.repeatcustomers'], members: [['market.thrifthunters']] }, [/Repeat Customers/, /pay:4-0-4-0/]);
    expect(s.log).toContain("P1's Repeat Customers: +3 blue.");
    expect(s.log).toContain("P1's Repeat Customers: the discard pile is empty.");
    expect(s.players[0].res.blue).toBe(20 - 4 + 3);
    expect(bonusOf(s, 0)).toBe(0);
  });

  it("Mimics (\"On Recruit: use the On Recruit of any member in play.\") copying a rival's Repeat Customers: +3 blue and a discard-pile recruit, which Thrift Hunters pays", () => {
    const { s } = go('mimic-rc', { quads: QE, round: 2, queue: BUY, res: [{ red: 20, blue: 2, green: 9 }], shop: ['echo.mimics'], members: [['market.thrifthunters'], ['market.repeatcustomers']], prep: disc('red.twins') },
      [/Mimics/, /pay:/, /Repeat Customers/, /Triplets/, /pay:0-0-5-0/]);
    expect(s.log).toContain("P1's Mimics uses P2's Repeat Customers' On Recruit.");
    expect(names(s, 0)).toEqual(['Thrift Hunters', 'Mimics', 'Triplets']);
    expect(s.players[0].res.blue).toBe(2 + 3);
    expect(s.log).toContain("P1's Thrift Hunters: Triplets from the discard pile, +2 followers.");
    expect(bonusOf(s, 0)).toBe(2);
    expect(names(s, 1)).toEqual(['Repeat Customers']);
    cleanLog(s);
  });

  it('a free recruit from the shop (Talent Scouts) is not from the discard pile: no Thrift Hunters', () => {
    const { s } = go('th-scouts', { quads: QB, round: 2, queue: BUY, shop: ['red.twins'], members: [['market.thrifthunters', 'yellow.headhunters']] }, [/use:/, /Triplets/]);
    expect(names(s, 0)).toContain('Triplets');
    expect(has(s, /Thrift Hunters/)).toBe(false);
  });

  it("3 players: Repossessors (\"On Use, once per game: discard a rival's member costing up to 8.\") offers both rivals' members up to 8, the victim's Leavetakers pays, and Recruit Twice takes it back for Thrift Hunters", () => {
    const { s } = go('repo-thrift', { quads: QB, n: 3, round: 2, queue: [{ t: 'buy', p: 0 }, { t: 'turn', p: 0 }], res: [{ red: 20, blue: 20 }],
      members: [['market.repossessors', 'market.thrifthunters'], ['trading.leavetakers', 'red.bigfamily', 'red.panel'], ['red.twins']] }, [/use:/]);
    expect(s.pending.options.map(o => o.label)).toEqual(["P2's Leavetakers (7)", "P2's Big Family (8)", "P3's Triplets (5)"]);
    const { s: t } = drive(s, [/Big Family/, /^pass$/, /Recruit Twice/, /Big Family/, /pay:/]);
    expect(t.log).toContain("P1's Repossessors: discards P2's Big Family.");
    expect(t.log).toContain("P2's Leavetakers: Big Family left: +2 white.");
    expect(t.players[1].res.white).toBe(2);
    expect(names(t, 0)).toEqual(['Repossessors', 'Thrift Hunters', 'Big Family']);
    expect(t.log).toContain("P1's Thrift Hunters: Big Family from the discard pile, +2 followers.");
    expect(useOpt(t, uidOf(t, 0, 'market.repossessors'))).toBe(false);
    cleanLog(t);
  });

  it('Thrift Hunters itself taken off the discard pile does not pay for itself (the code reads "whenever" as after it joins; open question)', () => {
    const { s } = go('th-self', { quads: QB, round: 2, turns: [0], res: [{ red: 20, blue: 20 }], prep: disc('market.thrifthunters') }, [/Recruit Twice/, /Thrift Hunters/, /pay:/]);
    expect(names(s, 0)).toEqual(['Thrift Hunters']);
    expect(has(s, /Thrift Hunters:/)).toBe(false);
  });
});

describe('Power Shoppers: "Whenever you recruit your second member in a turn, +3 followers."', () => {
  it('Spree takes two off the discard pile (Thrift Hunters too): +2, +2, +3; a third member that turn pays no more', () => {
    const { s } = go('ps-spree', { quads: QB, round: 3, turns: [0], res: [{ red: 30, blue: 20 }], shop: ['red.intern'], members: [['market.thrifthunters', 'market.powershoppers']], prep: disc('red.twins', 'red.bigfamily') },
      [/Spree/, /Triplets/, /pay:/, /Big Family/, /pay:/, /Intern/, /pay:/]);
    expect(names(s, 0)).toEqual(['Thrift Hunters', 'Power Shoppers', 'Triplets', 'Big Family', 'Intern']);
    expect(lines(s, /Power Shoppers/)).toEqual(["P1's Power Shoppers: a second member this turn, +3 followers."]);
    expect(bonusOf(s, 0)).toBe(2 + 2 + 3);
    cleanLog(s);
  });

  it('a free recruit (Talent Scouts) is the first, a paid shop member the second: +3', () => {
    const { s } = go('ps-scouts', { quads: QB, round: 2, queue: [{ t: 'buy', p: 0 }, { t: 'buy', p: 0 }], res: [{ red: 20 }], shop: ['red.twins', 'red.intern'], members: [['market.powershoppers', 'yellow.headhunters']] },
      [/use:/, /Triplets/, /Intern/, /pay:/]);
    expect(s.log).toContain("P1's Talent Scouts: recruits Triplets for free.");
    expect(lines(s, /Power Shoppers/)).toEqual(["P1's Power Shoppers: a second member this turn, +3 followers."]);
    expect(bonusOf(s, 0)).toBe(3);
  });

  it('buying followers is not a member: Recruit Twice then +1 follower pays nothing', () => {
    const { s } = go('ps-followers', { quads: QB, round: 2, turns: [0], res: [{ red: 20, blue: 20 }], members: [['market.powershoppers']], prep: disc('red.twins') },
      [/Recruit Twice/, /Triplets/, /pay:/, /tier:small/, /pay:/]);
    expect(has(s, /bought 1 follower/)).toBe(true);
    expect(has(s, /Power Shoppers/)).toBe(false);
    expect(bonusOf(s, 0)).toBe(1);
  });

  it('Exchange Students\' swap-in counts as the second (Cory, Nov 1: "A member you get by your own swap is recruited")', () => {
    const { s } = go('ps-xs', { quads: QB, round: 2, queue: BUY, res: [{ red: 20, yellow: 20 }], shop: ['yellow.exchangestudents'], members: [['market.powershoppers', 'red.twins'], ['red.seatfiller']] },
      [/Exchange Students/, /pay:/, /Triplets ↔/]);
    expect(s.log).toContain("P1's Exchange Students: swaps Triplets for P2's Seat Filler.");
    expect(lines(s, /Power Shoppers/)).toEqual(["P1's Power Shoppers: a second member this turn, +3 followers."]);
  });

  it("Double Agent's swap-in counts as the second, even though Double Agent itself leaves", () => {
    const { s } = go('ps-da', { quads: QT, round: 2, queue: BUY, res: [{ red: 20, magenta: 20 }], shop: ['thieves.doubleagent'], members: [['market.powershoppers'], ['red.bigfamily']] },
      [/Double Agent/, /pay:/, /Big Family/]);
    expect(names(s, 0)).toEqual(['Power Shoppers', 'Big Family']);
    expect(names(s, 1)).toEqual(['Double Agent']);
    expect(lines(s, /Power Shoppers/)).toEqual(["P1's Power Shoppers: a second member this turn, +3 followers."]);
  });

  it('Power Shoppers recruited as the second member: the third pays nothing (was: the third paid "a second member this turn"; fixed)', () => {
    const { s } = go('ps-asSecond', { quads: QB, round: 3, turns: [0], res: [{ red: 30, blue: 30 }], shop: ['red.intern'], prep: disc('red.twins', 'market.powershoppers') },
      [/Spree/, /Triplets/, /pay:/, /Power Shoppers/, /pay:/, /Intern/, /pay:/]);
    expect(names(s, 0)).toEqual(['Triplets', 'Power Shoppers', 'Intern']);
    expect(has(s, /Power Shoppers:/)).toBe(false);
    expect(bonusOf(s, 0)).toBe(0);
  });

  it('Power Shoppers recruited first, then a second: +3', () => {
    const { s } = go('ps-first', { quads: QB, round: 2, queue: [{ t: 'buy', p: 0 }, { t: 'buy', p: 0 }], res: [{ red: 30, blue: 30 }], shop: ['market.powershoppers', 'red.intern'] },
      [/Power Shoppers/, /pay:/, /Intern/, /pay:/]);
    expect(lines(s, /Power Shoppers:/)).toEqual(["P1's Power Shoppers: a second member this turn, +3 followers."]);
  });

  it('Repeat Customers (first) takes Triplets off the discard pile (second): +3', () => {
    const { s } = go('ps-rc', { quads: QB, round: 2, queue: BUY, res: [{ red: 20, blue: 20 }], shop: ['market.repeatcustomers'], members: [['market.powershoppers']], prep: disc('red.twins') },
      [/Repeat Customers/, /pay:/, /Triplets/, /pay:/]);
    expect(names(s, 0)).toEqual(['Power Shoppers', 'Repeat Customers', 'Triplets']);
    expect(lines(s, /Power Shoppers/)).toEqual(["P1's Power Shoppers: a second member this turn, +3 followers."]);
    expect(bonusOf(s, 0)).toBe(3);
  });

  it('one member a turn on two turns: never the second', () => {
    const { s } = go('ps-two-turns', { quads: QB, round: 2, queue: [{ t: 'turn', p: 0 }, { t: 'turn', p: 0 }], res: [{ red: 30, blue: 30 }], shop: ['red.twins', 'red.intern'], members: [['market.powershoppers']] },
      [/Word of Mouth/, /Triplets/, /pay:/, /Modest Means/, /Intern/, /pay:/]);
    expect(names(s, 0)).toEqual(expect.arrayContaining(['Triplets', 'Intern']));
    expect(has(s, /Power Shoppers/)).toBe(false);
  });
});

describe('Consolation Prize: "Round End: +2 followers per contest you don\u2019t win." (Cory, Nov 12)', () => {
  const cp = s => lines(s, /Consolation Prize/);
  it('3 players, two owners: the one who won Most blue loses 3 of the 4 contests (+6), the other all 4 (+8)', () => {
    const { s } = go('cp-3p', { quads: QB, n: 3, round: 1, queue: END, res: [{}, { blue: 3 }, {}], members: [['benders.sorelosers'], ['benders.sorelosers'], []] }, []);
    expect(cp(s)).toEqual(["P1's Consolation Prize: didn\u2019t win 4 contests, +8 followers.", "P2's Consolation Prize: didn\u2019t win 3 contests, +6 followers."]);
    cleanLog(s);
  });

  it('a tied contest counts as a win: both tie Most blue, so each loses the other 3 (+6)', () => {
    const { s } = go('cp-tie', { quads: QB, round: 1, queue: END, res: [{ blue: 3 }, { blue: 3 }], members: [['benders.sorelosers'], ['benders.sorelosers']] }, []);
    expect(cp(s)).toEqual(["P1's Consolation Prize: didn\u2019t win 3 contests, +6 followers.", "P2's Consolation Prize: didn\u2019t win 3 contests, +6 followers."]);
  });

  it('4 players, nobody scores any contest (all hold 0): nobody won them, so both owners +8', () => {
    const { s } = go('cp-none', { quads: QB, n: 4, round: 1, queue: END, members: [['benders.sorelosers'], [], [], ['benders.sorelosers']] }, []);
    expect(has(s, /No one scored/)).toBe(true);
    expect(cp(s)).toEqual(["P1's Consolation Prize: didn\u2019t win 4 contests, +8 followers.", "P4's Consolation Prize: didn\u2019t win 4 contests, +8 followers."]);
    expect([0, 1, 2, 3].map(i => bonusOf(s, i))).toEqual([8, 0, 0, 8]);
  });

  it('contests by color: Fewest members (White) is a win, so fewer lost', () => {
    const { s } = go('cp-bycolor', { quads: QB, round: 1, queue: END, rules: { contests: 'byColor' }, members: [['benders.sorelosers'], ['red.intern', 'red.twins']] }, []);
    expect(has(s, /Fewest members: P1 \+4/)).toBe(true);
    expect(cp(s)).toHaveLength(1);
    expect(cp(s)[0]).toMatch(/^P1's Consolation Prize: didn\u2019t win [1-3] contests?, \+[2-6] followers\.$/);
  });
});
