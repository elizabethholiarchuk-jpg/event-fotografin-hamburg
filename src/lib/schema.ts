import { getDictionary, type Language } from '@/i18n';

/* ------------------------------------------------------------------ */
/*  Constants                                                          */
/* ------------------------------------------------------------------ */

const BASE_URL = 'https://www.event-fotografin-hamburg.de';

const BUSINESS_ID = `${BASE_URL}/#business`;
const PERSON_ID   = `${BASE_URL}/#liza`;
const WEBSITE_ID  = `${BASE_URL}/#website`;

const LOGO_PATH   = '/images/home/10-about/01-about.webp';
const TELEPHONE   = '+491752606697';
const EMAIL       = 'hello@lizaholiarchuk.com';

const SAME_AS = [
  'https://de.linkedin.com/in/lizaholiarchuk',
  'https://www.instagram.com/liza.holiarchuk/',
  'https://share.google/PykESRa2nPSRxACg0',
] as const;

const ADDRESS = {
  '@type': 'PostalAddress' as const,
  streetAddress: 'Rehhoffstrasse 10',
  postalCode: '20459',
  addressLocality: 'Hamburg',
  addressRegion: 'HH',
  addressCountry: 'DE',
};

const GEO = {
  '@type': 'GeoCoordinates' as const,
  latitude: 53.5511,
  longitude: 9.9937,
};

/* ------------------------------------------------------------------ */
/*  Locale helpers                                                     */
/* ------------------------------------------------------------------ */

const LANG_TAG: Record<Language, string> = {
  en: 'en',
  de: 'de',
};

const JOB_TITLE: Record<Language, string> = {
  en: 'Event Photographer',
  de: 'Eventfotografin',
};

function abs(path: string): string {
  return `${BASE_URL}${path}`;
}

/* ------------------------------------------------------------------ */
/*  Entity builders                                                    */
/* ------------------------------------------------------------------ */

/**
 * Organization + ProfessionalService — @id "#business"
 */
export function buildOrganizationSchema(lang: Language) {
  const t = getDictionary(lang);
  return {
    '@type': ['Organization', 'ProfessionalService'] as const,
    '@id': BUSINESS_ID,
    name: 'Liza Holiarchuk — Event Photography',
    url: abs('/'),
    image: abs(LOGO_PATH),
    telephone: TELEPHONE,
    email: EMAIL,
    description: t.home.meta.description,
    priceRange: '€€',
    address: ADDRESS,
    geo: GEO,
    areaServed: [
      { '@type': 'City' as const, name: 'Hamburg' },
      { '@type': 'Country' as const, name: 'Germany' },
      { '@type': 'AdministrativeArea' as const, name: 'Europe' },
    ],
    founder: { '@id': PERSON_ID },
    sameAs: [...SAME_AS],
  };
}

/**
 * Person — @id "#liza"
 */
export function buildPersonSchema(lang: Language) {
  const t = getDictionary(lang);
  return {
    '@type': 'Person' as const,
    '@id': PERSON_ID,
    name: t.home.about.title,           // "Liza Holiarchuk"
    jobTitle: JOB_TITLE[lang],
    worksFor: { '@id': BUSINESS_ID },
    url: abs('/about'),
    image: abs(LOGO_PATH),
    description: t.home.about.p1,
    sameAs: [...SAME_AS],
  };
}

/**
 * WebSite — @id "#website"
 */
export function buildWebSiteSchema(lang: Language) {
  return {
    '@type': 'WebSite' as const,
    '@id': WEBSITE_ID,
    url: abs('/'),
    name: 'Liza Holiarchuk — Event Photography',
    inLanguage: LANG_TAG[lang],
    publisher: { '@id': BUSINESS_ID },
  };
}

/* ------------------------------------------------------------------ */
/*  Page-level graph builders                                          */
/* ------------------------------------------------------------------ */

/**
 * Homepage JSON-LD — emits Organization + WebSite in a single @graph.
 */
export function buildHomepageJsonLd(lang: Language) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      buildOrganizationSchema(lang),
      buildWebSiteSchema(lang),
    ],
  };
}

/**
 * About page JSON-LD — emits Person + BreadcrumbList in a single @graph.
 */
export function buildAboutJsonLd(lang: Language) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      buildPersonSchema(lang),
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: lang === 'de' ? 'Start' : 'Home',
            item: abs('/'),
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'About',
            item: abs('/about'),
          },
        ],
      },
    ],
  };
}

/* ------------------------------------------------------------------ */
/*  Service-page helpers                                               */
/* ------------------------------------------------------------------ */

const AREA_SERVED = [
  { '@type': 'City' as const, name: 'Hamburg' },
  { '@type': 'Country' as const, name: 'Germany' },
  { '@type': 'AdministrativeArea' as const, name: 'Europe' },
] as const;

