// Greatest Hits' chip (what a copier of it is shown and given) must never promise more than its taker got. Found by the
// heavy cross-table fuzz on the live build (03b20c85d): Greatest Hits copied the taker's own Cash In ("Turn all your
// white into followers. +1 white."), which turned 1 white into a follower and gave +1 white back, yet the chip read
// "+1 green, +1 white" though the taker's white never rose. A copy that does a taking or trading space itself makes
// the copying space one a copier must do itself too.
import { describe, it, expect } from 'vitest';
import { move, take, play } from './helpers.js';
import { table } from './cards-helpers-b.js';
import { ledger } from '../../../engine/v4/content/echo.js';
import { runTable } from './fuzz-tables-runner.js';

const Q = ['trading', 'red', 'purple', 'echo'];
const pass = s => s.pending?.kind === 'buy' ? move(s, 'pass') : s;

describe('Greatest Hits chip', () => {
  it('copying your own Cash In makes Greatest Hits a space its copier does itself, not a +1 white chip', () => {
    let s = table(Q, { round: 3, left: 5, res: [{ white: 1 }], queue: [{ t: 'turn', p: 0 }, { t: 'turn', p: 0 }, { t: 'turn', p: 1 }] });
    s = pass(play(take(s, 'trading.cashin')));
    expect(s.players[0].res.white).toBe(1); // 1 white became a follower, then +1 white
    const white = s.players[0].res.white, followers = s.players[0].bonus;
    s = take(s, 'echo.eternity');
    s = move(s, 'color:trading');
    expect(s.players[0].res.white).toBe(white); // the copied Cash In turned the 1 white into a follower, then gave +1 white
    expect(s.players[0].bonus).toBe(followers + 1);
    const hits = Object.values(ledger(s).now).find(e => e.name === 'Greatest Hits');
    expect(hits.redo).toBe(true);
  });
  it('the fuzz table that found it plays through', () => {
    runTable({ quadrants: Q, n: 2, seed: 35001, kind: 'mixed' });
  }, 60000);
});
