# SEO Audit & Implementation — PressFolio

Date: 2026-10-04
Scope: `NSKWeb/pressfolio` (Astro 4, `output: 'server'`, Vercel adapter)

## 0. Project Profile

| Item | Finding |
|---|---|
| Stack | Astro `^4.0.0`, TypeScript, plain CSS |
| Rendering | Server-rendered (SSR) via `@astrojs/vercel/serverless`; `astro.config.mjs:6` |
| Routes | `/`, `/how-it-works`, `/contact`, `/privacy`, `/terms`, `/api/generate` (`src/pages/`) |
| Layout / head | `src/layouts/BaseLayout.astro` |
| Build commands | `npm run build` (`astro build`); `package.json` |
| Deployment | Vercel (`vercel.json`), runtime `nodejs20.x` |
| Base URL | `https://pressfolio.vercel.app` (`astro.config.mjs:5`) |
| Existing SEO assets (before) | None — no `robots.txt`, no sitemap, no canonical, no OG/Twitter tags, no structured data |

## 1. Technical Foundation

| Item | Before | After | Evidence |
|---|---|---|---|
| `robots.txt` | Missing | Added, allows all except `/api/`, references sitemap | `public/robots.txt` |
| `sitemap.xml` | Missing | Dynamic SSR endpoint, 5 canonical URLs | `src/pages/sitemap.xml.ts` |
| Canonical tags | Missing | Every page self-canonical via layout | `src/layouts/BaseLayout.astro` |
| Status codes | No 404 page | Custom 404 returning HTTP 404 | `src/pages/404.astro` (verified `HTTP 404`) |
| HTTPS | Vercel default | HSTS header added | `vercel.json` |
| Security headers | None | `nosniff`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`, HSTS | `vercel.json` |
| Static asset caching | None | 1-year immutable cache for `/styles/*` | `vercel.json` |
| Mobile-first | Viewport present | Viewport retained; responsive layout unchanged | `src/layouts/BaseLayout.astro` |
| Clean URLs | Yes | Unchanged (all slug-based) | `src/pages/` |
| SPA/CSR risk | N/A — site is SSR | Server-rendered HTML confirmed | dev-server HTML dump |
| Core Web Vitals (CLS) | Theme applied in `<body>` script → flash/shift risk | Theme now applied in `<head>` before paint | `src/layouts/BaseLayout.astro` |
| `hreflang` | N/A | Not applicable — single language (`en`) | `lang="en"` on `<html>` |

## 2. On-Page SEO

| Item | Before | After | Evidence |
|---|---|---|---|
| `<title>` | Present, suffix in layout | Unique per page, `Title | PressFolio` | all pages |
| Meta description | Generic default reused | Unique per page | all pages |
| Single H1 | Homepage had H1 **plus** an `<h1>` in the preview box | Homepage H1 rewritten; preview title demoted to `<div>` | `src/pages/index.astro` |
| H1 keyword | "Press → Blog" (no keyword) | "Press Release to Blog Converter" | `src/pages/index.astro` |
| Open Graph | Missing | `og:type/site_name/title/description/url/image/width/height/locale` | `src/layouts/BaseLayout.astro` |
| Twitter cards | Missing | `summary_large_image` + title/description/image | `src/layouts/BaseLayout.astro` |
| JSON-LD | Missing | `WebSite`, `WebApplication`, `FAQPage` (home); `HowTo` (how-it-works); `ContactPage`, `Organization` (contact) | pages |
| OG image | Missing | 1200x630 generated | `public/og-image.png` |
| Favicon / touch icon | Inline data-URI emoji only | SVG favicon + PNG apple-touch-icon | `public/favicon.svg`, `public/apple-touch-icon.png` |
| Image alt text | No `<img>` in markup (emoji only) | N/A — no content images; decorative emoji left as-is | — |
| Internal links | Header + footer nav | Retained, plus footer links to contact/source | `src/components/Footer.astro` |
| `robots` meta | None | `index, follow, max-image-preview:large`; `noindex` on 404 | `src/layouts/BaseLayout.astro`, `404.astro` |

## 3. Content & E-E-A-T

| Item | Before | After | Evidence |
|---|---|---|---|
| About/explainer content | Thin — tool only | "What is PressFolio?" and "Who is it for?" sections | `src/pages/index.astro` |
| Ownership/author | None | Footer credits maintainer NSKWeb + source link | `src/components/Footer.astro` |
| Contact | Form only | Form + structured `ContactPage`/`Organization` | `src/pages/contact.astro` |
| Dates | Legal pages dated | Retained | `privacy.astro`, `terms.astro` |
| Sources | N/A | — | — |
| Topical depth | Thin | FAQ section + explainer added | `src/pages/index.astro` |

## 4. Off-Page / Authority

| Item | Status | Notes |
|---|---|---|
| Backlink strategy | Documented (manual) | See `SEO_STRATEGY.md` |
| Penalty risks | Documented | Warn against link farms / paid links |
| Brand consistency | Improved | Consistent "PressFolio" naming, GitHub source link |

## 5. Accounts & Measurement

| Item | Status | Evidence |
|---|---|---|
| Google Analytics 4 | Env-gated, wired | `PUBLIC_GA_ID` in `BaseLayout.astro`; template in `.env.example` |
| Google Search Console | Env-gated verification tag | `PUBLIC_GOOGLE_SITE_VERIFICATION` |
| Bing Webmaster Tools | Env-gated verification tag | `PUBLIC_BING_SITE_VERIFICATION` |
| Google Business Profile | N/A | Not a local business |

Verification and analytics activate automatically once the env vars are set in Vercel.

## 6. Verification

- `npm run build` — succeeds (Astro server build complete).
- `/sitemap.xml` — returns valid XML with 5 URLs.
- `/robots.txt` — served correctly.
- Unknown URL — returns **HTTP 404** with `noindex, nofollow`.
- Homepage `<head>` — canonical, robots, OG, Twitter, and 3 JSON-LD blocks render server-side.
- `/how-it-works` — self-canonical + `HowTo` JSON-LD confirmed.

## 7. Manual steps still required (cannot be automated from the repo)

1. Set `PUBLIC_GA_ID`, `PUBLIC_GOOGLE_SITE_VERIFICATION`, `PUBLIC_BING_SITE_VERIFICATION` in Vercel → Project → Settings → Environment Variables.
2. Verify the domain in Google Search Console and submit `https://pressfolio.vercel.app/sitemap.xml`.
3. Verify the domain in Bing Webmaster Tools.
4. Build backlinks per `SEO_STRATEGY.md`.
