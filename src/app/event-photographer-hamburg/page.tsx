import { Metadata } from "next";
import Link from "next/link";
import SafeImage from "@/components/SafeImage";
import ImageGallery from "@/components/ImageGallery";
import { buildServicePageJsonLd, buildFaqPageJsonLd } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Event Photographer Hamburg – Liza Holiarchuk | Trade Shows & Conferences",
  description:
    "Event photographer in Hamburg for conferences, trade shows, and corporate events. Edited gallery typically in 2 business days, same-day highlights on request. Inquire now.",
  alternates: {
    canonical: "/event-photographer-hamburg",
    languages: {
      en: "/event-photographer-hamburg",
      de: "/de/eventfotograf-hamburg",
      "x-default": "/event-photographer-hamburg",
    },
  },
  openGraph: {
    title: "Event Photographer Hamburg – Liza Holiarchuk | Trade Shows & Conferences",
    description:
      "Event photographer in Hamburg for conferences, trade shows, and corporate events. Edited gallery typically in 2 business days, same-day highlights on request. Inquire now.",
    url: "/event-photographer-hamburg",
    locale: "en_US",
    images: [
      {
        url: "/images/services/event-photographer-hamburg-cover.webp",
        width: 1200,
        height: 630,
        alt: "Event photographer Hamburg — Liza Holiarchuk",
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
        alt: "Event photographer Hamburg — Liza Holiarchuk",
      },
    ],
  },
};

const FAQ = [
  { q: "What does an event photographer in Hamburg cost?", a: "For corporate events in Hamburg, realistic prices are around €450–600 net for 2 hours, €750–1,150 for a half day, and €1,350–2,050 for a full day — always including editing and usage rights. I coordinate the exact price per project. Send me a message with the key details of your event, and you will receive a specific quote." },
  { q: "How does the booking process work?", a: "Inquiry → short briefing → quote & confirmation → event → delivery." },
  { q: "What do you need from us so that everything runs smoothly on site?", a: "A rough schedule or the program, a contact person, access/badge, and 3-5 must-haves (e.g., speakers, VIPs, branding, team photos)." },
  { q: "When will we receive the photos?", a: "Usually within 2 business days; same-day highlights on request (a curated selection for quick communication)." },
  { q: "How do we receive the pictures and how can we share them?", a: "Via a private online gallery; the link is internal and shareable with your guests, password-protected upon request." },
  { q: "What usage rights are included?", a: "Comprehensive usage rights for your corporate communication (website, social media, PR) are included; details depend on the use case." },
  { q: "Can you cover parallel stages or tracks?", a: "Yes. For larger events with parallel program points, a second photographer can be organized." },
  { q: "Do you also work outside of Hamburg?", a: "Yes — Hamburg and the surrounding area, as well as throughout Germany and Europe by arrangement. Travel expenses are calculated separately and transparently." },
];

const serviceJsonLd = buildServicePageJsonLd('en', {
  serviceType: "Event Photography",
  name: "Event Photographer Hamburg",
  description: "Event photographer in Hamburg for conferences, trade shows, and corporate events. Edited gallery typically in 2 business days, same-day highlights on request. Inquire now.",
  path: "/event-photographer-hamburg",
  image: "/images/services/event-photographer-hamburg-cover.webp",
});

const faqJsonLd = buildFaqPageJsonLd(FAQ);

