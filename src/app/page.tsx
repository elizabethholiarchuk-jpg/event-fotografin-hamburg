import Link from "next/link";
import { Metadata } from "next";
import SafeImage from "@/components/SafeImage";
import ImageGallery from "@/components/ImageGallery";

export const metadata: Metadata = {
  title: "Liza Holiarchuk | Eventfotografin Hamburg",
  description: "Konferenzen, Messen & Corporate Events in Hamburg zuverlässig, strukturiert, schnell geliefert.",
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ProfessionalService",
            name: "Liza Holiarchuk Eventfotografie",
            image: "https://lizaholiarchuk.com/images/home/10-about/01-about.webp",
            url: "https://lizaholiarchuk.com",
            telephone: "+491752606697",
            email: "hello@lizaholiarchuk.com",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Rehhoffstrasse 10",
              addressLocality: "Hamburg",
              postalCode: "20459",
              addressCountry: "DE",
            },
            areaServed: ["Hamburg", "Germany", "Europe"],
          }),
        }}
      />

      {/* 1. HERO - EXACTLY AS BEFORE */}
      <section className="relative w-full min-h-[92vh] md:min-h-screen flex items-end justify-start bg-[var(--color-dark-bg)] overflow-hidden pb-16 md:pb-24 pt-40 md:pt-48">
        <SafeImage
          src="/images/home/02-hero/01-hero.webp"
          alt="Eventfotografin Hamburg - Liza Holiarchuk"
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
              Eventfotografin Hamburg
            </h1>
            <p className="text-2xl md:text-4xl font-light leading-snug text-white/95 max-w-[45ch]">
              Fotografie für B2B-Konferenzen & Corporate Events<br />
              Hamburg & europaweit
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-10 mt-6 w-full sm:w-auto">
            <Link
              href="/kontakt"
              className="bg-white text-[var(--color-dark-bg)] px-12 py-5 text-sm tracking-widest uppercase font-semibold transition-colors hover:bg-gray-200 text-center rounded-2xl w-full sm:w-auto"
            >
              Verfügbarkeit prüfen
            </Link>
            <Link
              href="/portfolio"
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
            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
              <div key={num} className="relative h-8 md:h-10 w-20 md:w-28 shrink-0">
                <SafeImage
                  src={`/images/home/03-client-logos/0${num}-logo.webp`}
                  alt={`Client Logo ${num}`}
                  fill
                  sizes="(max-width: 768px) 80px, 112px"
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. USE CASES */}
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

      {/* 4. PORTFOLIO PREVIEW */}
      <section className="py-14 md:py-24 bg-transparent border-y border-[var(--color-border-hairline)]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col gap-10 md:gap-14">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[var(--color-text-main)]">Portfolio Highlights</h2>
              <p className="text-[var(--color-text-muted)] text-[17px] font-normal">Konferenzen, Messen & Corporate Events — authentisch und detailbewusst.</p>
            </div>
            <Link href="/portfolio" className="text-[var(--color-text-main)] text-[15px] font-semibold transition-colors hover:text-[var(--color-text-muted)] flex items-center gap-2 group underline-offset-4 decoration-1 underline shrink-0 mb-1">
              Gesamtes Portfolio
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            </Link>
          </div>

          <ImageGallery
            images={Array.from({ length: 12 }, (_, i) => {
              const strNum = (i + 1).toString().padStart(2, '0');
              return { src: `/images/home/06-gallery/${strNum}.webp`, alt: `Portfolio Vorschau ${strNum}` };
            })}
            gridClassName="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3"
            itemClassName="relative aspect-[3/2] md:aspect-[4/3] overflow-hidden bg-transparent group cursor-zoom-in w-full block rounded-none"
          />
        </div>
      </section>

      {/* 5. SERVICES */}
      <section className="py-24 md:py-40 bg-transparent relative overflow-hidden flex items-center min-h-[80vh]">
        <SafeImage src="/images/home/07-services/01-services.webp" alt="Services Background" fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-[#EAF1F6]/30" />
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full relative z-10">
          <div className="w-full flex flex-col lg:flex-row justify-between gap-12 lg:gap-24 bg-[#EAF1F6]/85 border border-black/10 shadow-sm rounded-[24px] p-10 md:p-16 backdrop-blur-[2px]">
            <div className="w-full lg:w-1/3 flex flex-col gap-4">
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[var(--color-text-main)]">Dienstleistungen</h2>
            </div>
            <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-semibold text-[var(--color-text-main)]">Konferenzfotografie</h3>
                <p className="text-[var(--color-text-muted)] text-[17px] font-normal leading-relaxed">Panels, Keynotes, Speaker-Porträts, Backstage, Publikum, Networking.</p>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-semibold text-[var(--color-text-main)]">Messefotografie</h3>
                <p className="text-[var(--color-text-muted)] text-[17px] font-normal leading-relaxed">Messestand, Besucher-Interaktionen, Branding, Team, Produkt- und Detailaufnahmen.</p>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-semibold text-[var(--color-text-main)]">Corporate Events</h3>
                <p className="text-[var(--color-text-muted)] text-[17px] font-normal leading-relaxed">Awards, Executive Gatherings, interne Events, Get-togethers, Abendveranstaltungen.</p>
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-xl font-semibold text-[var(--color-text-main)]">Videoshooting</h3>
                <p className="text-[var(--color-text-muted)] text-[17px] font-normal leading-relaxed">Dokumentarisch oder Social First als ideales Add-on für jedes Event.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. OUTCOMES */}
      <section className="py-14 md:py-24 bg-transparent border-y border-[var(--color-border-hairline)]">
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
                <p className="text-[var(--color-text-muted)] text-[17px] font-normal leading-relaxed">Same-day Highlights; final bearbeitet i. d. R. in 2 Werktagen.</p>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] border border-gray-100 shadow-sm">
                <SafeImage src="/images/home/08-results/02-consistent.webp" alt="Konsistente Bildsprache" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold tracking-tight text-[var(--color-text-main)]">Konsistente Bildsprache</h3>
                <p className="text-[var(--color-text-muted)] text-[17px] font-normal leading-relaxed">Fotos passend zu Marke, PR und Social — keine „Zufallstreffer“.</p>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] border border-gray-100 shadow-sm">
                <SafeImage src="/images/home/08-results/03-gallery.webp" alt="Private Online-Galerie" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold tracking-tight text-[var(--color-text-main)]">Private Online-Galerie</h3>
                <p className="text-[var(--color-text-muted)] text-[17px] font-normal leading-relaxed">Einfach teilbar über eine private, optional passwortgeschützte Galerie.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. PACKAGES */}
      <section className="py-14 md:py-24 bg-transparent">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col gap-10 md:gap-14">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[var(--color-text-main)]">Pakete & Add-ons</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-[var(--color-border-hairline)] border-t border-[var(--color-border-hairline)] pt-12">
            <div className="flex flex-col gap-6 md:pr-10">
              <h3 className="text-xl font-semibold tracking-tight text-[var(--color-text-main)]">Ganztags (8h)</h3>
              <ul className="list-disc pl-5 flex flex-col gap-3 text-[var(--color-text-muted)] text-[17px] font-normal leading-relaxed marker:text-[var(--color-text-main)]">
                <li>Ideal für Konferenzen, Messen, große Corporate Events.</li>
                <li>Vollständige Story: Setup → Programmpunkte → People → Closing.</li>
                <li>Optional: Teamporträts + zusätzliche Blöcke.</li>
              </ul>
            </div>
            <div className="flex flex-col gap-6 pt-10 md:pt-0 md:px-10">
              <h3 className="text-xl font-semibold tracking-tight text-[var(--color-text-main)]">Halbtags (4h)</h3>
              <ul className="list-disc pl-5 flex flex-col gap-3 text-[var(--color-text-muted)] text-[17px] font-normal leading-relaxed marker:text-[var(--color-text-main)]">
                <li>Kompakte Konferenzen, Panels & Networking-Formate.</li>
                <li>Fokus: Key moments, Branding, Networking, Speaker + Audience.</li>
              </ul>
            </div>
            <div className="flex flex-col gap-6 pt-10 md:pt-0 md:pl-10">
              <h3 className="text-xl font-semibold tracking-tight text-[var(--color-text-main)]">Add-ons</h3>
              <ul className="list-disc pl-5 flex flex-col gap-3 text-[var(--color-text-muted)] text-[17px] font-normal leading-relaxed marker:text-[var(--color-text-main)]">
                <li>Videoshooting</li>
                <li>Same-day Highlights</li>
                <li>Business Portraits vor Ort</li>
                <li>Mehrtages-Events</li>
              </ul>
            </div>
          </div>
          <div className="pt-4">
            <Link href="/kontakt" className="text-[var(--color-text-main)] text-[15px] font-semibold transition-colors hover:text-[var(--color-text-muted)] flex items-center gap-2 group underline-offset-4 decoration-1 underline w-fit">
              Angebot anfragen
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS */}
      <section className="py-14 md:py-24 bg-transparent border-t border-[var(--color-border-hairline)]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col gap-12 md:gap-16">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[var(--color-text-main)]">Kundenstimmen</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-y-20 gap-x-16">
            {[
              { img: "01.webp", content: "Liza hat ein exzellentes Auge für die richtigen Momente. Die Zusammenarbeit war entspannt und die Lieferung unheimlich schnell.", name: "Maya Wagner", role: "Partner Success | Plug and Play Tech Center Hamburg" },
              { img: "02.webp", content: "Sehr zuverlässig und unsere Erwartungen übertroffen. Die Nachbearbeitung ist stark — wir würden Liza jederzeit wieder buchen.", name: "Mia Lohmeier", role: "HR & Partnership Manager | flair" },
              { img: "03.webp", content: "Liza hat unsere dreitägige Messe professionell begleitet. Starke Detailaufnahmen und perfekt dokumentierte Präsentationen. Eine Freude, mit ihr zu arbeiten.", name: "Maria Kossivaki", role: "Event Specialist | Lloyd's Register" },
              { img: "04.webp", content: "Die Reaktionen auf die Fotos waren überwältigend positiv. Die Bilder sehen einfach fantastisch aus und fangen die Stimmung optimal ein.", name: "Marcia Fahrenheim", role: "Director | Factory Hammerbrooklyn" }
            ].map((testi, i) => (
              <div key={i} className="flex flex-col gap-6">
                <p className="text-xl md:text-2xl text-[var(--color-text-main)] leading-relaxed font-normal">"{testi.content}"</p>
                <div className="flex items-center gap-4 mt-2">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0 border border-[var(--color-border-hairline)] shadow-sm">
                    <SafeImage src={`/images/home/09-testimonials/${testi.img}`} alt={testi.name} fill sizes="56px" className="object-cover" />
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
            <SafeImage src="/images/home/10-about/01-about.webp" alt="Liza Holiarchuk" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[var(--color-text-main)]">Liza Holiarchuk</h2>
            <div className="flex flex-col gap-6 text-[17px] text-[var(--color-text-muted)] font-normal leading-relaxed max-w-[50ch]">
              <p>
                Ich bin Event- und Businessfotografin mit Base in Hamburg. Ich dokumentiere Events so, wie sie wirklich sind: Bühne, Publikum, Networking und die Details, die später für PR, Social und interne Kommunikation den Unterschied machen.
              </p>
              <p>
                Neben Hamburg begleite ich Konferenzen und Corporate Events europaweit (z. B. Mailand, Amsterdam, Kopenhagen). Vor Ort arbeite ich ruhig, diskret und strukturiert. Die Lieferung erfolgt nahtlos über eine private, bei Bedarf passwortgeschützte Online-Galerie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FAQ */}
      <section className="py-24 md:py-40 bg-transparent border-y border-[var(--color-border-hairline)] relative overflow-hidden flex items-center min-h-[80vh]">
        <SafeImage src="/images/home/11-faq/01-faq.webp" alt="FAQ Background" fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-[#EAF1F6]/30" />
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full relative z-10 flex">
          <div className="w-full flex flex-col lg:flex-row gap-12 lg:gap-24 bg-[#EAF1F6]/85 border border-black/10 shadow-sm rounded-[24px] p-10 md:p-16 backdrop-blur-[2px]">
            <div className="w-full lg:w-1/3 flex flex-col gap-4">
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[var(--color-text-main)]">FAQ</h2>
            </div>
            <div className="w-full lg:w-2/3 flex flex-col divide-y divide-[var(--color-border-hairline)] border-t border-[var(--color-border-hairline)] lg:mt-2">
              {[
                { q: "Wie läuft die Buchung ab?", a: "Anfrage → kurzes Briefing → Angebot & Bestätigung → Event → Lieferung." },
                { q: "Was brauchen Sie von uns, damit es vor Ort reibungslos läuft?", a: "Grobe Timeline/Agenda, 1 Ansprechpartner, Zugang/Badge, 3–5 Must-haves (z.B. Speaker/VIPs/Branding/Teamfotos)." },
                { q: "Wann bekommen wir die Fotos?", a: "Meist in 2 Werktagen; Same-day Highlights auf Wunsch (kuratierte Auswahl für schnelle Kommunikation)." },
                { q: "Wie erhalten wir die Bilder und wie können wir sie teilen?", a: "Über private Online-Galerie; Link intern + mit Gästen teilbar; optional passwortgeschützt." },
                { q: "Welche Nutzungsrechte sind enthalten?", a: "Nutzungsrechte für Unternehmenskommunikation (Website, Social, PR) enthalten; Details nach Use Case." },
                { q: "Können Sie parallele Tracks/Stages abdecken?", a: "Ja, bei größeren Events parallel: Second Shooter möglich." },
                { q: "Arbeiten Sie auch außerhalb von Hamburg?", a: "Hamburg + Umgebung sowie deutschlandweit/europaweit nach Absprache." }
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

      {/* 11. FINAL CTA */}
      <section className="py-24 md:py-32 bg-[#DDE7F0] text-[var(--color-text-main)] flex justify-center text-center">
        <div className="max-w-[800px] w-full px-6 flex flex-col gap-10 items-center">
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.1]">Verfügbarkeit prüfen &<br />Angebot erhalten</h2>
          <Link href="/kontakt" className="bg-[var(--color-text-main)] text-white px-10 py-4 text-base font-semibold transition-colors hover:bg-[var(--color-accent-hover)] rounded-2xl">
            Zur Kontaktanfrage
          </Link>
        </div>
      </section>
    </>
  );
}
