// @vitest-environment node
// The By color contests setting (Cory, Nov 3: "yellow should be sets of colors. purple should be whoever went last.").
import { describe, it, expect } from 'vitest';
import { createGame, applyMove, chooseBotMove } from '../../../engine/v4/index.js';
import { scoringOf, contextFor } from '../../../engine/v4/core.js';
import { seededRandom } from '../../../engine/v4/rng.js';

const game = () => createGame({ seats: Array.from({ length: 4 }, () => ({ kind: 'bot' })), seed: 4, quadrants: ['purple', 'yellow', 'red', 'echo'], rules: { contests: 'byColor' } });

describe('By color contests', () => {
  it('Purple: whoever placed the round\'s last minion scores, nobody else', () => {
    let s = game();
    const rand = seededRandom(4);
    const placed = () => s.log.some(l => / took | joined /.test(l));
    while (!s.over && !(placed() && !s.queue.some(t => t.t === 'turn' || t.t === 'place') && s.pending?.kind !== 'place')) s = applyMove(s, chooseBotMove(s, rand));
    const last = [...s.log].reverse().find(l => / took | joined /.test(l));
    const sc = scoringOf(s, 'purple');
    expect(sc.label).toBe('Went last');
    const ctx = contextFor(s);
    const scores = s.players.map(p => sc.score(ctx, p));
    expect(scores.filter(n => n === 1)).toHaveLength(1);
    expect(last.startsWith(`${s.players[scores.indexOf(1)].name} `)).toBe(true);
  });
  it('Yellow: full sets of one of every color in play', () => {
    const s = game(); s.rules = { ...s.rules, contestFix: { yellow: 'sets' } };
    const p = s.players[0];
    for (const r of s.resources) p.res[r] = 3;
    p.res[s.resources[0]] = 2;
    expect(scoringOf(s, 'yellow').score(contextFor(s), p)).toBe(2);
    p.res[s.resources[1]] = 0;
    expect(scoringOf(s, 'yellow').score(contextFor(s), p)).toBe(0);
  });
});

describe('By color: Green and White (Cory, Nov 3)', () => {
  it('Green: a tie on minions stays a tie ("ties are split… like they already were…"); White: fewest followers', () => {
    const s = game();
    const ctx = contextFor(s);
    const g = scoringOf(s, 'echo'), w = scoringOf(s, 'trading');
    const qi = s.quadrants.indexOf('echo');
    s.slots[`${qi}-0`] = 0; s.slots[`${qi}-1`] = 1;
    s.players[0].res.green = 2; s.players[1].res.green = 5;
    expect(g.score(ctx, s.players[1])).toBe(g.score(ctx, s.players[0]));
    expect(g.tiebreak).toBeUndefined();
    expect(g.score(ctx, s.players[2])).toBe(0);
    const f = scoringOf({ ...s, rules: { ...s.rules, contestFix: { white: 'followers' } } }, 'trading');
    expect(f.label).toBe('Fewest followers');
    s.players[3].bonus -= 1; s.players[0].bonus += 3;
    const best = Math.max(...s.players.map(p => f.score(ctx, p)));
    expect(s.players.filter(p => f.score(ctx, p) === best).map(p => p.id)).toEqual([3]);
  });
});

describe('By color: White Fewest members (0 counts), Silver Fewest silver (Cory, Nov 7)', () => {
  const g = () => createGame({ seats: Array.from({ length: 4 }, () => ({ kind: 'bot' })), seed: 4, quadrants: ['silver', 'trading', 'red', 'echo'], rules: { contests: 'byColor' } });
  it('White: fewest members wins, and a cult with no members counts ("White fewest members can be 0")', () => {
    const s = g(); const ctx = contextFor(s);
    const w = scoringOf(s, 'trading');
    expect(w.label).toBe('Fewest members');
    // nobody has members at the start: everyone ties, and everyone scores
    const sc = s.players.map(p => w.score(ctx, p));
    expect(sc.every(n => n > 0 && n === sc[0])).toBe(true);
  });
  it('Silver: fewest silver, at least 1 ("yes fewest silver")', () => {
    const s = g(); const ctx = contextFor(s);
    s.players.forEach((p, i) => { p.res.silver = [0, 1, 3, 2][i]; });
    const f = scoringOf(s, 'silver');
    expect(f.label).toMatch(/^Fewest silver/);
    const sc = s.players.map(p => f.score(ctx, p));
    expect(sc[0]).toBe(0);
    expect(sc[1]).toBe(Math.max(...sc));
    expect(sc[1]).toBeGreaterThan(sc[3]);
  });
});

