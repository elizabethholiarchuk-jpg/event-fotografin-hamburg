import { Metadata } from "next";
import KontaktPage from "@/components/pages/KontaktPage";
import { getDictionary } from "@/i18n";

export async function generateMetadata(): Promise<Metadata> {
  const t = getDictionary("en");
  return {
    title: "Contact — Event Photographer Hamburg | Liza Holiarchuk",
    description:
      "Get in touch to check availability and request a quote for your conference, trade show or corporate event. I'll reply within 24 hours.",
    alternates: {
      canonical: "/contact",
      languages: {
        en: "/contact",
        de: "/de/kontakt",
        "x-default": "/contact",
      },
    },
    openGraph: {
      title: "Contact | Liza Holiarchuk Event Photography",
      description: "Request a quote for your event. Available across Hamburg & Europe.",
      url: "https://lizaholiarchuk.com/contact",
    },
  };
}

export default function ContactPage() {
  return <KontaktPage lang="en" />;
}
