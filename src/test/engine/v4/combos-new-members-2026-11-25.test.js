// @vitest-environment node
// Combo scenes for the members added Nov 24-25 (combo-probe step 3): each new member against the copy, give, swap or
// shop-return cards most likely to break it, at round III with the copies and gifts already in place. Every scene checks
// the numbers the printed text implies and that every change is named in the log. Harness: combos-red-nov12's.
// COMBO_DUMP=1 prints each scene's moves and log.
import { describe, it, expect } from 'vitest';
import { createGame, resume, followers, applyMove } from '../../../engine/v4/core.js';
import { stray } from './stray.js';
import { defById } from '../../../engine/v4/content/index.js';

const names = (s, i) => s.players[i].members.map(u => defById(s.cards[u].def).name);
const uidOf = (s, def, i = null) => (i == null ? Object.keys(s.cards).map(Number) : s.players[i].members).find(u => s.cards[u].def === def);
function scene({ quads, n = 2, seed = 7, round = 3, res = [], members = [], shop = [], turns = null, queue = null, left = 5, rules, prep, bonus = [] }) {
  const s = createGame({ seats: Array.from({ length: n }, (_, i) => ({ name: `P${i + 1}`, kind: 'bot' })), seed, quadrants: quads, ...(rules ? { rules } : {}) });
  Object.assign(s, { queue: [], pending: null, round, slots: {}, squats: {}, order: [], log: [] });
  delete s.echo;
  s.players.forEach((p, i) => { p.res = Object.fromEntries(s.resources.map(r => [r, 0])); Object.assign(p.res, res[i] || {}); p.bonus = bonus[i] || 0; p.discount = 0; p.left = left; });
  s.pile = [...s.shop, ...s.pile]; s.shop = [];
  const grab = def => { const k = s.pile.findIndex(u => s.cards[u].def === def); if (k < 0) return stray(s, def); return s.pile.splice(k, 1)[0]; };
  members.forEach((list, i) => { for (const d of list || []) { const u = grab(d); s.players[i].members.push(u); s.cards[u].recruitedRound = 0; s.cards[u].recruitedBy = i; } });
  for (const d of shop) s.shop.push(grab(d));
  s.queue = queue ? queue.map(t => ({ ...t })) : (turns || [0, 1, 0, 1, 0, 1]).map(p => ({ t: 'turn', p }));
  if (prep) prep(s);
  return resume(s);
}
// auto: rival (P2) prompts are answered without using up a step: pass when it can, else the first option
function drive(s, steps, max = 120, auto = false, fill = false) {
  const trail = [];
  for (let k = 0; k < max && s.pending; k++) {
    const o = s.pending.options, want = auto && s.pending.player !== 0 ? null : steps[0];
    let hit = want && o.find(x => want.test(x.id) || want.test(x.label || ''));
    if (!hit && auto && s.pending.player !== 0) hit = o.find(x => x.id === 'pass') || o[0];
    if (!hit && fill && !steps.length && s.pending.kind !== 'pay') hit = o.find(x => x.id === 'pass') || o[0];
    if (hit && want && !(fill && !steps.length)) steps.shift();
    else if (hit) { /* rival auto answer */ }
    else if (s.pending.kind === 'pay') hit = o.find(x => x.default) || o[0];
    else { trail.push(`STOP @${s.pending.kind} P${s.pending.player + 1}: ${s.pending.prompt} :: ${o.map(x => `${x.id}=${x.label}`).join(' | ')}`); break; }
    trail.push(`> P${s.pending.player + 1} ${s.pending.kind}: ${hit.id} (${hit.label}) @ ${s.pending.prompt}`);
    s = applyMove(s, { player: s.pending.player, option: hit.id });
  }
  return { s, trail };
}
const DUMP = !!globalThis.process?.env?.COMBO_DUMP;
const go = (title, sc, steps) => {
  const r = drive(scene(sc), steps, 160, !!sc.auto, !!sc.fill);
  if (DUMP) console.log(`\n===== ${title}\n${r.trail.join('\n')}\n--- log\n${r.s.log.join('\n')}\n--- ${r.s.players.map((p, i) => `${JSON.stringify(p.res)} f${followers(r.s, p)} b${p.bonus} m${names(r.s, i).join(',')}`).join(' / ')}`);
  return r;
};
// skip the rest of the round's turns: go straight to its end
const finish = s => { s.queue = END.map(x => ({ ...x })); s.pending = null; return resume(s); };
const has = (s, re) => s.log.some(l => re.test(l));
const lines = (s, re) => s.log.filter(l => re.test(l));
const tot = p => Object.values(p.res).reduce((a, b) => a + b, 0);
const BUY1 = [{ t: 'buy', p: 1 }];
const RICH = { red: 30, magenta: 30, blue: 30, yellow: 30, green: 30, white: 30, silver: 30, purple: 30 };


