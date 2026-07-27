import assert from 'node:assert/strict';
import { access, readFile } from 'node:fs/promises';

const [html, robots, sitemap] = await Promise.all([
  readFile('dist/index.html', 'utf8'),
  readFile('dist/robots.txt', 'utf8'),
  readFile('dist/sitemap.xml', 'utf8'),
]);

for (const marker of [
  '<html lang="en"',
  'id="language-toggle"',
  'data-km=',
  'application/ld+json',
  'https://cheailong.dev',
]) {
  assert.ok(html.includes(marker), `Missing ${marker}`);
}

// Rendered copy, not just structure: a typo'd frontmatter reference still emits the
// element with its data-* attributes intact, so marker checks alone pass while the
// page ships blank text.
for (const text of ['Chea Ilong', 'View Projects', 'LeakScope', 'Get in touch']) {
  assert.ok(html.includes(`>${text}<`), `Missing rendered text: ${text}`);
}

const emptyTranslated = html.match(/data-en="[^"]+"[^>]*>\s*</g);
assert.equal(
  emptyTranslated,
  null,
  `Translated elements rendered empty: ${emptyTranslated?.join(', ')}`,
);

// Every translatable node needs both languages, or the toggle silently skips it.
const enCount = (html.match(/ data-en="/g) ?? []).length;
const kmCount = (html.match(/ data-km="/g) ?? []).length;
assert.equal(enCount, kmCount, `data-en (${enCount}) and data-km (${kmCount}) counts differ`);

// Images must go through astro:assets — a plain <img> ships the full-size original.
assert.ok(html.includes('srcset='), 'No srcset in the build — images are not being optimized');
assert.ok(
  !/<img[^>]+src="https?:\/\//.test(html),
  'Remote image hotlink in the build — copy the asset into the repo instead',
);

// Font is preloaded rather than discovered only after the CSS parses.
assert.match(html, /<link rel="preload" href="[^"]+\.woff2" as="font"/);

// Text hierarchy comes from four named tones. Ad-hoc `text-foreground/NN` opacities
// are what made it drift to nine near-identical greys that render differently on the
// tinted section bands.
const adHocTones = html.match(/text-foreground\/\d+/g);
assert.equal(
  adHocTones,
  null,
  `Use text-strong / text-body / text-muted-foreground instead of: ${[...new Set(adHocTones ?? [])].join(', ')}`,
);

// Reveal must stay JS-armed: if the hidden state were baked into the markup, a
// visitor with scripting off would get a blank page.
assert.ok(html.includes('dataset.reveal'), 'Reveal arming script missing');
assert.ok(!/<html[^>]+data-reveal/.test(html), 'Reveal must not be armed in static HTML');

assert.ok(!html.includes('/_next/'), 'Next.js assets remain in the Astro build');
assert.match(robots, /Sitemap: https:\/\/cheailong\.dev\/sitemap\.xml/);
assert.match(sitemap, /<loc>https:\/\/cheailong\.dev\/<\/loc>/);

// Clients that ignore <link rel=icon> and fetch the well-known path directly.
await access('dist/favicon.ico');

console.log('Astro build check passed');
