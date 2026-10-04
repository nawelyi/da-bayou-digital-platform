import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const html = readFileSync(join(root, 'index.html'), 'utf8');
const css = readFileSync(join(root, 'styles.css'), 'utf8');

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
for (const reference of localReferences) {
  assert.ok(existsSync(join(root, reference)), `Broken local reference: ${reference}`);
}

console.log(`Smoke checks passed: ${requiredSections.length} sections, ${menuImages.length} menu boards, and ${localReferences.length} local references verified.`);
