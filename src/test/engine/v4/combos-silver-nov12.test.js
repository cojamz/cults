// @vitest-environment node
// Combo tester, Silver's new members (Cory, Nov 11 7:33pm to 8:17pm Eastern): Paupers, Splurgers, Toll Collectors,
// Loan Officers, Bookies, Hustlers, played against the members that move, copy and count members or silver.
// Each scene checks the outcome against the printed text. Harness: combos-nov11.test.js's scene/drive/go.
import { describe, it, expect } from 'vitest';
import { createGame, resume, followers, applyMove } from '../../../engine/v4/core.js';
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
  s.queue = queue || (turns || [0, 1, 0, 1, 0, 1]).map(p => ({ t: 'turn', p }));
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

const Q = ['silver', 'red', 'yellow', 'thieves'];

describe('Paupers: "Round End: if you hold no silver, +3 followers."', () => {
  it('two Paupers owners in a 4-player game: only the ones with exactly 0 silver are paid', () => {
    const { s } = go('paupers-4p', { quads: Q, n: 4, queue: [{ t: 'allPlaced' }], members: [['silver.paupers'], ['silver.paupers'], [], []],
      res: [{ silver: 0, red: 5 }, { silver: 1 }, {}, {}] }, []);
    expect(s.players[0].bonus).toBe(3);
    expect(s.players[1].bonus).toBe(0);
    expect(s.log).toContain("P1's Paupers: no silver, +3 followers.");
    expect(has(s, /P2's Paupers/)).toBe(false);
    cleanLog(s);
  });

  it('Doppelganger copying Paupers: two cards, +3 each', () => {
    const { s } = go('paupers-doppel', { quads: ['silver', 'red', 'echo', 'thieves'], queue: [{ t: 'allPlaced' }], members: [['silver.paupers', 'echo.doppel']],
      prep: st => { st.cards[uidOf(st, 0, 'echo.doppel')].copy = 'silver.paupers'; } }, []);
    expect(s.players[0].bonus).toBe(6);
    expect(s.log.filter(l => l === "P1's Paupers: no silver, +3 followers.").length).toBe(2);
  });

  it('Paupers taken by Exchange Students mid-round pays its new holder at Round End', () => {
    // P2 recruits Exchange Students and swaps their Kingmakers for P1's Paupers (both cost 6)
    const { s } = go('paupers-exchange', { quads: Q, turns: [1], queue: [{ t: 'turn', p: 1 }, { t: 'allPlaced' }], shop: ['yellow.exchangestudents'],
      members: [['silver.paupers'], ['silver.kingmakers']], res: [{ silver: 0 }, { yellow: 9, red: 9 }] },
      [/Gather/, /Exchange Students/, /Paupers/]);
    expect(names(s, 1)).toContain('Paupers');
    expect(names(s, 0)).toContain('Kingmakers');
    expect(has(s, /P2's Paupers: no silver, \+3 followers\./)).toBe(true);
    expect(has(s, /^P1's Paupers/)).toBe(false);
    cleanLog(s);
  });
});

describe('Paupers and Kingmakers at Round End (both "Round End")', () => {
  it('owner gives away their last silver with Kingmakers: do they then hold no silver for Paupers?', () => {
    // P1 holds 2 silver, Kingmakers gives both to P2. Read plainly, at Round End P1 then holds no silver.
    const { s, trail } = go('paupers-kingmakers-own', { quads: Q, queue: [{ t: 'allPlaced' }], members: [['silver.kingmakers', 'silver.paupers'], []], res: [{ silver: 2 }] },
      [/P2/, /P2/]);
    expect(s.players[0].res.silver).toBe(0);
    expect(s.players[1].res.silver).toBe(2);
    // QUESTION (report): Paupers reads the silver as the Round End starts, before Kingmakers' gifts land, so it pays
    // nothing here (+2 is Kingmakers' alone). At a table the owner might order their own Round Ends and take +3 too.
    expect(trail.length).toBe(2);
    expect(s.players[0].bonus).toBe(2);
    expect(has(s, /Paupers/)).toBe(false);
  });
});

describe('Toll Collectors: "Whenever any player buys followers with silver, +1 follower."', () => {
  it('4 players, two Toll Collectors owners: a third player\'s silver buy pays both', () => {
    const { s } = go('toll-4p', { quads: Q, n: 4, turns: [2], members: [['silver.tollcollectors'], ['silver.tollcollectors'], [], []],
      res: [{}, {}, { silver: 5 }, {}] }, [/Gather/, /tier:small|^1 follower|small/]);
    expect(s.players[0].bonus).toBe(1);
    expect(s.players[1].bonus).toBe(1);
    expect(s.log).toContain("P1's Toll Collectors: P3 paid silver for followers, +1 follower.");
    expect(s.log).toContain("P2's Toll Collectors: P3 paid silver for followers, +1 follower.");
    cleanLog(s);
  });

  it('Bookies turning in silver for followers is not a followers buy: Toll Collectors pays nothing (question for the report)', () => {
    const { s } = go('toll-bookies', { quads: Q, turns: [1], members: [['silver.tollcollectors'], []], shop: ['silver.bookies'], res: [{}, { silver: 9, red: 9 }] },
      [/Gather/, /Bookies/, /n:4/]);
    expect(s.players[1].res.silver).toBeLessThan(9);
    expect(has(s, /P2's Bookies: turns in 4 silver, \+8 followers\./)).toBe(true);
    expect(has(s, /Toll Collectors/)).toBe(false);
    cleanLog(s);
  });

  it('Splurgers\' extra followers buy paid with silver pays Toll Collectors', () => {
    const { s } = go('toll-splurgers', { quads: Q, turns: [1], members: [['silver.tollcollectors'], ['silver.splurgers']], shop: ['silver.kingmakers'], res: [{}, { silver: 9 }] },
      [/Gather/, /Kingmakers/, /tier:small/, /pay:1-0-0-0/]);
    expect(names(s, 1)).toContain('Kingmakers');
    expect(s.players[0].bonus).toBe(1);
    expect(s.log).toContain("P1's Toll Collectors: P2 paid silver for followers, +1 follower.");
    cleanLog(s);
  });
});

describe('Splurgers: "Whenever you recruit a silver member, you may also buy followers."', () => {
  const extra = s => String(s.pending?.prompt || '').includes('(Splurgers)');
  it('a silver member recruited free with Headhunters', () => {
    const { s, trail } = go('splurgers-headhunters', { quads: Q, turns: [0], members: [['silver.splurgers', 'yellow.headhunters']], shop: ['silver.paupers'], res: [{ red: 9 }] },
      [/use:/, /Paupers/]);
    expect(names(s, 0)).toContain('Paupers');
    globalThis.__splurgHead = { extra: extra(s), trail };
    // logged reading (decisions.md Nov 4, Barker): a member recruited outside your recruit step brings no extra buy
    expect(extra(s)).toBe(false);
  });

  it('a silver member recruited free with Initiation: no extra buy (Barker\'s logged reading), the turn\'s own buy still comes', () => {
    const { s } = go('splurgers-initiation', { quads: Q, turns: [0], members: [['silver.splurgers']], shop: ['silver.bookies'], res: [{ red: 9 }] },
      [/Initiation/, /Bookies/]);
    expect(names(s, 0)).toContain('Bookies');
    expect(s.pending.kind).toBe('buy');
    expect(extra(s)).toBe(false);
  });

  it('a silver member bought with Buyout: no extra buy (Barker\'s logged reading)', () => {
    const { s } = go('splurgers-buyout', { quads: Q, turns: [0], members: [['silver.splurgers'], ['silver.paupers']], res: [{ silver: 9, red: 9 }] },
      [/Buyout/, /Paupers/]);
    expect(names(s, 0)).toContain('Paupers');
    expect(s.players[1].res.silver).toBe(6);
    expect(extra(s)).toBe(false);
  });

  it('recruiting a second Splurgers: the first one gives an extra followers buy, the new one not for itself', () => {
    const { s, trail } = go('splurgers-second', { quads: Q, turns: [0], members: [['silver.splurgers']], shop: ['silver.splurgers'], res: [{ red: 20, silver: 20 }] },
      [/Gather/, /Splurgers/, /tier:small/]);
    expect(names(s, 0)).toEqual(['Splurgers', 'Splurgers']);
    expect(trail.join('\n')).toContain('tier:small (+1 followers) @ P1: recruit followers again (Splurgers), or pass');
    expect(s.log.filter(l => /P1 bought 1 follower/.test(l)).length).toBe(1);
    expect(extra(s)).toBe(false);
  });

  // BUG (core.js, not fixed here): the buy step's pay task drops task.by (extraOf), so boughtOnce falls back to
  // followersTwiceCard(state, p) with no recruit, which finds only Barker. Splurgers' extra buy logs no "uses" line,
  // and with Barker beside it, Splurgers' buy is logged as "P1 uses Barker."
  it('Splurgers\' extra buy is named in the log: "P1 uses Splurgers."', () => {
    const { s } = go('splurgers-uses', { quads: Q, turns: [0], members: [['silver.splurgers']], shop: ['silver.paupers'], res: [{ red: 20, silver: 20 }] },
      [/Gather/, /Paupers/, /tier:small/]);
    expect(s.log).toContain('P1 uses Splurgers.');
  });

  // BUG/QUESTION (core.js followersTwiceCard returns one card): two cards each print "you may also buy followers",
  // and "everything stacks", but a silver member with Barker and Splurgers both brings one extra buy, not two.
  it('Splurgers with Barker: a silver member brings two extra followers buys, one from each card', () => {
    const { s, trail } = go('splurgers-barker', { quads: Q, turns: [0], members: [['silver.splurgers', 'trading.barker']], shop: ['silver.paupers'], res: [{ red: 20, silver: 20 }] },
      [/Gather/, /Paupers/, /tier:small/, /tier:small/]);
    expect(names(s, 0)).toContain('Paupers');
    expect(s.log.filter(l => /P1 bought 1 follower/.test(l)).length).toBe(2);
  });

  it('a red member brings no extra buy; passing the extra buy keeps the followers bought nowhere', () => {
    const { s } = go('splurgers-pass', { quads: Q, turns: [0], members: [['silver.splurgers']], shop: ['silver.paupers'], res: [{ red: 20, silver: 20 }] },
      [/Gather/, /Paupers/, /^pass$/]);
    expect(names(s, 0)).toContain('Paupers');
    expect(has(s, /bought/)).toBe(false);
    cleanLog(s);
  });
});

describe('Loan Officers: "On Use, once per round: swap up to 5 of your silver for rivals’ resources, one for one."', () => {
  it('the fifth swap ends it even with silver left and rivals still holding resources', () => {
    const { s } = go('loan-cap', { quads: Q, n: 4, turns: [0], members: [['silver.loanofficers']], res: [{ silver: 9 }, { red: 9 }, { yellow: 9 }, { magenta: 9 }] },
      [/use:/, /swap:1:red/, /swap:2:yellow/, /swap:3:magenta/, /swap:1:red/, /swap:2:yellow/]);
    expect(s.players[0].res).toMatchObject({ silver: 4, red: 2, yellow: 2, magenta: 1 });
    expect(s.players.slice(1).map(p => p.res.silver)).toEqual([2, 2, 1]);
    expect(s.log).toContain("P1's Loan Officers: swapped silver for 2 red from P2, 2 yellow from P3, 1 magenta from P4.");
    expect(s.pending?.prompt || '').not.toMatch(/Loan Officers/);
    cleanLog(s);
  });

  it('rivals holding only silver: nothing to swap, and it stays ready', () => {
    const { s } = go('loan-only-silver', { quads: Q, turns: [0], members: [['silver.loanofficers']], res: [{ silver: 5 }, { silver: 7 }] }, [/use:/]);
    const u = uidOf(s, 0, 'silver.loanofficers');
    expect(s.cards[u]?.used).toBeFalsy();
    expect(s.players[0].res.silver).toBe(5);
  });

  it('Bodyguards\' owner can still be swapped with: a swap, not a steal; Insurers and Snitch do not fire', () => {
    const { s } = go('loan-bodyguards', { quads: Q, turns: [0], members: [['silver.loanofficers'], ['thieves.watchdog', 'thieves.insurers', 'thieves.snitch']], res: [{ silver: 3 }, { red: 3 }] },
      [/use:/, /swap:1:red/, /swap:1:red/, /^done$/]);
    expect(s.players[0].res).toMatchObject({ silver: 1, red: 2 });
    expect(s.players[1].res).toMatchObject({ silver: 2, red: 1 });
    expect(has(s, /Insurers|Snitch|Bodyguards/)).toBe(false);
    cleanLog(s);
  });

  it('used, then taken by Exchange Students: still used for its new holder this round', () => {
    const st = scene({ quads: Q, turns: [1], members: [['silver.loanofficers'], ['echo.songrequest']], shop: ['yellow.exchangestudents'], res: [{ silver: 5 }, { yellow: 9, red: 9, silver: 5, magenta: 5 }] });
    const u = uidOf(st, 0, 'silver.loanofficers');
    st.cards[u].used = true;
    const { s, trail } = drive(st, [/Gather/, /Exchange Students/, /Loan Officers/]);
    if (DUMP) dump('loan-exchange-used', s, trail);
    expect(s.players[1].members).toContain(u);
    expect(s.cards[u].used).toBe(true);
    expect(trail.join('\n')).not.toMatch(new RegExp(`use:${u}\\b`));
  });

  it('Round Start readies it again for whoever holds it', () => {
    const st = scene({ quads: Q, round: 2, queue: [{ t: 'round', r: 3 }], members: [[], ['silver.loanofficers']] });
    const u = uidOf(st, 1, 'silver.loanofficers');
    st.cards[u].used = true;
    const s = resume({ ...st, queue: [{ t: 'round', r: 3 }], pending: null });
    expect(s.cards[u].used).toBe(false);
  });
});

describe('Bookies: "On Recruit: turn in up to 4 silver for 2 followers each."', () => {
  it('with no silver (recruited free with Initiation): no choice, one plain log line', () => {
    const { s, trail } = go('bookies-zero', { quads: Q, turns: [0], shop: ['silver.bookies'], res: [{ red: 9 }] }, [/Initiation/, /Bookies/]);
    expect(names(s, 0)).toContain('Bookies');
    expect(trail.join('\n')).not.toMatch(/Bookies: turn in/);
    expect(s.log).toContain("P1's Bookies: no silver to turn in.");
  });

  it('with 2 silver (recruited free with Initiation): offers 2, 1 or 0', () => {
    const { s } = go('bookies-two', { quads: Q, turns: [0], shop: ['silver.bookies'], res: [{ red: 9, silver: 2 }] }, [/Initiation/, /Bookies/]);
    expect(s.pending.prompt).toBe('Bookies: turn in how much silver? 2 followers each (you have 2)');
    expect(s.pending.options.map(o => o.id)).toEqual(['n:2', 'n:1', 'n:0']);
  });

  it('recruited free with Initiation holding 3 silver: turns in all 3', () => {
    const { s } = go('bookies-initiation', { quads: Q, turns: [0], shop: ['silver.bookies'], res: [{ silver: 3 }] },
      [/Initiation/, /Bookies/, /n:3/]);
    expect(names(s, 0)).toContain('Bookies');
    expect(s.players[0].res.silver).toBe(0);
    expect(s.log).toContain("P1's Bookies: turns in 3 silver, +6 followers.");
  });

  it('Impersonator copying a rival\'s Bookies does its On Recruit with the copier\'s silver', () => {
    const { s } = go('bookies-impersonator', { quads: ['silver', 'red', 'echo', 'thieves'], turns: [0], members: [[], ['silver.bookies']], shop: ['echo.impersonators'], res: [{ red: 9, green: 9, silver: 7 }, { silver: 5 }] },
      [/Gather/, /Impersonator/, /Bookies/, /n:3/]);
    expect(s.log).toContain("P1's Bookies: turns in 3 silver, +6 followers.");
    expect(s.players[0].res.silver).toBe(4); // 7, less 3 turned in (Impersonator was paid in red and green)
    expect(s.players[0].bonus).toBe(6);
    expect(s.players[1].res.silver).toBe(5);
    cleanLog(s);
  });

  it('Double Agent swapped for a rival\'s Bookies: does Bookies\' On Recruit fire for the new holder?', () => {
    const { s, trail } = go('bookies-doubleagent', { quads: Q, turns: [0], members: [[], ['silver.bookies']], shop: ['thieves.doubleagent'], res: [{ red: 20, magenta: 9, silver: 3 }, {}] },
      [/Gather/, /Double Agent/, /Bookies/, /n:3/]);
    expect(names(s, 0)).toContain('Bookies');
    expect(names(s, 1)).toContain('Double Agent');
    expect(has(s, /P1's Bookies: turns in 3 silver, \+6 followers\./)).toBe(true);
  });
});

describe('Hustlers: "On Recruit: swap all your silver with a rival’s."', () => {
  it('both hold 0 silver: the swap changes nothing and the log reads 0 for 0', () => {
    const { s } = go('hustlers-zero', { quads: Q, turns: [0], shop: ['silver.hustlers'], res: [{ red: 9 }, {}] }, [/Initiation/, /Hustlers/, /player:1/]);
    expect(s.players[0].res.silver).toBe(0);
    expect(s.players[1].res.silver).toBe(0);
    expect(s.log).toContain("P1's Hustlers: swaps silver with P2 (0 for 0).");
  });

  it('4 players: only the chosen rival\'s silver moves; the silver paid for Hustlers is gone before the swap', () => {
    const { s } = go('hustlers-4p', { quads: Q, n: 4, turns: [0], shop: ['silver.hustlers'], res: [{ silver: 6 }, { silver: 1 }, { silver: 10 }, { silver: 3 }] },
      [/Gather/, /Hustlers/, /player:2/]);
    const paid = 6 - Number((s.log.find(l => /P1's Hustlers/.test(l)) || '').match(/\((\d+) for/)?.[1]);
    expect(paid).toBeGreaterThanOrEqual(0);
    expect(s.players[0].res.silver).toBe(10);
    expect(s.players[2].res.silver).toBe(6 - paid);
    expect(s.players[1].res.silver).toBe(1);
    expect(s.players[3].res.silver).toBe(3);
    cleanLog(s);
  });

  it('Bodyguards do not stop it (a swap, not a steal)', () => {
    const { s } = go('hustlers-bodyguards', { quads: Q, turns: [0], shop: ['silver.hustlers'], members: [[], ['thieves.watchdog']], res: [{ red: 9 }, { silver: 8 }] },
      [/Initiation/, /Hustlers/, /player:1/]);
    expect(s.players[0].res.silver).toBe(8);
    expect(s.players[1].res.silver).toBe(0);
  });

  it('then Paupers at Round End: the rival who got your 0 silver is paid', () => {
    const { s } = go('hustlers-paupers', { quads: Q, queue: [{ t: 'turn', p: 0 }, { t: 'allPlaced' }], shop: ['silver.hustlers'], members: [[], ['silver.paupers']], res: [{ red: 9 }, { silver: 8 }] },
      [/Initiation/, /Hustlers/, /player:1/, /^pass$/]);
    expect(s.players[1].res.silver).toBe(0);
    expect(s.log).toContain("P2's Paupers: no silver, +3 followers.");
  });
});

describe('more combos (Nov 12)', () => {
  it('Toll Collectors: 5 followers paid with 1 silver and 4 red still pays +1, not +5', () => {
    const { s } = go('toll-mixed', { quads: Q, turns: [1], members: [['silver.tollcollectors'], []], res: [{}, { silver: 1, red: 1 }] },
      [/Gather/, /tier:mid/, /pay:1-4-0-0/]);
    expect(s.log).toContain('P2 bought 5 followers (1 silver, 4 red).');
    expect(s.players[0].bonus).toBe(1);
  });

  it('Loan Officers: a rival with 0 of every other color is never offered; it ends when nothing is left to take', () => {
    const { s, trail } = go('loan-dry-rival', { quads: Q, n: 3, turns: [0], members: [['silver.loanofficers']], res: [{ silver: 5 }, { red: 1 }, { silver: 4 }] },
      [/use:/, /swap:1:red/]);
    expect(trail[1]).not.toMatch(/swap:2/);
    expect(s.players[0].res).toMatchObject({ silver: 4, red: 1 });
    expect(s.players[1].res).toMatchObject({ silver: 1, red: 0 });
    expect(s.log).toContain("P1's Loan Officers: swapped silver for 1 red from P2.");
    expect(s.pending.kind).toBe('place');
  });

  it('Loan Officers hands a Paupers owner silver: no +3 for them at Round End', () => {
    const { s } = go('loan-paupers', { quads: Q, queue: [{ t: 'turn', p: 0 }, { t: 'allPlaced' }], members: [['silver.loanofficers'], ['silver.paupers']], res: [{ silver: 2 }, { red: 4 }] },
      [/use:/, /swap:1:red/, /^done$/, /Gather/, /^pass$/]);
    expect(s.players[1].res.silver).toBe(1);
    expect(has(s, /Paupers/)).toBe(false);
  });

  // (a Kidnapper scene left here: Kidnappers was reworked Nov 11; the Magenta combo pass covers it)

  it('Impersonator copying a rival\'s Hustlers: swaps the copier\'s silver with a rival\'s', () => {
    const { s } = go('hustlers-impersonator', { quads: ['silver', 'red', 'echo', 'thieves'], n: 3, turns: [0], members: [[], ['silver.hustlers'], []], shop: ['echo.impersonators'],
      res: [{ red: 9, green: 9 }, { silver: 2 }, { silver: 9 }] }, [/Gather/, /Impersonator/, /Hustlers/, /player:2/]);
    expect(s.log).toContain("P1's Hustlers: swaps silver with P3 (0 for 9).");
    expect(s.players[0].res.silver).toBe(9);
    expect(s.players[2].res.silver).toBe(0);
    expect(s.players[1].res.silver).toBe(2);
    cleanLog(s);
  });
});
