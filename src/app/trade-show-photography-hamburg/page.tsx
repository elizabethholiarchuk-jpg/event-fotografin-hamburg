import { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Trade Show Photography Hamburg",
  description:
    "Trade show photographer in Hamburg. Booth coverage, visitor interactions, product shots and branding — for SMM, AGRITECHNICA, Aquatech and more.",
  alternates: { canonical: "/trade-show-photography-hamburg" },
  openGraph: {
    title: "Trade Show Photography Hamburg | Liza Holiarchuk",
    description: "Trade show and expo photography across Hamburg and Europe.",
    url: "/trade-show-photography-hamburg",
  },
};

export default function TradeShowPhotographyHamburg() {
  return (
    <ServicePage
      hero={{
        h1: "Trade Show & Expo Photography Hamburg",
        subtitle:
          "Booth coverage, visitor interactions, product detail shots and team photography — for trade fairs and expos at Hamburg Messe and across Europe.",
      }}
      intro="Trade shows are high-investment events. The photography must capture your booth's atmosphere, your team's professionalism, and the quality of your products — all while working fast in a busy hall environment. I have photographed exhibitors at SMM (Hamburg), AGRITECHNICA (Hanover), Aquatech (Amsterdam), and other international trade fairs, covering everything from booth setup to live demos and client conversations. Images are delivered quickly so you can update your social media while the fair is still running."
      whatYouGet={[
        "Booth and stand photography",
        "Visitor interaction and live demo coverage",
        "Product and detail shots",
        "Team portraits on the stand",
        "Branding and signage documentation",
        "Networking and aisle coverage",
        "Same-day highlights for social media",
        "Full gallery within 48 hours",
      ]}
      howItWorks={[
        { step: "Pre-fair briefing", desc: "Share your stand layout, key products, team members to photograph, and priority moments." },
        { step: "Arrival & setup", desc: "I arrive at opening time (or during setup) to capture the stand before the crowds arrive." },
        { step: "Full day coverage", desc: "Booth action, visitor interactions, demos, and key team moments throughout the day." },
        { step: "Same-day selects", desc: "A curated set of 10–20 images delivered the same evening for immediate social use." },
        { step: "Full delivery", desc: "Edited full gallery delivered via private link within 48 business hours." },
      ]}
      faq={[
        { q: "Can you cover multiple days at a trade show?", a: "Yes. Multi-day coverage is available and can cover the full duration of your exhibition." },
        { q: "What if my booth is in a dark or crowded hall?", a: "Trade show halls are my specialty. I use professional equipment optimised for mixed lighting, crowds, and dynamic environments." },
        { q: "Can I get photos the same day for LinkedIn?", a: "Yes. A same-day selects delivery is available — typically 10–20 edited images sent by end of day." },
        { q: "Do you work at Hamburg Messe?", a: "Yes. Hamburg Messe und Congress is one of my primary venues. I'm familiar with its halls, logistics, and photography access requirements." },
        { q: "Can you also photograph presentations or talks on the stand?", a: "Absolutely. Stand presentations, product launches, and live demos are all covered as part of the package." },
        { q: "We have stands at two different fairs in the same year — can you cover both?", a: "Yes. Annual retainer or multi-event agreements are available for brands attending multiple trade fairs." },
        { q: "Do you photograph at international trade fairs outside Germany?", a: "Yes — Amsterdam, Milan, Copenhagen, and other European cities. Travel is quoted separately." },
        { q: "What usage rights are included?", a: "Full usage rights for all corporate communication: website, social media, press, and sales materials." },
      ]}
      testimonial={{
        quote: "Liza professionally accompanied our three-day trade show. Strong detailed shots and perfectly documented presentations. A pleasure to work with her.",
        name: "Maria Kossivaki",
        role: "Event Specialist, Lloyd's Register",
      }}
      relatedCategories={["Trade Show"]}
      schema={{
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Trade Show \u0026 Expo Photography Hamburg",
        provider: {
          "@type": "LocalBusiness",
          name: "Liza Holiarchuk",
          url: "https://www.event-fotografin-hamburg.de",
        },
        areaServed: "Hamburg, Germany, Europe",
        description: "Trade show and expo photography for exhibitors at Hamburg Messe and across Europe.",
      }}
      faqSchema={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Can I get trade show photos the same day for LinkedIn?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. A same-day selects delivery is available \u2014 typically 10\u201320 edited images sent by end of day.",
            },
          },
          {
            "@type": "Question",
            name: "Do you work at Hamburg Messe?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Hamburg Messe und Congress is one of the primary venues. I am familiar with its halls, logistics, and photography access requirements.",
            },
          },
          {
            "@type": "Question",
            name: "Can you cover multiple days at a trade show?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Multi-day coverage is available and can cover the full duration of the exhibition.",
            },
          },
          {
            "@type": "Question",
            name: "Do you photograph at international trade fairs outside Germany?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes \u2014 Amsterdam, Milan, Copenhagen, and other European cities. Travel is quoted separately.",
            },
          },
        ],
      }}
    />
  );
}
