// @vitest-environment node
// Night Watch: "Whenever a rival takes the Goes Last token, +1 follower per minion on it." A holder who goes last
// again keeps the token; nothing is taken, so nothing pays (blind play judges, Nov 4, seed 162).
import { describe, it, expect } from 'vitest';
import { table } from './cards-helpers-b.js';
import { take } from './helpers.js';

const turns = [{ t: 'turn', p: 0 }, { t: 'turn', p: 1 }, { t: 'turn', p: 0 }, { t: 'turn', p: 1 }, { t: 'turn', p: 0 }, { t: 'turn', p: 1 }];
describe('Night Watch pays on a take, not a keep', () => {
  it('a rival takes the token with Last Call: +1 per minion on it', () => {
    let s = table(['purple', 'red', 'market', 'yellow'], { n: 2, round: 2, members: [[], ['purple.nightwatch']], queue: turns });
    s = take(s, 'purple.lastcall');
    expect(s.players[1].bonus).toBeGreaterThan(0);
    expect(s.log.some(l => l.includes("P2's Night Watch"))).toBe(true);
  });
  it('the holder goes last again and keeps it: no pay', () => {
    let s = table(['purple', 'red', 'market', 'yellow'], { n: 2, round: 2, members: [[], ['purple.nightwatch']], queue: turns });
    s.goesLast = { round: s.round, pid: 0 };
    s = take(s, 'purple.lastcall');
    expect(s.log.some(l => l.includes('keeps the Goes Last token'))).toBe(true);
    expect(s.players[1].bonus).toBe(0);
    expect(s.log.some(l => l.includes("P2's Night Watch"))).toBe(false);
  });
});
