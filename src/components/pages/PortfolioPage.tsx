import Link from "next/link";
import { portfolioEvents } from "@/data/portfolio";
import SafeImage from "@/components/SafeImage";
import ImageGallery from "@/components/ImageGallery";
import fs from "fs";
import path from "path";
import { getDictionary, Language } from "@/i18n";

export default function PortfolioPage({ lang }: { lang: Language }) {
    const t = getDictionary(lang);
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
                                "item": "https://www.event-fotografin-hamburg.de"
                            },
                            {
                                "@type": "ListItem",
                                "position": 2,
                                "name": "Portfolio",
                                "item": "https://www.event-fotografin-hamburg.de/portfolio"
                            }
                        ]
                    }),
                }}
            />

            <section className="pb-6 md:pb-8 bg-transparent border-b border-[var(--color-border-hairline)] pt-32 md:pt-40">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col items-start gap-6">
                    <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold tracking-tight text-[var(--color-text-main)] max-w-4xl leading-[1.05]">
                        {t.portfolio.title}
                    </h1>
                    <p className="text-lg md:text-xl text-[var(--color-text-muted)] max-w-[55ch] font-normal leading-relaxed">
                        {t.portfolio.subtitle}
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
                            <div className="flex flex-col gap-1 mb-8 md:mb-12">
                                <Link href={lang === 'en' ? `/portfolio/${event.slug}` : `/de/portfolio`} className="group w-fit">
                                    <h2 className="text-3xl md:text-4xl font-semibold text-[var(--color-text-main)] tracking-tight max-w-[85ch] group-hover:underline underline-offset-4 decoration-1">{event.title_i18n?.[lang] ?? event.title}</h2>
                                </Link>
                                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-2">
                                    <span className="text-base font-medium text-[var(--color-text-muted)]">{event.category[lang]}</span>
                                    {event.location_i18n?.[lang] && (
                                        <>
                                            <span className="text-[var(--color-border-hairline)]">·</span>
                                            <span className="text-base font-normal text-[var(--color-text-muted)]">{event.location_i18n[lang]}</span>
                                        </>
                                    )}
                                    {event.venue_i18n?.[lang] && (
                                        <>
                                            <span className="text-[var(--color-border-hairline)]">·</span>
                                            <span className="text-base font-normal text-[var(--color-text-muted)]">{event.venue_i18n[lang]}</span>
                                        </>
                                    )}
                                </div>
                                {event.oneLiner_i18n?.[lang] && (
                                    <p className="text-[15px] font-normal text-[var(--color-text-muted)] mt-1 max-w-[70ch] leading-relaxed">{event.oneLiner_i18n[lang]}</p>
                                )}
                                {lang === 'en' && (
                                    <Link href={`/portfolio/${event.slug}`} className="text-[13px] font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text-main)] transition-colors underline underline-offset-4 mt-2 w-fit">
                                        View case study →
                                    </Link>
                                )}
                            </div>

                            <ImageGallery
                                images={actualImages.map(src => ({ src, alt: event.alt_i18n?.[lang] ?? event.title_i18n?.[lang] ?? event.title }))}
                                itemClassName="relative aspect-[3/2] overflow-hidden bg-transparent group cursor-zoom-in w-full block rounded-none shadow-sm border border-gray-100"
                            />
                        </div>
                    );
                })}
            </section>

            <section className="py-24 md:py-32 bg-[#DDE7F0] text-[var(--color-text-main)] flex justify-center text-center">
                <div className="max-w-[800px] w-full px-6 flex flex-col gap-10 items-center">
                    <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.1]" dangerouslySetInnerHTML={{ __html: t.home.finalCta.title }}></h2>
                    <p className="text-xl md:text-2xl opacity-80 font-light mt-2 md:mt-4">{t.portfolio.replyTime}</p>
                    <Link href={lang === 'de' ? "/de/kontakt" : "/contact"} title="Request event photography" className="bg-[var(--color-text-main)] text-white px-10 py-4 text-base font-semibold transition-colors hover:bg-[var(--color-accent-hover)] mt-6 rounded-2xl">
                        {t.home.finalCta.btn}
                    </Link>
                </div>
            </section>
        </>
    );
}
