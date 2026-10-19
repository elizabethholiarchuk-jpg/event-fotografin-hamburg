import { Metadata } from "next";
import Link from "next/link";
import LiteYouTube from "@/components/LiteYouTube";
import { videoOptions, SOCIAL_CLIP_YOUTUBE_ID } from "@/data/videoOptions";

export const metadata: Metadata = {
  title: { absolute: "Messevideo & Eventvideo Hamburg | Foto und Video aus einer Hand" },
  description:
    "Messe-Video und Event-Video aus Hamburg: ein Social-Clip am nächsten Tag oder ein Event-Video mit Videograf. Ein Ansprechpartner für Foto und Video.",
  alternates: {
    canonical: "/video-support",
    languages: {
        en: "/en/video-support",
        de: "/video-support",
        "x-default": "/video-support",
      },
  },
};

const VIDEO_EXAMPLES = [
  {
    title: "Lloyd's Register auf der SMM 2026 — Messe Hamburg",
    category: "Messe & Fachausstellung",
    description: "Video vom Messestand von Lloyd's Register auf der Schiffbaumesse SMM in Hamburg: Aktivitäten am Stand, Live-Demonstrationen und Gespräche mit Besuchern.",
    embedUrl: "https://www.youtube-nocookie.com/embed/oqufTncvJCM?rel=0",
  },
  {
    title: "GP Solutions auf der ITB Berlin 2025",
    category: "Messe & Fachausstellung",
    description: "Video von GP Solutions auf der ITB Berlin, einer der größten Reisemessen der Welt: Präsentationen am Stand, Networking und die Stimmung auf einer internationalen B2B-Messe.",
    embedUrl: "https://www.youtube-nocookie.com/embed/5wxq_WBbmew?rel=0",
  },
  {
    title: "The Performance & Style Days 2024 — Hannover",
    category: "Konferenz & Event",
    description: "Highlight-Film der Performance & Style Days in Hannover: Auftritte auf der Bühne, Reaktionen im Publikum und die Atmosphäre über das ganze Programm.",
    embedUrl: "https://www.youtube-nocookie.com/embed/RDZAh_2PDa4?rel=0",
  },
];

