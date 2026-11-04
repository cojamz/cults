// First-time readers' hover catches (picky bot, Nov 4; /mnt/project-files/picky/merged-2026-11-04.md B3, B4, B11, B24,
// B25, B26): "You'd get" never peeks at the face-down pile, says Goes Last as going last, a steal whole, a rival's gift
// as theirs, and a cast-out member with its followers on Farewell and Estate Sale alike.
import { describe, it, expect } from 'vitest';
import { createGame, applyMove, chooseBotMove, previewSpace, spacesOf, cardDef } from '../../../engine/v4/index.js';
import { seededRandom } from '../../../engine/v4/rng.js';
import { youdWords } from '../../../v4/game/Info.jsx';
import { targetLines } from '../../../v4/game/HoverCards.jsx';

const toPlace = (s, rand = seededRandom(1)) => { while (s.pending && s.pending.kind !== 'place') s = applyMove(s, chooseBotMove(s, rand)); return s; };
const start = quadrants => toPlace(createGame({ seats: [{}, {}, {}, {}], seed: 5, quadrants }));
const space = (s, qid, key) => [s.quadrants.indexOf(qid), spacesOf(s, qid).findIndex(a => a.key === key)];
const words = (s, qid, key) => { const pid = s.pending.player; return youdWords(previewSpace(s, pid, ...space(s, qid, key)), s, null); };
const cost = (s, u) => { const d = cardDef(s, u); return (d.s || 0) + (d.w || 0); };

describe('picky hover (Nov 4)', () => {
  it('Walk-In: the face-down top card is never named or counted (B3)', () => {
    const s = start(['red', 'purple', 'market', 'yellow']);
    const pid = s.pending.player;
    // the top card worth 2 and with an On Recruit would have shown "+2 members" and its Why row
    const pv = previewSpace(s, pid, ...space(s, 'red', 'hire'));
    expect(pv.you.members).toEqual([1, 1]);
    expect(pv.joins).not.toContain(s.pile[0]);
    expect(pv.best.joined).toEqual([]);
    expect(pv.reasons.join(' ')).not.toContain(cardDef(s, s.pile[0]).name);
  });

  it('Sleep In and Last Call go last; Right Away comes right after (B4)', () => {
    const s = start(['thieves', 'silver', 'trading', 'purple']);
    expect(words(s, 'purple', 'skip').text).toMatch(/your next minion goes last/);
    expect(words(s, 'purple', 'again').text).toMatch(/your next turn right after this one/);
    expect(words(s, 'purple', 'lastcall').text).toMatch(/your other 2 minions go last/);
    for (const k of ['skip', 'lastcall']) expect(words(s, 'purple', k).text).not.toMatch(/after this one/);
  });

  it('Help Yourself says the whole steal; Potluck says the rivals pick (B24, B25)', () => {
    const s = start(['thieves', 'silver', 'trading', 'purple']);
    s.round = 3;
    for (const o of s.players) for (const r of s.resources) o.res[r] = 2;
    expect(words(s, 'thieves', 'pickpocket')).toEqual({ text: 'steal 5 in colors you pick', note: null });
    expect(words(s, 'silver', 'favors')).toEqual({ text: '+2 silver, +3 resources', note: 'their pick' });
  });

  it('Farewell and Estate Sale both say the member leaves with its followers (B26)', () => {
    const s = start(['thieves', 'silver', 'trading', 'purple']);
    const pid = s.pending.player;
    const u = s.shop.find(x => cardDef(s, x).f === 1);
    s.players[pid].members.push(u);
    s.shop.splice(s.shop.indexOf(u), 1);
    const c = cost(s, u);
    expect(words(s, 'trading', 'farewell').text).toBe(`+1 white, +${c} followers, −1 member and its follower`);
    expect(words(s, 'trading', 'estatesale').text).toBe(`+${c + 1} white, −1 member and its follower`);
  });

  it('Promote and Demote say the price their rule allows, never "of the same cost" (B10)', () => {
    const s = start(['red', 'thieves', 'echo', 'purple']);
    const [a, b, c] = s.players;
    a.members.push(s.shop[0]); b.members.push(s.shop[1]); c.members.push(s.shop[2]);
    const shop = s.shop.slice(3, 6);
    const t = { shop: [], seats: [], pairs: [[s.shop[0], shop[0]], [s.shop[0], shop[1]], [s.shop[1], shop[2]]], sure: false };
    for (const key of ['hireup', 'trade']) {
      const rule = spacesOf(s, 'red').find(x => x.key === key).text;
      const [line] = targetLines(s, a.id, t, rule);
      expect(line.text).toMatch(/, each costing up to 2 (more|less)$/);
      expect(line.text).not.toMatch(/same cost/);
    }
    // two pairs or fewer are named, with whose member each side is (a rival's member is never "your")
    const two = targetLines(s, a.id, { ...t, pairs: [[s.shop[1], shop[0]]] }, '')[0].text;
    expect(two).toBe(`${b.name}’s ${cardDef(s, s.shop[1]).name} for the shop’s ${cardDef(s, shop[0]).name}`);
  });

  it('a hover preview cut short still lights every member Initiation can take (B11)', () => {
    const s = start(['red', 'thieves', 'echo', 'purple']);
    const pid = s.pending.player;
    const pv = previewSpace(s, pid, ...space(s, 'red', 'take'), { cap: 4 });
    expect(pv.capped).toBe(true);
    expect(pv.targets.shop.slice().sort()).toEqual(s.shop.filter(u => cost(s, u) <= 8).sort());
  });
});
