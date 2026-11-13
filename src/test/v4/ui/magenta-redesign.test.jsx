import { describe, expect, it } from 'vitest';
import { renderToStaticMarkup } from 'react-dom/server';
import { panelText } from '../../../v4/game/panelText.js';
import { shortEffect, pipEffect } from '../../../v4/shorts.js';
import { giftPick, boardPicker } from '../../../v4/game/boardPick.js';
import { youdWords } from '../../../v4/game/Info.jsx';
import GiftCard from '../../../v4/game/GiftCard.jsx';
import { sceneQ } from '../../engine/v4/cards-helpers.js';
import { MORE } from '../../../engine/v4/content/price.js';

describe('Magenta action wording and one-stack theft', () => {
  it('separates scaling theft, followers, protection (no steal since 2026-10-22) and the inherent color gain', () => {
    for (const round of [1, 2, 3]) {
      const pick = panelText('thieves', { key: 'pickpocket' }, round);
      // Nov 10: "Steal 1 resource per minion you've placed this round, this one included. +1 magenta." (any rivals: a
      // steal splits among rivals as you choose, Cory Nov 10); the same words every round
      expect(pick.verb).toBe('Steal 1 per minion you placed');
      expect(pick.second).toBe('this round, this one included');
      const safe = panelText('thieves', { key: 'hideout' }, round);
      expect(safe.verb).toBe('Steal 1, then safe from steals'); // Cory, Nov 1; the protection in line 1 (line 2 dropped every round, text audit Nov 1)
      expect(safe.second).toBe('this round');
      expect(safe.note).toBeNull(); // the +1 of its color is the hover's badge, off the wheel (Cory, Nov 9)
      expect(shortEffect('thieves', { key: 'pickpocket' }, round)).toBe('steal 1 per minion you placed this round, this one included');
    }
    const stash = panelText('thieves', { key: 'tipoff' }, 1);
    expect(stash.main).toBe('+3 magenta'); // a plain stand-in (Cory, Nov 10 10:42pm)
    expect(stash.second).toBeNull();
    expect(panelText('thieves', { key: 'ransom' }, 2).verb).toContain(`costing ${6 + MORE} or less`);
    expect(panelText('thieves', { key: 'rob' }, 2).verb).toBe('Steal 4 @f and 4 resources'); // Heist, Nov 10 3:46pm
    expect(pipEffect('thieves', { key: 'rob' }, 2)).toBe('steal 3 followers and 3 resources');
    // Catch Up (Nov 10) and Swindle (Nov 10, Shake Down's slot)
    expect(panelText('thieves', { key: 'catchup' }, 1)).toMatchObject({ main: '+2 magenta', second: 'per rival with more resources' });
    expect(panelText('thieves', { key: 'swindle' }, 2)).toMatchObject({ verb: `Steal a member up to ${6 + MORE} for a shop member`, second: 'you give them one' }); // the give-back in line 1 (picky bot, Nov 11)
  });

  it('shows each exact half-stack amount without a Take All or coin-by-coin plan', () => {
    const s = sceneQ({ quadrants: ['thieves', 'red', 'gold', 'echo'], n: 3, round: 2,
      res: [{}, { gold: 7, red: 3 }, { gold: 4 }] });
    const options = [[1, 'gold', 3], [1, 'red', 1], [2, 'gold', 2]].map(([pid, res, n]) => ({
      id: `take:${pid}:${res}`, kind: 'take', value: [pid, res], target: { pid, res }, take: n,
      label: `Take ${n} ${res} from P${pid + 1}`,
    }));
    s.queue = [{ t: 'choose', p: 0, h: 'thieves.halfPile' }];
    s.pending = { kind: 'choose', player: 0, prompt: 'Pile Theft: choose a rival’s one-color pile', options };
    const g = giftPick(s, s.pending);
    expect(g).toMatchObject({ kind: 'steal', halfPile: true, plan: null, left: null, head: 'Steal half a pile' });
    expect(g.seconds.map(x => x.o.id)).toEqual(options.map(o => o.id));
    expect(boardPicker(s, s.pending).seats[1].res.gold.take).toBe(3);
    const html = renderToStaticMarkup(<GiftCard state={s} gift={g} onFirst={() => {}} onAnswer={() => {}} busy={false} />);
    expect(html).toContain('Take 3 gold from P2 (has 7)');
    expect(html).toContain('Steal half a pile');
    expect(html).toContain('−3');
    expect(html).not.toContain('Take all');
    expect(html).not.toContain('data-left=');
  });
});


it('does not describe original-color theft choices as swaps, including stealing Magenta', () => {
  const state = { resources: ['gold', 'magenta'], players: [{ id: 0 }, { id: 1 }] };
  const change = res => ({ res, followers: 1, members: 0, turns: 0, early: 0, discount: 0, swapped: 0 });
  const a = change({ gold: 1, magenta: 1 }), b = change({ gold: 0, magenta: 2 });
  const pv = { exact: false, tied: true, asks: ['Help Yourself: take 1'], theirAsks: [], you: { res: { gold: [0, 1], magenta: [1, 2] }, followers: [1, 1], members: [0, 0], turns: [0, 0], discount: [0, 0] },
    others: { res: { gold: [-1, 0], magenta: [-1, 0] }, followers: [0, 0], members: [0, 0] }, mix: [a, b], best: a, likely: a };
  expect(youdWords(pv, state, 'magenta')).toEqual({ text: '+1 magenta, +1 follower; steal 1 in colors you pick', note: null });
});
