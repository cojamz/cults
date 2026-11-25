// @vitest-environment node
// Combo tester, Yellow's Nov 11 members (Dawn Traders, Herald, Hostages, Benefactor, Harlequin)
// against the members and settings they touch. Each scene checks the outcome against the printed text.
import { describe, it, expect } from 'vitest';
import { createGame, resume, followers, applyMove } from '../../../engine/v4/core.js';
import { stray } from './stray.js';
import { defById } from '../../../engine/v4/content/index.js';
const names = (s, i) => s.players[i].members.map(u => defById(s.cards[u].def).name);

function scene({ quads, n = 2, seed = 7, round = 3, res = [], members = [], shop = [], turns = null, queue = null, left = 5, rules, discount = [], pre = null }) {
  const s = createGame({ seats: Array.from({ length: n }, (_, i) => ({ name: `P${i + 1}`, kind: 'bot' })), seed, quadrants: quads, ...(rules ? { rules } : {}) });
  Object.assign(s, { queue: [], pending: null, round, slots: {}, order: [], log: [] });
  delete s.echo;
  s.players.forEach((p, i) => { p.res = Object.fromEntries(s.resources.map(r => [r, 0])); Object.assign(p.res, res[i] || {}); p.bonus = 0; p.discount = discount[i] || 0; p.left = left; });
  s.pile = [...s.shop, ...s.pile]; s.shop = [];
  const grab = def => { const k = s.pile.findIndex(u => s.cards[u].def === def); if (k < 0) return stray(s, def); return s.pile.splice(k, 1)[0]; };
  members.forEach((list, i) => { for (const d of list || []) { const u = grab(d); s.players[i].members.push(u); s.cards[u].recruitedRound = 0; s.cards[u].recruitedBy = i; } });
  for (const d of shop) s.shop.push(grab(d));
  s.queue = queue ? queue.map(t => ({ ...t })) : (turns || [0, 1, 0, 1, 0, 1]).map(p => ({ t: 'turn', p }));
  if (pre) pre(s);
  return resume(s);
}
// steps: regexes on option label/id, consumed in order when one matches; a pay takes its default; anything else stops
function drive(s, steps, max = 60) {
  const trail = [];
  for (let k = 0; k < max && s.pending; k++) {
    const o = s.pending.options, want = steps[0];
    let hit = want && o.find(x => want.test(x.id) || want.test(x.label || ''));
    if (hit) steps.shift();
    else if (s.pending.kind === 'pay') hit = o.find(x => x.default) || o[0];
    else { trail.push(`STOP @${s.pending.kind} P${s.pending.player + 1}: ${s.pending.prompt} :: ${o.map(x => `${x.id}=${x.label}`).join(' | ')}`); break; }
    trail.push(`> P${s.pending.player + 1} ${s.pending.kind}: ${hit.id} (${hit.label})`);
    s = applyMove(s, { player: s.pending.player, option: hit.id });
  }
  return { s, trail };
}
const dump = (title, s, trail) => console.log(`\n===== ${title}\n${trail.join('\n')}\n--- log\n${s.log.join('\n')}\n--- ${s.players.map((p, i) => `${JSON.stringify(p.res)} f${followers(s, p)} b${p.bonus} m${names(s, i).join(',')} left${p.left}`).join(' / ')}`);
const has = (s, re) => s.log.some(l => re.test(l));
const DUMP = !!globalThis.process?.env?.COMBO_DUMP;
const go = (title, sc, steps) => { const r = drive(scene(sc), steps); if (DUMP) dump(title, r.s, r.trail); return r; };
const uidOf = (s, def) => Number(Object.keys(s.cards).find(u => s.cards[u].def === def));
const Q = ['red', 'echo', 'yellow', 'trading'];
const BUY = [{ t: 'buy', p: 0 }];

