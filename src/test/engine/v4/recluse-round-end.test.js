// @vitest-environment node
// Recluse is Round End (Cory, 2026-11-06: "Recluse should be Round End"): +2 followers per rival with more members, each round.
import { describe, it, expect } from 'vitest';
import { resume } from '../../../engine/v4/core.js';
import { defById } from '../../../engine/v4/content/index.js';
import { table, named } from './cards-helpers-b.js';

describe('Recluse: Round End', () => {
  it('reads Round End and scores nothing at game end', () => {
    const d = defById('trading.recluse');
    expect(d.text).toMatch(/^Round End: \+2 followers per rival with more members than you\.$/);
    expect(d.onGameEnd).toBeUndefined();
  });

  it('at round end: P2 and P3 have 2 members, P4 has 1 like you: +4 followers', () => {
    let s = table(['red', 'echo', 'thieves', 'trading'], { n: 4, round: 1, left: 0, queue: [],
      members: [['trading.recluse'], ['red.bigfamily', 'red.intern'], ['echo.copyist', 'red.bodysnatchers'], ['red.seatfiller']] });
    s.queue = [{ t: 'endRound' }];
    s = resume(s);
    expect(s.players[0].bonus).toBe(4);
    expect(named(s, 'Recluse')).toContain("P1's Recluse: 2 rivals have more members: +4 followers.");
  });
});
