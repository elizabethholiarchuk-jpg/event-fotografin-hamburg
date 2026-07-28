import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Eventfotografie & Videobegleitung — Valeriy Riyako | Liza Holiarchuk",
  description:
    "Kombinierte professionelle Eventfotografie und Videodokumentation für Konferenzen und Messen in Hamburg und europaweit mit Valeriy Riyako.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "/de/video-support",
    languages: {
      en: "/video-support",
      de: "/de/video-support",
      "x-default": "/video-support",
    },
  },
};

const VIDEO_EXAMPLES = [
  {
    title: "Lloyd's Register auf der SMM 2026 — Messe Hamburg",
    category: "Messe & Fachausstellung",
    description: "Umfassende Videodokumentation des Messestands von Lloyd's Register auf der internationalen Schiffbaumesse SMM in Hamburg — von Standaktivitäten und Live-Demonstrationen bis hin zu Besucherinteraktionen auf der Messefläche.",
    embedUrl: "https://www.youtube-nocookie.com/embed/oqufTncvJCM?rel=0",
  },
  {
    title: "GP Solutions auf der ITB Berlin 2025",
    category: "Messe & Fachausstellung",
    description: "Dynamische Videobegleitung von GP Solutions auf der ITB Berlin, einer der weltweit führenden Reisemessen — mit Fokus auf Standpräsentationen, Networking-Momente und die Energie einer internationalen B2B-Ausstellung.",
    embedUrl: "https://www.youtube-nocookie.com/embed/5wxq_WBbmew?rel=0",
  },
  {
    title: "The Performance & Style Days 2024 — Hannover",
    category: "Konferenz & Event",
    description: "Stimmungsvoller Highlightfilm der Performance & Style Days in Hannover — mit Bühnenauftritten, Publikumsreaktionen und der gesamten Event-Atmosphäre über das volle Veranstaltungsprogramm.",
    embedUrl: "https://www.youtube-nocookie.com/embed/RDZAh_2PDa4?rel=0",
  },
];

