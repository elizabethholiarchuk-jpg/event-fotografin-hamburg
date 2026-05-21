import { Metadata } from "next";
import ServicePage from "@/components/ServicePage";

export const metadata: Metadata = {
  title: "Conference Photography Hamburg",
  description:
    "Professional conference photographer in Hamburg. Keynotes, panels, networking and speaker portraits — consistently delivered within 48 hours.",
  alternates: { canonical: "/conference-photography-hamburg" },
  openGraph: {
    title: "Conference Photography Hamburg | Liza Holiarchuk",
    description: "Conference photography for B2B events in Hamburg and Europe.",
    url: "/conference-photography-hamburg",
  },
};

export default function ConferencePhotographyHamburg() {
  return (
    <ServicePage
      hero={{
        h1: "Conference Photography Hamburg",
        subtitle:
          "Keynotes, panels, networking and audience — professional conference photography for B2B events in Hamburg and across Europe.",
      }}
      intro="Conferences depend on high-quality photography for PR, post-event communication, and future marketing. I document every layer of your conference: the keynote stage, speaker portraits, breakout sessions, networking breaks, branded spaces, and the audience reactions that tell the full story. Based in Hamburg, I have photographed conferences at venues including Hamburg Messe und Congress, the CCH, and international venues in Milan, Amsterdam, and Copenhagen. My images are delivered with consistent colour grading and ready to use across LinkedIn, press releases, and internal reports."
      whatYouGet={[
        "Stage and keynote photography",
        "Panel and speaker coverage",
        "Audience and reaction shots",
        "Networking and exhibition floor",
        "Branded space and environment details",
        "Speaker portrait session (optional)",
        "Edited gallery delivered within 48h",
        "Same-day highlights available on request",
      ]}
      howItWorks={[
        { step: "Briefing", desc: "Share your agenda, key speakers, must-have shots, and brand guidelines." },
        { step: "Pre-event walkthrough", desc: "I arrive early to assess the room, lighting, and stage layout." },
        { step: "Full coverage", desc: "Opening to closing — I capture every key moment without disrupting the programme." },
        { step: "Editing", desc: "Consistent colour grading applied across all images." },
        { step: "Delivery", desc: "Private gallery ready within 48 business hours, shareable immediately." },
      ]}
      faq={[
        { q: "Can you cover parallel sessions?", a: "Yes. For conferences with parallel tracks or stages, I can arrange a second photographer to ensure nothing is missed." },
        { q: "Do you photograph speakers before or after their presentation?", a: "Speaker portrait sessions can be added as an optional block, either before the conference opens or during a scheduled break." },
        { q: "What do you need from the organiser on-site?", a: "A point of contact, a press or photographer badge, a rough agenda, and 3–5 must-have shots (e.g. opening keynote, specific speakers, networking). The rest I handle." },
        { q: "How do you handle low-light conference halls?", a: "I use fast lenses and professional full-frame sensors optimised for mixed and low-light environments, so stage lighting is never a problem." },
        { q: "Can we get photos for social media the same day?", a: "Yes. A same-day highlights selection (10–20 edited images) can be delivered the same evening for immediate use on LinkedIn or Instagram." },
        { q: "Do you sign NDAs or confidentiality agreements?", a: "Yes, for events with sensitive content I'm happy to sign an NDA before the event." },
        { q: "What size conferences have you photographed?", a: "From 50-person panels to 2,000-delegate congresses. The workflow scales accordingly." },
        { q: "How do I get the photos after the event?", a: "Via a private Picdrop gallery — the link can be shared with your team, speakers, or press." },
      ]}
      testimonial={{
        quote: "Liza professionally accompanied our three-day trade show. Strong detailed shots and perfectly documented presentations. A pleasure to work with her.",
        name: "Maria Kossivaki",
        role: "Event Specialist, Lloyd's Register",
      }}
      relatedCategories={["Conference"]}
      schema={{
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Conference Photography Hamburg",
        provider: {
          "@type": "LocalBusiness",
          name: "Liza Holiarchuk",
          url: "https://www.event-fotografin-hamburg.de",
        },
        areaServed: "Hamburg, Germany, Europe",
        description: "Professional conference photography for B2B events in Hamburg and Europe-wide.",
      }}
    />
  );
}
