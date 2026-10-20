# Google Search Console — Steps After Deployment

The production domain is `https://dabayousportsbarandgrill.com/`. Technical SEO preparation is already in the repository, but verification and index requests require authorized access to Google Search Console.

1. Add a **Domain property** for `dabayousportsbarandgrill.com` in Google Search Console (without `https://`).
2. Verify ownership by adding the **TXT DNS record** provided by Google in Porkbun. Do not invent or add any verification token until Google supplies it.
3. Once the final website is live and accessible over HTTPS, submit `https://dabayousportsbarandgrill.com/sitemap.xml`.
4. Use **URL Inspection** for `https://dabayousportsbarandgrill.com/` and request indexing for the public homepage.
5. Review indexing status, search performance, and any reported issues over the following days.

If a URL-prefix property is used instead of a Domain property, Google's verification meta tag can be added to `index.html` (an HTML comment marks the location). A Domain property verified with a TXT record is preferable because it covers both `www` and non-`www` variations.

Before submitting the sitemap for final indexing, remove internal `Client preview` or `For client review` content and publish the approved `Opening Soon` version without those internal notes.
