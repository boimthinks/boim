# AGENTS.md

## Project Overview
- Astro-based static site with Tailwind CSS
- Blog content sourced from Google Apps Script endpoint
- Date format from API is "DD/MM/YYYY HH:MM:SS" (Indonesian format)

## Key Dependencies
- astro v6+
- gray-matter for parsing frontmatter
- tailwindcss v4
- marked for markdown rendering

## Essential Commands
```bash
npm install     # Install dependencies
npm run dev     # Start development server (localhost:4321)
npm run build   # Build production site to ./dist/
npm run preview # Preview built site locally
```

## Important Conventions
- Blog dates from API use Indonesian format (DD/MM/YYYY) which requires special parsing
- Date sorting must use custom parser: split date/time parts and reformat as YYYY-MM-DDTHH:MM:SS
- All blog-related pages sort posts with newest first (descending order)
- Frontmatter fields: title_short, description, published_at, slug, feature_image

## File Structure
- src/pages/index.astro - Main page with recent posts
- src/pages/blog/index.astro - Blog archive page
- src/components/BlogCard.astro - Individual blog post card component
- src/lib/api.ts - Fetches blog posts from Google Apps Script endpoint

## Common Tasks
1. Adding new blog posts - Done via Google Sheets (external system)
2. Modifying blog layout - Edit BlogCard.astro component
3. Changing date display format - Modify date parsing in BlogCard.astro
4. Adjusting post sorting - Modify sort function in index.astro files

## Important Gotchas
- JavaScript's Date constructor doesn't parse DD/MM/YYYY format correctly
- Always use custom date parser for blog post dates
- Blog images are Google Drive URLs that need formatting with formatDriveUrl()