export const dynamic = 'force-static';

export async function GET() {
    const baseUrl = 'https://lizaholiarchuk.com';
    const lastModified = new Date().toISOString();

    const routes = [
        { path: '', priority: '1.0', changefreq: 'monthly' },
        { path: '/portfolio', priority: '0.8', changefreq: 'monthly' },
        { path: '/kontakt', priority: '0.8', changefreq: 'yearly' },
        { path: '/impressum', priority: '0.5', changefreq: 'yearly' },
        { path: '/datenschutz', priority: '0.5', changefreq: 'yearly' },
    ];

    const generateUrls = () => {
        let urls = '';
        routes.forEach(route => {
            // English (Root)
            urls += `
  <url>
    <loc>${baseUrl}${route.path}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>${route.changefreq}</changefreq>
    <priority>${route.priority}</priority>
    <xhtml:link rel="alternate" hreflang="en" href="${baseUrl}${route.path}" />
    <xhtml:link rel="alternate" hreflang="de" href="${baseUrl}/de${route.path}" />
    <xhtml:link rel="alternate" hreflang="x-default" href="${baseUrl}${route.path}" />
  </url>`;
            
            // German (/de)
            urls += `
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
        return urls;
    };

    const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${generateUrls()}
</urlset>`;

    return new Response(xml, {
        status: 200,
        headers: {
            'Content-Type': 'application/xml; charset=utf-8',
        },
    });
}
