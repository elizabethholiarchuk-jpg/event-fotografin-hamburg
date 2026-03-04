import Link from "next/link";

export default function KontaktForm() {
    return (
        <form action="https://formspree.io/f/xpqjvjkq" method="POST" className="flex flex-col gap-10 md:gap-14">
            <input type="hidden" name="_redirect" value="https://event-fotografin-hamburg.de/danke" />
            <input type="hidden" name="_subject" value="Neue Anfrage – Event Fotografin Hamburg" />

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

            <div className="flex flex-col sm:flex-row gap-6 mt-4 items-start sm:items-center justify-between border-t border-[var(--color-border-hairline)] pt-8">
                <p className="text-[14px] text-[var(--color-text-muted)] font-normal leading-relaxed max-w-[45ch]">
                    Ihre Daten werden sicher und entsprechend unserer Datenschutzerklärung verarbeitet.
                </p>
                <div className="w-full sm:w-auto text-right">
                    <button type="submit" className="bg-[var(--color-accent)] text-white px-10 py-3.5 rounded-2xl text-[15px] font-semibold transition-colors hover:bg-[var(--color-accent-hover)] w-full sm:w-auto shrink-0 flex items-center justify-center gap-2">
                        Anfrage senden
                    </button>
                </div>
            </div>
        </form>
    );
}
