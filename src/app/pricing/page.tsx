import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pricing | Event Photography Hamburg | Liza Holiarchuk",
  description:
    "Transparent pricing for event photography in Hamburg. Half-day from €590, full-day from €990, multi-day packages available. Get a custom quote.",
  alternates: { canonical: "/pricing" },
  openGraph: {
    title: "Event Photography Pricing Hamburg | Liza Holiarchuk",
    url: "https://lizaholiarchuk.com/pricing",
  },
};

const packages = [
  {
    name: "Half Day",
    duration: "Up to 4 hours",
    from: "from €590",
    ideal: "Compact conferences, panel discussions, networking events, stand photography for shorter exhibition days.",
    includes: [
      "Up to 4 hours on-site",
      "Fully edited gallery (typically 80–150 images)",
      "Private online delivery within 48h",
      "Usage rights for corporate communication",
    ],
  },
  {
    name: "Full Day",
    duration: "Up to 8 hours",
    from: "from €990",
    ideal: "Full conferences, all-day trade show coverage, corporate events, award ceremonies.",
    includes: [
      "Up to 8 hours on-site",
      "Fully edited gallery (typically 200–400 images)",
      "Private online delivery within 48h",
      "Usage rights for corporate communication",
      "Optional: same-day highlight selects",
    ],
    highlight: true,
  },
  {
    name: "Multi-Day",
    duration: "2–5 days",
    from: "Custom",
    ideal: "Trade fairs, congresses, international conferences, brand activations across multiple days.",
    includes: [
      "Full multi-day coverage",
      "Daily highlight delivery available",
      "Full edited gallery within 3 business days",
      "Usage rights for all corporate communication",
      "Optional: second photographer for parallel tracks",
    ],
  },
];

const addons = [
  { name: "Same-Day Highlights", desc: "10–20 edited images delivered by end of day — ready for LinkedIn and press." },
  { name: "Second Photographer", desc: "For parallel sessions, multiple stages, or large-scale events." },
  { name: "Speaker / Team Portraits", desc: "Dedicated portrait block — 5–15 minutes per person in a designated area." },
  { name: "Travel (outside Hamburg)", desc: "For events in Berlin, Hanover, Amsterdam, Milan and other European cities. Quoted per project." },
  { name: "Video Add-on", desc: "Short documentary or social-first highlight reel (60–90 seconds)." },
  { name: "Rush Delivery", desc: "Full gallery within 24 hours instead of 48 — available on request." },
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
              { "@type": "ListItem", position: 1, name: "Home", item: "https://lizaholiarchuk.com" },
              { "@type": "ListItem", position: 2, name: "Pricing", item: "https://lizaholiarchuk.com/pricing" },
            ],
          }),
        }}
      />

      {/* Hero */}
      <section className="pt-32 md:pt-44 pb-16 md:pb-24 border-b border-[var(--color-border-hairline)]">
        <div className="max-w-[1000px] mx-auto px-6 md:px-12 flex flex-col gap-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[var(--color-text-main)] leading-[1.08]">
            Pricing
          </h1>
          <p className="text-xl text-[var(--color-text-muted)] max-w-[55ch] font-normal leading-relaxed">
            Transparent, project-based pricing for event photography. Every quote is tailored to your event — duration, location, and scope.
          </p>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 md:py-24 border-b border-[var(--color-border-hairline)]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col gap-10">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[var(--color-text-main)]">Packages</h2>
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
                  <span className="text-[11px] font-semibold uppercase tracking-widest text-[var(--color-accent)]">Most Popular</span>
                )}
                <div className="flex flex-col gap-1">
                  <h3 className="text-2xl font-semibold text-[var(--color-text-main)]">{pkg.name}</h3>
                  <p className="text-sm text-[var(--color-text-muted)]">{pkg.duration}</p>
                </div>
                <div className="text-3xl font-semibold text-[var(--color-text-main)]">{pkg.from}</div>
                <p className="text-[14px] text-[var(--color-text-muted)] leading-relaxed">{pkg.ideal}</p>
                <ul className="flex flex-col gap-2 mt-2">
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
          <p className="text-sm text-[var(--color-text-muted)] italic">
            * Prices shown are starting points. Final quotes depend on event duration, location, and additional requirements. All prices exclude VAT.
          </p>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-16 md:py-24 border-b border-[var(--color-border-hairline)]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col gap-10">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[var(--color-text-main)]">Add-ons</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {addons.map((addon) => (
              <div key={addon.name} className="flex flex-col gap-2 p-6 border border-[var(--color-border-hairline)] rounded-2xl">
                <h3 className="text-base font-semibold text-[var(--color-text-main)]">{addon.name}</h3>
                <p className="text-[14px] text-[var(--color-text-muted)] leading-relaxed">{addon.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's always included */}
      <section className="py-16 md:py-24 border-b border-[var(--color-border-hairline)]">
        <div className="max-w-[900px] mx-auto px-6 md:px-12 flex flex-col gap-8">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[var(--color-text-main)]">Always Included</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              "Professional full-frame camera + backup",
              "Consistent colour grading and editing",
              "Private online gallery delivery",
              "Full corporate usage rights",
              "Shareable link for internal distribution",
              "Response to your inquiry within 24 hours",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-[var(--color-text-muted)] text-[15px] leading-relaxed">
                <span className="mt-1.5 shrink-0 w-4 h-4 rounded-full bg-[var(--color-accent)] opacity-70" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-[#DDE7F0] text-[var(--color-text-main)] flex justify-center text-center">
        <div className="max-w-[700px] w-full px-6 flex flex-col gap-8 items-center">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1]">Get a Custom Quote</h2>
          <p className="text-xl opacity-80 font-light">
            Tell me about your event — date, location, and any specific requirements. I'll send you a clear quote within 24 hours.
          </p>
          <Link href="/contact" className="bg-[var(--color-text-main)] text-white px-10 py-4 text-base font-semibold transition-colors hover:bg-[var(--color-accent-hover)] rounded-2xl">
            Request a Quote
          </Link>
        </div>
      </section>
    </>
  );
}
