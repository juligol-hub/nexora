# NEXORA

A responsive SaaS landing page with an interactive business intelligence dashboard. Built with Next.js 16, React, JavaScript, and Tailwind CSS v4.

**Portfolio concept:** NEXORA is a fictional business. All figures are sample data; this project has no accounts, billing, backend analytics service, or live customer records.

## Run locally

Use a Node.js version supported by Next.js 16 (20.9 or newer).

```sh
npm ci
npm run dev
```

Open http://localhost:3000.

## Production checks

```sh
npm run lint
npm audit --omit=dev
npm run build
npm start
```

The PostCSS configuration lives at the project root and loads `@tailwindcss/postcss`. No environment variables are required.

## Features

- Responsive hero, feature cards, call to action, and footer.
- Revenue dashboard with three- and six-month reporting periods.
- Selectable chart bars with accessible labels and announced revenue updates.
- Mobile navigation that closes after selection, on Escape, or when focus leaves it.
- Skip-to-content link, visible keyboard focus, reduced-motion support, semantic landmarks, and improved text contrast.
- Product metadata and a custom SVG icon.
- Response headers for framing, MIME sniffing, referrers, and browser permissions.

## Project structure

- `src/app/page.js`: Server Component for the static landing-page content.
- `src/app/components/Navbar.js`: Client Component for the mobile menu.
- `src/app/components/dashboard.js`: Client Component for the reporting period and chart selection.
- `src/app/layout.js`: Page metadata and document structure.
- `src/app/globals.css`: Tailwind import and shared styles.
- `postcss.config.mjs`: Tailwind build integration.
- `next.config.mjs`: Response headers.

## JavaScript learning notes

Only interactive components need `"use client"`. Keeping the main page on the server avoids shipping its component code for hydration.

The dashboard uses `slice` to choose the reporting window, `reduce` to total revenue, and `find` with optional chaining and `??` to display a selected month or fall back to the latest month. State stores the user's choices; the displayed metrics are derived from the data each render.

`setIsOpen((open) => !open)` computes the next menu state from the previous one. A ref lets the Escape handler return keyboard focus to the menu button.

## Validation

Reviewed on October 20, 2026: production build and lint pass; the production dependency audit reports zero known vulnerabilities. Browser checks cover 320, 390, 768, 1024, and 1440-pixel viewports, reporting-period changes, chart selection, menu dismissal, internal links, and response headers. These checks are not a full accessibility certification or penetration test.

## Deploy

Import this repository into Vercel as a **new NEXORA project**, select the Next.js preset, and use the repository root. Keep it separate from FirstWin. Vercel can use `npm run build` with no custom environment variables.
