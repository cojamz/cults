// The fresh reader's record (Cory, Nov 9 weekly review, "sure whatever"): the plain-reader agent runs this on the
// exact message it returns, and presend refuses any message over one line that has no matching record.
//   node .claude/hooks/reader-stamp.mjs <<'EOF'      (stamp)
//   node .claude/hooks/reader-stamp.mjs --has <<'EOF' (exit 0 if stamped, 1 if not)
import { readFileSync, appendFileSync, mkdirSync, existsSync } from 'node:fs';
import { createHash } from 'node:crypto';
export const norm = t => String(t).replace(/\s+/g, ' ').trim();
export const FILE = existsSync('/mnt/project-files') ? '/mnt/project-files/harness/reader-stamps.jsonl' : '/tmp/cults-reader-stamps.jsonl';
export const key = t => createHash('sha1').update(norm(t)).digest('hex');
export function stamped(text) {
  try { return readFileSync(FILE, 'utf8').includes(`"${key(text)}"`); } catch { return false; }
}
if (process.argv[1]?.endsWith('reader-stamp.mjs')) {
  let text = ''; try { text = readFileSync(0, 'utf8'); } catch {}
  if (!norm(text)) { console.log('reader-stamp: no text'); process.exit(1); }
  if (process.argv.includes('--has')) process.exit(stamped(text) ? 0 : 1);
  try { mkdirSync(FILE.replace(/\/[^/]*$/, ''), { recursive: true }); } catch {}
  appendFileSync(FILE, JSON.stringify({ at: new Date().toISOString(), key: key(text) }) + '\n');
  console.log('reader-stamp: recorded');
}
