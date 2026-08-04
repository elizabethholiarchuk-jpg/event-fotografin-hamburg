import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import fs from "fs";
import path from "path";
import { portfolioEvents } from "@/data/portfolio";
import ImageGallery from "@/components/ImageGallery";
import {
  buildCaseStudyBreadcrumbJsonLd,
  buildImageObjectsJsonLd,
} from "@/lib/schema";

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

  const title = event.title_i18n?.de ?? event.title;
  const location = event.location_i18n?.de ?? "";
  const desc = event.oneLiner_i18n?.de ?? `Eventfotografie von Liza Holiarchuk — ${title}.`;

  return {
    title: `${title}${location ? ` — ${location}` : ""} | Portfolio`,
    description: desc,
    alternates: { 
      canonical: `/portfolio/${slug}`,
      languages: {
        en: `/en/portfolio/${slug}`,
        de: `/portfolio/${slug}`,
        "x-default": `/portfolio/${slug}`,
      },
    },
    openGraph: {
      title: `${title}`,
      description: desc,
      url: `/portfolio/${slug}`,
      images: [{ url: `/images/portfolio/${slug}/01.webp`, width: 1200, height: 800, alt: title }],
    alternateLocale: ["en_US"],
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

export default async function CaseStudyPageDe({ params }: Props) {
  const { slug } = await params;
  const event = portfolioEvents.find((e) => e.slug === slug);
  if (!event) notFound();

  const images = getImages(slug);
  const title = event.title_i18n?.de ?? event.title;
  const location = event.location_i18n?.de ?? "";
  const venue = event.venue_i18n?.de ?? "";
  const category = event.category.de;
  const oneLiner = event.oneLiner_i18n?.de ?? "";
  const altText = event.alt_i18n?.de ?? title;
  const coverImage = images[0] ?? `/images/portfolio/${slug}/01.webp`;

  // Related: same category, different slug
  const related = portfolioEvents
    .filter((e) => e.slug !== slug && e.category.de === event.category.de)
    .slice(0, 3);

  // Build content location string from venue + city
  const contentLocation = [venue, location].filter(Boolean).join(', ');

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildCaseStudyBreadcrumbJsonLd('de', title, slug)) }} />
      {images.length > 0 && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildImageObjectsJsonLd(
          images.map((src) => ({
            src,
            caption: altText,
            name: title,
            contentLocation: contentLocation || undefined,
          })),
        )) }} />
      )}

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
            <h2 className="text-lg font-semibold text-[var(--color-text-main)] tracking-tight">Auf einen Blick</h2>
            <dl className="flex flex-col gap-4 text-[14px]">
              {category && (
                <div className="flex flex-col gap-0.5">
                  <dt className="text-[11px] font-semibold uppercase tracking-widest text-[var(--color-text-muted)]">Event-Art</dt>
                  <dd className="text-[var(--color-text-main)]">{category}</dd>
                </div>
              )}
              {location && (
                <div className="flex flex-col gap-0.5">
                  <dt className="text-[11px] font-semibold uppercase tracking-widest text-[var(--color-text-muted)]">Ort</dt>
                  <dd className="text-[var(--color-text-main)]">{location}</dd>
                </div>
              )}
              {venue && (
                <div className="flex flex-col gap-0.5">
                  <dt className="text-[11px] font-semibold uppercase tracking-widest text-[var(--color-text-muted)]">Location</dt>
                  <dd className="text-[var(--color-text-main)]">{venue}</dd>
                </div>
              )}
              <div className="flex flex-col gap-0.5">
                <dt className="text-[11px] font-semibold uppercase tracking-widest text-[var(--color-text-muted)]">Lieferung</dt>
                <dd className="text-[var(--color-text-main)]">Vollständig bearbeitete Galerie, private Online-Lieferung</dd>
              </div>
              <div className="flex flex-col gap-0.5">
                <dt className="text-[11px] font-semibold uppercase tracking-widest text-[var(--color-text-muted)]">Nutzungsrechte</dt>
                <dd className="text-[var(--color-text-main)]">Unternehmenskommunikation, PR, Social Media</dd>
              </div>
            </dl>
            <Link href="/kontakt" className="mt-4 bg-[var(--color-accent)] text-white px-6 py-3 rounded-xl text-[14px] font-semibold transition-colors hover:bg-[var(--color-accent-hover)] text-center">
              Ähnliche Begleitung anfragen
            </Link>
          </div>

          {/* Overview */}
          <div className="md:col-span-2 flex flex-col gap-6">
            <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color-text-main)] tracking-tight">Überblick</h2>
            {oneLiner && (
              <p className="text-[17px] text-[var(--color-text-muted)] leading-[1.85]">{oneLiner}</p>
            )}
            <p className="text-[17px] text-[var(--color-text-muted)] leading-[1.85]">
              Diese Galerie dokumentiert das gesamte Event von der Ankunft bis zum Abschluss — festgehalten wurden wichtige Momente auf der Bühne, im Publikum, beim Networking, sowie Branding und das Team. Die Bilder wurden innerhalb von 48 Stunden nach dem Event in einer privaten Online-Galerie bereitgestellt.
            </p>
            <div className="flex flex-col gap-2 mt-2">
              <h3 className="text-base font-semibold text-[var(--color-text-main)]">Was festgehalten wurde</h3>
              <ul className="flex flex-col gap-1.5">
                {[
                  "Bühne und Präsentationen",
                  "Publikum und Reaktionen",
                  "Networking und Interaktionen",
                  "Branding, Location und Atmosphäre",
                  "Team- und Speaker-Porträts",
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
            <h2 className="text-2xl md:text-3xl font-semibold text-[var(--color-text-main)] tracking-tight">Galerie</h2>
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
            <h2 className="text-2xl font-semibold text-[var(--color-text-main)]">Weitere {category}-Projekte</h2>
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
                      alt={e.alt_i18n?.de ?? e.title_i18n?.de ?? e.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                  </div>
                  <div className="px-4 pb-4 flex flex-col gap-1">
                    <span className="text-[11px] font-semibold uppercase tracking-widest text-[var(--color-text-muted)]">{e.category.de}</span>
                    <h3 className="text-base font-semibold text-[var(--color-text-main)] leading-snug group-hover:underline underline-offset-2">
                      {e.title_i18n?.de ?? e.title}
                    </h3>
                    {e.location_i18n?.de && <p className="text-[13px] text-[var(--color-text-muted)]">{e.location_i18n.de}</p>}
                  </div>
                </Link>
              ))}
            </div>
            <Link href="/portfolio" className="text-[15px] font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text-main)] transition-colors underline underline-offset-4 w-fit">
              Gesamtes Portfolio ansehen →
            </Link>
          </div>
        </section>
      )}

      {/* FAQ */}
      <section className="py-16 md:py-24 border-b border-[var(--color-border-hairline)]">
        <div className="max-w-[900px] mx-auto px-6 md:px-12 flex flex-col gap-8">
          <h2 className="text-2xl font-semibold text-[var(--color-text-main)]">Häufig gestellte Fragen</h2>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: [
                  { "@type": "Question", name: "Wie buche ich eine ähnliche Eventbegleitung?", acceptedAnswer: { "@type": "Answer", text: "Nutzen Sie das Kontaktformular, um Ihr Event zu beschreiben — Datum, Ort und Art. Sie erhalten innerhalb von 24 Stunden ein Angebot." } },
                  { "@type": "Question", name: "Wie schnell werden die Fotos geliefert?", acceptedAnswer: { "@type": "Answer", text: "Die vollständig bearbeitete Galerie wird in der Regel innerhalb von 48 Stunden geliefert. Same-Day Highlights sind auf Anfrage möglich." } },
                  { "@type": "Question", name: "Sind die Nutzungsrechte inklusive?", acceptedAnswer: { "@type": "Answer", text: "Ja. Die vollen Nutzungsrechte für die Unternehmenskommunikation — Website, Social Media, PR und interne Berichte — sind bei jedem Projekt inklusive." } },
                ],
              }),
            }}
          />
          {[
            { q: "Wie buche ich eine ähnliche Eventbegleitung?", a: "Nutzen Sie das Kontaktformular, um Ihr Event zu beschreiben — Datum, Ort und Art. Sie erhalten innerhalb von 24 Stunden ein Angebot." },
            { q: "Wie schnell werden die Fotos geliefert?", a: "Die vollständig bearbeitete Galerie wird in der Regel innerhalb von 48 Stunden geliefert. Same-Day Highlights sind auf Anfrage möglich." },
            { q: "Sind die Nutzungsrechte inklusive?", a: "Ja. Die vollen Nutzungsrechte für die Unternehmenskommunikation — Website, Social Media, PR und interne Berichte — sind bei jedem Projekt inklusive." },
            { q: "Begleiten Sie auch ähnliche Events außerhalb von Hamburg?", a: "Ja. Ich begleite regelmäßig Events in ganz Deutschland und Europa. Reisekosten werden pro Projekt kalkuliert." },
            { q: "In welchem Format werden die Bilder geliefert?", a: "Hochauflösende JPEG-Dateien (typischerweise 20–50 MP), die über eine private Online-Galerie bereitgestellt werden. TIFF auf Anfrage." },
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
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1]">Diesen Stil der Begleitung anfragen</h2>
          <p className="text-xl opacity-80 font-light">Senden Sie Ihre Anfrage — ich bestätige die Verfügbarkeit und die nächsten Schritte.</p>
          <Link href="/kontakt" className="bg-[var(--color-text-main)] text-white px-10 py-4 text-base font-semibold transition-colors hover:bg-[var(--color-accent-hover)] rounded-2xl">
            Kontakt aufnehmen
          </Link>
        </div>
      </section>
    </>
  );
}
