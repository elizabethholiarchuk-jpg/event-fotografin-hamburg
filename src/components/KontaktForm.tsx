"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { getDictionary, Language } from "@/i18n";

export default function KontaktForm({ lang = 'en' }: { lang?: Language }) {
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const t = getDictionary(lang).kontakt.form;

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

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
                router.push(lang === 'de' ? "/de/danke" : "/danke");
            } else {
                console.error("Form submission error", await response.text());
                setIsSubmitting(false);
            }
        } catch (error) {
            console.error("Form submission error", error);
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="flex flex-col gap-10 md:gap-14">
            <input type="hidden" name="_subject" value={`New Request - ${lang}`} />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                <label className="flex flex-col gap-2 relative">
                    <span className="text-[14px] font-semibold text-[var(--color-text-main)] block">
                        {t.name} <span className="text-[var(--color-accent)] ml-1">*</span>
                    </span>
                    <input required type="text" name="name" className="border-b border-[var(--color-border-hairline)] bg-transparent p-0 pb-3 focus:outline-none focus:border-[var(--color-text-main)] transition-colors text-[16px] placeholder:text-[var(--color-text-muted)]/50 mt-1" placeholder="Max Mustermann" />
                </label>
                <label className="flex flex-col gap-2 relative">
                    <span className="text-[14px] font-semibold text-[var(--color-text-main)] block">
                        {t.company} <span className="text-[var(--color-accent)] ml-1">*</span>
                    </span>
                    <input required type="text" name="company" className="border-b border-[var(--color-border-hairline)] bg-transparent p-0 pb-3 focus:outline-none focus:border-[var(--color-text-main)] transition-colors text-[16px] placeholder:text-[var(--color-text-muted)]/50 mt-1" placeholder="Muster GmbH" />
                </label>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                <label className="flex flex-col gap-2 relative">
                    <span className="text-[14px] font-semibold text-[var(--color-text-main)] block">
                        {t.email} <span className="text-[var(--color-accent)] ml-1">*</span>
                    </span>
                    <input required type="email" name="email" className="border-b border-[var(--color-border-hairline)] bg-transparent p-0 pb-3 focus:outline-none focus:border-[var(--color-text-main)] transition-colors text-[16px] placeholder:text-[var(--color-text-muted)]/50 mt-1" placeholder="max@muster.de" />
                </label>
                <label className="flex flex-col gap-2 relative">
                    <span className="text-[14px] font-semibold text-[var(--color-text-main)] block">
                        {lang === 'en' ? 'Event Type' : 'Event-Typ'} <span className="text-[var(--color-accent)] ml-1">*</span>
                    </span>
                    <select required name="eventType" defaultValue="" className="border-b border-[var(--color-border-hairline)] bg-transparent p-0 pb-3 focus:outline-none focus:border-[var(--color-text-main)] transition-colors text-[16px] text-[var(--color-text-main)] appearance-none cursor-pointer mt-1">
                        <option value="" disabled>{lang === 'en' ? 'Please choose' : 'Bitte wählen'}</option>
                        <option value="konferenz">{lang === 'en' ? 'Conference' : 'Konferenz'}</option>
                        <option value="messe">{lang === 'en' ? 'Trade Show' : 'Messe'}</option>
                        <option value="corporate">{lang === 'en' ? 'Corporate Event' : 'Corporate Event'}</option>
                        <option value="anderes">{lang === 'en' ? 'Other Format' : 'Anderes Format'}</option>
                    </select>
                </label>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-x-12 gap-y-10">
                <label className="flex flex-col gap-2 relative">
                    <span className="text-[14px] font-semibold text-[var(--color-text-main)] block">
                        {t.date} <span className="text-[var(--color-accent)] ml-1">*</span>
                    </span>
                    <input required type="date" name="date" className="border-b border-[var(--color-border-hairline)] bg-transparent p-0 pb-3 focus:outline-none focus:border-[var(--color-text-main)] transition-colors text-[16px] text-[var(--color-text-muted)] cursor-pointer mt-1" />
                </label>
                <label className="flex flex-col gap-2 relative">
                    <span className="text-[14px] font-semibold text-[var(--color-text-main)] block">
                        {lang === 'en' ? 'Location' : 'Ort'} <span className="text-[var(--color-accent)] ml-1">*</span>
                    </span>
                    <input required type="text" name="location" className="border-b border-[var(--color-border-hairline)] bg-transparent p-0 pb-3 focus:outline-none focus:border-[var(--color-text-main)] transition-colors text-[16px] placeholder:text-[var(--color-text-muted)]/50 mt-1" placeholder={lang === 'en' ? "e.g. Hamburg" : "z. B. Hamburg"} />
                </label>
                <label className="flex flex-col gap-2 relative">
                    <span className="text-[14px] font-semibold text-[var(--color-text-main)] block">
                        {lang === 'en' ? 'Duration' : 'Dauer'} <span className="text-[var(--color-accent)] ml-1">*</span>
                    </span>
                    <select required name="duration" defaultValue="" className="border-b border-[var(--color-border-hairline)] bg-transparent p-0 pb-3 focus:outline-none focus:border-[var(--color-text-main)] transition-colors text-[16px] text-[var(--color-text-main)] appearance-none cursor-pointer mt-1">
                        <option value="" disabled>{lang === 'en' ? 'Please choose' : 'Bitte wählen'}</option>
                        <option value="2h">{lang === 'en' ? 'Short (~2h)' : 'Kurz (~2h)'}</option>
                        <option value="4h">{lang === 'en' ? 'Half Day (~4h)' : 'Halbtags (~4h)'}</option>
                        <option value="8h">{lang === 'en' ? 'Full Day (~8h)' : 'Ganztags (~8h)'}</option>
                        <option value="mehrtägig">{lang === 'en' ? 'Multiple Days' : 'Mehrtägig'}</option>
                    </select>
                </label>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                <label className="flex flex-col gap-2 relative">
                    <span className="text-[14px] font-semibold text-[var(--color-text-main)] block">
                        {lang === 'en' ? 'Budget range' : 'Budget-Rahmen'} <span className="text-[var(--color-text-muted)] font-normal text-[11px] uppercase ml-1">Optional</span>
                    </span>
                    <input type="text" name="budget" className="border-b border-[var(--color-border-hairline)] bg-transparent p-0 pb-3 focus:outline-none focus:border-[var(--color-text-main)] transition-colors text-[16px] placeholder:text-[var(--color-text-muted)]/50 mt-1" placeholder={lang === 'en' ? "e.g. 1.500 €" : "z. B. 1.500 €"} />
                </label>
            </div>

            <label className="flex flex-col gap-2 relative">
                <span className="text-[14px] font-semibold text-[var(--color-text-main)] block">
                    {t.message} <span className="text-[var(--color-text-muted)] font-normal text-[11px] uppercase ml-1">Optional</span>
                </span>
                <textarea rows={4} name="message" className="border-b border-[var(--color-border-hairline)] bg-transparent p-0 pb-3 focus:outline-none focus:border-[var(--color-text-main)] transition-colors text-[16px] placeholder:text-[var(--color-text-muted)]/50 resize-y mt-1" placeholder={lang === 'en' ? 'More details about your event...' : "Weitere Details zu Ihrem Event..."}></textarea>
            </label>

            <div className="flex flex-col sm:flex-row gap-6 mt-4 items-start sm:items-center justify-between border-t border-[var(--color-border-hairline)] pt-8">
                <p className="text-[14px] text-[var(--color-text-muted)] font-normal leading-relaxed max-w-[45ch]">
                    {lang === 'en' ? 'Your data will be processed securely according to our privacy policy.' : 'Ihre Daten werden sicher und entsprechend unserer Datenschutzerklärung verarbeitet.'}
                </p>
                <div className="w-full sm:w-auto text-right">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="bg-[var(--color-accent)] text-white px-10 py-3.5 rounded-2xl text-[15px] font-semibold transition-colors hover:bg-[var(--color-accent-hover)] disabled:opacity-50 disabled:cursor-not-allowed w-full sm:w-auto shrink-0 flex items-center justify-center gap-2"
                    >
                        {isSubmitting ? (lang === 'en' ? "Sending..." : "Wird gesendet...") : t.submit}
                    </button>
                </div>
            </div>
        </form>
    );
}
