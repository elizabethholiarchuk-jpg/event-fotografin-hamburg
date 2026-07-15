import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { insightsPosts } from "@/data/insights";
import FaqAccordion from "@/components/FaqAccordion";
import {
  buildBlogPostingJsonLd,
  buildFaqPageJsonLd,
  buildArticleBreadcrumbJsonLd,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: "Was kostet ein Eventfotograf? (Preise & Übersicht)",
  description:
    "Eventfotografie in Deutschland kostet je nach Aufwand 300 € – 2.500 €+. Hier erfahren Sie, wie sich die Preise zusammensetzen – und worauf Sie vor der Buchung achten sollten.",
  alternates: {
    canonical: "/de/insights/how-much-does-an-event-photographer-cost-hamburg",
  },
  openGraph: {
    title: "Was kostet ein Eventfotograf? (Preise & Übersicht)",
    description:
      "Eventfotografie in Deutschland kostet je nach Aufwand 450 € – 2.050 €+. Hier erfahren Sie, wie sich die Preise zusammensetzen – und worauf Sie vor der Buchung achten sollten.",
    url: "/de/insights/how-much-does-an-event-photographer-cost-hamburg",
    images: [
      {
        url: "/images/insights/event-photographer-hamburg-conference-speaker-audience.webp",
        width: 1200,
        height: 630,
        alt: "Eventfotograf Hamburg — Konferenzsprecher präsentiert vor geschäftlichem Publikum",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Was kostet ein Eventfotograf? (Preise & Übersicht)",
    description:
      "Eventfotografie in Deutschland kostet je nach Aufwand 450 € – 2.050 €+. Hier erfahren Sie, wie sich die Preise zusammensetzen – und worauf Sie vor der Buchung achten sollten.",
    images: [
      {
        url: "/images/insights/event-photographer-hamburg-conference-speaker-audience.webp",
        alt: "Eventfotograf Hamburg — Konferenzsprecher präsentiert vor geschäftlichem Publikum",
      },
    ],
  },
};

const SLUG = "how-much-does-an-event-photographer-cost-hamburg";
const post = insightsPosts.find((p) => p.slug === SLUG)!;

const FAQ_ITEMS = [
  {
    q: "Wie viel kostet ein Eventfotograf in Deutschland?",
    a: "Für Corporate Events in Deutschland liegen die realistischen Marktpreise bei: 2 Stunden ab 450 €, 4 Stunden 900 € – 1.400 € und ein ganzer Tag (8 Stunden) 1.400 € – 2.500 €, jeweils netto. Preise im oberen Segment spiegeln professionelle Ausrüstung, Postproduktion, Nutzungsrechte und Optionen für eine Lieferung am selben Tag wider.",
  },
  {
    q: "Warum variieren die Preise für Eventfotografen so stark?",
    a: "Ein Teil davon ist betriebsbedingt: Der Preis deckt Vorbesprechung, Postproduktion, Ausrüstung, Versicherung, Software und eine begrenzte Anzahl abrechenbarer Tage pro Jahr ab. Aber ein großer Teil hängt auch vom Mindset ab. Viele Fotografen haben nie berechnet, was es kostet, diesen Beruf in Vollzeit auszuüben. Wenn man die tatsächlichen Zahlen betrachtet – Wertminderung der Ausrüstung, unbezahlte Verwaltungsarbeit, Steuern, kein Krankengeld – liegen 50 € pro Stunde unter dem Mindestlohn für einen Selbständigen. Dieser Preis existiert, weil manche Fotografen die Fotografie als Zusatzeinkommen betrachten, nicht als Unternehmen. Das verzerrt die Kundenerwartungen und macht es für Vollzeit-Profis schwerer, das zu berechnen, was die Arbeit tatsächlich kostet.",
  },
  {
    q: "Sind 1.000 € für 4 Stunden Eventfotografie ein fairer Preis?",
    a: "Ja – das liegt im normalen professionellen Rahmen für deutsche Großstädte. Wenn man Vorbereitung, Postproduktion, Ausrüstung und Gemeinkosten mit einbezieht, ist eine 4-Stunden-Buchung für den Fotografen faktisch ein ganzer Arbeitstag.",
  },
  {
    q: "Sollte ich eine Anzahlung für Eventfotografie leisten?",
    a: "Ja – jeder professionelle Fotograf wird eine verlangen, und Sie sollten dies auch erwarten. Eine Anzahlung sichert Ihnen exklusiv das Datum und schützt beide Seiten. Ein Fotograf, der keine Anzahlung verlangt, hat keine formelle Verpflichtung Ihnen gegenüber, und Sie haben keine formelle Verpflichtung ihm gegenüber. Klare Zahlungsbedingungen, eine Anzahlungsstruktur und Stornierungsbedingungen sollten in jedem professionellen Angebot enthalten sein.",
  },
  {
    q: "Was benötigen Sie von mir vor dem Event?",
    a: "Zwei Dinge: den Ablaufplan des Events und die Namen der wichtigsten Personen – Redner, Führungskräfte, alle, die nicht verpasst werden dürfen. Wenn diese Namen vorab recherchiert werden, wird am Tag selbst keine Zeit verschwendet. Wenn Sie am selben Tag Inhalte für Instagram oder LinkedIn benötigen, erwähnen Sie das im Vorfeld – das ändert die Priorisierung der Momente und wie schnell Highlights geliefert werden.",
  },
  {
    q: "Wie viele Fotos erhalte ich von meinem Event?",
    a: "Menge ist die falsche Kennzahl. Ein Fotograf kann 200 Bilder liefern, die Sie nie nutzen werden, oder 30, die Sie überall verwenden – Website, Presse, LinkedIn, Einladung zum nächsten Event. Was zählt, ist Kuration und Vielfalt, nicht Quantität.",
  },
  {
    q: "Wie schnell kann ich die Fotos erhalten?",
    a: "Eine vollständig bearbeitete Galerie innerhalb von 24 Stunden ist der Standard. Highlights am selben Tag – 5 bis 10 Bilder für Live-Social-Media oder die Presse – können vorab vereinbart und während oder unmittelbar nach dem Event geliefert werden.",
  },
  {
    q: "Gehören die Fotos nach der Buchung mir?",
    a: "In Deutschland bleibt das Urheberrecht gesetzlich beim Fotografen. Was Sie erhalten, sind Nutzungsrechte – typischerweise für den internen Gebrauch, Presse, Social Media und die Website. Kommerzielle Nutzung darüber hinaus wird separat angeboten.",
  },
];

export default function EventPhotographerCostPage() {
  const relatedSlugs = [
    "how-to-brief-your-event-photographer-conference-hamburg",
    "same-day-event-photo-delivery-when-it-matters",
  ];
  const relatedPosts = relatedSlugs
    .map((s) => insightsPosts.find((p) => p.slug === s))
    .filter(Boolean);

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            buildArticleBreadcrumbJsonLd('de', "Was kostet ein Eventfotograf?", SLUG),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            buildBlogPostingJsonLd({
              slug: SLUG,
              headline: "Was kostet ein Eventfotograf?",
              description: "Eventfotografie in Deutschland kostet je nach Aufwand 300 € – 2.500 €+. Hier erfahren Sie, wie sich die Preise zusammensetzen.",
              datePublished: post.datePublished,
              dateModified: post.dateModified,
              image: post.coverImage,
            }),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildFaqPageJsonLd(FAQ_ITEMS)),
        }}
      />

      {/* Hero */}
      <section className="pt-32 md:pt-44 pb-16 md:pb-24 border-b border-[var(--color-border-hairline)]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col gap-6">
          <nav aria-label="Breadcrumb" className="text-[13px] text-[var(--color-text-muted)] font-light">
            <Link href="/de" className="hover:text-[var(--color-accent)] transition-colors">Startseite</Link>
            <span className="mx-2" aria-hidden="true">›</span>
            <Link href="/de/insights" className="hover:text-[var(--color-accent)] transition-colors">Insights</Link>
            <span className="mx-2" aria-hidden="true">›</span>
            <span className="text-[var(--color-text-main)]">Pricing &amp; Booking</span>
          </nav>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[var(--color-text-main)] leading-[1.08] max-w-4xl">
            Eventfotograf in Deutschland: Was kostet das eigentlich?
          </h1>
          <p className="text-lg md:text-xl text-[var(--color-text-muted)] max-w-[60ch] font-normal leading-relaxed">
            Eventfotografie in Deutschland kostet je nach Aufwand 300 € – 2.500 €+.
            Hier erfahren Sie, wie sich die Preise zusammensetzen – und worauf Sie vor der Buchung achten sollten.
          </p>
          <div className="flex items-center gap-4 text-[14px] text-[var(--color-text-muted)]">
            <span>Von <Link href="/de/ueber-mich" className="text-[var(--color-text-main)] font-medium hover:underline underline-offset-2">Liza Holiarchuk</Link></span>
            <span className="w-1 h-1 rounded-full bg-[var(--color-text-muted)] opacity-50" />
            <span>Juni 2026</span>
            <span className="w-1 h-1 rounded-full bg-[var(--color-text-muted)] opacity-50" />
            <span>8 Min. Lesezeit</span>
          </div>
        </div>
      </section>

      {/* Hero image */}
      <section className="py-10 md:py-14">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="relative aspect-[16/7] rounded-[20px] overflow-hidden bg-[var(--color-border-hairline)] border border-gray-100 shadow-sm">
            <Image
              src="/images/insights/event-photographer-hamburg-conference-speaker-audience.webp"
              alt="Eventfotograf Hamburg — Konferenzsprecher präsentiert vor geschäftlichem Publikum"
              fill
              className="object-cover"
              sizes="(max-width: 1248px) 100vw, 1200px"
              priority
            />
          </div>
        </div>
      </section>

      {/* Article body — The short answer */}
      <section className="pb-16 md:pb-24 border-b border-[var(--color-border-hairline)]">
        <div className="max-w-[900px] mx-auto px-6 md:px-12 flex flex-col gap-8">
          <p className="text-[17px] text-[var(--color-text-muted)] leading-[1.85]">
            Wenn Sie nach einem Eventfotografen suchen, finden Sie Angebote, die von 50 € bis 500 € pro Stunde reichen. 
            Scheinbar für die gleiche Dienstleistung. Was erklärt diese Differenz? Und was steckt tatsächlich hinter 
            einem Preis, der auf den ersten Blick vielleicht hoch erscheint?
          </p>
        </div>
      </section>

      {/* Why prices vary */}
      <section className="py-16 md:py-24 border-b border-[var(--color-border-hairline)]">
        <div className="max-w-[900px] mx-auto px-6 md:px-12 flex flex-col gap-8">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[var(--color-text-main)]">
            Warum die Preise so stark variieren — und was niemand laut ausspricht
          </h2>
          <div className="flex flex-col gap-6 text-[17px] text-[var(--color-text-muted)] leading-[1.85]">
            <p>
              Die einfache Antwort ist, dass der Preis mehr abdeckt als nur die Zeit vor Ort: 
              Vorabkoordination, Postproduktion, Ausrüstung, Versicherung, Software und eine 
              begrenzte Anzahl tatsächlich abrechenbarer Tage pro Jahr. Ein niedrigerer Preis 
              bedeutet oft, dass einer oder mehrere dieser Punkte schlichtweg fehlen.
            </p>
            <p>Aber das ist nur ein Teil der Geschichte.</p>
            <p>
              Ein großer Teil der Preisunterschiede in diesem Markt hat nichts damit zu tun, 
              was inkludiert ist. Es ist eine Frage des Mindsets. Viele Fotografen haben nie 
              wirklich ausgerechnet, was es kostet, diese Arbeit in Vollzeit zu machen. Sie 
              haben aus Leidenschaft angefangen, die Preise aus Gewohnheit oder Unsicherheit 
              niedrig gehalten und nie die wahren Zahlen durchkalkuliert. Wenn man das tut — 
              Wertminderung der Ausrüstung, unbezahlte Verwaltungsstunden, Steuern, kein Krankengeld, 
              kein bezahlter Urlaub — dann landen 50 € pro Stunde unter dem Mindestlohn für eine 
              selbstständige Person ohne Sozialleistungen. Kein Schnäppchen. Ein Signal, dass 
              jemand die Mathematik dahinter nicht gemacht hat.
            </p>
            <p>
              Würde sich jeder Fotograf, der in diesem Bereich arbeitet, hinsetzen und seine wahren 
              Kosten ehrlich berechnen, würde dieser Preis vom professionellen Markt verschwinden. 
              Er bleibt bestehen, weil manche Leute die Fotografie als Zusatzeinkommen und nicht 
              als Unternehmen betrachten. Das ist eine valide persönliche Entscheidung. Aber sie verzerrt 
              die Preiserwartungen für Kunden und macht es für Vollzeit-Profis schwieriger, das zu 
              berechnen, was die Arbeit tatsächlich kostet.
            </p>
            <p>
              Das Ergebnis ist ein Markt, in dem ein 50-€-Angebot und ein 200-€-Angebot wie ein 
              Qualitätsspektrum aussehen — während sie eigentlich völlig unterschiedliche 
              geschäftliche Realitäten darstellen.
            </p>
          </div>
        </div>
      </section>

      {/* What the hourly rate doesn't tell you */}
      <section className="py-16 md:py-24 border-b border-[var(--color-border-hairline)]">
        <div className="max-w-[900px] mx-auto px-6 md:px-12 flex flex-col gap-8">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[var(--color-text-main)]">
            Was der Stundensatz Ihnen nicht verrät
          </h2>
          <div className="flex flex-col gap-6 text-[17px] text-[var(--color-text-muted)] leading-[1.85]">
            <p>
              Wenn ein Fotograf 1.000 € für ein 4-stündiges Event berechnet, zahlen Sie nicht 
              für 4 Stunden Arbeit. Sie zahlen für etwa das Doppelte — und das ist nur der 
              sichtbare Teil.
            </p>
            <p>
              Vor dem Event gibt es Koordination, Briefing, Location-Recherche, das Überprüfen 
              und Laden der Ausrüstung, das Packen des gesamten Equipments. Ein professioneller 
              Fotograf taucht nicht einfach auf und fängt an zu fotografieren.
            </p>
            <p>
              Das Event selbst dauert 4 Stunden. Der kleinste Teil der Gesamtarbeit.
            </p>
            <p>
              Nach dem Event unterschätzen die meisten Kunden, was alles ansteht — und hier zeigt 
              es sich, wenn an den falschen Enden gespart wurde. Mein Bearbeitungsprozess läuft 
              bewusst in zwei Phasen ab. Am Tag des Events mache ich einen ersten Durchgang: 
              Bilder mit Potenzial auswählen, markieren, was mir ins Auge gefallen ist. 
              Die eigentliche Bearbeitung findet am nächsten Tag statt. Nicht weil ich langsam 
              bin, sondern weil ein müdes Auge Dinge übersieht. Nach stundenlangem Fotografieren 
              unter Druck verschwimmt die Urteilskraft. Eine frische Perspektive am nächsten 
              Morgen macht den Unterschied zwischen einer Lieferung, auf die man stolz ist, und 
              einer, die nur "ganz okay" ist.
            </p>
          </div>

          <div className="bg-[#F5F8FB] border border-[var(--color-border-hairline)] rounded-[20px] px-8 py-7">
            <p className="text-xl md:text-2xl font-normal text-[var(--color-text-main)] leading-relaxed italic">
              „Wir brauchen nicht viele Bilder. Wir brauchen die besten Highlights.“
            </p>
          </div>

          <div className="flex flex-col gap-6 text-[17px] text-[var(--color-text-muted)] leading-[1.85]">
            <p>
              Nicht nur über technische Qualität. Über Kuration und Vielfalt. Zehn Bilder, die Sie 
              tatsächlich nutzen, sind mehr wert als hundert, über die Sie hinwegscrollen.
            </p>
            <p>
              In der Praxis ist ein "4-Stunden-Job" ein voller 8- bis 10-Stunden-Arbeitstag. 
              Der Stundensatz, auf die Gesamtzeit verteilt, halbiert sich sofort.
            </p>
          </div>
        </div>
      </section>

      {/* The costs clients don't see */}
      <section className="py-16 md:py-24 border-b border-[var(--color-border-hairline)]">
        <div className="max-w-[900px] mx-auto px-6 md:px-12 flex flex-col gap-8">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[var(--color-text-main)]">
            Die Kosten, die Kunden nicht sehen
          </h2>
          <div className="flex flex-col gap-6 text-[17px] text-[var(--color-text-muted)] leading-[1.85]">
            <p>
              Denken Sie an einen professionellen Fotografen als ein kleines Unternehmen, nicht 
              als eine Person mit einer Kamera. Die Ausrüstung allein erzählt die Geschichte. 
              Ein Kameragehäuse wie die{" "}
              <a
                href="https://www.canon.de/cameras/eos-r5/"
                target="_blank"
                rel="noopener"
                className="text-[var(--color-text-main)] underline underline-offset-2 hover:text-[var(--color-accent)]"
              >
                Canon EOS R5
              </a>{" "}
              kostet über 3.500 €. Ein einzelnes professionelles Objektiv — die Art, die im 
              schwachen Licht eines Konferenzraums oder bei der gemischten Beleuchtung einer 
              Messehalle zuverlässig funktioniert — liegt bei 1.500 € bis 2.500 €. Fügen Sie ein 
              Backup-Gehäuse, Beleuchtungsausrüstung, Blitze, Stative und Koffer hinzu, und ein 
              komplettes Arbeitsset erreicht 10.000 € bis 15.000 €, ohne das Budget zu sprengen. 
              Nichts davon ist optional. Kameras fallen aus. Speicherkarten gehen kaputt. 
              Ein Fotograf ohne Backup-Ausrüstung bei einem Corporate Event ist ein Risiko.
            </p>
            <p>
              Dann ist da noch die Software.{" "}
              <a
                href="https://www.adobe.com/creativecloud.html"
                target="_blank"
                rel="noopener"
                className="text-[var(--color-text-main)] underline underline-offset-2 hover:text-[var(--color-accent)]"
              >
                Adobe Creative Cloud
              </a>{" "}
              — der Branchenstandard für die Bearbeitung — kostet für Fotografen etwa 60 € im 
              Monat. Mit Plattformen für die Galeriebereitstellung, Buchhaltungstools und einem 
              CRM erreicht die Gesamtsumme leicht 150 € bis 200 € pro Monat: rund 2.000 € pro Jahr 
              an Fixkosten, bevor einem einzigen Kunden eine Rechnung gestellt wird. 
              Berufshaftpflicht- und Ausrüstungsversicherungen fügen jährlich weitere 500 € 
              bis 1.200 € hinzu, was bei Firmenveranstaltungen mit teuren Setups und Fragen 
              der öffentlichen Haftung eher eine Voraussetzung als ein Luxus ist.
            </p>
            <p>
              Die Zahl, die die meisten Menschen überrascht: Ein freiberuflicher Fotograf hat 
              keine 220 voll abrechenbaren Tage im Jahr. Nach Kundenakquise, Postproduktion, 
              Verwaltung und beruflicher Weiterbildung liegt die realistische Schätzung bei 60 
              bis 100 tatsächlichen Einsatztagen. Jeder Tagessatz muss ein ganzes Jahr an 
              Fixkosten, Steuern und Zeit tragen, die auf keiner Rechnung auftaucht.
            </p>
          </div>

          {/* In-body image */}
          <div className="relative aspect-[16/9] rounded-[20px] overflow-hidden bg-[var(--color-border-hairline)] border border-gray-100 shadow-sm">
            <Image
              src="/images/insights/event-photographer-hamburg-networking-detail.webp"
              alt="Event Networking in Hamburg — Gäste mit Kaffee und Handys bei einer Firmenveranstaltung"
              fill
              className="object-cover"
              sizes="(max-width: 948px) 100vw, 900px"
            />
          </div>
        </div>
      </section>

      {/* When cheap becomes expensive */}
      <section className="py-16 md:py-24 border-b border-[var(--color-border-hairline)]">
        <div className="max-w-[900px] mx-auto px-6 md:px-12 flex flex-col gap-8">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[var(--color-text-main)]">
            Wenn günstig teuer wird
          </h2>
          <div className="flex flex-col gap-6 text-[17px] text-[var(--color-text-muted)] leading-[1.85]">
            <p>
              Ich habe mit Marketingmanagern gesprochen, die einen Fotografen zu einem 
              niedrigen Preis für eine Unternehmenskonferenz gebucht haben und eine Galerie 
              erhielten, die sie nicht öffentlich nutzen konnten — Bewegungsunschärfe beim 
              Hauptredner, flaches Licht bei den Networking-Momenten, kein brauchbares 
              Porträt des CEOs. Das Event war vorbei. Es gab keine zweite Chance. Was sie 
              bei der Fotografie gespart haben, haben sie dafür ausgegeben, die Situation zu 
              retten: Stockbilder für die Pressemitteilung, keine Inhalte für LinkedIn und eine 
              Jahresberichtseite, die ohne die Fotos herausgegeben wurde, um die herum sie 
              eigentlich entworfen worden war.
            </p>
          </div>

          <div className="bg-[#F5F8FB] border border-[var(--color-border-hairline)] rounded-[20px] px-8 py-7">
            <p className="text-xl md:text-2xl font-normal text-[var(--color-text-main)] leading-relaxed italic">
              Dieses Muster ist in der Branche so spezifisch und häufig, dass es einen Namen 
              hat: Die unsichtbaren Kosten einer falschen Einstellung.
            </p>
          </div>

          <div className="flex flex-col gap-6 text-[17px] text-[var(--color-text-muted)] leading-[1.85]">
            <p>
              Niedrige Raten in der Eventfotografie bedeuten typischerweise eine Kombination aus 
              Folgendem — keine professionelle Backup-Ausrüstung, begrenzte Erfahrung mit den 
              Licht- und Tempobedingungen echter Corporate Events, keine nennenswerte 
              Postproduktion und keine vertragliche Klarheit, falls etwas schiefgeht. Jedes 
              davon ist isoliert betrachtet handhabbar. Zusammen ergeben sie eine Galerie, die 
              so aussieht, als wäre das Event von einem Kollegen mit einer neuen Kamera 
              dokumentiert worden. Was oft genug genau das ist, was passiert ist.
            </p>
          </div>
        </div>
      </section>

      {/* What a solid quote contains */}
      <section className="py-16 md:py-24 border-b border-[var(--color-border-hairline)]">
        <div className="max-w-[900px] mx-auto px-6 md:px-12 flex flex-col gap-8">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[var(--color-text-main)]">
            Was ein solides Angebot wirklich enthält
          </h2>
          <p className="text-[17px] text-[var(--color-text-muted)] leading-[1.85]">
            Diese Punkte decke ich in jedem Angebot ab, das ich verschicke — weil sie es sind, 
            woran Kunden im Voraus am häufigsten nicht denken, und woher abweichende Erwartungen kommen.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "Was inkludiert ist und was nicht",
                text: "Postproduktion, Anzahl der finalen Bilder, Lieferformat, Galerie-Hosting — stellen Sie sicher, dass diese explizit genannt werden. Ein Angebot, das nur Stunden und einen Preis auflistet, ist unvollständig.",
              },
              {
                title: "Nutzungsrechte",
                text: "In Deutschland bleibt das Urheberrecht gesetzlich beim Fotografen. Was Sie erhalten, sind Nutzungsrechte. Ein gut strukturiertes Angebot definiert diese klar: interne Kommunikation, Presse, Social Media, Website.",
              },
              {
                title: "Lieferzeitraum",
                text: "Eine vollständig bearbeitete Galerie innerhalb von 24 Stunden ist der Standard für professionelle Event-Arbeit. Highlights am selben Tag — 5 bis 10 Bilder für Live-Social-Media oder Presse — sind eine separate Dienstleistung, die im Voraus geplant wird.",
              },
              {
                title: "Backup-Systeme",
                text: "Fragen Sie direkt nach. Professionelle Fotografen schreiben während eines gesamten Shootings auf mehrere Speicherkarten gleichzeitig. Ein Ausfall einer Karte — was vorkommen kann — bedeutet keinen Verlust. Standardpraxis, kein Premium-Feature.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-3 p-6 border border-[var(--color-border-hairline)] rounded-[20px]"
              >
                <h3 className="text-lg font-semibold text-[var(--color-text-main)]">
                  {item.title}
                </h3>
                <p className="text-[15px] text-[var(--color-text-muted)] leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* Payment terms — full width */}
          <div className="flex flex-col gap-3 p-6 border border-[var(--color-border-hairline)] rounded-[20px]">
            <h3 className="text-lg font-semibold text-[var(--color-text-main)]">
              Zahlungs- und Stornierungsbedingungen
            </h3>
            <p className="text-[15px] text-[var(--color-text-muted)] leading-relaxed">
              Als ich nach Deutschland zog und in einem neuen Markt anfing, verlangte ich 
              keine Anzahlung. Ich reiste in eine andere Stadt, um ein Firmenevent zu 
              fotografieren, lieferte die Arbeit ab, erhielt ein Dankeschön — und wurde 
              nie bezahlt. Kein Vertrag, keine Anzahlung, keine rechtliche Handhabe. Das 
              passierte einmal. Es wird nicht wieder passieren, und deshalb betrachte 
              ich Zahlungsbedingungen nun als nicht verhandelbar, egal wie unkompliziert 
              ein Kunde erscheinen mag. Ein professioneller Fotograf hält Ihr Datum exklusiv 
              und lehnt andere Aufträge ab, um bei Ihrem zu sein. Seriöse Angebote 
              enthalten eine Anzahlungsstruktur, klare Zahlungsbedingungen und 
              Stornierungsbedingungen für beide Seiten. Wenn ein Angebot nichts davon 
              erwähnt, fragen Sie nach dem Grund.
            </p>
          </div>

          <p className="text-[15px] text-[var(--color-text-muted)] leading-relaxed">
            Der{" "}
            <a
              href="https://www.bff.de/"
              target="_blank"
              rel="noopener"
              className="text-[var(--color-text-main)] underline underline-offset-2 hover:text-[var(--color-accent)]"
            >
              BFF (Bundesverband Freie Fotografen und Filmgestalter)
            </a>
            , Deutschlands Berufsverband für Fotografen, veröffentlicht Standard-Nutzungsrecht-Rahmenwerke, 
            an denen sich die meisten professionellen Fotografen orientieren.
          </p>
        </div>
      </section>

      {/* Realistic numbers */}
      <section className="py-16 md:py-24 border-b border-[var(--color-border-hairline)]">
        <div className="max-w-[1000px] mx-auto px-6 md:px-12 flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[var(--color-text-main)]">
              Realistische Preisrahmen
            </h2>
            <p className="text-[14px] text-[var(--color-text-muted)]">
              Nettopreise, exklusive MwSt.&ensp;·&ensp;Professionelle Fotografen in Deutschland stellen in der Regel nicht einfach die Zeit in Rechnung, die für das Fotografieren aufgewendet wird; ihre Preise berücksichtigen Vorbereitung, Postproduktion, professionelle Ausrüstung, Versicherung und Geschäftskosten. Die meisten Profis akzeptieren keine 1-Stunden-Buchungen und haben eine Mindestanforderung von 2 bis 3 Stunden.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col gap-3 p-6 border border-[var(--color-border-hairline)] rounded-[20px]">
              <h3 className="text-lg font-semibold text-[var(--color-text-main)]">Stundensatz</h3>
              <p className="text-xl font-medium text-[var(--color-text-main)]">200 € – 300 €+ / Std.</p>
              <p className="text-[14px] text-[var(--color-text-muted)] mt-2">
                <strong className="font-medium text-[var(--color-text-main)]">Hinweis:</strong> Die erste Stunde wird manchmal höher berechnet, um grundlegenden Aufbau und Anfahrt abzudecken, wobei die folgenden Stunden leicht sinken. Stundensätze werden oft eher zur Berechnung von Überstunden herangezogen als für anfängliche Buchungen.
              </p>
            </div>

            <div className="flex flex-col gap-3 p-6 border border-[var(--color-border-hairline)] rounded-[20px]">
              <h3 className="text-lg font-semibold text-[var(--color-text-main)]">Halbtagessatz <span className="text-[15px] font-normal text-[var(--color-text-muted)]">(ca. 4 Stunden)</span></h3>
              <p className="text-xl font-medium text-[var(--color-text-main)]">900 € – 1.400 €</p>
              <p className="text-[14px] text-[var(--color-text-muted)] mt-2">
                Dies ist das gängigste Paket für abendliche Firmenempfänge, mittelgroße PR-Events oder Halbtageskonferenzen.
              </p>
              <p className="text-[14px] text-[var(--color-text-muted)] mt-1 italic">
                In einem großen Wirtschaftszentrum wie Hamburg können Sie davon ausgehen, dass die meisten zuverlässigen Profis zwischen 1.000 € und 1.500 € für einen halben Tag veranschlagen.
              </p>
            </div>

            <div className="flex flex-col gap-3 p-6 border border-[var(--color-border-hairline)] rounded-[20px]">
              <h3 className="text-lg font-semibold text-[var(--color-text-main)]">Ganztagessatz <span className="text-[15px] font-normal text-[var(--color-text-muted)]">(ca. 8 Stunden)</span></h3>
              <p className="text-xl font-medium text-[var(--color-text-main)]">1.400 € – 2.500 €+</p>
              <p className="text-[14px] text-[var(--color-text-muted)] mt-2">
                In Hamburg wird ein standardmäßiges ganztägiges Corporate-Shooting in der Regel bei rund 1.600 € bis 2.500 €+ landen, je nach spezifischen Nutzungsrechten, Komplexität der Postproduktion und Optionen für eine Lieferung am selben Tag.
              </p>
            </div>
          </div>

          <div className="bg-[#F5F8FB] border border-[var(--color-border-hairline)] rounded-[20px] px-6 py-5 mt-2">
            <p className="text-[14px] text-[var(--color-text-muted)] leading-relaxed">
              <strong className="font-semibold text-[var(--color-text-main)]">Hinweis:</strong> Studenten oder Semi-Profis verlangen möglicherweise 60 €–100 € pro Stunde, aber ihnen fehlt im Allgemeinen die gewerbliche Haftpflichtversicherung, die Backup-Ausrüstung und die Expertise bei schwachem Licht, die für geschäftskritische Firmenevents erwartet wird.
            </p>
          </div>
        </div>
      </section>

      {/* Mid-article CTA */}
      <section className="py-16 md:py-20 bg-[#F5F8FB] border-b border-[var(--color-border-hairline)]">
        <div className="max-w-[700px] mx-auto px-6 md:px-12 flex flex-col items-center gap-6 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[var(--color-text-main)]">
            Benötigen Sie ein konkretes Angebot für Ihr Event?
          </h2>
          <p className="text-[17px] text-[var(--color-text-muted)] font-normal">
            Erzählen Sie mir von Ihrem Event — Datum, Ort und gewünschte Ergebnisse. Ich sende Ihnen ein klares, auf Ihr Projekt zugeschnittenes Angebot.
          </p>
          <Link
            href="/de/kontakt"
            className="bg-[var(--color-accent)] text-white px-8 py-3.5 rounded-2xl text-[15px] font-semibold transition-colors hover:bg-[var(--color-accent-hover)]"
          >
            Kontakt aufnehmen
          </Link>
        </div>
      </section>

      {/* In-body image — Hamburg venue */}
      <section className="py-10 md:py-14">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="relative aspect-[16/9] rounded-[20px] overflow-hidden bg-[var(--color-border-hairline)] border border-gray-100 shadow-sm">
            <Image
              src="/images/insights/event-photographer-hamburg-venue-guests.webp"
              alt="Gäste eines Corporate Events in einer Hamburger Location, fotografiert von Liza Holiarchuk"
              fill
              className="object-cover"
              sizes="(max-width: 1248px) 100vw, 1200px"
            />
          </div>
        </div>
      </section>

      {/* The actual question worth asking */}
      <section className="py-16 md:py-24 border-b border-[var(--color-border-hairline)]">
        <div className="max-w-[900px] mx-auto px-6 md:px-12 flex flex-col gap-8">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[var(--color-text-main)]">
            Die eigentliche Frage, die es sich zu stellen lohnt
          </h2>
          <div className="flex flex-col gap-6 text-[17px] text-[var(--color-text-muted)] leading-[1.85]">
            <p>
              Die meisten Kunden legen den Fokus zunächst auf den Preis pro Stunde und die Anzahl 
              der gelieferten Fotos. Beides ist der falsche Ansatzpunkt.
            </p>
            <p>
              Die Bilder Ihres Events werden genutzt — auf Ihrer Website, in einer Pressemitteilung, 
              auf LinkedIn, in der Einladung für das nächste Jahr — oder sie werden gar nicht genutzt. 
              Dieses Ergebnis wird größtenteils entschieden, bevor der Fotograf überhaupt eintrifft: 
              dadurch, wen Sie buchen, welches Briefing Sie geben und ob er versteht, wofür die 
              Bilder eigentlich gedacht sind.
            </p>
            <p>
              Ein Fotograf, der nach Ihrem Event-Ablaufplan fragt und vorab Ihre Hauptredner recherchiert, 
              ist nicht anstrengend. Er stellt sicher, dass die richtigen Momente in einem Raum 
              ohne zweite Chance nicht verpasst werden. Ein Fotograf, der 40 kuratierte, brauchbare 
              Bilder liefert anstelle von 300 mittelmäßigen, gibt Ihnen nicht weniger. Er gibt 
              Ihnen mehr von dem, was Sie tatsächlich veröffentlichen werden.
            </p>
            <p>
              Der Preis ist eine Variable. Er ist wichtig. Aber die Frage, die zu besseren 
              Ergebnissen führt, ist einfacher: <em className="text-[var(--color-text-main)] font-medium">Sehen die Bilder dieses Fotografen 
              nach etwas aus, neben dem mein Unternehmen stolz seinen Namen platzieren würde?</em>
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/de/portfolio"
              className="bg-[var(--color-accent)] text-white px-8 py-3.5 rounded-2xl text-[15px] font-semibold transition-colors hover:bg-[var(--color-accent-hover)]"
            >
              Portfolio ansehen
            </Link>
            <Link
              href="/de/kontakt"
              className="border border-[var(--color-border-hairline)] text-[var(--color-text-main)] px-8 py-3.5 rounded-2xl text-[15px] font-semibold transition-colors hover:border-[var(--color-text-main)]"
            >
              Angebot anfordern
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ — using FaqAccordion component */}
      <section className="py-16 md:py-24 border-b border-[var(--color-border-hairline)]">
        <div className="max-w-[900px] mx-auto px-6 md:px-12 flex flex-col gap-10">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[var(--color-text-main)]">
            Häufig gestellte Fragen (FAQ)
          </h2>
          <FaqAccordion items={FAQ_ITEMS} />
        </div>
      </section>

      {/* Also worth reading */}
      <section className="py-16 md:py-24 border-b border-[var(--color-border-hairline)]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col gap-10">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[var(--color-text-main)]">
            Auch lesenswert
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedPosts.map((p) =>
              p ? (
                <Link
                  key={p.slug}
                  href={`/de/insights/${p.slug}`}
                  className="group flex flex-col gap-3 border border-[var(--color-border-hairline)] rounded-[20px] overflow-hidden hover:border-[var(--color-text-muted)] transition-colors"
                >
                  {p.coverImage && (
                    <div className="relative aspect-[16/9] overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={p.coverImage}
                        alt={p.title}
                        className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <div className="px-5 pb-5 flex flex-col gap-1">
                    <span className="text-[11px] font-semibold uppercase tracking-widest text-[var(--color-text-muted)]">
                      {p.category}
                    </span>
                    <h3 className="text-base font-semibold text-[var(--color-text-main)] group-hover:underline underline-offset-2 leading-snug">
                      {p.title}
                    </h3>
                  </div>
                </Link>
              ) : null
            )}
          </div>
        </div>
      </section>

      {/* Explore Related */}
      <section className="py-16 md:py-24 border-b border-[var(--color-border-hairline)]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col gap-8">
          <h2 className="text-2xl font-semibold text-[var(--color-text-main)]">Meine Leistungen entdecken</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { href: "/de/pricing", label: "Preise" },
              { href: "/de/eventfotograf-hamburg", label: "Eventfotografie Hamburg" },
              { href: "/de/konferenzfotografie-hamburg", label: "Konferenzfotografie" },
              { href: "/de/messefotografie-hamburg", label: "Messefotografie" },
            ].map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="border border-[var(--color-border-hairline)] rounded-xl px-5 py-4 text-[15px] font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text-main)] hover:border-[var(--color-text-main)] transition-colors"
              >
                {s.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Author */}
      <section className="py-16 md:py-20 border-b border-[var(--color-border-hairline)]">
        <div className="max-w-[900px] mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-8 items-center">
          <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden shrink-0 border border-[var(--color-border-hairline)] shadow-sm">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/home/10-about/01-about.webp"
              alt="Liza Holiarchuk — Eventfotografin Hamburg"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-2 text-center md:text-left">
            <p className="text-lg font-semibold text-[var(--color-text-main)]">Liza Holiarchuk</p>
            <p className="text-[15px] text-[var(--color-text-muted)] leading-relaxed max-w-[55ch]">
              Freiberufliche Fotografin mit Sitz in Hamburg, spezialisiert auf Corporate Eventfotografie, Business-Porträts und Konferenzdokumentation. Über 5 Jahre Erfahrung in der Zusammenarbeit mit Unternehmen, Agenturen und Veranstaltern in Hamburg, Deutschland und Europa.
            </p>
            <div className="flex flex-wrap gap-4 mt-1 justify-center md:justify-start">
              <Link href="/de/ueber-mich" className="text-[14px] text-[var(--color-text-main)] font-medium underline underline-offset-4 decoration-1 hover:text-[var(--color-accent)]">
                Über mich
              </Link>
              <Link href="/de/kontakt" className="text-[14px] text-[var(--color-text-main)] font-medium underline underline-offset-4 decoration-1 hover:text-[var(--color-accent)]">
                Kontakt
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-[#DDE7F0] text-[var(--color-text-main)] flex justify-center text-center">
        <div className="max-w-[700px] w-full px-6 flex flex-col gap-8 items-center">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1]">
            Planen Sie ein Event?
          </h2>
          <p className="text-xl opacity-80 font-light">
            Senden Sie Ihre Anfrage — ich melde mich innerhalb von 24 Stunden.
          </p>
          <Link
            href="/de/kontakt"
            className="bg-[var(--color-text-main)] text-white px-10 py-4 text-base font-semibold transition-colors hover:bg-[var(--color-accent-hover)] rounded-2xl"
          >
            Kontakt aufnehmen
          </Link>
        </div>
      </section>
    </>
  );
}
