// @vitest-environment node
// Last Call skips only turns that still have a rival's turn after them ("Skip your turns until everyone else is out of
// minions"). balance-1.0 expert game g8 (2 players): Ava's Echo copied Ben's Last Call, then her Stunt Double copied it
// again; the second copy re-skipped turns already after all of Ben's, so Gossip and Pocket Watch paid for skips that
// passed over no one.
import { describe, it, expect } from 'vitest';
import { applyMove } from '../../../engine/v4/core.js';
import { take } from './helpers.js';
import { sceneQ, buy, linesNaming } from './cards-helpers.js';

const Q = ['gold', 'red', 'purple', 'echo'];
const turns = (...ps) => ps.map(p => ({ t: 'turn', p }));
const pass = s => applyMove(s, { player: s.pending.player, option: s.pending.options.find(o => o.id === 'pass')?.id ?? s.pending.options[0].id });
const toPlace = s => { while (s.pending && s.pending.kind !== 'place') s = pass(s); return s; };
const skips = s => s.log.filter(l => / turn is skipped \(Last Call\)/.test(l));
const upcoming = s => s.queue.filter(t => t.t === 'turn').map(t => t.p);
function playOut(s) {
  const placed = [];
  while (s.round === 2 && s.pending) {
    if (s.pending.kind === 'place') { placed.push(s.pending.player); s = applyMove(s, { player: s.pending.player, option: s.pending.options.find(o => o.kind === 'slot').id }); }
    else s = pass(s);
  }
  return { s, placed };
}

describe('Last Call skips only turns a rival still places after', () => {
  it('one rival turn left between your turns: only the turn before it is skipped', () => {
    const s = take(sceneQ({ quadrants: Q, round: 2, left: 4, members: [[], ['purple.gossip']], queue: [...turns(0, 0, 1, 0), { t: "allPlaced" }] }), "purple.lastcall");
    expect(upcoming(s)).toEqual([1, 0, 0]);
    const { s: end } = playOut(s);
    expect(skips(end)).toEqual(["P1's turn is skipped (Last Call)."]);
    expect(linesNaming(end.log, 'Gossip')).toHaveLength(1);
  });

  it('everyone else already out: nothing is skipped, you still go last, and Gossip pays nothing', () => {
    const s0 = sceneQ({ quadrants: Q, round: 2, left: 3, members: [[], ['purple.gossip']], queue: [...turns(0, 0, 0), { t: 'allPlaced' }] });
    s0.players[1].left = 0;
    const s = take(s0, 'purple.lastcall');
    expect(s.players[0].bonus).toBe(2);
    expect(s.goesLast).toEqual({ round: 2, pid: 0 });
    expect(s.log).toContain("P1's Last Call: P1 takes the Goes Last token.");
    expect(s.log).toContain("P1's Last Call: 2 minions wait on the Goes Last token.");
    const { s: end, placed } = playOut(s);
    expect(placed).toEqual([0, 0]);
    expect(skips(end)).toEqual([]);
    expect(end.players[1].bonus).toBe(0);
  });

  it('g8: Echo copies a rival’s Last Call, then Stunt Double copies it again; the second copy skips nothing', () => {
    let s = sceneQ({ quadrants: Q, round: 2, left: 4, res: [{ green: 20, purple: 20 }], members: [[], ['purple.gossip']], shop: ['echo.hourglass'],
      queue: [...turns(1, 0, 0, 1, 1, 0, 0, 1), { t: 'allPlaced' }] });
    s = toPlace(take(s, 'purple.lastcall'));
    s = take(s, 'echo.echo');
    s = applyMove(s, { player: 0, option: s.pending.options.find(o => /Last Call/.test(o.label)).id });
    // Ben's last turn already came after Ava's last, so his Last Call put 2 passes ahead; Ava's copy takes the Goes Last
    // token (Cory, Nov 1 2:35pm), so Ben's minions go back to his hand and take those turns again; Ava's 3 are passed
    s = buy(s, 'echo.hourglass');
    if (s.pending?.kind === 'choose' && s.pending.player === 0) s = applyMove(s, { player: 0, option: s.pending.options.find(o => /Last Call/.test(o.label)).id });
    expect(s.log.filter(l => l.startsWith("P1 copies Last Call"))).toHaveLength(2);
    const { s: end, placed } = playOut(s);
    expect(placed).toEqual([1, 1, 1, 0, 0, 0]); // Ben's are all left; Ava's 3 come after them
    expect(skips(end)).toHaveLength(3);
    expect(linesNaming(end.log, 'Gossip')).toHaveLength(3);
  });
});
