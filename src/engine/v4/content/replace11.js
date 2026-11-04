// Actions lane of the overnight quality loop (Nov 4; /mnt/project-files/quality/board.md), bot games only. REPLACE11=1
// puts new wheel spaces in their old spaces' places (the old space stays in code, off the wheel):
//   space purple.again (Right Away) -> purple.callback (Call Back)
// Pitches: /mnt/project-files/quality/pitches/actions-*.md. Unset, the wheel is unchanged.
export const REPLACE11 = globalThis.process?.env?.REPLACE11 === '1';
/** The space this switch puts on the wheel in place of the old one. */
export const swap11 = (oldSpace, newSpace) => (REPLACE11 ? newSpace : oldSpace);
/** Handlers the new spaces use, registered only under the switch. */
export const handlers11 = hs => (REPLACE11 ? hs : {});
