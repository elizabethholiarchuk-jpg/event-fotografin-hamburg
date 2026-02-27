import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Datenschutzerklärung",
    description: "Datenschutzerklärung von Liza Holiarchuk. Erfahren Sie, wie wir Ihre Daten verarbeiten und schützen.",
    robots: "noindex, follow", // Usually privacy pages are not indexed, or leave default
};

export default function Datenschutz() {
    return (
        <div className="max-w-[800px] mx-auto px-6 py-24 md:py-32 flex flex-col gap-10 text-[var(--color-text-main)]">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">Datenschutzerklärung</h1>

            <div className="flex flex-col gap-8 text-[var(--color-text-muted)] leading-relaxed text-[16px] md:text-[17px]">

                <section className="flex flex-col gap-4">
                    <h2 className="text-2xl font-semibold text-[var(--color-text-main)]">1. Datenschutz auf einen Blick</h2>
                    <p><strong>Allgemeine Hinweise</strong></p>
                    <p>
                        Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
                    </p>
                </section>

                <section className="flex flex-col gap-4">
                    <h2 className="text-2xl font-semibold text-[var(--color-text-main)]">2. Verantwortliche Stelle</h2>
                    <p>
                        Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
                    </p>
                    <address className="not-italic flex flex-col gap-1">
                        <strong>Yelyzaveta Holiarchuk</strong><br />
                        Rehhoffstrasse 10<br />
                        20459 Hamburg<br />
                        <br />
                        Telefon: <a href="tel:+491752606697" className="text-[var(--color-text-main)] hover:text-[var(--color-accent)] transition-colors">+49 175 260 6697</a><br />
                        E-Mail: <a href="mailto:hello@lizaholiarchuk.com" className="text-[var(--color-text-main)] hover:text-[var(--color-accent)] transition-colors">hello@lizaholiarchuk.com</a>
                    </address>
                    <p>
                        Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
                    </p>
                </section>

                <section className="flex flex-col gap-4">
                    <h2 className="text-2xl font-semibold text-[var(--color-text-main)]">3. Datenerfassung auf dieser Website (Server-Log-Dateien & Hosting)</h2>
                    <p><strong>Hosting durch Vercel</strong></p>
                    <p>
                        Wir hosten unsere Website bei dem Anbieter Vercel (Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA).
                    </p>
                    <p>
                        Wenn Sie unsere Website besuchen, erfasst Vercel automatisiert in sogenannten Server-Log-Dateien Daten, die Ihr Browser übermittelt. Dies sind insbesondere:
                    </p>
                    <ul className="list-disc pl-5 flex flex-col gap-2">
                        <li>Ihre IP-Adresse</li>
                        <li>Browsertyp und Browserversion</li>
                        <li>Verwendetes Betriebssystem</li>
                        <li>Referrer URL (die zuvor besuchte Seite)</li>
                        <li>Hostname des zugreifenden Rechners</li>
                        <li>Uhrzeit der Serveranfrage</li>
                    </ul>
                    <p>
                        Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben ein berechtigtes Interesse an einer technisch fehlerfreien Darstellung und der Optimierung unserer Website – hierzu müssen die Server-Log-Files erfasst werden.
                    </p>
                    <p>
                        Weitere Details finden Sie in der Datenschutzerklärung von Vercel unter: <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-[var(--color-text-main)] underline hover:text-[var(--color-accent)] transition-colors">vercel.com/legal/privacy-policy</a>.
                    </p>
                </section>

                <section className="flex flex-col gap-4">
                    <h2 className="text-2xl font-semibold text-[var(--color-text-main)]">4. Kontaktformular und E-Mail-Anfragen</h2>
                    <p>
                        Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem Formular inklusive der von Ihnen dort angegebenen Kontaktdaten (Name, Firma/Organisation, E-Mail, Event-Typ, Datum, Ort, Dauer, Budget und Nachricht) zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                    </p>
                    <p>
                        Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO), sofern diese abgefragt wurde.
                    </p>
                    <p>
                        Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.
                    </p>
                </section>

                <section className="flex flex-col gap-4">
                    <h2 className="text-2xl font-semibold text-[var(--color-text-main)]">5. Web Analytics</h2>
                    <p><strong>Vercel Web Analytics</strong></p>
                    <p>
                        Wir nutzen zur Analyse der Website-Nutzung den Dienst "Vercel Web Analytics" des Anbieters Vercel Inc. Der Dienst sammelt aggregierte und anonymisierte Daten über Besuche und Seitenaufrufe, um uns zu helfen, die Nutzung unserer Website besser zu verstehen und zu optimieren.
                    </p>
                    <p>
                        Vercel Web Analytics ist so konfiguriert, dass standardmäßig <strong>keine Tracking-Cookies</strong> auf Ihrem Endgerät gespeichert werden. Es werden lediglich pseudonymisierte Hash-Werte auf Basis der IP-Adresse und des User-Agents genutzt, um Besuche zuzuordnen. Diese Hash-Werte rotieren täglich, sodass Nutzer nicht dauerhaft über Tage hinweg getrackt werden können.
                    </p>
                    <p>
                        Die Nutzung dieses Analyse-Tools erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an der anonymisierten Analyse des Nutzerverhaltens, um sein Webangebot zu optimieren.
                    </p>
                </section>

                <section className="flex flex-col gap-4">
                    <h2 className="text-2xl font-semibold text-[var(--color-text-main)]">6. Cookies und Consent Management</h2>
                    <p><strong>Einsatz von Cookies</strong></p>
                    <p>
                        Unsere Website verwendet teilweise sogenannte "Cookies". Cookies richten auf Ihrem Rechner keinen Schaden an und enthalten keine Viren. Sie dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen. Cookies sind kleine Textdateien, die auf Ihrem Rechner abgelegt werden und die Ihr Browser speichert.
                    </p>
                    <p>
                        Die meisten der von uns verwendeten Cookies sind so genannte "Session-Cookies". Sie werden nach Ende Ihres Besuchs automatisch gelöscht. Andere Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese löschen (persistente Cookies). Wir verwenden derzeit ausschließlich technisch notwendige Cookies, ohne die die Website nicht ordnungsgemäß funktionieren würde. Der Einsatz notwendiger Cookies basiert auf dem berechtigten Interesse an der fehlerfreien Bereitstellung der Dienste (Art. 6 Abs. 1 lit. f DSGVO).
                    </p>
                    <p><strong>Verwaltung über Cookie-Einstellungen</strong></p>
                    <p>
                        Ein Auslesen oder Speichern von Informationen, das nicht zwingend technisch notwendig ist (z. B. durch erweiterte Performance-Tracking-Cookies), findet auf dieser Website nur dann statt, wenn Sie uns zuvor Ihre ausdrückliche Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO i.V.m. § 25 TTDSG erteilt haben.
                    </p>
                    <p>
                        Sie können Ihre aktuellen Datenschutzeinstellungen jederzeit über den Link "Cookie-Einstellungen" im Footer dieser Website einsehen, bearbeiten oder Ihre zuvor erteilte Einwilligung mit Wirkung für die Zukunft widerrufen.
                        <br /><span className="italic text-sm">[Hinweis zur Umsetzung: Da derzeit das reine Analytics Tracking cookieless über berechtigtes Interesse erfolgt, ist ein Cookie-Banner technisch nicht zwingend erforderlich. Sobald zusätzliche Marketing-Tracker eingebunden werden, muss das Consent-Management-Tool aktiv diese blocken, bis der Nutzer zustimmt.]</span>
                    </p>
                </section>

                <section className="flex flex-col gap-4">
                    <h2 className="text-2xl font-semibold text-[var(--color-text-main)]">7. Ihre Rechte als betroffene Person</h2>
                    <p>Sie haben jederzeit die folgenden Rechte bezüglich Ihrer personenbezogenen Daten:</p>
                    <ul className="list-disc pl-5 flex flex-col gap-2">
                        <li><strong>Auskunft (Art. 15 DSGVO):</strong> Sie haben das Recht, jederzeit unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten.</li>
                        <li><strong>Berichtigung (Art. 16 DSGVO):</strong> Sie haben das Recht, die unverzügliche Berichtigung unrichtiger oder Vervollständigung Ihrer personenbezogenen Daten zu verlangen.</li>
                        <li><strong>Löschung (Art. 17 DSGVO):</strong> Sie haben das Recht, die Löschung Ihrer bei uns gespeicherten personenbezogenen Daten zu verlangen, sofern nicht die Verarbeitung zur Ausübung des Rechts auf freie Meinungsäußerung, zur Erfüllung einer rechtlichen Verpflichtung oder zur Geltendmachung von Rechtsansprüchen erforderlich ist.</li>
                        <li><strong>Einschränkung der Verarbeitung (Art. 18 DSGVO):</strong> Sie haben das Recht, die Einschränkung der Verarbeitung zu verlangen, wenn z. B. die Richtigkeit der Daten von Ihnen bestritten wird.</li>
                        <li><strong>Datenübertragbarkeit (Art. 20 DSGVO):</strong> Sie haben das Recht, Ihre Daten, die Sie uns bereitgestellt haben, in einem strukturierten, gängigen Format zu erhalten oder die Übermittlung an einen anderen Verantwortlichen zu verlangen.</li>
                        <li><strong>Widerruf von Einwilligungen (Art. 7 Abs. 3 DSGVO):</strong> Eine bereits erteilte Einwilligung können Sie jederzeit mit Wirkung für die Zukunft widerrufen.</li>
                        <li><strong>Widerspruchsrecht (Art. 21 DSGVO):</strong> Sofern Ihre Daten auf Grundlage von berechtigten Interessen (Art. 6 Abs. 1 lit. f DSGVO) verarbeitet werden, haben Sie das Recht, Widerspruch einzulegen.</li>
                        <li><strong>Beschwerderecht (Art. 77 DSGVO):</strong> Im Falle von Verstößen gegen die DSGVO steht Ihnen ein Beschwerderecht bei einer zuständigen Aufsichtsbehörde zu.</li>
                    </ul>
                </section>

                <section className="flex flex-col gap-4">
                    <h2 className="text-2xl font-semibold text-[var(--color-text-main)]">8. Datensicherheit</h2>
                    <p>
                        Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Ihrer Anfragen, eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von "http://" auf "https://" wechselt und an dem Schloss-Symbol in Ihrer Browserzeile. Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.
                    </p>
                </section>

                <p className="text-sm mt-8 opacity-70">
                    Stand: Februar 2026
                </p>
            </div>
        </div>
    );
}
