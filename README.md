# STREAM AUTH

A static, production-ready Astro website for a developer-focused software authentication and license management platform.

## Requirements

- Node.js 20.3 or newer
- npm 9 or newer

## Local development

```bash
npm install
npm run dev
```

The development server starts at `http://localhost:4321`.

## Quality checks and production build

```bash
npm run check
npm run build
npm run preview
```

The static production site is written to `dist/`.

## Deployment

### Vercel

Import the repository in Vercel. It detects Astro automatically. Use `npm run build` as the build command and `dist` as the output directory.

### Netlify

Create a new site from the repository. Use `npm run build` as the build command and `dist` as the publish directory.

## SEO

Set the canonical production domain in `astro.config.mjs` before deploying if you use a domain other than `https://streamauth.dev`. Astro generates the sitemap at build time. `public/robots.txt` links to it, and the blog RSS feed is available at `/rss.xml`.

## Project structure

```text
src/
  components/  Reusable interface and SEO components
  data/        Typed blog content
  layouts/     Shared document layout
  pages/       Static routes and dynamic blog articles
  styles/      Lightweight responsive styles
```

The project intentionally avoids client-heavy frameworks and animation packages. Interactions are native HTML/CSS plus a small clipboard helper in documentation code blocks.
