// Two decks (Cory, 2026-10-31): 10 or 15 members per color. Every balance run asks him which one to balance on,
// so balance scripts refuse to start until DECK says (DECK=10 or DECK=15).
export function deckRules() {
  const d = process.env.DECK;
  if (d !== '10' && d !== '15') {
    console.error('Which deck? Ask Cory whether to balance on the 10 or the 15 per color decks, then set DECK=10 or DECK=15.');
    process.exit(2);
  }
  return d === '10' ? { deck: 10 } : {};
}
