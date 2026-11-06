// Timing icons (Cory, Nov 5: "could be mega simplified to basically show visual language for On Recruit and Round
// Start, then just be Steal 1"; picks: "1x instead of circle", "maybe 1x/R … stylized as a fraction", the hourglass and
// the checkered flag, "good for now"). A member's rule that opens with a timing shows it as icons and the rest of the
// sentence; the words stay in the page, hidden, so it reads, copies and searches the same. Mid-sentence timings keep
// their bold words.
const SVG = ({ children }) => <svg viewBox="0 0 16 16" width="16" height="16" fill="currentColor" aria-hidden="true">{children}</svg>;
const Glass = ({ full }) => (
  <SVG>
    <path d="M2.6 1.2h10.8M2.6 14.8h10.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none" />
    <path d="M3.8 1.6c0 3.6 3.2 4.6 3.2 6.4S3.8 10.8 3.8 14.4h8.4c0-3.6-3.2-4.6-3.2-6.4s3.2-2.8 3.2-6.4Z" stroke="currentColor" strokeWidth="1.3" fill="none" strokeLinejoin="round" />
    {full ? <path d="M4.3 1.9h7.4C11.6 5 8.6 6 8 7.8C7.4 6 4.4 5 4.3 1.9Z" /> : <path d="M8 8.2c.6 1.8 3.6 2.8 3.7 5.9H4.3C4.4 11 7.4 10 8 8.2Z" />}
  </SVG>
);
const ICONS = {
  recruit: ['On Recruit', () => <SVG><path d="M6.5 1.6a2.7 2.7 0 1 1 0 5.4a2.7 2.7 0 1 1 0-5.4ZM1.2 14.6c0-3.4 2.2-5.4 5.3-5.4s5.3 2 5.3 5.4Z" /><path d="M12.6 1.2v5.6M9.8 4h5.6" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" fill="none" /></SVG>],
  start: ['Round Start', () => <Glass full />],
  // a moon, not a second hourglass: sand on the bottom read as the round's start (Cory, Nov 6: "spoilsport icon says beginning of round? but it happens end of round?")
  end: ['Round End', () => <SVG><path d="M9.6 1.4A6.8 6.8 0 1 0 14.6 11.2A5.4 5.4 0 0 1 9.6 1.4Z" /></SVG>],
  game: ['Game End', () => <SVG><path d="M2.6 1v14.2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" fill="none" /><path d="M3.4 1.6h10.4v7.2H3.4Z" fill="none" stroke="currentColor" strokeWidth="1.1" /><path d="M3.4 1.6h2.6v2.4H3.4ZM8.6 1.6h2.6v2.4H8.6ZM6 4h2.6v2.4H6ZM11.2 4h2.6v2.4h-2.6ZM3.4 6.4h2.6v2.4H3.4ZM8.6 6.4h2.6v2.4H8.6Z" /></SVG>],
  round: ['On Use, once per round', () => <span className="tm-frac" aria-hidden="true"><span>1×</span><span>R</span></span>],
  once: ['On Use, once per game', () => <span className="tm-txt" aria-hidden="true">1×</span>],
};
// the openers a member's rule can start with (after memberTimingWords), longest first
const OPENERS = [
  [/^On Recruit (?:and (?:at )?|\/ (?:at )?)Round Start[:,]\s*/i, ['recruit', 'start']],
  [/^On Use, once per round[:,]\s*/i, ['round']],
  [/^On Use, once per game[:,]\s*/i, ['once']],
  [/^Once per round[:,]\s*/i, ['round']],
  [/^Once per game[:,]\s*/i, ['once']],
  [/^On Recruit[:,]\s*/i, ['recruit']],
  [/^(?:At )?Round Start[:,]\s*/i, ['start']],
  [/^Round End[:,]\s*/i, ['end']],
  [/^Game End[:,]\s*/i, ['game']],
];
/** A rule's opening timing as icon kinds, and the rest of the rule (first letter raised); null when it has none. */
export function splitOpener(text) {
  const t = String(text || '');
  for (const [re, kinds] of OPENERS) {
    const m = re.exec(t);
    if (m && t.length > m[0].length) { const rest = t.slice(m[0].length); return { kinds, words: m[0], rest: rest.charAt(0).toUpperCase() + rest.slice(1) }; }
  }
  return null;
}
/** The icons, each saying its words on hover; the words themselves stay in the page, hidden. */
export function TimingIcons({ kinds, words }) {
  return (
    <span className="tm-icons" data-timing={kinds.join(' ')}>
      {kinds.map(k => { const [name, Icon] = ICONS[k]; return <span key={k} className="tm-icon" title={name} data-timing-icon={k}><Icon /></span>; })}
      <span className="tm-words">{words}</span>
    </span>
  );
}