describe('By color: White and Silver contest candidates (bot trials only, contestFix)', () => {
  const g2 = fix => createGame({ seats: Array.from({ length: 4 }, () => ({ kind: 'bot' })), seed: 4, quadrants: ['silver', 'trading', 'red', 'echo'], rules: { contests: 'byColor', contestFix: fix } });
  it('White most white; fewest members with ties to most white', () => {
    let s = g2({ white: 'held' }); const ctx = contextFor(s);
    s.players[0].res.white = 5; s.players[1].res.white = 2;
    const w = scoringOf(s, 'trading');
    expect(w.label).toBe('Most white');
    expect(w.score(ctx, s.players[0])).toBe(5);
    s = g2({ white: 'leanWhite' });
    const l = scoringOf(s, 'trading');
    // nobody has members at the start: nobody scores
    expect(s.players.map(p => l.score(contextFor(s), p))).toEqual([0, 0, 0, 0]);
  });
  it('Silver fewest (at least 1): 0 silver scores nothing, 1 beats 3; on-silver needs a minion there', () => {
    let s = g2({ silver: 'fewest' }); const ctx = contextFor(s);
    s.players.forEach((p, i) => { p.res.silver = [0, 1, 3, 1][i]; });
    const f = scoringOf(s, 'silver');
    const sc = s.players.map(p => f.score(ctx, p));
    expect(sc[0]).toBe(0);
    expect(sc[1]).toBeGreaterThan(sc[2]);
    expect(sc[1]).toBe(sc[3]);
    s = g2({ silver: 'present' });
    s.players[0].res.silver = 4; s.players[1].res.silver = 9;
    s.slots[`${s.quadrants.indexOf('silver')}-0`] = 0;
    const pr = scoringOf(s, 'silver');
    expect(pr.score(contextFor(s), s.players[0])).toBe(4);
    expect(pr.score(contextFor(s), s.players[1])).toBe(0);
  });
});

describe('By color: Red Most members of one color, Blue Most members (Cory, Nov 7)', () => {
  it('Red counts your biggest same-color group, grey members as a group too; Blue counts all your members', async () => {
    const { table } = await import('./cards-helpers-b.js');
    const s = table(['red', 'market', 'trading', 'silver'], { n: 2, rules: { contests: 'byColor' }, members: [['market.stylist', 'red.volunteer', 'red.mob'], ['benders.squatter', 'benders.dabblers']] });
    s.rules = { ...(s.rules || {}), contests: 'byColor' };
    const ctx = contextFor(s);
    const r = scoringOf(s, 'red'), b = scoringOf(s, 'market');
    expect(r.label).toBe('Most members of one color');
    expect(r.score(ctx, s.players[0])).toBe(2); // two red cards (Mob counts 1 here)
    expect(r.score(ctx, s.players[1])).toBe(2); // Party Crasher and Dabblers: two grey cards
    expect(b.label).toBe('Most members');
    expect(b.score(ctx, s.players[0])).toBeGreaterThan(3); // Mob counts 4 in Most members
  });
});


describe('By color: Yellow Most member colors (Cory, Nov 7: "For now we can make it \'most member colors\'")', () => {
  it('counts the colors in play among your members', async () => {
    const { table } = await import('./cards-helpers-b.js');
    const s = table(['red', 'market', 'yellow', 'silver'], { n: 2, rules: { contests: 'byColor' }, members: [['market.stylist', 'red.volunteer', 'red.mob'], ['red.intern', 'benders.dabblers']] });
    s.rules = { ...(s.rules || {}), contests: 'byColor', contestFix: { yellow: 'colors' } }; // held as an option: back to full sets while Cory decides (Nov 7, "the person with the most members most likely wins")
    const y = scoringOf(s, 'yellow');
    expect(y.label).toBe('Most member colors');
    expect(y.score(contextFor(s), s.players[0])).toBe(2);
    expect(y.score(contextFor(s), s.players[1])).toBe(2); // Dabblers adds just one color (Cory: "I think just counts as one")
  });
});
