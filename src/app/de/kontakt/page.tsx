import { Metadata } from "next";
import KontaktPage from "@/components/pages/KontaktPage";
import { getDictionary } from "@/i18n";

export async function generateMetadata(): Promise<Metadata> {
  const t = getDictionary('de');
  return {
    title: t.kontakt.meta.title,
    description: t.kontakt.meta.description,
    alternates: {
      canonical: "/de/kontakt",
      languages: {
        'en': '/contact',
        'de': '/de/kontakt',
        'x-default': '/contact',
      },
    },
  };
}

export default function KontaktDE() {
  return <KontaktPage lang="de" />;
}
