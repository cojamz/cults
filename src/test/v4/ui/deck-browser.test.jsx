import { afterEach, expect, it, vi } from 'vitest';
import { cleanup, render, fireEvent } from '@testing-library/react';
import { createGame } from '../../../engine/v4/index.js';
import DeckBrowser, { deckCatalog } from '../../../v4/game/DeckBrowser.jsx';
afterEach(cleanup);
const table = () => createGame({ seats: [{ name: 'Ana' }, { name: 'Bo' }], seed: 31, quadrants: ['red', 'yellow', 'market', 'echo'] });
it('groups every card type by color and total price without revealing or changing draw order', () => {
  const state = table(), before = JSON.stringify(state), catalog = deckCatalog(state);
  expect(catalog.cards).toHaveLength(new Set(Object.values(state.cards).map(c => c.def)).size);
  expect(catalog.cards.reduce((n, c) => n + c.copies, 0)).toBe(Object.keys(state.cards).length);
  expect(catalog.prices).toEqual([...catalog.prices].sort((a,b) => a-b));
  expect(deckCatalog({ ...state, pile: [...state.pile].reverse() })).toEqual(catalog);
  expect(JSON.stringify(state)).toBe(before);
});
it('places compact members by color and cost, shows selected abilities, and supports quick close', () => {
  const state = table(), close = vi.fn();
  const { getByRole, container } = render(<DeckBrowser state={state} onClose={close} />);
  const catalog = deckCatalog(state);
  for (const c of catalog.cards) {
    const el = container.querySelector(`[data-deck-member="${c.def.id}"]`);
    expect(el.closest('[data-deck-color]').dataset.deckColor).toBe(c.color);
    expect(Number(el.closest('[data-deck-price]').dataset.deckPrice)).toBe(c.cost);
    expect(el.tagName).toBe('BUTTON');
  }
  const first = catalog.cards.find(c => c.color === catalog.rows[0].key);
  expect(container.querySelector('[data-deck-selected]').dataset.deckSelected).toBe(first.def.id);
  // The first color starts at the cheapest column, so phones don't open onto empty cells.
  expect(first.cost).toBe(catalog.prices[0]);
  const last = catalog.cards[catalog.cards.length - 1];
  fireEvent.click(container.querySelector(`[data-deck-member="${last.def.id}"]`));
  const summary = container.querySelector('[data-deck-selected]');
  expect(summary.dataset.deckSelected).toBe(last.def.id);
  expect(summary.querySelector('p').textContent.length).toBeGreaterThan(0);
  expect(container.querySelectorAll('[data-deck-selected]')).toHaveLength(1);
  expect(container.querySelector(`[data-deck-member="${last.def.id}"]`).getAttribute('aria-pressed')).toBe('true');
  fireEvent.click(getByRole('button', { name: 'Close member browser' }));
  expect(close).toHaveBeenCalledTimes(1);
  fireEvent.keyDown(document, { key: 'Escape' });
  expect(close).toHaveBeenCalledTimes(2);
});
it('marks members already bought, with whose they are (Cory, Nov 6: "deck isnt showing was has already been bought")', () => {
  const base = table();
  const uid = base.pile[0], def = base.cards[uid].def;
  const state = { ...base, pile: base.pile.slice(1), players: base.players.map((p, i) => (i === 1 ? { ...p, members: [uid] } : p)) };
  const entry = deckCatalog(state).cards.find(c => c.def.id === def);
  expect(entry.owners).toEqual([1]);
  expect(entry.bought).toBe(entry.copies === 1);
  expect(deckCatalog(base).cards.every(c => c.owners.length === 0 && !c.bought)).toBe(true);
  const { container } = render(<DeckBrowser state={state} onClose={() => {}} />);
  const el = container.querySelector(`[data-deck-member="${def}"]`);
  expect(el.dataset.deckBought).toBe('1');
  expect(el.getAttribute('title')).toContain('Bo');
  fireEvent.click(el);
  expect(container.querySelector('[data-deck-bought-note]').textContent).toContain('Bo');
});
it('marks members on the discard pile (Cory, Nov 6: "deck should have a symbol for discarded just like it has one for bought")', () => {
  const base = table();
  const uid = base.pile[0], def = base.cards[uid].def;
  const state = { ...base, pile: base.pile.slice(1), discard: [uid] };
  const entry = deckCatalog(state).cards.find(c => c.def.id === def);
  expect(entry.discarded).toBe(1);
  expect(entry.allOut).toBe(entry.copies === 1);
  const { container } = render(<DeckBrowser state={state} onClose={() => {}} />);
  const el = container.querySelector(`[data-deck-member="${def}"]`);
  expect(el.dataset.deckDiscarded).toBe('1');
  expect(el.querySelector('.db-mark.discarded')).not.toBeNull();
  expect(el.getAttribute('title')).toMatch(/discard pile/i);
  fireEvent.click(el);
  expect(container.querySelector('[data-deck-bought-note]').textContent).toMatch(/discard pile/i);
});
