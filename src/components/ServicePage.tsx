import Link from "next/link";
import { portfolioEvents } from "@/data/portfolio";

export interface ServicePageProps {
  hero: {
    h1: string;
    subtitle: string;
  };
  intro: string;
  whatYouGet: string[];
  howItWorks: { step: string; desc: string }[];
  faq: { q: string; a: string }[];
  testimonial?: { quote: string; name: string; role: string };
  relatedCategories: string[];
  schema: object;
}

export default function ServicePage({
  hero,
  intro,
  whatYouGet,
  howItWorks,
  faq,
  testimonial,
  relatedCategories,
  schema,
}: ServicePageProps) {
  // Pull relevant portfolio items (EN only; pick first 6 matching categories)
  const related = portfolioEvents
    .filter((e) => relatedCategories.some((cat) => e.category.en.toLowerCase().includes(cat.toLowerCase())))
    .slice(0, 6);

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero */}
      <section className="pt-32 md:pt-44 pb-16 md:pb-24 bg-transparent border-b border-[var(--color-border-hairline)]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col gap-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[var(--color-text-main)] max-w-4xl leading-[1.08]">
            {hero.h1}
          </h1>
          <p className="text-lg md:text-xl text-[var(--color-text-muted)] max-w-[60ch] font-normal leading-relaxed">
            {hero.subtitle}
          </p>
          <div className="flex flex-wrap gap-4 mt-4">
            <Link href="/contact" className="bg-[var(--color-accent)] text-white px-8 py-3.5 rounded-2xl text-[15px] font-semibold transition-colors hover:bg-[var(--color-accent-hover)]">
              Check Availability
            </Link>
            <Link href="/portfolio" className="border border-[var(--color-border-hairline)] text-[var(--color-text-main)] px-8 py-3.5 rounded-2xl text-[15px] font-semibold transition-colors hover:border-[var(--color-text-main)]">
              View Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonial snippet */}
      {testimonial && (
        <section className="py-12 md:py-16 bg-[#F5F8FB] border-b border-[var(--color-border-hairline)]">
          <div className="max-w-[900px] mx-auto px-6 md:px-12 text-center flex flex-col gap-4">
            <p className="text-xl md:text-2xl font-light text-[var(--color-text-main)] leading-relaxed italic">
              &ldquo;{testimonial.quote}&rdquo;
            </p>
            <p className="text-[14px] text-[var(--color-text-muted)] font-medium">
              — {testimonial.name}, {testimonial.role}
            </p>
          </div>
        </section>
      )}

      {/* Intro */}
      <section className="py-16 md:py-24 border-b border-[var(--color-border-hairline)]">
        <div className="max-w-[900px] mx-auto px-6 md:px-12">
          <p className="text-[17px] md:text-lg text-[var(--color-text-muted)] leading-[1.85]">{intro}</p>
        </div>
      </section>

      {/* What you get */}
      <section className="py-16 md:py-24 border-b border-[var(--color-border-hairline)]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col gap-10">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[var(--color-text-main)]">What You Get</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {whatYouGet.map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-[var(--color-text-muted)] text-[15px] md:text-base leading-relaxed">
                <span className="mt-1.5 shrink-0 w-4 h-4 rounded-full bg-[var(--color-accent)] opacity-70" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 md:py-24 border-b border-[var(--color-border-hairline)]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col gap-10">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[var(--color-text-main)]">How It Works</h2>
          <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {howItWorks.map((step, i) => (
              <li key={i} className="flex flex-col gap-3">
                <span className="text-4xl font-semibold text-[var(--color-accent)] opacity-40 leading-none">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="text-lg font-semibold text-[var(--color-text-main)]">{step.step}</h3>
                <p className="text-[15px] text-[var(--color-text-muted)] leading-relaxed">{step.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Portfolio highlights */}
      {related.length > 0 && (
        <section className="py-16 md:py-24 border-b border-[var(--color-border-hairline)]">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col gap-10">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[var(--color-text-main)]">Portfolio Highlights</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((event) => (
                <Link
                  key={event.slug}
                  href={`/portfolio/${event.slug}`}
                  className="group flex flex-col gap-3 border border-[var(--color-border-hairline)] rounded-2xl overflow-hidden hover:border-[var(--color-text-muted)] transition-colors"
                >
                  <div className="relative aspect-[3/2] bg-[var(--color-border-hairline)] overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`/images/portfolio/${event.slug}/01.webp`}
                      alt={event.alt_i18n?.en ?? event.title_i18n?.en ?? event.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                  </div>
                  <div className="px-4 pb-4 flex flex-col gap-1">
                    <span className="text-[11px] font-semibold uppercase tracking-widest text-[var(--color-text-muted)]">{event.category.en}</span>
                    <h3 className="text-base font-semibold text-[var(--color-text-main)] leading-snug group-hover:underline underline-offset-2">
                      {event.title_i18n?.en ?? event.title}
                    </h3>
                    {event.location_i18n?.en && (
                      <p className="text-[13px] text-[var(--color-text-muted)]">{event.location_i18n.en}</p>
                    )}
                  </div>
                </Link>
              ))}
            </div>
            <Link href="/portfolio" className="text-[15px] font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text-main)] transition-colors underline underline-offset-4 w-fit">
              View full portfolio →
            </Link>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-16 md:py-24 border-b border-[var(--color-border-hairline)]">
        <div className="max-w-[900px] mx-auto px-6 md:px-12 flex flex-col gap-10">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[var(--color-text-main)]">FAQ</h2>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: faq.map((f) => ({
                  "@type": "Question",
                  name: f.q,
                  acceptedAnswer: { "@type": "Answer", text: f.a },
                })),
              }),
            }}
          />
          <div className="flex flex-col gap-6">
            {faq.map((item, i) => (
              <div key={i} className="flex flex-col gap-2 pb-6 border-b border-[var(--color-border-hairline)] last:border-0">
                <h3 className="text-base md:text-lg font-semibold text-[var(--color-text-main)]">{item.q}</h3>
                <p className="text-[15px] text-[var(--color-text-muted)] leading-relaxed">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-[#DDE7F0] text-[var(--color-text-main)] flex justify-center text-center">
        <div className="max-w-[700px] w-full px-6 flex flex-col gap-8 items-center">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1]">Ready to Book?</h2>
          <p className="text-xl opacity-80 font-light">Send your inquiry — I'll confirm availability and next steps.</p>
          <Link href="/contact" className="bg-[var(--color-text-main)] text-white px-10 py-4 text-base font-semibold transition-colors hover:bg-[var(--color-accent-hover)] rounded-2xl">
            Contact Me
          </Link>
        </div>
      </section>
    </>
  );
}
