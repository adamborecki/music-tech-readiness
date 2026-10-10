# Music Tech Readiness

A short, interactive permission-code request prototype for Chapman music technology courses.

1. Select coursework: completed, taking now, or planning to take.
2. See course request routes and select courses.
3. View readiness modules and answer only relevant questions.
4. Preview and copy a request summary.

**Demo only:** no submission, permission codes, assessment scores, or completion records. Learning modules are draft specifications, not completed lessons. Both advanced MUS 344 courses are illustrative examples, not offerings.

## Working rules

MUS 244 requires MUS 128 or MUS 133 as a prerequisite/corequisite. Other courses require MUS 244. Examples add MUS 347 for Advanced Mixing & Mastering or MUS 348 for Advanced Synthesis & Sampling; equivalent-competency review is available. Taking MUS 244 alongside an upper-level course requires approval. Planned courses never silently satisfy prerequisites.

These rules reflect the Director’s October 10, 2026 corrections and supersede the historical syllabus summaries for the prototype. They are not independently verified catalog rules. A normal request route does not guarantee a seat, waive degree requirements, or issue prerequisite credit.

## Development

Open `index.html` locally. No build or dependencies. `content.js` holds courses, modules, and the exact Ochs message. `rules.js` holds eligibility logic. `app.js` holds interactions. `styles.css` holds layout. No storage, external fonts, analytics, or student-data transmission.

```sh
node --check app.js
node --check rules.js
node --check content.js
node scripts/check.mjs
```

Checks cover 1,152 eligibility combinations, corequisites, concurrent enrollment, advanced examples, data references, and initial render. Browser layout verification is still needed.

The existing `.github/workflows/static.yml` publishes the repository to GitHub Pages when configured. Expected URL: https://adamborecki.github.io/music-tech-readiness/ . Verify deployment before sharing.

See [implementation notes](docs/implementation.md) and [source map](docs/source-map.md). Original syllabi and student records are not published.
