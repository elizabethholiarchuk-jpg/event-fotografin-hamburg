"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { getDictionary, Language } from "@/i18n";
import CookieSettingsButton from "./CookieSettingsButton";

export default function Footer() {
    const pathname = usePathname();
    const lang: Language = pathname.startsWith("/de") ? "de" : "en";
    const t = getDictionary(lang);

    const getLocalizedHref = (href: string) => {
        if (lang === "en") return href;
        return href === "/" ? "/de" : `/de${href}`;
    };

    return (
        <footer className="w-full border-t border-[var(--color-border-hairline)] bg-[#FAFAFA] py-16 md:py-24 mt-auto">
            <div className="max-w-[1120px] mx-auto px-6 md:px-10 flex flex-col md:flex-row justify-between gap-16 md:gap-8">
                {/* Brand */}
                <div className="flex flex-col gap-6 md:w-1/3">
                    <Link href={getLocalizedHref("/")} className="text-xl font-medium tracking-tight text-[var(--color-text-main)] transition-opacity hover:opacity-80">
                        Liza Holiarchuk
                    </Link>
                    <p className="text-[var(--color-text-muted)] text-[15px] font-light max-w-[35ch] leading-relaxed">
                        {t.footer.tagline}
                    </p>
                </div>

                {/* Nav columns */}
                <div className="flex flex-col sm:flex-row gap-12 md:gap-16 lg:gap-24">
                    {/* Services (EN only) */}
                    {lang === "en" && (
                        <div className="flex flex-col gap-4 text-[15px] font-light">
                            <span className="text-xs font-semibold tracking-[0.15em] uppercase text-[var(--color-text-muted)] mb-2">Services</span>
                            <Link href="/event-photographer-hamburg" className="text-[var(--color-text-main)] hover:text-[var(--color-accent)] transition-colors">Event Photography Hamburg</Link>
                            <Link href="/conference-photographer-hamburg" className="text-[var(--color-text-main)] hover:text-[var(--color-accent)] transition-colors">Conference Photography</Link>
                            <Link href="/trade-show-photographer-hamburg" className="text-[var(--color-text-main)] hover:text-[var(--color-accent)] transition-colors">Trade Show Photography</Link>
                            <Link href="/corporate-event-photographer-hamburg" className="text-[var(--color-text-main)] hover:text-[var(--color-accent)] transition-colors">Corporate Events</Link>
                        </div>
                    )}

                    {/* Pages */}
                    <div className="flex flex-col gap-4 text-[15px] font-light">
                        <span className="text-xs font-semibold tracking-[0.15em] uppercase text-[var(--color-text-muted)] mb-2">Pages</span>
                        <Link href={getLocalizedHref("/portfolio")} className="text-[var(--color-text-main)] hover:text-[var(--color-accent)] transition-colors">Portfolio</Link>
                        {lang === "en" && (
                            <>
                                <Link href="/insights" className="text-[var(--color-text-main)] hover:text-[var(--color-accent)] transition-colors">Insights</Link>
                                <Link href="/about" className="text-[var(--color-text-main)] hover:text-[var(--color-accent)] transition-colors">About</Link>
                                <Link href="/pricing" className="text-[var(--color-text-main)] hover:text-[var(--color-accent)] transition-colors">Pricing</Link>
                                <Link href="/contact" className="text-[var(--color-text-main)] hover:text-[var(--color-accent)] transition-colors">Contact</Link>
                            </>
                        )}
                        {lang === "de" && (
                            <Link href="/de/kontakt" className="text-[var(--color-text-main)] hover:text-[var(--color-accent)] transition-colors">Kontakt</Link>
                        )}
                    </div>

                    {/* Contact + Legal */}
                    <div className="flex flex-col gap-8">
                        <div className="flex flex-col gap-4 text-[15px] font-light">
                            <span className="text-xs font-semibold tracking-[0.15em] uppercase text-[var(--color-text-muted)] mb-2">{t.footer.contactHeading}</span>
                            <a href="tel:+491752606697" className="text-[var(--color-text-main)] hover:text-[var(--color-accent)] transition-colors">+49 175 260 6697</a>
                            <a href="mailto:hello@lizaholiarchuk.com" className="text-[var(--color-text-main)] hover:text-[var(--color-accent)] transition-colors">hello@lizaholiarchuk.com</a>
                            <address className="not-italic text-[var(--color-text-muted)] leading-relaxed text-[14px]">
                                Liza Holiarchuk<br />
                                Rehhoffstrasse 10<br />
                                20459 Hamburg<br />
                                {lang === "de" ? "Deutschland" : "Germany"}
                            </address>
                        </div>
                        <div className="flex flex-col gap-4 text-[15px] font-light">
                            <span className="text-xs font-semibold tracking-[0.15em] uppercase text-[var(--color-text-muted)] mb-2">Legal</span>
                            <Link href={getLocalizedHref("/impressum")} className="text-[var(--color-text-main)] hover:text-[var(--color-accent)] transition-colors">{t.footer.impressum}</Link>
                            <Link href={getLocalizedHref("/datenschutz")} className="text-[var(--color-text-main)] hover:text-[var(--color-accent)] transition-colors">{t.footer.datenschutz}</Link>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-[1120px] mx-auto px-6 md:px-10 mt-20">
                <div className="pt-8 border-t border-[var(--color-border-hairline)] flex justify-between items-center text-xs text-[var(--color-text-muted)] font-light">
                    <p>© {new Date().getFullYear()} Liza Holiarchuk</p>
                    <CookieSettingsButton />
                </div>
            </div>
        </footer>
    );
}
