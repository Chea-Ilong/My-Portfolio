import assert from 'node:assert/strict';
import { access, readFile } from 'node:fs/promises';

const [html, projectsHtml, robots, sitemap] = await Promise.all([
  readFile('dist/index.html', 'utf8'),
  readFile('dist/projects/index.html', 'utf8'),
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
for (const text of ['Chea Ilong', 'View Projects', 'LeakScope', 'Get in touch', 'Internship Experience', 'Volunteer Experience', 'Back End Developer']) {
  assert.ok(html.includes(`>${text}<`), `Missing rendered text: ${text}`);
}

// Checks every page must pass: the toggle, translations, and image pipeline are
// shared, so a regression in a shared component shows up on all of them.
for (const [page, pageHtml] of [['/', html], ['/projects/', projectsHtml]]) {
  assert.ok(pageHtml.includes('id="language-toggle"'), `${page}: language toggle missing`);

  const emptyTranslated = pageHtml.match(/data-en="[^"]+"[^>]*>\s*</g);
  assert.equal(
    emptyTranslated,
    null,
    `${page}: translated elements rendered empty: ${emptyTranslated?.join(', ')}`,
  );

  // Every translatable node needs both languages, or the toggle silently skips it.
  const enCount = (pageHtml.match(/ data-en="/g) ?? []).length;
  const kmCount = (pageHtml.match(/ data-km="/g) ?? []).length;
  assert.equal(enCount, kmCount, `${page}: data-en (${enCount}) and data-km (${kmCount}) counts differ`);

  // Images must go through astro:assets — a plain <img> ships the full-size original.
  assert.ok(pageHtml.includes('srcset='), `${page}: no srcset — images are not being optimized`);
  assert.ok(
    !/<img[^>]+src="https?:\/\//.test(pageHtml),
    `${page}: remote image hotlink — copy the asset into the repo instead`,
  );

  assert.ok(!/<html[^>]+data-reveal/.test(pageHtml), `${page}: reveal must not be armed in static HTML`);
}

// The home page shows the first few projects and links to /projects/ for the rest;
// /projects/ lists every one. Room Rental is last in the list, so it marks the cut.
// "See more" jumps to the first project the home page left out.
assert.ok(html.includes('href="/projects/#cardify"'), 'Home "See more" should link to /projects/#cardify');
assert.ok(projectsHtml.includes('id="cardify"'), '/projects/ is missing the #cardify anchor');
// /projects/ collapses each project into a native <details>, so the full write-up is
// still in the HTML even while closed. Count them against the cards it should hold.
const accordionCount = (projectsHtml.match(/<details id="/g) ?? []).length;
assert.ok(accordionCount >= 9, `/projects/ should render every project as <details>, found ${accordionCount}`);
assert.ok(!html.includes('>Room Rental Management System<'), 'Home page should not list every project');
for (const text of ['Motify', 'CFCC Leaderboard', 'Room Rental Management System', 'All Projects']) {
  assert.ok(projectsHtml.includes(`>${text}<`), `/projects/ missing rendered text: ${text}`);
}
assert.ok(
  projectsHtml.includes('<link rel="canonical" href="https://cheailong.dev/projects/"'),
  '/projects/ canonical should point at itself, not the home page',
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
assert.match(sitemap, /<loc>https:\/\/cheailong\.dev\/projects\/<\/loc>/);

// Clients that ignore <link rel=icon> and fetch the well-known path directly.
await access('dist/favicon.ico');

console.log('Astro build check passed');
