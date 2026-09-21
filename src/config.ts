export const SITE = {
  url: 'https://pressfolio.vercel.app',
  name: 'PressFolio',
  tagline: 'Press Release to Blog Converter',
  /** Bumped when site-wide content meaningfully changes; used as sitemap lastmod. */
  lastUpdated: '2026-09-21',
  description:
    'PressFolio is a free press release to blog converter. Turn any press release into a polished, publish-ready blog post in five steps, with AI enhancement and Markdown, HTML, or tweet thread export.',
  metaDescription:
    'Convert any press release into a polished, publish-ready blog post in five steps. Free, no signup, with Markdown and HTML export.',
  locale: 'en_US',
  language: 'en',
  keywords: [
    'press release to blog',
    'press release to blog post converter',
    'press release writing tool',
    'blog post generator',
    'convert press release to article',
    'PR content repurposing',
    'announcement to blog',
  ],
  supportEmail: 'contact@pressfolio.app',
};

export const canonicalUrl = (pathname: string) => {
  const clean = pathname.replace(/\/+$/, '');
  return `${SITE.url}${clean === '' ? '/' : clean}`;
};

/** Every indexable page, used to build sitemap.xml. */
export const staticPages: { path: string; priority: number; changefreq: string }[] = [
  { path: '/', priority: 1.0, changefreq: 'weekly' },
  { path: '/how-it-works', priority: 0.9, changefreq: 'monthly' },
  { path: '/press-release-to-blog-post', priority: 0.9, changefreq: 'monthly' },
  { path: '/pr-content-repurposing', priority: 0.8, changefreq: 'monthly' },
  { path: '/announcement-to-blog', priority: 0.8, changefreq: 'monthly' },
  { path: '/blog', priority: 0.8, changefreq: 'weekly' },
  { path: '/blog/how-to-convert-a-press-release-into-a-blog-post', priority: 0.7, changefreq: 'monthly' },
  { path: '/blog/press-release-to-blog-post-examples', priority: 0.7, changefreq: 'monthly' },
  { path: '/blog/press-release-seo-checklist', priority: 0.7, changefreq: 'monthly' },
  { path: '/contact', priority: 0.5, changefreq: 'yearly' },
  { path: '/privacy', priority: 0.3, changefreq: 'yearly' },
  { path: '/terms', priority: 0.3, changefreq: 'yearly' },
];