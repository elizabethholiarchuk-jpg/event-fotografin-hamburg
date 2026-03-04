"use client";

import { useState } from "react";
import Link from "next/link";

export default function KontaktForm() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus("submitting");

        const form = e.currentTarget;
        const formData = new FormData(form);

        try {
            const response = await fetch("https://formspree.io/f/xpqjvjkq", {
                method: "POST",
                body: formData,
                headers: {
                    Accept: "application/json",
                },
            });

            if (response.ok) {
                setStatus("success");
                form.reset();
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    };

    if (status === "success") {
        return (
            <div className="bg-[#FAFAFA] border border-[var(--color-border-hairline)] p-8 md:p-16 flex flex-col items-start gap-6 transition-all fade-in">
                <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-12 h-12 text-[#2E7D32] mb-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div className="flex flex-col gap-3">
                    <h3 className="text-2xl font-semibold tracking-tight text-[var(--color-text-main)]">Vielen Dank! Ihre Anfrage wurde gesendet.</h3>
                    <p className="text-[17px] font-normal text-[var(--color-text-muted)] max-w-[45ch] leading-relaxed">Ich melde mich innerhalb von 24 Stunden zurück.</p>
                </div>
                <button
                    onClick={() => setStatus("idle")}
                    className="mt-6 text-[var(--color-text-main)] text-[15px] font-medium hover:text-[var(--color-text-muted)] tracking-wide transition-colors flex items-center gap-2 group"
                >
                    Weitere Anfrage senden
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-10 md:gap-14">
            {/* Hidden Fields for Formspree */}
            <input type="hidden" name="_subject" value="Neue Anfrage – Event Fotografin Hamburg" />
            <div style={{ display: "none" }}>
                <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" />
            </div>

            {status === "error" && (
                <div className="bg-red-50 text-red-700 border border-red-200 p-4 rounded-xl text-[15px]">
                    Ups — etwas ist schiefgelaufen. Bitte versuchen Sie es erneut oder schreiben Sie direkt an <a href="mailto:hello@lizaholiarchuk.com" className="underline font-semibold">hello@lizaholiarchuk.com</a>.
                </div>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                <label className="flex flex-col gap-2 relative">
                    <span className="text-[14px] font-semibold text-[var(--color-text-main)] block">
                        Name <span className="text-[var(--color-accent)] ml-1">*</span>
                    </span>
                    <input required type="text" name="name" className="border-b border-[var(--color-border-hairline)] bg-transparent p-0 pb-3 focus:outline-none focus:border-[var(--color-text-main)] transition-colors text-[16px] placeholder:text-[var(--color-text-muted)]/50 mt-1" placeholder="Max Mustermann" />
                </label>
                <label className="flex flex-col gap-2 relative">
                    <span className="text-[14px] font-semibold text-[var(--color-text-main)] block">
                        Firma/Organisation <span className="text-[var(--color-accent)] ml-1">*</span>
                    </span>
                    <input required type="text" name="company" className="border-b border-[var(--color-border-hairline)] bg-transparent p-0 pb-3 focus:outline-none focus:border-[var(--color-text-main)] transition-colors text-[16px] placeholder:text-[var(--color-text-muted)]/50 mt-1" placeholder="Muster GmbH" />
                </label>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                <label className="flex flex-col gap-2 relative">
                    <span className="text-[14px] font-semibold text-[var(--color-text-main)] block">
                        E-Mail <span className="text-[var(--color-accent)] ml-1">*</span>
                    </span>
                    <input required type="email" name="email" className="border-b border-[var(--color-border-hairline)] bg-transparent p-0 pb-3 focus:outline-none focus:border-[var(--color-text-main)] transition-colors text-[16px] placeholder:text-[var(--color-text-muted)]/50 mt-1" placeholder="max@muster.de" />
                </label>
                <label className="flex flex-col gap-2 relative">
                    <span className="text-[14px] font-semibold text-[var(--color-text-main)] block">
                        Event-Typ <span className="text-[var(--color-accent)] ml-1">*</span>
                    </span>
                    <select required name="eventType" defaultValue="" className="border-b border-[var(--color-border-hairline)] bg-transparent p-0 pb-3 focus:outline-none focus:border-[var(--color-text-main)] transition-colors text-[16px] text-[var(--color-text-main)] appearance-none cursor-pointer mt-1">
                        <option value="" disabled>Bitte wählen</option>
                        <option value="konferenz">Konferenz</option>
                        <option value="messe">Messe</option>
                        <option value="corporate">Corporate Event</option>
                        <option value="anderes">Anderes Format</option>
                    </select>
                </label>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-12 gap-y-10">
                <label className="flex flex-col gap-2 relative">
                    <span className="text-[14px] font-semibold text-[var(--color-text-main)] block">
                        Datum <span className="text-[var(--color-accent)] ml-1">*</span>
                    </span>
                    <input required type="date" name="date" className="border-b border-[var(--color-border-hairline)] bg-transparent p-0 pb-3 focus:outline-none focus:border-[var(--color-text-main)] transition-colors text-[16px] text-[var(--color-text-muted)] cursor-pointer mt-1" />
                </label>
                <label className="flex flex-col gap-2 relative">
                    <span className="text-[14px] font-semibold text-[var(--color-text-main)] block">
                        Ort <span className="text-[var(--color-accent)] ml-1">*</span>
                    </span>
                    <input required type="text" name="location" className="border-b border-[var(--color-border-hairline)] bg-transparent p-0 pb-3 focus:outline-none focus:border-[var(--color-text-main)] transition-colors text-[16px] placeholder:text-[var(--color-text-muted)]/50 mt-1" placeholder="z. B. Hamburg" />
                </label>
                <label className="flex flex-col gap-2 relative">
                    <span className="text-[14px] font-semibold text-[var(--color-text-main)] block">
                        Dauer <span className="text-[var(--color-accent)] ml-1">*</span>
                    </span>
                    <select required name="duration" defaultValue="" className="border-b border-[var(--color-border-hairline)] bg-transparent p-0 pb-3 focus:outline-none focus:border-[var(--color-text-main)] transition-colors text-[16px] text-[var(--color-text-main)] appearance-none cursor-pointer mt-1">
                        <option value="" disabled>Bitte wählen</option>
                        <option value="2h">Kurz (~2h)</option>
                        <option value="4h">Halbtags (~4h)</option>
                        <option value="8h">Ganztags (~8h)</option>
                        <option value="mehrtägig">Mehrtägig</option>
                    </select>
                </label>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                <label className="flex flex-col gap-2 relative">
                    <span className="text-[14px] font-semibold text-[var(--color-text-main)] block">
                        Budget-Rahmen <span className="text-[var(--color-text-muted)] font-normal text-[11px] uppercase ml-1">Optional</span>
                    </span>
                    <input type="text" name="budget" className="border-b border-[var(--color-border-hairline)] bg-transparent p-0 pb-3 focus:outline-none focus:border-[var(--color-text-main)] transition-colors text-[16px] placeholder:text-[var(--color-text-muted)]/50 mt-1" placeholder="z. B. 1.500 €" />
                </label>
            </div>

            <label className="flex flex-col gap-2 relative">
                <span className="text-[14px] font-semibold text-[var(--color-text-main)] block">
                    Nachricht <span className="text-[var(--color-text-muted)] font-normal text-[11px] uppercase ml-1">Optional</span>
                </span>
                <textarea rows={4} name="message" className="border-b border-[var(--color-border-hairline)] bg-transparent p-0 pb-3 focus:outline-none focus:border-[var(--color-text-main)] transition-colors text-[16px] placeholder:text-[var(--color-text-muted)]/50 resize-y mt-1" placeholder="Weitere Details zu Ihrem Event..."></textarea>
            </label>

            <label className="flex gap-4 items-start cursor-pointer mt-4">
                <input required type="checkbox" name="privacyConsent" className="mt-1 w-5 h-5 shrink-0 accent-[var(--color-text-main)]" />
                <span className="text-[14px] text-[var(--color-text-muted)] font-normal leading-relaxed">
                    Ich habe die <Link href="/datenschutz" className="underline hover:text-[var(--color-text-main)] transition-colors">Datenschutzerklärung</Link> gelesen und stimme der Verarbeitung meiner Daten zur Bearbeitung meiner Anfrage zu. <span className="text-[var(--color-accent)] ml-0.5">*</span>
                </span>
            </label>

            <div className="flex flex-col sm:flex-row gap-6 mt-4 items-start sm:items-center justify-end border-t border-[var(--color-border-hairline)] pt-8">
                <div className="w-full sm:w-auto text-right">
                    <button
                        type="submit"
                        disabled={status === "submitting"}
                        className="bg-[var(--color-accent)] text-white px-10 py-3.5 rounded-2xl text-[15px] font-semibold transition-all hover:bg-[var(--color-accent-hover)] disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto shrink-0 flex items-center justify-center gap-2"
                    >
                        {status === "submitting" ? "Wird gesendet..." : "Anfrage senden"}
                    </button>
                </div>
            </div>
        </form>
    );
}
