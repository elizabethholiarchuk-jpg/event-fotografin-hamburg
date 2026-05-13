import { Metadata } from "next";
import HomePage from "@/components/pages/HomePage";
import { getDictionary } from "@/i18n";

export async function generateMetadata(): Promise<Metadata> {
  const t = getDictionary('de');
  return {
    title: t.home.meta.title,
    description: t.home.meta.description,
    alternates: {
      canonical: "/de",
      languages: {
        'en': '/',
        'de': '/de',
        'x-default': '/',
      },
    },
  };
}

export default function HomeDE() {
  return <HomePage lang="de" />;
}
