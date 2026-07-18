import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';

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

assert.ok(!html.includes('/_next/'), 'Next.js assets remain in the Astro build');
assert.match(robots, /Sitemap: https:\/\/cheailong\.dev\/sitemap\.xml/);
assert.match(sitemap, /<loc>https:\/\/cheailong\.dev\/<\/loc>/);

console.log('Astro build check passed');
