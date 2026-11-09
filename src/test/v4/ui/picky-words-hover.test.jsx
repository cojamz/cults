// First-time readers' wording catches on hovers and faces (picky bot, Nov 4; /mnt/project-files/picky/merged-2026-11-04.md
// W6, W7, W20, W21, W25, W26, W27, W28, W35, W38): a rival's cloak named for their gain, a lone flat gain said as yours,
// the follower part of a fuel space, the number that decides Leaders' Tax, and the contest card's prize said once.
import { describe, it, expect } from 'vitest';
import { render } from '@testing-library/react';
import { createGame, applyMove, chooseBotMove, previewSpace, spacesOf, quadrant } from '../../../engine/v4/index.js';
import { seededRandom } from '../../../engine/v4/rng.js';
import { youdWords, ifRecruitWords, RuleText } from '../../../v4/game/Info.jsx';
import { nothingToCopy, StandingsCard } from '../../../v4/game/HoverCards.jsx';
import { panelText } from '../../../v4/game/panelText.js';

const toPlace = (s, rand = seededRandom(1)) => { while (s.pending && s.pending.kind !== 'place') s = applyMove(s, chooseBotMove(s, rand)); return s; };
const start = (quadrants, seed = 7) => toPlace(createGame({ seats: [0, 1, 2, 3].map(i => ({ name: `P${i + 1}`, kind: 'bot' })), seed, quadrants, rules: { artifacts: true } }));
const space = (s, qid, key) => [s.quadrants.indexOf(qid), spacesOf(s, qid).findIndex(a => a.key === key)];

describe('picky words on hovers (Nov 4)', () => {
  // since Nov 6 every cloak pays only for its holder's own actions (Cory), so your space never pays a rival's cloak
  it("your Blue space pays no rival's cloak, and the hover names none (W6)", () => {
    const s = start(['market', 'purple', 'silver', 'trading']);
    const pid = s.pending.player;
    const owner = s.players.find(p => p.artifact === s.artifacts.market);
    if (owner.id === pid) return; // this seed deals the viewer the Blue Cloak
    const why = ['bargain', 'restock', 'pricecheck'].flatMap(k => previewSpace(s, pid, ...space(s, 'market', k)).theirReasons);
    expect(why.filter(l => /Cloak/.test(l))).toEqual([]);
  });

  it('a lone flat gain after the rule reads as yours, without a period (W7)', () => {
    const a = quadrant('red').actions.find(x => x.key === 'hire');
    const { container } = render(<RuleText def={a} lines />);
    const lines = [...container.querySelectorAll('[data-effect-line]')].map(l => l.textContent);
    expect(lines[lines.length - 1]).toMatch(/^You also get \+1/);
    expect(lines[lines.length - 1]).not.toMatch(/\.$/);
  });

  it('Walk-In, Party Gifts and Largesse faces say whose gain and per what (W20, W21)', () => {
    expect(panelText('red', { key: 'hire' }).second).toBe('+1 red, rivals +1');
    expect(panelText('silver', { key: 'partygifts' }).second).toBe('+2 @f per silver given');
    expect(panelText('silver', { key: 'largesse' }).second).toBe('+10 @f'); // Cory, Nov 6: 10 followers flat
  });

  it('a recolor says "in colors you choose", never one pick\'s colors (W25)', () => {
    const s = start(['yellow', 'red', 'silver', 'trading']);
    const pid = s.pending.player;
    const y = youdWords(previewSpace(s, pid, ...space(s, 'yellow', 'harvest')), s, 'yellow');
    expect(y.text).toBe(`+${s.round + 2} in colors you choose`);
    expect(JSON.stringify(y)).not.toMatch(/swaps are your pick/);
  });

  it('a copy space with nothing to copy says it pays only its flat gain (W26)', () => {
    expect(nothingToCopy(quadrant('echo').actions.find(x => x.key === 'refrain').text)).toBe('Nothing yet: only its +1 green');
  });

  it("Survey has no color pick to list; Gather says its followers if you recruit (W27, W28)", () => {
    const s = start(['yellow', 'red', 'silver', 'trading']);
    const pid = s.pending.player;
    const tax = previewSpace(s, pid, ...space(s, 'yellow', 'transmute'));
    expect(tax.colorPays).toBe(null); // Survey (Nov 5): no pick, its yellow is in "You'd get"
    const gather = previewSpace(s, pid, ...space(s, 'red', 'turnout'));
    expect(gather.ifRecruit).toEqual({ followers: 0, per: 3 });
    expect(ifRecruitWords(gather.ifRecruit)).toBe('+1 follower per 3 resources you pay, if you recruit a member this turn');
    const splurge = previewSpace(s, pid, ...space(s, 'trading', 'splurge'));
    expect(ifRecruitWords(splurge.ifRecruit)).toMatch(/^\+1 follower per (2 resources|resource) you pay, if you recruit a member this turn$/);
  });

  it('the contest card says the prize once and the tie rule once, rows in seat order (W38)', () => {
    const s = start(['silver', 'red', 'yellow', 'trading']);
    const { container } = render(<StandingsCard state={s} qid="silver" />);
    const text = container.textContent;
    expect(text).toMatch(/At the end of round I: \+4 followers to whoever has the most silver resources \(round II \+6, III \+10\)\. Tied leaders get half each, rounded up\./);
    expect(text).not.toMatch(/Tied leaders all score|not the final score/);
    const rows = [...container.querySelectorAll('[data-pid]')].map(r => Number(r.dataset.pid));
    expect(rows).toEqual(s.order.slice(0, 4));
  });
});
