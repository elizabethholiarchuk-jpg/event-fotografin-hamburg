import { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { buildServicePageJsonLd, buildFaqPageJsonLd } from "@/lib/schema";
import { de } from "@/i18n/de";

export const metadata: Metadata = {
  title: "Messefotograf Hamburg — Standfotografie & B2B-Marketing | Liza Holiarchuk",
  description:
    "Messefotografie in Hamburg: Standfotografie, Besucherinteraktionen, Demos und Branding — u. a. auf SMM, AGRITECHNICA und Aquatech. Bilder meist in 48 Stunden.",
  alternates: {
    canonical: "https://www.event-fotografin-hamburg.de/de/messefotografie-hamburg",
    languages: {
      en: "/trade-show-photography-hamburg",
      de: "/de/messefotografie-hamburg",
      "x-default": "/trade-show-photography-hamburg",
    },
  },
  openGraph: {
    title: "Messefotograf Hamburg — Standfotografie & B2B-Marketing | Liza Holiarchuk",
    description: "Messefotografie in Hamburg: Standfotografie, Besucherinteraktionen, Demos und Branding — u. a. auf SMM, AGRITECHNICA und Aquatech. Bilder meist in 48 Stunden.",
    url: "/de/messefotografie-hamburg",
    images: [
      {
        url: "/images/services/trade-show-photography-hamburg-messe.webp",
        width: 1200,
        height: 630,
        alt: "Messefotografie — gebrandeter Messestand auf einer internationalen Leitmesse",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      {
        url: "/images/services/trade-show-photography-hamburg-messe.webp",
        width: 1200,
        height: 630,
        alt: "Messefotografie — gebrandeter Messestand auf einer internationalen Leitmesse",
      },
    ],
  },
};

export default function MessefotografieHamburg() {
  const t = de.messeFotografie;

  return (
    <ServicePage
      hero={{
        h1: t.hero.title,
        subtitle: t.hero.subtitle,
      }}
      heroImage={{
        src: "/images/services/trade-show-photography-hamburg-messe.webp",
        alt: "Messefotografie — gebrandeter Messestand auf einer internationalen Leitmesse",
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
      relatedCategories={["Trade Show"]}
      schema={buildServicePageJsonLd("de", {
        serviceType: "Trade Show Photography",
        name: "Messefotograf Hamburg — Standfotografie & B2B-Marketing | Liza Holiarchuk",
        description: "Messefotografie in Hamburg: Standfotografie, Besucherinteraktionen, Demos und Branding — u. a. auf SMM, AGRITECHNICA und Aquatech. Bilder meist in 48 Stunden.",
        path: "/de/messefotografie-hamburg",
        image: "/images/services/trade-show-photography-hamburg-messe.webp",
      })}
      faqSchema={buildFaqPageJsonLd(t.faq)}
    />
  );
}
