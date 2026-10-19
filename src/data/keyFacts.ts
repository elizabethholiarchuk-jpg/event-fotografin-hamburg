// Key facts strip: four numbers with short labels (home page "About" block,
// service pages, Weihnachtsfeier). Facts that are already said elsewhere on the
// page (Hamburg, focus, same-day photos) are not repeated here.
// Prices come from pricing.ts, the same source as /preise — never type them here.

import { PACKAGE_PRICES, formatFromPrice } from "./pricing";

type Lang = "de" | "en";

export interface KeyFact {
  value: string;
  label: string;
}

export const KEY_FACTS_TITLE: Record<Lang, string> = {
  de: "Kurz in Zahlen",
  en: "In numbers",
};

const nbsp = (text: string) => text.replace(/ /g, " ");

export function getKeyFacts(lang: Lang, variant: "default" | "weihnachtsfeier" = "default"): KeyFact[] {
  const price = nbsp(formatFromPrice(lang, PACKAGE_PRICES.halfDay));
  return lang === "de"
    ? [
        { value: "5+", label: "Jahre Eventfotografie" },
        { value: "48 h", label: "bis zur kompletten Galerie" },
        { value: "8", label: "Partnerstädte in Europa" },
        { value: price, label: variant === "weihnachtsfeier" ? "bis 4 Std." : "Halbtag, bis 4 Std." },
      ]
    : [
        { value: "5+", label: "years in event photography" },
        { value: "48 h", label: "to the full gallery" },
        { value: "8", label: "partner cities in Europe" },
        { value: price, label: variant === "weihnachtsfeier" ? "up to 4 h" : "half day, up to 4 h" },
      ];
}
