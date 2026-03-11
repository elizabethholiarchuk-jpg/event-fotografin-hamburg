"use client";

import { useState, useEffect } from "react";
import { Analytics } from "@vercel/analytics/next";

export default function CookieBanner() {
    const [showBanner, setShowBanner] = useState(false);
    const [consent, setConsent] = useState<"all" | "necessary" | null>(null);

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
        return () => window.removeEventListener("openCookieBanner", handleOpenBanner);
    }, []);

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

    return (
        <>
            {/* Conditionally render Vercel Analytics if consent is "all" */}
            {consent === "all" && <Analytics />}

            {/* Cookie Banner */}
            {showBanner && (
                <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 sm:px-10 pb-8 bg-white border-t border-[var(--color-border-hairline)] shadow-2xl flex flex-col md:flex-row gap-6 md:gap-8 items-start md:items-center justify-between animate-in fade-in slide-in-from-bottom-8 duration-500">
                    <div className="max-w-[700px] flex flex-col gap-2">
                        <h3 className="text-[17px] font-medium tracking-tight text-[var(--color-text-main)]">
                            Datenschutzeinstellungen
                        </h3>
                        <p className="text-[14px] font-light leading-relaxed text-[var(--color-text-muted)]">
                            Diese Website verwendet notwendige Cookies. Analyse-Cookies werden nur mit Ihrer Einwilligung gesetzt, um die Nutzung der Website besser zu verstehen und das Angebot zu verbessern. Weitere Informationen finden Sie in der{" "}
                            <a href="/datenschutz" className="underline hover:text-[var(--color-text-main)] transition-colors">Datenschutzerklärung</a>.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0 mt-2 md:mt-0">
                        <button
                            onClick={handleNecessaryOnly}
                            className="px-6 py-2.5 text-[14px] font-medium border border-[var(--color-border-hairline)] bg-white text-[var(--color-text-main)] hover:bg-[#FAFAFA] transition-colors w-full sm:w-auto text-center"
                        >
                            Nur notwendige
                        </button>
                        <button
                            onClick={handleAcceptAll}
                            className="px-6 py-2.5 text-[14px] font-medium bg-[var(--color-text-main)] text-white hover:bg-black transition-colors w-full sm:w-auto text-center"
                        >
                            Alle akzeptieren
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
