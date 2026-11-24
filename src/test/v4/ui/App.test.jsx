// App flow: Home → Play on this device → setup → game, with the real local session.
import { describe, it, expect, afterEach, beforeEach, vi } from 'vitest';
import { render, screen, fireEvent, cleanup, waitFor } from '@testing-library/react';
import App from '../../../v4/App.jsx';

afterEach(() => { cleanup(); vi.restoreAllMocks(); });
beforeEach(() => { localStorage.clear(); vi.spyOn(Math, 'random').mockReturnValue(0); }); // deterministic resource draft; reverse order may start with a bot

describe('v4 app', () => {
  it('goes from Home through local setup into a game', async () => {
    const { container } = render(<App />);
    fireEvent.click(screen.getByRole('button', { name: 'Play on this device' }));
    // turn P3 and P4 off: 2 seats
    fireEvent.click(screen.getAllByRole('button', { name: /^Remove / })[3]);
    fireEvent.click(screen.getAllByRole('button', { name: /^Remove / })[2]);
    fireEvent.click(screen.getByRole('button', { name: 'Start' }));
    // two chairs at the table hold a cult; the other two stay empty
    expect(container.querySelectorAll('.lt-seat[data-pid]')).toHaveLength(2);
    expect(container.querySelector('[data-prompt]').textContent).toMatch(/draft.*resource/i);
    // Reverse order may let the bot draft first. Answer the human's one draft choice.
    // With the bot first, the human's draft can be the last one left and take itself.
    const drafting = () => /draft.*resource/i.test(container.querySelector('[data-prompt]').textContent);
    await waitFor(() => expect(!drafting() || container.querySelector('.app[data-yours="1"] [data-option^="color:"]')).toBeTruthy(), { timeout: 10000 });
    if (drafting()) fireEvent.click(container.querySelector('.app[data-yours="1"] [data-option^="color:"]'));
    await waitFor(() => expect(container.querySelector('[data-prompt]').textContent).not.toMatch(/draft.*resource/i), { timeout: 10000 });
  });

  it('keeps at least 2 players, and Add player goes up to the most seats', () => {
    render(<App />);
    fireEvent.click(screen.getByRole('button', { name: 'Play on this device' }));
    fireEvent.click(screen.getAllByRole('button', { name: /^Remove / })[3]);
    fireEvent.click(screen.getAllByRole('button', { name: /^Remove / })[2]);
    expect(screen.getAllByRole('button', { name: /^Remove / }).every(b => b.disabled)).toBe(true);
    expect(screen.getByRole('button', { name: 'Start' }).disabled).toBe(false);
    for (let i = 0; i < 4; i++) fireEvent.click(screen.getByRole('button', { name: '+ Add player' }));
    expect(screen.getAllByRole('button', { name: /^Remove / })).toHaveLength(6);
    expect(screen.queryByRole('button', { name: '+ Add player' })).toBeNull();
  });
});
