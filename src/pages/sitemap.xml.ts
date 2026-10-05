import type { APIRoute } from 'astro';

export const prerender = true;

const SITE = 'https://pressfolio.vercel.app';

const pages: { loc: string; changefreq: string; priority: string }[] = [
  { loc: '/', changefreq: 'weekly', priority: '1.0' },
  { loc: '/how-it-works', changefreq: 'monthly', priority: '0.8' },
  { loc: '/contact', changefreq: 'monthly', priority: '0.5' },
  { loc: '/privacy', changefreq: 'yearly', priority: '0.3' },
  { loc: '/terms', changefreq: 'yearly', priority: '0.3' },
];

export const GET: APIRoute = () => {
  const lastmod = new Date().toISOString().split('T')[0];

  const urls = pages
    .map(
      (p) => `  <url>
    <loc>${SITE}${p.loc}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`
    )
    .join('\n');

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
