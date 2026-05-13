import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import Script from "next/script";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lizaholiarchuk.com"),
  title: {
    template: "%s | Liza Holiarchuk",
    default: "Event Photographer Hamburg | Liza Holiarchuk",
  },
  description: "Professional event photographer in Hamburg for conferences, trade shows & corporate events. Europe-wide.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lizaholiarchuk.com",
    siteName: "Liza Holiarchuk Event Photography",
    images: [
      {
        url: "/images/home/02-hero/01-hero.webp",
        width: 1200,
        height: 630,
        alt: "Liza Holiarchuk - Event Photographer Hamburg",
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
    <html lang="en" className="scroll-smooth">
      <head>
        <Script id="clarity-script" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "viq9ol0bs0");
          `}
        </Script>
      </head>
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
        <CookieBanner />
      </body>
    </html>
  );
}
