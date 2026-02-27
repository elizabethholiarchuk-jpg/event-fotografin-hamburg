import Link from "next/link";
import { portfolioEvents } from "@/data/portfolio";
import type { Metadata } from "next";
import SafeImage from "@/components/SafeImage";
import ImageGallery from "@/components/ImageGallery";
import fs from "fs";
import path from "path";

export const metadata: Metadata = {
    title: "Portfolio",
    description: "Einblicke in vergangene Event-Projekte quer durch Branchen und Formate in Hamburg und europaweit.",
    alternates: {
        canonical: "/portfolio",
    },
};

export default function Portfolio() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BreadcrumbList",
                        "itemListElement": [
                            {
                                "@type": "ListItem",
                                "position": 1,
                                "name": "Home",
                                "item": "https://lizaholiarchuk.com"
                            },
                            {
                                "@type": "ListItem",
                                "position": 2,
                                "name": "Portfolio",
                                "item": "https://lizaholiarchuk.com/portfolio"
                            }
                        ]
                    }),
                }}
            />

            <section className="pb-6 md:pb-8 bg-transparent border-b border-[var(--color-border-hairline)] pt-32 md:pt-40">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col items-start gap-6">
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold tracking-tight text-[var(--color-text-main)] max-w-4xl leading-[1.05]">
                        Event-Portfolio
                    </h1>
                    <p className="text-lg md:text-xl text-[var(--color-text-muted)] max-w-[55ch] font-normal leading-relaxed">
                        Einblicke in eine Auswahl vergangener Konferenzen, Messen und Corporate Events. Europaweit.
                    </p>
                </div>
            </section>

            <section className="pb-24 md:pb-32 bg-transparent flex flex-col">
                {portfolioEvents.map((event, index) => {
                    const dirPath = path.join(process.cwd(), "public/images/portfolio", event.slug);
                    let actualImages: string[] = [];

                    if (fs.existsSync(dirPath)) {
                        const files = fs.readdirSync(dirPath);
                        actualImages = files
                            .filter(f => /\.(jpe?g|png|webp)$/i.test(f))
                            .sort() // 01, 02, 03...
                            .map(f => `/images/portfolio/${event.slug}/${f}`);
                    }

                    if (actualImages.length === 0) return null; // Skip empty/missing events entirely

                    return (
                        <div key={event.slug} className={`max-w-[1400px] mx-auto px-6 md:px-12 w-full flex flex-col py-10 md:py-16 ${index !== portfolioEvents.length - 1 ? 'border-b border-[var(--color-border-hairline)]' : ''}`}>
                            <div className="flex flex-col gap-2 mb-8 md:mb-12">
                                <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color-text-main)] tracking-tight max-w-[85ch]">{event.title}</h2>
                                <span className="text-lg font-normal text-[var(--color-text-muted)] mt-2">— {event.category}</span>
                            </div>

                            <ImageGallery
                                images={actualImages.map(src => ({ src, alt: event.title }))}
                                itemClassName="relative aspect-[3/2] overflow-hidden bg-transparent group cursor-zoom-in w-full block rounded-none shadow-sm border border-gray-100"
                            />
                        </div>
                    );
                })}
            </section>

            <section className="py-24 md:py-32 bg-[#DDE7F0] text-[var(--color-text-main)] flex justify-center text-center">
                <div className="max-w-[800px] w-full px-6 flex flex-col gap-10 items-center">
                    <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.1]">Verfügbarkeit prüfen &<br />Angebot erhalten</h2>
                    <p className="text-xl md:text-2xl opacity-80 font-light mt-2 md:mt-4">Ich melde mich in der Regel innerhalb von 24 Stunden.</p>
                    <Link href="/kontakt" className="bg-[var(--color-text-main)] text-white px-10 py-4 text-base font-semibold transition-colors hover:bg-[var(--color-accent-hover)] mt-6 rounded-2xl">
                        Zur Kontaktanfrage
                    </Link>
                </div>
            </section>
        </>
    );
}
