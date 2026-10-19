import { KEY_FACTS_TITLE, getKeyFacts } from "@/data/keyFacts";

/** Four key numbers with short labels. Hairlines between items, no box. */
export function KeyFactsStrip({ lang, variant = "default" }: { lang: "de" | "en"; variant?: "default" | "weihnachtsfeier" }) {
  return (
    <div>
      <h2 className="sr-only">{KEY_FACTS_TITLE[lang]}</h2>
      <dl className="grid grid-cols-2 lg:grid-cols-4 gap-y-8 border-t border-[var(--color-border-hairline)] pt-8 md:pt-10">
        {getKeyFacts(lang, variant).map((fact, i) => (
          <div
            key={fact.label}
            className={`flex flex-col-reverse justify-end gap-1.5 pr-4 ${i % 2 === 1 ? "pl-6 border-l border-[var(--color-border-hairline)]" : ""} ${i > 0 ? "lg:pl-8 lg:border-l lg:border-[var(--color-border-hairline)]" : ""}`}
          >
            <dt className="text-[14px] md:text-[15px] text-[var(--color-text-muted)] leading-snug">{fact.label}</dt>
            <dd className="text-[26px] sm:text-3xl md:text-4xl font-semibold tracking-tight text-[var(--color-text-main)] leading-none">{fact.value}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

/** The strip as its own page section (service pages). */
export default function KeyFacts({
  lang,
  variant,
  className = "border-b border-[var(--color-border-hairline)]",
}: {
  lang: "de" | "en";
  variant?: "default" | "weihnachtsfeier";
  className?: string;
}) {
  return (
    <section className={`py-12 md:py-16 ${className}`}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-12">
        <KeyFactsStrip lang={lang} variant={variant} />
      </div>
    </section>
  );
}
