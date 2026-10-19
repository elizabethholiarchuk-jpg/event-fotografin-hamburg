import { Metadata } from "next";
import ChristmasPartyPage, { type ChristmasPartyContent } from "@/components/pages/ChristmasPartyPage";
import { JsonLd } from "@/components/JsonLd";
import { buildServicePageJsonLd, buildFaqPageJsonLd } from "@/lib/schema";
import { weihnachtsfeierPhotos } from "@/data/weihnachtsfeier";
import { SOCIAL_CLIP_PRICE } from "@/data/videoOptions";

const weihnachtsfeierHero = weihnachtsfeierPhotos.tanzflaeche;

const TITLE = "Christmas Party Photographer in Hamburg | Corporate Events";
const DESCRIPTION =
  "Photographer for corporate Christmas parties in Hamburg. Up to 4 hours from €1,200, first photos the next day. Book your December date now.";
const PATH = "/en/christmas-party-photographer-hamburg";

export const metadata: Metadata = {
  title: { absolute: TITLE },
  description: DESCRIPTION,
  alternates: {
    canonical: PATH,
    languages: {
      en: PATH,
      de: "/weihnachtsfeier-fotograf-hamburg",
      "x-default": "/weihnachtsfeier-fotograf-hamburg",
    },
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    locale: "en_US",
    alternateLocale: ["de_DE"],
    url: PATH,
    images: [
      {
        url: weihnachtsfeierHero.src,
        width: weihnachtsfeierHero.width,
        height: weihnachtsfeierHero.height,
        alt: weihnachtsfeierHero.alt.en,
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
        alt: weihnachtsfeierHero.alt.en,
      },
    ],
  },
};

const FAQ = [
  { q: "How early should we book?", a: "December evenings book up fast. It's best to ask 4–6 weeks ahead." },
  { q: "Do you shoot in low light?", a: "Yes. Hotels, restaurants and event venues in the evening are my normal working environment." },
  { q: "What if the party runs longer than 4 hours?", a: "Each extra hour is charged separately. Let me know in advance and I'll plan for it." },
  { q: "Do you travel outside Hamburg?", a: "Yes, to the surrounding area and across Germany. Travel outside Hamburg is charged at cost." },
];

const CONTENT: ChristmasPartyContent = {
  h1: "Christmas Party Photographer in Hamburg",
  intro:
    "I photograph company Christmas and year-end parties in Hamburg. Quietly and with an eye for real moments: speeches, team photos, the mood of the evening. You get the first photos the next day.",
  ctaLabel: "Ask about your Christmas party date",
  ctaHref: "/en/contact",
  trustLine: ["Recently: Christmas party at Fairmont Hotel Vier\u00A0Jahreszeiten", "First photos the next day", "from €1,200"],
  whatYouGetTitle: "What you get",
  whatYouGet: [
    "Up to 4 hours on site, from €1,200 plus VAT",
    "80–150 edited photos in an online gallery",
    "First selection the next day, all photos within 48 hours",
    "Usage rights for internal communication, social media and your website",
    `Optional: social clip for LinkedIn or Instagram, ${SOCIAL_CLIP_PRICE.en}`,
  ],
  howItWorksTitle: "How it works",
  howItWorks: [
    "A short call beforehand: schedule, key people, your wishes.",
    "On the evening I work quietly in the background. We take the team photo at a time we agree on.",
    "The next day you get the first selection, the full gallery within 48 hours.",
  ],
  galleryTitle: "Example: Christmas party at Fairmont Hotel Vier\u00A0Jahreszeiten",
  gallerySubtitle: "Theme of the evening: masquerade ball",
  faq: FAQ,
  finalTitle: "Ready to Book?",
  finalText: "Send your inquiry — I'll confirm availability and next steps.",
};

export default function ChristmasPartyPhotographerHamburg() {
  return (
    <>
      <JsonLd
        data={buildServicePageJsonLd("en", {
          serviceType: "Christmas Party Photography",
          name: CONTENT.h1,
          description: DESCRIPTION,
          path: PATH,
          image: weihnachtsfeierHero.src,
        })}
      />
      <JsonLd data={buildFaqPageJsonLd(FAQ)} />
      <ChristmasPartyPage lang="en" content={CONTENT} />
    </>
  );
}
