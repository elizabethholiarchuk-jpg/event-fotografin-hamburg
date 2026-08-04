import { Metadata } from "next";
import DankePage from "@/components/pages/DankePage";
import { getDictionary } from "@/i18n";

export async function generateMetadata(): Promise<Metadata> {
  const t = getDictionary('en');
  return {
    title: t.danke.meta.title,
    description: "Thank you for your request.",
    openGraph: {
      url: "/en/danke",
      locale: "en_US",
      alternateLocale: ["de_DE"],
    },
    alternates: {
      canonical: "/en/danke",
      languages: {
        en: "/en/danke",
        de: "/danke",
        'x-default': "/danke",
      },
    },
  };
}

export default function Danke() {
  return <DankePage lang="en" />;
}
