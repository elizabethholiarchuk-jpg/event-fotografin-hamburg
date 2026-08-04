import { portfolioEvents } from "@/data/portfolio";
import { insightsPosts } from "@/data/insights";

export const dynamic = 'force-static';

export async function GET() {
    const baseUrl = 'https://www.event-fotografin-hamburg.de';
    const lastModified = new Date().toISOString();

    // Bilingual routes with same slug (DE at root, EN at /en/)
    const bilingualRoutes = [
        { path: '', priority: '1.0', changefreq: 'monthly' },
        { path: '/portfolio', priority: '0.8', changefreq: 'monthly' },
        { path: '/impressum', priority: '0.5', changefreq: 'yearly' },
        { path: '/datenschutz', priority: '0.5', changefreq: 'yearly' },
        { path: '/insights', priority: '0.7', changefreq: 'weekly' },
    ];

    let urls = '';

    // Shared-slug bilingual routes
    bilingualRoutes.forEach(route => {
        urls += `
  <url>
    <loc>${baseUrl}${route.path}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
    <xhtml:link rel="alternate" hreflang="de" href="${baseUrl}${route.path}" />
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/en${route.path}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}${route.path}" />
  </url>
  <url>
    <loc>${baseUrl}/en${route.path}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
    <xhtml:link rel="alternate" hreflang="de" href="${baseUrl}${route.path}" />
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/en${route.path}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}${route.path}" />
  </url>`;
    });

    // Asymmetric bilingual routes (different DE/EN slugs)
    const asymmetricRoutes = [
        { de: '/eventfotograf-hamburg', en: '/en/event-photographer-hamburg', priority: '0.9' },
        { de: '/konferenzfotografie-hamburg', en: '/en/conference-photographer-hamburg', priority: '0.9' },
        { de: '/messefotograf-hamburg', en: '/en/trade-show-photographer-hamburg', priority: '0.9' },
        { de: '/corporate-event-fotograf-hamburg', en: '/en/corporate-event-photographer-hamburg', priority: '0.9' },
        { de: '/preise', en: '/en/pricing', priority: '0.7' },
        { de: '/kontakt', en: '/en/contact', priority: '0.8' },
        { de: '/ueber-mich', en: '/en/about', priority: '0.6' },
    ];

    asymmetricRoutes.forEach(({ de, en, priority }) => {
        urls += `
  <url>
    <loc>${baseUrl}${de}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${priority}</priority>
    <xhtml:link rel="alternate" hreflang="de" href="${baseUrl}${de}" />
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}${en}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}${de}" />
  </url>
  <url>
    <loc>${baseUrl}${en}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>${priority}</priority>
    <xhtml:link rel="alternate" hreflang="de" href="${baseUrl}${de}" />
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}${en}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}${de}" />
  </url>`;
    });

    // Portfolio case study pages (shared slug)
    portfolioEvents.forEach(event => {
        urls += `
  <url>
    <loc>${baseUrl}/portfolio/${event.slug}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.7</priority>
    <xhtml:link rel="alternate" hreflang="de" href="${baseUrl}/portfolio/${event.slug}" />
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/en/portfolio/${event.slug}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}/portfolio/${event.slug}" />
  </url>
  <url>
    <loc>${baseUrl}/en/portfolio/${event.slug}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>yearly</changefreq>
    <priority>0.7</priority>
    <xhtml:link rel="alternate" hreflang="de" href="${baseUrl}/portfolio/${event.slug}" />
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/en/portfolio/${event.slug}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}/portfolio/${event.slug}" />
  </url>`;
    });

    // Insights blog posts (exclude placeholders)
    insightsPosts.filter(post => !post.isPlaceholder).forEach(post => {
        urls += `
  <url>
    <loc>${baseUrl}/insights/${post.slug}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
    <xhtml:link rel="alternate" hreflang="de" href="${baseUrl}/insights/${post.slug}" />
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/en/insights/${post.slug}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}/insights/${post.slug}" />
  </url>
  <url>
    <loc>${baseUrl}/en/insights/${post.slug}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
    <xhtml:link rel="alternate" hreflang="de" href="${baseUrl}/insights/${post.slug}" />
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/en/insights/${post.slug}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}/insights/${post.slug}" />
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
