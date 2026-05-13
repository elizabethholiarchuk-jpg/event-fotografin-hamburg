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
                <div className="flex flex-col gap-6 md:w-1/2">
                    <Link href={getLocalizedHref("/")} className="text-xl font-medium tracking-tight text-[var(--color-text-main)] transition-opacity hover:opacity-80">
                        Liza Holiarchuk
                    </Link>
                    <p className="text-[var(--color-text-muted)] text-[15px] font-light max-w-[35ch] leading-relaxed">
                        {lang === 'en' ? 'B2B Event Photography — Conferences, Trade Shows, Corporate Events. Hamburg & Europe-wide.' : 'B2B Eventfotografie — Konferenzen, Messen, Corporate Events. Hamburg & europaweit.'}
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-16 md:gap-32">
                    <div className="flex flex-col gap-4 text-[15px] font-light">
                        <span className="text-xs font-semibold tracking-[0.15em] uppercase text-[var(--color-text-muted)] mb-2">{lang === 'en' ? 'Contact' : 'Kontakt'}</span>
                        <a href="tel:+491752606697" className="text-[var(--color-text-main)] hover:text-[var(--color-accent)] transition-colors">+49 175 260 6697</a>
                        <a href="mailto:hello@lizaholiarchuk.com" className="text-[var(--color-text-main)] hover:text-[var(--color-accent)] transition-colors">hello@lizaholiarchuk.com</a>
                    </div>

                    <div className="flex flex-col gap-4 text-[15px] font-light">
                        <span className="text-xs font-semibold tracking-[0.15em] uppercase text-[var(--color-text-muted)] mb-2">Legal</span>
                        <Link href={getLocalizedHref("/impressum")} className="text-[var(--color-text-main)] hover:text-[var(--color-accent)] transition-colors">{t.footer.impressum}</Link>
                        <Link href={getLocalizedHref("/datenschutz")} className="text-[var(--color-text-main)] hover:text-[var(--color-accent)] transition-colors">{t.footer.datenschutz}</Link>
                    </div>
                </div>
            </div>

            <div className="max-w-[1120px] mx-auto px-6 md:px-10 mt-24">
                <div className="pt-8 border-t border-[var(--color-border-hairline)] flex justify-between items-center text-xs text-[var(--color-text-muted)] font-light">
                    <p>© {new Date().getFullYear()} Liza Holiarchuk</p>
                    <CookieSettingsButton />
                </div>
            </div>
        </footer>
    );
}
