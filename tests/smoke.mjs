import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const html = readFileSync(join(root, 'index.html'), 'utf8');

const requiredSections = ['menu', 'specials', 'events', 'club', 'visit', 'review-notes'];
for (const id of requiredSections) {
  assert.match(html, new RegExp(`id=["']${id}["']`), `Missing #${id} section`);
}

assert.match(html, /https:\/\/da-bayou-customer-club\.subscribepage\.io\//, 'Customer Club signup URL is missing');
assert.match(html, /da-bayou-customer-club-qr\.svg/, 'Customer Club QR code is missing');

for (const asset of [
  'official-logo.webp',
  'menu-appetizers.webp',
  'menu-sandwiches.webp',
  'menu-platters.webp',
]) {
  assert.ok(html.includes(asset), `Missing client asset reference: ${asset}`);
}

assert.match(html, /17316 Airline Hwy/, 'Official Da Bayou location is missing');
assert.match(html, /You can unsubscribe from Da Bayou emails at any time/, 'Customer Club unsubscribe notice is missing');

const localReferences = [...html.matchAll(/(?:src|href)="(?!https?:|#|mailto:|tel:)([^"?]+)"/g)].map((match) => match[1]);
for (const reference of localReferences) {
  assert.ok(existsSync(join(root, reference)), `Broken local reference: ${reference}`);
}

console.log(`Smoke checks passed: ${requiredSections.length} sections and ${localReferences.length} local references verified.`);
