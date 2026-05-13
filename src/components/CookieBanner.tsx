"use client";

import { useState, useEffect } from "react";
import { Analytics } from "@vercel/analytics/next";
import { usePathname } from "next/navigation";
import { getDictionary, Language } from "@/i18n";
import Link from "next/link";

export default function CookieBanner() {
    const [showBanner, setShowBanner] = useState(false);
    const [consent, setConsent] = useState<"all" | "necessary" | null>(null);
    const [showLangPrompt, setShowLangPrompt] = useState(false);

    const pathname = usePathname();
    const lang: Language = pathname.startsWith("/de") ? "de" : "en";
    const t = getDictionary(lang).cookieBanner;

    useEffect(() => {
        // Check local storage for existing consent
        const storedConsent = localStorage.getItem("cookie_consent");
        if (storedConsent === "all" || storedConsent === "necessary") {
            setConsent(storedConsent);
        } else {
            setShowBanner(true);
        }

        // Listen for custom event to manually reopen the banner
        const handleOpenBanner = () => {
            setShowBanner(true);
        };

        window.addEventListener("openCookieBanner", handleOpenBanner);

        // Check for language prompt
        const siteLang = document.cookie.split('; ').find(row => row.startsWith('site_lang='))?.split('=')[1];
        if (siteLang === "de" && lang === "en") {
            setShowLangPrompt(true);
        }

        return () => window.removeEventListener("openCookieBanner", handleOpenBanner);
    }, [lang]);

    const handleAcceptAll = () => {
        localStorage.setItem("cookie_consent", "all");
        setConsent("all");
        setShowBanner(false);
    };

    const handleNecessaryOnly = () => {
        localStorage.setItem("cookie_consent", "necessary");
        setConsent("necessary");
        setShowBanner(false);
    };

    const switchLang = () => {
        document.cookie = `site_lang=de; path=/; max-age=31536000; samesite=lax`;
        window.location.href = `/de${pathname === "/" ? "" : pathname}`;
    };

    return (
        <>
            {/* Conditionally render Vercel Analytics if consent is "all" */}
            {consent === "all" && <Analytics />}

            {/* Language Prompt */}
            {showLangPrompt && !showBanner && (
                <div className="fixed bottom-6 right-6 z-40 bg-white border border-[var(--color-border-hairline)] shadow-lg rounded-2xl p-4 flex flex-col gap-3 max-w-[300px] animate-in slide-in-from-right-8 duration-500">
                    <p className="text-[14px] text-[var(--color-text-main)] font-medium">Prefer Deutsch? Switch to German.</p>
                    <div className="flex justify-end gap-3">
                        <button onClick={() => setShowLangPrompt(false)} className="text-[13px] text-[var(--color-text-muted)] hover:text-[var(--color-text-main)] transition-colors">Dismiss</button>
                        <button onClick={switchLang} className="text-[13px] bg-[var(--color-accent)] text-white px-4 py-1.5 rounded-lg hover:bg-[var(--color-accent-hover)] transition-colors">Switch</button>
                    </div>
                </div>
            )}

            {/* Cookie Banner */}
            {showBanner && (
                <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 sm:px-10 pb-8 bg-white border-t border-[var(--color-border-hairline)] shadow-2xl flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center justify-between animate-in fade-in slide-in-from-bottom-8 duration-500">
                    <div className="max-w-[700px] flex flex-col gap-2">
                        <h3 className="text-[17px] font-medium tracking-tight text-[var(--color-text-main)]">
                            {lang === 'en' ? 'Privacy Settings' : 'Datenschutzeinstellungen'}
                        </h3>
                        <p className="text-[14px] font-light leading-relaxed text-[var(--color-text-muted)]">
                            {lang === 'en' 
                                ? 'This website uses necessary cookies. Analytics cookies are only set with your consent to better understand website usage and improve the offering. Further information can be found in the '
                                : 'Diese Website verwendet notwendige Cookies. Analyse-Cookies werden nur mit Ihrer Einwilligung gesetzt, um die Nutzung der Website besser zu verstehen und das Angebot zu verbessern. Weitere Informationen finden Sie in der '}
                            <Link href={lang === 'en' ? "/datenschutz" : "/de/datenschutz"} className="underline hover:text-[var(--color-text-main)] transition-colors">{lang === 'en' ? 'Privacy Policy' : 'Datenschutzerklärung'}</Link>.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0 mt-2 md:mt-0">
                        <button
                            onClick={handleNecessaryOnly}
                            className="px-6 py-2.5 text-[14px] font-medium border border-[var(--color-border-hairline)] bg-white text-[var(--color-text-main)] hover:bg-[#FAFAFA] transition-colors w-full sm:w-auto text-center"
                        >
                            {t.necessary}
                        </button>
                        <button
                            onClick={handleAcceptAll}
                            className="px-6 py-2.5 text-[14px] font-medium bg-[var(--color-text-main)] text-white hover:bg-black transition-colors w-full sm:w-auto text-center"
                        >
                            {t.acceptAll}
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
