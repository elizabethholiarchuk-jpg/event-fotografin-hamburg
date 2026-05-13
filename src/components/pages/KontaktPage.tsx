import KontaktForm from "@/components/KontaktForm";
import { getDictionary, Language } from "@/i18n";

export default function KontaktPage({ lang }: { lang: Language }) {
    const t = getDictionary(lang).kontakt;
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
                                "name": "Kontakt",
                                "item": "https://lizaholiarchuk.com/kontakt"
                            }
                        ]
                    }),
                }}
            />

            <section className="bg-transparent border-b border-[var(--color-border-hairline)] pb-12 md:pb-16 pt-32 md:pt-40">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-end justify-between gap-12">
                    <div className="flex flex-col gap-6 md:w-1/2">
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold tracking-tight text-[var(--color-text-main)] leading-[1.05]">
                            {t.title}
                        </h1>
                        <p className="text-lg md:text-xl text-[var(--color-text-muted)] max-w-sm font-normal mt-2">
                            {t.subtitle}
                        </p>
                    </div>
                    <div className="flex flex-col items-start gap-3 md:pb-2">
                        <span className="text-[15px] font-semibold text-[var(--color-text-muted)] uppercase tracking-wider">{lang === 'en' ? 'Direct Contact' : 'Direkte Kontaktaufnahme'}</span>
                        <a href="tel:+491752606697" className="text-xl md:text-2xl font-semibold tracking-tight text-[var(--color-text-main)] hover:text-[var(--color-accent)] transition-colors">+49 175 260 6697</a>
                        <a href="mailto:hello@lizaholiarchuk.com" className="text-xl md:text-2xl font-semibold tracking-tight text-[var(--color-text-main)] hover:text-[var(--color-accent)] transition-colors mt-1">hello@lizaholiarchuk.com</a>
                    </div>
                </div>
            </section>

            <section className="py-12 md:py-16 bg-transparent flex-grow">
                <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-12 md:gap-24 items-start">
                    <div className="w-full md:w-1/3 flex flex-col gap-6 md:sticky md:top-32">
                        <h2 className="text-2xl font-semibold tracking-tight text-[var(--color-text-main)]">{lang === 'en' ? 'Next steps' : 'Wie es weitergeht'}</h2>
                        <ul className="list-disc pl-5 flex flex-col gap-4 text-[var(--color-text-muted)] text-[16px] marker:text-[var(--color-text-main)]">
                            {lang === 'en' ? (
                                <>
                                    <li>Response within 24 hours</li>
                                    <li>Availability confirmation + short quote</li>
                                    <li>Optional: 15-minute coordination call</li>
                                </>
                            ) : (
                                <>
                                    <li>Antwort in 24 Stunden</li>
                                    <li>Verfügbarkeit bestätigen + kurzes Angebot</li>
                                    <li>Optional: 15-Minuten-Call zur Abstimmung</li>
                                </>
                            )}
                        </ul>
                    </div>
                    <div className="w-full md:w-2/3 max-w-[800px]">
                        <KontaktForm lang={lang} />
                    </div>
                </div>
            </section>
        </>
    );
}
