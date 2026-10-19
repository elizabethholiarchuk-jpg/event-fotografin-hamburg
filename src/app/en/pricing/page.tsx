import { Metadata } from "next";
import Link from "next/link";
import { videoOptions } from "@/data/videoOptions";
import { PACKAGE_PRICES, formatFromPrice } from "@/data/pricing";
import { buildPricingBreadcrumbJsonLd, buildFaqPageJsonLd, buildPricingOffersJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Event Photography Pricing Hamburg",
  description:
    `Conference and event photography in Hamburg ${formatFromPrice("en", PACKAGE_PRICES.halfDay)}. Packages for 4, 6 and 8 hours. Transparent pricing, custom quotes within 24 hours.`,
  alternates: {
    canonical: "/en/pricing",
    languages: {
        en: "/en/pricing",
        de: "/preise",
        'x-default': "/preise",
      },
  },
  openGraph: {
      locale: "en_US",
      alternateLocale: ["de_DE"],
    title: "Event Photography Pricing Hamburg | Liza Holiarchuk",
    url: "/en/pricing",
  },
};

type Package = {
  name: string;
  duration: string;
  range: string;
  /** Minimum ("from") net price in EUR, used for the Offer JSON-LD */
  price?: number;
  note?: string;
  ideal: string;
  includes: string[];
  highlight?: boolean;
};

const packages: Package[] = [
  {
    name: "Half Day",
    duration: "Up to 4 hours on-site",
    range: formatFromPrice("en", PACKAGE_PRICES.halfDay),
    price: PACKAGE_PRICES.halfDay,
    ideal:
      "Panel discussions, compact conferences, networking events, single-day stand coverage at a trade fair.",
    includes: [
      "Up to 4 hours on-site",
      "Fully edited gallery (approx. 80–150 images)",
      "Private online gallery, delivered within 48h",
      "Full corporate usage rights",
    ],
  },
  {
    name: "Extended",
    duration: "Up to 6 hours on-site",
    range: formatFromPrice("en", PACKAGE_PRICES.extended),
    price: PACKAGE_PRICES.extended,
    ideal:
      "Conferences followed by a get-together, long trade fair days, corporate events with an evening programme.",
    includes: [
      "Up to 6 hours on-site",
      "Fully edited gallery (approx. 150–250 images)",
      "Private online gallery, delivered within 48h",
      "Full corporate usage rights",
    ],
  },
  {
    name: "Full Day",
    duration: "Up to 8 hours on-site",
    range: formatFromPrice("en", PACKAGE_PRICES.fullDay),
    price: PACKAGE_PRICES.fullDay,
    ideal:
      "Full-day conferences, all-day trade show coverage, corporate events, award ceremonies.",
    includes: [
      "Up to 8 hours on-site",
      "Fully edited gallery (approx. 200–400 images)",
      "Private online gallery, delivered within 48h",
      "Full corporate usage rights",
      "Optional: same-day highlight selects",
    ],
    highlight: true,
  },
  {
    name: "Multi-Day",
    duration: "2+ days",
    range: "Day rate on request",
    note: "Lower from day two.",
    ideal:
      "Trade fairs, international congresses, brand activations and events running across multiple days.",
    includes: [
      "Full multi-day coverage",
      "Daily highlight delivery available",
      "Full edited gallery within 3 business days",
      "Full corporate usage rights",
      "Optional: second photographer for parallel sessions",
    ],
  },
];

const offers = packages.flatMap((pkg) =>
  pkg.price ? [{ name: pkg.name, description: pkg.duration, price: pkg.price }] : []
);

const priceFactors = [
  "Trade show with early start",
  "Multiple days",
  "Second photographer",
  "Same-day first photos",
  "Social clip",
  "Travel outside Hamburg",
  "Extended rights for advertising",
];

