import { Metadata } from "next";
import Link from "next/link";
import { buildPricingBreadcrumbJsonLd, buildFaqPageJsonLd } from "@/lib/schema";
import { getDictionary } from "@/i18n";

export const metadata: Metadata = {
  title: "Preise & Pakete — Eventfotografie Hamburg | Liza Holiarchuk",
  description:
    "Eventfotografie in Hamburg ab 1.000 €. Halbtags- und Ganztagspakete, transparente Preise, individuelles Angebot innerhalb von 24 Stunden.",
  alternates: {
    canonical: "https://www.event-fotografin-hamburg.de/de/pricing",
    languages: {
      en: "/pricing",
      de: "/de/pricing",
      "x-default": "/pricing",
    },
  },
  openGraph: {
    title: "Preise & Pakete — Eventfotografie Hamburg | Liza Holiarchuk",
    url: "/de/pricing",
  },
};

export default function GermanPricingPage() {
  const t = getDictionary("de");
  const p = t.pricing!;

  const packages = [
    {
      name: p.halbtags.name,
      duration: p.halbtags.duration,
      range: p.halbtags.range,
      ideal: p.halbtags.ideal,
      includes: p.halbtags.includes,
      highlight: false,
    },
    {
      name: p.ganztags.name,
      duration: p.ganztags.duration,
      range: p.ganztags.range,
      ideal: p.ganztags.ideal,
      includes: p.ganztags.includes,
      highlight: true,
    },
    {
      name: p.mehrtagig.name,
      duration: p.mehrtagig.duration,
      range: p.mehrtagig.range,
      ideal: p.mehrtagig.ideal,
      includes: p.mehrtagig.includes,
      highlight: false,
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildPricingBreadcrumbJsonLd('de')),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildFaqPageJsonLd(p.faq.items)),
        }}
      />

      {/* Hero */}
      <section className="pt-32 md:pt-44 pb-16 md:pb-24 border-b border-[var(--color-border-hairline)]">
        <div className="max-w-[1000px] mx-auto px-6 md:px-12 flex flex-col gap-6">
          <nav aria-label="Breadcrumb" className="text-[13px] text-[var(--color-text-muted)] font-light">
            <Link href="/de" className="hover:text-[var(--color-accent)] transition-colors">{t.header.home}</Link>
            <span className="mx-2" aria-hidden="true">›</span>
            <span className="text-[var(--color-text-main)]">{p.hero.title}</span>
          </nav>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[var(--color-text-main)] leading-[1.08]">
            {p.hero.title}
          </h1>
          <p className="text-xl text-[var(--color-text-muted)] max-w-[55ch] font-normal leading-relaxed">
            {p.hero.subtitle}
          </p>
          <p className="text-[15px] text-[var(--color-text-muted)] leading-relaxed max-w-[65ch]">
            {p.heroDesc}
          </p>
        </div>
      </section>

      {/* Packages */}
      <section className="py-16 md:py-24 border-b border-[var(--color-border-hairline)]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[var(--color-text-main)]">
              {p.packagesTitle}
            </h2>
            <p className="text-[14px] text-[var(--color-text-muted)]">
              {p.packagesSub}
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
                    Am häufigsten gebucht
                  </span>
                )}
                <div className="flex flex-col gap-1">
                  <h3 className="text-2xl font-semibold text-[var(--color-text-main)]">{pkg.name}</h3>
                  <p className="text-sm text-[var(--color-text-muted)]">{pkg.duration}</p>
                </div>
                <div className="flex flex-col gap-0.5">
                  <p className="text-[11px] font-semibold uppercase tracking-widest text-[var(--color-text-muted)]">Typisches Budget</p>
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
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[var(--color-text-main)]">{p.addons.title}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {p.addons.items.map((addon) => (
              <div
                key={addon.name}
                className="flex flex-col gap-2 p-6 border border-[var(--color-border-hairline)] rounded-2xl"
              >
                <h3 className="text-base font-semibold text-[var(--color-text-main)]">{addon.name}</h3>
                {addon.desc && <p className="text-[14px] text-[var(--color-text-muted)] leading-relaxed">{addon.desc}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Always included */}
      <section className="py-16 md:py-24 border-b border-[var(--color-border-hairline)]">
        <div className="max-w-[900px] mx-auto px-6 md:px-12 flex flex-col gap-8">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[var(--color-text-main)]">
            {p.included.title}
          </h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {p.included.items.map((item) => (
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
            {p.faq.title}
          </h2>
          <div className="flex flex-col gap-8">
            {p.faq.items.map((item, i) => (
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
            {p.cta.title}
          </h2>
          <p className="text-xl opacity-80 font-light max-w-[50ch]">
            {p.cta.desc}
          </p>
          <Link
            href="/de/kontakt"
            className="bg-[var(--color-text-main)] text-white px-10 py-4 text-base font-semibold transition-colors hover:bg-[var(--color-accent-hover)] rounded-2xl"
          >
            {p.cta.btn}
          </Link>
          <p className="text-[13px] opacity-60 font-normal">{p.cta.reply}</p>
        </div>
      </section>
    </>
  );
}
