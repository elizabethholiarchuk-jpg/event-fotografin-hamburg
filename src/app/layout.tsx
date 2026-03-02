import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lizaholiarchuk.com"),
  title: {
    template: "%s | Liza Holiarchuk",
    default: "Eventfotografin Hamburg | Liza Holiarchuk",
  },
  description: "Professionelle Eventfotografin in Hamburg: Konferenzfotografie, Messefotografie & Corporate Events europaweit.",
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: "https://lizaholiarchuk.com",
    siteName: "Liza Holiarchuk Eventfotografie",
    images: [
      {
        url: "/images/home/02-hero/01-hero.webp",
        width: 1200,
        height: 630,
        alt: "Liza Holiarchuk - Eventfotografin Hamburg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased flex flex-col min-h-screen`}>
        <Header />
        <main className="flex-grow flex flex-col pt-[72px]">
          {children}
        </main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Liza Holiarchuk",
              image: "https://lizaholiarchuk.com/images/home/10-about/01-about.webp",
              url: "https://lizaholiarchuk.com",
              telephone: "+491752606697",
              email: "hello@lizaholiarchuk.com",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Rehhoffstrasse 10",
                addressLocality: "Hamburg",
                postalCode: "20459",
                addressCountry: "DE",
              },
              areaServed: ["Hamburg", "Germany", "Europe"],
              description: "Eventfotografie, Konferenzfotografie, Messefotografie, Corporate Events, Business Portraits",
              sameAs: []
            }),
          }}
        />
        <Analytics />
      </body>
    </html>
  );
}
