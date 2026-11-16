// @vitest-environment node
import { describe, it, expect } from 'vitest';
import { table, uidIn } from './cards-helpers-b.js';
import { take, move } from './helpers.js';
import { memberCount, memberWeight, countMembersOfColor, contextFor, followers } from '../../../engine/v4/core.js';
import { defById } from '../../../engine/v4/content/index.js';
const Q = ['gold', 'red', 'thieves', 'yellow'];
// Member count and follower count stay equal (Cory, 2026-11-01: "member count = follower count, for members"). Every live
// member was rebased to worth 1 follower and 1 member (Cory, 2026-11-12: "we should rebase all members to 1. and then give
// some back where we obviously should"). Kept: a card whose own text gives the number (Big Family "Worth 4 followers.",
// Crew, Dabblers, Revelers, Ghost) and the ones given back (keepCount). Retired cards keep their old numbers (Triplets 3).
describe('A member counts as many members as its followers (Cory, 2026-11-01: "member count = follower count, for members")', () => {
  it('a live member is rebased to worth 1 follower and 1 member (Cory, Nov 12)', () => {
    for (const id of ['red.panel', 'red.mob', 'echo.agents', 'echo.mirror', 'market.snob', 'silver.highsociety']) {
      const d = defById(id);
      expect(d.retired, id).toBeFalsy();
      expect([d.f, d.n], id).toEqual([1, 1]);
    }
    const s = table(Q, { members: [['red.panel', 'red.mob', 'red.drive']] });
    expect(memberCount(s, s.players[0])).toBe(3);
    expect(countMembersOfColor(s, s.players[0], 'red')).toBe(3);
    expect(followers(s, s.players[0])).toBe(4); // Leader 1 + three members worth 1
  });
  it('cards whose text gives the number, and the five given back, keep it, members equal to followers', () => {
    const want = { 'red.bigfamily': 4, 'thieves.crew': 2, 'benders.dabblers': 2, 'silver.revelers': 3, 'silver.retinue': 3,
      'yellow.bookcooker': 3, 'silver.gala': 2, 'silver.smoothtalker': 2, 'thieves.watchdog': 2, 'thieves.kidnappers': 2 };
    for (const [id, n] of Object.entries(want)) expect([defById(id).f, defById(id).n], id).toEqual([n, n]);
    for (const id of ['yellow.bookcooker', 'silver.gala', 'silver.smoothtalker', 'thieves.watchdog', 'thieves.kidnappers']) expect(defById(id).keepCount, id).toBe(true);
  });
  it('a retired card keeps its old numbers, members equal to followers (Triplets 3)', () => {
    const d = defById('red.twins');
    expect(d.retired).toBe(true);
    expect([d.f, d.n]).toEqual([3, 3]);
  });
  it('a copy of a live member counts as the copy: 1', () => {
    const s = table(['gold', 'red', 'echo', 'yellow'], { members: [['echo.doppel', 'red.panel']] });
    const uid = uidIn(s, 'echo.doppel', 0);
    s.cards[uid].copy = 'red.panel';
    expect(memberWeight(s, uid)).toBe(1);
    expect(memberCount(s, s.players[0])).toBe(2);
    expect(followers(s, s.players[0])).toBe(3);
  });
  it('counts printed people in total and colored counts, independently of bonus followers', () => {
    const s = table(Q, { members: [['red.twins', 'red.bigfamily', 'yellow.latebloomer']], res: [{ red: 11 }], bonus: [37] });
    expect(s.players[0].members).toHaveLength(3);
    expect(memberCount(s, s.players[0])).toBe(9);
    expect(countMembersOfColor(s, s.players[0], 'red')).toBe(7);
    expect(countMembersOfColor(s, s.players[0], 'yellow')).toBe(2); // Late Bloomer is worth 2 followers, so 2 members
    expect(followers(s, s.players[0])).toBe(47);
    // Printed groups still count as members; the Red contest independently counts resources.
    expect(contextFor(s).quadrant('red').scoring.score(contextFor(s), s.players[0])).toBe(11);
  });
  it('uses printed member weight for a per-member action', () => {
    let s = table(Q, { round: 2, members: [['red.twins', 'red.bigfamily']] });
    s = take(s, 'gold.windfall');
    expect(s.players[0].res.gold).toBe(7);
  });
  it('counts copies using the larger effective printed value', () => {
    const s = table(['gold', 'red', 'echo', 'yellow'], { members: [['echo.doppel', 'red.bigfamily']] });
    const uid = uidIn(s, 'echo.doppel', 0);
    s.cards[uid].copy = 'red.bigfamily';
    expect(memberWeight(s, uid)).toBe(4);
    expect(memberCount(s, s.players[0])).toBe(8);
    expect(countMembersOfColor(s, s.players[0], 'echo')).toBe(4);
  });
  it('preserves explicit three-member Revelers despite its one printed follower', () => {
    const s = table(['gold', 'red', 'silver', 'yellow'], { members: [['silver.revelers', 'silver.retinue']] });
    expect(memberCount(s, s.players[0])).toBe(6);
    expect(countMembersOfColor(s, s.players[0], 'silver')).toBe(6); // Revelers 3, Retinue 3
  });
  it('Retinue is worth three followers and three members, without changing Silver’s resource contest', () => {
    const s = table(['gold', 'red', 'silver', 'echo'], { members: [['silver.retinue']], res: [{ silver: 7 }] });
    const uid = uidIn(s, 'silver.retinue', 0);
    expect(memberWeight(s, uid)).toBe(3);
    expect(memberCount(s, s.players[0])).toBe(3);
    expect(countMembersOfColor(s, s.players[0], 'silver')).toBe(3);
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
    expect(memberWeight(s, uid)).toBe(3);
    expect(memberCount(s, s.players[0])).toBe(6);
    expect(countMembersOfColor(s, s.players[0], 'echo')).toBe(3);
    expect(countMembersOfColor(s, s.players[0], 'silver')).toBe(3);
    expect(followers(s, s.players[0])).toBe(7);
    expect(s.players[1].res.silver).toBe(1);
  });
  it('weighted recruit counters cross Pied Piper threshold once; recruit hooks fire once', () => {
    let s = table(Q, { res: [{ red: 20 }], members: [['red.drive', 'red.recruiter']], shop: ['red.bigfamily'] });
    s = take(s, 'gold.rush');
    s = move(s, `card:${uidIn(s, 'red.bigfamily', 'shop')}`);
    expect(s.players[0].turnRecruits).toBe(4);
    expect(s.recruits).toBe(4);
    expect(s.log.filter(l => l.includes('Pied Piper: +2 red'))).toHaveLength(1);
    // Big Family cost 8 (Nov 5 night): +2 from Piper, not one hook per person; Recruiter +1 once (a shop recruit, Nov 1 3:59pm)
    expect(s.players[0].res.red).toBe(15);
  });
  it('a recruit counting 2 (Dabblers) crosses Pied Piper’s threshold once; recruit hooks fire once', () => {
    let s = table(Q, { res: [{ red: 20 }], members: [['red.drive', 'red.recruiter']], shop: ['benders.dabblers'] });
    s = take(s, 'gold.rush');
    s = move(s, `card:${uidIn(s, 'benders.dabblers', 'shop')}`);
    expect(s.players[0].turnRecruits).toBe(2);
    expect(s.recruits).toBe(2);
    expect(s.log.filter(l => l.includes('Pied Piper: +2 red'))).toHaveLength(1);
    expect(s.log.filter(l => l.includes('Recruiter: +1 red'))).toHaveLength(1);
    expect(s.players[0].res.red).toBe(18); // 20, minus Dabblers' price of 5 paid in red, plus Piper 2 and Recruiter 1
  });
});
