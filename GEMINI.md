# GEMINI.md - Project Context: boim-thinks

## Project Overview
`boim-thinks` is a personal blog website built with **Astro**. It is designed to be a fast, content-driven site utilizing **Tailwind CSS** for styling (specifically using the `@tailwindcss/vite` plugin and `@tailwindcss/typography`). The site fetches its content (Markdown files) dynamically from a **Google Apps Script** endpoint.

## Technology Stack
- **Framework:** Astro (SSG)
- **Styling:** Tailwind CSS (with `@tailwindcss/typography` for Markdown rendering)
- **Content:** Fetched from Google Sheets via Google Apps Script (GAS)
- **Formatting:** `gray-matter` for Frontmatter parsing, `marked` for Markdown-to-HTML conversion.
- **Font:** JetBrains Mono (via Google Fonts).

## Build & Development Commands
- `npm run dev` : Starts local dev server at `localhost:4321`.
- `npm run build` : Builds the production site.
- `npm run preview` : Previews production build locally.

## Project Structure
- `src/pages/` : Contains Astro pages (index, blog index, dynamic blog post pages `[slug].astro`).
- `src/components/` : Reusable components, specifically `BlogCard.astro`.
- `src/lib/` : Utility functions and API logic (`api.ts` for fetching, `utils.js` for URL handling).
- `src/styles/` : Global styles, including Tailwind configuration and typography overrides.

## Development Conventions
- **Markdown Handling:** All content is processed from raw strings using `gray-matter` (sanitized with a custom utility in `src/lib/api.ts`) and rendered with `marked`.
- **CSS:** Tailwind CSS is used globally. Specific Markdown styling is centralized in `src/styles/global.css` using the `.prose-custom` class.
- **API Fetching:** Always use `{ redirect: 'follow' }` when fetching data from the Google Apps Script endpoint.
- **Image Handling:** Use the `formatDriveUrl` utility function from `src/lib/utils.js` to process Google Drive direct/view links into a valid rendering format.
- **Date Formatting:** Dates are formatted to Indonesian locale (`d MMMM yyyy`) using `Intl.DateTimeFormat` within the `BlogCard` component.
