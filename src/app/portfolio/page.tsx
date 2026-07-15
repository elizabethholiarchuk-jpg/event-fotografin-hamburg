import { Metadata } from "next";
import PortfolioPage from "@/components/pages/PortfolioPage";
import { getDictionary } from "@/i18n";

export async function generateMetadata(): Promise<Metadata> {
  const t = getDictionary('en');
  return {
    title: t.portfolio.meta.title,
    description: t.portfolio.meta.description,
    alternates: {
      canonical: "/portfolio",
      languages: {
        'en': '/portfolio',
        'de': '/de/portfolio',
        'x-default': '/portfolio',
      },
    },
  };
}

export default function Portfolio() {
  return <PortfolioPage lang="en" />;
}
