import { Dictionary } from "./de";

export const en: Dictionary = {
  header: {
    home: "Home",
    portfolio: "Portfolio",
    contact: "Contact",
    checkAvailability: "Check Availability",
  },
  home: {
    meta: {
      title: "Event Photographer Hamburg",
      description: "Professional event photographer in Hamburg for conference photography, trade shows & corporate events. Fast delivery & consistent visual style."
    },
    hero: {
      title: "Event Photographer Hamburg",
      subtitle: "Photography for B2B Conferences & Corporate Events<br />Hamburg & Europe-wide",
      ctaPrimary: "Check Availability",
      ctaSecondary: "View Portfolio"
    },
    trust: {
      title: "Trusted by teams at"
    },
    useCases: {
      marketing: { title: "Marketing & Social", desc: "Visuals for your website, campaigns, LinkedIn and employer branding — brand-consistent and ready to use." },
      presse: { title: "PR & Documentation", desc: "Keynotes, panels, audience, networking, branding — comprehensive, professional, PR-ready." },
      intern: { title: "Internal Communication", desc: "Team moments, culture, behind-the-scenes — ideal for intranet, updates, recaps and stakeholder communication." }
    },
    portfolioPreview: {
      title: "Portfolio Highlights",
      desc: "Conferences, trade shows & corporate events — authentic and detail-oriented.",
      viewAll: "View full portfolio"
    },
    services: {
      title: "Services",
      konferenz: { title: "Conference Photography", desc: "Panels, keynotes, speaker portraits, backstage, audience, networking." },
      messe: { title: "Trade Show Photography", desc: "Booth, visitor interactions, branding, team, product and detail shots." },
      corporate: { title: "Corporate Events", desc: "Awards, executive gatherings, internal events, get-togethers, evening events." },
      video: { title: "Video Shooting", desc: "Documentary or social-first as an ideal add-on for any event." }
    },
    outcomes: {
      title: "Your Outcome",
      delivery: { title: "Fast Delivery", desc: "Same-day highlights; fully edited usually within 2 business days." },
      consistent: { title: "Consistent Visual Style", desc: "Photos that match your brand, PR, and social — no 'lucky shots'." },
      gallery: { title: "Private Online Gallery", desc: "Easily shareable via a private, optionally password-protected gallery." }
    },
    packages: {
      title: "Packages & Add-ons",
      full: { title: "Full Day (8h)", items: ["Ideal for conferences, trade shows, large corporate events.", "Complete story: Setup → Program → People → Closing.", "Optional: Team portraits + additional blocks."] },
      half: { title: "Half Day (4h)", items: ["Compact conferences, panels & networking formats.", "Focus: Key moments, branding, networking, speaker + audience."] },
      addons: { title: "Add-ons", items: ["Video shooting", "Same-day highlights", "On-site business portraits", "Multi-day events"] },
      cta: "Request a quote"
    },
    testimonials: {
      title: "Testimonials",
      items: [
        { img: "01.webp", content: "Liza has an excellent eye for the right moments. The collaboration was relaxed and the delivery incredibly fast.", name: "Maya Wagner", role: "Partner Success | Plug and Play Tech Center Hamburg" },
        { img: "02.webp", content: "Very reliable and exceeded our expectations. The post-processing is strong — we would book Liza again anytime.", name: "Mia Lohmeier", role: "HR & Partnership Manager | flair" },
        { img: "03.webp", content: "Liza professionally accompanied our three-day trade show. Strong detailed shots and perfectly documented presentations. A pleasure to work with her.", name: "Maria Kossivaki", role: "Event Specialist | Lloyd's Register" },
        { img: "04.webp", content: "The reactions to the photos were overwhelmingly positive. The pictures look simply fantastic and capture the atmosphere perfectly.", name: "Marcia Fahrenheim", role: "Director | Factory Hammerbrooklyn" }
      ]
    },
    about: {
      title: "Liza Holiarchuk",
      p1: "I am an event and business photographer based in Hamburg and an official photographer at Hamburg Messe und Congress GmbH. I document events as they truly are: stage, audience, networking, and the details that later make the difference for PR, social media, and internal communication.",
      p2: "Besides Hamburg, I accompany conferences and corporate events throughout Europe (e.g., Milan, Amsterdam, Copenhagen). On-site, I work calmly, discreetly, and structured. Delivery is seamless via a private, optionally password-protected online gallery."
    },
    faq: {
      title: "FAQ",
      items: [
        { q: "How does the booking process work?", a: "Inquiry → short briefing → quote & confirmation → event → delivery." },
        { q: "What do you need from us to ensure everything runs smoothly on-site?", a: "Rough timeline/agenda, 1 contact person, access/badge, 3–5 must-haves (e.g. speakers/VIPs/branding/team photos)." },
        { q: "When do we get the photos?", a: "Usually in 2 business days; same-day highlights upon request (curated selection for quick communication)." },
        { q: "How do we receive the pictures and how can we share them?", a: "Via a private online gallery; link can be shared internally + with guests; optionally password-protected." },
        { q: "What usage rights are included?", a: "Usage rights for corporate communication (website, social, PR) included; details depending on use case." },
        { q: "Can you cover parallel tracks/stages?", a: "Yes, for larger events in parallel: second shooter possible." },
        { q: "Do you also work outside of Hamburg?", a: "Hamburg + surroundings as well as Germany-wide/Europe-wide by arrangement." }
      ]
    },
    finalCta: {
      title: "Check availability &\nGet a quote",
      btn: "To Contact Form"
    }
  },
  portfolio: {
    meta: {
      title: "Portfolio — Event Photography Hamburg",
      description: "Selected B2B event, conference and trade-show photography in Hamburg — real client case studies with brief, coverage and delivery for each."
    },
    title: "Portfolio",
    subtitle: "Conferences, Trade Shows & Corporate Events — Europe-wide.",
    replyTime: "I usually get back to you within 24 hours."
  },
  kontakt: {
    meta: {
      title: "Contact",
      description: "Get in touch to check availability and request a quote for your conference, trade show or corporate event. I'll reply within 24 hours."
    },
    title: "Let's talk about your event",
    subtitle: "Send your inquiry — I'll confirm availability and next steps.",
    directContact: "Direct Contact",
    nextSteps: "Next steps",
    steps: ["Response within 24 hours", "Availability confirmation + short quote", "Optional: 15-minute coordination call"],
    form: {
      name: "Name",
      email: "Email",
      company: "Company",
      date: "Event Date",
      eventType: "Event Type",
      eventTypePlaceholder: "Please choose",
      eventTypeOptions: { conference: "Conference", tradeShow: "Trade Show", corporate: "Corporate Event", other: "Other Format" },
      location: "Location",
      locationPlaceholder: "e.g. Hamburg",
      duration: "Duration",
      durationPlaceholder: "Please choose",
      durationOptions: { short: "Short (~2h)", half: "Half Day (~4h)", full: "Full Day (~8h)", multi: "Multiple Days" },
      budget: "Budget range",
      budgetPlaceholder: "e.g. 1.500 €",
      message: "Message / Event Details",
      messagePlaceholder: "More details about your event...",
      privacyNote: "Your data will be processed securely according to our privacy policy.",
      submit: "Send Request",
      sending: "Sending..."
    }
  },
  danke: {
    meta: { title: "Thank You" },
    title: "Thank you for your request!",
    subtitle: "I will get back to you shortly.",
    messageSent: "Your message has been successfully sent. I will usually get back to you within 24 hours to discuss the details.",
    back: "Back to Homepage",
    toPortfolio: "To Portfolio"
  },
  footer: {
    rights: "All rights reserved.",
    impressum: "Legal Notice",
    datenschutz: "Privacy Policy",
    cookieSettings: "Cookie Settings",
    tagline: "B2B Event Photography — Conferences, Trade Shows, Corporate Events. Hamburg & Europe-wide.",
    contactHeading: "Contact"
  },
  cookieBanner: {
    title: "Cookie Settings",
    desc: "We use cookies to optimize our website for you and to collect anonymous statistics.",
    necessary: "Necessary",
    necessaryDesc: "These cookies are required for the basic functionality of the website.",
    analytics: "Statistics",
    analyticsDesc: "We use Microsoft Clarity to anonymously understand how our website is used.",
    acceptAll: "Accept All",
    acceptSelected: "Save Selection"
  },
  notfound: {
    title: "Page Not Found",
    desc: "The page you are looking for does not exist or has been moved.",
    back: "Back to Homepage"
  }
};
