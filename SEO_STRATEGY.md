# SEO Strategy — PressFolio

This covers the parts of search visibility that live outside the codebase.

## 1. Accounts to set up (day one)

1. **Google Search Console** — add `https://pressfolio.vercel.app`, verify via the
   `PUBLIC_GOOGLE_SITE_VERIFICATION` env var, then submit `/sitemap.xml`.
2. **Bing Webmaster Tools** — verify via `PUBLIC_BING_SITE_VERIFICATION`.
3. **Google Analytics 4** — create a property, set `PUBLIC_GA_ID`.

## 2. Keyword targets

PressFolio should target long-tail, high-intent queries such as:

- "press release to blog post converter"
- "convert PIB press release to article"
- "press release to markdown"
- "free press release formatter"

The homepage title and H1 already target the primary term ("Press Release to Blog Converter").

## 3. Content roadmap (topical depth)

Publish supporting pages to build topical authority around press-release workflows:

- "How to write a press release summary"
- "PIB India press release format explained"
- "Press release vs. news article: what's the difference?"
- "How to turn a press release into a tweet thread"

Each should link back to the tool and use `Article`/`FAQPage` structured data.

## 4. Backlink strategy (white-hat only)

- Submit to relevant free tool directories and "awesome" lists.
- Write guest posts for journalism/blogging communities linking to the tool.
- Share on developer communities (Product Hunt, Hacker News, Reddit r/journalism) — links
  from genuine participation, not spam.
- Open-source the repo (already public) and reference it from your GitHub profile/README.

**Avoid:** paid link schemes, private blog networks, mass directory spam, and comment spam.
These risk manual penalties that are hard to recover from.

## 5. Brand consistency

- Use the exact name "PressFolio" everywhere (title, OG, schema, social).
- Keep the GitHub repo linked from the footer for trust.
- If social profiles are created, use the same handle and link them in `sameAs` on the
  `Organization` schema.

## 6. Ongoing cadence

- Monthly: review Search Console queries and impressions; fix coverage errors.
- Quarterly: refresh thin pages, update dates, add FAQs from real user questions.
- Continuously: publish one useful page per topic cluster.