const FAQ = [
  { q: "How much does an event photographer in Hamburg cost?", a: `My packages start ${formatFromPrice("en", PACKAGE_PRICES.halfDay)} for a half day (up to 4 hours). The final price depends on duration, scope and add-ons — you get a fixed quote upfront, not an estimate.` },
  { q: "Do you charge by the hour?", a: "I work with packages for 4, 6 and 8 hours instead of pure hourly rates, because preparation and editing are always part of the job. For very short formats we'll find a solution that fits." },
  { q: "When will I receive the photos?", a: "The edited gallery usually within 48 hours, highlights on the same day if you need them." },
  { q: "Are there travel costs?", a: "Usually not within Hamburg. For events outside Hamburg, travel costs are listed transparently in the quote." },
];

const addons = [
  {
    name: "Same-Day Selects",
    desc: "10–20 edited images delivered the same evening.",
  },
  {
    name: "Second Photographer",
    desc: "For parallel sessions or large-scale multi-track events.",
  },
  {
    name: "Travel (Europe-wide)",
    desc: "Amsterdam, Milan, Copenhagen, Berlin and beyond. Quoted per project.",
  },
];


export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildPricingBreadcrumbJsonLd('en')),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildFaqPageJsonLd(FAQ)),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildPricingOffersJsonLd("en", offers)),
        }}
      />

      {/* Hero */}
      <section className="pt-32 md:pt-44 pb-16 md:pb-24 border-b border-[var(--color-border-hairline)]">
        <div className="max-w-[1000px] mx-auto px-6 md:px-12 flex flex-col gap-6">
          <nav aria-label="Breadcrumb" className="text-[13px] text-[var(--color-text-muted)] font-light">
            <Link href="/en" className="hover:text-[var(--color-accent)] transition-colors">Home</Link>
            <span className="mx-2" aria-hidden="true">›</span>
            <span className="text-[var(--color-text-main)]">Pricing</span>
          </nav>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[var(--color-text-main)] leading-[1.08]">
            Pricing
          </h1>
          <p className="text-xl text-[var(--color-text-muted)] max-w-[55ch] font-normal leading-relaxed">
            Project-based, day-rate pricing for professional event photography. Every quote is tailored to your event.
          </p>
          <p className="text-[15px] text-[var(--color-text-muted)] leading-relaxed max-w-[65ch]">
            Final quotes depend on agenda complexity (parallel sessions), venue logistics, deliverables, and travel.
          </p>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 md:py-24 border-b border-[var(--color-border-hairline)]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[var(--color-text-main)]">
              Typical Budgets
            </h2>
            <p className="text-[14px] text-[var(--color-text-muted)]">
              Minimum booking: half day (up to 4 hours).&ensp;·&ensp;All prices exclude VAT (if applicable).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`flex flex-col gap-6 rounded-2xl border p-8 ${
                  pkg.highlight
                    ? "border-[var(--color-accent)] bg-[#F5F8FB]"
                    : "border-[var(--color-border-hairline)] bg-transparent"
                }`}
              >
                {pkg.highlight && (
                  <span className="text-[11px] font-semibold uppercase tracking-widest text-[var(--color-accent)]">
                    Most Common
                  </span>
                )}
                <div className="flex flex-col gap-1">
                  <h3 className="text-2xl font-semibold text-[var(--color-text-main)]">{pkg.name}</h3>
                  <p className="text-sm text-[var(--color-text-muted)]">{pkg.duration}</p>
                </div>
                <div className="flex flex-col gap-0.5">
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-[var(--color-text-muted)]">Price</p>
                  <p className="text-3xl font-semibold text-[var(--color-text-main)]">{pkg.range}</p>
                  {pkg.note && <p className="text-[14px] text-[var(--color-text-muted)]">{pkg.note}</p>}
                </div>
                <p className="text-[14px] text-[var(--color-text-muted)] leading-relaxed">{pkg.ideal}</p>
                <ul className="flex flex-col gap-2 mt-auto">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[14px] text-[var(--color-text-muted)]">
                      <span className="mt-1.5 shrink-0 w-3 h-3 rounded-full bg-[var(--color-accent)] opacity-60" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What affects the price */}
      <section className="py-16 md:py-24 border-b border-[var(--color-border-hairline)]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col gap-8">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[var(--color-text-main)]">
            What affects the price
          </h2>
          <ul className="flex flex-wrap gap-3">
            {priceFactors.map((item) => (
              <li
                key={item}
                className="px-4 py-2 border border-[var(--color-border-hairline)] rounded-full text-[15px] text-[var(--color-text-muted)]"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-16 md:py-24 border-b border-[var(--color-border-hairline)]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col gap-10">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[var(--color-text-main)]">Add-ons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {addons.map((addon) => (
              <div
                key={addon.name}
                className="flex flex-col gap-2 p-6 border border-[var(--color-border-hairline)] rounded-2xl"
              >
                <h3 className="text-base font-semibold text-[var(--color-text-main)]">{addon.name}</h3>
                <p className="text-[14px] text-[var(--color-text-muted)] leading-relaxed">{addon.desc}</p>
              </div>
            ))}
          </div>

          {/* Video */}
          <div className="flex flex-col gap-5">
            <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-[var(--color-text-main)]">Video</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {videoOptions.en.items.map((item) => (
                <div
                  key={item.name}
                  className="flex flex-col gap-2 p-6 border border-[var(--color-border-hairline)] rounded-2xl"
                >
                  <div className="flex items-baseline justify-between gap-4">
                    <h4 className="text-base font-semibold text-[var(--color-text-main)]">{item.name}</h4>
                    <span className="text-[15px] font-semibold text-[var(--color-text-main)] whitespace-nowrap">{item.price}</span>
                  </div>
                  <p className="text-[14px] text-[var(--color-text-muted)] leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <Link href="/en/video-support" className="text-[15px] font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text-main)] transition-colors underline underline-offset-4 w-fit">
              {videoOptions.en.examples}
            </Link>
          </div>
        </div>
      </section>

      {/* Always included */}
      <section className="py-16 md:py-24 border-b border-[var(--color-border-hairline)]">
        <div className="max-w-[900px] mx-auto px-6 md:px-12 flex flex-col gap-8">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[var(--color-text-main)]">
            Always Included
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Professional full-frame camera + backup body",
              "Consistent colour grading and editing",
              "Private online gallery delivery",
              "Full corporate usage rights",
              "Shareable link for internal distribution",
              "Response to your inquiry within 24 hours",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-[var(--color-text-muted)] text-[15px] leading-relaxed"
              >
                <span className="mt-1.5 shrink-0 w-4 h-4 rounded-full bg-[var(--color-accent)] opacity-70" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 border-b border-[var(--color-border-hairline)]">
        <div className="max-w-[800px] mx-auto px-6 md:px-12 flex flex-col gap-10">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[var(--color-text-main)]">
            FAQ
          </h2>
          <div className="flex flex-col gap-8">
            {FAQ.map((item, i) => (
              <div key={i} className="flex flex-col gap-2">
                <h3 className="text-lg font-semibold text-[var(--color-text-main)]">{item.q}</h3>
                <p className="text-[15px] text-[var(--color-text-muted)] leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-[#DDE7F0] text-[var(--color-text-main)] flex justify-center text-center">
        <div className="max-w-[700px] w-full px-6 flex flex-col gap-6 items-center">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1]">
            Get a Custom Quote
          </h2>
          <p className="text-xl opacity-80 font-light max-w-[50ch]">
            Tell me about your event — date, location, and deliverables. I'll send a clear quote tailored to your scope.
          </p>
          <Link
            href="/en/contact"
            className="bg-[var(--color-text-main)] text-white px-10 py-4 text-base font-semibold transition-colors hover:bg-[var(--color-accent-hover)] rounded-2xl"
          >
            Request a Quote
          </Link>
          <p className="text-[13px] opacity-60 font-normal">Reply within 24 hours.</p>
        </div>
      </section>
    </>
  );
}