const SQ = ['red', 'echo', 'yellow', 'silver'];
// every log line names its cards and numbers: no undefined, NaN or [object Object]
const clean = s => expect(s.log.filter(l => /undefined|NaN|\[object|null/.test(l))).toEqual([]);
const run = (title, sc, steps, setup) => { const st = scene({ ...sc, pre: setup }); const r = drive(st, steps); if (DUMP) dump(title, r.s, r.trail); clean(r.s); return r; };
const WILD = /^color:red$/; // Herald's +2 wild: one color at a time

describe('Hostages: "On Recruit: swap one of your members for a rival’s member that costs the same."', () => {
  it('a used once-per-game member stays used in its new cult', () => {
    const { s } = run('es-used-encore', { quads: Q, queue: BUY, res: [{ yellow: 20 }], shop: ['yellow.exchangestudents'], members: [['echo.encore'], ['silver.dowager']] },
      [/Hostages/, /Minstrel/], st => { st.cards[uidOf(st, 'echo.encore')].used = true; });
    const enc = uidOf(s, 'echo.encore');
    expect(names(s, 0)).toEqual(['Hostages', 'Dowager']);
    expect(names(s, 1)).toEqual(['Minstrel']);
    expect(s.cards[enc].used).toBe(true);
    expect(s.log).toContain("P1's Hostages: swaps Minstrel for P2's Dowager.");
  });

  it('swapping in a yellow member with an On Recruit: it is your recruit, so Herald pays again and its On Recruit happens', () => {
    // Cory, Oct 21: a member swapped in by your own doing is recruited, and its On Recruit fires
    const { s } = run('es-matchmaker-tourist', { quads: Q, queue: BUY, res: [{ yellow: 20, red: 1 }], shop: ['yellow.exchangestudents'],
      members: [['yellow.matchmaker', 'red.panel'], ['yellow.tourists']] },
      [/Hostages/, WILD, WILD, /Fairy Godmother/, WILD, WILD]);
    expect(names(s, 0)).toEqual(['Herald', 'Hostages', 'Pilgrim']);
    expect(names(s, 1)).toEqual(['Fairy Godmother']);
    expect(s.log.filter(l => l === "P1's Herald: a yellow member, +3 followers.")).toHaveLength(2);
    // the swap is said first, then what it set off
    const at = s.log.indexOf("P1's Hostages: swaps Fairy Godmother for P2's Pilgrim.");
    expect(at).toBeGreaterThan(0);
    expect(s.log.slice(at + 1, at + 3)).toEqual(["P1's Herald: a yellow member, +3 followers.", "P1's Pilgrim: +2 followers."]);
    // red and yellow held after paying (the +2 red wild from Herald keeps red): Pilgrim +2 followers
    expect(s.players[0].bonus).toBe(3 + 3 + 2);
    expect(s.players[1].bonus).toBe(0); // Fairy Godmother arrives in P2's cult: no recruit of theirs
  });

  // Thief-Takers block steals, not swaps (Cory, 2026-11-01: "balance wise it works best if it blocks steals, not swaps")
  it('Thief-Takers do not stop the swap (3 players: both rivals offered)', () => {
    const { s } = run('es-bodyguards', { quads: SQ, n: 3, queue: BUY, res: [{ yellow: 20 }], shop: ['yellow.exchangestudents'],
      members: [['echo.encore'], ['thieves.watchdog', 'silver.dowager'], ['silver.splurgers']] }, [/Hostages/, /Minstrel ↔ P2/]);
    expect(names(s, 0)).toEqual(['Hostages', 'Dowager']);
    expect(names(s, 1)).toEqual(['Thief-Takers', 'Minstrel']);
  });

  it('Warden shield the only same-cost member: no swap, and the log does not claim nothing costs the same', () => {
    const { s } = run('es-loyalists-only', { quads: SQ, queue: BUY, res: [{ yellow: 20 }], shop: ['yellow.exchangestudents'],
      members: [['silver.dowager'], ['red.loyalists', 'echo.encore']] }, [/Hostages/]);
    expect(names(s, 1)).toEqual(['Warden', 'Minstrel']);
    // P2's Minstrel costs 7, as Dowager does: Warden stop the swap, not the cost
    expect(s.log).toContain("P1's Hostages: no rival's member that costs the same as one of yours can be swapped.");
  });

  it('no rival member costs the same as any of yours: it says so', () => {
    const { s } = run('es-no-pair', { quads: Q, queue: BUY, res: [{ yellow: 20 }], shop: ['yellow.exchangestudents'],
      members: [['red.panel'], ['red.volunteer']] }, [/Hostages/]);
    expect(s.log).toContain("P1's Hostages: no rival's member costs the same as one of yours.");
    expect(names(s, 1)).toEqual(['Volunteer']);
  });

  it('Warden: only the Warden itself can be swapped out of that cult', () => {
    const { s } = run('es-loyalists', { quads: Q, queue: BUY, res: [{ yellow: 20 }], shop: ['yellow.exchangestudents'],
      members: [['red.seatfiller'], ['red.loyalists', 'echo.agents']] }, [/Hostages/]);
    expect(s.pending.options.filter(o => o.kind === 'trade').map(o => o.label)).toEqual(['Journeyman ↔ P2: Warden (5)']);
  });

  it('Deprogrammers: the swap takes a rival\'s member out of their cult, so they lose 1 follower', () => {
    const { s } = run('es-deprogrammers', { quads: Q, queue: BUY, res: [{ yellow: 20 }], shop: ['yellow.exchangestudents'],
      members: [['red.movementpenalty', 'red.seatfiller'], ['echo.agents']] }, [/Hostages/, /Journeyman ↔/]);
    expect(names(s, 1)).toEqual(['Journeyman']);
    expect(s.players[1].bonus).toBe(-1);
    expect(s.log.filter(l => /Hostages:|Deprogrammers/.test(l))).toEqual(["P1's Hostages: swaps Journeyman for P2's Secret-Keepers.", "P2 −1 follower (P1's Deprogrammers)."]);
  });

  it('Secret-Keepers swapped away: the rival now has it, and P1 no longer does', () => {
    const { s } = run('es-agents', { quads: Q, queue: BUY, res: [{ yellow: 20 }], shop: ['yellow.exchangestudents'],
      members: [['echo.agents'], ['red.seatfiller']] }, [/Hostages/, /Secret-Keepers ↔/]);
    expect(names(s, 0)).toEqual(['Hostages', 'Journeyman']);
    expect(names(s, 1)).toEqual(['Secret-Keepers']);
  });

  it('Drifters swapped in: its On Recruit asks again for P1; picking Yellow pays Herald', () => {
    const { s } = run('es-drifters-matchmaker', { quads: Q, queue: BUY, res: [{ yellow: 20 }], shop: ['yellow.exchangestudents'],
      members: [['yellow.matchmaker', 'red.seatfiller'], ['yellow.drifters']] },
      [/Hostages/, WILD, WILD, /Drifters/, /color:yellow/, WILD, WILD], st => { st.cards[uidOf(st, 'yellow.drifters')].asColor = 'red'; });
    expect(names(s, 0)).toContain('Drifters');
    expect(s.cards[uidOf(s, 'yellow.drifters')].asColor).toBe('yellow');
    expect(s.log.filter(l => l === "P1's Herald: a yellow member, +3 followers.")).toHaveLength(2);
  });

  it('Drifters swapped in and set to Red: Herald pays only for Hostages', () => {
    const { s } = run('es-drifters-red', { quads: Q, queue: BUY, res: [{ yellow: 20 }], shop: ['yellow.exchangestudents'],
      members: [['yellow.matchmaker', 'red.seatfiller'], ['yellow.drifters']] },
      [/Hostages/, WILD, WILD, /Drifters/, /color:red/]);
    expect(s.cards[uidOf(s, 'yellow.drifters')].asColor).toBe('red');
    expect(s.log.filter(l => l === "P1's Herald: a yellow member, +3 followers.")).toHaveLength(1);
  });

  it('a used Benefactor stays used in its new cult; an unused one can be used by its new owner that turn', () => {
    const used = run('es-hh-used', { quads: Q, queue: BUY, res: [{ yellow: 20 }], shop: ['yellow.exchangestudents', 'red.volunteer'],
      members: [['red.recruiter'], ['yellow.headhunters']] }, [/Hostages/, /Ferryman ↔/],
      st => { st.cards[uidOf(st, 'yellow.headhunters')].used = true; }).s;
    const hh = uidOf(used, 'yellow.headhunters');
    expect(used.players[0].members).toContain(hh);
    expect(used.cards[hh].used).toBe(true);
    expect((used.pending?.options || []).some(o => o.id === `use:${hh}`)).toBe(false);

    const fresh = run('es-hh-fresh', { quads: Q, queue: BUY, res: [{ yellow: 20 }], shop: ['yellow.exchangestudents', 'red.volunteer'],
      members: [['red.recruiter'], ['yellow.headhunters']] }, [/Hostages/, /Ferryman ↔/, /^use:/, /Volunteer/]).s;
    expect(names(fresh, 0)).toEqual(['Hostages', 'Benefactor', 'Volunteer']);
    expect(fresh.log).toContain("P1's Benefactor: recruits Volunteer for free.");
  });

  it('Herald swapped out: it does not pay P1 for the yellow member swapped in, nor P2 for the arrival', () => {
    const { s } = run('es-matchmaker-out', { quads: Q, queue: BUY, res: [{ yellow: 20 }], shop: ['yellow.exchangestudents'],
      members: [['yellow.matchmaker'], ['yellow.headhunters']] }, [/Hostages/, WILD, WILD, /Herald ↔/]);
    expect(names(s, 0)).toEqual(['Hostages', 'Benefactor']);
    expect(names(s, 1)).toEqual(['Herald']);
    expect(s.players[0].bonus).toBe(3); // Hostages' own recruit only
    expect(s.players[1].bonus).toBe(0);
  });

  it('4 players: every rival\'s same-cost member is offered, by name; the pick goes to that rival', () => {
    const { s } = run('es-4p', { quads: SQ, n: 4, queue: BUY, res: [{ yellow: 20 }], shop: ['yellow.exchangestudents'],
      members: [['echo.encore'], ['silver.dowager'], ['silver.hustlers'], ['silver.revelers', 'red.panel']] }, [/Hostages/]);
    expect(s.pending.options.filter(o => o.kind === 'trade').map(o => o.label)).toEqual([
      'Minstrel ↔ P2: Dowager (7)', 'Minstrel ↔ P3: Purse-Switchers (7)', 'Minstrel ↔ P4: Revelers (7)',
      // Hostages itself costs 7 too
      'Hostages ↔ P2: Dowager (7)', 'Hostages ↔ P3: Purse-Switchers (7)', 'Hostages ↔ P4: Revelers (7)']);
    const r = drive(s, [/Minstrel ↔ P4/]);
    expect(names(r.s, 3)).toEqual(['Fairy Godmother', 'Minstrel']);
    expect(r.s.log).toContain("P1's Hostages: swaps Minstrel for P4's Revelers.");
  });

  it('Don\'t swap: nothing moves, and the log says so', () => {
    const { s } = run('es-none', { quads: Q, queue: BUY, res: [{ yellow: 20 }], shop: ['yellow.exchangestudents'],
      members: [['echo.encore'], ['silver.dowager']] }, [/Hostages/, /^none$/]);
    expect(names(s, 0)).toEqual(['Minstrel', 'Hostages']);
    expect(s.log).toContain("P1's Hostages: no swap.");
  });

  it('Harlequin swapped to a rival: its Round End pays the rival, by the rival\'s colors', () => {
    const { s } = run('es-cosmo', { quads: Q, queue: [...BUY, { t: 'allPlaced' }], res: [{ yellow: 20 }], shop: ['yellow.exchangestudents'],
      members: [['yellow.cosmopolitans', 'red.clan'], ['silver.dowager', 'red.recruiter', 'echo.wallflower']] }, [/Hostages/, /Harlequin ↔/]);
    expect(names(s, 1)).toEqual(['Ferryman', 'Tall-Tale Teller', 'Harlequin']);
    expect(s.log).toContain("P2's Harlequin: 3 colors among their members, +3 followers.");
    expect(has(s, /^P1's Harlequin/)).toBe(false);
  });
});

describe('Benefactor: "On Use, once per game: recruit a member costing up to 7 for free."', () => {
  it('a free recruit is a recruit: Herald, Proselytizers and Ferryman all pay', () => {
    const { s } = run('hh-recruit-triggers', { quads: Q, queue: BUY, shop: ['yellow.nightmarket'],
      members: [['yellow.headhunters', 'yellow.matchmaker', 'red.proselytizer', 'red.recruiter']] }, [/^use:/, /Dawn Traders/, WILD, WILD]);
    expect(names(s, 0)).toContain('Dawn Traders');
    expect(s.log).toContain("P1's Benefactor: recruits Dawn Traders for free.");
    expect(s.players[0].bonus).toBe(3 + 1); // Herald +3, Proselytizers +1
    expect(s.players[0].res.red).toBe(1 + 2); // Ferryman +1, Herald's 2 wild picked red
    expect(s.cards[uidOf(s, 'yellow.headhunters')].used).toBe(true);
  });

  // OPEN QUESTION, not fixed (core.js, silver.js): Wastrels rides Barker's extra followers buy, which only a recruit
  // step's member brings (decisions.md, Nov 4, Claude's reading for Barker: "Members recruited by a space... don't bring
  // one"). Wastrels prints "Whenever you recruit a silver member", and a free recruit is a recruit (Cory, Oct 21), so
  // Benefactor' free silver member brings no followers buy today. Flips to passing if Cory reads it the printed way.
  it.fails('Wastrels: a silver member taken free after the turn\'s recruit still lets you buy followers', () => {
    const sc = splurge => ({ quads: SQ, queue: BUY, res: [{ red: 3, silver: 6 }], shop: ['red.volunteer', 'silver.retinue'],
      members: [['yellow.headhunters', ...(splurge ? ['silver.splurgers'] : [])]] });
    const steps = () => [/Volunteer/, /^use:/, /Retinue/];
    const yes = run('hh-splurgers', sc(true), steps()).s;
    expect(names(yes, 0)).toContain('Retinue');
    expect(yes.pending.options.map(o => o.id)).toContain('tier:small');
    const no = run('hh-no-splurgers', sc(false), steps()).s;
    expect(names(no, 0)).toContain('Retinue');
    expect((no.pending?.options || []).map(o => o.id)).not.toContain('tier:small');
  });

  it('up to 7 is the printed cost (Cory, Nov 12): a discount does not stretch it, and the free recruit leaves the discount for a paid one', () => {
    const { s } = run('hh-discount', { quads: Q, queue: BUY, shop: ['trading.martyr', 'echo.encore'], discount: [3],
      members: [['yellow.headhunters']] }, [/^use:/]);
    const labels = s.pending.options.map(o => o.label);
    expect(s.pending.prompt).toBe('Benefactor: recruit which member costing 7 or less, for free?');
    expect(labels).toEqual(['Martyrs (6)', 'Minstrel (7)']);
    const r = drive(s, [/Martyrs/]);
    expect(names(r.s, 0)).toEqual(['Benefactor', 'Martyrs']);
    expect(r.s.players[0].discount).toBe(3);
  });

  it('Richer setting: every cost is 2 more, so up to 9 reaches the same members, and the words say 9', () => {
    const { s } = run('hh-rich', { quads: Q, queue: BUY, rules: { econ: 'rich' }, shop: ['trading.martyr', 'echo.encore'],
      members: [['yellow.headhunters']] }, [/^use:/]);
    expect(s.pending.prompt).toBe('Benefactor: recruit which member costing 9 or less, for free?');
    expect(s.pending.options.map(o => o.label)).toEqual(['Martyrs (8)', 'Minstrel (9)']);
  });

  it('no shop member costs 7 or less: it says so and stays unused', () => {
    const { s } = run('hh-none', { quads: Q, queue: BUY, shop: ['silver.patronsaints', 'red.panel'], members: [['yellow.headhunters']] }, [/^use:/]);
    expect(s.log).toContain("P1's Benefactor: no shop member costs 7 or less.");
    expect(s.cards[uidOf(s, 'yellow.headhunters')].used).toBeFalsy();
  });

  it('once per game: after the free recruit the shop refills and Benefactor is not offered again', () => {
    const { s } = run('hh-once', { quads: Q, queue: [...BUY, { t: 'buy', p: 0 }], res: [{ red: 20 }], shop: ['red.volunteer', 'red.intern'],
      members: [['yellow.headhunters']] }, [/^use:/, /Volunteer/]);
    const hh = uidOf(s, 'yellow.headhunters');
    expect(s.shop.length).toBeGreaterThan(1); // refilled after the free take
    expect(s.shop).not.toContain(uidOf(s, 'red.volunteer'));
    expect(s.pending.options.some(o => o.id === `use:${hh}`)).toBe(false);
  });

  it('Dabblers taken free counts as a yellow member for Herald', () => {
    const { s } = run('hh-dabblers', { quads: Q, queue: BUY, shop: ['benders.dabblersold'], members: [['yellow.headhunters', 'yellow.matchmaker']] },
      [/^use:/, /Dabblers/, WILD, WILD]);
    expect(names(s, 0)).toContain('Dabblers');
    expect(s.players[0].bonus).toBe(3);
  });
});

describe('Herald: "Whenever you recruit a yellow member, +2 wild, +3 followers."', () => {
  it('a bought yellow member: +3 followers and two wild picks, each logged', () => {
    const { s } = run('mm-buy', { quads: Q, queue: BUY, res: [{ yellow: 10 }], shop: ['yellow.nightmarket'], members: [['yellow.matchmaker']] },
      [/Dawn Traders/, /^color:red$/, /^color:green$/]);
    expect(s.players[0].bonus).toBe(3);
    expect(s.players[0].res).toMatchObject({ red: 1, green: 1 });
    expect(s.log).toContain("P1's Herald: +1 red.");
    expect(s.log).toContain("P1's Herald: +1 green.");
  });

  it('a non-yellow member: nothing', () => {
    const { s } = run('mm-red', { quads: Q, queue: BUY, res: [{ red: 10 }], shop: ['red.volunteer'], members: [['yellow.matchmaker']] }, [/Volunteer/]);
    expect(names(s, 0)).toContain('Volunteer');
    expect(has(s, /Herald/)).toBe(false);
  });

  it('a Doppelganger copying Herald: the next yellow member pays both', () => {
    const { s } = run('mm-doppel', { quads: Q, queue: [...BUY, { t: 'buy', p: 0 }], res: [{ green: 20, yellow: 10 }], shop: ['echo.doppel', 'yellow.nightmarket'],
      members: [['yellow.matchmaker']] }, [/Doppelganger/, /Herald/, /Dawn Traders/, WILD, WILD, WILD, WILD]);
    expect(names(s, 0)).toEqual(['Herald', 'Doppelganger', 'Dawn Traders']);
    expect(s.log.filter(l => / Herald: a yellow member, \+3 followers\.$/.test(l))).toHaveLength(2);
    expect(s.players[0].bonus).toBe(6);
  });
});

describe('Harlequin: "Round End: +1 follower per color among your members."', () => {
  const END = [{ t: 'allPlaced' }];
  it('alone: it is yellow itself, +1', () => {
    const { s } = run('cosmo-alone', { quads: Q, queue: END, members: [['yellow.cosmopolitans']] }, []);
    expect(s.log).toContain("P1's Harlequin: 1 color among their members, +1 follower.");
    expect(s.players[0].bonus).toBe(1);
  });
  it('Dabblers counts as every color: all 4 table colors', () => {
    const { s } = run('cosmo-dabblers', { quads: Q, queue: END, members: [['yellow.cosmopolitans', 'benders.dabblersold']] }, []);
    expect(s.players[0].bonus).toBe(4);
  });
  it('grey is a color (Cory, Nov 13); Drifters counts as its chosen color', () => {
    const { s } = run('cosmo-grey-drifters', { quads: Q, queue: END, members: [['yellow.cosmopolitans', 'benders.launderer', 'yellow.drifters']] }, [],
      st => { st.cards[uidOf(st, 'yellow.drifters')].asColor = 'trading'; });
    expect(s.log).toContain("P1's Harlequin: 3 colors among their members, +3 followers."); // yellow, grey, white (Drifters)
  });
  it('4 players: each owner reads only their own members, in turn order', () => {
    const { s } = run('cosmo-4p', { quads: Q, n: 4, queue: END,
      members: [['red.clan'], ['yellow.cosmopolitans', 'red.recruiter', 'echo.wallflower', 'trading.martyr'], ['yellow.matchmaker'], []] }, []);
    expect(s.log).toContain("P2's Harlequin: 4 colors among their members, +4 followers.");
    expect(s.players.map(p => p.bonus)).toEqual([0, 4, 0, 0]);
  });
});

describe('Dawn Traders: "Round Start: +2 yellow. Swap up to 4 of your resources for other colors, one for one."', () => {
  const START = [{ t: 'round', r: 3 }];
  const toTraders = s => { while (s.pending && !/^Dawn Traders/.test(s.pending.prompt)) s = applyMove(s, { player: s.pending.player, option: s.pending.options[0].id }); return s; };
  it('0 resources: +2 yellow, and those 2 can be swapped (Cory, Nov 12)', () => {
    const s = toTraders(scene({ quads: Q, round: 2, queue: START, members: [['yellow.nightmarket']] }));
    expect(s.log.filter(l => /Dawn Traders/.test(l))).toEqual(["P1's Dawn Traders: +2 yellow."]);
    expect(s.players[0].res.yellow).toBe(2);
    expect(s.pending?.prompt || '').toMatch(/^Dawn Traders/);
  });
  it('exactly 4: four swaps, then it stops asking', () => {
    let s = toTraders(scene({ quads: Q, round: 2, queue: START, res: [{ red: 4 }], members: [['yellow.nightmarket']] }));
    for (let i = 0; i < 4; i++) s = applyMove(s, { player: 0, option: 'swap:red:yellow' });
    clean(s);
    expect(s.players[0].res).toMatchObject({ red: 0, yellow: 6 }); // 2 from Dawn Traders, 4 swapped
    expect(String(s.pending?.prompt || '')).not.toMatch(/^Dawn Traders/);
    expect(s.log.filter(l => l === "P1's Dawn Traders: swapped 1 red for 1 yellow.")).toHaveLength(4);
  });
  it('10 held: still 4 at most', () => {
    let s = toTraders(scene({ quads: Q, round: 2, queue: START, res: [{ red: 10 }], members: [['yellow.nightmarket']] }));
    for (let i = 0; i < 4; i++) s = applyMove(s, { player: 0, option: 'swap:red:green' });
    expect(s.players[0].res).toMatchObject({ red: 6, green: 4 });
    expect(String(s.pending?.prompt || '')).not.toMatch(/^Dawn Traders/);
  });
  it('stopping early keeps the rest', () => {
    let s = toTraders(scene({ quads: Q, round: 2, queue: START, res: [{ red: 4 }], members: [['yellow.nightmarket']] }));
    s = applyMove(s, { player: 0, option: 'swap:red:white' });
    s = applyMove(s, { player: 0, option: 'done' });
    clean(s);
    expect(s.players[0].res).toMatchObject({ red: 3, white: 1 });
    expect(String(s.pending?.prompt || '')).not.toMatch(/^Dawn Traders/);
  });
  it('with Peddlers: the round\'s other Round Start income can be swapped too, whichever card is first in the row', () => {
    // P1 holds nothing until Peddlers's Round Start (+1 of each color); Dawn Traders comes first in P1's row
    let s = toTraders(scene({ quads: Q, round: 2, queue: START, members: [['yellow.nightmarket', 'yellow.caravan']] }));
    if (DUMP) dump('et-caravan', s, []);
    expect(s.players[0].res).toMatchObject({ red: 1, green: 1, yellow: 3, white: 1 });
    expect(s.pending?.prompt || '').toMatch(/^Dawn Traders/);
  });
  it('2 players, both with round start cards: each player\'s own choice', () => {
    let s = toTraders(scene({ quads: Q, round: 2, queue: START, res: [{ red: 2 }, { red: 2 }], members: [['yellow.nightmarket'], ['yellow.dyer']] }));
    expect(s.pending.player).toBe(0);
    expect(s.players[1].res.yellow).toBe(1); // Gilder: +1 yellow per color held (red)
    s = applyMove(s, { player: 0, option: 'swap:red:yellow' });
    s = applyMove(s, { player: 0, option: 'done' });
    clean(s);
    expect(s.players[0].res).toMatchObject({ red: 1, yellow: 3 });
  });
});
