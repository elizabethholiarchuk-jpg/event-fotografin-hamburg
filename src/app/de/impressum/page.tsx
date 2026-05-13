import { Metadata } from "next";
import ImpressumPage from "@/components/pages/ImpressumPage";

export const metadata: Metadata = {
  title: "Impressum",
  robots: "noindex, follow",
  alternates: {
    canonical: "/de/impressum",
    languages: {
      'en': '/impressum',
      'de': '/de/impressum',
      'x-default': '/impressum',
    },
  },
};

export default function ImpressumDE() {
  return <ImpressumPage lang="de" />;
}
