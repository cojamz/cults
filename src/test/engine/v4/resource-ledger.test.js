// The resource ledger (Cory, Nov 4: "If you mouse over a resource it should show the sources of where that resource
// came from. Kind of like an accounting"): state.rledger credits every change to a player's resources this round to
// what caused it, so the seat's resource hover (MemberUse.jsx ResourceCard) can list it.
import { describe, it, expect } from 'vitest';
import { createGame, applyMove, chooseBotMove } from '../../../engine/v4/index.js';
import { seededRandom } from '../../../engine/v4/rng.js';

const seats = n => Array.from({ length: n }, (_, i) => ({ name: `P${i + 1}`, kind: 'bot' }));

describe('the resource ledger', () => {
  it('names what moved each resource, and the rows add up to the change since the round began', () => {
    let named = 0, unnamed = 0, checked = 0;
    for (const seed of [2, 7]) {
      let s = createGame({ seats: seats(4), seed });
      const rand = seededRandom(seed);
      let start = null;
      for (let k = 0; k < 1500 && !s.over; k++) {
        const before = s;
        s = applyMove(s, chooseBotMove(s, rand));
        if (s.round !== before.round || !start) { start = { round: s.round, res: null }; continue; }
        if (!s.rledger || s.rledger.round !== s.round) continue;
        // the baseline: the first state of this round the ledger has a page for, less what that page already holds
        if (!start.res) start.res = s.players.map(p => Object.fromEntries(s.resources.map(r => [r, (p.res[r] || 0) - Object.values(((s.rledger.rows[p.id] || {})[r]) || {}).reduce((a, b) => a + b, 0)])));
        for (const p of s.players) for (const r of s.resources) {
          const rows = ((s.rledger.rows[p.id] || {})[r]) || {};
          for (const [label, n] of Object.entries(rows)) { if (label === 'other') unnamed += Math.abs(n); else named += Math.abs(n); }
          expect(start.res[p.id][r] + Object.values(rows).reduce((a, b) => a + b, 0)).toBe(p.res[r] || 0);
          checked++;
        }
      }
    }
    expect(checked).toBeGreaterThan(1000);
    // nearly everything says where it came from
    expect(unnamed / (named + unnamed)).toBeLessThan(0.02);
  });
});
