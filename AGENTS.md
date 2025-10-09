# Repository Guidelines

This guide highlights the expectations for contributors working on the static RSS reader so changes stay consistent and deploy smoothly.

## Project Structure & Module Organization
- `src/main.tsx` bootstraps the React app; `src/App.tsx` wires layout and routing.
- Feature code lives under `src/components`, `src/pages`, and `src/hooks`; keep feed-fetching logic in hooks and presentation in components.
- Styles sit in `src/index.css` and `src/App.css`, with images or icons in `src/assets/`.
- Generated data and other static files belong in `public/`, including the `feeds.json` produced by `scripts/fetch-rss.js`.

## Build, Test, and Development Commands
- `npm install` installs dependencies; run after pulling package changes.
- `npm run dev` refreshes RSS feeds then launches Vite at `http://localhost:5173` with HMR.
- `npm run build` re-fetches feeds, type-checks via `tsc -b`, and emits production assets to `dist/`.
- `npm run preview` serves the latest build for release smoke tests.
- `npm run lint` runs ESLint; resolve all warnings before committing.
- `npm run fetch-feeds` regenerates `public/feeds.json` without starting the dev server.

## Coding Style & Naming Conventions
- Write TypeScript React function components; prefer hooks over classes and keep side effects inside `useEffect`.
- Follow the existing 2-space indentation, camelCase variables and PascalCase component file names (e.g., `FeedList.tsx`).
- Group imports: Node/React, third-party modules, then relative paths. Keep CSS imports at the bottom of the group.
- Run `npm run lint` and rely on editor ESLint integration to catch formatting issues early.

## Testing Guidelines
- Automated tests are not yet configured; when adding logic, create React Testing Library or Vitest specs under `src/__tests__/`.
- Name files `<Component>.test.tsx` and target edge cases such as empty feeds, failed fetches, and YouTube thumbnail fallbacks.
- Until tests exist, describe manual verification in your PR, including screenshots of the rendered feed and any video cards.

## Commit & Pull Request Guidelines
- Use imperative, descriptive commit messages (`Add pagination to feed list`); split unrelated work across commits.
- For pull requests, provide a summary, screenshots for UI updates, reproduction steps for fixes, and link related issues.
- Confirm `npm run lint`, `npm run build`, and a fresh `npm run fetch-feeds` succeed before requesting review; include the updated `public/feeds.json` when it changes.

## CI & Deployment Notes
- GitHub Actions deploys `dist/` to GitHub Pages on pushes to `main` and on the scheduled cron job, so broken builds block deployment.
- Keep the RSS fetch script resilient—network failures in `scripts/fetch-rss.js` will surface during CI builds, preventing publication.
