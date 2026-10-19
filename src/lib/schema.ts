import { getDictionary, type Language } from '@/i18n';
import { PACKAGE_PRICES } from '@/data/pricing';
import { SOCIAL_CLIP_PRICE_EUR } from '@/data/videoOptions';

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

const LINKEDIN = 'https://www.linkedin.com/in/lizaholiarchuk/';
const GOOGLE_MAPS = 'https://maps.app.goo.gl/Q8ZrERj7Q7o6HBYM9';

const SAME_AS = [LINKEDIN, GOOGLE_MAPS] as const;

const ADDRESS = {
  '@type': 'PostalAddress' as const,
  streetAddress: 'Roggenkamp 4',
  postalCode: '22305',
  addressLocality: 'Hamburg',
  addressRegion: 'HH',
  addressCountry: 'DE',
};

/* ------------------------------------------------------------------ */
/*  Locale helpers                                                     */
/* ------------------------------------------------------------------ */

const LANG_TAG: Record<Language, string> = {
  en: 'en',
  de: 'de',
};

const JOB_TITLE = 'Event Photographer';

const KNOWS_LANGUAGE = ['en', 'de'];

const AREA_SERVED_NAMES: Record<Language, [string, string, string]> = {
  de: ['Hamburg', 'Deutschland', 'Europa'],
  en: ['Hamburg', 'Germany', 'Europe'],
};

function areaServed(lang: Language) {
  const [city, country, continent] = AREA_SERVED_NAMES[lang];
  return [
    { '@type': 'City' as const, name: city },
    { '@type': 'Country' as const, name: country },
    { '@type': 'Continent' as const, name: continent },
  ];
}

/** Package names as on /preise and /en/pricing */
const PACKAGE_NAMES: Record<Language, { halfDay: string; extended: string; fullDay: string; socialClip: string }> = {
  de: { halfDay: 'Halbtag', extended: 'Erweitert', fullDay: 'Ganztag', socialClip: 'Social-Clip' },
  en: { halfDay: 'Half Day', extended: 'Extended', fullDay: 'Full Day', socialClip: 'Social clip' },
};

const PACKAGE_DURATIONS: Record<Language, { halfDay: string; extended: string; fullDay: string; socialClip: string }> = {
  de: {
    halfDay: 'Bis zu 4 Stunden vor Ort',
    extended: 'Bis zu 6 Stunden vor Ort',
    fullDay: 'Bis zu 8 Stunden vor Ort',
    socialClip: 'Ein Clip von ca. 30 Sekunden für LinkedIn oder Instagram, am nächsten Tag',
  },
  en: {
    halfDay: 'Up to 4 hours on-site',
    extended: 'Up to 6 hours on-site',
    fullDay: 'Up to 8 hours on-site',
    socialClip: 'One clip of about 30 seconds for LinkedIn or Instagram, delivered the next day',
  },
};

function abs(path: string): string {
  return `${BASE_URL}${path}`;
}

/* ------------------------------------------------------------------ */
/*  Entity builders                                                    */
/* ------------------------------------------------------------------ */

/**
 * OfferCatalog with the packages and prices from /preise (net, VAT excluded).
 * Photo packages are "from" prices; the social clip is a fixed price.
 */
function buildOfferCatalog(lang: Language) {
  const names = PACKAGE_NAMES[lang];
  const durations = PACKAGE_DURATIONS[lang];
  const pricingUrl = abs(lang === 'en' ? '/en/pricing' : '/preise');
  const photoService = lang === 'de' ? 'Eventfotografie' : 'Event photography';

  const fromOffer = (key: 'halfDay' | 'extended' | 'fullDay') => ({
    '@type': 'Offer' as const,
    name: names[key],
    description: durations[key],
    url: pricingUrl,
    priceCurrency: 'EUR',
    priceSpecification: {
      '@type': 'PriceSpecification' as const,
      minPrice: PACKAGE_PRICES[key],
      priceCurrency: 'EUR',
      valueAddedTaxIncluded: false,
    },
    itemOffered: { '@type': 'Service' as const, name: `${photoService}: ${names[key]}` },
  });

  return {
    '@type': 'OfferCatalog' as const,
    name: lang === 'de' ? 'Preise & Pakete' : 'Pricing & packages',
    url: pricingUrl,
    itemListElement: [
      fromOffer('halfDay'),
      fromOffer('extended'),
      fromOffer('fullDay'),
      {
        '@type': 'Offer' as const,
        name: names.socialClip,
        description: durations.socialClip,
        url: pricingUrl,
        price: SOCIAL_CLIP_PRICE_EUR,
        priceCurrency: 'EUR',
        priceSpecification: {
          '@type': 'PriceSpecification' as const,
          price: SOCIAL_CLIP_PRICE_EUR,
          priceCurrency: 'EUR',
          valueAddedTaxIncluded: false,
        },
        itemOffered: { '@type': 'Service' as const, name: names.socialClip },
      },
    ],
  };
}

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
    areaServed: areaServed(lang),
    knowsLanguage: KNOWS_LANGUAGE,
    founder: { '@id': PERSON_ID },
    employee: { '@id': PERSON_ID },
    hasOfferCatalog: buildOfferCatalog(lang),
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
    jobTitle: JOB_TITLE,
    worksFor: { '@id': BUSINESS_ID },
    url: lang === 'en' ? abs('/en/about') : abs('/ueber-mich'),
    image: abs(LOGO_PATH),
    description: t.home.about.p1,
    knowsLanguage: KNOWS_LANGUAGE,
    sameAs: [LINKEDIN],
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
 * Homepage JSON-LD — emits Organization + Person + WebSite in a single @graph.
 */
