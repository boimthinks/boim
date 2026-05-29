# AGENTS.md

## Project Overview
- Astro-based static site with Tailwind CSS
- Blog content sourced from local markdown files in src/content/blog/
- Date format is "DD/MM/YYYY HH:MM:SS" (Indonesian format)

## Key Dependencies
- astro v6+
- gray-matter for parsing frontmatter
- tailwindcss v4
- marked for markdown rendering
- sharp for image optimization (WebP 800px)

## Essential Commands
```bash
npm install     # Install dependencies
npm run dev     # Start development server (localhost:4321)
npm run build   # Build production site to ./dist/
npm run preview # Preview built site locally
```

## Important Conventions
- Blog dates use Indonesian format (DD/MM/YYYY) which requires special parsing
- Date sorting must use custom parser: split date/time parts and reformat as YYYY-MM-DDTHH:MM:SS
- All blog-related pages sort posts with newest first (descending order)
- Frontmatter fields: title_short, description, published_at, slug, feature_image

## File Structure
- src/pages/index.astro - Main page with recent posts
- src/pages/blog/index.astro - Blog archive page
- src/components/BlogCard.astro - Individual blog post card component
- src/content/blog/ - Directory containing blog post markdown files
- src/content/img/ - Directory containing original JPG/PNG images
- src/lib/api.ts - Reads blog posts from local markdown files
- scripts/optimize-images.mjs - Converts JPG/PNG to WebP 800px
- public/img/ - Auto-generated WebP images (output of optimize-images)

## Important Gotchas
- JavaScript's Date constructor doesn't parse DD/MM/YYYY format correctly
- Always use custom date parser for blog post dates
- Blog images are local WebP files in public/img/, auto-generated from src/content/img/ JPG/PNG

## Image Optimization Flow
1. Place JPG/PNG in `src/content/img/`
2. Run `npm run images` or `npm run build` — `scripts/optimize-images.mjs` converts to WebP 800px
3. Output goes to `public/img/` (served at `/img/filename.webp`)
4. Reference in frontmatter as `feature_image: "/img/filename.webp"`

## Common Tasks
1. Adding new blog posts - Use `[LOAD_SKILL: boim-penulis]` then minta agent menulis artikel
2. Adding new image - Place JPG/PNG in src/content/img/, run `npm run images`, reference /img/name.webp
3. Modifying blog layout - Edit BlogCard.astro component
4. Changing date display format - Modify date parsing in BlogCard.astro
5. Adjusting post sorting - Modify sort function in index.astro files