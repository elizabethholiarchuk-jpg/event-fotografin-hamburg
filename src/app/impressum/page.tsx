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
        <div className="max-w-[800px] mx-auto px-6 py-24 flex flex-col gap-10 text-[var(--color-text-main)]">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">Impressum</h1>

            <div className="flex flex-col gap-8 text-[var(--color-text-muted)] leading-relaxed text-[16px] md:text-[17px]">
                <section className="flex flex-col gap-2">
                    <h2 className="text-xl font-semibold text-[var(--color-text-main)]">Anbieterin / Diensteanbieterin (§ 5 TMG)</h2>
                    <p className="leading-relaxed">
                        Yelyzaveta Holiarchuk<br />
                        Rehhoffstrasse 10<br />
                        20459 Hamburg<br />
                        Deutschland
                    </p>
                </section>

                <section className="flex flex-col gap-2">
                    <h2 className="text-xl font-semibold text-[var(--color-text-main)]">Kontakt</h2>
                    <p className="leading-relaxed">
                        E-Mail: <a href="mailto:hello@lizaholiarchuk.com" className="hover:text-[var(--color-accent)] transition-colors text-[var(--color-text-main)]">hello@lizaholiarchuk.com</a><br />
                        Telefon: <a href="tel:+491752606697" className="hover:text-[var(--color-accent)] transition-colors text-[var(--color-text-main)]">+49 175 260 66 97</a>
                    </p>
                </section>

                <section className="flex flex-col gap-2">
                    <h2 className="text-xl font-semibold text-[var(--color-text-main)]">Umsatzsteuer</h2>
                    <p className="leading-relaxed">
                        USt.-ID gemäß § 27a UStG: DE364227815
                    </p>
                </section>

                <section className="flex flex-col gap-2">
                    <h2 className="text-xl font-semibold text-[var(--color-text-main)]">Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
                    <p className="leading-relaxed">
                        Yelyzaveta Holiarchuk<br />
                        Rehhoffstrasse 10<br />
                        20459 Hamburg<br />
                        Deutschland
                    </p>
                </section>

                <section className="flex flex-col gap-2 mt-4">
                    <h2 className="text-xl font-semibold text-[var(--color-text-main)]">Haftung für Inhalte</h2>
                    <p className="leading-relaxed">
                        Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt.
                    </p>
                </section>

                <section className="flex flex-col gap-2 mt-4">
                    <h2 className="text-xl font-semibold text-[var(--color-text-main)]">Haftung für Links</h2>
                    <p className="leading-relaxed">
                        Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                    </p>
                </section>

                <section className="flex flex-col gap-2 mt-4">
                    <h2 className="text-xl font-semibold text-[var(--color-text-main)]">Urheberrecht</h2>
                    <p className="leading-relaxed">
                        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet.
                    </p>
                </section>
            </div>
        </div>
    );
}
