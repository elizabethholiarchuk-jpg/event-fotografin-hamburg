import { Metadata } from "next";
import HomePage from "@/components/pages/HomePage";
import { getDictionary } from "@/i18n";
import { JsonLd } from "@/components/JsonLd";
import { buildHomepageJsonLd } from "@/lib/schema";

export async function generateMetadata(): Promise<Metadata> {
  const t = getDictionary('en');
  return {
    title: t.home.meta.title,
    description: t.home.meta.description,
    alternates: {
      canonical: "/",
      languages: {
        'en': '/',
        'de': '/de',
        'x-default': '/',
      },
    },
  };
}

export default function Home() {
  return (
    <>
      <JsonLd data={buildHomepageJsonLd('en')} />
      <HomePage lang="en" />
    </>
  );
}
