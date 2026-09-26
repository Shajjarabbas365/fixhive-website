# FixHive

An independent troubleshooting-guide website (Next.js 14, App Router, TypeScript, Tailwind).

## Why "FixHive"

Short, easy to pronounce and spell, not tied to any single app or platform, and
it reads clearly as a *hub* of fixes — appropriate for a large, growing
troubleshooting resource. It avoids any third-party trademark. (Domain
availability has not been checked — verify before registering.)

## 1. Project structure

```
app/
  page.tsx                     Homepage
  [category]/page.tsx          Problem-type hubs (/login-problems) and device hubs (/android)
  apps/page.tsx                All services index
  apps/[service]/page.tsx      Service hub (e.g. /apps/whatsapp)
  apps/[service]/[slug]/page.tsx  Article page (e.g. /apps/whatsapp/verification-code-not-received)
  search/page.tsx              Search results (reads ?q=)
  about, contact, privacy-policy, terms, cookie-policy, disclaimer/
  sitemap.ts, robots.ts        Dynamic sitemap.xml / robots.txt
  not-found.tsx                Custom 404
  api/contact/route.ts         Placeholder form handler
components/                    Header, Footer, SearchBox, Breadcrumbs, ArticleTemplate, AdSlot
lib/
  types.ts                     Article/Category/Platform data model
  articles.ts                  Article content + query helpers (swap for a CMS later without touching pages)
  taxonomy.ts                  Categories and platforms reference data
  site.ts                      Site-wide constants
```

Content flows: **Broad category → Service → Specific problem**, matching the
architecture in the brief (e.g. Payment Problems → Google Pay → Payment Failed).

## 2. Technology stack

- **Next.js 14 (App Router)** — static generation for every article/category/service
  page via `generateStaticParams`, so pages are pre-rendered and fast.
- **TypeScript** — the article schema in `lib/types.ts` is enforced at compile time.
- **Tailwind CSS** — small custom design system (see `tailwind.config.ts`): navy/slate/amber
  palette, IBM Plex Sans/Mono, no default "AI template" look.
- No database, no auth, no CMS in this first version — intentionally, per the brief's
  "don't overengineer" instruction. `lib/articles.ts` is the swappable data layer.

## 3. Run locally

```bash
npm install
npm run dev
```

Visit http://localhost:3000

## 4. Build for production

```bash
npm run build
npm start
```

The build was verified to complete successfully and statically generate every
route (33 pages) in this environment, aside from Google Fonts, which require
outbound internet access to fonts.googleapis.com at build time — available on
any normal host or CI runner (Vercel, Netlify, etc.), just not this sandbox.

## 5. Deploy

Any Next.js host works (Vercel is the simplest: connect the repo, no config
needed). For a custom server: `npm run build && npm start` behind a reverse
proxy with HTTPS.

## 6. Environment variables

Copy `.env.example` to `.env.local` and fill in real values:

- `NEXT_PUBLIC_GSC_VERIFICATION` — Search Console verification
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` — GA4 measurement ID
- `NEXT_PUBLIC_ADSENSE_CLIENT_ID` — AdSense publisher ID
- `CONTACT_EMAIL_API_KEY` — key for whichever transactional email provider you connect to `/api/contact`

None of these are invented — they're empty placeholders you fill in once you
have real accounts.

## 7. SEO implementation summary

- Unique `<title>` and meta description per page (`generateMetadata` on every dynamic route)
- Canonical URL on every page
- One `<h1>` per page, logical H2/H3 hierarchy in `ArticleTemplate`
- Open Graph + Twitter card metadata set globally in `app/layout.tsx`, overridden per article
- Breadcrumbs (visual + `BreadcrumbList` schema) on every non-homepage page
- Descriptive, lowercase, parameter-free URLs (`/apps/whatsapp/verification-code-not-received`)
- Internal linking: category ↔ service ↔ article ↔ related articles

## 8. Sitemap & robots

- `app/sitemap.ts` generates `/sitemap.xml` dynamically from published articles,
  services, categories and platforms — add an article to `lib/articles.ts` and it
  appears automatically.
- `app/robots.ts` generates `/robots.txt`, allowing crawling of all content while
  disallowing `/api/` and the `/search` results page (a `noindex` thin-content page).

## 9. Structured data (schema.org)

- `WebSite` + `SearchAction` on the homepage
- `BreadcrumbList` on every page via the `Breadcrumbs` component
- `Article` on every guide (headline, dateModified, author, publisher)
- `FAQPage` only on guides that have a real FAQ section matching visible content

No ratings, reviews, or schema not reflected in visible page content.

## 10. AdSense placement strategy

`components/AdSlot.tsx` renders a clearly labeled, dashed-border placeholder —
not a real ad unit. Placements used in `ArticleTemplate`: one slot after the
"Possible Reasons" section, before the step-by-step fixes. This keeps ads:

- Visually separate from navigation and buttons
- Below the fold on first load (content-first)
- Never adjacent to a clickable element in a way that invites accidental clicks

Swap the placeholder `<div>` for real AdSense `<ins>` code once approved.

## 11. Google Search Console setup

1. Deploy the site to its final domain.
2. In Search Console, add the property (domain or URL-prefix).
3. Verify via the HTML tag method: add `NEXT_PUBLIC_GSC_VERIFICATION` and wire it
   into a `<meta name="google-site-verification">` tag in `app/layout.tsx`, or
   use the DNS verification method instead.
4. Submit `https://yourdomain.com/sitemap.xml` under Sitemaps.

## 12. Analytics setup

1. Create a GA4 property, get the measurement ID.
2. Set `NEXT_PUBLIC_GA_MEASUREMENT_ID` in `.env.local`.
3. Add the GA4 script snippet to `app/layout.tsx` (not included by default, to
   avoid loading analytics before you've actually configured a real ID).

## 13. Content publishing workflow

1. Duplicate an existing entry in `lib/articles.ts` as a template.
2. Fill in every field — the `Article` TypeScript type in `lib/types.ts` will
   flag anything missing at build time.
3. Use real, verifiable causes and steps; do not guess at company-side outages —
   use `companySideNote` only when you can point to an official status/support page.
4. Set `lastUpdated` to the actual date you verified the content.
5. Run `npm run build` locally to confirm the new page generates with no errors.

## 14. Adding a new troubleshooting article — checklist

- [ ] Real search intent identified (not just a keyword variation of an existing page)
- [ ] Unique `id`, `slug`, `serviceSlug`
- [ ] Quick answer written in 1–3 sentences
- [ ] Causes and steps are specific and actionable, not generic filler
- [ ] FAQ only included if there are genuine, distinct follow-up questions
- [ ] `relatedArticleIds` point to genuinely related guides
- [ ] Sources/official links are real, working URLs
- [ ] `lastUpdated` set to today's date

## 15. Recommended next steps for organic growth

- Expand one category at a time (e.g. finish "Verification Problems" for the
  top 10 most-searched apps) rather than spreading thin across every category.
- Track which article titles/queries actually bring in Search Console
  impressions before writing more on the same topic.
- Add a lightweight editorial review pass (second person checks each guide)
  before publishing, per the E-E-A-T commitments in `/about`.
- Once there are enough articles, connect a real search backend (e.g.
  Algolia or Postgres full-text search) behind the existing `searchArticles()`
  function signature in `lib/articles.ts` — no page code needs to change.
- Apply for AdSense only once there's a meaningful body of original content
  (a handful of articles is not enough for approval).
