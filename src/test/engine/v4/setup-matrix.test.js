// @vitest-environment node
// Setup options together (Cory, Nov 3: "i worry we have a LOT of alt setups and not everything will work together").
// A small slice of scripts/v4-setup-matrix.mjs (which plays every combination): each setting the screen still offers,
// live rules (cloaks, cull, round decks), every invariant after every move.
import { describe, it, expect } from 'vitest';
import { shopSize } from '../../../engine/v4/core.js';
import { runTable } from './fuzz-tables-runner.js';
import { fitTable } from '../../../v4/tables.js';

const LIVE = { cull: true, artifacts: true, roundDecks: 2, deck: 10 };

describe('setup options together', () => {
  // the setup screen's rule settings since Nov 4 (Cory: "keep contests toggle. drop the piles modes. drop 15 members.
  // drop 'wait for round III'. keep swap"): swap card off/on x contests As printed/By color
  for (const swapCard of [false, true]) for (const contests of ['', 'byColor']) {
    it(`4 players, swap card ${swapCard ? 'on' : 'off'}, ${contests ? 'By color' : 'As printed'}`, () => {
      const quadrants = fitTable({ mode: 'classic' }, 4).quadrants;
      const rules = { ...LIVE, ...(swapCard ? { swapCard } : {}), ...(contests ? { contests } : {}) };
      const rows = [];
      // Borrow's member goes back to the shop at round end (Cory, Nov 12: "it goes back to the shop"): that one card
      // sits in the row past its size until the next round's fresh row; every other way stays within the size
      let back = new Set(), round = 0;
      const { state } = runTable({ quadrants, n: 4, seed: 77 + (swapCard ? 1 : 0), kind: 'bot', rules, onMove: (prev, s) => {
        if (s.round !== round) { back = new Set(); round = s.round; }
        for (const b of prev.borrowed || []) if (s.shop.includes(b.uid) && !prev.shop.includes(b.uid)) back.add(b.uid);
        if (s.round >= 1) rows.push(s.shop.length - shopSize(s) - s.shop.filter(u => back.has(u)).length);
      } });
      expect(state.over).toBe(true);
      expect(rows.filter(d => d > 0)).toEqual([]); // the face-up row never grows past its size
    });
  }
});
