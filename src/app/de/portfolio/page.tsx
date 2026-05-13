import { Metadata } from "next";
import PortfolioPage from "@/components/pages/PortfolioPage";
import { getDictionary } from "@/i18n";

export async function generateMetadata(): Promise<Metadata> {
  const t = getDictionary('de');
  return {
    title: t.portfolio.meta.title,
    description: t.home.meta.description,
    alternates: {
      canonical: "/de/portfolio",
      languages: {
        'en': '/portfolio',
        'de': '/de/portfolio',
        'x-default': '/portfolio',
      },
    },
  };
}

export default function PortfolioDE() {
  return <PortfolioPage lang="de" />;
}
