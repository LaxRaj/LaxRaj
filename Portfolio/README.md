# Brutalist Portfolio

A fast, reliable, beautifully-brutal portfolio starter. Built with **Astro 5** +
**Tailwind CSS v4**. Ships near-zero JavaScript, loads instantly, and is built to
grow on top of.

## Quick start

```bash
npm install
npm run dev      # http://localhost:4321
```

Other commands:

```bash
npm run build    # production build → ./dist
npm run preview  # preview the production build locally
```

## Make it yours (edit these first)

Almost everything is data-driven — you rarely need to touch markup.

| File | What it controls |
| --- | --- |
| `src/data/site.ts` | Name, role, tagline, status, nav links, socials, disciplines, "what I do" cards |
| `src/data/projects.ts` | The SELECTED WORK grid — add/remove project entries |
| `src/styles/global.css` | The whole design system: colors, fonts, brutalist shadows |

### Change the look

All design tokens live in the `@theme` block at the top of
`src/styles/global.css`:

```css
--color-paper: #ece9e1;   /* background */
--color-ink:   #0b0b0b;   /* text + borders */
--color-acid:  #e5ff00;   /* primary accent — change this for a new vibe */
--color-signal:#ff3d00;   /* secondary accent */
```

Swap `--color-acid` and the whole site re-skins. The signature hard, offset
shadows are the `shadow-brutal*` utilities (also defined in that file), and
`press` gives the click-into-shadow hover effect.

## Structure

```
src/
├── data/           # ← edit these: site.ts, projects.ts
├── styles/
│   └── global.css  # design tokens + brutalist utilities
├── layouts/
│   └── Base.astro  # <html> shell, fonts, meta/OG tags
├── components/     # Nav, Marquee, ProjectCard, Footer
└── pages/
    └── index.astro # the homepage (hero → work → about → contact)
```

Add a new page by dropping a `.astro` file in `src/pages/` (e.g.
`src/pages/about.astro` → `/about`). Wrap it in `<Base>` and reuse the
components.

## Add interactivity later

Astro ships zero JS by default. When you need a dynamic island, add a framework:

```bash
npx astro add react      # or svelte, vue, solid
```

Then use `<MyComponent client:load />` only where you need it.

## Deploy

The build output in `./dist` is static — host it anywhere:

- **Vercel / Netlify / Cloudflare Pages**: connect the repo, framework auto-detected.
- Set `site` in `astro.config.mjs` to your real domain (used for SEO/OG).

---

Stack: Astro · Tailwind v4 · TypeScript. Fonts: Space Grotesk + JetBrains Mono.
