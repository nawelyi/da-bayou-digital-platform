import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const html = readFileSync(join(root, 'index.html'), 'utf8');
const css = readFileSync(join(root, 'styles.css'), 'utf8');
const robots = readFileSync(join(root, 'robots.txt'), 'utf8');
const sitemap = readFileSync(join(root, 'sitemap.xml'), 'utf8');

const canonicalHomepage = 'https://nawelyi.github.io/da-bayou-digital-platform/';
const instagramUrl = 'https://www.instagram.com/dabayousportsbargrill/';
const tiktokUrl = 'https://www.tiktok.com/@da.bayou.sports.b';
const facebookUrl = 'https://www.facebook.com/share/1KhxuNwdbM/?mibextid=wwXIfr';

const requiredSections = ['menu', 'specials', 'events', 'club', 'visit', 'review-notes'];
for (const id of requiredSections) {
  assert.match(html, new RegExp(`id=["']${id}["']`), `Missing #${id} section`);
}

assert.match(html, /https:\/\/da-bayou-customer-club\.subscribepage\.io\//, 'Customer Club signup URL is missing');
assert.match(html, /da-bayou-customer-club-qr\.svg/, 'Customer Club QR code is missing');
assert.match(html, /You can unsubscribe from Da Bayou emails at any time/, 'Customer Club unsubscribe notice is missing');
assert.match(html, /official-logo\.webp/, 'Official Da Bayou logo is missing');
assert.match(html, /17316 Airline Hwy/, 'Confirmed street address is missing');
assert.match(html, /Prairieville, LA 70769/, 'Confirmed city, state, and ZIP are missing');
assert.match(html, /<dialog[^>]+data-menu-lightbox/, 'Accessible menu lightbox is missing');

const title = html.match(/<title>([^<]+)<\/title>/i)?.[1];
assert.ok(title, 'Page title is missing');
assert.match(title, /Da Bayou Sports Bar &amp; Grill \| Prairieville, LA/, 'Page title does not identify the business and location');

const description = html.match(/<meta\s+name=["']description["'][^>]+content=["']([^"']+)["']/i)?.[1];
assert.ok(description, 'Meta description is missing');
assert.match(description, /Prairieville, Louisiana/, 'Meta description does not include the confirmed location');

const canonicalTags = [...html.matchAll(/<link\s+rel=["']canonical["'][^>]*>/gi)];
assert.equal(canonicalTags.length, 1, 'Exactly one canonical link is required');
assert.match(canonicalTags[0][0], new RegExp(`href=["']${canonicalHomepage}["']`), 'Canonical URL is incorrect');
assert.match(html, /<meta\s+name=["']robots["']\s+content=["']index, follow, max-image-preview:large["']/, 'Indexable robots metadata is missing');
assert.doesNotMatch(html, /\b(?:noindex|nofollow)\b/i, 'The homepage must not block search engines');

assert.match(html, /<link\s+rel=["']icon["'][^>]+href=["']assets\/images\/official-logo\.webp["']/, 'Official logo favicon is missing');
assert.match(html, /property=["']og:image["'][^>]+https:\/\/nawelyi\.github\.io\/da-bayou-digital-platform\/assets\/images\/da-bayou-hero\.jpg/, 'Absolute Open Graph image is missing');
assert.match(html, /name=["']twitter:card["']\s+content=["']summary_large_image["']/, 'Twitter card metadata is missing');

const jsonLdBlocks = [...html.matchAll(/<script\s+type=["']application\/ld\+json["']>([\s\S]*?)<\/script>/gi)];
assert.ok(jsonLdBlocks.length > 0, 'Restaurant JSON-LD is missing');
const structuredData = JSON.parse(jsonLdBlocks[0][1]);
assert.equal(structuredData['@type'], 'Restaurant', 'Structured data must describe a Restaurant');
assert.equal(structuredData.name, 'Da Bayou Sports Bar & Grill', 'Structured data business name is incorrect');
assert.equal(structuredData.url, canonicalHomepage, 'Structured data URL is incorrect');
assert.deepEqual(structuredData.address, {
  '@type': 'PostalAddress',
  streetAddress: '17316 Airline Hwy',
  addressLocality: 'Prairieville',
  addressRegion: 'LA',
  postalCode: '70769',
  addressCountry: 'US',
}, 'Structured data address is incorrect');
assert.ok(structuredData.sameAs.includes(instagramUrl), 'Instagram is missing from Restaurant sameAs');
assert.ok(structuredData.sameAs.includes(tiktokUrl), 'TikTok is missing from Restaurant sameAs');
assert.ok(!structuredData.sameAs.includes(facebookUrl), 'Facebook share URL must not be used as a canonical sameAs identity');
for (const unconfirmedField of ['telephone', 'openingHours', 'openingHoursSpecification', 'geo', 'priceRange', 'aggregateRating', 'review']) {
  assert.ok(!(unconfirmedField in structuredData), `Unconfirmed structured data field must not be present: ${unconfirmedField}`);
}

for (const [network, url] of [['Instagram', instagramUrl], ['TikTok', tiktokUrl], ['Facebook', facebookUrl]]) {
  const escapedUrl = url.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  assert.match(
    html,
    new RegExp(`href=["']${escapedUrl}["'][\\s\\S]{0,180}?target=["']_blank["'][\\s\\S]{0,100}?rel=["']noopener noreferrer["'][\\s\\S]{0,220}?aria-label=["'][^"']*${network}`, 'i'),
    `${network} visible link is missing or unsafe`,
  );
}

const menuImages = [
  'menu-appetizers.webp',
  'menu-sandwiches.webp',
  'menu-platters.webp',
];
for (const menuImage of menuImages) {
  assert.match(html, new RegExp(menuImage), `Missing official menu image: ${menuImage}`);
}

assert.doesNotMatch(html, /This sample menu/, 'Sample menu copy should not remain');
assert.match(css, /\.menu-card-trigger img \{[^}]*height: auto;[^}]*object-fit: contain;/, 'Menu boards must display without cropping');

const localReferences = [...html.matchAll(/(?:src|href)="(?!https?:|#|mailto:|tel:)([^"?]+)"/g)].map((match) => match[1]);
const cssReferences = [...css.matchAll(/url\(["']?(?!data:|https?:)([^)"']+)["']?\)/g)].map((match) => match[1]);
for (const reference of [...localReferences, ...cssReferences]) {
  assert.ok(existsSync(join(root, reference)), `Broken local reference: ${reference}`);
}

assert.ok(existsSync(join(root, 'robots.txt')), 'robots.txt is missing');
assert.match(robots, /User-agent:\s*\*/, 'robots.txt must address all crawlers');
assert.match(robots, /Allow:\s*\//, 'robots.txt must allow normal crawling');
assert.doesNotMatch(robots, /Disallow:/i, 'robots.txt must not block site resources');
assert.match(robots, new RegExp(`Sitemap:\\s*${canonicalHomepage}sitemap\\.xml`), 'robots.txt sitemap URL is incorrect');

assert.ok(existsSync(join(root, 'sitemap.xml')), 'sitemap.xml is missing');
assert.match(sitemap, /<urlset\s+xmlns="http:\/\/www\.sitemaps\.org\/schemas\/sitemap\/0\.9">/, 'sitemap.xml root is invalid');
const sitemapLocations = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) => match[1]);
assert.deepEqual(sitemapLocations, [canonicalHomepage], 'Sitemap must contain only the canonical homepage');
assert.ok(sitemapLocations.every((location) => !location.includes('#')), 'Sitemap must not contain hash-fragment URLs');

console.log(`Smoke checks passed: ${requiredSections.length} sections, ${menuImages.length} menu boards, SEO metadata, social links, structured data, crawl files, and ${localReferences.length + cssReferences.length} local references verified.`);
