import { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { buildServicePageJsonLd, buildFaqPageJsonLd } from "@/lib/schema";
import { de } from "@/i18n/de";

export const metadata: Metadata = {
  title: "Konferenzfotograf Hamburg — Kongresse & B2B-Events | Liza Holiarchuk",
  description:
    "Konferenzfotografie in Hamburg: Keynotes, Panels, Networking und Speaker-Porträts. Bearbeitete Galerie meist in 48 Stunden, Highlights am selben Tag.",
  alternates: {
    canonical: "/de/konferenzfotografie-hamburg",
    languages: {
      en: "/conference-photographer-hamburg",
      de: "/de/konferenzfotografie-hamburg",
      "x-default": "/conference-photographer-hamburg",
    },
  },
  openGraph: {
    title: "Konferenzfotograf Hamburg — Kongresse & B2B-Events | Liza Holiarchuk",
    description: "Konferenzfotografie in Hamburg: Keynotes, Panels, Networking und Speaker-Porträts.",
    url: "/de/konferenzfotografie-hamburg",
    images: [
      {
        url: "/images/services/conference-photographer-hamburg-cover.webp",
        width: 1200,
        height: 630,
        alt: "Konferenzfotografie — großer Saal mit aufmerksamem Publikum",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      {
        url: "/images/services/conference-photographer-hamburg-cover.webp",
        width: 1200,
        height: 630,
        alt: "Konferenzfotografie — großer Saal mit aufmerksamem Publikum",
      },
    ],
  },
};

export default function KonferenzfotografieHamburg() {
  const t = de.konferenzFotografie;

  return (
    <ServicePage
      lang="de"
      hero={{
        h1: t.hero.title,
        subtitle: t.hero.subtitle,
      }}
      heroImage={{
        src: "/images/services/conference-photographer-hamburg-cover.webp",
        alt: "Konferenzfotografie — großer Saal mit aufmerksamem Publikum",
      }}
      intro={t.intro}
      whatYouGet={t.whatYouGet}
      howItWorks={t.howItWorks}
      faq={t.faq}
      testimonial={{
        quote: de.home.testimonials.items[2].content,
        name: de.home.testimonials.items[2].name,
        role: de.home.testimonials.items[2].role,
      }}
      relatedCategories={["Conference"]}
      schema={buildServicePageJsonLd("de", {
        serviceType: "Conference Photography",
        name: "Konferenzfotograf Hamburg — Kongresse & B2B-Events | Liza Holiarchuk",
        description: "Konferenzfotografie in Hamburg: Keynotes, Panels, Networking und Speaker-Porträts. Bearbeitete Galerie meist in 48 Stunden, Highlights am selben Tag.",
        path: "/de/konferenzfotografie-hamburg",
        image: "/images/services/conference-photographer-hamburg-cover.webp",
      })}
      faqSchema={buildFaqPageJsonLd(t.faq)}
    />
  );
}