export function buildHomepageJsonLd(lang: Language) {
  return {
    '@context': 'https://schema.org',
    '@graph': [
      buildOrganizationSchema(lang),
      buildPersonSchema(lang),
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
            item: abs(lang === 'en' ? '/en' : '/'),
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: lang === 'de' ? 'Über mich' : 'About',
            item: abs(lang === 'en' ? '/en/about' : '/ueber-mich'),
          },
        ],
      },
    ],
  };
}

/* ------------------------------------------------------------------ */
/*  Service-page helpers                                               */
/* ------------------------------------------------------------------ */

export interface ServiceSchemaInput {
  /** e.g. "Event Photography", "Conference Photography" */
  serviceType: string;
  /** Page title / heading */
  name: string;
  /** Meta description or short summary */
  description: string;
  /** Path without domain, e.g. "/conference-photographer-hamburg" */
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
  const homePath = lang === 'en' ? '/en' : '/';

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
        areaServed: areaServed(lang),
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
/*  Generic breadcrumb builder                                         */
/* ------------------------------------------------------------------ */

export interface BreadcrumbItem {
  name: string;
  path: string;
}

/**
 * Generic BreadcrumbList JSON-LD — localized per locale.
 * Each item gets the full absolute URL via abs().
 */
export function buildBreadcrumbListJsonLd(
  lang: Language,
  items: BreadcrumbItem[],
) {
  const homeName = lang === 'de' ? 'Start' : 'Home';
  const homePath = lang === 'en' ? '/en' : '/';

  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList' as const,
    itemListElement: [
      {
        '@type': 'ListItem' as const,
        position: 1,
        name: homeName,
        item: abs(homePath),
      },
      ...items.map((item, i) => ({
        '@type': 'ListItem' as const,
        position: i + 2,
        name: item.name,
        item: abs(item.path),
      })),
    ],
  };
}

/* ------------------------------------------------------------------ */
/*  Portfolio / Case-study breadcrumbs                                  */
/* ------------------------------------------------------------------ */

/**
 * Portfolio index breadcrumb: Home → Portfolio
 */
export function buildPortfolioIndexBreadcrumbJsonLd(lang: Language) {
  const portfolioPath = lang === 'en' ? '/en/portfolio' : '/portfolio';
  return buildBreadcrumbListJsonLd(lang, [
    { name: 'Portfolio', path: portfolioPath },
  ]);
}

/**
 * Case-study breadcrumb: Home → Portfolio → [Case Study Title]
 */
export function buildCaseStudyBreadcrumbJsonLd(
  lang: Language,
  title: string,
  slug: string,
) {
  const portfolioPath = lang === 'en' ? '/en/portfolio' : '/portfolio';
  const casePath = lang === 'en' ? `/en/portfolio/${slug}` : `/portfolio/${slug}`;
  return buildBreadcrumbListJsonLd(lang, [
    { name: 'Portfolio', path: portfolioPath },
    { name: title, path: casePath },
  ]);
}

/* ------------------------------------------------------------------ */
/*  Pricing breadcrumb                                                 */
/* ------------------------------------------------------------------ */

/**
 * Pricing page breadcrumb: Home → Pricing
 */
