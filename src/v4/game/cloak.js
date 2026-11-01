// Cloaks (Cory, 2026-11-01: "artifacts should be cloaks, like colored cloaks… the cult leader has that colored cloak"):
// a player's artifact is worn by their leader, and their chair is outlined in its color, so the table sees who a
// color's moves pay. Presentation only: the artifact's rule is unchanged.
import { quadrant } from '../../engine/v4/index.js';

// lamp.css's quadrant inks, for the leader's pixel robe (an SVG fill can't read a CSS variable per shade)
export const CLOAK_HEX = {
  gold: '#d49b27', red: '#c4533f', blue: '#4a80b8', green: '#3f9467', magenta: '#b2386c', silver: '#94a3b2',
  yellow: '#ead844', purple: '#7d5ba6', white: '#e6dcc6',
};

/** The resource color of the cloak player pid wears, or null before the pick. */
export function cloakOf(state, pid) {
  const p = state.players[pid], arts = state.artifacts || {};
  if (!p || p.artifact === undefined) return null;
  const q = Object.keys(arts).find(k => arts[k] === p.artifact);
  if (!q) return null;
  const r = quadrant(q).resource;
  return CLOAK_HEX[r] ? r : null;
}
