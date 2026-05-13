import { Metadata } from "next";
import DankePage from "@/components/pages/DankePage";
import { getDictionary } from "@/i18n";

export async function generateMetadata(): Promise<Metadata> {
  const t = getDictionary('de');
  return {
    title: t.danke.meta.title,
    description: "Ihre Anfrage wurde erfolgreich gesendet.",
    alternates: {
      canonical: "/de/danke",
      languages: {
        'en': '/danke',
        'de': '/de/danke',
        'x-default': '/danke',
      },
    },
  };
}

export default function DankeDE() {
  return <DankePage lang="de" />;
}
