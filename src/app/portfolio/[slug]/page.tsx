import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import fs from "fs";
import path from "path";
import { portfolioEvents } from "@/data/portfolio";
import ImageGallery from "@/components/ImageGallery";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return portfolioEvents.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const event = portfolioEvents.find((e) => e.slug === slug);
  if (!event) return {};

  const title = event.title_i18n?.en ?? event.title;
  const location = event.location_i18n?.en ?? "";
  const desc = event.oneLiner_i18n?.en ?? `Event photography by Liza Holiarchuk — ${title}.`;

  return {
    title: `${title}${location ? ` — ${location}` : ""} | Portfolio`,
    description: desc,
    alternates: { canonical: `/portfolio/${slug}` },
    openGraph: {
      title: `${title} | Liza Holiarchuk Event Photography`,
      description: desc,
      url: `/portfolio/${slug}`,
      images: [{ url: `/images/portfolio/${slug}/01.webp`, width: 1200, height: 800, alt: title }],
    },
  };
}

function getImages(slug: string): string[] {
  const dirPath = path.join(process.cwd(), "public/images/portfolio", slug);
  if (!fs.existsSync(dirPath)) return [];
  return fs
    .readdirSync(dirPath)
    .filter((f) => /\.(jpe?g|png|webp)$/i.test(f))
    .sort()
    .map((f) => `/images/portfolio/${slug}/${f}`);
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const event = portfolioEvents.find((e) => e.slug === slug);
  if (!event) notFound();

  const images = getImages(slug);
  const title = event.title_i18n?.en ?? event.title;
  const location = event.location_i18n?.en ?? "";
  const venue = event.venue_i18n?.en ?? "";
  const category = event.category.en;
  const oneLiner = event.oneLiner_i18n?.en ?? "";
  const altText = event.alt_i18n?.en ?? title;
  const coverImage = images[0] ?? `/images/portfolio/${slug}/01.webp`;

  // Related: same category, different slug
  const related = portfolioEvents
    .filter((e) => e.slug !== slug && e.category.en === event.category.en)
    .slice(0, 3);

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://www.event-fotografin-hamburg.de" },
      { "@type": "ListItem", position: 2, name: "Portfolio", item: "https://www.event-fotografin-hamburg.de/portfolio" },
      { "@type": "ListItem", position: 3, name: title, item: `https://www.event-fotografin-hamburg.de/portfolio/${slug}` },
    ],
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />

      {/* Hero image */}
      <section className="pt-[80px] relative bg-[var(--color-dark-bg)]">
        <div className="relative aspect-[21/9] max-h-[600px] overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={coverImage}
            alt={altText}
            className="w-full h-full object-cover opacity-90"
            priority-hint="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 px-6 md:px-12 pb-10 max-w-[1200px] mx-auto">
            <div className="flex flex-col gap-3">
              <span className="text-[12px] font-semibold uppercase tracking-widest text-white/70">{category}{location ? ` — ${location}` : ""}</span>
              <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-white leading-[1.08] max-w-[80ch]">
                {title}
              </h1>
              {venue && <p className="text-white/70 text-base">{venue}</p>}
            </div>
          </div>
        </div>
      </section>

      {/* Quick facts + overview */}
      <section className="py-16 md:py-24 border-b border-[var(--color-border-hairline)]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 grid md:grid-cols-3 gap-12 md:gap-16">
          {/* Quick facts */}
          <div className="flex flex-col gap-6">
            <h2 className="text-lg font-semibold text-[var(--color-text-main)] tracking-tight">Quick Facts</h2>
            <dl className="flex flex-col gap-4 text-[14px]">
              {category && (
                <div className="flex flex-col gap-0.5">
                  <dt className="text-[11px] font-semibold uppercase tracking-widest text-[var(--color-text-muted)]">Event Type</dt>
                  <dd className="text-[var(--color-text-main)]">{category}</dd>
                </div>
              )}
              {location && (
                <div className="flex flex-col gap-0.5">
                  <dt className="text-[11px] font-semibold uppercase tracking-widest text-[var(--color-text-muted)]">Location</dt>
                  <dd className="text-[var(--color-text-main)]">{location}</dd>
                </div>
              )}
              {venue && (
                <div className="flex flex-col gap-0.5">
                  <dt className="text-[11px] font-semibold uppercase tracking-widest text-[var(--color-text-muted)]">Venue</dt>
                  <dd className="text-[var(--color-text-main)]">{venue}</dd>
                </div>
              )}
              <div className="flex flex-col gap-0.5">
                <dt className="text-[11px] font-semibold uppercase tracking-widest text-[var(--color-text-muted)]">Deliverables</dt>
                <dd className="text-[var(--color-text-main)]">Fully edited gallery, private online delivery</dd>
              </div>
              <div className="flex flex-col gap-0.5">
                <dt className="text-[11px] font-semibold uppercase tracking-widest text-[var(--color-text-muted)]">Usage</dt>
                <dd className="text-[var(--color-text-main)]">Corporate communication, PR, social media</dd>
              </div>
            </dl>
            <Link href="/contact" className="mt-4 bg-[var(--color-accent)] text-white px-6 py-3 rounded-xl text-[14px] font-semibold transition-colors hover:bg-[var(--color-accent-hover)] text-center">
              Book Similar Coverage
            </Link>
          </div>

          {/* Overview */}
          <div className="md:col-span-2 flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color-text-main)] tracking-tight">Overview</h2>
            {oneLiner && (
              <p className="text-[17px] text-[var(--color-text-muted)] leading-[1.85]">{oneLiner}</p>
            )}
            <p className="text-[17px] text-[var(--color-text-muted)] leading-[1.85]">
              This gallery documents the full event from arrival to closing — capturing key moments on stage, audience and networking, branding, and team. Images were delivered via a private online gallery within 48 hours of the event.
            </p>
            <div className="flex flex-col gap-2 mt-2">
              <h3 className="text-base font-semibold text-[var(--color-text-main)]">What was captured</h3>
              <ul className="flex flex-col gap-1.5">
                {[
                  "Stage and presentation coverage",
                  "Audience and reaction shots",
                  "Networking and social moments",
                  "Branding, venue, and environment",
                  "Team and speaker portraits",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-[14px] text-[var(--color-text-muted)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] opacity-60 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Full gallery */}
      {images.length > 0 && (
        <section className="py-12 md:py-20 border-b border-[var(--color-border-hairline)]">
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col gap-8">
            <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color-text-main)] tracking-tight">Gallery</h2>
            <ImageGallery
              images={images.map((src) => ({ src, alt: altText }))}
              gridClassName="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full"
              itemClassName="relative aspect-[3/2] overflow-hidden bg-transparent group cursor-zoom-in w-full block rounded-2xl shadow-sm border border-gray-100"
            />
          </div>
        </section>
      )}

      {/* Related case studies */}
      {related.length > 0 && (
        <section className="py-16 md:py-24 border-b border-[var(--color-border-hairline)]">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col gap-8">
            <h2 className="text-2xl font-semibold text-[var(--color-text-main)]">More {category} Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((e) => (
                <Link
                  key={e.slug}
                  href={`/portfolio/${e.slug}`}
                  className="group flex flex-col gap-3 border border-[var(--color-border-hairline)] rounded-2xl overflow-hidden hover:border-[var(--color-text-muted)] transition-colors"
                >
                  <div className="relative aspect-[3/2] bg-[var(--color-border-hairline)] overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={`/images/portfolio/${e.slug}/01.webp`}
                      alt={e.alt_i18n?.en ?? e.title_i18n?.en ?? e.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                  </div>
                  <div className="px-4 pb-4 flex flex-col gap-1">
                    <span className="text-[11px] font-semibold uppercase tracking-widest text-[var(--color-text-muted)]">{e.category.en}</span>
                    <h3 className="text-base font-semibold text-[var(--color-text-main)] leading-snug group-hover:underline underline-offset-2">
                      {e.title_i18n?.en ?? e.title}
                    </h3>
                    {e.location_i18n?.en && <p className="text-[13px] text-[var(--color-text-muted)]">{e.location_i18n.en}</p>}
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
        <div className="max-w-[900px] mx-auto px-6 md:px-12 flex flex-col gap-8">
          <h2 className="text-2xl font-semibold text-[var(--color-text-main)]">Frequently Asked Questions</h2>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: [
                  { "@type": "Question", name: "How do I book similar event photography?", acceptedAnswer: { "@type": "Answer", text: "Use the contact form to describe your event — date, location, and type. You'll receive a quote within 24 hours." } },
                  { "@type": "Question", name: "How quickly are photos delivered?", acceptedAnswer: { "@type": "Answer", text: "The full edited gallery is typically delivered within 48 business hours. Same-day highlights are available on request." } },
                  { "@type": "Question", name: "Are usage rights included?", acceptedAnswer: { "@type": "Answer", text: "Yes. Full usage rights for corporate communication — website, social media, PR, and internal reports — are included with every project." } },
                ],
              }),
            }}
          />
          {[
            { q: "How do I book similar event photography?", a: "Use the contact form to describe your event — date, location, and type. You'll receive a quote within 24 hours." },
            { q: "How quickly are photos delivered?", a: "The full edited gallery is typically delivered within 48 business hours. Same-day highlights are available on request." },
            { q: "Are usage rights included?", a: "Yes. Full usage rights for corporate communication — website, social media, PR, and internal reports — are included with every project." },
            { q: "Can you cover similar events outside Hamburg?", a: "Yes. I regularly cover events across Germany and Europe. Travel costs are quoted per project." },
            { q: "What format are the delivered images?", a: "High-resolution JPEG files (typically 20–50 MP), delivered via a private online gallery. TIFF on request." },
          ].map((item, i) => (
            <div key={i} className="flex flex-col gap-2 pb-6 border-b border-[var(--color-border-hairline)] last:border-0">
              <h3 className="text-base font-semibold text-[var(--color-text-main)]">{item.q}</h3>
              <p className="text-[15px] text-[var(--color-text-muted)] leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-[#DDE7F0] text-[var(--color-text-main)] flex justify-center text-center">
        <div className="max-w-[700px] w-full px-6 flex flex-col gap-8 items-center">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1]">Book This Style of Coverage</h2>
          <p className="text-xl opacity-80 font-light">Send your inquiry — I'll confirm availability and next steps.</p>
          <Link href="/contact" className="bg-[var(--color-text-main)] text-white px-10 py-4 text-base font-semibold transition-colors hover:bg-[var(--color-accent-hover)] rounded-2xl">
            Contact Me
          </Link>
        </div>
      </section>
    </>
  );
}
