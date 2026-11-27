// @vitest-environment node
// Cory, Nov 26, on Doorbusters: "thats not on theme", "how did Doorbusters slip through the cracks?". It joined from his
// maybes the night of the village rename pass and kept its pitch name. Every dealt member and action name must be on
// design/names-approved.md, which a name reaches only through .claude/rules/member-names.md (candidates, three judges).
import { describe, it, expect } from 'vitest';
import { readFileSync } from 'node:fs';
import { quadrant, allQuadrantIds } from '../../../engine/v4/index.js';
import { CUT } from '../../../engine/v4/content/cull.js';
import { guestMembers } from '../../../engine/v4/content/index.js';

const listed = new Set(readFileSync(new URL('../../../../design/names-approved.md', import.meta.url), 'utf8')
  .split('\n').filter(l => l.startsWith('- ')).map(l => l.slice(2).trim()));

describe('every dealt name passed the village check', () => {
  it('members and actions are all on design/names-approved.md', () => {
    const names = new Set();
    for (const id of allQuadrantIds().filter(id => !['guest', 'blue', 'green'].includes(id))) {
      const q = quadrant(id);
      for (const m of q.members.filter(m => !CUT.has(m.id) && !m.retired)) names.add(m.name);
      for (const s of (q.actions || []).flat()) if (s?.name) names.add(s.name);
    }
    for (const m of guestMembers().filter(m => !CUT.has(m.id) && !m.retired)) names.add(m.name);
    expect([...names].filter(n => !listed.has(n)), 'name these through .claude/rules/member-names.md, then add them').toEqual([]);
  });
});
