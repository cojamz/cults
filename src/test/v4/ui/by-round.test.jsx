// A rule that grows by round reads as "I: … / II: … / III: …" lines, this round lit and the others dimmed (Cory,
// 2026-10-18), in the space's hover, the member card and the seat's member list. The lines come from the def's byRound;
// its text stays the rule.
import { describe, it, expect, afterEach } from 'vitest';
import { render, cleanup } from '@testing-library/react';
import { createGame, allQuadrantIds, quadrant, defById } from '../../../engine/v4/index.js';
import { guestMembers } from '../../../engine/v4/content/index.js';
import { RuleText, MemberCard } from '../../../v4/game/Info.jsx';
import { memberRows } from '../../../v4/game/memberUse.js';

afterEach(cleanup);
const GROWS = /× round|in round I\b|per round number/i;
const everything = () => [
  ...allQuadrantIds().flatMap(id => [...quadrant(id).actions.map(a => [`${id}.${a.key}`, a]), ...(quadrant(id).members || []).map(m => [`${id}.${m.key}`, m])]),
  ...guestMembers().map(m => [m.id || m.key, m]),
];

describe('rules that grow by round', () => {
  it('every space and member whose rule grows by round has its three lines', () => {
    const found = everything().filter(([, d]) => GROWS.test(d.text || ''));
    expect(found.length).toBeGreaterThanOrEqual(6); // Allowance left; Toast, Harvest and New Blood went flat (Nov 11)
    for (const [id, d] of found) {
      expect(d.byRound, id).toBeTruthy();
      expect(d.byRound.lines, id).toHaveLength(3);
    }
  });

  it('the lines say what the space pays in each round', () => {
    const num = l => Number(l.match(/\d+/)[0]);
    for (const [qid, key] of [['gold', 'rush']]) {
      const a = quadrant(qid).actions.find(x => x.key === key);
      for (const r of [1, 2, 3]) expect(num(a.byRound.lines[r - 1]), `${qid}.${key} round ${r}`).toBe(a.estimate({ state: { round: r } }));
    }
    // Sleep In (Nov 10): +4/+5/+6 purple, then the Goes Last token in the rest
    const g = quadrant('purple').actions.find(x => x.key === 'skip');
    for (const r of [1, 2, 3]) expect(g.byRound.lines[r - 1].match(/\d+/g).map(Number), `purple.skip round ${r}`).toEqual([r + 3]);
    expect(g.byRound.rest).toMatch(/Goes Last token/);
    // Build Up stopped growing by round (Nov 10: +1 green per minion on Green spaces), so it has no lines
    expect(quadrant('echo').actions.find(x => x.key === 'chant').byRound).toBeUndefined();
  });

  it('the hover lights this round and dims the others', () => {
    const a = quadrant('gold').actions.find(x => x.key === 'rush');
    const { container } = render(<RuleText def={a} round={2} />);
    const lines = [...container.querySelectorAll('[data-round-line]')];
    expect(lines.map(l => l.textContent)).toEqual(['+2', '+4', '+6']); // "+2/+4/+6 gold", one sentence (Cory, Nov 9)
    expect(lines.map(l => l.classList.contains('now'))).toEqual([false, true, false]);
    expect(lines[1].getAttribute('aria-current')).toBe('true');
    expect(container.querySelector('[data-by-round]').dataset.byRound).toBe('2');
  });

  it('a rule that doesn’t grow reads as its text', () => {
    const a = quadrant('gold').actions.find(x => x.key === 'discount');
    const { container } = render(<RuleText def={a} round={2} />);
    expect(container.querySelector('[data-by-round]')).toBeNull();
    expect(container.textContent).toMatch(/costs 4 less/);
  });

  it('the member card and the seat list show the lines (lead, then rounds)', () => {
    const s = createGame({ seats: [{ name: 'Ana', kind: 'human' }, { name: 'Bo', kind: 'bot' }], seed: 3, quadrants: ['gold', 'market', 'red', 'echo'] });
    const c = Object.values(s.cards).find(x => x.def === 'market.planner');
    s.round = 3;
    const { container } = render(<MemberCard state={s} uid={c.uid} />);
    expect(container.querySelector('.br-lead').textContent).toMatch(/your next member costs/i); // the opener is icons now (Cory, Nov 5)
    expect([...container.querySelectorAll('[data-round-line].now')].map(l => l.dataset.roundLine)).toEqual(['3']);
    cleanup();
    s.shop = s.shop.filter(u => u !== c.uid); s.pile = s.pile.filter(u => u !== c.uid);
    s.players[0].members.push(c.uid);
    const row = memberRows(s, 0, 0).find(r => r.def.id === 'market.planner');
    expect(row.byRound.def).toBe(defById('market.planner'));
    expect(row.text).toMatch(/per round number/); // the text is still the whole rule
  });
});

// Each separate effect gets its own line in the hover cards (Cory, 2026-10-23: "the +1 resource should be its own line").
describe('one effect per line', () => {
  it('splits a rule at its sentences, and a scaling space reads as its three rounds, then the rest (Sleep In)', async () => {
    const { effectLines } = await import('../../../v4/game/Info.jsx');
    expect(effectLines('Swap any 2 members of equal cost. +1 red.')).toEqual(['Swap any 2 members of equal cost.', '+1 red.']);
    expect(effectLines('+3 gold, and +1 gold to a rival you choose.')).toHaveLength(1);
    // Help Yourself stopped growing by round (Nov 10), so Sleep In is the scaling space here
    const sleep = quadrant('purple').actions.find(a => a.key === 'skip');
    const { container } = render(<RuleText def={sleep} round={2} lines />);
    expect(container.textContent).toMatch(/^\+4\/\+5\/\+6 /); // the color is its icon
    expect(container.querySelectorAll('[data-round-line]')).toHaveLength(3);
    const rest = [...container.querySelectorAll('.br-rest')].map(e => e.textContent);
    expect(rest).toHaveLength(1);
    expect(rest[0]).toMatch(/Take the Goes Last token: your other minions are placed after everyone else’s\./);
  });
  it('a member card puts each sentence on its own line', () => {
    const { container } = render(<RuleText def={defById('gold.investor')} round={1} lines />);
    expect(container.querySelectorAll('[data-effect-line]')).toHaveLength(2);
  });
});
