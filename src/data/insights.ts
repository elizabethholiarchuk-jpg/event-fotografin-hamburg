export interface InsightsPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  coverImage?: string;
  content?: string; // placeholder for future MDX/content
}

export const insightsPosts: InsightsPost[] = [
  {
    slug: "how-much-does-an-event-photographer-cost-hamburg",
    title: "Event Photographer in Hamburg: What Does It Actually Cost?",
    excerpt:
      "Event photography in Hamburg costs €450–€2,050+ depending on scope. Here's what's behind the price — and what to look for before you book.",
    category: "Pricing & Booking",
    date: "June 2026",
    coverImage: "/images/insights/event-photographer-hamburg-conference-speaker-audience.webp",
  },
  {
    slug: "how-to-brief-your-event-photographer-conference-hamburg",
    title: "How to Brief Your Event Photographer for a Conference in Hamburg",
    excerpt:
      "A practical guide for marketing and event managers: what information to provide, how to structure a photography briefing, and what to prepare on-site.",
    category: "Conference Photography",
    date: "May 2025",
    coverImage: "/images/portfolio/wise-conference-geneva-2024/01.webp",
  },
  {
    slug: "trade-show-photography-hamburg-messe-b2b-marketing",
    title: "Trade Show Photography at Hamburg Messe: What to Capture for B2B Marketing",
    excerpt:
      "Booth coverage, visitor interaction, live demos, branding shots — a complete breakdown of what event photography at a trade fair should include.",
    category: "Trade Show Photography",
    date: "April 2025",
    coverImage: "/images/portfolio/lloyds-register-smm-hamburg-2024/01.webp",
  },
  {
    slug: "same-day-event-photo-delivery-when-it-matters",
    title: "Same-Day Event Photo Delivery: When It Matters and How It Works",
    excerpt:
      "Why same-day highlights are becoming a standard for conferences and trade shows — and how the workflow actually looks from briefing to inbox.",
    category: "Tips & Workflow",
    date: "March 2025",
    coverImage: "/images/portfolio/plug-and-play-tech-center/01.webp",
  },
];
