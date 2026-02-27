import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full border-t border-[var(--color-border-hairline)] bg-[#FAFAFA] py-16 md:py-24 mt-auto">
            <div className="max-w-[1120px] mx-auto px-6 md:px-10 flex flex-col md:flex-row justify-between gap-16 md:gap-8">
                <div className="flex flex-col gap-6 md:w-1/2">
                    <Link href="/" className="text-xl font-medium tracking-tight text-[var(--color-text-main)] transition-opacity hover:opacity-80">
                        Liza Holiarchuk
                    </Link>
                    <p className="text-[var(--color-text-muted)] text-[15px] font-light max-w-[35ch] leading-relaxed">
                        B2B Eventfotografie — Konferenzen, Messen, Corporate Events. Hamburg & europaweit.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row gap-16 md:gap-32">
                    <div className="flex flex-col gap-4 text-[15px] font-light">
                        <span className="text-xs font-semibold tracking-[0.15em] uppercase text-[var(--color-text-muted)] mb-2">Kontakt</span>
                        <a href="tel:+491752606697" className="text-[var(--color-text-main)] hover:text-[var(--color-accent)] transition-colors">+49 175 260 66 97</a>
                        <a href="mailto:hello@lizaholiarchuk.com" className="text-[var(--color-text-main)] hover:text-[var(--color-accent)] transition-colors">hello@lizaholiarchuk.com</a>
                    </div>

                    <div className="flex flex-col gap-4 text-[15px] font-light">
                        <span className="text-xs font-semibold tracking-[0.15em] uppercase text-[var(--color-text-muted)] mb-2">Legal</span>
                        <Link href="/impressum" className="text-[var(--color-text-main)] hover:text-[var(--color-accent)] transition-colors">Impressum</Link>
                        <Link href="/datenschutz" className="text-[var(--color-text-main)] hover:text-[var(--color-accent)] transition-colors">Datenschutz</Link>
                    </div>
                </div>
            </div>

            <div className="max-w-[1120px] mx-auto px-6 md:px-10 mt-24">
                <div className="pt-8 border-t border-[var(--color-border-hairline)] flex justify-between items-center text-xs text-[var(--color-text-muted)] font-light">
                    <p>© {new Date().getFullYear()} Liza Holiarchuk</p>
                    <button className="hover:text-[var(--color-text-main)] transition-colors">Cookie-Einstellungen</button>
                </div>
            </div>
        </footer>
    );
}
