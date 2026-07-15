import { portfolioEvents } from "@/data/portfolio";
import { insightsPosts } from "@/data/insights";

export const dynamic = 'force-static';

export async function GET() {
    const baseUrl = 'https://www.event-fotografin-hamburg.de';
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
        { path: '/conference-photography-hamburg', priority: '0.9', changefreq: 'monthly' },
        { path: '/corporate-event-photography-hamburg', priority: '0.9', changefreq: 'monthly' },
        { path: '/about', priority: '0.6', changefreq: 'yearly' },
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

    // Asymmetric event photography routes with reciprocal hreflang
    urls += `
  <url>
    <loc>${baseUrl}/event-photographer-hamburg</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/event-photographer-hamburg" />
    <xhtml:link rel="alternate" hreflang="de" href="${baseUrl}/de/eventfotograf-hamburg" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}/event-photographer-hamburg" />
  </url>
  <url>
    <loc>${baseUrl}/de/eventfotograf-hamburg</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/event-photographer-hamburg" />
    <xhtml:link rel="alternate" hreflang="de" href="${baseUrl}/de/eventfotograf-hamburg" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}/event-photographer-hamburg" />
  </url>
  <url>
    <loc>${baseUrl}/trade-show-photography-hamburg</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/trade-show-photography-hamburg" />
    <xhtml:link rel="alternate" hreflang="de" href="${baseUrl}/de/messefotografie-hamburg" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}/trade-show-photography-hamburg" />
  </url>
  <url>
    <loc>${baseUrl}/de/messefotografie-hamburg</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.9</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/trade-show-photography-hamburg" />
    <xhtml:link rel="alternate" hreflang="de" href="${baseUrl}/de/messefotografie-hamburg" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}/trade-show-photography-hamburg" />
  </url>
  <url>
    <loc>${baseUrl}/pricing</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/pricing" />
    <xhtml:link rel="alternate" hreflang="de" href="${baseUrl}/de/preise" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}/pricing" />
  </url>
  <url>
    <loc>${baseUrl}/de/preise</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.7</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}/pricing" />
    <xhtml:link rel="alternate" hreflang="de" href="${baseUrl}/de/preise" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}/pricing" />
  </url>`;

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

    // Insights blog posts (exclude placeholders)
    insightsPosts.filter(post => !post.isPlaceholder).forEach(post => {
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
