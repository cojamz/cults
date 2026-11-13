// Hyper-picky readers, Nov 11 (v0.99.726): the space hover's badge, "You'd get" and its target lines.
import { describe, it, expect, afterEach } from 'vitest';
import { render, cleanup } from '@testing-library/react';
import { renderToStaticMarkup } from 'react-dom/server';
import { previewSpace } from '../../../engine/v4/preview.js';
import { memberWeight } from '../../../engine/v4/core.js';
import { quadrant } from '../../../engine/v4/content/index.js';
import { youdWords, changeWords, RuleText, YoudGet, cachedPreview } from '../../../v4/game/Info.jsx';
import { SpaceCard, targetLines } from '../../../v4/game/HoverCards.jsx';
import { sceneQ, spaceOf } from '../../engine/v4/cards-helpers.js';

afterEach(cleanup);
const at = (s, name) => spaceOf(s, name).split('-').map(Number);
const words = (s, name) => { const [q, i] = at(s, name); return youdWords(previewSpace(s, 0, q, i), s, quadrant(s.quadrants[q]).resource); };
const card = (s, name) => { const [q, i] = at(s, name); cachedPreview(s, 0, q, i); return render(<SpaceCard state={s} me={0} spaceKey={`${q}-${i}`} />).container; };
const youd = (s, name) => { const [q, i] = at(s, name); return renderToStaticMarkup(<YoudGet state={s} pid={0} q={q} i={i} now />).replace(/<[^>]+>/g, ''); };
// three cults: P1 holds three red members (Triplets and Big Family count 1 each since Nov 12), P2 an Accomplice ("On Recruit: steal 3 resources") and a Mentor, P3 a Seat Filler
const table = () => sceneQ({ quadrants: ['red', 'market', 'trading', 'thieves'], round: 2, n: 3,
  res: [{ red: 3, blue: 4, white: 2 }, { gold: 5, red: 4 }, { blue: 3, red: 2 }], bonus: [0, 6, 3],
  members: [['red.twins', 'red.bigfamily', 'red.intern'], ['thieves.accomplice', 'red.mentor'], ['red.seatfiller']] });

describe('the space badge (B4, B6)', () => {
  it('a once-a-game +1 someone claimed is struck as taken, not offered', () => {
    const s = sceneQ({ quadrants: ['echo', 'red', 'thieves', 'market'], rules: { plus1: 'game' } });
    const [q, i] = at(s, 'Echo');
    expect(card(s, 'Echo').querySelector('[data-plus]').getAttribute('data-plus')).toBe('');
    cleanup();
    s.plus1Seen = { [`${q}-${i}`]: true };
    const badge = card(s, 'Echo').querySelector('[data-plus]');
    expect(badge.getAttribute('data-plus')).toBe('taken');
    expect(badge.querySelector('s')).not.toBeNull();
    expect(badge.getAttribute('title')).toMatch(/^Taken/);
  });

  it('a gain the sentence leads into stays in the sentence (New Blood never ends on a colon)', () => {
    const s = sceneQ({ quadrants: ['yellow', 'red', 'thieves', 'market'] });
    const c = card(s, 'New Blood');
    expect(c.querySelector('[data-plus]')).toBeNull();
    expect(c.querySelector('.sc-rule').textContent).not.toMatch(/:\s*$/);
  });
});

describe("You'd get (B5, W5, W18)", () => {
  it('a steal of followers says yours beside the rival’s loss', () => {
    const s = sceneQ({ quadrants: ['gold', 'red', 'thieves', 'market'], round: 2, n: 3, res: [{}, { gold: 5, red: 4 }, { blue: 3 }], bonus: [0, 6, 3] });
    expect(words(s, 'Heist').text).toBe('+1 magenta, +4 followers; steal 4 in colors you pick');
  });

  it('a steal the space doesn’t print names the member it brings in', () => {
    expect(youd(table(), 'Swindle')).toContain('steal up to 3 in colors you pick (via Accomplice)');
  });

  it('a card that counts as several members says so on itself', () => {
    // every member counts 1 since Cory's Nov 12 call; a card printing its own count (Dabblers, 2) still says so
    const s = sceneQ({ quadrants: ['red', 'market', 'trading', 'thieves'], round: 2, n: 3, members: [['benders.dabblers', 'red.intern'], [], []] });
    const u = s.players[0].members.find(x => memberWeight(s, x) > 1);
    expect(u).toBeDefined();
    const w = memberWeight(s, u);
    const d = { res: Object.fromEntries(s.resources.map(r => [r, 0])), followers: 2, members: w, lost: 0, turns: 0, early: 0, late: 0, discount: 0, swapped: 0, joined: [u] };
    expect(changeWords(d, s)).toMatch(new RegExp(`\\(counts as ${w} members\\)`));
    expect(changeWords(d, s)).not.toMatch(/\(\+\d+ members\)/);
  });

  it('a swap’s worst pick is never read as a first step ("… then up to …")', () => {
    const s = table();
    for (const n of ['Demote', 'Promote', 'Farewell']) {
      const y = words(s, n);
      expect(y.orWord).toBeUndefined();
    }
  });

  it('a free recruit with nothing in reach says why', () => {
    expect(youd(table(), 'Late Shift')).toContain('no shop member costs 2 or less');
  });
});

describe('target lines (W4, W18)', () => {
  it('a swap says any of yours for one of theirs, and its shop side is a swap, not a recruit', () => {
    const s = table();
    const [q, i] = at(s, 'Promote');
    const pv = previewSpace(s, 0, q, i);
    const lines = targetLines(s, 0, pv.targets, '');
    expect(lines.map(l => l.k)).not.toContain('Would recruit');
    expect(lines.map(l => l.k)).not.toContain('Could recruit');
    expect(lines.find(l => l.k === 'Could swap').text).toMatch(/^any of your \d+ for one of \d+ others$/);
  });

  it('a member’s number says it’s a cost', () => {
    const s = table();
    const [q, i] = at(s, 'Swindle');
    const line = targetLines(s, 0, previewSpace(s, 0, q, i).targets, '').find(l => l.k === 'Could take');
    expect(line.text).toMatch(/Accomplice \(cost \d+\)/);
  });
});

describe('a lone gain line (W15)', () => {
  it('has no period', () => {
    const html = renderToStaticMarkup(<RuleText def={{ text: '+3 red.' }} lines />);
    expect(html.replace(/<[^>]+>/g, '')).not.toMatch(/\.\s*$/);
  });
});