const END = [{ t: 'allPlaced' }, { t: 'endRound' }];
const ALL4 = { red: 3, blue: 3, magenta: 3, green: 3 };

describe('1. Tax Men ("Whenever a rival recruits a member costing 7 or more, they give you 2 resources of their choice.") copied', () => {
  const Q = ['thieves', 'echo', 'red', 'market'];
  const rival = (members, shop, extra = {}) => ({ quads: Q, queue: [{ t: 'buy', p: 1 }], res: [{}, { red: 30, blue: 30, magenta: 30, green: 30 }], shop, members, ...extra });
  const RED4 = [/color:red/, /color:red/, /color:red/, /color:red/];
  it('alone: a rival recruiting an 8-cost member pays 2, one at a time, each named in the log', () => {
    const { s } = go('tax-alone', rival([['thieves.accomplice'], ['red.intern']], ['benders.spoilsports']), [/Spoilsport/, /pay:/, /color:red/, /color:red/]);
    expect(s.players[0].res.red).toBe(2);
    expect(lines(s, /gave P1 1 red \(P1's Tax Men\)/)).toHaveLength(2);
  });
  it('a 6-cost recruit pays nothing (threshold is 7)', () => {
    const { s } = go('tax-six', rival([['thieves.accomplice'], ['red.intern']], ['benders.comforterSix'].slice(0, 0).concat(['benders.sorelosers'])), [/Comforter/, /pay:/]);
    expect(tot(s.players[0])).toBe(0);
    expect(has(s, /Tax Men/)).toBe(false);
  });
  it('Doppelganger copying Tax Men: the same 8-cost recruit pays 4 resources, 2 for each', () => {
    const { s } = go('tax-doppel', rival([['thieves.accomplice', 'echo.doppel'], ['red.intern']], ['benders.spoilsports'], { prep: st => { st.cards[uidOf(st, 'echo.doppel', 0)].copy = 'thieves.accomplice'; } }), [/Spoilsport/, /pay:/, ...RED4]);
    expect(s.players[0].res.red).toBe(4);
    expect(tot(s.players[0])).toBe(4);
    expect(lines(s, /gave P1 1 red \(P1's Tax Men\)/)).toHaveLength(4);
  });
  it('Mimics and Shadow cannot copy it: Mimics offers only On Recruit members, so Tax Men is not on the list', () => {
    const { s } = go('tax-mimics', { quads: Q, queue: [{ t: 'buy', p: 0 }], res: [{ red: 30, blue: 30, magenta: 30, green: 30 }, {}], shop: ['echo.mimics'], members: [['thieves.accomplice', 'red.mentor'], []] }, [/Mimics/, /pay:/]);
    expect(s.pending.prompt).toMatch(/^Mimics: use which member/);
    expect(s.pending.options.map(o => o.label).join('|')).toMatch(/Governess/);
    expect(s.pending.options.map(o => o.label).join('|')).not.toMatch(/Tax Men/);
  });
});

describe('2. Comforter ("Round End: +2 followers per contest you don\'t win.") with Spoilsport and a Doppelganger', () => {
  const Q = ['red', 'market', 'thieves', 'echo'];
  // contests count the resource held of each color: P2 holds some of all four, so P1 (holding none) wins nothing
  const sc = (members, res, extra = {}) => ({ quads: Q, queue: END, res, members, ...extra });
  const comforterLines = s => lines(s, /Comforter: didn.t win/);
  it('wins nothing at a 4-color table in round III: +8 followers, one named line', () => {
    const { s } = go('comf-4', sc([['benders.sorelosers'], ['red.twins']], [{}, { ...ALL4 }]), []);
    expect(s.players[0].bonus).toBe(8);
    expect(comforterLines(s)).toEqual(["P1's Comforter: didn’t win 4 contests, +8 followers."]);
    expect(s.players[1].bonus).toBe(32); // 4 contests at round III's 8 each: the rival's prizes dwarf the +8
  });
  it('wins one contest: +6; a tie for a contest counts as a win (Comforter pays only for the ones with no share)', () => {
    const one = go('comf-one', sc([['benders.sorelosers'], []], [{ red: 5 }, { ...ALL4 }]), []);
    expect(one.s.players[0].bonus).toBe(8 + 6);
    expect(comforterLines(one.s)).toEqual(["P1's Comforter: didn’t win 3 contests, +6 followers."]);
    const tie = go('comf-tie', sc([['benders.sorelosers'], []], [{ red: 3 }, { ...ALL4 }]), []);
    expect(tie.s.players[0].bonus).toBe(4 + 6); // red shared: half the prize, and it counts as won
  });
  it('Spoilsport owned by the Comforter holder: the spoiled contest pays nobody, so it is one more contest not won (+2)', () => {
    // P1 leads red; spoiling its own lead costs the 8 and the Comforter gives back 2: 3 contests lost became 4
    const { s } = go('comf-spoil-own', sc([['benders.sorelosers', 'benders.spoilsports'], []], [{ red: 5 }, { blue: 3, magenta: 3, green: 3 }]), [/spoil:red/]);
    expect(has(s, /P1's Spoilsport: nobody wins the Red contest/)).toBe(true);
    expect(s.players[0].bonus).toBe(8);
    expect(comforterLines(s)).toEqual(["P1's Comforter: didn’t win 4 contests, +8 followers."]);
  });
  it('Spoilsport on a contest the rival leads: Comforter still counts it once; the rival loses the prize, not the Comforter holder more', () => {
    const { s } = go('comf-spoil-rival', sc([['benders.sorelosers', 'benders.spoilsports'], []], [{}, { ...ALL4 }]), [/spoil:red/]);
    expect(s.players[0].bonus).toBe(8);
    expect(s.players[1].bonus).toBe(24);
  });
  it('RUNAWAY: a Doppelganger copying Comforter pays twice: a player who wins nothing gets +16 followers at Round End', () => {
    const { s } = go('comf-doppel', sc([['benders.sorelosers', 'echo.doppel'], []], [{}, { ...ALL4 }], { prep: st => { st.cards[uidOf(st, 'echo.doppel', 0)].copy = 'benders.sorelosers'; } }), []);
    expect(comforterLines(s)).toHaveLength(2);
    expect(s.players[0].bonus).toBe(16);
  });
});
describe('3. Chapman ("Whenever one of your members is swapped, +2 followers.") with every swapper in one round III', () => {
  const Q = ['red', 'market', 'thieves', 'echo'];
  const swapped = s => lines(s, /Chapman: .* was swapped, \+2 followers/);
  it('Swindler, a Doppelganger copying Swindler, Promote, Fairy Godmother and Demote: 5 swaps, +10; Journeyman going to the shop is not a swap', () => {
    const { s } = go('chapman-round', { quads: Q, auto: true, queue: [{ t: 'round', r: 3 }], shop: ['red.volunteer', 'market.bargainer'],
      prep: st => { st.cards[uidOf(st, 'echo.doppel', 0)].copy = 'red.bodysnatchers'; },
      members: [['red.chapman', 'red.bodysnatchers', 'red.seatfiller', 'red.panel', 'echo.doppel', 'red.intern', 'red.twins', 'benders.tiebreaker'], ['red.bigfamily', 'silver.dowager']] },
      [/Triplets ↔ P2: Big Family/, /Journeyman ↔/, /Intern ↔ P2: Dowager/, /^Promote$/, /Crooked Judge ↔ Shop/, /pass/, /use:/, /^promote/, /Dowager ↔ Shop/, /^Demote$/, /Talent Scout ↔ Shop|Ferryman ↔ Shop|Big Family ↔ Shop/, /pass/]);
    expect(swapped(s)).toHaveLength(5);
    expect(s.players[0].bonus).toBe(10);
    expect(has(s, /P1's Journeyman goes to the shop/)).toBe(true);
    const j = s.log.findIndex(l => /P1 put Journeyman face up into the shop/.test(l));
    expect(s.log.slice(j, j + 3).some(l => /Chapman/.test(l))).toBe(false);
  });
});

describe('4. Innkeeper ("Whenever one of your members goes back to the shop, +3 red.") with Journeyman and Borrow', () => {
  const Q = ['red', 'market', 'thieves', 'echo'];
  const inn = s => lines(s, /Innkeeper: .* went back to the shop, \+3 red/);
  it('Journeyman putting itself in the shop at Round Start pays +3 red; with a Doppelganger copying Innkeeper, +6 (named twice)', () => {
    const one = go('inn-journey', { quads: Q, auto: true, queue: [{ t: 'round', r: 3 }], shop: ['red.volunteer'], members: [['red.innkeeper', 'red.seatfiller'], ['red.bigfamily']] }, [/Journeyman ↔/]);
    expect(inn(one.s)).toEqual(["P1's Innkeeper: Journeyman went back to the shop, +3 red."]);
    expect(one.s.players[0].res.red).toBe(3);
    const two = go('inn-journey-doppel', { quads: Q, auto: true, queue: [{ t: 'round', r: 3 }], shop: ['red.volunteer'], members: [['red.innkeeper', 'red.seatfiller', 'echo.doppel'], ['red.bigfamily']],
      prep: st => { st.cards[uidOf(st, 'echo.doppel', 0)].copy = 'red.innkeeper'; } }, [/Journeyman ↔/]);
    expect(inn(two.s)).toHaveLength(2);
    expect(two.s.players[0].res.red).toBe(6);
  });
  it('a Borrowed member is "one of your members": when Borrow\'s loan returns it to the shop at round end, Innkeeper pays +3 red', () => {
    const { s } = go('inn-borrow', { quads: Q, queue: [{ t: 'turn', p: 0 }, ...END], shop: ['red.volunteer', 'red.intern'], members: [['red.innkeeper'], ['red.bigfamily']] }, [/^Borrow$/, /pass/]);
    expect(has(s, /P1's .* was on loan from Borrow: back to the shop at round end/)).toBe(true);
    expect(inn(s)).toHaveLength(1);
    expect(s.players[0].res.red).toBe(1 + 3); // Borrow's +1 red, then the return
    expect(s.players[0].members).toHaveLength(1);
  });
  it('RUNAWAY-ish: Journeyman leaves at Round Start, Borrow takes it straight back (cheapest shop member), the loan returns it at round end: with a Doppelganger copy Innkeeper pays 4 times, +12 red', () => {
    const r = go('inn-loop', { quads: Q, auto: true, queue: [{ t: 'round', r: 3 }], members: [['red.innkeeper', 'red.seatfiller', 'echo.doppel'], ['red.bigfamily']],
      prep: st => { st.cards[uidOf(st, 'echo.doppel', 0)].copy = 'red.innkeeper'; } }, [/Journeyman ↔/]);
    // the round's market is dealt at random: leave only Journeyman and dearer members face up, so it is the cheapest
    const price = u => defById(r.s.cards[u].def).s + defById(r.s.cards[u].def).w;
    r.s.shop = r.s.shop.filter(u => price(u) > 5 || r.s.cards[u].def === 'red.seatfiller');
    const s = finish(drive(r.s, [/^Borrow$/, /pass/], 20, true).s);
    expect(has(s, /P1 recruited Journeyman \(free\)/)).toBe(true);
    if (DUMP) console.log(s.log.join('\n'));
    expect(has(s, /P1's Journeyman was on loan from Borrow: back to the shop at round end/)).toBe(true);
    expect(inn(s).filter(l => /Journeyman went back/.test(l))).toHaveLength(4);
    expect(s.players[0].res.red).toBe(12 + 1);
  });
});

describe('5. Wet Nurse ("Whenever you recruit the cheapest member in the shop, +3 red.") with Governess and Borrow', () => {
  const Q = ['red', 'market', 'thieves', 'echo'];
  const nurse = s => lines(s, /Wet Nurse: recruited the cheapest shop member, \+3 red/);
  const RICH4 = { red: 40, blue: 40, magenta: 40, green: 40 };
  it('Borrow takes the cheapest shop member free: +3 red (+1 from Borrow); a Governess bought after it takes the cheapest again: +3', () => {
    const { s } = go('nurse-solo', { quads: Q, auto: true, queue: [{ t: 'turn', p: 0 }], res: [RICH4, {}], shop: ['red.volunteer', 'red.mentor', 'red.intern', 'market.bargainer'], members: [['red.wetnurse'], ['red.bigfamily']] },
      [/^Borrow$/, /Governess/, /pay:/, /Intern|Benchwarmer/]);
    expect(nurse(s)).toHaveLength(2);
    expect(s.players[0].res.red).toBe(40 - 5 + 1 + 6); // Governess paid 5 red + 1 blue, magenta, green
    expect(has(s, /P1's Governess: the cheapest face-up member comes along free/)).toBe(true);
  });
  it('RUNAWAY-ish (resources): with a Doppelganger copying Wet Nurse, that one turn (Borrow, then buying Governess) pays +12 red, 4 named lines, for the 8 red the Governess cost', () => {
    const { s } = go('nurse-doppel', { quads: Q, auto: true, queue: [{ t: 'turn', p: 0 }], res: [RICH4, {}], shop: ['red.volunteer', 'red.mentor', 'red.intern', 'market.bargainer'], members: [['red.wetnurse', 'echo.doppel'], ['red.bigfamily']],
      prep: st => { st.cards[uidOf(st, 'echo.doppel', 0)].copy = 'red.wetnurse'; } }, [/^Borrow$/, /Governess/, /pay:/, /Intern|Benchwarmer/]);
    expect(nurse(s)).toHaveLength(4);
    expect(s.players[0].res.red).toBe(40 - 8 + 1 + 12);
    expect(s.players[0].members).toHaveLength(5);
  });
  it('Buy Secondhand takes the cheapest card in play from the discard pile: not a shop member, so Wet Nurse pays nothing (judge, Nov 25)', () => {
    const { s } = go('nurse-secondhand', { quads: Q, auto: true, queue: [{ t: 'turn', p: 0 }], res: [RICH4, {}], shop: ['red.mentor', 'market.bargainer'], members: [['red.wetnurse'], ['red.bigfamily']],
      prep: st => { const k = st.pile.findIndex(u => st.cards[u].def === 'red.intern'); const u = k >= 0 ? st.pile.splice(k, 1)[0] : stray(st, 'red.intern'); st.discard = [...(st.discard || []), u]; } },
      [/Buy Secondhand/, /Intern|Benchwarmer/, /pay:/]);
    expect(names(s, 0).some(n => /Intern|Benchwarmer/.test(n))).toBe(true);
    expect(nurse(s)).toHaveLength(0);
  });
  it('Mimics copying Governess\'s On Recruit recruits the cheapest member too: Wet Nurse pays +3 again', () => {
    const { s } = go('nurse-mimics', { quads: Q, auto: true, queue: [{ t: 'buy', p: 0 }], res: [RICH4, {}], shop: ['echo.mimics', 'red.mentor', 'red.intern', 'market.bargainer'], members: [['red.wetnurse', 'red.mentor'], ['red.bigfamily']] },
      [/Mimics/, /pay:/, /Governess/, /Intern|Benchwarmer|Volunteer/]);
    expect(nurse(s)).toHaveLength(1);
    expect(has(s, /Mimics: .*Governess|P1's Governess: the cheapest face-up member comes along free/)).toBe(true);
  });
});

describe('6. Hoarder ("Round End: if you hold 10 or more resources, +3 followers.") copied', () => {
  const Q = ['thieves', 'echo', 'red', 'market'];
  const pays = s => lines(s, /Hoarder: \d+ resources held, \+3 followers/);
  // holding the most red also wins Most red (+8 in round III), so each scene is compared with its own control
  it('9 resources pay nothing, 10 pay +3 (all colors count)', () => {
    const nine = go('hoard-9', { quads: Q, queue: END, res: [{ red: 4, blue: 3, magenta: 2 }, { red: 6, blue: 4, magenta: 3, green: 1 }], members: [['thieves.hoarder'], []] }, []);
    expect(pays(nine.s)).toHaveLength(0);
    const ten = go('hoard-10', { quads: Q, queue: END, res: [{ red: 5, blue: 3, magenta: 2 }, { red: 6, blue: 4, magenta: 3, green: 1 }], members: [['thieves.hoarder'], []] }, []);
    expect(pays(ten.s)).toEqual(["P1's Hoarder: 10 resources held, +3 followers."]);
    expect(ten.s.players[0].bonus - nine.s.players[0].bonus).toBe(3);
  });
  it('a Doppelganger copying Hoarder: +6 at Round End instead of +3, two named lines (Mimics and Shadow cannot copy a Round End card)', () => {
    const base = { quads: Q, queue: END, res: [{ red: 5, blue: 3, magenta: 2 }, { red: 6, blue: 4, magenta: 3, green: 1 }] };
    const one = go('hoard-one', { ...base, members: [['thieves.hoarder'], []] }, []);
    const two = go('hoard-doppel', { ...base, members: [['thieves.hoarder', 'echo.doppel'], []], prep: st => { st.cards[uidOf(st, 'echo.doppel', 0)].copy = 'thieves.hoarder'; } }, []);
    expect(pays(two.s)).toHaveLength(2);
    expect(two.s.players[0].bonus - one.s.players[0].bonus).toBe(3);
  });
  it('Mimics offers only On Recruit members: Hoarder is not on its list', () => {
    const { s } = go('hoard-mimics', { quads: Q, queue: [{ t: 'buy', p: 0 }], res: [{ red: 30, blue: 30, magenta: 30, green: 30 }, {}], shop: ['echo.mimics'], members: [['thieves.hoarder', 'red.mentor'], []] }, [/Mimics/, /pay:/]);
    expect(s.pending.options.map(o => o.label).join('|')).not.toMatch(/Hoarder/);
  });
});

describe('7a. Night Porter ("Each minion you place once all rivals are out of minions: +2 followers.")', () => {
  const Q = ['red', 'purple', 'echo', 'market'];
  const porter = s => lines(s, /Night Porter: every rival is out of minions, \+2 followers/);
  const run = (turns, left, members, copy) => go('porter', { quads: Q, auto: true, fill: true, queue: turns.map(p => ({ t: 'turn', p })), members, left: 0,
    prep: st => { st.players[0].left = left[0]; st.players[1].left = left[1]; if (copy) st.cards[uidOf(st, 'echo.doppel', 0)].copy = 'purple.nightporter'; } },
    []).s;
  it('equal minions (3 each): only the very last minion of the round qualifies: +2, and +4 with a Doppelganger copy', () => {
    const one = run([1, 0, 0, 1, 1, 0], [3, 3], [['purple.nightporter'], []], false);
    expect(porter(one)).toHaveLength(1);
    expect(one.players[0].bonus).toBe(2);
    const two = run([1, 0, 0, 1, 1, 0], [3, 3], [['purple.nightporter', 'echo.doppel'], []], true);
    expect(porter(two)).toHaveLength(2);
    expect(two.players[0].bonus).toBe(4);
  });
  it('one extra minion (4 against 3): the last two of its placements qualify: +4, +8 with the copy', () => {
    const one = run([1, 0, 0, 1, 1, 0, 0], [4, 3], [['purple.nightporter'], []], false);
    expect(porter(one)).toHaveLength(2);
    expect(one.players[0].bonus).toBe(4);
    const two = run([1, 0, 0, 1, 1, 0, 0], [4, 3], [['purple.nightporter', 'echo.doppel'], []], true);
    expect(porter(two)).toHaveLength(4);
    expect(two.players[0].bonus).toBe(8);
  });
});

describe('7b. Pilgrims ("Round End: +1 follower per color among the spaces your minions are on.")', () => {
  const Q = ['red', 'yellow', 'echo', 'market'];
  const lay = { '0-0': 0, '1-0': 0, '1-1': 0, '2-0': 0, '3-0': 0 }; // 5 minions on 4 colors: two on yellow
  const pil = s => lines(s, /Pilgrims: minions on .*, \+4 followers/);
  it('counts each color once: 5 minions on 4 colors pay +4; a Doppelganger copy pays it again, +8, two named lines', () => {
    const one = go('pil-one', { quads: Q, queue: END, members: [['yellow.pilgrims'], []], prep: st => { st.slots = { ...lay }; } }, []);
    expect(pil(one.s)).toEqual(["P1's Pilgrims: minions on red, yellow, green, blue, +4 followers."]);
    expect(one.s.players[0].bonus).toBe(4);
    const two = go('pil-two', { quads: Q, queue: END, members: [['yellow.pilgrims', 'echo.doppel'], []], prep: st => { st.slots = { ...lay }; st.cards[uidOf(st, 'echo.doppel', 0)].copy = 'yellow.pilgrims'; } }, []);
    expect(pil(two.s)).toHaveLength(2);
    expect(two.s.players[0].bonus).toBe(8);
  });
  it("a rival's minions never count, and no minions pay nothing", () => {
    const { s } = go('pil-rival', { quads: Q, queue: END, members: [['yellow.pilgrims'], []], prep: st => { st.slots = { '0-0': 1, '1-0': 1 }; } }, []);
    expect(has(s, /Pilgrims/)).toBe(false);
    expect(s.players[0].bonus).toBe(0);
  });
});

describe('7c. Spice Merchant ("On Recruit: +1 follower per color you hold. Round Start: +1 follower per color you hold.")', () => {
  const Q = ['yellow', 'echo', 'thieves', 'market'];
  const ALL = { yellow: 3, green: 3, magenta: 3, blue: 3 };
  // "hold" means resources held: the table's 4 colors are the most it can pay
  it('Round Start: holding all 4 colors pays +4; a Doppelganger copy pays +8 (two named lines); holding 2 colors pays 2', () => {
    const one = go('spice-one', { quads: Q, auto: true, queue: [{ t: 'round', r: 3 }], res: [ALL, {}], members: [['yellow.tourists'], []] }, []);
    expect(lines(one.s, /P1's Spice Merchant: \+4 followers/)).toHaveLength(1);
    expect(one.s.players[0].bonus).toBe(4);
    const two = go('spice-two', { quads: Q, auto: true, queue: [{ t: 'round', r: 3 }], res: [ALL, {}], members: [['yellow.tourists', 'echo.doppel'], []], prep: st => { st.cards[uidOf(st, 'echo.doppel', 0)].copy = 'yellow.tourists'; } }, []);
    expect(lines(two.s, /P1's Spice Merchant: \+4 followers/)).toHaveLength(2);
    expect(two.s.players[0].bonus).toBe(8);
    const few = go('spice-few', { quads: Q, auto: true, queue: [{ t: 'round', r: 3 }], res: [{ yellow: 3, blue: 1 }, {}], members: [['yellow.tourists'], []] }, []);
    expect(few.s.players[0].bonus).toBe(2);
  });
  it('Mimics copying its On Recruit: +4 now (the colors still held after paying for Mimics)', () => {
    const r = go('spice-mimics', { quads: Q, queue: [{ t: 'buy', p: 0 }], res: [{ yellow: 30, green: 30, magenta: 30, blue: 30 }, {}], shop: ['echo.mimics'], members: [['yellow.tourists', 'thieves.accomplice'], []] }, [/Mimics/, /pay:/, /Spice/]);
    expect(lines(r.s, /P1's Spice Merchant: \+4 followers/)).toHaveLength(1);
    expect(r.s.players[0].bonus).toBe(4);
  });
});

describe('7d. Lackey ("Whenever you place a minion on the same color as the minion placed just before yours, +2 green.")', () => {
  const Q = ['red', 'echo', 'thieves', 'market'];
  const lack = s => lines(s, /Lackey: same color as the minion before, \+2 green/);
  const turns = [1, 0, 0, 0].map(p => ({ t: 'turn', p }));
  it('your minion after a rival\'s on red pays +2 green, your next on red (after your own) pays +2 again, a different color pays nothing', () => {
    const { s } = go('lackey', { quads: Q, auto: true, queue: turns, members: [['echo.lackey'], []], left: 3 }, [/^slot:0-1$/, /pass/, /^slot:0-2$/, /pass/, /^slot:1-0$/, /pass/]);
    expect(lack(s)).toHaveLength(2);
    expect(s.players[0].res.green).toBe(4 + 2); // Lackey's +2 twice, then Flock Together's own +2 on a different color (no Lackey)
  });
  it('the round\'s first minion has no minion before it: nothing', () => {
    const { s } = go('lackey-first', { quads: Q, auto: true, queue: [0, 1].map(p => ({ t: 'turn', p })), members: [['echo.lackey'], []], left: 3 }, [/^slot:0-0$/, /pass/]);
    expect(lack(s)).toHaveLength(0);
  });
  // BUG (flagged in the report): Lackey's once-per-placement guard (state.placedQ.paid, echo.js) stops a Doppelganger's copy paying beside it
  it('a Doppelganger copying Lackey is a second Lackey: each matching placement pays +2 twice (+4 green), as every other copied trigger does', () => {
    const { s } = go('lackey-doppel', { quads: Q, auto: true, queue: turns, members: [['echo.lackey', 'echo.doppel'], []], left: 3, prep: st => { st.cards[uidOf(st, 'echo.doppel', 0)].copy = 'echo.lackey'; } }, [/^slot:0-1$/, /pass/, /^slot:0-2$/, /pass/, /^slot:1-0$/, /pass/]);
    expect(lack(s)).toHaveLength(4);
  });
});

describe('7e. Doorbusters ("Round Start: recruit once, before anyone places.")', () => {
  const Q = ['market', 'echo', 'red', 'thieves'];
  it('a Doppelganger copying Doorbusters is a second Doorbusters: two recruits before P2 places, the second offered after the first', () => {
    const { s } = go('door', { quads: Q, queue: [{ t: 'round', r: 3 }], res: [{ blue: 60, green: 60, red: 60, magenta: 60 }, {}], members: [['market.doorbusters', 'echo.doppel'], []],
      prep: st => { st.cards[uidOf(st, 'echo.doppel', 0)].copy = 'market.doorbusters'; } }, [/Planner|Innkeeper|Auctioneer/, /pay:/, /Planner|Innkeeper|Auctioneer|Admirers/, /pay:/]);
    expect(lines(s, /Firstcomers: recruits once before anyone places/)).toHaveLength(1);
    expect(s.log.filter(l => /^P1 recruited/.test(l))).toHaveLength(2);
    expect(s.log.some(l => /^P2 /.test(l))).toBe(false); // nobody has placed yet
  });
  it('a 7-cost recruit at Round Start (Planner) pays a rival\'s Tax Men like any recruit: 2 resources to P2', () => {
    const { s } = go('door-tax', { quads: Q, queue: [{ t: 'round', r: 3 }], res: [{ blue: 60, green: 60, red: 60, magenta: 60 }, {}], members: [['market.doorbusters'], ['thieves.accomplice']] }, [/Planner/, /pay:/, /color:red/, /color:red/]);
    expect(s.players[1].res.red).toBe(2);
    expect(lines(s, /gave P2 1 red \(P2's Tax Men\)/)).toHaveLength(2);
  });
});

describe('7f. Evictors ("On Use, once per game: discard a rival\'s member. You and that rival each gain white equal to its cost.")', () => {
  const Q = ['trading', 'echo', 'red', 'thieves'];
  const use = (s, who, re) => applyMove(s, { player: 0, option: `use:${uidOf(s, who, 0)}` });
  it('alone: discards the chosen rival member (Governess, 8), both players gain 8 white, and it cannot be used again', () => {
    let r = go('evict-one', { quads: Q, queue: [{ t: 'turn', p: 0 }], members: [['trading.evictors'], ['red.mentor', 'red.bigfamily']] }, [/^slot:3-/]);
    expect(r.s.pending.options.some(o => /^use:/.test(o.id))).toBe(true);
    r = drive(applyMove(r.s, { player: 0, option: `use:${uidOf(r.s, 'trading.evictors', 0)}` }), [/Governess/], 10);
    const s = r.s;
    expect(names(s, 1)).toEqual(['Big Family']);
    expect(s.players[0].res.white).toBe(8);
    expect(s.players[1].res.white).toBe(8);
    expect(has(s, /Evictors/)).toBe(true);
    expect(s.pending?.options?.some(o => /^use:/.test(o.id))).toBeFalsy();
  });
  it('RUNAWAY (resources): a Doppelganger copying Evictors is a second once-per-game use: two rival members go, 8 + 8 white each side', () => {
    let r = go('evict-doppel', { quads: Q, queue: [{ t: 'turn', p: 0 }], members: [['trading.evictors', 'echo.doppel'], ['red.mentor', 'red.bigfamily', 'red.brethren']], prep: st => { st.cards[uidOf(st, 'echo.doppel', 0)].copy = 'trading.evictors'; } }, [/^slot:3-/]);
    r = drive(applyMove(r.s, { player: 0, option: `use:${uidOf(r.s, 'trading.evictors', 0)}` }), [/Governess/], 10);
    r = drive(applyMove(r.s, { player: 0, option: `use:${uidOf(r.s, 'echo.doppel', 0)}` }), [/Big Family/], 10);
    const s = r.s;
    expect(names(s, 1)).toEqual(['Guild Master']);
    expect(s.players[0].res.white).toBe(16);
    expect(s.players[1].res.white).toBe(16);
  });
});

describe('7g. Bargainer ("Game End: +1 follower per member you have costing 5 or less.")', () => {
  const Q = ['market', 'red', 'echo', 'thieves'];
  const CHEAP = ['red.intern', 'red.twins', 'red.seatfiller', 'red.loyalists']; // 4, 5, 5, 5
  const base = { quads: Q, queue: [{ t: 'finish' }] };
  it('counts members costing 5 or less (Bargainer itself, 5, included; Innkeeper at 6 and a Doppelganger at 8 are not): +5', () => {
    const { s } = go('barg-one', { ...base, members: [['market.bargainer', ...CHEAP, 'red.innkeeper', 'echo.doppel'], []] }, []);
    expect(lines(s, /Bargainer/)).toHaveLength(1);
    expect(s.players[0].bonus).toBe(5);
  });
  it('a Doppelganger copying Bargainer is a second Bargainer: +10 at Game End, two named lines, on five cheap members', () => {
    const { s } = go('barg-two', { ...base, members: [['market.bargainer', ...CHEAP, 'red.innkeeper', 'echo.doppel'], []], prep: st => { st.cards[uidOf(st, 'echo.doppel', 0)].copy = 'market.bargainer'; } }, []);
    expect(lines(s, /Bargainer/)).toHaveLength(2);
    expect(s.players[0].bonus).toBe(10);
  });
});

describe('7h. Beggar ("Whenever a rival gives you silver, +1 follower.")', () => {
  const Q = ['silver', 'echo', 'red', 'thieves'];
  const beg = s => lines(s, /Beggar: .* gave silver, \+1 follower/);
  it('a rival\'s Bride and Groom ("Each rival +2 silver") is a rival giving you silver: +1 follower, once for the one gift (not per coin)', () => {
    const { s } = go('beg-bride', { quads: Q, queue: [{ t: 'turn', p: 1 }], members: [['silver.beggar'], ['silver.gala']], res: [{}, { silver: 4 }] }, [/^slot:2-0$/]);
    let r = { s };
    r = drive(applyMove(s, { player: 1, option: `use:${uidOf(s, 'silver.gala', 1)}` }), [], 5);
    expect(r.s.players[0].res.silver).toBe(2);
    expect(r.s.players[1].res.silver).toBe(8);
    expect(beg(r.s)).toEqual(["P1's Beggar: P2 gave silver, +1 follower."]);
    expect(r.s.players[0].bonus).toBe(1);
  });
  it('a Doppelganger copying Beggar is a second Beggar: the same gift pays +2', () => {
    const { s } = go('beg-bride-doppel', { quads: Q, queue: [{ t: 'turn', p: 1 }], members: [['silver.beggar', 'echo.doppel'], ['silver.gala']], res: [{}, { silver: 4 }], prep: st => { st.cards[uidOf(st, 'echo.doppel', 0)].copy = 'silver.beggar'; } }, [/^slot:2-0$/]);
    const r = drive(applyMove(s, { player: 1, option: `use:${uidOf(s, 'silver.gala', 1)}` }), [], 5);
    expect(beg(r.s)).toHaveLength(2);
    expect(r.s.players[0].bonus).toBe(2);
  });
  it('Tax Men paid in silver with a Doppelganger copy of Beggar: one gift of 2 silver, +2 (one per Beggar), not +4', () => {
    const { s } = go('beg-tax', { quads: ['silver', 'thieves', 'echo', 'red'], queue: [{ t: 'buy', p: 1 }], shop: ['benders.spoilsports'], res: [{}, { silver: 30, red: 30 }], members: [['thieves.accomplice', 'silver.beggar', 'echo.doppel'], []],
      prep: st => { st.cards[uidOf(st, 'echo.doppel', 0)].copy = 'silver.beggar'; } }, [/Spoilsport/, /pay:/, /color:silver/, /color:silver/]);
    expect(s.players[0].res.silver).toBe(2);
    expect(beg(s)).toHaveLength(2);
    expect(s.players[0].bonus).toBe(2);
  });
});
