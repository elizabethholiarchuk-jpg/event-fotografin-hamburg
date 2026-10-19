// Photo package prices (net, minimum "ab" / "from" price in EUR).
// Used on /preise, /en/pricing (cards + Offer JSON-LD) and in the pricing article.
// Edit the numbers only here.

export const PACKAGE_PRICES = {
  halfDay: 1200,  // Halbtag / Half Day, up to 4 h
  extended: 1600, // Erweitert / Extended, up to 6 h
  fullDay: 1800,  // Ganztag / Full Day, up to 8 h
} as const;

/** "ab 1.200 €" (de) / "from €1,200" (en) */
export function formatFromPrice(lang: "de" | "en", price: number): string {
  return lang === "de"
    ? `ab ${price.toLocaleString("de-DE")} €`
    : `from €${price.toLocaleString("en-US")}`;
}