export interface ServiceSchemaInput {
  /** e.g. "Event Photography", "Conference Photography" */
  serviceType: string;
  /** Page title / heading */
  name: string;
  /** Meta description or short summary */
  description: string;
  /** Path without domain, e.g. "/conference-photography-hamburg" */
  path: string;
  /** Absolute image URL path, e.g. "/images/services/…" */
  image: string;
}

/**
 * Service-page JSON-LD — emits Service + BreadcrumbList in a single @graph.
 */
export function buildServicePageJsonLd(
  lang: Language,
  input: ServiceSchemaInput,
) {
  const homeName = lang === 'de' ? 'Start' : 'Home';
  const homePath = lang === 'de' ? '/de' : '/';

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service' as const,
        name: input.name,
        description: input.description,
        url: abs(input.path),
        image: abs(input.image),
        serviceType: input.serviceType,
        provider: { '@id': BUSINESS_ID },
        areaServed: [...AREA_SERVED],
        inLanguage: LANG_TAG[lang],
      },
      {
        '@type': 'BreadcrumbList' as const,
        itemListElement: [
          {
            '@type': 'ListItem' as const,
            position: 1,
            name: homeName,
            item: abs(homePath),
          },
          {
            '@type': 'ListItem' as const,
            position: 2,
            name: input.name,
            item: abs(input.path),
          },
        ],
      },
    ],
  };
}

/**
 * FAQPage JSON-LD — built directly from the visible Q&A pairs.
 */
export function buildFaqPageJsonLd(
  faqs: { q: string; a: string }[],
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage' as const,
    mainEntity: faqs.map((f) => ({
      '@type': 'Question' as const,
      name: f.q,
      acceptedAnswer: {
        '@type': 'Answer' as const,
        text: f.a,
      },
    })),
  };
}

/* ------------------------------------------------------------------ */
/*  Blog / Article helpers                                             */
/* ------------------------------------------------------------------ */

export interface BlogPostingInput {
  /** Page slug, e.g. "how-much-does-an-event-photographer-cost-hamburg" */
  slug: string;
  headline: string;
  description: string;
  /** ISO 8601 date */
  datePublished: string;
  /** ISO 8601 date */
  dateModified: string;
  /** Absolute image path, e.g. "/images/insights/…" */
  image?: string;
}

/**
 * BlogPosting JSON-LD — references #liza as author and #business as publisher.
 */
export function buildBlogPostingJsonLd(input: BlogPostingInput) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting' as const,
    headline: input.headline,
    description: input.description,
    datePublished: input.datePublished,
    dateModified: input.dateModified,
    ...(input.image && { image: abs(input.image) }),
    author: { '@id': PERSON_ID },
    publisher: { '@id': BUSINESS_ID },
    mainEntityOfPage: {
      '@type': 'WebPage' as const,
      '@id': abs(`/insights/${input.slug}`),
    },
  };
}

/**
 * Breadcrumb for an article page: Home → Insights → Article title.
 */
export function buildArticleBreadcrumbJsonLd(
  title: string,
  slug: string,
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList' as const,
    itemListElement: [
      {
        '@type': 'ListItem' as const,
        position: 1,
        name: 'Home',
        item: abs('/'),
      },
      {
        '@type': 'ListItem' as const,
        position: 2,
        name: 'Insights',
        item: abs('/insights'),
      },
      {
        '@type': 'ListItem' as const,
        position: 3,
        name: title,
        item: abs(`/insights/${slug}`),
      },
    ],
  };
}

/**
 * /insights index JSON-LD — Blog + ItemList of published articles.
 */
export function buildInsightsIndexJsonLd(
  posts: BlogPostingInput[],
) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Blog' as const,
        '@id': abs('/insights'),
        url: abs('/insights'),
        name: 'Event Photography Insights',
        description:
          'Guides on event photography briefings, trade show coverage at Hamburg Messe, and same-day photo delivery — for marketing and event managers.',
        publisher: { '@id': BUSINESS_ID },
        inLanguage: 'en',
      },
      {
        '@type': 'ItemList' as const,
        itemListElement: posts.map((post, i) => ({
          '@type': 'ListItem' as const,
          position: i + 1,
          url: abs(`/insights/${post.slug}`),
        })),
      },
      {
        '@type': 'BreadcrumbList' as const,
        itemListElement: [
          {
            '@type': 'ListItem' as const,
            position: 1,
            name: 'Home',
            item: abs('/'),
          },
          {
            '@type': 'ListItem' as const,
            position: 2,
            name: 'Insights',
            item: abs('/insights'),
          },
        ],
      },
    ],
  };
}

