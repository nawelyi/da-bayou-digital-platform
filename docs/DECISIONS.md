# Project Decisions — Initial Website

## D-001 — Static delivery without dependencies

**Status:** Accepted for the initial preview.

The first version uses HTML, CSS, and JavaScript without frameworks or external application services. This makes the design immediately reviewable, reduces setup risks, and keeps future hosting and CMS choices open.

## D-002 — Original visual direction

**Status:** Proposed for client approval.

Large-scale photography, warm colors, and an editorial layout were used as broad references for the restaurant industry. Da Bayou's identity is differentiated by deep purple, gold, cream, editorial serif typography, and a focus on food and Gameday atmosphere. No branding, content, or assets from parrains.com are copied.

## D-003 — Unconfirmed information is clearly marked as provisional

**Status:** Accepted for the initial preview.

Information not supplied or confirmed by the client is not presented as final. The site uses the official logo, menu, address, and social links, while business hours, phone number, events, and promotions remain marked as pending.

## D-004 — Customer Club connected to MailerLite

**Status:** Accepted for the initial preview.

The public signup page collects first name, email, and consent, adds subscribers to the MailerLite group, and triggers the automated welcome email.

## D-005 — Final QR code points to a stable URL

**Status:** Accepted for the initial preview.

The QR code points to the stable public Customer Club signup page to avoid having to reprint materials later.

## D-006 — Dependency-free technical SEO

**Status:** Implemented and merged into `main`.

Local SEO is implemented directly in the HTML and standard static files. No frameworks, analytics packages, or additional application dependencies were introduced. The page title, description, canonical URL, social metadata, favicon, JSON-LD, `robots.txt`, and `sitemap.xml` remain easy to audit and maintain.