export function buildPricingBreadcrumbJsonLd(lang: Language) {
  const name = lang === 'de' ? 'Preise' : 'Pricing';
  const pricingPath = lang === 'en' ? '/en/pricing' : '/preise';
  return buildBreadcrumbListJsonLd(lang, [
    { name, path: pricingPath },
  ]);
}

export interface PricingOfferInput {
  /** Package name, e.g. "Halbtag" */
  name: string;
  /** Short description, e.g. "Bis zu 4 Stunden vor Ort" */
  description: string;
  /** Minimum ("ab") net price in EUR */
  price: number;
}

/**
 * Pricing page JSON-LD — Service with one Offer per package.
 * `price` is the minimum ("ab") net price, VAT excluded.
 */
export function buildPricingOffersJsonLd(
  lang: Language,
  offers: PricingOfferInput[],
) {
  const pricingPath = lang === 'en' ? '/en/pricing' : '/preise';
  return {
    '@context': 'https://schema.org',
    '@type': 'Service' as const,
    name: lang === 'de' ? 'Eventfotografie Hamburg' : 'Event Photography Hamburg',
    serviceType: 'Event Photography',
    url: abs(pricingPath),
    provider: { '@id': BUSINESS_ID },
    areaServed: areaServed(lang),
    inLanguage: LANG_TAG[lang],
    offers: offers.map((offer) => ({
      '@type': 'Offer' as const,
      name: offer.name,
      description: offer.description,
      price: offer.price,
      priceCurrency: 'EUR',
      priceSpecification: {
        '@type': 'PriceSpecification' as const,
        minPrice: offer.price,
        priceCurrency: 'EUR',
        valueAddedTaxIncluded: false,
      },
      url: abs(pricingPath),
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
export function buildBlogPostingJsonLd(input: BlogPostingInput, lang: Language = 'en') {
  const insightsPath = lang === 'en' ? '/en/insights' : '/insights';
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
      '@id': abs(`${insightsPath}/${input.slug}`),
    },
  };
}

/**
 * Breadcrumb for an article page: Home → Insights → Article title.
 * Localized per locale.
 */
export function buildArticleBreadcrumbJsonLd(
  lang: Language,
  title: string,
  slug: string,
) {
  const insightsPath = lang === 'en' ? '/en/insights' : '/insights';
  return buildBreadcrumbListJsonLd(lang, [
    { name: 'Insights', path: insightsPath },
    { name: title, path: `${insightsPath}/${slug}` },
  ]);
}

/**
 * /insights index JSON-LD — Blog + ItemList of published articles.
 */
export function buildInsightsIndexJsonLd(
  posts: BlogPostingInput[],
  lang: Language = 'en',
) {
  const insightsPath = lang === 'en' ? '/en/insights' : '/insights';
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Blog' as const,
        '@id': abs(insightsPath),
        url: abs(insightsPath),
        name: 'Event Photography Insights',
        description:
          'Guides on event photography briefings, trade show coverage at Hamburg Messe, and same-day photo delivery — for marketing and event managers.',
        publisher: { '@id': BUSINESS_ID },
        inLanguage: LANG_TAG[lang],
      },
      {
        '@type': 'ItemList' as const,
        itemListElement: posts.map((post, i) => ({
          '@type': 'ListItem' as const,
          position: i + 1,
          url: abs(`${insightsPath}/${post.slug}`),
        })),
      },
      buildBreadcrumbListJsonLd(lang, [
        { name: 'Insights', path: insightsPath },
      ]),
    ],
  };
}

/* ------------------------------------------------------------------ */
/*  ImageObject schema for portfolio galleries                         */
/* ------------------------------------------------------------------ */

export interface GalleryImageInput {
  /** Path relative to public, e.g. "/images/portfolio/slug/01.webp" */
  src: string;
  /** Alt text / caption */
  caption: string;
  /** Event title used as image name */
  name: string;
  /** City + venue for contentLocation */
  contentLocation?: string;
}

/**
 * Array of ImageObject schemas for a portfolio gallery.
 * Each references #liza as creator.
 */
export function buildImageObjectsJsonLd(images: GalleryImageInput[]) {
  return {
    '@context': 'https://schema.org',
    '@graph': images.map((img) => ({
      '@type': 'ImageObject' as const,
      contentUrl: abs(img.src),
      name: img.name,
      caption: img.caption,
      creator: { '@id': PERSON_ID },
      ...(img.contentLocation && {
        contentLocation: {
          '@type': 'Place' as const,
          name: img.contentLocation,
        },
      }),
    })),
  };
}

