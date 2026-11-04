// Prints the dealable members under the current env as JSON: [{ id, name, color, s, w }]. The trial runner runs it
// once with a trial's env and once with its base env, so the difference is the cards the trial adds and retires.
import { allQuadrantIds, quadrant } from '../../src/engine/v4/index.js';
import { guestMembers } from '../../src/engine/v4/content/index.js';

const out = [...allQuadrantIds().flatMap(q => quadrant(q).members), ...guestMembers()]
  .filter(d => !d.retired && !d.artifact)
  .map(d => ({ id: d.id, name: d.name, color: d.id.split('.')[0], s: d.s, w: d.w }));
process.stdout.write(JSON.stringify(out));
