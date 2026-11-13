// @vitest-environment node
import { describe, it, expect } from 'vitest';
import { table, uidIn } from './cards-helpers-b.js';
import { take, move } from './helpers.js';
import { memberCount, memberWeight, countMembersOfColor, contextFor, followers } from '../../../engine/v4/core.js';
const Q = ['gold', 'red', 'thieves', 'yellow'];
// Every member counts as 1 member and keeps its followers (Cory, 2026-11-12: "Yeah i think so", to "every member counts
// as 1 and keeps its followers"; this ends his Nov 1 "member count = follower count, for members"). Only a card whose
// own text gives a count keeps it: Dabblers ("Counts as 2 wild members.") and Revelers ("Counts as 3 members.").
describe('Every member counts as 1 member, whatever it is worth in followers (Cory, 2026-11-12)', () => {
  it('counts each card once in total and colored counts, while followers keep the printed worth', () => {
    const s = table(Q, { members: [['red.twins', 'red.bigfamily', 'yellow.latebloomer']], res: [{ red: 11 }], bonus: [37] });
    expect(s.players[0].members).toHaveLength(3);
    expect(memberCount(s, s.players[0])).toBe(3);
    expect(countMembersOfColor(s, s.players[0], 'red')).toBe(2);
    expect(countMembersOfColor(s, s.players[0], 'yellow')).toBe(1); // Late Bloomers is worth 2 followers, but 1 member
    expect(followers(s, s.players[0])).toBe(47); // Leader 1 + Triplets 3 + Big Family 4 + Late Bloomers 2 + 37 bonus
    // The Red contest independently counts resources.
    expect(contextFor(s).quadrant('red').scoring.score(contextFor(s), s.players[0])).toBe(11);
  });
  it('a per-member action counts each member once, and Revelers as its printed 3', () => {
    let s = table(['gold', 'red', 'silver', 'yellow'], { round: 2, members: [['red.twins', 'red.bigfamily']] });
    const before = s.players[0].res.gold || 0;
    s = take(s, 'gold.windfall');
    const plain = s.players[0].res.gold - before;
    let r = table(['gold', 'red', 'silver', 'yellow'], { round: 2, members: [['red.twins', 'silver.revelers']] });
    const rBefore = r.players[0].res.gold || 0;
    r = take(r, 'gold.windfall');
    // Triplets + Big Family are 2 members; Triplets + Revelers are 1 + 3 = 4
    expect(r.players[0].res.gold - rBefore - plain).toBe(2);
  });
  it('a copy counts as the copied card’s count: 1 for an ordinary member, 3 for Revelers', () => {
    const s = table(['gold', 'red', 'echo', 'silver'], { members: [['echo.doppel', 'red.bigfamily']] });
    const uid = uidIn(s, 'echo.doppel', 0);
    s.cards[uid].copy = 'red.bigfamily';
    expect(memberWeight(s, uid)).toBe(1);
    expect(memberCount(s, s.players[0])).toBe(2);
    expect(countMembersOfColor(s, s.players[0], 'echo')).toBe(1);
    expect(followers(s, s.players[0])).toBe(9); // Leader 1 + Big Family 4 + the copy's 4
    s.cards[uid].copy = 'silver.revelers';
    expect(memberWeight(s, uid)).toBe(3);
    expect(memberCount(s, s.players[0])).toBe(4);
    expect(countMembersOfColor(s, s.players[0], 'echo')).toBe(3);
  });
  it('keeps the printed counts of Revelers (3) and Dabblers (2); Retinue, worth 3, counts 1', () => {
    const s = table(['gold', 'red', 'silver', 'yellow'], { members: [['silver.revelers', 'silver.retinue', 'benders.dabblers']] });
    expect(memberWeight(s, uidIn(s, 'silver.revelers', 0))).toBe(3);
    expect(memberWeight(s, uidIn(s, 'benders.dabblers', 0))).toBe(2);
    expect(memberWeight(s, uidIn(s, 'silver.retinue', 0))).toBe(1);
    expect(memberCount(s, s.players[0])).toBe(6);
  });
  it('Retinue is worth three followers and one member, without changing Silver’s resource contest', () => {
    const s = table(['gold', 'red', 'silver', 'echo'], { members: [['silver.retinue']], res: [{ silver: 7 }] });
    const uid = uidIn(s, 'silver.retinue', 0);
    expect(memberWeight(s, uid)).toBe(1);
    expect(memberCount(s, s.players[0])).toBe(1);
    expect(countMembersOfColor(s, s.players[0], 'silver')).toBe(1);
    expect(followers(s, s.players[0])).toBe(4); // Leader plus Retinue’s three printed followers.
    expect(contextFor(s).quadrant('silver').scoring.score(contextFor(s), s.players[0])).toBe(7);
  });
  it('recruiting Doppelganger copies Retinue, repeating its gift (Cory, 2026-10-28: Doppelganger does the copied On Recruit)', () => {
    let s = table(['gold', 'red', 'silver', 'echo'], {
      round: 3, members: [['silver.retinue']], shop: ['echo.doppel'], queue: [{ t: 'turn', p: 0 }],
    });
    s = take(s, 'red.take');
    const uid = uidIn(s, 'echo.doppel', 'shop');
    s = move(s, `card:${uid}`);
    s = move(s, `card:${uidIn(s, 'silver.retinue', 0)}`);
    expect(s.cards[uid].copy).toBe('silver.retinue');
    expect(memberWeight(s, uid)).toBe(1);
    expect(memberCount(s, s.players[0])).toBe(2);
    expect(countMembersOfColor(s, s.players[0], 'echo')).toBe(1);
    expect(countMembersOfColor(s, s.players[0], 'silver')).toBe(1);
    expect(followers(s, s.players[0])).toBe(7);
    expect(s.players[1].res.silver).toBe(1);
  });
  it('a worth-4 member is one recruit: Pied Piper does not pay for Big Family alone', () => {
    let s = table(Q, { res: [{ red: 20 }], members: [['red.drive', 'red.recruiter']], shop: ['red.bigfamily'] });
    s = take(s, 'gold.rush');
    s = move(s, `card:${uidIn(s, 'red.bigfamily', 'shop')}`);
    expect(s.players[0].turnRecruits).toBe(1);
    expect(s.recruits).toBe(1);
    expect(s.log.filter(l => l.includes('Pied Piper: +2 red'))).toHaveLength(0);
    // Big Family cost 8 (Nov 5 night); Recruiter +1 once (a shop recruit, Nov 1 3:59pm)
    expect(s.players[0].res.red).toBe(13);
  });
  it('a recruit counting 2 (Dabblers) crosses Pied Piper’s threshold once; recruit hooks fire once', () => {
    let s = table(Q, { res: [{ red: 20 }], members: [['red.drive', 'red.recruiter']], shop: ['benders.dabblers'] });
    const red0 = s.players[0].res.red;
    s = take(s, 'gold.rush');
    s = move(s, `card:${uidIn(s, 'benders.dabblers', 'shop')}`);
    expect(s.pending?.who === 0 && /pay/i.test(JSON.stringify(s.pending?.options || []))).toBe(false); // paid from red alone
    expect(s.players[0].turnRecruits).toBe(2);
    expect(s.recruits).toBe(2);
    expect(s.log.filter(l => l.includes('Pied Piper: +2 red'))).toHaveLength(1);
    expect(s.log.filter(l => l.includes('Recruiter: +1 red'))).toHaveLength(1);
    expect(red0).toBe(20);
    expect(s.players[0].res.red).toBe(18); // 20, minus Dabblers' price of 5 paid in red, plus Piper 2 and Recruiter 1
  });
});
