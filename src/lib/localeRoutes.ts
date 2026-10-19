// German ↔ English page addresses. German pages live at the root, English ones under /en.
// Used by the language switcher (Header) and the language-cookie redirect (middleware),
// so both always send people to a page that exists.

/** EN slug → DE slug (first path segment) */
export const ROUTE_MAP: Record<string, string> = {
  "event-photographer-hamburg": "eventfotograf-hamburg",
  "conference-photographer-hamburg": "konferenzfotografie-hamburg",
  "trade-show-photographer-hamburg": "messefotograf-hamburg",
  "corporate-event-photographer-hamburg": "corporate-event-fotograf-hamburg",
  "christmas-party-photographer-hamburg": "weihnachtsfeier-fotograf-hamburg",
  "about": "ueber-mich",
  "pricing": "preise",
  "contact": "kontakt",
  "portfolio": "portfolio",
  "insights": "insights",
  "impressum": "impressum",
  "datenschutz": "datenschutz",
  "danke": "danke",
  "video-support": "video-support",
};

const REVERSE_ROUTE_MAP: Record<string, string> = Object.fromEntries(
  Object.entries(ROUTE_MAP).map(([en, de]) => [de, en]),
);

/** "/messefotograf-hamburg" → "/en/trade-show-photographer-hamburg" */
export function toEnglishPath(dePath: string): string {
  const [first = "", ...rest] = dePath.split("/").filter(Boolean);
  const segments = [REVERSE_ROUTE_MAP[first] ?? first, ...rest].filter(Boolean);
  return segments.length ? `/en/${segments.join("/")}` : "/en";
}

/** "/en/trade-show-photographer-hamburg" → "/messefotograf-hamburg" */
export function toGermanPath(enPath: string): string {
  const [, first = "", ...rest] = enPath.split("/").filter(Boolean);
  const segments = [ROUTE_MAP[first] ?? first, ...rest].filter(Boolean);
  return `/${segments.join("/")}`;
}
