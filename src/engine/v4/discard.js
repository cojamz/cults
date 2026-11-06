// The discard pile (Cory, Nov 6: "maybe we should start discarding? … then you know what's out (and what might be
// remaining) and then when discard is done it gets shuffled and turns back into the deck"). Every member that used to
// go "to the bottom of the pile" goes face up on the discard pile instead: the old row between rounds, cast-outs,
// releases, shop members sent away. When the deck (state.pile) runs out and a card is needed, the discard pile is
// shuffled into a new deck. state.discard is oldest first, so its last card is the one on top.
import { shuffleInPlace } from './rng.js';

/** The discard pile, read only (a game saved before Nov 6 has none). */
export const discardOf = state => state.discard || [];

/** Put members face up on the discard pile, in order (the last one ends on top). */
export function toDiscard(state, ...uids) {
  (state.discard ||= []).push(...uids);
}

/** Shuffle the discard pile into a new deck when the deck is empty. True when the deck has a card after. */
export function deckReady(state, log) {
  if (state.pile.length) return true;
  const d = discardOf(state);
  if (!d.length) return false;
  state.pile.push(...d.splice(0));
  shuffleInPlace(state, state.pile);
  state.reshuffles = (state.reshuffles || 0) + 1;
  log?.(`The deck ran out: the discard pile (${state.pile.length}) is shuffled into a new deck.`);
  return true;
}

/** The deck's top card, reshuffling the discard pile first when the deck is empty; undefined when both are empty. */
export function drawTop(state, log) {
  return deckReady(state, log) ? state.pile.shift() : undefined;
}

/** Take a member off the discard pile (recruited or claimed from it). False when it isn't there. */
export function takeFromDiscard(state, uid) {
  const d = discardOf(state), i = d.indexOf(uid);
  if (i < 0) return false;
  d.splice(i, 1);
  return true;
}
