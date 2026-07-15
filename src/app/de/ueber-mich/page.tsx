import { Metadata } from "next";
import Link from "next/link";
import { JsonLd } from "@/components/JsonLd";
import { buildAboutJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Über mich — Eventfotografin Hamburg",
  description:
    "Event- und Konferenzfotografin in Hamburg. Vertrauen von Lloyd's Register, Shell und WFUNA. Für B2B-Events in Deutschland und europaweit.",
  alternates: {
    canonical: "/de/ueber-mich",
  },
  openGraph: {
    title: "Über mich — Eventfotografin Hamburg | Liza Holiarchuk",
    url: "/de/ueber-mich",
  },
};

export default function AboutPageDE() {
  return (
    <>
      <JsonLd data={buildAboutJsonLd('de')} />

      {/* Hero */}
      <section className="pt-32 md:pt-44 pb-16 md:pb-24 border-b border-[var(--color-border-hairline)]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="flex flex-col gap-6">
            <nav aria-label="Breadcrumb" className="text-[13px] text-[var(--color-text-muted)] font-light">
              <Link href="/de" className="hover:text-[var(--color-accent)] transition-colors">Start</Link>
              <span className="mx-2" aria-hidden="true">›</span>
              <span className="text-[var(--color-text-main)]">Über mich</span>
            </nav>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[var(--color-text-main)] leading-[1.08]">
              Liza Holiarchuk
            </h1>
            <p className="text-xl text-[var(--color-text-muted)] font-normal leading-relaxed">
              Event- und Konferenzfotografin mit Base in Hamburg und offizielle Fotografin der Hamburg Messe und Congress GmbH.
            </p>
            <p className="text-[17px] text-[var(--color-text-muted)] leading-[1.85]">
              Ich dokumentiere B2B-Events so, wie sie wirklich sind: Bühnenmomente, die Energie im Publikum, Networking und die Details, die später für PR, Social Media und interne Kommunikation den Unterschied machen. Meine Kunden reichen von internationalen Verbänden und Messeausstellern bis hin zu Tech-Startups und etablierten Unternehmen.
            </p>
            <p className="text-[17px] text-[var(--color-text-muted)] leading-[1.85]">
              Von Hamburg aus begleite ich regelmäßig Konferenzen und Corporate Events in ganz Deutschland und Europa — darunter Berlin, Düsseldorf, Frankfurt, Hannover, Amsterdam, Mailand und Kopenhagen.
            </p>
            <div className="flex flex-wrap gap-4 mt-4">
              <Link href="/de/kontakt" className="bg-[var(--color-accent)] text-white px-8 py-3.5 rounded-2xl text-[15px] font-semibold transition-colors hover:bg-[var(--color-accent-hover)]">
                Kontakt
              </Link>
              <Link href="/de/portfolio" className="border border-[var(--color-border-hairline)] text-[var(--color-text-main)] px-8 py-3.5 rounded-2xl text-[15px] font-semibold transition-colors hover:border-[var(--color-text-main)]">
                Portfolio ansehen
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/5] bg-[var(--color-border-hairline)] rounded-2xl overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/home/10-about/01-about.webp"
              alt="Liza Holiarchuk — Eventfotografin Hamburg"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* How I work */}
      <section className="py-16 md:py-24 border-b border-[var(--color-border-hairline)]">
        <div className="max-w-[900px] mx-auto px-6 md:px-12 flex flex-col gap-10">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[var(--color-text-main)]">Wie ich arbeite</h2>
          <div className="flex flex-col gap-6 text-[17px] text-[var(--color-text-muted)] leading-[1.85]">
            <p>Vor Ort arbeite ich ruhig, diskret und strukturiert. Ich brauche keine Begleitung während des Events — ich komme mit einem Briefing, arbeite die Agenda ab und weiß, was wichtig ist, ohne den Ablauf zu stören.</p>
            <p>Die Lieferung erfolgt nahtlos: eine private, bei Bedarf passwortgeschützte Online-Galerie, meist innerhalb von 48 Stunden. Erste Highlights für Social Media liefere ich auf Wunsch noch am selben Tag.</p>
            <p>Mein Bearbeitungsstil ist clean und konsistent — passend für Corporate und PR, ohne übertriebene Filter oder dramatische Stilisierung.</p>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-16 md:py-24 border-b border-[var(--color-border-hairline)]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col gap-8">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[var(--color-text-main)]">Ausgewählte Kunden & Projekte</h2>
          <p className="text-[var(--color-text-muted)] text-[17px] leading-relaxed max-w-[65ch]">
            Ich habe mit Organisationen aus den Bereichen Forschung, Technologie, Maritime Wirtschaft, Agrar, Food, Legal und Finance gearbeitet — an Locations von der Hamburg Messe bis zum UN-Hauptsitz in Genf.
          </p>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 text-[15px] text-[var(--color-text-muted)]">
            {[
              "Lloyd's Register", "Plug and Play Tech Center", "WFUNA / WISE Conference",
              "Shell Global Solutions", "FEMS", "CLAAS", "Oyster Bay Venture Capital",
              "AKVANTIS", "IMMOJECTS", "Flair / Salesforce", "Factory Hammerbrooklyn", "Junico GmbH",
            ].map((c) => (
              <li key={c} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] opacity-60 shrink-0" />
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-[#DDE7F0] text-[var(--color-text-main)] flex justify-center text-center">
        <div className="max-w-[600px] w-full px-6 flex flex-col gap-8 items-center">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1]">Lassen Sie uns zusammenarbeiten</h2>
          <p className="text-xl opacity-80 font-light">Senden Sie Ihre Anfrage — ich antworte innerhalb von 24 Stunden.</p>
          <Link href="/de/kontakt" className="bg-[var(--color-text-main)] text-white px-10 py-4 text-base font-semibold transition-colors hover:bg-[var(--color-accent-hover)] rounded-2xl">
            Kontakt aufnehmen
          </Link>
        </div>
      </section>
    </>
  );
}
