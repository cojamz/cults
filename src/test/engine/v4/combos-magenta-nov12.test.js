// @vitest-environment node
// Combo tester, Magenta's Nov 11 reworks (Cory, Nov 11 9:17pm and 9:20pm): Thief-Takers ("Whenever a rival steals from
// you, steal 1 back from them."), Night Thieves ("Round End, before scoring: steal 3 resources."), Press Gang ("Round End:
// a rival you choose gives you one of their members.") and Changeling ("On Recruit: swap this member for a rival's
// member costing up to 8."), played against the steal sources, the swaps, the Round End members and each other. Each
// scene checks the outcome against the printed text. Harness: combos-green-nov12.test.js's scene/drive/go.
import './fixtures/gold-on.js'; // Gold's cards, a test-only fixture since Gold left the game (Cory, Nov 24)
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

const Q = ['thieves', 'silver', 'red', 'yellow'];
const QW = ['thieves', 'trading', 'red', 'yellow'];
const END = [{ t: 'allPlaced' }, { t: 'endRound' }];

const tot = p => Object.values(p.res).reduce((a, b) => a + b, 0);
const lines = (s, re) => s.log.filter(l => re.test(l));
const bonusOf = (s, i) => s.players[i].bonus;

describe('Thief-Takers: "Whenever a rival steals from you, steal 1 back from them."', () => {
  it('Plunder (3 followers, then 3 resources) is one steal: one steal back, not five', () => {
    const { s } = go('bg-heist', { quads: Q, round: 2, turns: [0], members: [[], ['thieves.watchdog']], res: [{ red: 5 }, { gold: 6 }], prep: st => { st.players[1].bonus = 5; } },
      [/Plunder/, /player:1/, /player:1/, /player:1/, /take:1:gold/, /take:1:gold/, /take:1:gold/]);
    expect(lines(s, /Thief-Takers/)).toEqual(["P2's Thief-Takers: took 1 from P1."]);
    expect(s.players[0].res).toMatchObject({ magenta: 1, red: 4, gold: 3 }); // 1 red back (P1's biggest pile when the steal began)
    expect(s.players[1].res).toMatchObject({ gold: 3, red: 1 });
    expect([bonusOf(s, 0), bonusOf(s, 1)]).toEqual([3, 2]);
    cleanLog(s);
  });

  it('both players hold Thief-Takers: one steal back, the thief\'s Thief-Takers does not answer it (no loop)', () => {
    const { s } = go('bg-both', { quads: Q, round: 1, turns: [0], members: [['thieves.watchdog'], ['thieves.watchdog']], res: [{ red: 2 }, { gold: 3 }] },
      [/Pilfer/, /take:1:gold/]);
    expect(lines(s, /Thief-Takers/)).toEqual(["P2's Thief-Takers: took 1 from P1."]);
    expect(s.players[0].res).toMatchObject({ magenta: 1, red: 1, gold: 1 });
    expect(s.players[1].res).toMatchObject({ gold: 2, red: 1 });
    expect(tot(s.players[0]) + tot(s.players[1])).toBe(6); // 5 held + Pilfer's +1 magenta
    cleanLog(s);
  });

  it('4 players, Night Thieves takes 2 from one Thief-Takers owner and 1 from another: each answers once; the untouched one does not', () => {
    const { s } = go('bg-catburglars-4p', { quads: Q, n: 4, round: 1, queue: END,
      members: [['thieves.secondstory'], ['thieves.watchdog'], ['thieves.watchdog'], ['thieves.watchdog']], res: [{ red: 3 }, { gold: 2 }, { blue: 2 }, { silver: 2 }] },
      [/take:1:gold/, /take:1:gold/, /take:2:blue/]);
    expect(lines(s, /Thief-Takers/)).toEqual(["P2's Thief-Takers: took 1 from P1.", "P3's Thief-Takers: took 1 from P1."]);
    expect(tot(s.players[0])).toBe(3 + 3 - 2);
    expect([1, 2, 3].map(i => tot(s.players[i]))).toEqual([1, 2, 2]);
    expect(has(s, /P1's Night Thieves stole 3 \(2 gold from P2, 1 blue from P3\)/)).toBe(true);
    cleanLog(s);
  });

  it("the thief's Lie Low (\"Rivals can't steal from you this round\") stops the steal back", () => {
    const { s } = go('bg-lielow', { quads: Q, round: 1, turns: [0], members: [[], ['thieves.watchdog']], res: [{ red: 2 }, { gold: 3 }], prep: st => { st.players[0].hideout = 1; } },
      [/Pilfer/, /take:1:gold/]);
    expect(has(s, /Thief-Takers/)).toBe(false);
    expect(s.players[0].res).toMatchObject({ magenta: 1, red: 2, gold: 1 });
    expect(s.players[1].res.gold).toBe(2);
  });

  it('Starveling on the Thief-Takers owner ("your steals take 2 more") makes the steal back 3', () => {
    const { s } = go('bg-desperado', { quads: Q, round: 1, turns: [0], members: [[], ['thieves.watchdog', 'thieves.desperado']], res: [{ red: 4 }, { gold: 3 }],
      prep: st => { st.players[0].bonus = 9; } }, [/Pilfer/, /take:1:gold/]);
    expect(s.log).toContain("P2's Thief-Takers: takes 3, not 1 (P2's Starveling: +2).");
    expect(s.log).toContain("P2's Thief-Takers: took 3 from P1.");
    expect(tot(s.players[0])).toBe(4 + 1 + 1 - 3);
    expect(tot(s.players[1])).toBe(3 - 1 + 3);
  });

  it("the steal back is a steal: the thief's Informer (\"they lose 1 follower\") takes 1 from the Thief-Takers owner", () => {
    const { s } = go('bg-snitch', { quads: Q, round: 1, turns: [0], members: [['thieves.snitch'], ['thieves.watchdog']], res: [{ red: 2 }, { gold: 3 }],
      prep: st => { st.players[1].bonus = 2; } }, [/Pilfer/, /take:1:gold/]);
    expect(s.log).toContain("P2's Thief-Takers: took 1 from P1.");
    expect(s.log).toContain("P1's Informer: P2 loses 1 follower.");
    expect(bonusOf(s, 1)).toBe(1);
  });

  it('Plunder (3 followers, then 3 resources) is one steal: the victim\'s Informer ("they lose 1 follower") takes 1, not five', () => {
    const { s } = go('snitch-heist', { quads: Q, round: 2, turns: [0], members: [[], ['thieves.snitch']], res: [{ red: 5 }, { gold: 6 }], prep: st => { st.players[0].bonus = 9; st.players[1].bonus = 5; } },
      [/Plunder/, /player:1/, /player:1/, /player:1/, /take:1:gold/, /take:1:gold/, /take:1:gold/]);
    expect(lines(s, /Informer/)).toEqual(["P2's Informer: P1 loses 1 follower."]);
    expect(s.players[0].res.gold).toBe(3);
    expect([bonusOf(s, 0), bonusOf(s, 1)]).toEqual([9 + 3 - 1, 2]);
    cleanLog(s);
  });

  it("3 players: a third player's Lookout answers the first steal, not the steal back", () => {
    const { s } = go('bg-lookout', { quads: Q, n: 3, round: 1, turns: [0], members: [[], ['thieves.watchdog'], ['thieves.lookout']], res: [{ red: 3 }, { gold: 3 }, {}] },
      [/Pilfer/, /take:1:gold/]);
    expect(lines(s, /Thief-Takers|Lookout/)).toEqual(expect.arrayContaining(["P2's Thief-Takers: took 1 from P1.", "P3's Lookout: took 1 from P1."]));
    expect(lines(s, /Lookout/).length).toBe(1);
    expect(tot(s.players[0])).toBe(3 + 1 + 1 - 2);
    expect(tot(s.players[2])).toBe(1);
  });

  it('Poach (a member taken, "still a steal for Thief-Takers") is answered with 1 resource', () => {
    const { s } = go('bg-poach', { quads: Q, round: 3, turns: [0], members: [[], ['thieves.watchdog', 'red.bigfamily']], res: [{ red: 3 }, {}] },
      [/Poach/, /Big Family/]);
    expect(names(s, 0)).toEqual(['Big Family']);
    expect(s.log).toContain("P2's Thief-Takers: took 1 from P1.");
    expect(tot(s.players[0])).toBe(3 + 1 - 1);
    expect(tot(s.players[1])).toBe(1);
    cleanLog(s);
  });

  it('Poach by a thief holding nothing but the space\'s magenta: the steal back takes that 1 magenta', () => {
    const { s } = go('bg-poach-empty', { quads: Q, round: 3, turns: [0], members: [[], ['thieves.watchdog', 'red.bigfamily']], res: [{}, {}] },
      [/Poach/, /Big Family/]);
    expect(tot(s.players[0])).toBe(0);
    expect(s.players[1].res.magenta).toBe(1);
    cleanLog(s);
  });
});

describe('Night Thieves: "Round End, before scoring: steal 3 resources."', () => {
  it('no rival holds anything: one plain line', () => {
    const { s } = go('cb-empty', { quads: Q, n: 3, round: 1, queue: END, members: [['thieves.secondstory'], [], []], res: [{ red: 2 }] }, []);
    expect(s.log).toContain("P1's Night Thieves: no rival to steal from.");
    expect(s.pending).toBeFalsy();
  });

  it('the steal lands before the contests are scored: it can take the Magenta contest (most resources)', () => {
    // P2 leads red 5 to 3; Night Thieves takes 3 of P2's red, so P1 holds 6 to P2's 2 when Most red is scored
    const { s } = go('cb-contest', { quads: Q, round: 1, queue: END, members: [['thieves.secondstory'], []], res: [{ red: 3 }, { red: 5 }] },
      [/take:1:red/, /take:1:red/, /take:1:red/]);
    expect([s.players[0].res.red, s.players[1].res.red]).toEqual([6, 2]);
    const at = s.log.indexOf("P1's Night Thieves stole 3 (3 red from P2)."), ends = s.log.findIndex(l => /Round I ends/.test(l));
    expect(at).toBeGreaterThanOrEqual(0);
    expect(at).toBeLessThan(ends);
    expect(s.log[ends]).toMatch(/Most red: P1 \+4/);
    cleanLog(s);
  });

  // Cory, Nov 4: "Round Start / Round End effects resolve in turn order." P1 goes first: P2's Night Thieves sees what
  // P1's took and may take it back.
  it("two owners, 2 players: P2's Night Thieves (later in turn order) can take back what P1's took", () => {
    const { s, trail } = go('cb-two', { quads: Q, round: 1, queue: END, members: [['thieves.secondstory'], ['thieves.secondstory']], res: [{}, { gold: 3 }] },
      [/take:1:gold/, /take:1:gold/, /take:1:gold/, /take:0:gold/, /take:0:gold/, /take:0:gold/]);
    expect(trail.join('\n')).not.toMatch(/STOP/);
    expect(s.log).toContain("P1's Night Thieves stole 3 (3 gold from P2).");
    expect(s.log).toContain("P2's Night Thieves stole 3 (3 gold from P1).");
    expect([s.players[0].res.gold, s.players[1].res.gold]).toEqual([0, 3]);
  });

  // Same rule, with a Round End member that reads what you hold (Paupers, "if you hold no silver, +3 followers").
  // core's allPlaced step runs each player's Round End members as its own step, so P1's Night Thieves picks finish before
  // P2's Paupers reads P2's silver (was a bug: Paupers settled on the spot, ahead of the queued picks).
  it("P1's Night Thieves takes P2's only silver; P2's Paupers (later in turn order) then sees no silver: +3", () => {
    const { s } = go('cb-paupers', { quads: Q, round: 1, queue: END, members: [['thieves.secondstory'], ['silver.paupers']], res: [{}, { silver: 1, red: 2 }] },
      [/take:1:silver/, /take:1:red/, /take:1:red/]);
    expect(s.players[1].res.silver).toBe(0);
    expect(s.log).toContain("P2's Paupers: no silver, +3 followers.");
  });
});

describe('Press Gang: "Round End: a rival you choose gives you one of their members." (worth 2)', () => {
  it('3 players, only one rival has members: that rival is asked, no rival question; Mourners on the giver pays +2 white', () => {
    const { s } = go('kid-leave', { quads: QW, n: 3, round: 1, queue: END, members: [['thieves.kidnappers'], ['trading.leavetakers', 'red.intern'], []] },
      [/Intern/]);
    expect(names(s, 0)).toEqual(['Press Gang', 'Intern']);
    expect(s.log).toContain("P2's Mourners: Intern left: +2 white.");
    expect(s.log).toContain("P1's Press Gang: P2 gives Intern to P1.");
    expect(s.players[1].res.white).toBe(2);
    cleanLog(s);
  });

  it('the giver gives Mourners itself: it counts its own leaving (+2 white to the giver, none to the new holder)', () => {
    const { s } = go('kid-leave-self', { quads: QW, round: 1, queue: END, members: [['thieves.kidnappers'], ['trading.leavetakers', 'red.intern']] }, [/Mourners/]);
    expect(s.players[1].res.white).toBe(2);
    expect(s.players[0].res.white).toBe(0);
    expect(names(s, 0)).toContain('Mourners');
  });

  it('no rival has a member: one plain line', () => {
    const { s } = go('kid-none', { quads: Q, n: 4, round: 1, queue: END, members: [['thieves.kidnappers', 'red.intern'], [], [], []] }, []);
    expect(s.log).toContain("P1's Press Gang: no rival has a member.");
  });

  it("a given Banker's On Recruit does not fire for the Press Gang owner (a gift, not their recruit: Cory, Oct 21)", () => {
    const { s } = go('kid-banker', { quads: Q, round: 1, queue: END, members: [['thieves.kidnappers'], ['gold.banker']] }, [/Banker/]);
    expect(names(s, 0)).toContain('Banker');
    expect(s.players[0].res.gold || 0).toBe(0);
  });

  it('Warden ("Your other members can\'t be swapped") does not stop it: a gift, not a swap; the giver may give either', () => {
    const { s } = go('kid-loyalists', { quads: Q, round: 1, queue: END, members: [['thieves.kidnappers'], ['red.loyalists', 'red.intern']] }, []);
    expect(s.pending.prompt).toBe('Press Gang: give which of your members to P1?');
    expect(s.pending.player).toBe(1);
    expect(s.pending.options.map(o => o.label).sort()).toEqual(['Intern (4)', 'Warden (5)']);
  });

  it('4 players: the owner picks among rivals with members (counts named), the picked rival chooses; followers move with the member', () => {
    const sc = { quads: Q, n: 4, round: 1, queue: END, members: [['thieves.kidnappers'], ['red.intern'], ['red.twins', 'silver.dowager'], []] };
    const first = go('kid-4p-ask', sc, []).s;
    expect(first.pending.prompt).toBe('Press Gang: which rival gives you a member of their choice?');
    expect(first.pending.options.map(o => o.label)).toEqual(['P2 (1 member)', 'P3 (2 members)']);
    const { s } = go('kid-4p', sc, [/player:2/, /Triplets/]);
    expect(names(s, 0)).toEqual(['Press Gang', 'Triplets']);
    expect(names(s, 2)).toEqual(['Dowager']);
    expect(followers(s, s.players[0])).toBeGreaterThanOrEqual(1 + 2 + 3);
    cleanLog(s);
  });

  // Cory, Nov 4: Round End effects resolve in turn order, so P2's Press Gang acts after P1's has resolved.
  it("two owners, 2 players: P2's Press Gang may take back the member P1 just took", () => {
    const { s } = go('kid-two', { quads: Q, round: 1, queue: END, members: [['thieves.kidnappers'], ['thieves.kidnappers', 'red.intern']] }, [/Intern/]);
    expect(s.pending?.prompt).toBe('Press Gang: give which of your members to P2?');
    expect(s.pending.options.map(o => o.label).sort()).toEqual(['Intern (4)', 'Press Gang (10)']);
  });

  it("two owners: P2 gives away its own Press Gang to P1's, so P2 has no Press Gang when its turn in the order comes", () => {
    const { s } = go('kid-give-kid', { quads: Q, round: 1, queue: END, members: [['thieves.kidnappers'], ['thieves.kidnappers', 'red.intern']] }, [/Press Gang/]);
    expect(names(s, 0).filter(n => n === 'Press Gang').length).toBe(2);
    expect(s.pending?.prompt || '').not.toMatch(/Press Gang/);
    expect(names(s, 1)).toEqual(['Intern']);
  });

  // Same rule with a member that counts at Round End: P2's Harlequin counts after P1's Press Gang took P2's red member.
  // (was a bug, as Paupers above: Harlequin counted 3 colors on the spot, before P2 gave the Intern)
  it("P2 gives its only red member; P2's Harlequin (later in turn order) then counts 2 colors, not 3", () => {
    const { s } = go('kid-cosmo', { quads: ['thieves', 'echo', 'red', 'yellow'], round: 1, queue: END,
      members: [['thieves.kidnappers'], ['yellow.cosmopolitans', 'red.intern', 'echo.copyist']] }, [/Intern/]);
    expect(s.log).toContain("P2's Harlequin: 2 colors among their members, +2 followers.");
  });
});

describe('Changeling: "On Recruit: swap this member for a rival\'s member costing up to 8."', () => {
  const RICHRES = { magenta: 12, red: 12 };
  it('4 players: members costing exactly 8 are offered, 9 are not, from every rival', () => {
    const { s } = go('da-cap-4p', { quads: Q, n: 4, turns: [0], shop: ['thieves.doubleagent'], members: [[], ['red.bigfamily', 'thieves.lookout'], ['silver.bookies'], ['thieves.shoplifter']], res: [RICHRES] },
      [/Stash/, /Changeling/]);
    expect(s.pending.prompt).toBe('Changeling: swap for which member?');
    expect(s.pending.options.map(o => o.label).sort()).toEqual(["P2's Big Family (8)", "P3's Indulgence Seller (8)"]);
  });

  it('no rival member costing 8 or less: one plain line, and the Changeling stays', () => {
    const { s } = go('da-none', { quads: Q, n: 3, turns: [0], shop: ['thieves.doubleagent'], members: [[], ['thieves.lookout'], ['gold.tycoon']], res: [RICHRES] },
      [/Stash/, /Changeling/]);
    expect(s.log).toContain("P1's Changeling: no rival member costing 8 or less to swap for.");
    expect(names(s, 0)).toEqual(['Changeling']);
  });

  it('Richer: the card reads "up to 10"; a member the shop prices 10 is offered, 11 is not', () => {
    const { s } = go('da-rich', { quads: Q, n: 3, turns: [0], shop: ['thieves.doubleagent'], members: [[], ['red.bigfamily', 'thieves.lookout'], ['silver.bookies']], res: [{ magenta: 14, red: 14 }],
      rules: { econ: 'rich' } }, [/Stash/, /Changeling/]);
    expect(s.pending.prompt).toBe('Changeling: swap for which member?');
    expect(s.pending.options.map(o => o.label).sort()).toEqual(["P2's Big Family (10)", "P3's Indulgence Seller (10)"]);
  });

  it('Richer, nothing at 10 or less: the line names 10', () => {
    const { s } = go('da-rich-none', { quads: Q, turns: [0], shop: ['thieves.doubleagent'], members: [[], ['thieves.lookout']], res: [{ magenta: 14, red: 14 }], rules: { econ: 'rich' } },
      [/Stash/, /Changeling/]);
    expect(s.log).toContain("P1's Changeling: no rival member costing 10 or less to swap for.");
  });

  // Nov 12, a seeded game looped forever: Changeling swapped away, then swapped straight back the same turn (Shadow
  // copying Do It Again copying Promote), firing its On Recruit each time. Its On Recruit happens once a turn for a player.
  it('swapped straight back the same turn, Changeling does not swap again', () => {
    const { s } = go('da-back', { quads: Q, turns: [0], shop: ['thieves.doubleagent'], members: [[], ['thieves.bigscore']], res: [RICHRES, { gold: 4 }] },
      [/Stash/, /Changeling/, /Safecracker/]);
    const before = s.log.length;
    expect(contextFor(s).swapMembers(s.players[0], uidOf(s, 0, 'thieves.bigscore'), uidOf(s, 1, 'thieves.doubleagent'))).toBe(true);
    expect(names(s, 0)).toEqual(['Changeling']);
    expect(s.log.slice(before)).toContain("P1's Changeling came back this turn: its On Recruit already happened.");
    expect(s.queue.some(t => /doubleAgent|Changeling/i.test(JSON.stringify(t)))).toBe(false);
  });

  it('a used once-per-game member (Safecracker) arrives still used: no second use', () => {
    const { s } = go('da-used', { quads: Q, turns: [0], shop: ['thieves.doubleagent'], members: [[], ['thieves.bigscore']], res: [RICHRES, { gold: 4 }],
      prep: st => { st.cards[uidOf(st, 1, 'thieves.bigscore')].used = true; } }, [/Stash/, /Changeling/, /Safecracker/]);
    expect(names(s, 0)).toEqual(['Safecracker']);
    expect(names(s, 1)).toEqual(['Changeling']);
    expect(s.cards[uidOf(s, 0, 'thieves.bigscore')].used).toBe(true);
    expect(s.log).toContain("P1's Changeling swaps sides: P1 gets P2's Safecracker.");
  });

  it("swapped for a rival's Hostages: its On Recruit fires for the new holder (your own swap is a recruit: Cory, Nov 1)", () => {
    const { s } = go('da-exchange', { quads: Q, turns: [0], shop: ['thieves.doubleagent'], members: [['red.twins'], ['yellow.exchangestudents', 'echo.regulars']], res: [RICHRES] },
      [/Stash/, /Changeling/, /Hostages/, /Triplets ↔ P2: Gardeners/]); // Gardeners, not Copyist, since Copyist costs 7 (Nov 13)
    expect(names(s, 0).sort()).toEqual(['Gardeners', 'Hostages']);
    expect(names(s, 1).sort()).toEqual(['Changeling', 'Triplets']);
    cleanLog(s);
  });

  it("Hostages swaps in a rival's Changeling: the Changeling's On Recruit fires and swaps it on", () => {
    const { s } = go('exchange-da', { quads: Q, turns: [0], shop: ['yellow.exchangestudents'], members: [['red.proselytizer'], ['thieves.doubleagent', 'red.bigfamily']], res: [{ yellow: 12, red: 12 }] },
      [/Stash/, /Hostages/, /Proselytizers ↔ P2: Changeling/, /Big Family/]);
    expect(names(s, 0).sort()).toEqual(['Big Family', 'Hostages']);
    expect(names(s, 1).sort()).toEqual(['Changeling', 'Proselytizers']);
    expect(s.log).toContain("P1's Changeling swaps sides: P1 gets P2's Big Family.");
    cleanLog(s);
  });

  it('Mourners on both sides: the Changeling leaving pays its old holder, the member taken pays its old holder', () => {
    const { s } = go('da-leavetakers', { quads: QW, turns: [0], shop: ['thieves.doubleagent'], members: [['trading.leavetakers'], ['trading.leavetakers', 'red.bigfamily']], res: [RICHRES] },
      [/Stash/, /Changeling/, /Big Family/]);
    expect([s.players[0].res.white, s.players[1].res.white]).toEqual([2, 2]);
    expect(s.log).toContain("P1's Mourners: Changeling left: +2 white.");
    expect(s.log).toContain("P2's Mourners: Big Family left: +2 white.");
    cleanLog(s);
  });
});

// Try Out (Blue: "Discard a shop member. Use its effect now. +1 blue."), whose effect fires for Round End members
// (Claude's logged fill-in, Nov 11). Night Thieves and Press Gang run their Round End on core's allPlaced hook (before
// scoring), which Try Out's driveHook (market.js) does not look for; Paupers and Harlequin share the hook.
describe('Try Out on the Magenta Round End members', () => {
  const QB = ['thieves', 'market', 'red', 'yellow'];
  // (was a bug: market.js driveHook read onRoundEnd only, not onAllPlaced, and the member was discarded with no effect)
  it('Try Out on Night Thieves in the shop: steal 3 now', () => {
    const { s } = go('td-catburglars', { quads: QB, round: 1, turns: [0], shop: ['thieves.secondstory'], res: [{}, { red: 5 }] },
      [/Try Out/, /Night Thieves/, /take:1:red/, /take:1:red/, /take:1:red/]);
    expect(s.players[0].res.red).toBe(3);
  });
  it('Try Out on Press Gang in the shop: a rival gives you a member now', () => {
    const { s } = go('td-kidnappers', { quads: QB, round: 1, turns: [0], shop: ['thieves.kidnappers'], members: [[], ['red.intern']] },
      [/Try Out/, /Press Gang/, /Intern/]);
    expect(names(s, 0)).toContain('Intern');
  });
});
