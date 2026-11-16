// Picking an emoji plays its call, and so does another person in the room changing theirs (Cor, 2026-11-04).
import { act, cleanup, fireEvent, render } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';

const calls = vi.hoisted(() => []);
vi.mock('../../../v4/sound.js', async original => ({ ...await original(), playCall: id => calls.push(id) }));
import { EmojiButton } from '../../../v4/screens/EmojiPicker.jsx';
import { Lobby } from '../../../v4/screens/Screens.jsx';

afterEach(() => { cleanup(); calls.length = 0; });

describe('emoji pick sounds', () => {
  it('your pick plays that emoji', () => {
    const onPick = vi.fn();
    const { container } = render(<EmojiButton value="frog" onPick={onPick} />);
    fireEvent.click(container.querySelector('[data-emoji-btn]'));
    fireEvent.click(container.querySelector('[data-pick="bee"]'));
    expect(calls).toEqual(['bee']);
    expect(onPick).toHaveBeenCalledWith('bee');
  });

  it("another person's pick plays theirs; joining, bots and your own view update don't", () => {
    let fn = null;
    const view = players => ({ code: 'ABCD', hostId: 'me', status: 'open', me: { playerId: 'me' }, players });
    const lobby = { subscribe: f => { fn = f; f(view(base)); return () => {}; }, setEmoji: vi.fn() };
    const base = [
      { seat: 0, id: 'me', kind: 'human', name: 'Cor', emoji: 'frog' },
      { seat: 1, kind: 'bot', name: 'Bot', emoji: 'cat' },
    ];
    render(<Lobby lobby={lobby} myId="me" onLeave={() => {}} />);
    expect(calls).toEqual([]);
    const ana = { seat: 2, id: 'ana', kind: 'human', name: 'Ana', emoji: 'ghost' };
    act(() => fn(view([...base, ana]))); // Ana joins
    expect(calls).toEqual([]);
    act(() => fn(view([{ ...base[0], emoji: 'skull' }, { ...base[1], emoji: 'bug' }, ana]))); // my pick, a bot's swap
    expect(calls).toEqual([]);
    act(() => fn(view([{ ...base[0], emoji: 'skull' }, { ...base[1], emoji: 'bug' }, { ...ana, emoji: 'wizard' }])));
    expect(calls).toEqual(['wizard']);
  });
});
