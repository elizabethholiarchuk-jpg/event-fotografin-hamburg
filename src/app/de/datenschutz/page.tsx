import { Metadata } from "next";
import DatenschutzPage from "@/components/pages/DatenschutzPage";

export const metadata: Metadata = {
  title: "Datenschutzerklärung",
  robots: "noindex, follow",
  alternates: {
    canonical: "/de/datenschutz",
    languages: {
      'en': '/datenschutz',
      'de': '/de/datenschutz',
      'x-default': '/datenschutz',
    },
  },
};

export default function DatenschutzDE() {
  return <DatenschutzPage lang="de" />;
}