export default function GermanVideoSupportPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 md:pt-44 pb-16 md:pb-24 border-b border-[var(--color-border-hairline)]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="max-w-[900px] flex flex-col gap-6">
            <nav aria-label="Breadcrumb" className="text-[13px] text-[var(--color-text-muted)] font-light">
              <Link href="/de" className="hover:text-[var(--color-accent)] transition-colors">Startseite</Link>
              <span className="mx-2" aria-hidden="true">›</span>
              <span className="text-[var(--color-text-main)]">Videobegleitung & Team-Partnerschaft</span>
            </nav>

            <span className="inline-block px-3.5 py-1 text-xs font-semibold uppercase tracking-widest bg-blue-950/10 text-blue-950 rounded-full w-fit">
              Exklusiver Kundenlink
            </span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[var(--color-text-main)] leading-[1.08]">
              Eventfotografie & <br className="hidden sm:inline" />
              Professionelle Videobegleitung
            </h1>
            
            <p className="text-xl text-[var(--color-text-muted)] font-normal leading-relaxed">
              Ganzheitliche visuelle Dokumentation für Konferenzen, Kongresse und Messen in Hamburg und ganz Europa — nahtlos und eingespielt aus einer Hand.
            </p>
            
            <p className="text-[17px] text-[var(--color-text-muted)] leading-[1.85]">
              Wenn Ihr bevorstehendes Event sowohl erstklassige Fotografie als auch lebendige Videodokumentation erfordert, müssen Sie keine zwei unabhängigen, nicht eingespielten Agenturen beauftragen. Für entsprechende Anfragen kooperiere ich eng mit meinem geschätzten Teamkollegen und Video-Spezialisten <strong>Valeriy Riyako</strong>, um ein perfekt abgestimmtes Bild- und Videopaket anzubieten.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-4">
              <Link href="/de/kontakt" className="bg-[var(--color-accent)] text-white px-8 py-3.5 rounded-2xl text-[15px] font-semibold transition-colors hover:bg-[var(--color-accent-hover)] shadow-sm">
                Kombiniertes Paket anfragen
              </Link>
              <a href="#examples" className="border border-[var(--color-border-hairline)] bg-white/50 text-[var(--color-text-main)] px-8 py-3.5 rounded-2xl text-[15px] font-semibold transition-colors hover:border-[var(--color-text-main)] hover:bg-white">
                Video-Beispiele ansehen
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Teamwork & Partnership Advantage */}
      <section className="py-16 md:py-24 border-b border-[var(--color-border-hairline)] bg-white/40">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 grid md:grid-cols-12 gap-12 md:gap-16 items-start">
          <div className="md:col-span-5 flex flex-col gap-6">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[var(--color-text-main)]">
              Ein eingespieltes Team, reibungslose Koordination
            </h2>
            <p className="text-[17px] text-[var(--color-text-muted)] leading-[1.85]">
              Während ich mich vor Ort uneingeschränkt darauf konzentriere, prägnante fotografische Momente einzufangen, leitet Valeriy die gesamte Videoproduktion. Sie erhalten dadurch einen harmonischen Workflow von der ersten Vorbereitung bis zur finalen Datenabgabe.
            </p>
            <div className="p-6 bg-white/80 border border-[var(--color-border-hairline)] rounded-2xl shadow-sm mt-2">
              <div className="flex items-start gap-5">
                <div className="w-20 h-20 rounded-full overflow-hidden shrink-0 border-2 border-[var(--color-border-hairline)]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/services/Valeriy.webp"
                    alt="Valeriy Riyako — Spezialist für Event-Videos"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-[17px] text-[var(--color-text-main)]">Valeriy Riyako</h3>
                  <p className="text-[14px] text-[var(--color-text-muted)] mt-1 font-medium">Spezialist für Event- & Messe-Videos</p>
                </div>
              </div>
              <p className="text-[15px] text-[var(--color-text-muted)] leading-relaxed mt-4">
                Valeriy ist Experte für professionell gerahmte B2B-Videografie. Sein Portfolio reicht von mitreißenden 60-Sekunden-Recapfilmen bis hin zu detaillierten Ausstellerporträts und hochauflösenden Speaker-Statements in den Messe- und Kongresshallen Hamburgs.
              </p>
            </div>
          </div>

          <div className="md:col-span-7 flex flex-col gap-8">
            <h3 className="text-2xl font-semibold text-[var(--color-text-main)]">
              Die Vorteile für Ihre Veranstaltung:
            </h3>
            
            <div className="grid gap-6">
              <div className="p-6 bg-white rounded-2xl border border-[var(--color-border-hairline)] shadow-xs">
                <h4 className="text-lg font-semibold text-[var(--color-text-main)] mb-2">1. Ein einziges, gemeinsames Briefing</h4>
                <p className="text-[16px] text-[var(--color-text-muted)] leading-[1.75]">
                  Sie müssen keine zwei getrennten Kreativteams instruieren. Sie teilen uns den Ablaufplan, die Highlights und Pflichtmotive genau einmal mit – unser gemeinsames Foto- und Videoteam stimmt sich intern optimal darauf ab.
                </p>
              </div>

              <div className="p-6 bg-white rounded-2xl border border-[var(--color-border-hairline)] shadow-xs">
                <h4 className="text-lg font-semibold text-[var(--color-text-main)] mb-2">2. Kein gegenseitiges Stören vor Ort</h4>
                <p className="text-[16px] text-[var(--color-text-muted)] leading-[1.75]">
                  Unabhängig gebuchte Fotografen und Videografen laufen Gefahr, sich bei wichtigen Keynotes und Preisverleihungen buchstäblich im Bild zu stehen. Wir agieren vertrauensvoll und intuitiv zusammen, sodass beide Kamerateams aus den besten Perspektiven ungestört arbeiten.
                </p>
              </div>

              <div className="p-6 bg-white rounded-2xl border border-[var(--color-border-hairline)] shadow-xs">
                <h4 className="text-lg font-semibold text-[var(--color-text-main)] mb-2">3. Einheitliche visuelle Handschrift</h4>
                <p className="text-[16px] text-[var(--color-text-muted)] leading-[1.75]">
                  Unsere Bildbearbeitung und der Schnitt des Videopfads sind professionell aufeinander abgestimmt. Fotogalerie und Bewegtbild fügen sich visuell nahtlos in Ihre Unternehmenskommunikation, PR-Arbeit und LinkedIn-Kampagnen ein.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Showcase Grid */}
      <section id="examples" className="py-16 md:py-24 border-b border-[var(--color-border-hairline)] scroll-mt-24">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col gap-12">
          <div className="flex flex-col gap-4 max-w-[800px]">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[var(--color-text-main)]">
              Video-Beispiele: Konferenzen & Messen
            </h2>
            <p className="text-[17px] text-[var(--color-text-muted)] leading-relaxed">
              Hier finden Sie eine Auswahl an Videoformaten, die Valeriy auf internationalen Fachmessen, Konferenzen und Corporate Events realisiert hat.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 md:gap-16">
            {VIDEO_EXAMPLES.map((video, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-8 items-start bg-white/60 border border-[var(--color-border-hairline)] p-6 md:p-8 rounded-3xl shadow-sm">
                <div className="w-full md:w-3/5 aspect-video bg-slate-900 rounded-2xl overflow-hidden shadow-md relative group border border-slate-800">
                  <iframe
                    src={video.embedUrl}
                    title={video.title}
                    className="w-full h-full rounded-2xl bg-slate-900 border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
                <div className="w-full md:w-2/5 flex flex-col justify-center py-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-900 mb-2">
                    {video.category}
                  </span>
                  <h3 className="text-2xl font-semibold text-[var(--color-text-main)] tracking-tight mb-4">
                    {video.title}
                  </h3>
                  <p className="text-[16px] text-[var(--color-text-muted)] leading-[1.8]">
                    {video.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer / Deliverables */}
      <section className="py-16 md:py-24 border-b border-[var(--color-border-hairline)] bg-white/30">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col gap-12">
          <div className="max-w-[800px]">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[var(--color-text-main)]">
              Was unser kombiniertes Paket beinhaltet
            </h2>
            <p className="text-[17px] text-[var(--color-text-muted)] mt-4 leading-relaxed">
              Je nach individuellen Erfordernissen Ihres Events können wir folgende Bestandteile in Ihr Bild- und Videopaket integrieren:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Dynamische Highlight-Filme", text: "60 bis 90 Sekunden lange Zusammenfassungen — mitreißend geschnitten für LinkedIn und externes Marketing." },
              { title: "Messestand-Dokumentationen", text: "Gezielte Videobegleitung Ihres Auftritts auf der Hamburg Messe mit Fokus auf Standaktivitäten und Kundenkommunikation." },
              { title: "Speaker- & VIP-Interviews", text: "Professioneller Ton über Funk-Lavaliermikrofone für knackige O-Töne, Testimonials und Gastkommentare." },
              { title: "Vertikale Social-Media-Clips", text: "Modern optimiertes 9:16-Hochkantformat – bereit zum direkten Upload auf LinkedIn, Instagram Reels oder YouTube Shorts." },
              { title: "Vollständige Fotogalerie", text: "Lizas umfassende Fotodokumentation vor Ort – fertig bearbeitet und farbkorrigiert in einer privaten Online-Galerie in der Regel binnen 48 Stunden." },
              { title: "Transparente Nutzungsrechte", text: "Inklusive kommerzieller Nutzungsrechte für Ihre gesamte Unternehmenskommunikation (Web, PR, Social Media, Internal)." },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white rounded-2xl border border-[var(--color-border-hairline)] shadow-xs flex flex-col gap-2">
                <h4 className="font-semibold text-lg text-[var(--color-text-main)]">{item.title}</h4>
                <p className="text-[15px] text-[var(--color-text-muted)] leading-[1.7]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-[#DDE7F0] text-[var(--color-text-main)] flex justify-center text-center">
        <div className="max-w-[600px] w-full px-6 flex flex-col gap-8 items-center">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1]">
            Planen Sie Foto & Video aus einer Hand
          </h2>
          <p className="text-xl opacity-80 font-light">
            Antworten Sie einfach direkt auf unser E-Mail-Gespräch, um Valeriys Videobegleitung für Ihr Event vorzusehen, oder nutzen Sie unser Kontaktformular.
          </p>
          <Link href="/de/kontakt" className="bg-[var(--color-text-main)] text-white px-10 py-4 text-base font-semibold transition-colors hover:bg-[var(--color-accent-hover)] rounded-2xl shadow-sm">
            Kontakt aufnehmen
          </Link>
        </div>
      </section>
    </>
  );
}
