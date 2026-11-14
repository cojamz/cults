// @vitest-environment node
// Hard combos played out in one exact scene each (Nov 5 stress test): copies inside copies, Encore doubling,
// skips against Early Birds. Each checks the outcome against the printed text.
import { describe, it, expect } from 'vitest';
import { createGame, resume, followers, applyMove } from '../../../engine/v4/core.js';
import { take } from './helpers.js';
import { STRAYS, stray } from './stray.js';

function scene({ quads, n = 2, seed = 7, round = 3, res = [], members = [], shop = [], turns = null, left = 5, pileFirst = [] }) {
  const s = createGame({ seats: Array.from({ length: n }, (_, i) => ({ name: `P${i + 1}`, kind: 'bot' })), seed, quadrants: quads });
  Object.assign(s, { queue: [], pending: null, round, slots: {}, order: [], log: [] });
  delete s.echo;
  s.players.forEach((p, i) => { p.res = Object.fromEntries(s.resources.map(r => [r, 0])); Object.assign(p.res, res[i] || {}); p.bonus = 0; p.discount = 0; p.left = left; });
  s.pile = [...s.shop, ...s.pile]; s.shop = [];
  const grab = def => { const k = s.pile.findIndex(u => s.cards[u].def === def); if (k < 0) return stray(s, def); return s.pile.splice(k, 1)[0]; };
  members.forEach((list, i) => { for (const d of list || []) { const u = grab(d); s.players[i].members.push(u); s.cards[u].recruitedRound = 0; s.cards[u].recruitedBy = i; } });
  for (const d of shop) s.shop.push(grab(d));
  if (pileFirst.length) s.pile.unshift(...pileFirst.map(grab));
  s.queue = (turns || [0, 1, 0, 1, 0, 1]).map(p => ({ t: 'turn', p }));
  return resume(s);
}
// steps: list of regex on option label/id, consumed in order when one matches; else stop
function drive(s, steps, max = 40) {
  const trail = [];
  for (let k = 0; k < max && s.pending; k++) {
    const o = s.pending.options;
    const want = steps[0];
    let hit = want && o.find(x => want.test(x.id) || want.test(x.label || ''));
    if (hit) steps.shift();
    else if (s.pending.kind === 'pay') hit = o.find(x => x.default) || o[0];
    else { trail.push(`STOP @${s.pending.kind} P${s.pending.player + 1}: ${s.pending.prompt} :: ${o.map(x => x.id + '=' + x.label).join(' | ')}`); break; }
    trail.push(`> P${s.pending.player + 1} ${s.pending.kind}: ${hit.id} (${hit.label})`);
    s = applyMove(s, { player: s.pending.player, option: hit.id });
  }
  return { s, trail };
}
const dump = (title, s, trail) => console.log(`\n===== ${title}\n${trail.join('\n')}\n--- log\n${s.log.join('\n')}\n--- res ${s.players.map(p => JSON.stringify(p.res) + ' f' + followers(s, p) + ' m' + p.members.length + ' left' + p.left).join(' / ')}`);
const Q = ['red', 'echo', 'purple', 'market'];
const run = (sc, steps) => drive(scene({ quads: Q, ...sc }), steps).s;
const has = (s, re) => s.log.some(l => re.test(l));

