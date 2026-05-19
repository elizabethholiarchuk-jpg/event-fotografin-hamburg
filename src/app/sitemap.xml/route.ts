import { portfolioEvents } from "@/data/portfolio";
import { insightsPosts } from "@/data/insights";

export const dynamic = 'force-static';

export async function GET() {
    const baseUrl = 'https://lizaholiarchuk.com';
    const lastModified = new Date().toISOString();

    // EN+DE bilingual routes
    const bilingualRoutes = [
        { path: '', priority: '1.0', changefreq: 'monthly' },
        { path: '/portfolio', priority: '0.8', changefreq: 'monthly' },
        { path: '/impressum', priority: '0.5', changefreq: 'yearly' },
        { path: '/datenschutz', priority: '0.5', changefreq: 'yearly' },
    ];

    // EN-only routes
    const enOnlyRoutes = [
        { path: '/contact', priority: '0.8', changefreq: 'yearly' },
        { path: '/event-photographer-hamburg', priority: '0.9', changefreq: 'monthly' },
        { path: '/conference-photography-hamburg', priority: '0.9', changefreq: 'monthly' },
        { path: '/trade-show-photography-hamburg', priority: '0.9', changefreq: 'monthly' },
        { path: '/corporate-event-photography-hamburg', priority: '0.9', changefreq: 'monthly' },
        { path: '/about', priority: '0.6', changefreq: 'yearly' },
        { path: '/pricing', priority: '0.7', changefreq: 'monthly' },
        { path: '/insights', priority: '0.7', changefreq: 'weekly' },
    ];

    let urls = '';

    // Bilingual routes
    bilingualRoutes.forEach(route => {
        urls += `
  <url>
    <loc>${baseUrl}${route.path}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}${route.path}" />
    <xhtml:link rel="alternate" hreflang="de" href="${baseUrl}/de${route.path}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}${route.path}" />
  </url>
  <url>
    <loc>${baseUrl}/de${route.path}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}${route.path}" />
    <xhtml:link rel="alternate" hreflang="de" href="${baseUrl}/de${route.path}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}${route.path}" />
  </url>`;
    });

    // EN-only routes
    enOnlyRoutes.forEach(route => {
        urls += `
  <url>
    <loc>${baseUrl}${route.path}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
  </url>`;
    });

    // Portfolio case study pages
    portfolioEvents.forEach(event => {
        urls += `
  <url>
    <loc>${baseUrl}/portfolio/${event.slug}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.7</priority>
  </url>`;
    });

    // Insights blog posts
    insightsPosts.forEach(post => {
        urls += `
  <url>
    <loc>${baseUrl}/insights/${post.slug}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`;
    });

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${urls}
</urlset>`;

    return new Response(xml, {
        status: 200,
        headers: { 'Content-Type': 'application/xml; charset=utf-8' },
    });
}