export default function EventPhotographerHamburg() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* 1. HERO */}
      <section className="relative w-full min-h-[92vh] md:min-h-screen flex items-end justify-start bg-[var(--color-dark-bg)] overflow-hidden pb-16 md:pb-24 pt-40 md:pt-48">
        <SafeImage
          src="/images/services/event-photographer-hamburg-cover.webp"
          alt="Event photographer Hamburg — panel discussion at a B2B conference in Hamburg"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="relative z-10 max-w-[1400px] mx-auto w-full px-6 md:px-12 text-white flex flex-col gap-10 md:gap-12">
          <div className="max-w-[1100px] flex flex-col gap-6 md:gap-8">
            <h1 className="text-5xl md:text-7xl lg:text-[100px] font-medium tracking-tight leading-[1]">
              Event Photographer Hamburg
            </h1>
            <p className="text-2xl md:text-4xl font-light leading-snug text-white/95 max-w-[45ch]">
              Photography for B2B conferences, trade shows and corporate events. Hamburg & Europe-wide.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-10 mt-6 w-full sm:w-auto">
            <Link
              href="/contact"
              title="Inquire Event Photographer Hamburg"
              className="bg-white text-[var(--color-dark-bg)] px-12 py-5 text-sm tracking-widest uppercase font-semibold transition-colors hover:bg-gray-200 text-center rounded-2xl w-full sm:w-auto"
            >
              Check Availability
            </Link>
            <Link
              href="/portfolio"
              title="View Event Photography Portfolio"
              className="text-white text-sm tracking-widest uppercase font-semibold transition-all hover:text-white/70 underline-offset-8 decoration-1 underline text-center w-full sm:w-auto"
            >
              View Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* 2. TRUST */}
      <section className="py-14 md:py-20 bg-transparent border-b border-[var(--color-border-hairline)] overflow-hidden">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col gap-8 md:gap-12">
          <p className="text-[var(--color-text-muted)] font-medium text-sm text-center">
            Trusted by teams at
          </p>
          <div className="flex flex-row flex-nowrap overflow-x-auto md:overflow-visible items-center justify-start md:justify-center gap-6 md:gap-12 pb-4 md:pb-0 brightness-0 opacity-60 w-full no-scrollbar">
            {([1, 2, 3, 5, 6, 7, 8] as const).map((num) => {
              const clientLogoAlts: Record<number, string> = {
                1: "Plug and Play Tech Center Hamburg logo",
                2: "flair HR software logo",
                3: "Lloyd's Register logo",
                5: "Shell Global Solutions logo",
                6: "FEMS logo",
                7: "CLAAS logo",
                8: "Factory Hammerbrooklyn logo",
              };
              return (
                <div key={num} className="relative h-8 md:h-10 w-20 md:w-28 shrink-0">
                  <SafeImage
                    src={`/images/home/03-client-logos/0${num}-logo.webp`}
                    alt={clientLogoAlts[num]}
                    fill
                    sizes="(max-width: 768px) 80px, 112px"
                    className="object-contain"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. VALUE BLOCKS */}
      <section className="py-14 md:py-24 bg-transparent">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col gap-12 md:gap-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12">
            <div className="flex flex-col gap-6 group">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[20px] border border-gray-100 shadow-sm">
                <SafeImage src="/images/home/04-value-blocks/02-marketing.webp" alt="Marketing & Social" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.02]" />
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-[var(--color-text-main)]">Marketing & Social</h3>
                <p className="text-[var(--color-text-muted)] text-[17px] font-normal leading-relaxed">Visuals for your website, campaigns, LinkedIn and employer branding — brand-consistent and ready to use.</p>
              </div>
            </div>
            <div className="flex flex-col gap-6 group">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[20px] border border-gray-100 shadow-sm">
                <SafeImage src="/images/home/04-value-blocks/01-presse.webp" alt="Press & Event Documentation" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.02]" />
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-[var(--color-text-main)]">Press & Documentation</h3>
                <p className="text-[var(--color-text-muted)] text-[17px] font-normal leading-relaxed">Keynotes, panels, audience, networking, branding — comprehensive, professional, and PR-ready.</p>
              </div>
            </div>
            <div className="flex flex-col gap-6 group">
              <div className="relative aspect-[4/5] overflow-hidden rounded-[20px] border border-gray-100 shadow-sm">
                <SafeImage src="/images/home/04-value-blocks/03-intern.webp" alt="Internal Communication" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover transition-transform duration-700 group-hover:scale-[1.02]" />
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-[var(--color-text-main)]">Internal Communication</h3>
                <p className="text-[var(--color-text-muted)] text-[17px] font-normal leading-relaxed">Team moments, culture, behind-the-scenes — ideal for the intranet, updates, recaps, and stakeholder communication.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="py-16 md:py-24 border-t border-[var(--color-border-hairline)] bg-transparent">
        <div className="max-w-[900px] mx-auto px-6 md:px-12">
          <p className="text-[17px] md:text-lg text-[var(--color-text-muted)] leading-[1.85]">
            I'm Liza Holiarchuk, an event photographer in Hamburg and official photographer of Hamburg Messe und Congress GmbH. I photograph B2B events – conferences, trade fairs and corporate events – from one-day panels to multi-day trade shows. Before working with a camera, I organized events myself. Therefore, I know what is important on a busy event day: the right people, the right moments, no missed highlights. Marketing and PR teams as well as event agencies in Germany and Europe book me when they need high-quality, brand-consistent images – delivered quickly. Whether Hamburg Messe, a congress center in Berlin or a location in Milan, Amsterdam or Copenhagen: I am where your event takes place.
          </p>
        </div>
      </section>

      {/* 4. SCHWERPUNKTE (SERVICES) */}
      <section className="py-14 md:py-24 bg-transparent border-t border-[var(--color-border-hairline)]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col lg:flex-row justify-between gap-10 lg:gap-24">
          <div className="w-full lg:w-1/3 flex flex-col gap-4">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[var(--color-text-main)]">My Focus</h2>
          </div>
          <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
            <div className="flex flex-col gap-3">
              <h3 className="text-xl font-semibold text-[var(--color-text-main)]">Conference Photography</h3>
              <p className="text-[var(--color-text-muted)] text-[17px] font-normal leading-relaxed">Keynotes, panels, speaker portraits and the atmosphere in the audience. Pictures that work for press, website and the invitation for next year.</p>
            </div>
            <div className="flex flex-col gap-3">
              <h3 className="text-xl font-semibold text-[var(--color-text-main)]">Trade Show Photography</h3>
              <p className="text-[var(--color-text-muted)] text-[17px] font-normal leading-relaxed">Booth photography, product presentations, customer meetings and what's happening in the hall. Optionally with same-day highlights for live posting.</p>
            </div>
            <div className="flex flex-col gap-3 col-span-1 md:col-span-2">
              <h3 className="text-xl font-semibold text-[var(--color-text-main)]">Corporate Events</h3>
              <p className="text-[var(--color-text-muted)] text-[17px] font-normal leading-relaxed">Anniversaries, team events, award ceremonies and networking evenings, documented with an eye for the people and the details.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. ERGEBNISSE (OUTCOMES) */}
      <section className="py-14 md:py-24 bg-transparent border-t border-[var(--color-border-hairline)]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col gap-10 md:gap-14">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[var(--color-text-main)]">Your Outcome</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            <div className="flex flex-col gap-5">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] border border-gray-100 shadow-sm">
                <SafeImage src="/images/home/08-results/01-delivery.webp" alt="Fast Delivery" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold tracking-tight text-[var(--color-text-main)]">Fast Delivery</h3>
                <p className="text-[var(--color-text-muted)] text-[17px] font-normal leading-relaxed">Same-day highlights on request; the fully edited gallery usually within 2 business days.</p>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] border border-gray-100 shadow-sm">
                <SafeImage src="/images/home/08-results/02-consistent.webp" alt="Consistent Visual Language" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold tracking-tight text-[var(--color-text-main)]">Consistent Visual Language</h3>
                <p className="text-[var(--color-text-muted)] text-[17px] font-normal leading-relaxed">Photos that fit your brand, PR, and social media – no lucky accidents.</p>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] border border-gray-100 shadow-sm">
                <SafeImage src="/images/home/08-results/03-gallery.webp" alt="Private Online Gallery" fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold tracking-tight text-[var(--color-text-main)]">Private Online Gallery</h3>
                <p className="text-[var(--color-text-muted)] text-[17px] font-normal leading-relaxed">Easily shareable via a private, optionally password-protected gallery.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. PORTFOLIO */}
      <section className="py-14 md:py-24 bg-transparent border-t border-[var(--color-border-hairline)]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col gap-10 md:gap-14">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <div className="flex flex-col gap-2">
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[var(--color-text-main)]">Selected Projects</h2>
            </div>
            <Link href="/portfolio" title="View Entire Event Photography Portfolio" className="text-[var(--color-text-main)] text-[15px] font-semibold transition-colors hover:text-[var(--color-text-muted)] flex items-center gap-2 group underline-offset-4 decoration-1 underline shrink-0 mb-1">
              View Entire Portfolio →
            </Link>
          </div>

          <ImageGallery
            images={Array.from({ length: 12 }, (_, i) => {
              const strNum = (i + 1).toString().padStart(2, '0');
              const portfolioAlts: Record<string, string> = {
                "01": "Conference photography Hamburg — keynote speaker on stage",
                "02": "B2B event photography Hamburg — networking at a conference",
                "03": "Trade show photography Hamburg Messe — booth photography",
                "04": "Corporate event photography Hamburg — award ceremony",
                "05": "Conference photographer Hamburg — panel discussion",
                "06": "Event photography Hamburg — audience at a conference",
                "07": "Trade show photographer — exhibitor booth Hamburg Messe",
                "08": "Corporate photographer Hamburg — team and branding photo",
                "09": "Conference photography Europe — speaker portrait",
                "10": "B2B event photographer Hamburg — networking moment",
                "11": "Event documentation Hamburg — product presentation",
                "12": "Corporate event Hamburg — executive meeting",
              };
              return { src: `/images/home/06-gallery/${strNum}.webp`, alt: portfolioAlts[strNum] ?? `Portfolio ${strNum}` };
            })}
            gridClassName="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-3"
            itemClassName="relative aspect-[3/2] md:aspect-[4/3] overflow-hidden bg-transparent group cursor-zoom-in w-full block rounded-none"
          />
        </div>
      </section>

      {/* 7. PAKETE */}
      <section className="py-14 md:py-24 bg-transparent border-t border-[var(--color-border-hairline)]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col gap-10 md:gap-14">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[var(--color-text-main)]">Packages & Add-ons</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-[var(--color-border-hairline)] border-t border-[var(--color-border-hairline)] pt-12">
            <div className="flex flex-col gap-6 md:pr-10">
              <h3 className="text-xl font-semibold tracking-tight text-[var(--color-text-main)]">Full Day (8h)</h3>
              <ul className="list-disc pl-5 flex flex-col gap-3 text-[var(--color-text-muted)] text-[17px] font-normal leading-relaxed marker:text-[var(--color-text-main)]">
                <li>Ideal for conferences, trade shows, and large corporate events.</li>
                <li>Complete story: setup → program → people → conclusion.</li>
                <li>Optional: Team portraits + additional blocks.</li>
              </ul>
            </div>
            <div className="flex flex-col gap-6 pt-10 md:pt-0 md:px-10">
              <h3 className="text-xl font-semibold tracking-tight text-[var(--color-text-main)]">Half Day (4h)</h3>
              <ul className="list-disc pl-5 flex flex-col gap-3 text-[var(--color-text-muted)] text-[17px] font-normal leading-relaxed marker:text-[var(--color-text-main)]">
                <li>Compact conferences, panels, and networking formats.</li>
                <li>Focus: key moments, branding, networking, speakers + audience.</li>
              </ul>
            </div>
            <div className="flex flex-col gap-6 pt-10 md:pt-0 md:pl-10">
              <h3 className="text-xl font-semibold tracking-tight text-[var(--color-text-main)]">Add-ons</h3>
              <ul className="list-disc pl-5 flex flex-col gap-3 text-[var(--color-text-muted)] text-[17px] font-normal leading-relaxed marker:text-[var(--color-text-main)]">
                <li>Video shooting</li>
                <li>Same-day highlights</li>
                <li>Business portraits on site</li>
                <li>Multi-day events</li>
              </ul>
            </div>
          </div>
          <div className="pt-4">
            <Link href="/contact" title="Request Event Photographer Hamburg Quote" className="text-[var(--color-text-main)] text-[15px] font-semibold transition-colors hover:text-[var(--color-text-muted)] flex items-center gap-2 group underline-offset-4 decoration-1 underline w-fit">
              Request a quote
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            </Link>
          </div>
        </div>
      </section>

      {/* 8. TESTIMONIALS */}
      <section className="py-14 md:py-24 bg-transparent border-t border-[var(--color-border-hairline)]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col gap-12 md:gap-16">
          <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[var(--color-text-main)]">Client Voices</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-y-20 gap-x-16">
            {[
              {
                img: "01.webp",
                content: "Liza has an excellent eye for the right moments. The collaboration was relaxed and the delivery incredibly fast.",
                name: "Maya Wagner",
                role: "Partner Success | Plug and Play Tech Center Hamburg"
              },
              {
                img: "02.webp",
                content: "Very reliable and exceeded our expectations. The post-processing is strong – we would book Liza again anytime.",
                name: "Mia Lohmeier",
                role: "HR & Partnership Manager | flair"
              },
              {
                img: "03.webp",
                content: "Liza professionally documented our three-day trade show. Strong detail shots and perfectly captured presentations. A pleasure to work with her.",
                name: "Maria Kossivaki",
                role: "Event Specialist | Lloyd's Register"
              },
              {
                img: "04.webp",
                content: "The reactions to the photos were overwhelmingly positive. The pictures simply look fantastic and perfectly capture the atmosphere.",
                name: "Marcia Fahrenheim",
                role: "Director | Factory Hammerbrooklyn"
              }
            ].map((testi, i) => (
              <div key={i} className="flex flex-col gap-6">
                <p className="text-xl md:text-2xl text-[var(--color-text-main)] leading-relaxed font-normal">"{testi.content}"</p>
                <div className="flex items-center gap-4 mt-2">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0 border border-[var(--color-border-hairline)] shadow-sm">
                    <SafeImage src={`/images/home/09-testimonials/${testi.img}`} alt={{
                        "Maya Wagner": "Maya Wagner, Partner Success at Plug and Play Tech Center Hamburg",
                        "Mia Lohmeier": "Mia Lohmeier, HR Manager at flair",
                        "Maria Kossivaki": "Maria Kossivaki, Event Specialist at Lloyd's Register",
                        "Marcia Fahrenheim": "Marcia Fahrenheim, Director at Factory Hammerbrooklyn",
                      }[testi.name] ?? testi.name} fill sizes="56px" className="object-cover" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-base font-semibold text-[var(--color-text-main)]">{testi.name}</span>
                    <span className="text-[14px] text-[var(--color-text-muted)] font-normal">{testi.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. ABOUT */}
      <section className="py-14 md:py-24 bg-transparent border-t border-[var(--color-border-hairline)]">
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-12 md:gap-20 items-center">
          <div className="w-full md:w-1/2 relative aspect-[3/2] overflow-hidden rounded-[20px] shadow-sm border border-gray-100">
            <SafeImage src="/images/home/10-about/01-about.webp" alt="Liza Holiarchuk, Event and Business Photographer in Hamburg" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-6">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[var(--color-text-main)]">About Me</h2>
            <div className="flex flex-col gap-6 text-[17px] text-[var(--color-text-muted)] font-normal leading-relaxed max-w-[50ch]">
              <p>I am an event and business photographer in Hamburg and official photographer of Hamburg Messe und Congress GmbH. I document events as they really are: stage, audience, networking, and the details that later make the difference for PR, social media, and internal communication. In addition to Hamburg, I cover conferences and corporate events throughout Europe (e.g., Milan, Amsterdam, Copenhagen). On site, I work calmly, unobtrusively, and in a structured manner. Delivery runs smoothly via a private, optionally password-protected online gallery.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. FAQ */}
      <section className="py-24 md:py-40 bg-transparent border-y border-[var(--color-border-hairline)] relative overflow-hidden flex items-center min-h-[80vh]">
        <SafeImage src="/images/home/11-faq/01-faq.webp" alt="Event Photographer Hamburg — Frequently Asked Questions (FAQ)" fill className="object-cover" sizes="100vw" />
        <div className="absolute inset-0 bg-[#EAF1F6]/30" />
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full relative z-10 flex">
          <div className="w-full flex flex-col lg:flex-row gap-12 lg:gap-24 bg-[#EAF1F6]/85 border border-black/10 shadow-sm rounded-[24px] p-10 md:p-16 backdrop-blur-[2px]">
            <div className="w-full lg:w-1/3 flex flex-col gap-4">
              <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-[var(--color-text-main)]">Frequently Asked Questions</h2>
            </div>
            <div className="w-full lg:w-2/3 flex flex-col divide-y divide-[var(--color-border-hairline)] border-t border-[var(--color-border-hairline)] lg:mt-2">
              {FAQ.map((faq, i) => (
                <details key={i} className="group [&_summary::-webkit-details-marker]:hidden py-6">
                  <summary className="flex items-center justify-between cursor-pointer text-lg md:text-xl font-semibold text-[var(--color-text-main)]">
                    <span className="pr-8">{faq.q}</span>
                    <span className="transition duration-300 group-open:rotate-180 text-[var(--color-text-muted)] shrink-0">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
                    </span>
                  </summary>
                  <div className="pt-4 text-[var(--color-text-muted)] text-[17px] font-normal leading-relaxed max-w-[65ch]">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 11. CLOSING CTA */}
      <section className="py-24 md:py-32 bg-[#DDE7F0] text-[var(--color-text-main)] flex justify-center text-center">
        <div className="max-w-[800px] w-full px-6 flex flex-col gap-10 items-center">
          <h2 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.1]">Check Availability &<br />Request a Quote</h2>
          <p className="text-xl opacity-80 font-light">Send your inquiry with the date and key details of your event – I'll get back to you with availability and next steps.</p>
          <Link href="/contact" title="Contact & Request Quote Event Photography Hamburg" className="bg-[var(--color-text-main)] text-white px-10 py-4 text-base font-semibold transition-colors hover:bg-[var(--color-accent-hover)] rounded-2xl">
            Go to Contact Form
          </Link>
        </div>
      </section>
    </>
  );
}
