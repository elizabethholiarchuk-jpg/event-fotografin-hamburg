import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Vielen Dank! Eventfotografin Hamburg",
    description: "Ihre Anfrage wurde erfolgreich gesendet.",
};

export default function DankePage() {
    return (
        <section className="bg-transparent pb-12 md:pb-16 pt-32 md:pt-40 min-h-[70vh] flex flex-col items-center justify-center">
            <div className="max-w-[800px] mx-auto px-6 md:px-12 flex flex-col items-center gap-8 text-center">
                <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.2" stroke="currentColor" className="w-20 h-20 text-[#2E7D32]">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div className="flex flex-col gap-4">
                    <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-[var(--color-text-main)] leading-[1.05]">
                        Vielen Dank für Ihre Anfrage!
                    </h1>
                    <p className="text-lg md:text-xl text-[var(--color-text-muted)] max-w-2xl font-normal mx-auto leading-relaxed">
                        Ihre Nachricht wurde erfolgreich gesendet. Ich werde mich in der Regel innerhalb der nächsten 24 Stunden bei Ihnen melden, um die Details zu besprechen.
                    </p>
                </div>
                <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
                    <Link
                        href="/"
                        className="bg-[var(--color-accent)] text-white px-8 py-3.5 rounded-2xl text-[15px] font-semibold transition-colors hover:bg-[var(--color-accent-hover)] inline-flex items-center justify-center gap-2 group w-full sm:w-auto"
                    >
                        <svg className="w-5 h-5 transition-transform group-hover:-translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                        </svg>
                        Zurück zur Startseite
                    </Link>
                    <Link
                        href="/portfolio"
                        className="bg-transparent border border-[var(--color-border-hairline)] text-[var(--color-text-main)] hover:border-[var(--color-text-main)] px-8 py-3.5 rounded-2xl text-[15px] font-semibold transition-colors inline-flex items-center justify-center gap-2 group w-full sm:w-auto"
                    >
                        Zum Portfolio
                        <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
}
