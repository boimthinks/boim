# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is an Astro-based blog website that fetches content from Google Apps Script and displays blog posts with featured images from Google Drive. The site uses a static site generation approach where content is fetched at build time and rendered dynamically.

## Common Development Commands

### Development Server
```bash
npm run dev
```
Starts the development server with hot reloading.

### Build for Production
```bash
npm run build
```
Builds the static site for production deployment.

### Preview Production Build
```bash
npm run preview
```
Previews the production build locally.

## Codebase Structure

### Key Directories
- `src/pages/` - Page routes that automatically generate URLs
- `src/components/` - Reusable UI components
- `src/layouts/` - Layout templates
- `src/lib/` - Utility functions and API integrations

### Key Files
- `src/lib/api.ts` - Google Apps Script API integration for fetching blog posts
- `src/lib/utils.js` - Utility functions including Google Drive URL formatting
- `src/pages/blog/[slug].astro` - Dynamic blog post pages with slug-based routing
- `src/components/BlogCard.astro` - Blog post card component with image handling

## Architecture

### Data Flow
1. Blog posts are fetched from a Google Apps Script endpoint
2. Content is processed to handle frontmatter formatting issues
3. Google Drive URLs are converted to direct image URLs for display
4. Blog posts are rendered with dynamic routing based on slugs

### Key Components
- **BlogCard.astro** - Displays blog post summaries with images
- **Layout.astro** - Base HTML layout with dark theme
- **API Integration** - Fetches content from Google Apps Script
- **Image Handling** - Converts Google Drive sharing URLs to direct image URLs

## Common Tasks

### Adding New Blog Posts
Blog posts are managed externally through Google Apps Script. New posts are automatically fetched when the site rebuilds.

### Modifying Blog Card Display
Edit `src/components/BlogCard.astro` to change how blog post summaries are displayed.

### Updating Layout
Modify `src/layouts/Layout.astro` to change the base HTML template and styling.

## Deployment
The site is designed to be deployed as a static site to any hosting platform. The build process generates static HTML files that can be served directly.