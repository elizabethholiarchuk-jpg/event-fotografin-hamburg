export default function Impressum() {
    return (
        <div className="max-w-[800px] mx-auto px-6 py-24 flex flex-col gap-8 text-[var(--color-text-main)]">
            <h1 className="text-4xl font-semibold tracking-tight">Impressum</h1>

            <div className="flex flex-col gap-4">
                <h2 className="text-xl font-semibold mt-4">Angaben gemäß § 5 TMG</h2>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                    Yelyzaveta Holiarchuk<br />
                    Rehhoffstrassse 10<br />
                    20459 Hamburg
                </p>

                <h2 className="text-xl font-semibold mt-4">Kontakt</h2>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                    Telefon: +49 175 260 6697<br />
                    E-Mail: hello@lizaholiarchuk.com
                </p>

                <h2 className="text-xl font-semibold mt-4">Umsatzsteuer-ID</h2>
                <p className="text-[var(--color-text-muted)] leading-relaxed">
                    Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
                    [TODO: USt-IdNr.]
                </p>
            </div>
        </div>
    );
}
