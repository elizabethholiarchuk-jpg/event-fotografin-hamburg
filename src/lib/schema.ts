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
  // TODO: add Google Business Profile URL once provided
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
