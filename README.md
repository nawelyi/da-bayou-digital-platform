# Da Bayou Sports Bar & Grill — Digital Platform

Official website for **Da Bayou Sports Bar & Grill**, located in Prairieville, Louisiana. The site is built with HTML, CSS, and JavaScript and is hosted on GitHub Pages under the restaurant's custom domain.

**Live website:** https://dabayousportsbarandgrill.com/

> **Opening Soon:** The website is publicly accessible, but the restaurant's opening date, operating hours, and some service details are still being confirmed.

## Website Features

- Mobile-friendly design with the restaurant's official branding and logo.
- A responsive gallery featuring three official food menu boards, with an accessible enlarged view.
- An Opening Soon announcement and a preview of Monday–Saturday lunch specials.
- Information about planned business lunch delivery and seasonal boiled crawfish offerings. These services are **not yet operating**.
- Sports, game-day, promotions, and events sections ready for future updates.
- Restaurant address and a link to Google Maps directions.
- Links to the restaurant's Facebook, Instagram, and TikTok accounts.
- A **Customer Club** registration link and scannable QR code.
- Customer Club signups managed through MailerLite, including an explicit consent field and an automated welcome email.
- Local search-engine optimization (SEO), including page titles and descriptions, canonical URLs, social sharing metadata, restaurant structured data, `robots.txt`, and `sitemap.xml`.

## Website and Customer Club Links

- **Restaurant website:** https://dabayousportsbarandgrill.com/
- **Customer Club signup:** https://da-bayou-customer-club.subscribepage.io/
- **Sitemap:** https://dabayousportsbarandgrill.com/sitemap.xml

## Technology and Deployment

This is a lightweight **static website**. It has no production framework or server-side application dependencies. Customer Club data is handled by the external MailerLite service; it is not stored in the GitHub Pages website.

GitHub Pages serves the site from the `main` branch and the repository root. Approved changes merged into `main` are deployed through GitHub Pages.

### Run Locally

Requires **Node.js 18 or later**. No dependency installation is required.

```bash
npm run dev
```

Open `http://127.0.0.1:4173` in your browser.

### Run Smoke Tests

```bash
npm test
```

These checks cover key site sections, menu assets, Customer Club links, social links, SEO metadata, structured data, and crawl configuration.

## Remaining Launch Items

The following items require confirmation, setup, or final review:

- Confirm the final food menu, prices, and any additional **drink menu** content.
- Confirm the opening date, operating days and hours, public phone number, and other contact details.
- Confirm whether the location should include **Suite G**.
- Approve final lunch specials, business delivery details, seasonal crawfish availability, and event or promotion schedules.
- Complete **Google Business Profile** verification and add the approved website and business details to the Google Maps listing.
- Verify the domain in **Google Search Console**, submit the sitemap, and monitor indexing. Publishing SEO metadata does not guarantee immediate search results.
- Remove internal **Client preview / For client review** notices from the public page before final handoff.
- Complete cross-device accessibility, performance, and customer signup/QR checks.

## Project Documentation

- `docs/PRODUCT_SCOPE.md` — Project scope and remaining content decisions.
- `docs/DECISIONS.md` — Design and technical decisions.
- `docs/TASKS.md` — Prioritized implementation and launch tasks.
- `docs/IMAGE_ASSETS.md` — Image assets and provenance.
- `docs/STATUS.md` — Implementation and deployment status.
- `docs/SEARCH_CONSOLE.md` — Google Search Console setup and indexing steps.

The original client agreement is excluded from the public repository via `.gitignore` and is used only as a private project reference.
