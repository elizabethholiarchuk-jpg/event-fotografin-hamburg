import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Event Photography Pricing Hamburg",
  description:
    "Conference and event photography in Hamburg from €750. Half-day and full-day packages. Transparent pricing, custom quotes within 24 hours.",
  alternates: {
    canonical: "/pricing",
  },
  openGraph: {
    title: "Event Photography Pricing Hamburg | Liza Holiarchuk",
    url: "/pricing",
  },
};

const packages = [
  {
    name: "Half Day",
    duration: "Up to 4 hours on-site",
    range: "€1,000 – €1,500",
    ideal:
      "Panel discussions, compact conferences, networking events, single-day stand coverage at a trade fair.",
    includes: [
      "Up to 4 hours on-site",
      "Fully edited gallery (typically 80–150 images)",
      "Private online gallery, delivered within 48h",
      "Full corporate usage rights",
    ],
  },
  {
    name: "Full Day",
    duration: "Up to 8 hours on-site",
    range: "€2,000 – €2,500",
    ideal:
      "Full-day conferences, all-day trade show coverage, corporate events, award ceremonies.",
    includes: [
      "Up to 8 hours on-site",
      "Fully edited gallery (typically 200–400 images)",
      "Private online gallery, delivered within 48h",
      "Full corporate usage rights",
      "Optional: same-day highlight selects",
    ],
    highlight: true,
  },
  {
    name: "Multi-Day",
    duration: "2+ days",
    range: "Custom, discounted day-rate",
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
  {
    name: "Short Highlight Film",
    desc: "60–90 second edit for internal sharing or social media.",
  },
];

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://www.event-fotografin-hamburg.de/" },
              { "@type": "ListItem", position: 2, name: "Pricing", item: "https://www.event-fotografin-hamburg.de/pricing" },
            ],
          }),
        }}
      />

      {/* Hero */}
      <section className="pt-32 md:pt-44 pb-16 md:pb-24 border-b border-[var(--color-border-hairline)]">
        <div className="max-w-[1000px] mx-auto px-6 md:px-12 flex flex-col gap-6">
          <nav aria-label="Breadcrumb" className="text-[13px] text-[var(--color-text-muted)] font-light">
            <Link href="/" className="hover:text-[var(--color-accent)] transition-colors">Home</Link>
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
              Minimum booking: half-day.&ensp;·&ensp;All prices exclude VAT (if applicable).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-[var(--color-text-muted)]">Typical budget</p>
                  <p className="text-3xl font-semibold text-[var(--color-text-main)]">{pkg.range}</p>
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

      {/* Add-ons */}
      <section className="py-16 md:py-24 border-b border-[var(--color-border-hairline)]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col gap-10">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[var(--color-text-main)]">Add-ons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
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
            href="/contact"
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
