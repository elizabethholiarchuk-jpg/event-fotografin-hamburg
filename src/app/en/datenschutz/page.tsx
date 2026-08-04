import { Metadata } from "next";
import DatenschutzPage from "@/components/pages/DatenschutzPage";

export const metadata: Metadata = {
  title: "Privacy Policy | Datenschutz",
  robots: "noindex, follow",
  openGraph: {
      url: "/en/datenschutz",
      locale: "en_US",
      alternateLocale: ["de_DE"],
    },
    alternates: {
    canonical: "/en/datenschutz",
    languages: {
        en: "/en/datenschutz",
        de: "/datenschutz",
        'x-default': "/datenschutz",
      },
  },
};

export default function Datenschutz() {
  return <DatenschutzPage lang="en" />;
}
