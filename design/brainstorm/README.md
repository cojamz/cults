# Brainstorm records

One file per pitch: `<date>-<topic>.md`, copied from TEMPLATE.md. Every idea Claude shows Cory has a block here with
the nine steps of .claude/rules/pitching.md written out, including step 9 (the biggest real case) with numbers.

Why: Cory, Nov 11: "how do we actually make it happen in the future vs you saying 'golly ill make sure!' and then
doing jack shit after a few compactions". A promise doesn't survive a compaction; a hook does.

How it is enforced (.claude/hooks/pitch-gate.mjs, also run by presend):
- Before a message, decision card or widget reaches Cory, the gate reads it. If it pitches (quoted card text with a
  number or a card verb, or a numbered list of ideas) and bolds a name that isn't a live card, that name needs a
  complete `## Idea: <Name>` block here with `Verdict: send`. A name whose block says `Verdict: cut` is refused too.
- A pitch with new quoted text but no new name needs a complete record written in the last 6 hours.
- The skill must have been read on this box in the last 12 hours (bash .claude/hooks/brainstorm-read.sh).
- After every start, resume and compaction, the session-start hook prints these rules again (design-rules.sh).
Commit the record with the pitch-ledger line.