export default function GermanVideoSupportPage() {
  const video = videoOptions.de;
  const [socialClip, eventVideo] = video.items;

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 md:pt-44 pb-16 md:pb-24 border-b border-[var(--color-border-hairline)]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="max-w-[900px] flex flex-col gap-6">
            <nav aria-label="Breadcrumb" className="text-[13px] text-[var(--color-text-muted)] font-light">
              <Link href="/" className="hover:text-[var(--color-accent)] transition-colors">Startseite</Link>
              <span className="mx-2" aria-hidden="true">›</span>
              <span className="text-[var(--color-text-main)]">Foto & Video</span>
            </nav>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[var(--color-text-main)] leading-[1.08]">
              Foto und Video für Messen und Events
            </h1>

            <p className="text-xl text-[var(--color-text-muted)] font-normal leading-relaxed">
              Fotos, ein schneller Social-Clip oder ein komplettes Event-Video. Für Messen, Konferenzen und Corporate Events in Hamburg und ganz Europa.
            </p>

            <p className="text-[17px] text-[var(--color-text-muted)] leading-[1.85]">
              Wenn Sie Foto und Video brauchen, müssen Sie keine zwei Dienstleister koordinieren. Für Event-Videos arbeite ich mit dem Videografen <strong>Valeriy Riyako</strong> zusammen. Wir drehen parallel, Sie haben einen Ansprechpartner.
            </p>

            <div className="flex flex-wrap gap-4 mt-4">
              <Link href="/kontakt" className="bg-[var(--color-accent)] text-white px-8 py-3.5 rounded-2xl text-[15px] font-semibold transition-colors hover:bg-[var(--color-accent-hover)] shadow-sm">
                Foto und Video anfragen
              </Link>
              <a href="#examples" className="border border-[var(--color-border-hairline)] bg-white/50 text-[var(--color-text-main)] px-8 py-3.5 rounded-2xl text-[15px] font-semibold transition-colors hover:border-[var(--color-text-main)] hover:bg-white">
                Video-Beispiele ansehen
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Video options */}
      <section className="py-16 md:py-24 border-b border-[var(--color-border-hairline)]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col gap-10">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[var(--color-text-main)]">
            Video: zwei Varianten
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-start">
            <div className="flex flex-col gap-4 p-6 md:p-8 bg-white/60 border border-[var(--color-border-hairline)] rounded-3xl">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-xl font-semibold text-[var(--color-text-main)]">{socialClip.name}</h3>
                <span className="text-[17px] font-semibold text-[var(--color-text-main)] whitespace-nowrap">{socialClip.price}</span>
              </div>
              <p className="text-[16px] text-[var(--color-text-muted)] leading-relaxed">{socialClip.desc}</p>
              <LiteYouTube id={SOCIAL_CLIP_YOUTUBE_ID} title="Social-Clip — Beispiel" playLabel="Video abspielen" />
            </div>
            <div className="flex flex-col gap-4 p-6 md:p-8 bg-white/60 border border-[var(--color-border-hairline)] rounded-3xl">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-xl font-semibold text-[var(--color-text-main)]">{eventVideo.name}</h3>
                <span className="text-[17px] font-semibold text-[var(--color-text-main)] whitespace-nowrap">{eventVideo.price}</span>
              </div>
              <p className="text-[16px] text-[var(--color-text-muted)] leading-relaxed">{eventVideo.desc}</p>
              <a href="#examples" className="text-[15px] font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text-main)] transition-colors underline underline-offset-4 w-fit">
                {video.examples}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Working together */}
      <section className="py-16 md:py-24 border-b border-[var(--color-border-hairline)] bg-white/40">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 grid md:grid-cols-12 gap-12 md:gap-16 items-start">
          <div className="md:col-span-5 flex flex-col gap-6">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[var(--color-text-main)]">
              Ein Team, eine Abstimmung
            </h2>
            <p className="text-[17px] text-[var(--color-text-muted)] leading-[1.85]">
              Ich fotografiere, Valeriy übernimmt das Video. Wir stimmen uns von der Vorbereitung bis zur Lieferung direkt miteinander ab.
            </p>
            <div className="p-6 bg-white/80 border border-[var(--color-border-hairline)] rounded-2xl shadow-sm mt-2">
              <div className="flex items-start gap-5">
                <div className="w-20 h-20 rounded-full overflow-hidden shrink-0 border-2 border-[var(--color-border-hairline)]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/services/Valeriy.webp"
                    alt="Valeriy Riyako, Videograf für Events und Messen"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-[17px] text-[var(--color-text-main)]">Valeriy Riyako</h3>
                  <p className="text-[14px] text-[var(--color-text-muted)] mt-1 font-medium">Videograf für Events und Messen</p>
                </div>
              </div>
              <p className="text-[15px] text-[var(--color-text-muted)] leading-relaxed mt-4">
                Valeriy dreht B2B-Videos: kurze Recap-Filme von etwa 60 Sekunden, Porträts von Ausstellern und Statements von Speakern, unter anderem in den Messe- und Kongresshallen in Hamburg.
              </p>
            </div>
          </div>

          <div className="md:col-span-7 flex flex-col gap-8">
            <h3 className="text-2xl font-semibold text-[var(--color-text-main)]">
              Was Sie davon haben:
            </h3>

            <div className="grid gap-6">
              <div className="p-6 bg-white rounded-2xl border border-[var(--color-border-hairline)] shadow-xs">
                <h4 className="text-lg font-semibold text-[var(--color-text-main)] mb-2">1. Ein Briefing statt zwei</h4>
                <p className="text-[16px] text-[var(--color-text-muted)] leading-[1.75]">
                  Sie schicken uns Ablaufplan, Highlights und Pflichtmotive einmal. Wir teilen uns die Aufgaben intern auf.
                </p>
              </div>

              <div className="p-6 bg-white rounded-2xl border border-[var(--color-border-hairline)] shadow-xs">
                <h4 className="text-lg font-semibold text-[var(--color-text-main)] mb-2">2. Wir stehen uns nicht im Bild</h4>
                <p className="text-[16px] text-[var(--color-text-muted)] leading-[1.75]">
                  Fotograf und Videograf, die sich nicht kennen, stehen sich bei Keynotes und Preisverleihungen oft im Weg. Wir kennen unsere Arbeitsweise und achten aufeinander, damit beide ungestört aus guten Perspektiven arbeiten.
                </p>
              </div>

              <div className="p-6 bg-white rounded-2xl border border-[var(--color-border-hairline)] shadow-xs">
                <h4 className="text-lg font-semibold text-[var(--color-text-main)] mb-2">3. Fotos und Video passen zusammen</h4>
                <p className="text-[16px] text-[var(--color-text-muted)] leading-[1.75]">
                  Bildbearbeitung und Videoschnitt sind aufeinander abgestimmt. Fotos und Video passen optisch zusammen, auf der Website, in der PR und auf LinkedIn.
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
              Beispiele Event-Video
            </h2>
            <p className="text-[17px] text-[var(--color-text-muted)] leading-relaxed">
              Eine Auswahl an Videos, die Valeriy auf Messen, Konferenzen und Corporate Events gedreht hat.
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
              Was dazugehören kann
            </h2>
            <p className="text-[17px] text-[var(--color-text-muted)] mt-4 leading-relaxed">
              Je nach Event können Foto und Video Folgendes umfassen:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Highlight-Filme", text: "Zusammenfassungen von 60 bis 90 Sekunden für LinkedIn und Ihr Marketing." },
              { title: "Videos vom Messestand", text: "Video von Ihrem Auftritt auf der Hamburg Messe, mit Fokus auf Aktivitäten am Stand und Gespräche mit Kunden." },
              { title: "Interviews mit Speakern und Gästen", text: "Guter Ton über Funk-Lavaliermikrofone für O-Töne, Testimonials und Statements." },
              { title: "Hochformat-Clips für Social Media", text: "Im Format 9:16, fertig zum Hochladen auf LinkedIn, Instagram Reels oder YouTube Shorts." },
              { title: "Fotogalerie", text: "Meine bearbeiteten Fotos in einer privaten Online-Galerie, in der Regel innerhalb von 48 Stunden." },
              { title: "Nutzungsrechte", text: "Kommerzielle Nutzungsrechte für Ihre Unternehmenskommunikation: Website, PR, Social Media und intern." },
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
            Foto und Video für Ihr Event planen
          </h2>
          <p className="text-xl opacity-80 font-light">
            Schreiben Sie mir über das Kontaktformular. Wenn wir schon per E-Mail in Kontakt sind, antworten Sie einfach dort, dann plane ich das Video mit Valeriy ein.
          </p>
          <Link href="/kontakt" className="bg-[var(--color-text-main)] text-white px-10 py-4 text-base font-semibold transition-colors hover:bg-[var(--color-accent-hover)] rounded-2xl shadow-sm">
            Kontakt aufnehmen
          </Link>
        </div>
      </section>
    </>
  );
}
