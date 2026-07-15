export interface InsightsPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  /** ISO 8601 date, e.g. "2026-06-03" */
  datePublished: string;
  /** ISO 8601 date — set to datePublished when first created */
  dateModified: string;
  coverImage?: string;
  content?: string; // placeholder for future MDX/content
  isPlaceholder?: boolean; // TODO: remove once real content ships
}

export const insightsPosts: InsightsPost[] = [
  {
    slug: "how-much-does-an-event-photographer-cost-hamburg",
    title: "Event Photographer in Hamburg: What Does It Actually Cost?",
    excerpt:
      "Event photography in Hamburg costs €450–€2,050+ depending on scope. Here's what's behind the price — and what to look for before you book.",
    category: "Pricing & Booking",
    date: "June 2026",
    datePublished: "2026-06-03",
    dateModified: "2026-06-03",
    coverImage: "/images/insights/event-photographer-hamburg-conference-speaker-audience.webp",
  },
  {
    slug: "how-to-brief-your-event-photographer-conference-hamburg",
    title: "How to Brief Your Event Photographer for a Conference in Hamburg",
    excerpt:
      "A practical guide for marketing and event managers: what information to provide, how to structure a photography briefing, and what to prepare on-site.",
    category: "Conference Photography",
    date: "May 2025",
    datePublished: "2025-05-12",
    dateModified: "2025-05-12",
    coverImage: "/images/portfolio/wise-conference-geneva-2024/01.webp",
    isPlaceholder: true,
  },
  {
    slug: "trade-show-photography-hamburg-messe-b2b-marketing",
    title: "Trade Show Photography at Hamburg Messe: What to Capture for B2B Marketing",
    excerpt:
      "Booth coverage, visitor interaction, live demos, branding shots — a complete breakdown of what event photography at a trade fair should include.",
    category: "Trade Show Photography",
    date: "April 2025",
    datePublished: "2025-04-07",
    dateModified: "2025-04-07",
    coverImage: "/images/portfolio/lloyds-register-smm-hamburg-2024/01.webp",
    isPlaceholder: true,
  },
  {
    slug: "same-day-event-photo-delivery-when-it-matters",
    title: "Same-Day Event Photo Delivery: When It Matters and How It Works",
    excerpt:
      "Why same-day highlights are becoming a standard for conferences and trade shows — and how the workflow actually looks from briefing to inbox.",
    category: "Tips & Workflow",
    date: "March 2025",
    datePublished: "2025-03-10",
    dateModified: "2025-03-10",
    coverImage: "/images/portfolio/plug-and-play-tech-center/01.webp",
    isPlaceholder: true,
  },
];
