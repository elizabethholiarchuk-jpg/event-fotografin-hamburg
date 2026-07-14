import { Metadata } from "next";
import Link from "next/link";
import SafeImage from "@/components/SafeImage";
import ImageGallery from "@/components/ImageGallery";

export const metadata: Metadata = {
  title: "Eventfotograf Hamburg – Liza Holiarchuk | Messen & Konferenzen",
  description:
    "Eventfotografin in Hamburg für Konferenzen, Messen und Firmenevents. Bearbeitete Galerie in der Regel in 2 Werktagen, Highlights am selben Tag auf Wunsch. Jetzt anfragen.",
  alternates: {
    canonical: "/de/eventfotograf-hamburg",
    languages: {
      en: "/event-photographer-hamburg",
      de: "/de/eventfotograf-hamburg",
      "x-default": "/event-photographer-hamburg",
    },
  },
  openGraph: {
    title: "Eventfotograf Hamburg – Liza Holiarchuk | Messen & Konferenzen",
    description:
      "Eventfotografin in Hamburg für Konferenzen, Messen und Firmenevents. Bearbeitete Galerie in der Regel in 2 Werktagen, Highlights am selben Tag auf Wunsch. Jetzt anfragen.",
    url: "/de/eventfotograf-hamburg",
    locale: "de_DE",
    images: [
      {
        url: "/images/services/event-photographer-hamburg-cover.webp",
        width: 1200,
        height: 630,
        alt: "Eventfotograf Hamburg — Liza Holiarchuk",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      {
        url: "/images/services/event-photographer-hamburg-cover.webp",
        width: 1200,
        height: 630,
        alt: "Eventfotograf Hamburg — Liza Holiarchuk",
      },
    ],
  },
};

export default function EventFotografHamburg() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Eventfotograf Hamburg",
    "description":
      "Eventfotografin in Hamburg für Konferenzen, Messen und Firmenevents. Bearbeitete Galerie in der Regel in 2 Werktagen, Highlights am selben Tag auf Wunsch. Jetzt anfragen.",
    "url": "https://www.event-fotografin-hamburg.de/de/eventfotograf-hamburg",
    "provider": { "@id": "https://www.event-fotografin-hamburg.de/#business" },
    "areaServed": [
      { "@type": "City", "name": "Hamburg" },
      { "@type": "Country", "name": "Germany" }
    ],
    "serviceType": "Event Photography",
    "image": "https://www.event-fotografin-hamburg.de/images/services/event-photographer-hamburg-cover.webp"
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Start", "item": "https://www.event-fotografin-hamburg.de/de" },
      { "@type": "ListItem", "position": 2, "name": "Eventfotograf Hamburg", "item": "https://www.event-fotografin-hamburg.de/de/eventfotograf-hamburg" }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Was kostet ein Eventfotograf in Hamburg?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Für Firmenevents in Hamburg liegen realistische Preise bei etwa 450–600 € netto für 2 Stunden, 750–1.150 € für einen halben Tag und 1.350–2.050 € für einen ganzen Tag – jeweils inklusive Bearbeitung und Nutzungsrechten. Den genauen Preis stimme ich pro Projekt ab. Schreiben Sie mir mit den Eckdaten Ihres Events, und Sie erhalten ein konkretes Angebot."
        }
      },
      {
        "@type": "Question",
        "name": "Wie läuft der Buchungsprozess ab?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Anfrage → kurzes Briefing → Angebot & Bestätigung → Event → Lieferung."
        }
      },
      {
        "@type": "Question",
        "name": "Was brauchen Sie von uns, damit vor Ort alles reibungslos läuft?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Einen groben Zeitplan bzw. das Programm, eine Ansprechperson, Zugang/Badge und 3–5 Must-haves (z. B. Speaker, VIPs, Branding, Teamfotos)."
        }
      },
      {
        "@type": "Question",
        "name": "Wann erhalten wir die Fotos?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "In der Regel innerhalb von 2 Werktagen; Same-Day-Highlights auf Wunsch (eine kuratierte Auswahl für die schnelle Kommunikation)."
        }
      },
      {
        "@type": "Question",
        "name": "Wie erhalten wir die Bilder und wie können wir sie teilen?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Über eine private Online-Galerie; der Link ist intern und mit Ihren Gästen teilbar, auf Wunsch passwortgeschützt."
        }
      },
      {
        "@type": "Question",
        "name": "Welche Nutzungsrechte sind enthalten?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Umfassende Nutzungsrechte für Ihre Unternehmenskommunikation (Website, Social Media, PR) sind enthalten; Details je nach Anwendungsfall."
        }
      },
      {
        "@type": "Question",
        "name": "Können Sie parallele Bühnen oder Tracks abdecken?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja. Für größere Events mit parallelen Programmpunkten lässt sich ein zweiter Fotograf organisieren."
        }
      },
      {
        "@type": "Question",
        "name": "Arbeiten Sie auch außerhalb von Hamburg?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Ja – Hamburg und Umgebung sowie deutschland- und europaweit nach Absprache. Reisekosten werden separat und transparent kalkuliert."
        }
      }
    ]
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* 1. HERO */}
      <section className="relative w-full min-h-[92vh] md:min-h-screen flex items-end justify-start bg-[var(--color-dark-bg)] overflow-hidden pb-16 md:pb-24 pt-40 md:pt-48">
        <SafeImage
          src="/images/services/event-photographer-hamburg-cover.webp"
          alt="Eventfotograf Hamburg — panel discussion at a B2B conference in Hamburg"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 md:px-12 text-white flex flex-col gap-10 md:gap-12">
          <div className="max-w-[1100px] flex flex-col gap-6 md:gap-8">
            <h1 className="text-5xl md:text-7xl lg:text-[100px] font-medium tracking-tight leading-[1]">
              Eventfotograf Hamburg
            </h1>
            <p className="text-2xl md:text-4xl font-light leading-snug text-white/95 max-w-[45ch]">
              Fotografie für B2B-Konferenzen, Messen und Firmenevents. Hamburg & europaweit.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-10 mt-6 w-full sm:w-auto">
            <Link
              href="/de/kontakt"
              title="Eventfotograf Hamburg Anfrage stellen"
              className="bg-white text-[var(--color-dark-bg)] px-12 py-5 text-sm tracking-widest uppercase font-semibold transition-colors hover:bg-gray-200 text-center rounded-2xl w-full sm:w-auto"
            >
              Verfügbarkeit anfragen
            </Link>
            <Link
              href="/de/portfolio"
              title="Eventfotografie Portfolio ansehen"
              className="text-white text-sm tracking-widest uppercase font-semibold transition-all hover:text-white/70 underline-offset-8 decoration-1 underline text-center w-full sm:w-auto"
            >
              Portfolio ansehen
            </Link>
          </div>
        </div>
      </section>

      {/* 2. TRUST */}
      <section className="py-14 md:py-20 bg-transparent border-b border-[var(--color-border-hairline)] overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col gap-8 md:gap-12">
          <p className="text-[var(--color-text-muted)] font-medium text-sm text-center">
            Vertrauen von Teams bei
          </p>
          <div className="flex flex-row flex-nowrap overflow-x-auto md:overflow-visible items-center justify-start md:justify-center gap-6 md:gap-12 pb-4 md:pb-0 brightness-0 opacity-60 w-full no-scrollbar">
            {([1, 2, 3, 5, 6, 7, 8] as const).map((num) => {
              const clientLogoAlts: Record<number, string> = {
                1: "Plug and Play Tech Center Hamburg logo",
                2: "flair HR software logo",
                3: "Lloyd's Register logo",
                5: "Shell Global Solutions logo",
                6: "FEMS logo",
                7: "CLAAS logo",
                8: "Factory Hammerbrooklyn logo",
              };
              return (
                <div key={num} className="relative h-8 md:h-10 w-20 md:w-28 shrink-0">
                  <SafeImage
                    src={`/images/home/03-client-logos/0${num}-logo.webp`}
                    alt={clientLogoAlts[num]}
                    fill
                    sizes="(max-width: 768px) 80px, 112px"
                    className="object-contain"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. VALUE BLOCKS */}
      <section className="py-14 md:py-24 bg-transparent">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col gap-12 md:gap-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
            <div className="flex flex-col gap-6 group">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[20px] border border-gray-100 shadow-sm">
                <SafeImage src="/images/home/04-value-blocks/02-marketing.webp" alt="Marketing & Social" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.02]" />
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-[var(--color-text-main)]">Marketing & Social</h3>
                <p className="text-[var(--color-text-muted)] text-[17px] font-normal leading-relaxed">Bildmaterial für Website, Kampagnen, LinkedIn und Employer Branding — markenkonsistent und sofort nutzbar.</p>
              </div>
            </div>
            <div className="flex flex-col gap-6 group">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[20px] border border-gray-100 shadow-sm">
                <SafeImage src="/images/home/04-value-blocks/01-presse.webp" alt="Presse & Event-Dokumentation" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.02]" />
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-[var(--color-text-main)]">Presse & Dokumentation</h3>
                <p className="text-[var(--color-text-muted)] text-[17px] font-normal leading-relaxed">Keynotes, Panels, Publikum, Networking, Branding — vollständig, professionell, PR-tauglich.</p>
              </div>
            </div>
            <div className="flex flex-col gap-6 group">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[20px] border border-gray-100 shadow-sm">
                <SafeImage src="/images/home/04-value-blocks/03-intern.webp" alt="Interne Kommunikation" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.02]" />
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-[var(--color-text-main)]">Interne Kommunikation</h3>
                <p className="text-[var(--color-text-muted)] text-[17px] font-normal leading-relaxed">Team-Momente, Kultur, Behind-the-Scenes — ideal für Intranet, Updates, Recaps und Stakeholder-Kommunikation.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-16 md:py-24 border-t border-[var(--color-border-hairline)] bg-transparent">
        <div className="max-w-[900px] mx-auto px-6 md:px-12">
          <p className="text-[17px] md:text-lg text-[var(--color-text-muted)] leading-[1.85]">
            Ich bin Liza Holiarchuk, Eventfotografin in Hamburg und offizielle Fotografin der Hamburg Messe und Congress GmbH. Ich fotografiere B2B-Events – Konferenzen, Messen und Firmenveranstaltungen – vom eintägigen Panel bis zur mehrtägigen Messe. Bevor ich mit der Kamera gearbeitet habe, habe ich selbst Events organisiert. Ich weiß deshalb, worauf es an einem vollen Veranstaltungstag ankommt: die richtigen Menschen, die richtigen Momente, keine verpassten Highlights. Marketing- und PR-Teams sowie Eventagenturen in Deutschland und Europa buchen mich, wenn sie hochwertige, markenkonsistente Bilder brauchen – schnell geliefert. Ob Hamburg Messe, ein Kongresszentrum in Berlin oder eine Location in Mailand, Amsterdam oder Kopenhagen: Ich bin dort, wo Ihre Veranstaltung stattfindet.
          </p>
        </div>
      </section>

      {/* 4. SCHWERPUNKTE (SERVICES) */}
      <section className="py-14 md:py-24 bg-transparent border-t border-[var(--color-border-hairline)]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row justify-between gap-10 lg:gap-24">
          <div className="w-full lg:w-1/3 flex flex-col gap-4">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[var(--color-text-main)]">Meine Schwerpunkte</h2>
          </div>
          <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
            <div className="flex flex-col gap-3">
              {/* NOTE: Link to /de/konferenzfotograf-hamburg goes here once the page ships */}
              <h3 className="text-xl font-semibold text-[var(--color-text-main)]">Konferenzfotografie</h3>
              <p className="text-[var(--color-text-muted)] text-[17px] font-normal leading-relaxed">Keynotes, Panels, Speaker-Porträts und die Stimmung im Publikum. Bilder, die für Presse, Website und die Einladung zum nächsten Jahr funktionieren.</p>
            </div>
            <div className="flex flex-col gap-3">
              {/* NOTE: Link to /de/messefotograf-hamburg goes here once the page ships */}
              <h3 className="text-xl font-semibold text-[var(--color-text-main)]">Messefotografie</h3>
              <p className="text-[var(--color-text-muted)] text-[17px] font-normal leading-relaxed">Standfotografie, Produktpräsentationen, Kundengespräche und das Geschehen in der Halle. Auf Wunsch mit Same-Day-Highlights fürs Live-Posting.</p>
            </div>
            <div className="flex flex-col gap-3 col-span-1 md:col-span-2">
              <h3 className="text-xl font-semibold text-[var(--color-text-main)]">Firmenevents</h3>
              <p className="text-[var(--color-text-muted)] text-[17px] font-normal leading-relaxed">Jubiläen, Teamevents, Preisverleihungen und Netzwerkabende, dokumentiert mit Blick für die Menschen und die Details.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ERGEBNISSE (OUTCOMES) */}
      <section className="py-14 md:py-24 bg-transparent border-t border-[var(--color-border-hairline)]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col gap-10 md:gap-14">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[var(--color-text-main)]">Ihr Ergebnis</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="flex flex-col gap-5">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] border border-gray-100 shadow-sm">
                <SafeImage src="/images/home/08-results/01-delivery.webp" alt="Schnelle Lieferung" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold tracking-tight text-[var(--color-text-main)]">Schnelle Lieferung</h3>
                <p className="text-[var(--color-text-muted)] text-[17px] font-normal leading-relaxed">Same-Day-Highlights auf Wunsch; die vollständig bearbeitete Galerie in der Regel innerhalb von 2 Werktagen.</p>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] border border-gray-100 shadow-sm">
                <SafeImage src="/images/home/08-results/02-consistent.webp" alt="Konsistente Bildsprache" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold tracking-tight text-[var(--color-text-main)]">Konsistente Bildsprache</h3>
                <p className="text-[var(--color-text-muted)] text-[17px] font-normal leading-relaxed">Fotos, die zu Marke, PR und Social passen – keine Zufallstreffer.</p>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] border border-gray-100 shadow-sm">
                <SafeImage src="/images/home/08-results/03-gallery.webp" alt="Private Online-Galerie" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold tracking-tight text-[var(--color-text-main)]">Private Online-Galerie</h3>
                <p className="text-[var(--color-text-muted)] text-[17px] font-normal leading-relaxed">Einfach teilbar über eine private, auf Wunsch passwortgeschützte Galerie.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PORTFOLIO */}
      <section className="py-14 md:py-24 bg-transparent border-t border-[var(--color-border-hairline)]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col gap-10 md:gap-14">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[var(--color-text-main)]">Ausgewählte Projekte</h2>
            </div>
            <Link href="/de/portfolio" title="Gesamtes Eventfotografie-Portfolio" className="text-[var(--color-text-main)] text-[15px] font-semibold transition-colors hover:text-[var(--color-text-muted)] flex items-center gap-2 group underline-offset-4 decoration-1 underline shrink-0 mb-1">
              Zum gesamten Portfolio →
            </Link>
          </div>

          <ImageGallery
            images={Array.from({ length: 12 }, (_, i) => {
              const strNum = (i + 1).toString().padStart(2, '0');
              const portfolioAlts: Record<string, string> = {
                "01": "Konferenzfotografie Hamburg — Keynote-Speaker auf der Bühne",
                "02": "B2B-Eventfotografie Hamburg — Networking auf einer Konferenz",
                "03": "Messefotografie Hamburg Messe — Messestand-Fotografie",
                "04": "Corporate Eventfotografie Hamburg — Preisverleihung",
                "05": "Konferenzfotograf Hamburg — Panel-Diskussion",
                "06": "Eventfotografie Hamburg — Publikum bei einer Konferenz",
                "07": "Messefotograf — Ausstellerstand Hamburg Messe",
                "08": "Corporate Fotograf Hamburg — Team- und Branding-Foto",
                "09": "Konferenzfotografie Europa — Speaker-Porträt",
                "10": "B2B Eventfotograf Hamburg — Networking-Moment",
                "11": "Event-Dokumentation Hamburg — Produktpräsentation",
                "12": "Corporate Event Hamburg — Executive-Treffen",
              };
              return { src: `/images/home/06-gallery/${strNum}.webp`, alt: portfolioAlts[strNum] ?? `Portfolio ${strNum}` };
            })}
            gridClassName="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3"
            itemClassName="relative aspect-[3/2] md:aspect-[4/3] overflow-hidden bg-transparent group cursor-zoom-in w-full block rounded-none"
          />
        </div>
      </section>

      {/* 7. PAKETE */}
      <section className="py-14 md:py-24 bg-transparent border-t border-[var(--color-border-hairline)]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col gap-10 md:gap-14">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[var(--color-text-main)]">Pakete & Add-ons</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-[var(--color-border-hairline)] border-t border-[var(--color-border-hairline)] pt-12">
            <div className="flex flex-col gap-6 md:pr-10">
              <h3 className="text-xl font-semibold tracking-tight text-[var(--color-text-main)]">Ganzer Tag (8h)</h3>
              <ul className="list-disc pl-5 flex flex-col gap-3 text-[var(--color-text-muted)] text-[17px] font-normal leading-relaxed marker:text-[var(--color-text-main)]">
                <li>Ideal für Konferenzen, Messen und große Firmenevents.</li>
                <li>Komplette Story: Aufbau → Programm → Menschen → Ausklang.</li>
                <li>Optional: Team-Porträts + zusätzliche Blöcke.</li>
              </ul>
            </div>
            <div className="flex flex-col gap-6 pt-10 md:pt-0 md:px-10">
              <h3 className="text-xl font-semibold tracking-tight text-[var(--color-text-main)]">Halber Tag (4h)</h3>
              <ul className="list-disc pl-5 flex flex-col gap-3 text-[var(--color-text-muted)] text-[17px] font-normal leading-relaxed marker:text-[var(--color-text-main)]">
                <li>Kompakte Konferenzen, Panels und Networking-Formate.</li>
                <li>Fokus: Schlüsselmomente, Branding, Networking, Speaker + Publikum.</li>
              </ul>
            </div>
            <div className="flex flex-col gap-6 pt-10 md:pt-0 md:pl-10">
              <h3 className="text-xl font-semibold tracking-tight text-[var(--color-text-main)]">Add-ons</h3>
              <ul className="list-disc pl-5 flex flex-col gap-3 text-[var(--color-text-muted)] text-[17px] font-normal leading-relaxed marker:text-[var(--color-text-main)]">
                <li>Video-Shooting</li>
                <li>Same-Day-Highlights</li>
                <li>Business-Porträts vor Ort</li>
                <li>Mehrtägige Events</li>
              </ul>
            </div>
          </div>
          <div className="pt-4">
            <Link href="/de/kontakt" title="Eventfotograf Hamburg Angebot anfragen" className="text-[var(--color-text-main)] text-[15px] font-semibold transition-colors hover:text-[var(--color-text-muted)] flex items-center gap-2 group underline-offset-4 decoration-1 underline w-fit">
              Angebot anfragen
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS */}
      <section className="py-14 md:py-24 bg-transparent border-t border-[var(--color-border-hairline)]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col gap-12 md:gap-16">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[var(--color-text-main)]">Stimmen von Kund:innen</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-y-20 gap-x-16">
            {[
              {
                img: "01.webp",
                content: "Liza hat ein hervorragendes Auge für die richtigen Momente. Die Zusammenarbeit war entspannt und die Lieferung unglaublich schnell.",
                name: "Maya Wagner",
                role: "Partner Success | Plug and Play Tech Center Hamburg"
              },
              {
                img: "02.webp",
                content: "Sehr zuverlässig und hat unsere Erwartungen übertroffen. Die Nachbearbeitung ist stark – wir würden Liza jederzeit wieder buchen.",
                name: "Mia Lohmeier",
                role: "HR & Partnership Manager | flair"
              },
              {
                img: "03.webp",
                content: "Liza hat unsere dreitägige Messe professionell begleitet. Starke Detailaufnahmen und perfekt dokumentierte Präsentationen. Eine Freude, mit ihr zu arbeiten.",
                name: "Maria Kossivaki",
                role: "Event Specialist | Lloyd's Register"
              },
              {
                img: "04.webp",
                content: "Die Reaktionen auf die Fotos waren überwältigend positiv. Die Bilder sehen einfach fantastisch aus und fangen die Atmosphäre perfekt ein.",
                name: "Marcia Fahrenheim",
                role: "Director | Factory Hammerbrooklyn"
              }
            ].map((testi, i) => (
              <div key={i} className="flex flex-col gap-6">
                <p className="text-xl md:text-2xl text-[var(--color-text-main)] leading-relaxed font-normal">"{testi.content}"</p>
                <div className="flex items-center gap-4 mt-2">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0 border border-[var(--color-border-hairline)] shadow-sm">
                    <SafeImage src={`/images/home/09-testimonials/${testi.img}`} alt={{
                        "Maya Wagner": "Maya Wagner, Partner Success at Plug and Play Tech Center Hamburg",
                        "Mia Lohmeier": "Mia Lohmeier, HR Manager at flair",
                        "Maria Kossivaki": "Maria Kossivaki, Event Specialist at Lloyd's Register",
                        "Marcia Fahrenheim": "Marcia Fahrenheim, Director at Factory Hammerbrooklyn",
                      }[testi.name] ?? testi.name} fill sizes="56px" className="object-cover" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-base font-semibold text-[var(--color-text-main)]">{testi.name}</span>
                    <span className="text-[14px] text-[var(--color-text-muted)] font-normal">{testi.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. ABOUT */}
      <section className="py-14 md:py-24 bg-transparent border-t border-[var(--color-border-hairline)]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-12 md:gap-20 items-center">
          <div className="w-full md:w-1/2 relative aspect-[3/2] overflow-hidden rounded-[20px] shadow-sm border border-gray-100">
            <SafeImage src="/images/home/10-about/01-about.webp" alt="Liza Holiarchuk, Event- und Businessfotografin in Hamburg" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[var(--color-text-main)]">Über mich</h2>
            <div className="flex flex-col gap-6 text-[17px] text-[var(--color-text-muted)] font-normal leading-relaxed max-w-[50ch]">
              <p>Ich bin Event- und Businessfotografin in Hamburg und offizielle Fotografin der Hamburg Messe und Congress GmbH. Ich dokumentiere Events so, wie sie wirklich sind: Bühne, Publikum, Networking und die Details, die später für PR, Social Media und interne Kommunikation den Unterschied machen. Neben Hamburg begleite ich Konferenzen und Firmenevents in ganz Europa (z. B. Mailand, Amsterdam, Kopenhagen). Vor Ort arbeite ich ruhig, unaufdringlich und strukturiert. Die Lieferung läuft reibungslos über eine private, auf Wunsch passwortgeschützte Online-Galerie.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FAQ */}
      <section className="py-24 md:py-40 bg-transparent border-y border-[var(--color-border-hairline)] relative overflow-hidden flex items-center min-h-[80vh]">
        <SafeImage src="/images/home/11-faq/01-faq.webp" alt="Event-Fotografin Hamburg — Häufige Fragen (FAQ)" fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-[#EAF1F6]/30" />
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full relative z-10 flex">
          <div className="w-full flex flex-col lg:flex-row gap-12 lg:gap-24 bg-[#EAF1F6]/85 border border-black/10 shadow-sm rounded-[24px] p-10 md:p-16 backdrop-blur-[2px]">
            <div className="w-full lg:w-1/3 flex flex-col gap-4">
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[var(--color-text-main)]">Häufige Fragen</h2>
            </div>
            <div className="w-full lg:w-2/3 flex flex-col divide-y divide-[var(--color-border-hairline)] border-t border-[var(--color-border-hairline)] lg:mt-2">
              {[
                {
                  q: "Was kostet ein Eventfotograf in Hamburg?",
                  a: "Für Firmenevents in Hamburg liegen realistische Preise bei etwa 450–600 € netto für 2 Stunden, 750–1.150 € für einen halben Tag und 1.350–2.050 € für einen ganzen Tag – jeweils inklusive Bearbeitung und Nutzungsrechten. Den genauen Preis stimme ich pro Projekt ab. Schreiben Sie mir mit den Eckdaten Ihres Events, und Sie erhalten ein konkretes Angebot."
                },
                {
                  q: "Wie läuft der Buchungsprozess ab?",
                  a: "Anfrage → kurzes Briefing → Angebot & Bestätigung → Event → Lieferung."
                },
                {
                  q: "Was brauchen Sie von uns, damit vor Ort alles reibungslos läuft?",
                  a: "Einen groben Zeitplan bzw. das Programm, eine Ansprechperson, Zugang/Badge und 3–5 Must-haves (z. B. Speaker, VIPs, Branding, Teamfotos)."
                },
                {
                  q: "Wann erhalten wir die Fotos?",
                  a: "In der Regel innerhalb von 2 Werktagen; Same-Day-Highlights auf Wunsch (eine kuratierte Auswahl für die schnelle Kommunikation)."
                },
                {
                  q: "Wie erhalten wir die Bilder und wie können wir sie teilen?",
                  a: "Über eine private Online-Galerie; der Link ist intern und mit Ihren Gästen teilbar, auf Wunsch passwortgeschützt."
                },
                {
                  q: "Welche Nutzungsrechte sind enthalten?",
                  a: "Umfassende Nutzungsrechte für Ihre Unternehmenskommunikation (Website, Social Media, PR) sind enthalten; Details je nach Anwendungsfall."
                },
                {
                  q: "Können Sie parallele Bühnen oder Tracks abdecken?",
                  a: "Ja. Für größere Events mit parallelen Programmpunkten lässt sich ein zweiter Fotograf organisieren."
                },
                {
                  q: "Arbeiten Sie auch außerhalb von Hamburg?",
                  a: "Ja – Hamburg und Umgebung sowie deutschland- und europaweit nach Absprache. Reisekosten werden separat und transparent kalkuliert."
                }
              ].map((faq, i) => (
                <details key={i} className="group [&_summary::-webkit-details-marker]:hidden py-6">
                  <summary className="flex items-center justify-between cursor-pointer text-lg md:text-xl font-semibold text-[var(--color-text-main)]">
                    <span className="pr-8">{faq.q}</span>
                    <span className="transition duration-300 group-open:rotate-180 text-[var(--color-text-muted)] shrink-0">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </span>
                  </summary>
                  <div className="pt-4 text-[var(--color-text-muted)] text-[17px] font-normal leading-relaxed max-w-[65ch]">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 11. CLOSING CTA */}
      <section className="py-24 md:py-32 bg-[#DDE7F0] text-[var(--color-text-main)] flex justify-center text-center">
        <div className="max-w-[800px] w-full px-6 flex flex-col gap-10 items-center">
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.1]">Verfügbarkeit prüfen &<br />Angebot anfragen</h2>
          <p className="text-xl opacity-80 font-light">Senden Sie Ihre Anfrage mit Datum und den Eckdaten Ihres Events – ich melde mich mit Verfügbarkeit und den nächsten Schritten.</p>
          <Link href="/de/kontakt" title="Kontakt & Angebot Anfrage Eventfotografie Hamburg" className="bg-[var(--color-text-main)] text-white px-10 py-4 text-base font-semibold transition-colors hover:bg-[var(--color-accent-hover)] rounded-2xl">
            Zum Kontaktformular
          </Link>
        </div>
      </section>
    </>
  );
}
