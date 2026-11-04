// One id per box (container), for claim files on the shared folder. Every cloud box is called "vm", and
// /etc/machine-id can come from the same image, so the hostname alone made a live claim from another box look dead
// (same host, pid not running here) and two boxes played one block (Balance thread, Nov 4). A random id is made once
// per box and kept outside the shared folder, so it dies with the container.
import { hostname, tmpdir } from 'node:os';
import { readFileSync, writeFileSync, renameSync } from 'node:fs';
import { randomBytes } from 'node:crypto';
import { join } from 'node:path';

let cached = null;
export function boxId() {
  if (cached) return cached;
  const f = join(tmpdir(), '.patrons-box-id');
  try { cached = readFileSync(f, 'utf8').trim(); } catch { /* none yet */ }
  if (!cached) {
    const id = `${hostname()}-${randomBytes(6).toString('hex')}`;
    const t = `${f}.${process.pid}`;
    try { writeFileSync(t, id, { flag: 'wx' }); try { renameSync(t, f); } catch {} } catch {}
    try { cached = readFileSync(f, 'utf8').trim(); } catch { cached = id; }
  }
  return cached;
}