describe('hard combos (Nov 5)', () => {
  it('Bouncers ("the next two rivals’ turns are skipped") against Early Birds: the kept turn counts, the rival after it is skipped', () => {
    const s = run({ n: 3, turns: [0, 1, 2, 0, 1, 2], members: [[], ['purple.earlybird'], []], shop: ['purple.bouncer'], res: [{ purple: 20 }] }, [/Build Up/, /Bouncers/]);
    expect(s.log.filter(l => /Early Birds: P2's turn can't be skipped/.test(l))).toHaveLength(1);
    expect(has(s, /Bouncers: P3 skips their next turn/)).toBe(true);
    expect(s.pending.player).toBe(1); // P2 still places next
  });

  it('Bouncers with no Early Birds still skips the next two rivals', () => {
    const s = run({ n: 3, turns: [0, 1, 2, 0, 1, 2], shop: ['purple.bouncer'], res: [{ purple: 20 }] }, [/Build Up/, /Bouncers/]);
    expect(has(s, /Bouncers: P2 skips their next turn/)).toBe(true);
    expect(has(s, /Bouncers: P3 skips their next turn/)).toBe(true);
  });

  it('Encore + Stunt Double: the copy of the action you just took happens twice', () => {
    const s = run({ members: [['echo.encore']], shop: ['echo.hourglass'], res: [{ green: 20 }] }, [/Build Up/, /Encore/, /Stunt Double/]);
    // Build Up alone: +1 for its minion, +1 (Cory, Nov 10)
    expect(s.log.filter(l => /Stunt Double: P1 copied Build Up: \+2 green/.test(l))).toHaveLength(2);
    expect(s.players[0].res.green).toBe(20 + 2 - 7 + 4); // Stunt Double costs 7 (Nov 5: every member +1)
  });

  it('Encore + Extra Shift: two more minions this round', () => {
    const s = run({ members: [['echo.encore']], shop: ['purple.extrashift'], res: [{ purple: 20 }] }, [/Build Up/, /Encore/, /Extra Shift/]);
    expect(s.players[0].left).toBe(6); // 5, one placed, two more
  });

  it('Stunt Double copied by Wallflower and Roadie: the copy is doubled, Roadie pays per green member', () => {
    const s = run({ members: [['echo.wallflower', 'echo.roadie9']], shop: ['echo.hourglass'], res: [{ green: 20 }] }, [/Build Up/, /Stunt Double/]);
    expect(has(s, /Stunt Double: P1 copied Build Up: \+2 green, doubled by P1's Wallflower/)).toBe(true);
    expect(has(s, /P1's Roadie: \+3 green/)).toBe(true); // Wallflower, Roadie, Stunt Double
  });

  // Greatest Hits is Medley's rule since Nov 10, on your own minions only since Nov 11 11:20pm: P1's own Gather on Red is
  // copied, P2's Late Shift there is not; Stunt Double recruited after it copies Greatest Hits, which must not loop
  it('Stunt Double copying Greatest Hits never loops back into Greatest Hits', () => {
    const r = drive(scene({ quads: Q, turns: [0, 1, 0, 1], shop: ['echo.hourglass'], res: [{ green: 20 }] }), [/Gather/, /pass/, /Late Shift/, /pass/, /Greatest Hits/, /Red/, /Stunt Double/]);
    const s = r.s;
    expect(s.log.filter(l => /^P1's Greatest Hits: \+1 green/.test(l))).toHaveLength(1);
    expect(s.log).toContain("P1's Stunt Double: P1 copied Greatest Hits: +1 green, +4 red.");
    expect(s.log.some(l => /^P1 cop(ied|ies) Late Shift/.test(l))).toBe(false); // P2's minion: not copied
    expect(s.players[0].res.red).toBe(12); // own Gather +4, copied by Greatest Hits +4, then that chip again +4
    expect([s.pending.kind, s.pending.player]).toEqual(['place', 1]);
  });

  // Impersonator left the deck for Mimics (Nov 11 9:02pm); its rule stays and it is dealt here as a fixture, because this
  // is the path (a choice made after Greatest Hits reaching a rival's Stunt Double) that looped forever on Nov 6
  it("Impersonator doing a rival's Stunt Double after Greatest Hits never loops back into Greatest Hits", () => {
    const r = drive(scene({ quads: Q, turns: [0, 1, 0, 1], members: [[], ['echo.hourglass']], shop: ['echo.impersonators'], res: [{ green: 30 }] }), [/Gather/, /pass/, /Late Shift/, /pass/, /Greatest Hits/, /Red/, /Impersonator/, /Stunt Double/]);
    const s = r.s;
    expect(s.log.filter(l => /^P1's Greatest Hits: \+1 green/.test(l))).toHaveLength(1);
    expect(s.log.filter(l => /Impersonator does Stunt Double's On Recruit/.test(l))).toHaveLength(1);
    expect(s.log).toContain("P1's Stunt Double: P1 copied Greatest Hits: +1 green, +4 red.");
    expect(s.log.some(l => /^P1 cop(ied|ies) Late Shift/.test(l))).toBe(false); // P2's minion: not copied
    expect([s.pending.kind, s.pending.player]).toEqual(['place', 1]);
  });

  it('Barker + Spree: a follower buy after each of the three recruits', () => {
    let s0 = scene({ quads: Q, members: [['trading.barker']], shop: ['red.volunteer'], pileFirst: ['red.host', 'red.recruiter'], res: [{ blue: 30, red: 30 }] });
    s0.discard = s0.pile.splice(0, 2);
    const r = drive(s0, [/Spree/, /Host/, /^pay:/, /tier:small/, /^pay:/, /Recruiter/, /^pay:/, /tier:small/, /^pay:/, /Volunteer/, /tier:small/]);
    const s = r.s; // Spree recruits two from the discard pile now (Cory, Nov 10), then the turn's own recruit
    expect(s.log.filter(l => /bought 1 follower/.test(l))).toHaveLength(3);
    expect(s.pending.player).toBe(1);
  });
});
