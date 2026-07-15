import { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { buildServicePageJsonLd, buildFaqPageJsonLd } from "@/lib/schema";
import { de } from "@/i18n/de";

export const metadata: Metadata = {
  title: "Corporate Event Fotografin Hamburg — Firmenfeiern & Galas | Liza Holiarchuk",
  description:
    "Corporate Event Fotografin in Hamburg für Preisverleihungen, interne Events, Firmenjubiläen und Executive-Dinner.",
  alternates: {
    canonical: "/de/corporate-event-fotograf-hamburg",
    languages: {
      en: "/corporate-event-photography-hamburg",
      de: "/de/corporate-event-fotograf-hamburg",
      "x-default": "/corporate-event-photography-hamburg",
    },
  },
  openGraph: {
    title: "Corporate Event Fotografin Hamburg — Firmenfeiern & Galas | Liza Holiarchuk",
    description: "Corporate Event Fotografin in Hamburg für Preisverleihungen, interne Events, Firmenjubiläen und Executive-Dinner.",
    url: "/de/corporate-event-fotograf-hamburg",
    images: [
      {
        url: "/images/services/corporate-event-photography-hamburg-cover.webp",
        width: 1200,
        height: 630,
        alt: "Corporate Event Fotografie Hamburg — Gäste bei einem abendlichen Corporate Dinner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      {
        url: "/images/services/corporate-event-photography-hamburg-cover.webp",
        width: 1200,
        height: 630,
        alt: "Corporate Event Fotografie Hamburg — Gäste bei einem abendlichen Corporate Dinner",
      },
    ],
  },
};

export default function CorporateEventFotografieHamburg() {
  const t = de.corporateEventFotografie;

  return (
    <ServicePage
      lang="de"
      hero={{
        h1: t.hero.title,
        subtitle: t.hero.subtitle,
      }}
      heroImage={{
        src: "/images/services/corporate-event-photography-hamburg-cover.webp",
        alt: "Corporate Event Fotografie Hamburg — Gäste bei einem abendlichen Corporate Dinner",
      }}
      intro={t.intro}
      whatYouGet={t.whatYouGet}
      howItWorks={t.howItWorks}
      faq={t.faq}
      testimonial={{
        quote: de.home.testimonials.items[3].content,
        name: de.home.testimonials.items[3].name,
        role: de.home.testimonials.items[3].role,
      }}
      relatedCategories={["Corporate"]}
      schema={buildServicePageJsonLd("de", {
        serviceType: "Corporate Event Photography",
        name: "Corporate Event Fotografin Hamburg — Firmenfeiern & Galas | Liza Holiarchuk",
        description: "Corporate Event Fotografin in Hamburg für Preisverleihungen, interne Events, Firmenjubiläen und Executive-Dinner.",
        path: "/de/corporate-event-fotograf-hamburg",
        image: "/images/services/corporate-event-photography-hamburg-cover.webp",
      })}
      faqSchema={buildFaqPageJsonLd(t.faq)}
    />
  );
}
