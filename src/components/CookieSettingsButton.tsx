"use client";

export default function CookieSettingsButton() {
    return (
        <button
            onClick={() => window.dispatchEvent(new Event("openCookieBanner"))}
            className="hover:text-[var(--color-text-main)] transition-colors"
        >
            Cookie-Einstellungen
        </button>
    );
}
