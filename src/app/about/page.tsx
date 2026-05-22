import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About — Event Photographer Hamburg",
  description:
    "Event and conference photographer based in Hamburg. Trusted by Lloyd's Register, Shell, and WFUNA. Covering B2B events across Germany and Europe.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About — Event Photographer Hamburg | Liza Holiarchuk",
    url: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://www.event-fotografin-hamburg.de/" },
              { "@type": "ListItem", position: 2, name: "About", item: "https://www.event-fotografin-hamburg.de/about" },
            ],
          }),
        }}
      />

      {/* Hero */}
      <section className="pt-32 md:pt-44 pb-16 md:pb-24 border-b border-[var(--color-border-hairline)]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="flex flex-col gap-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[var(--color-text-main)] leading-[1.08]">
              Liza Holiarchuk
            </h1>
            <p className="text-xl text-[var(--color-text-muted)] font-normal leading-relaxed">
              Event & conference photographer based in Hamburg.
            </p>
            <p className="text-[17px] text-[var(--color-text-muted)] leading-[1.85]">
              I document B2B events as they truly are: stage moments, audience energy, networking, and the details that later make the difference for PR, social media, and internal communication. My clients range from international associations and trade show exhibitors to tech startups and established corporations.
            </p>
            <p className="text-[17px] text-[var(--color-text-muted)] leading-[1.85]">
              Based in Hamburg, I regularly travel to conferences and corporate events across Germany and Europe — including Berlin, Düsseldorf, Frankfurt, Hanover, Amsterdam, Milan, and Copenhagen.
            </p>
            <div className="flex flex-wrap gap-4 mt-4">
              <Link href="/contact" className="bg-[var(--color-accent)] text-white px-8 py-3.5 rounded-2xl text-[15px] font-semibold transition-colors hover:bg-[var(--color-accent-hover)]">
                Get in Touch
              </Link>
              <Link href="/portfolio" className="border border-[var(--color-border-hairline)] text-[var(--color-text-main)] px-8 py-3.5 rounded-2xl text-[15px] font-semibold transition-colors hover:border-[var(--color-text-main)]">
                View Portfolio
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/5] bg-[var(--color-border-hairline)] rounded-2xl overflow-hidden">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/home/10-about/01-about.webp"
              alt="Liza Holiarchuk — Event Photographer Hamburg"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* How I work */}
      <section className="py-16 md:py-24 border-b border-[var(--color-border-hairline)]">
        <div className="max-w-[900px] mx-auto px-6 md:px-12 flex flex-col gap-10">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[var(--color-text-main)]">How I Work</h2>
          <div className="flex flex-col gap-6 text-[17px] text-[var(--color-text-muted)] leading-[1.85]">
            <p>On-site, I work calmly, discreetly, and with a clear structure. I don't need hand-holding during the event — I arrive with a briefing, work through the agenda, and know what to capture without disrupting the programme.</p>
            <p>Delivery is seamless: a private, optionally password-protected online gallery ready within 48 hours. Same-day highlights are available on request for immediate social media use.</p>
            <p>My editing style is clean and consistent — suited to corporate and PR use without heavy filters or dramatic stylisation.</p>
          </div>
        </div>
      </section>

      {/* Clients */}
      <section className="py-16 md:py-24 border-b border-[var(--color-border-hairline)]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col gap-8">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[var(--color-text-main)]">Selected Clients & Projects</h2>
          <p className="text-[var(--color-text-muted)] text-[17px] leading-relaxed max-w-[65ch]">
            I've worked with organisations across research, technology, maritime, agriculture, food, legal, and financial sectors — at venues from Hamburg Messe to the UN Office at Geneva.
          </p>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 text-[15px] text-[var(--color-text-muted)]">
            {[
              "Lloyd's Register", "Plug and Play Tech Center", "WFUNA / WISE Conference",
              "Shell Global Solutions", "FEMS", "CLAAS", "Oyster Bay Venture Capital",
              "AKVANTIS", "IMMOJECTS", "Flair / Salesforce", "Factory Hammerbrooklyn", "Junico GmbH",
            ].map((c) => (
              <li key={c} className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] opacity-60 shrink-0" />
                {c}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-[#DDE7F0] text-[var(--color-text-main)] flex justify-center text-center">
        <div className="max-w-[600px] w-full px-6 flex flex-col gap-8 items-center">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1]">Let's Work Together</h2>
          <p className="text-xl opacity-80 font-light">Send your inquiry — I'll reply within 24 hours.</p>
          <Link href="/contact" className="bg-[var(--color-text-main)] text-white px-10 py-4 text-base font-semibold transition-colors hover:bg-[var(--color-accent-hover)] rounded-2xl">
            Contact Me
          </Link>
        </div>
      </section>
    </>
  );
}
