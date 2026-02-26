"use client";

import { useState } from "react";

export default function KontaktForm() {
    const [submitted, setSubmitted] = useState(false);

    // Minimal implementation, visually appealing but doesn't actually send for now
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setSubmitted(true);
    };

    if (submitted) {
        return (
            <div className="bg-[#FAFAFA] border border-[var(--color-border-hairline)] p-8 md:p-16 flex flex-col items-start gap-6 transition-all fade-in">
                <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12 text-[var(--color-text-main)] mb-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div className="flex flex-col gap-3">
                    <h3 className="text-2xl font-semibold tracking-tight text-[var(--color-text-main)]">Vielen Dank für Ihre Anfrage.</h3>
                    <p className="text-[17px] font-normal text-[var(--color-text-muted)] max-w-[45ch] leading-relaxed">Ich werde mich in der Regel innerhalb von 24 Stunden bei Ihnen melden.</p>
                </div>
                <button
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-[var(--color-text-main)] text-[15px] font-medium hover:text-[var(--color-text-muted)] tracking-wide transition-colors flex items-center gap-2 group"
                >
                    Weitere Anfrage senden
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-8 md:gap-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
                <label className="flex flex-col gap-3">
                    <span className="text-[14px] font-semibold text-[var(--color-text-main)]">Name <span className="text-[var(--color-accent)]">*</span></span>
                    <input required type="text" className="border-b border-[var(--color-border-hairline)] bg-transparent p-0 pb-3 focus:outline-none focus:border-[var(--color-text-main)] transition-colors text-[16px] placeholder:text-[var(--color-text-muted)]/50" placeholder="Max Mustermann" />
                </label>
                <label className="flex flex-col gap-3">
                    <span className="text-[14px] font-semibold text-[var(--color-text-main)]">Firma/Organisation <span className="text-[var(--color-accent)]">*</span></span>
                    <input required type="text" className="border-b border-[var(--color-border-hairline)] bg-transparent p-0 pb-3 focus:outline-none focus:border-[var(--color-text-main)] transition-colors text-[16px] placeholder:text-[var(--color-text-muted)]/50" placeholder="Muster GmbH" />
                </label>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
                <label className="flex flex-col gap-3">
                    <span className="text-[14px] font-semibold text-[var(--color-text-main)]">E-Mail <span className="text-[var(--color-accent)]">*</span></span>
                    <input required type="email" className="border-b border-[var(--color-border-hairline)] bg-transparent p-0 pb-3 focus:outline-none focus:border-[var(--color-text-main)] transition-colors text-[16px] placeholder:text-[var(--color-text-muted)]/50" placeholder="max@muster.de" />
                </label>
                <label className="flex flex-col gap-3">
                    <span className="text-[14px] font-semibold text-[var(--color-text-main)]">Event-Typ <span className="text-[var(--color-accent)]">*</span></span>
                    <select required className="border-b border-[var(--color-border-hairline)] bg-transparent p-0 pb-3 focus:outline-none focus:border-[var(--color-text-main)] transition-colors text-[16px] text-[var(--color-text-main)] appearance-none cursor-pointer">
                        <option value="" disabled selected>Bitte wählen</option>
                        <option value="konferenz">Konferenz</option>
                        <option value="messe">Messe</option>
                        <option value="corporate">Corporate Event</option>
                        <option value="anderes">Anderes Format</option>
                    </select>
                </label>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-8">
                <label className="flex flex-col gap-3">
                    <span className="text-[14px] font-semibold text-[var(--color-text-main)]">Datum <span className="text-[var(--color-accent)]">*</span></span>
                    <input required type="date" className="border-b border-[var(--color-border-hairline)] bg-transparent p-0 pb-3 focus:outline-none focus:border-[var(--color-text-main)] transition-colors text-[16px] text-[var(--color-text-muted)] cursor-pointer" />
                </label>
                <label className="flex flex-col gap-3">
                    <span className="text-[14px] font-semibold text-[var(--color-text-main)]">Ort <span className="text-[var(--color-accent)]">*</span></span>
                    <input required type="text" className="border-b border-[var(--color-border-hairline)] bg-transparent p-0 pb-3 focus:outline-none focus:border-[var(--color-text-main)] transition-colors text-[16px] placeholder:text-[var(--color-text-muted)]/50" placeholder="z. B. Hamburg" />
                </label>
                <label className="flex flex-col gap-3">
                    <span className="text-[14px] font-semibold text-[var(--color-text-main)]">Dauer <span className="text-[var(--color-accent)]">*</span></span>
                    <select required className="border-b border-[var(--color-border-hairline)] bg-transparent p-0 pb-3 focus:outline-none focus:border-[var(--color-text-main)] transition-colors text-[16px] text-[var(--color-text-main)] appearance-none cursor-pointer">
                        <option value="" disabled selected>Bitte wählen</option>
                        <option value="2h">Kurz (~2h)</option>
                        <option value="4h">Halbtags (~4h)</option>
                        <option value="8h">Ganztags (~8h)</option>
                        <option value="mehrtägig">Mehrtägig</option>
                    </select>
                </label>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
                <label className="flex flex-col gap-3">
                    <span className="text-[14px] font-semibold text-[var(--color-text-main)] flex gap-2 items-center">
                        Budget-Rahmen <span className="text-[var(--color-text-muted)] font-normal text-[11px] uppercase ml-1">Optional</span>
                    </span>
                    <input type="text" className="border-b border-[var(--color-border-hairline)] bg-transparent p-0 pb-3 focus:outline-none focus:border-[var(--color-text-main)] transition-colors text-[16px] placeholder:text-[var(--color-text-muted)]/50" placeholder="z. B. 1.500 €" />
                </label>
            </div>

            <label className="flex flex-col gap-3">
                <span className="text-[14px] font-semibold text-[var(--color-text-main)] flex gap-2 items-center">
                    Nachricht <span className="text-[var(--color-text-muted)] font-normal text-[11px] uppercase ml-1">Optional</span>
                </span>
                <textarea rows={4} className="border-b border-[var(--color-border-hairline)] bg-transparent p-0 pb-3 focus:outline-none focus:border-[var(--color-text-main)] transition-colors text-[16px] placeholder:text-[var(--color-text-muted)]/50 resize-y" placeholder="Weitere Details zu Ihrem Event..."></textarea>
            </label>

            <div className="flex flex-col sm:flex-row gap-6 mt-4 items-start sm:items-center justify-between border-t border-[var(--color-border-hairline)] pt-8">
                <p className="text-[14px] text-[var(--color-text-muted)] font-normal leading-relaxed max-w-[45ch]">
                    Ihre Daten werden sicher und entsprechend unserer Datenschutzerklärung verarbeitet.
                </p>
                <div className="w-full sm:w-auto text-right">
                    <button type="submit" className="bg-[var(--color-accent)] text-white px-10 py-3.5 rounded-[4px] text-[15px] font-semibold transition-colors hover:bg-[var(--color-accent-hover)] w-full sm:w-auto shrink-0 flex items-center justify-center gap-2">
                        Anfrage senden
                    </button>
                </div>
            </div>
        </form>
    );
}
