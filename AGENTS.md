# AGENTS.md

## Design standards (always active)

When writing, refactoring, or reviewing any frontend code (HTML/CSS, Tailwind,
React, Vue, Svelte, or other UI code), you must follow the persistent design
rules in [.opencode/rules/impeccable.md](.opencode/rules/impeccable.md). They
enforce anti-AI-slop defaults, strict hierarchy and rhythm, typography,
color restraint, accessibility, and motion standards adapted from the
Impeccable design language.

## Design workflows (on demand)

For full design workflows, use the `impeccable` skill or its standalone slash
commands:

- `/impeccable audit <target>` or `/audit` — technical quality checks (a11y, performance, responsive) with a scored report.
- `/impeccable polish <target>` or `/polish` — final quality pass: typography, transitions, micro-interactions, visual balance.
- `/impeccable teach <target>` or `/teach` — explain UI/UX decisions with formal design rationale (never edits).
- `/impeccable` — full command menu (shape, critique, typeset, layout, distill, harden, animate, colorize, bolder/quieter, init, document, live, ...).

## Workspace

- This is a vanilla HTML/CSS/JS portfolio (see `index.html`, `css/style.css`,
  `js/data.js`, `js/script.js`).
- Fill personal content in `js/data.js`; the page renders from it.
