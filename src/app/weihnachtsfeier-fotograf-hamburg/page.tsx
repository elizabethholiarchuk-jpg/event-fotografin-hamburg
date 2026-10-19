import { Metadata } from "next";
import ChristmasPartyPage, { type ChristmasPartyContent } from "@/components/pages/ChristmasPartyPage";
import { JsonLd } from "@/components/JsonLd";
import { buildServicePageJsonLd, buildFaqPageJsonLd } from "@/lib/schema";
import { weihnachtsfeierPhotos } from "@/data/weihnachtsfeier";
import { SOCIAL_CLIP_PRICE } from "@/data/videoOptions";

const weihnachtsfeierHero = weihnachtsfeierPhotos.tanzflaeche;

const TITLE = "Fotograf für Weihnachtsfeier in Hamburg | Firmenfeier fotografieren";
const DESCRIPTION =
  "Fotografin für Weihnachtsfeiern und Firmenfeiern in Hamburg. Bis zu 4 Stunden ab 1.200 €, erste Bilder am nächsten Tag. Jetzt Termin im Dezember anfragen.";
const PATH = "/weihnachtsfeier-fotograf-hamburg";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: {
    canonical: PATH,
    languages: {
      en: "/en/christmas-party-photographer-hamburg",
      de: PATH,
      "x-default": PATH,
    },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    locale: "de_DE",
    alternateLocale: ["en_US"],
    url: PATH,
    images: [
      {
        url: weihnachtsfeierHero.src,
        width: weihnachtsfeierHero.width,
        height: weihnachtsfeierHero.height,
        alt: weihnachtsfeierHero.alt.de,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      {
        url: weihnachtsfeierHero.src,
        width: weihnachtsfeierHero.width,
        height: weihnachtsfeierHero.height,
        alt: weihnachtsfeierHero.alt.de,
      },
    ],
  },
};

const FAQ = [
  { q: "Wie früh sollten wir buchen?", a: "Im Dezember sind die Abende schnell vergeben. Fragen Sie am besten 4–6 Wochen vorher an." },
  { q: "Fotografieren Sie auch bei wenig Licht?", a: "Ja. Hotels, Restaurants und Eventlocations am Abend sind mein normales Arbeitsumfeld." },
  { q: "Was, wenn die Feier länger als 4 Stunden dauert?", a: "Jede weitere Stunde rechne ich separat ab. Sagen Sie mir vorher Bescheid, dann plane ich es ein." },
  { q: "Kommen Sie auch außerhalb von Hamburg?", a: "Ja, im Umland und deutschlandweit. Die Anfahrt außerhalb Hamburgs berechne ich nach Aufwand." },
];

const CONTENT: ChristmasPartyContent = {
  h1: "Fotografin für Ihre Weihnachtsfeier in Hamburg",
  intro:
    "Ich fotografiere Weihnachtsfeiern und Jahresabschlussfeiern von Unternehmen in Hamburg. Unauffällig und mit Blick für echte Momente: Reden, Teamfotos, Stimmung am Abend. Die ersten Bilder bekommen Sie am nächsten Tag.",
  ctaLabel: "Termin für Ihre Weihnachtsfeier anfragen",
  ctaHref: "/kontakt",
  trustLine: ["Zuletzt: Weihnachtsfeier im Fairmont Hotel Vier\u00A0Jahreszeiten", "Erste Bilder am nächsten Tag", "ab 1.200 €"],
  whatYouGetTitle: "Was Sie bekommen",
  whatYouGet: [
    "Bis zu 4 Stunden vor Ort, ab 1.200 € zzgl. MwSt.",
    "80–150 bearbeitete Fotos in einer Online-Galerie",
    "Erste Auswahl am nächsten Tag, alle Bilder innerhalb von 48 Stunden",
    "Nutzungsrechte für interne Kommunikation, Social Media und Website",
    `Optional: Social-Clip für LinkedIn oder Instagram, ${SOCIAL_CLIP_PRICE.de}`,
  ],
  howItWorksTitle: "So läuft es ab",
  howItWorks: [
    "Kurze Abstimmung vorab: Ablauf, wichtige Personen, Ihre Wünsche.",
    "Am Abend arbeite ich ruhig im Hintergrund. Das Teamfoto machen wir zu einem vereinbarten Zeitpunkt.",
    "Am nächsten Tag bekommen Sie die erste Auswahl, innerhalb von 48 Stunden die komplette Galerie.",
  ],
  galleryTitle: "Beispiel: Weihnachtsfeier im Fairmont Hotel Vier\u00A0Jahreszeiten",
  gallerySubtitle: "Motto des Abends: Maskenball",
  faq: FAQ,
  finalTitle: "Bereit für eine Anfrage?",
  finalText: "Senden Sie Ihre Anfrage – ich melde mich zeitnah bezüglich Verfügbarkeit und den nächsten Schritten.",
};

export default function WeihnachtsfeierFotografHamburg() {
  return (
    <>
      <JsonLd
        data={buildServicePageJsonLd("de", {
          serviceType: "Christmas Party Photography",
          name: CONTENT.h1,
          description: DESCRIPTION,
          path: PATH,
          image: weihnachtsfeierHero.src,
        })}
      />
      <JsonLd data={buildFaqPageJsonLd(FAQ)} />
      <ChristmasPartyPage lang="de" content={CONTENT} />
    </>
  );
}
