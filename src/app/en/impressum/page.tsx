import { Metadata } from "next";
import ImpressumPage from "@/components/pages/ImpressumPage";

export const metadata: Metadata = {
  title: "Impressum | Legal Notice",
  robots: "noindex, follow",
  openGraph: {
      url: "/en/impressum",
      locale: "en_US",
      alternateLocale: ["de_DE"],
    },
    alternates: {
    canonical: "/en/impressum",
    languages: {
        en: "/en/impressum",
        de: "/impressum",
        'x-default': "/impressum",
      },
  },
};

export default function Impressum() {
  return <ImpressumPage lang="en" />;
}
