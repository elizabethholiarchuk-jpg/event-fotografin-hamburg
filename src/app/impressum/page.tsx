import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Impressum",
    description: "Impressum von Liza Holiarchuk Eventfotografie Hamburg.",
    robots: "noindex, follow",
    alternates: {
        canonical: "/impressum",
    },
};

export default function Impressum() {
    return (
        <div className="max-w-[800px] mx-auto px-6 py-24 flex flex-col gap-8 text-[var(--color-text-main)]">
            <h1 className="text-4xl font-semibold tracking-tight">Impressum</h1>

            <div className="flex flex-col gap-6">
                <p className="text-[var(--color-text-muted)] leading-relaxed text-[17px]">
                    Diese Datenschutz-Information gilt für die Datenverarbeitung durch:
                </p>

                <div className="flex flex-col gap-2">
                    <h2 className="text-xl font-semibold">Verantwortliche:</h2>
                    <p className="text-[var(--color-text-muted)] leading-relaxed">
                        Yelyzaveta Holiarchuk<br />
                        Rehhoffstrasse 10<br />
                        20459 Hamburg, Deutschland
                    </p>
                </div>

                <div className="flex flex-col gap-2">
                    <p className="text-[var(--color-text-muted)] leading-relaxed">
                        Email: <a href="mailto:hello@lizaholiarchuk.com" className="hover:text-[var(--color-accent)] transition-colors">hello@lizaholiarchuk.com</a><br />
                        Telefon: <a href="tel:+491752606697" className="hover:text-[var(--color-accent)] transition-colors">+491752606697</a><br />
                        Ust.-ID: DE364227815
                    </p>
                </div>
            </div>
        </div>
    );
}
