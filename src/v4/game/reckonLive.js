// What the round's contests (Reckoning) have paid so far, and which rim is lit, kept outside GameScreen (Cory, Nov 6:
// "the end of round contests are a bit laggy, in terms of the count up and the followers flowing to the players").
// Each prize landing used to set GameScreen state and redraw the whole table mid-flight; now only the chairs whose
// totals change, and the wheel's rims, read these and redraw.
import { useSyncExternalStore } from 'react';
import { scoringSeatState } from './Reckoning.jsx';

let paid = { moment: null, n: 0 };
let lamp = null;
const subs = new Set();
const tell = () => { for (const fn of [...subs]) fn(); };
const subscribe = fn => { subs.add(fn); return () => subs.delete(fn); };

export function setReckonPaid(moment, n) { if (paid.moment !== moment || paid.n !== n) { paid = { moment, n }; tell(); } }
export function setReckonLamp(qid) { if (lamp !== qid) { lamp = qid ?? null; tell(); } }
export function resetReckonLive() { paid = { moment: null, n: 0 }; lamp = null; tell(); }

/** How many of this moment's steps have landed (0 for any other moment). */
export function useReckonPaid(moment) { return useSyncExternalStore(subscribe, () => (moment && paid.moment === moment ? paid.n : 0)); }
export function useReckonLamp() { return useSyncExternalStore(subscribe, () => lamp); }

// one board per (state, moment, paid): the four chairs share it, and an unchanged chair keeps its memo
let last = null;
export function paidSeatState(state, moment, n) {
  if (last && last.state === state && last.moment === moment && last.n === n) return last.out;
  last = { state, moment, n, out: scoringSeatState(state, moment, n) };
  return last.out;
}
