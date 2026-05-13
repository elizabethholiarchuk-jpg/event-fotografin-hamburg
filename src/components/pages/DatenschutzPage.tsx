import { Language } from "@/i18n";

export default function DatenschutzPage({ lang }: { lang: Language }) {
    return (
        <div className="max-w-[800px] mx-auto px-6 py-24 md:py-32 flex flex-col gap-10 text-[var(--color-text-main)]">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight">{lang === 'en' ? 'Privacy Policy' : 'Datenschutzerklärung'}</h1>

            <div className="flex flex-col gap-8 text-[var(--color-text-muted)] leading-relaxed text-[16px] md:text-[17px]">

                {lang === 'en' ? (
                    <>
                        <section className="flex flex-col gap-4">
                            <h2 className="text-2xl font-semibold text-[var(--color-text-main)]">1. Privacy at a glance</h2>
                            <p><strong>General notes</strong></p>
                            <p>
                                The following notes provide a simple overview of what happens to your personal data when you visit this website. Personal data is any data with which you could be personally identified. Detailed information on the subject of data protection can be found in our privacy policy below.
                            </p>
                        </section>

                        <section className="flex flex-col gap-4">
                            <h2 className="text-2xl font-semibold text-[var(--color-text-main)]">2. Responsible party</h2>
                            <p>
                                The responsible party for data processing on this website is:
                            </p>
                            <address className="not-italic flex flex-col gap-1">
                                <strong>Yelyzaveta Holiarchuk</strong><br />
                                Rehhoffstrasse 10<br />
                                20459 Hamburg<br />
                                <br />
                                Phone: <a href="tel:+491752606697" className="text-[var(--color-text-main)] hover:text-[var(--color-accent)] transition-colors">+49 175 260 6697</a><br />
                                E-Mail: <a href="mailto:hello@lizaholiarchuk.com" className="text-[var(--color-text-main)] hover:text-[var(--color-accent)] transition-colors">hello@lizaholiarchuk.com</a>
                            </address>
                            <p>
                                The responsible party is the natural or legal person who alone or jointly with others decides on the purposes and means of processing personal data (e.g. names, email addresses, etc.).
                            </p>
                        </section>

                        <section className="flex flex-col gap-4">
                            <h2 className="text-2xl font-semibold text-[var(--color-text-main)]">3. Data collection on this website (Server log files & Hosting)</h2>
                            <p><strong>Hosting by Vercel</strong></p>
                            <p>
                                We host our website with the provider Vercel (Vercel Inc., 340 S Lemon Ave #4133, Walnut, CA 91789, USA).
                            </p>
                            <p>
                                When you visit our website, Vercel automatically collects data that your browser transmits in so-called server log files. These are in particular:
                            </p>
                            <ul className="list-disc pl-5 flex flex-col gap-2">
                                <li>Your IP address</li>
                                <li>Browser type and browser version</li>
                                <li>Operating system used</li>
                                <li>Referrer URL (the previously visited page)</li>
                                <li>Host name of the accessing computer</li>
                                <li>Time of the server request</li>
                            </ul>
                            <p>
                                The collection of this data is based on Art. 6 para. 1 lit. f GDPR. We have a legitimate interest in the technically error-free presentation and the optimization of our website – for this purpose, the server log files must be recorded.
                            </p>
                            <p>
                                Further details can be found in Vercel's privacy policy at: <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-[var(--color-text-main)] underline hover:text-[var(--color-accent)] transition-colors">vercel.com/legal/privacy-policy</a>.
                            </p>
                        </section>

                        <section className="flex flex-col gap-4">
                            <h2 className="text-2xl font-semibold text-[var(--color-text-main)]">4. Contact form and email inquiries</h2>
                            <p>
                                If you send us inquiries via the contact form, your details from the form, including the contact details you provided there (name, company/organization, email, event type, date, location, duration, budget, and message) will be stored by us for the purpose of processing the inquiry and in case of follow-up questions. We do not pass on this data without your consent.
                            </p>
                            <p>
                                The processing of this data is based on Art. 6 para. 1 lit. b GDPR, provided your inquiry is related to the fulfillment of a contract or is necessary to carry out pre-contractual measures. In all other cases, processing is based on our legitimate interest in the effective processing of inquiries addressed to us (Art. 6 para. 1 lit. f GDPR) or on your consent (Art. 6 para. 1 lit. a GDPR) if this was requested.
                            </p>
                            <p>
                                The data you enter in the contact form will remain with us until you request deletion, revoke your consent to storage, or the purpose for data storage no longer applies (e.g. after processing your inquiry). Mandatory statutory provisions – in particular retention periods – remain unaffected.
                            </p>
                        </section>

                        <section className="flex flex-col gap-4">
                            <h2 className="text-2xl font-semibold text-[var(--color-text-main)]">5. Web Analytics</h2>
                            <p><strong>Vercel Web Analytics</strong></p>
                            <p>
                                We use the "Vercel Web Analytics" service provided by Vercel Inc. to analyze website usage. The service collects aggregated and anonymized data about visits and page views to help us better understand and optimize the use of our website.
                            </p>
                            <p>
                                Vercel Web Analytics is configured so that <strong>no tracking cookies</strong> are stored on your device by default. Only pseudonymized hash values based on the IP address and the user agent are used to assign visits. These hash values rotate daily so that users cannot be permanently tracked over days.
                            </p>
                            <p>
                                The use of this analysis tool is based exclusively on your explicit consent based on Art. 6 para. 1 lit. a GDPR. You can revoke this consent at any time via the cookie settings in the footer.
                            </p>
                        </section>

                        <section className="flex flex-col gap-4">
                            <h2 className="text-2xl font-semibold text-[var(--color-text-main)]">6. Cookies and Consent Management</h2>
                            <p><strong>Use of cookies</strong></p>
                            <p>
                                Our website partly uses so-called "cookies". Cookies do not cause any damage to your computer and do not contain viruses. They serve to make our offer more user-friendly, effective and secure. Cookies are small text files that are stored on your computer and saved by your browser.
                            </p>
                            <p>
                                Most of the cookies we use are so-called "session cookies". They are automatically deleted after your visit. Other cookies remain stored on your device until you delete them (persistent cookies). We currently only use technically necessary cookies, without which the website would not function properly. The use of necessary cookies is based on the legitimate interest in the error-free provision of services (Art. 6 para. 1 lit. f GDPR).
                            </p>
                            <p><strong>Management via cookie settings</strong></p>
                            <p>
                                Reading or storing information that is not strictly technically necessary (e.g. through extended performance tracking cookies) only takes place on this website if you have previously given us your explicit consent in accordance with Art. 6 para. 1 lit. a GDPR in conjunction with § 25 TTDSG.
                            </p>
                            <p>
                                You can view, edit, or revoke your current privacy settings at any time with effect for the future via the "Cookie Settings" link in the footer of this website.
                            </p>
                        </section>

                        <section className="flex flex-col gap-4">
                            <h2 className="text-2xl font-semibold text-[var(--color-text-main)]">7. Your rights as a data subject</h2>
                            <p>You have the following rights regarding your personal data at any time:</p>
                            <ul className="list-disc pl-5 flex flex-col gap-2">
                                <li><strong>Information (Art. 15 GDPR):</strong> You have the right to receive information about the origin, recipients, and purpose of your stored personal data free of charge at any time.</li>
                                <li><strong>Rectification (Art. 16 GDPR):</strong> You have the right to request the immediate correction of incorrect or completion of your personal data.</li>
                                <li><strong>Deletion (Art. 17 GDPR):</strong> You have the right to request the deletion of your personal data stored by us, unless processing is necessary to exercise the right to freedom of expression, to fulfill a legal obligation, or to assert legal claims.</li>
                                <li><strong>Restriction of processing (Art. 18 GDPR):</strong> You have the right to request the restriction of processing if, for example, you dispute the accuracy of the data.</li>
                                <li><strong>Data portability (Art. 20 GDPR):</strong> You have the right to receive your data that you have provided to us in a structured, common format or to request the transfer to another responsible party.</li>
                                <li><strong>Revocation of consent (Art. 7 para. 3 GDPR):</strong> You can revoke a previously given consent at any time with effect for the future.</li>
                                <li><strong>Right to object (Art. 21 GDPR):</strong> If your data is processed based on legitimate interests (Art. 6 para. 1 lit. f GDPR), you have the right to object.</li>
                                <li><strong>Right to complain (Art. 77 GDPR):</strong> In the event of a violation of the GDPR, you have the right to lodge a complaint with a competent supervisory authority.</li>
                            </ul>
                        </section>

                        <section className="flex flex-col gap-4">
                            <h2 className="text-2xl font-semibold text-[var(--color-text-main)]">8. Data Security</h2>
                            <p>
                                For security reasons and to protect the transmission of confidential content, such as your inquiries, this site uses SSL or TLS encryption. You can recognize an encrypted connection by the fact that the address line of the browser changes from "http://" to "https://" and by the lock symbol in your browser line. If SSL or TLS encryption is activated, the data you transmit to us cannot be read by third parties.
                            </p>
                        </section>

                        <p className="text-sm mt-8 opacity-70">
                            As of: February 2026
                        </p>
                    </>
                ) : (
                    <>
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
                                Die Nutzung dieses Analyse-Tools erfolgt ausschließlich mit Ihrer ausdrücklichen Einwilligung auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO. Sie können diese Einwilligung jederzeit über die Cookie-Einstellungen im Footer widerrufen.
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
                    </>
                )}
            </div>
        </div>
    );
}
