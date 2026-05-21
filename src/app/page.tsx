import { Metadata } from "next";
import HomePage from "@/components/pages/HomePage";
import { getDictionary } from "@/i18n";

export async function generateMetadata(): Promise<Metadata> {
  const t = getDictionary('en');
  return {
    title: t.home.meta.title,
    description: t.home.meta.description,
    alternates: {
      canonical: "/",
      languages: {
        'en': '/',
        'de': '/de',
        'x-default': '/',
      },
    },
  };
}

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "Photographer"],
  "@id": "https://www.event-fotografin-hamburg.de/#business",
  "name": "Liza Holiarchuk — Event Photographer Hamburg",
  "image": "https://www.event-fotografin-hamburg.de/images/home/10-about/01-about.webp",
  "url": "https://www.event-fotografin-hamburg.de/",
  "telephone": "+491752606697",
  "email": "hello@lizaholiarchuk.com",
  "description": "Professional event photographer in Hamburg specialising in B2B conferences, trade shows and corporate events. Fast delivery. Europe-wide.",
  "priceRange": "€€€",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Hamburg",
    "addressRegion": "HH",
    "addressCountry": "DE",
  },
  "areaServed": [
    { "@type": "City", "name": "Hamburg" },
    { "@type": "City", "name": "Berlin" },
    { "@type": "City", "name": "Frankfurt" },
    { "@type": "Country", "name": "Germany" },
  ],
  "sameAs": [
    "https://de.linkedin.com/in/lizaholiarchuk",
    "https://www.instagram.com/liza.holiarchuk/",
  ],
};

const webSiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.event-fotografin-hamburg.de/#website",
  "url": "https://www.event-fotografin-hamburg.de/",
  "name": "Liza Holiarchuk — Event Photographer Hamburg",
  "publisher": { "@id": "https://www.event-fotografin-hamburg.de/#business" },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
      />
      <HomePage lang="en" />
    </>
  );
}
