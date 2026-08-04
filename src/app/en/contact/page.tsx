import { Metadata } from "next";
import KontaktPage from "@/components/pages/KontaktPage";
import { getDictionary } from "@/i18n";

export async function generateMetadata(): Promise<Metadata> {
  const t = getDictionary("en");
  return {
    title: { absolute: "Contact — Book Event Photographer Hamburg" },
    description:
      "Get in touch to check availability and request a quote for your conference, trade show or corporate event. I'll reply within 24 hours.",
    alternates: {
      canonical: "/en/contact",
      languages: {
        en: "/en/contact",
        de: "/kontakt",
        'x-default': "/kontakt",
      },
    },
    openGraph: {
      locale: "en_US",
      alternateLocale: ["de_DE"],
      title: "Contact — Book Event Photographer Hamburg",
      description: "Request a quote for your event. Available across Hamburg & Europe.",
      url: "/en/contact",
    },
  };
}

export default function ContactPage() {
  return <KontaktPage lang="en" />;
}
