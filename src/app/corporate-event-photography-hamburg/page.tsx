import { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Corporate Event Photography Hamburg",
  description:
    "Corporate event photographer in Hamburg for awards evenings, internal events, company anniversaries, product launches and executive gatherings.",
  alternates: { canonical: "/corporate-event-photography-hamburg" },
  openGraph: {
    title: "Corporate Event Photography Hamburg | Liza Holiarchuk",
    description: "Corporate event photography in Hamburg and across Europe.",
    url: "/corporate-event-photography-hamburg",
  },
};

export default function CorporateEventPhotographyHamburg() {
  return (
    <ServicePage
      hero={{
        h1: "Corporate Event Photography Hamburg",
        subtitle:
          "Awards nights, internal events, company anniversaries and executive gatherings — photographed with discretion and delivered fast.",
      }}
      intro="Corporate events require a photographer who understands both the brand and the moment. I work calmly and discreetly in any corporate setting — whether it's an awards gala in a Hamburg hotel, an annual all-hands at a converted warehouse, or a C-suite dinner at a private venue. My images are tailored to corporate communication: clean, professional, and on-brand. I have photographed events for companies including Plug and Play Tech Center, Lloyd's Register, Shell, and Oyster Bay Venture Capital, across Hamburg and Europe."
      whatYouGet={[
        "Awards and gala ceremony coverage",
        "Executive and leadership portraits",
        "Stage and presentation documentation",
        "Team and group shots",
        "Venue and atmosphere details",
        "Networking and social moments",
        "Private online gallery within 48h",
        "Brand-consistent editing across all images",
      ]}
      howItWorks={[
        { step: "Pre-event call", desc: "We align on the event programme, key moments, and brand style expectations." },
        { step: "On-site arrival", desc: "I arrive early to scout the venue and prepare for the light conditions." },
        { step: "Event coverage", desc: "Discreet, professional coverage throughout — nothing missed, no disruption." },
        { step: "Editing", desc: "Brand-consistent tone and grading applied across all delivered images." },
        { step: "Delivery", desc: "Private gallery shared within 48 hours. Shareable with HR, PR, and stakeholders." },
      ]}
      faq={[
        { q: "Can you photograph at private or members-only venues?", a: "Yes. I'm experienced in working at private venues, hotels, and restricted-access corporate locations. I sign NDAs as required." },
        { q: "Do you photograph awards ceremonies?", a: "Yes. Awards evenings are a specialty — stage coverage, trophy moments, table shots, and the networking before and after." },
        { q: "Can we use the photos for LinkedIn company pages and internal communications?", a: "Yes. All images include full usage rights for internal and external corporate communication." },
        { q: "What about evening events with low light?", a: "Fully covered. I use fast professional lenses and optimise for venue lighting — whether it's a bright conference room or a candlelit awards dinner." },
        { q: "Can you produce a highlight reel in addition to photos?", a: "Video can be added as an optional service — a short highlight reel (60–90 seconds) suitable for internal sharing or social media." },
        { q: "What is your cancellation policy?", a: "Cancellation terms are agreed in the booking confirmation. For most events, cancellation within 7 days of the event date may incur a partial fee." },
        { q: "Do you handle multi-location events (e.g., morning Hamburg, evening Berlin)?", a: "For single-day multi-location events, logistics need to be viable. This is always assessed case by case. Let me know your requirements." },
        { q: "Can I see examples of corporate event work?", a: "Yes — view the portfolio for case studies from Plug and Play, Oyster Bay Venture Capital, IMMOJECTS, Shell, and others." },
      ]}
      testimonial={{
        quote: "The reactions to the photos were overwhelmingly positive. The pictures look simply fantastic and capture the atmosphere perfectly.",
        name: "Marcia Fahrenheim",
        role: "Director, Factory Hammerbrooklyn",
      }}
      relatedCategories={["Corporate"]}
      schema={{
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Corporate Event Photography Hamburg",
        provider: {
          "@type": "LocalBusiness",
          name: "Liza Holiarchuk",
          url: "https://www.event-fotografin-hamburg.de",
        },
        areaServed: "Hamburg, Germany, Europe",
        description: "Corporate event photography for awards evenings, internal events and executive gatherings in Hamburg and Europe.",
      }}
      faqSchema={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Can you photograph at private or members-only venues?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. I am experienced in working at private venues, hotels, and restricted-access corporate locations, and sign NDAs as required.",
            },
          },
          {
            "@type": "Question",
            name: "Do you photograph awards ceremonies?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Awards evenings are a specialty \u2014 stage coverage, trophy moments, table shots, and the networking before and after.",
            },
          },
          {
            "@type": "Question",
            name: "Can we use the photos for LinkedIn and internal communications?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. All images include full usage rights for internal and external corporate communication.",
            },
          },
        ],
      }}
    />
  );
}
