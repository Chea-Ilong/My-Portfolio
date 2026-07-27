# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Personal portfolio for Chea Ilong at https://cheailong.dev — a single static page built with Astro 7 + Tailwind CSS v4. There is no backend, no CMS, no test framework, and no linter. It was migrated from Next.js (commit `b9950d0`); `scripts/check.mjs` still asserts that no `/_next/` assets leak into the build.

## Commands

```bash
npm run dev      # astro dev server
npm run build    # static build into dist/
npm run check    # astro check (types), build, then assert on the built HTML
npm run preview  # serve dist/
```

`npm run check` is the only verification gate — run it after any change to `index.astro`, `BaseLayout.astro`, `global.css`, `robots.txt`, or `sitemap.xml`. It runs three stages:

1. `astro check` — the only thing that type-checks `.astro` frontmatter. `astro build` strips types without checking them, so skipping this lets a typo'd `copy.en.*` reference ship as a silently empty element.
2. `astro build`.
3. `scripts/check.mjs` — assertions against `dist/`. Beyond structural markers it checks *rendered* text (a blank element passes every marker check), that `data-en`/`data-km` counts match, that images carry a `srcset` (i.e. actually went through `astro:assets`), that no `<img>` hotlinks a remote host, that the font is preloaded, and that `favicon.ico` exists.

Adding an assertion there is how you make an invariant enforceable — it is the only regression net this repo has.

## Architecture

Everything renders from **`src/pages/index.astro`** (~700 lines). The frontmatter holds all site content as typed const arrays — `navItems`, `experiences`, `projects`, `skills`, and a `copy` object of UI strings. Content edits are data edits in that frontmatter, not template edits. Section markup is inlined in the same file; the only extracted component is `BrandIcon.astro` (GitHub/LinkedIn SVGs, since `@lucide/astro` has no brand icons). Everything else uses `@lucide/astro` imports.

`src/layouts/BaseLayout.astro` owns `<head>` in full: meta tags, Open Graph, Twitter cards, favicons, and two JSON-LD schema objects (`Person` + `WebSite`) built from a local `siteUrl` const. SEO is a primary concern of this repo — the `Person` schema carries name variants, `knowsAbout`, and `sameAs` links, and the site URL is hardcoded in three places (`astro.config.mjs`, `BaseLayout.astro`, `public/robots.txt` + `public/sitemap.xml`) that must stay in sync.

### Bilingual (EN/KM) toggle — the main constraint

There are no i18n routes. The page renders **English text into the DOM**, and the inline `<script>` at the bottom of `index.astro` swaps it client-side:

- Every translatable element carries `data-en` and `data-km` attributes, with the English value also as its inner text.
- Toggling calls `element.textContent = element.dataset[language]` on every `[data-en][data-km]` node, and sets `aria-label` from `[data-aria-en][data-aria-km]` nodes.
- `document.documentElement.lang` is the source of truth for current language; there is no persistence across reloads.

Consequences when editing markup:

- **An element with `data-en`/`data-km` must contain only text.** `textContent` assignment destroys child elements, so wrap icons/spans in a sibling, not inside the translated node (see the "View Projects" button, where the label span and the `ArrowRight` icon are siblings).
- Any new content object needs a parallel `*Km` field (`descriptionKm`, `periodKm`, `highlightsKm`, …) — the pattern is per-field suffixing, not a nested locale map, except for `navItems` and `copy` which are keyed `{ en, km }`.
- Khmer text is taller than Latin, and its subscripts (្ញ, ុំ) hang well below the baseline. `global.css` compensates with `html[lang='km']` overrides for the hero size/leading and the nav underline offset; Latin-only tracking is likewise scoped to `html[lang='en']` so Khmer keeps its natural spacing. Check both languages after any type change.
- **`html[lang='km']` rules that fight a utility must stay outside `@layer`** — the elements they target carry their own `text-*`/`leading-*` utilities, and Tailwind emits those in `@layer utilities`, which beats `@layer base` regardless of selector specificity. Only an unlayered rule wins. Putting one inside `@layer base` produces CSS that looks right and does nothing (this was a real bug, fixed in the current file).

### Styling

Tailwind v4 is wired through the Vite plugin in `astro.config.mjs` — there is no `tailwind.config.js`. The design system lives entirely in `src/styles/global.css`: oklch CSS variables under `:root`, mapped to Tailwind color utilities via `@theme inline`. Use semantic classes (`bg-background`, `text-foreground`, `border-border`, `bg-card`, `text-muted-foreground`) rather than raw colors.

The token set is deliberately small. The shadcn-era tokens (`popover`, `primary`, `secondary`, `accent`, `destructive`, `chart-*`, `sidebar-*`), the `.dark` block, and the `@layer components` classes were removed once their `components/ui/*` consumers were deleted. **There is no dark mode** — only the `theme-color` meta tags respond to the OS setting. Adding one means reintroducing a `.dark` block *and* something that applies the class.

### Text hierarchy

Four named tones carry the whole hierarchy — use them and nothing else:

| token | role |
| --- | --- |
| `text-foreground` | headings, names, the one thing a section is about |
| `text-strong` | emphasis inside a block (roles, taglines, icons) |
| `text-body` | running prose |
| `text-muted-foreground` | eyebrows, dates, tags, inactive nav |

They are **solid colors, not opacities**. `text-foreground/65` renders differently on a white card than on a `bg-muted/20` band, and the page had drifted to nine near-identical greys doing four jobs. `scripts/check.mjs` fails the build if any `text-foreground/NN` reappears.

### Motion

One easing for everything: `--motion-ease` in `:root`, exposed to utilities as `ease-soft`. Every transition should carry `ease-soft` and a `duration-*`.

Scroll reveal is opt-in per element via `data-reveal-item`, staggered with an inline `--reveal-delay`. The contract that makes it safe:

- The hidden state applies **only** under `html[data-reveal]`, and only JS sets that attribute (inline script in `BaseLayout.astro`, so it lands before first paint). Scripting off → nothing is ever hidden. Never bake `data-reveal` into the markup; `check.mjs` rejects that.
- It is wrapped in `prefers-reduced-motion: no-preference`, so reduced-motion users get the page fully visible with no observer work.
- `IntersectionObserver` adds `.is-revealed` and unobserves. If the API is missing, the script removes `data-reveal` and everything shows.

`global.css` also defines a `Geist Fallback` `@font-face` with `size-adjust`/`ascent-override`/`descent-override` computed from Geist's real metrics against Arial's. It keeps the pre-swap paint the same size as the webfont, so nothing reflows when Geist loads. Don't drop it from the `--font-sans` stack.

## Assets

Photos live in `src/assets/images/` and render through `<Image>` from `astro:assets` — never a plain `<img>` with a `public/` path, which ships the multi-MB original (the sources are 140 KB–1.1 MB each; the build emits ~11–30 KB webp). Pass `widths` + `sizes` so a `srcset` is generated; `sizes` alone does nothing. `scripts/check.mjs` fails the build if any `srcset` disappears.

The profile photo is intentionally duplicated into `public/images/profile/` because `og:image` and the JSON-LD `image` need a stable, unhashed URL that `astro:assets` cannot provide.

Skill icons are local SVGs in `public/icons/skills/`, referenced by the `icon` field of the `skills` array. They were previously hotlinked to devicon/vectorlogo.zone; `check.mjs` now rejects any remote `<img>` src.
