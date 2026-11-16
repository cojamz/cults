// The discard pile (Cory, Nov 6): members that leave play go face up on it; an empty deck shuffles it into a new deck.
import { it, expect } from 'vitest';
import { createGame } from '../../../engine/v4/core.js';
import { toDiscard, drawTop, deckReady, discardOf } from '../../../engine/v4/discard.js';

const game = () => createGame({ seats: [{ kind: 'bot' }, { kind: 'bot' }], seed: 11 });

it('a game starts with an empty discard pile', () => {
  expect(game().discard).toEqual([]);
});
it('the last member discarded is on top', () => {
  const s = game();
  const [a, b] = s.pile.splice(0, 2);
  toDiscard(s, a); toDiscard(s, b);
  expect(discardOf(s).at(-1)).toBe(b);
});
it('an empty deck takes the whole discard pile, shuffled, before it deals', () => {
  const s = game();
  const out = s.pile.splice(0);
  toDiscard(s, ...out);
  const said = [];
  const top = drawTop(s, t => said.push(t));
  expect(out).toContain(top);
  expect(s.discard).toEqual([]);
  expect(s.pile.length).toBe(out.length - 1);
  expect(said[0]).toMatch(/discard pile \(\d+\) is shuffled into a new deck/);
});
it('a deck with cards never touches the discard pile', () => {
  const s = game();
  toDiscard(s, s.pile.pop());
  expect(deckReady(s)).toBe(true);
  expect(s.discard.length).toBe(1);
});
it('both empty: nothing to deal', () => {
  const s = game();
  s.pile.splice(0);
  expect(drawTop(s)).toBeUndefined();
});
