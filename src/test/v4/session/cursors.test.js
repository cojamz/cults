import { describe, it, expect, beforeEach, afterEach, vi } from 'vitest';
import { createRoom, joinRoom, createMemoryStore, createMemoryTransport, ROOM_ROOT } from '../../../v4/session/index.js';
import { cleanCursor, cursorPath, CURSOR_GAP_MS } from '../../../v4/session/cursors.js';
import { until, pause } from './helpers.js';

beforeEach(() => { vi.useFakeTimers(); });
afterEach(() => { vi.useRealTimers(); });

const started = lobby => new Promise(r => lobby.onStart(r));

describe('live cursors', () => {
  it('cleans what is sent', () => {
    expect(cleanCursor({ a: '[data-slot="r1"]', x: 0.12345, y: 1 })).toEqual({ a: '[data-slot="r1"]', x: 0.123, y: 1 });
    expect(cleanCursor({ a: 'x', x: 9, y: 0 })).toBeNull();
    expect(cleanCursor({ x: 0.5, y: 0.5 })).toEqual({ a: '', x: 0.5, y: 0.5 });
    expect(cleanCursor(null)).toBeNull();
  });

  it('online: a mouse at one table shows at the others, from that seat only, and leaves when it goes', async () => {
    const store = createMemoryStore();
    const host = await createRoom({ name: 'Host', transport: createMemoryTransport(store), seed: 3, botDelayMs: 0 });
    const g = await joinRoom({ code: host.code, name: 'G1', transport: createMemoryTransport(store), botDelayMs: 0 });
    const [hs, gs] = await Promise.all([started(host.lobby), started(g.lobby), host.lobby.start()]);
    await until(() => hs.getState() && gs.getState(), { label: 'first state' });
    // stored beside the room, never inside it (everyone listens to the whole room)
    gs.pointAt({ a: '[data-region="shop"]', x: 0.25, y: 0.5 });
    await until(() => hs.cursors.length === 1, { label: 'cursor delivered' });
    expect(hs.cursors[0]).toMatchObject({ seat: 1, a: '[data-region="shop"]', x: 0.25, y: 0.5 });
    expect(gs.cursors).toEqual([]); // never your own
    const room = await createMemoryTransport(store).get(`${ROOM_ROOT}/${host.code}`);
    expect(JSON.stringify(room)).not.toContain('data-region');
    // a burst of moves is sent at most once per gap, ending on the last
    let writes = 0;
    hs.onCursors(() => writes++);
    for (let i = 1; i <= 20; i++) { gs.pointAt({ a: '', x: i / 40, y: 0.5 }); await pause(5); }
    await pause(CURSOR_GAP_MS * 3);
    expect(writes).toBeLessThanOrEqual(3);
    expect(hs.cursors[0]).toMatchObject({ a: '', x: 0.5 });
    // a forged cursor (someone writing for a seat that isn't theirs) is ignored
    await createMemoryTransport(store).set(`${cursorPath(ROOM_ROOT, host.code)}/nobody`, { seat: 0, a: '', x: 0.1, y: 0.1 });
    await pause(50);
    expect(hs.cursors.map(c => c.seat)).toEqual([1]);
    gs.pointAt(null);
    await until(() => hs.cursors.length === 0, { label: 'cursor gone' });
    host.lobby.destroy(); g.lobby.destroy();
  });
});
