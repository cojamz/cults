// How to play lists today's glossary (moved out of info.test.jsx, Nov 24: that file loads the Gold test fixture, whose
// old cards would put retired words back in the glossary).
import { describe, it, expect, afterEach } from 'vitest';
import { render, cleanup } from '@testing-library/react';
import { glossaryEntries } from '../../../v4/glossary.js';

afterEach(cleanup);

describe('How to play lists the glossary', () => {
  it('every glossary term is defined on the How to play page', async () => {
    const { default: HowToPlay } = await import('../../../v4/HowToPlay.jsx');
    const { container } = render(<HowToPlay onClose={() => {}} />);
    const dts = [...container.querySelectorAll('[data-glossary] dt')].map(e => e.textContent);
    // only words today's deck uses (Cory, Nov 5: the discount word stayed after its card was cut)
    expect(dts).toEqual(glossaryEntries().map(t => t.word));
    expect(dts).not.toContain('Next member costs less');
    // Full set shows only while a card in today's deck says it (no card in the Nov 11 decks does)
    if (glossaryEntries().some(t => t.key === 'full set')) expect(container.querySelector('[data-glossary]').textContent).toMatch(/Full set/);
    else expect(dts).not.toContain('Full set');
    expect(dts).not.toContain('Release');
    expect(container.textContent).not.toContain('Released members');
  });
});

