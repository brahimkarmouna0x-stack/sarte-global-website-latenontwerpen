# Sarte Global — Website Laten Ontwerpen

**Next.js 16** — A modern, high-performance corporate website for Sarte Global, a digital agency specializing in affordable web development, e-commerce solutions, and SEO optimization.

Built with React 19, Tailwind CSS 4, and TypeScript 5, this project delivers exceptional Core Web Vitals, seamless animations, and a fully responsive mobile-first experience across 30+ service and content pages.

---

## Tech Stack

| Category       | Technology                              |
| -------------- | --------------------------------------- |
| **Framework**  | Next.js 16 (React 19)                  |
| **Styling**    | Tailwind CSS 4 + PostCSS               |
| **Animation**  | Framer Motion 11                       |
| **Icons**      | React Icons (iconset)                  |
| **Language**   | TypeScript 5 (strict mode)            |
| **Linting**    | ESLint 9 + Next.js config             |
| **Content**    | MDX via next-mdx-remote               |
| **Database**   | Supabase (client-side)                |

## Key Features

- **30+ pages** — Services, locations, journal, team, cases, legal, and more
- **App Router** — Next.js App Router with nested layouts, error boundaries, and streaming
- **Internationalization-ready** — Dynamic `[locatie]` routes for location-based pages
- **Static Site Generation** — SSG with ISR (1-hour revalidation) for optimal performance
- **Interactive UI** — Framer Motion scroll-triggered animations, counters, carousels, and 3D-like team scenes
- **Optimized assets** — AVIF/WebP image formats with responsive `next/image` components
- **SEO-first** — Structured data, sitemap, robots.txt, semantic HTML, and meta descriptions
- **Cookie consent** — GDPR-compliant cookie bar
- **Contact & newsletter** — Integrated contact dialog and newsletter signup forms
- **Strict TypeScript** — Full type safety with `noUncheckedIndexedAccess`

## Getting Started

```bash
# Install dependencies
npm install

# Start development server (Turbopack)
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Type check
npm run typecheck

# Lint
npm run lint
```

## Project Structure

```
app/                  # App Router — pages, layouts, API routes
├── [locatie]/        # Location-based dynamic pages
├── api/              # API route handlers
├── services/         # Service pages with dynamic [slug]
├── journal/          # Blog/journal articles
├── team/             # Team member profiles
└── ...

components/           # Reusable UI components
├── sections/         # Page sections (Hero, Services, Process, etc.)
├── ui/               # Primitive UI elements
├── layouts/          # Navigation, Footer
├── pricing/          # Pricing cards, comparison, FAQ
├── services/         # Service page sections
├── projects/         # Case study components
├── landing/          # Landing page sections
├── legal/            # Legal page components
├── journal/          # Article dialog
└── contact/          # WhatsApp button, forms

constants/            # Data constants (services, testimonials, etc.)
contexts/             # React contexts (ContactDialog, ArticleDialog)
data/                 # Static data files
hooks/                # Custom React hooks
lib/                  # Utility libraries and helpers
public/               # Static assets (images, favicons, etc.)
types/                # TypeScript type definitions
scripts/              # Build and utility scripts
```

## Performance Optimizations

- **Inline Critical CSS** — Tailwind CSS inlined in `<head>` via `inlineCss` experiment, eliminating render-blocking stylesheet requests
- **Optimized Package Imports** — Barrel imports rewritten to deep imports for `react-icons` and `framer-motion`, reducing bundle size
- **Image Optimization** — AVIF/WebP formats with explicit quality presets and aggressive caching
- **Compression** — Brotli/gzip compression enabled
- **No Source Maps in Production** — Disabled for production builds

## License

Private — All rights reserved. © Sarte Global
