import type { APIRoute } from 'astro';
import { SITE, staticPages } from '../config';

export const prerender = true;

export const GET: APIRoute = () => {
  const urls = staticPages
    .map(
      page => `  <url>
    <loc>${SITE.url}${page.path}</loc>
    <lastmod>${SITE.lastUpdated}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority.toFixed(1)}</priority>
  </url>`
    )
    .join('\n');

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(body, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};