// @vitest-environment node
// The log says only what was paid (player-agents reviews, Nov 13). With the +1 once per game (rules.plus1 'game'), a
// space's printed "+1 <color>." goes to its first taker only, and a copy never gets it.
// Write-Off: "Give a member to a rival for its cost in white. +1 white." logged "+7 white, +1 white" for a later taker
// who got 7 (pilot 1). Reprise copying Build Up ("+1 green per minion on Green spaces, this one included. +1 green.")
// logged "+3 green" when the copy paid 2 (r3g4).
import { describe, it, expect } from 'vitest';
import { move, take } from './helpers.js';
import { table, uidIn } from './cards-helpers-b.js';
import { spacesOf } from '../../../engine/v4/index.js';

const at = (s, qid, key) => `${s.quadrants.indexOf(qid)}-${spacesOf(s, qid).findIndex(a => a.key === key)}`;

describe('Write-Off log', () => {
  for (const first of [true, false]) {
    it(`${first ? 'the first taker' : 'a later taker'}: the line matches the white gained`, () => {
      let s = table(['trading', 'red', 'gold', 'purple'], { round: 2, rules: { plus1: 'game' }, members: [['red.bigfamily']] });
      if (!first) s.plus1Seen = { [at(s, 'trading', 'writeoff')]: true };
      const w0 = s.players[0].res.white;
      s = take(s, 'trading.writeoff');
      s = move(s, `card:${uidIn(s, 'red.bigfamily', 0)}`);
      if (s.pending?.kind === 'choose' && s.pending.options.some(o => o.kind === 'player')) s = move(s, s.pending.options.find(o => o.kind === 'player').id);
      const got = s.players[0].res.white - w0;
      const line = s.log.find(l => /^P1's Write-Off: \+\d/.test(l));
      const logged = [...line.matchAll(/\+(\d+) white/g)].reduce((a, m) => a + Number(m[1]), 0);
      const claim = s.log.filter(l => /^P1 \+1 white \(first to take Write-Off\)/.test(l)).length;
      expect(logged + claim).toBe(got);
      expect(claim + (/, \+1 white/.test(line) ? 1 : 0)).toBe(first ? 1 : 0);
    });
  }
});

describe('a copy’s log line', () => {
  it('Reprise copying Build Up says the 2 green it paid, not the 3 its taker got', () => {
    let s = table(['echo', 'red', 'gold', 'purple'], { rules: { plus1: 'game' }, queue: [{ t: 'turn', p: 0 }, { t: 'turn', p: 0 }] });
    s = take(s, 'echo.chant');
    while (s.pending?.kind !== 'place') s = move(s, s.pending.options.find(o => o.kind === 'pass')?.id || s.pending.options[0].id);
    s = take(s, 'echo.refrain');
    const g0 = s.players[0].res.green;
    const o = s.pending.options.find(x => x.label.startsWith('Build Up'));
    s = move(s, o.id);
    const line = s.log.find(l => /^P1 copied Build Up: /.test(l));
    const n = Number(line.match(/\+(\d+) green/)[1]);
    const cloak = s.log.filter(l => /^P1's Green Cloak: \+2 green/.test(l)).length * 2;
    expect(n).toBe(s.players[0].res.green - g0 - cloak);
  });
});
