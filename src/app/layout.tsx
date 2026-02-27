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
  title: {
    template: "%s | Liza Holiarchuk",
    default: "Liza Holiarchuk | Eventfotografin Hamburg",
  },
  description: "Konferenzen, Messen & Corporate Events zuverlässig, strukturiert, schnell geliefert",
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
        <Analytics />
      </body>
    </html>
  );
}
