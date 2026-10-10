# Music Tech Readiness

A public-facing proposal for clearer music technology course expectations, fair consideration of equivalent experience, and a shared Week 1 baseline. For faculty and administrators first, with explanations students can use too.

**Working proposal, October 2026.** This project does not establish policy, administer a diagnostic, issue permission codes, or record completion.

## First version

- Faculty/student explanations and vocabulary.
- MVP profiles for MUS 244, MUS 324, and MUS 347.
- Shared foundation specifications plus Logic and Ableton transition modules.
- Prof. Ochs’s exact MUS 324 acknowledgment.
- Music Tech Den → Google Form → Director review → Week 1 proposal.
- Interactive permission-form demo and copyable planning summary.
- Historical profiles for MUS 248, MUS 344, MUS 346, and MUS 348.

MUS 244 remains required where the curriculum requires it. Approval to enter another course does not award MUS 244 credit. Entry skills are distinct from advanced course outcomes.

## View

Open `index.html` locally. No build or dependencies needed.

For GitHub Pages, choose **Settings → Pages → Deploy from a branch → main → /(root)**. The expected URL after publication is https://adamborecki.github.io/music-tech-readiness/ . Hosting is not enabled by this commit; verify the Pages result before sharing.

Optional Google Fonts have system fallbacks. No storage, student-data transmission, or analytics.

## Edit

`index.html`: structure. `styles.css`: design. `app.js`: interactions. `content.js`: course/module data. Edit `scripts/create-content.py` and rerun it to regenerate content. `docs/implementation.md`: workflow and form schema. `docs/source-map.md`: sources and uncertainties.

## Verify

Run `node --check app.js`, `node --check content.js`, and `node scripts/check.mjs`. Content and branching checks are included. Browser layout verification remains needed. Original syllabi and private student records are not committed.
