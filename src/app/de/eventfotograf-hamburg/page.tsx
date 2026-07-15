import { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { buildServicePageJsonLd, buildFaqPageJsonLd } from "@/lib/schema";

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
    description: "Eventfotografin in Hamburg für Konferenzen, Messen und Firmenevents. Bearbeitete Galerie in der Regel in 2 Werktagen, Highlights am selben Tag auf Wunsch. Jetzt anfragen.",
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

const FAQ = [
  { q: "Wie weit im Voraus sollte ich buchen?", a: "Idealerweise 4–8 Wochen vor Ihrem Event. Für große Konferenzen empfehle ich, noch früher zu buchen. Bei kurzfristigen Anfragen können Sie sich gerne melden — ich tue mein Bestes." },
  { q: "Arbeiten Sie auch außerhalb von Hamburg?", a: "Ja. Ich fotografiere regelmäßig Events in Berlin, Hannover, Düsseldorf, Frankfurt, München, Amsterdam, Mailand, Kopenhagen und anderen europäischen Städten. Reisekosten werden separat angeboten." },
  { q: "Welches Equipment verwenden Sie?", a: "Professionelle spiegellose Vollformatkameras mit einer Reihe lichtstarker Objektive, die sich für Konferenzsäle, Messehallen und Abendveranstaltungen eignen." },
  { q: "Wie erhalte ich die finalen Bilder?", a: "Über eine private Online-Galerie (Picdrop oder ähnlich) — die Sie intern und mit Ihren Eventgästen teilen können. Optional passwortgeschützt." },
  { q: "Kann ich Sie für ein mehrtägiges Event buchen?", a: "Absolut. Es gibt Mehrtagespakete für Messen, Kongresse und Firmenevents, die 2–5 Tage dauern. Die Preise werden pro Projekt vereinbart." },
  { q: "Liefern Sie Rohdateien (RAWs)?", a: "Rohdateien sind standardmäßig nicht enthalten. Das gelieferte Endprodukt ist die vollständig bearbeitete JPEG/TIFF-Galerie. Rohdateien können für spezifische Anwendungsfälle besprochen werden." },
  { q: "Was ist, wenn ich einen zweiten Fotografen benötige?", a: "Für größere Events mit parallelen Bühnen oder Tracks kann ein zweiter Fotograf organisiert werden. Erwähnen Sie dies einfach in Ihrer Anfrage." },
  { q: "Wie läuft die Rechnungsstellung ab?", a: "Nach der Bestätigung wird eine projektbezogene Rechnung ausgestellt. Die Zahlungsbedingungen werden im Vorfeld vereinbart." }
];

export default function EventFotografHamburg() {
  return (
    <ServicePage
      lang="de"
      hero={{
        h1: "Eventfotograf Hamburg",
        subtitle:
          "B2B-Konferenzen, Messen und Firmenevents – präzise dokumentiert. Mit Sitz in Hamburg, europaweit im Einsatz.",
      }}
      heroImage={{
        src: "/images/services/event-photographer-hamburg-cover.webp",
        alt: "Eventfotograf Hamburg — Panel-Diskussion auf einer B2B-Konferenz in Hamburg",
      }}
      intro="Ich bin Liza Holiarchuk, eine professionelle Eventfotografin aus Hamburg. Mein Schwerpunkt liegt in der B2B-Eventfotografie für Konferenzen, Messen und Firmenveranstaltungen – von eintägigen Panels bis hin zu großen, mehrtägigen Messen. Marketingteams, PR-Manager und Eventagenturen in Deutschland und Europa vertrauen auf meine Arbeit, wenn sie hochwertige, markenkonsistente Bilder schnell benötigen. Ob Ihre Veranstaltung in der Hamburg Messe, in einem Konferenzzentrum in Berlin oder in einer Location in Amsterdam oder Mailand stattfindet – ich reise dorthin, wo Ihre Events stattfinden."
      whatYouGet={[
        "Ganztages- oder Halbtagespakete",
        "Porträts von Keynotes, Panels und Speakern",
        "Aufnahmen von Publikum, Networking und Messeständen",
        "Same-Day-Highlights (auf Anfrage)",
        "Vollständig bearbeitete Galerie in der Regel innerhalb von 2 Werktagen",
        "Private Online-Galerie (optional passwortgeschützt)",
        "Umfassende Nutzungsrechte für die Unternehmenskommunikation",
        "Optional: Video-Add-on, zweiter Fotograf",
      ]}
      howItWorks={[
        { step: "Anfrage & Briefing", desc: "Teilen Sie mir Ihre Event-Details mit — Datum, Ort, Programm-Highlights und Must-have-Motive." },
        { step: "Angebot & Bestätigung", desc: "Sie erhalten innerhalb von 24 Stunden ein klares Angebot. Die Buchung wird mit einer kurzen Vereinbarung bestätigt." },
        { step: "Fotografie vor Ort", desc: "Ich bin frühzeitig vor Ort, arbeite unaufdringlich und halte jeden wichtigen Moment Ihrer Veranstaltung fest." },
        { step: "Bearbeitung & Lieferung", desc: "Vollständig bearbeitete Fotos werden über eine private Galerie geliefert — in der Regel innerhalb von 48 Stunden." },
        { step: "Nutzungsrechte", desc: "Alle Bilder beinhalten umfassende Nutzungsrechte für Unternehmenskommunikation, Website und Social Media." },
      ]}
      faq={FAQ}
      testimonial={{
        quote: "Liza hat ein hervorragendes Auge für die richtigen Momente. Die Zusammenarbeit war entspannt und die Lieferung unglaublich schnell.",
        name: "Maya Wagner",
        role: "Partner Success, Plug and Play Tech Center Hamburg",
      }}
      relatedCategories={["Conference", "Trade Show", "Corporate"]}
      schema={buildServicePageJsonLd('de', {
        serviceType: "Eventfotografie",
        name: "Eventfotograf Hamburg",
        description: "Eventfotografin in Hamburg für Konferenzen, Messen und Firmenevents. Bearbeitete Galerie in der Regel in 2 Werktagen, Highlights am selben Tag auf Wunsch. Jetzt anfragen.",
        path: "/de/eventfotograf-hamburg",
        image: "/images/services/event-photographer-hamburg-cover.webp",
      })}
      faqSchema={buildFaqPageJsonLd(FAQ)}
    />
  );
}
