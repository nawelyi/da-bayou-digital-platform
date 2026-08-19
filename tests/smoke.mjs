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

assert.match(html, /data-club-form/, 'Customer Club form is missing');
assert.match(html, /aria-selected="true"/, 'Accessible menu tab state is missing');
assert.match(html, /Demo only — no information is transmitted or stored/, 'Demo privacy notice is missing');

const localReferences = [...html.matchAll(/(?:src|href)="(?!https?:|#|mailto:|tel:)([^"?]+)"/g)].map((match) => match[1]);
for (const reference of localReferences) {
  assert.ok(existsSync(join(root, reference)), `Broken local reference: ${reference}`);
}

console.log(`Smoke checks passed: ${requiredSections.length} sections and ${localReferences.length} local references verified.`);

