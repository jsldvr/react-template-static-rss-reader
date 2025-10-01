Agent Guide: Dark Mode and Performance

Scope: Entire repository

Overview
- This project uses Tailwind CSS v4 with a CSS-first setup. Dark mode relies on a required custom variant declaration and on the React theme provider toggling classes on the root <html> element.
- Performance optimizations include critical font-face inlining and body/html background rules in index.html to avoid flashes on first paint.

Do Not Remove
- Keep the following line in src/index.css. It is required for Tailwind to generate dark: utilities that respond to the html.dark class:

  @variant dark (.dark &);

  Notes:
  - Some editors or linters may flag this as “Unknown at rule”. This is a Tailwind v4 at‑rule and is correct. Do not delete it.
  - If needed to silence an editor warning, add a local ignore comment. Example:
    /* stylelint-disable at-rule-no-unknown */
    @variant dark (.dark &);
    /* stylelint-enable at-rule-no-unknown */

Dark Mode Contract
- React’s useTheme applies either .light or .dark to the <html> element. All CSS must treat those classes as the source of truth.
- Keep theme-aware base styles in src/index.css:
  - html { color-scheme: light }
  - html.dark { color-scheme: dark }
  - body background must switch with theme (light: rgb(249 250 251), dark: rgb(17 24 39))

index.html Rules
- Preserve font preload links and inline @font-face blocks for performance.
- Keep initial-paint background rules synchronized with the theme class on <html> to avoid flashes:
  - html, body { background-color: light background }
  - html.dark, html.dark body { background-color: dark background }
  - html { color-scheme: light } and html.dark { color-scheme: dark }

What Breaks Dark Mode
- Deleting @variant dark (.dark &) from src/index.css
- Moving body background to a static value that does not respond to html.dark
- Removing html.dark rules from index.html or src/index.css

How to Test
- Toggle through Light → Dark → System using the UI button.
- Verify the header, cards, text, and body background switch with the theme.
- Change the OS theme while in System mode and confirm the app updates.

When in Doubt
- Keep the @variant line and the html/html.dark + body rules intact.
- Ask before altering theme or performance-critical CSS.

