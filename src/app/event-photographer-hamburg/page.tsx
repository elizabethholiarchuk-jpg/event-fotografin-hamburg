import { Metadata } from "next";
import ServicePage from "@/components/ServicePage";
import { buildServicePageJsonLd, buildFaqPageJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Event Photographer Hamburg",
  description:
    "Professional event photographer based in Hamburg. Covering conferences, trade shows, and corporate events across Hamburg and Europe. Fast delivery, consistent quality.",
  alternates: {
    canonical: "/event-photographer-hamburg",
    languages: {
      en: "/event-photographer-hamburg",
      de: "/de/eventfotograf-hamburg",
      "x-default": "/event-photographer-hamburg",
    },
  },
  openGraph: {
    title: "Event Photographer Hamburg | Liza Holiarchuk",
    description: "Professional event photography in Hamburg & Europe-wide.",
    url: "/event-photographer-hamburg",
    images: [
      {
        url: "/images/services/event-photographer-hamburg-cover.webp",
        width: 1200,
        height: 630,
        alt: "Event photographer Hamburg — panel discussion at a B2B conference in Hamburg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: [
      {
        url: "/images/services/event-photographer-hamburg-cover.webp",
        width: 1200,
        height: 630,
        alt: "Event photographer Hamburg — panel discussion at a B2B conference in Hamburg",
      },
    ],
  },
};

const FAQ = [
  { q: "How far in advance should I book?", a: "Ideally 4–8 weeks before your event. For large conferences I recommend booking even earlier. For last-minute requests, feel free to reach out — I'll do my best." },
  { q: "Do you work outside Hamburg?", a: "Yes. I regularly shoot events in Berlin, Hanover, Düsseldorf, Frankfurt, Munich, Amsterdam, Milan, Copenhagen and other European cities. Travel costs are quoted separately." },
  { q: "What equipment do you use?", a: "Professional full-frame mirrorless cameras with a range of fast lenses suited to conference halls, exhibition floors, and evening events." },
  { q: "How do I receive the final images?", a: "Via a private online gallery (Picdrop or similar) — shareable internally and with your event guests. Optionally password-protected." },
  { q: "Can I book you for a multi-day event?", a: "Absolutely. Multi-day packages are available for trade shows, congresses, and corporate events running 2–5 days. Pricing is agreed per project." },
  { q: "Do you provide raw files?", a: "Raw files are not included as standard. The fully edited JPEG/TIFF gallery is the deliverable. Raw files can be discussed for specific use cases." },
  { q: "What if I need a second photographer?", a: "A second photographer can be arranged for larger events with parallel stages or tracks. Just mention this in your inquiry." },
  { q: "How is billing handled?", a: "A project-based invoice is issued after confirmation. Payment terms are agreed in advance." },
];

export default function EventPhotographerHamburg() {
  return (
    <ServicePage
      hero={{
        h1: "Event Photographer Hamburg",
        subtitle:
          "B2B conferences, trade shows and corporate events — documented with precision. Based in Hamburg, available Europe-wide.",
      }}
      heroImage={{
        src: "/images/services/event-photographer-hamburg-cover.webp",
        alt: "Event photographer Hamburg — panel discussion at a B2B conference in Hamburg",
      }}
      intro="I'm Liza Holiarchuk, a professional event photographer based in Hamburg. I specialise in B2B event photography for conferences, trade fairs, and corporate events — from single-day panels to large-scale multi-day expos. My work is trusted by marketing teams, PR managers, and event agencies across Germany and Europe who need high-quality, brand-consistent imagery delivered fast. Whether your event is at Hamburg Messe, a conference centre in Berlin, or a venue in Amsterdam or Milan — I travel where your events take place."
      whatYouGet={[
        "Full-day or half-day shooting packages",
        "Keynote, panel, and speaker portraits",
        "Audience, networking and booth coverage",
        "Same-day highlight delivery (on request)",
        "Fully edited gallery within 2 business days",
        "Private online gallery (optionally password-protected)",
        "Unlimited usage rights for corporate communication",
        "Optional: video add-on, second photographer",
      ]}
      howItWorks={[
        { step: "Inquiry & Briefing", desc: "Tell me your event details — date, location, agenda highlights, must-have shots." },
        { step: "Quote & Confirmation", desc: "You receive a clear quote within 24 hours. Booking is confirmed with a short agreement." },
        { step: "On-site Coverage", desc: "I arrive early, work unobtrusively, and cover every key moment of your event." },
        { step: "Editing & Delivery", desc: "Fully edited photos delivered via private gallery — typically within 48 hours." },
        { step: "Usage & Licensing", desc: "All images include full usage rights for corporate communication, website, and social." },
      ]}
      faq={FAQ}
      testimonial={{
        quote: "Liza has an excellent eye for the right moments. The collaboration was relaxed and the delivery incredibly fast.",
        name: "Maya Wagner",
        role: "Partner Success, Plug and Play Tech Center Hamburg",
      }}
      relatedCategories={["Conference", "Trade Show", "Corporate"]}
      schema={buildServicePageJsonLd('en', {
        serviceType: "Event Photography",
        name: "Event Photographer Hamburg",
        description: "Professional event photographer based in Hamburg. Covering conferences, trade shows, and corporate events across Hamburg and Europe. Fast delivery, consistent quality.",
        path: "/event-photographer-hamburg",
        image: "/images/services/event-photographer-hamburg-cover.webp",
      })}
      faqSchema={buildFaqPageJsonLd(FAQ)}
    />
  );
}
