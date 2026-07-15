import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { insightsPosts } from "@/data/insights";
import FaqAccordion from "@/components/FaqAccordion";
import {
  buildBlogPostingJsonLd,
  buildFaqPageJsonLd,
  buildArticleBreadcrumbJsonLd,
} from "@/lib/schema";

export const metadata: Metadata = {
  title: "Event Photographer in Germany: What Does It Actually Cost?",
  description:
    "Event photography in Germany costs €300–€2,500+ depending on scope. Here's what's behind the price — and what to look for before you book.",
  alternates: {
    canonical: "/insights/how-much-does-an-event-photographer-cost-hamburg",
  },
  openGraph: {
    title: "Event Photographer in Germany: What Does It Actually Cost?",
    description:
      "Event photography in Germany costs €450–€2,050+ depending on scope. Here's what's behind the price — and what to look for before you book.",
    url: "/insights/how-much-does-an-event-photographer-cost-hamburg",
    images: [
      {
        url: "/images/insights/event-photographer-hamburg-conference-speaker-audience.webp",
        width: 1200,
        height: 630,
        alt: "Event photographer Hamburg — conference speaker presenting to a seated business audience",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Event Photographer in Germany: What Does It Actually Cost?",
    description:
      "Event photography in Germany costs €450–€2,050+ depending on scope. Here's what's behind the price — and what to look for before you book.",
    images: [
      {
        url: "/images/insights/event-photographer-hamburg-conference-speaker-audience.webp",
        alt: "Event photographer Hamburg — conference speaker presenting to a seated business audience",
      },
    ],
  },
};

const SLUG = "how-much-does-an-event-photographer-cost-hamburg";
const post = insightsPosts.find((p) => p.slug === SLUG)!;

const FAQ_ITEMS = [
  {
    q: "How much does an event photographer in Germany cost?",
    a: "For corporate events in Germany, realistic market rates are: 2 hours from €450, 4 hours €900 – €1,400, and a full day (8 hours) €1400 – €2500, all net. Prices at the higher end reflect professional equipment, post-production, usage rights, and same-day delivery options.",
  },
  {
    q: "Why do event photographer prices vary so much?",
    a: "Part of it is operational: the rate covers pre-event coordination, post-production, equipment, insurance, software, and limited billable days per year. But a large part comes down to mindset. Many photographers have never calculated what it costs to do this full time. When you run the real numbers — equipment depreciation, unpaid admin, taxes, no sick pay — €50 per hour is below minimum wage for a self-employed person. That price exists because some photographers treat photography as supplemental income, not a business. It distorts client expectations and makes it harder for full-time professionals to charge what the work actually costs.",
  },
  {
    q: "Is €1,000 for 4 hours of event photography a fair price?",
    a: "Yes — within the normal professional range for major German cities. When you factor in preparation, post-production, equipment, and overhead, a 4-hour booking is effectively a full working day for the photographer.",
  },
  {
    q: "Should I pay a deposit for event photography?",
    a: "Yes — any professional photographer will ask for one, and you should expect it. A deposit secures your date exclusively and protects both sides. A photographer who doesn't ask for a deposit has no formal commitment from you, and you have no formal commitment from them. Clear payment terms, a deposit structure, and cancellation conditions should appear in any professional quote.",
  },
  {
    q: "What do you need from me before the event?",
    a: "Two things: the event agenda and the names of key people — speakers, executives, anyone who should not be missed. Researching those names before arriving means no time is wasted on the day. If you need same-day content for Instagram or LinkedIn, mention that in advance — it changes how moments are prioritized and how quickly highlights are delivered.",
  },
  {
    q: "How many photos will I receive from my event?",
    a: "Volume is the wrong metric. A photographer can deliver 200 images you'll never use, or 30 you'll use everywhere — website, press, LinkedIn, next year's event invitation. What matters is curation and variety, not quantity.",
  },
  {
    q: "How quickly can I receive the photos?",
    a: "A full edited gallery within 24 hours is standard. Same-day highlights — 5 to 10 images for live social media or press — can be arranged in advance and delivered during or immediately after the event.",
  },
  {
    q: "Do I own the photos after booking?",
    a: "In Germany, copyright stays with the photographer by law. What you receive are usage rights — typically covering internal use, press, social media, and website. Commercial use beyond that scope is quoted separately.",
  },
];



export default function EventPhotographerCostPage() {
  const relatedSlugs = [
    "how-to-brief-your-event-photographer-conference-hamburg",
    "same-day-event-photo-delivery-when-it-matters",
  ];
  const relatedPosts = relatedSlugs
    .map((s) => insightsPosts.find((p) => p.slug === s))
    .filter(Boolean);

  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            buildArticleBreadcrumbJsonLd(post.title, SLUG),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            buildBlogPostingJsonLd({
              slug: SLUG,
              headline: post.title,
              description: post.excerpt,
              datePublished: post.datePublished,
              dateModified: post.dateModified,
              image: post.coverImage,
            }),
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(buildFaqPageJsonLd(FAQ_ITEMS)),
        }}
      />

      {/* Hero */}
      <section className="pt-32 md:pt-44 pb-16 md:pb-24 border-b border-[var(--color-border-hairline)]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col gap-6">
          <nav aria-label="Breadcrumb" className="text-[13px] text-[var(--color-text-muted)] font-light">
            <Link href="/" className="hover:text-[var(--color-accent)] transition-colors">Home</Link>
            <span className="mx-2" aria-hidden="true">›</span>
            <Link href="/insights" className="hover:text-[var(--color-accent)] transition-colors">Insights</Link>
            <span className="mx-2" aria-hidden="true">›</span>
            <span className="text-[var(--color-text-main)]">Pricing &amp; Booking</span>
          </nav>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[var(--color-text-main)] leading-[1.08] max-w-4xl">
            Event Photographer in Germany: What Does It Actually Cost?
          </h1>
          <p className="text-lg md:text-xl text-[var(--color-text-muted)] max-w-[60ch] font-normal leading-relaxed">
            Event photography in Germany costs €300–€2,500+ depending on scope.
            Here&apos;s what&apos;s behind the price — and what to look for
            before you book.
          </p>
          <div className="flex items-center gap-4 text-[14px] text-[var(--color-text-muted)]">
            <span>By <Link href="/about" className="text-[var(--color-text-main)] font-medium hover:underline underline-offset-2">Liza Holiarchuk</Link></span>
            <span className="w-1 h-1 rounded-full bg-[var(--color-text-muted)] opacity-50" />
            <span>June 2026</span>
            <span className="w-1 h-1 rounded-full bg-[var(--color-text-muted)] opacity-50" />
            <span>8 min read</span>
          </div>
        </div>
      </section>

      {/* Hero image */}
      <section className="py-10 md:py-14">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="relative aspect-[16/7] rounded-[20px] overflow-hidden bg-[var(--color-border-hairline)] border border-gray-100 shadow-sm">
            <Image
              src="/images/insights/event-photographer-hamburg-conference-speaker-audience.webp"
              alt="Event photographer Hamburg — conference speaker presenting to a seated business audience"
              fill
              className="object-cover"
              sizes="(max-width: 1248px) 100vw, 1200px"
              priority
            />
          </div>
        </div>
      </section>



      {/* Article body — The short answer */}
      <section className="pb-16 md:pb-24 border-b border-[var(--color-border-hairline)]">
        <div className="max-w-[900px] mx-auto px-6 md:px-12 flex flex-col gap-8">
          <p className="text-[17px] text-[var(--color-text-muted)] leading-[1.85]">
            Search for an event photographer and you&apos;ll find quotes ranging
            from €50 to €500 per hour. Seemingly the same service. So what
            explains the gap? And what&apos;s actually behind a price that might
            look high at first glance?
          </p>


        </div>
      </section>

      {/* Why prices vary */}
      <section className="py-16 md:py-24 border-b border-[var(--color-border-hairline)]">
        <div className="max-w-[900px] mx-auto px-6 md:px-12 flex flex-col gap-8">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[var(--color-text-main)]">
            Why prices vary so much — and what nobody says out loud
          </h2>
          <div className="flex flex-col gap-6 text-[17px] text-[var(--color-text-muted)] leading-[1.85]">
            <p>
              The easy answer is that the rate covers more than time on-site:
              pre-event coordination, post-production, equipment, insurance,
              software, a limited number of actually billable days per year. A lower
              price often means one or more of those is simply not there.
            </p>
            <p>But that&apos;s only part of the story.</p>
            <p>
              A large share of the price variation in this market has nothing to do
              with what&apos;s included. It comes down to mindset. Many
              photographers have never actually calculated what it costs to do this
              work full time. They started from passion, kept prices low out of
              habit or insecurity, and never ran the real numbers. When you do —
              equipment depreciation, unpaid admin hours, taxes, no sick pay, no
              paid holidays — €50 per hour lands below minimum wage for a
              self-employed person with no benefits. Not a bargain. A signal that
              someone hasn&apos;t done the math.
            </p>
            <p>
              If every photographer working in this field sat down and calculated
              their true costs honestly, that rate would disappear from the
              professional market. It persists because some people treat photography
              as supplemental income, not a business. That is a valid personal
              choice. But it distorts price expectations for clients and makes it
              harder for full-time professionals to charge what the work actually
              costs.
            </p>
            <p>
              The result is a market where a €50 quote and a €200 quote look like a
              quality spectrum — when they actually represent completely different
              operational realities.
            </p>
          </div>
        </div>
      </section>

      {/* What the hourly rate doesn't tell you */}
      <section className="py-16 md:py-24 border-b border-[var(--color-border-hairline)]">
        <div className="max-w-[900px] mx-auto px-6 md:px-12 flex flex-col gap-8">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[var(--color-text-main)]">
            What the hourly rate doesn&apos;t tell you
          </h2>
          <div className="flex flex-col gap-6 text-[17px] text-[var(--color-text-muted)] leading-[1.85]">
            <p>
              When a photographer charges €1,000 for a 4-hour event, you&apos;re not
              paying for 4 hours of work. You&apos;re paying for roughly double —
              and that&apos;s only the visible part.
            </p>
            <p>
              Before the event, there&apos;s coordination, briefing, location
              research, checking and charging equipment, packing a full kit. A
              professional photographer doesn&apos;t just show up and start
              shooting.
            </p>
            <p>
              The event itself is 4 hours. The smallest part of the total work.
            </p>
            <p>
              After the event is where most clients underestimate what&apos;s
              involved — and where cutting corners shows. My editing process runs in
              two stages deliberately. The day of the event I do a first pass:
              selecting frames with potential, marking what caught my eye. The
              actual editing happens the next day. Not because I&apos;m slow, but
              because a tired eye misses things. After hours of shooting under
              pressure, judgment blurs. A fresh perspective the next morning is the
              difference between a delivery you&apos;re proud of and one
              that&apos;s merely acceptable.
            </p>
          </div>

          <div className="bg-[#F5F8FB] border border-[var(--color-border-hairline)] rounded-[20px] px-8 py-7">
            <p className="text-xl md:text-2xl font-normal text-[var(--color-text-main)] leading-relaxed italic">
              &ldquo;We don&apos;t need a lot of pictures. We need the best
              highlights.&rdquo;
            </p>
          </div>

          <div className="flex flex-col gap-6 text-[17px] text-[var(--color-text-muted)] leading-[1.85]">
            <p>
              Not about technical quality. About curation and variety. Ten images
              you actually use are worth more than a hundred you scroll past.
            </p>
            <p>
              In practice, a &quot;4-hour job&quot; is a full 8 to 10-hour workday.
              The hourly rate, spread across total time, halves immediately.
            </p>
          </div>
        </div>
      </section>

      {/* The costs clients don't see */}
      <section className="py-16 md:py-24 border-b border-[var(--color-border-hairline)]">
        <div className="max-w-[900px] mx-auto px-6 md:px-12 flex flex-col gap-8">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[var(--color-text-main)]">
            The costs clients don&apos;t see
          </h2>
          <div className="flex flex-col gap-6 text-[17px] text-[var(--color-text-muted)] leading-[1.85]">
            <p>
              Think of a professional photographer as a small business, not a person
              with a camera. The equipment alone tells the story. A body like the{" "}
              <a
                href="https://www.canon.de/cameras/eos-r5/"
                target="_blank"
                rel="noopener"
                className="text-[var(--color-text-main)] underline underline-offset-2 hover:text-[var(--color-accent)]"
              >
                Canon EOS R5
              </a>{" "}
              costs over €3,500. A single professional lens — the kind that performs
              reliably in the low light of a conference room or the mixed lighting
              of a trade fair floor — runs €1,500 to €2,500. Add a backup body,
              lighting equipment, flashes, stands, and cases, and a complete working
              kit reaches €10,000 to €15,000 without stretching the budget. None of
              that is optional. Cameras fail. Cards corrupt. A photographer without
              backup equipment at a corporate event is a liability.
            </p>
            <p>
              Then there&apos;s the software layer.{" "}
              <a
                href="https://www.adobe.com/creativecloud.html"
                target="_blank"
                rel="noopener"
                className="text-[var(--color-text-main)] underline underline-offset-2 hover:text-[var(--color-accent)]"
              >
                Adobe Creative Cloud
              </a>{" "}
              — the industry standard for editing — runs around €60 per month for
              photographers. Add gallery delivery platforms, accounting tools, a
              CRM, and the total easily reaches €150 to €200 per month: roughly
              €2,000 per year in fixed overhead before a single client is invoiced.
              Professional liability and equipment insurance adds another €500 to
              €1,200 annually, a requirement rather than a luxury when you&apos;re
              working at corporate events with expensive setups and public liability
              concerns.
            </p>
            <p>
              The number that surprises most people: a freelance photographer
              doesn&apos;t have 220 fully billable days a year. After client
              acquisition, post-production, administration, and professional
              development, the realistic estimate is 60 to 100 actual shooting
              days. Every day rate has to carry an entire year of fixed costs,
              taxes, and time that doesn&apos;t appear on any invoice.
            </p>
          </div>

          {/* In-body image */}
          <div className="relative aspect-[16/9] rounded-[20px] overflow-hidden bg-[var(--color-border-hairline)] border border-gray-100 shadow-sm">
            <Image
              src="/images/insights/event-photographer-hamburg-networking-detail.webp"
              alt="Event networking in Hamburg — guests with coffee and phones at a corporate event"
              fill
              className="object-cover"
              sizes="(max-width: 948px) 100vw, 900px"
            />
          </div>
        </div>
      </section>

      {/* When cheap becomes expensive */}
      <section className="py-16 md:py-24 border-b border-[var(--color-border-hairline)]">
        <div className="max-w-[900px] mx-auto px-6 md:px-12 flex flex-col gap-8">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[var(--color-text-main)]">
            When cheap becomes expensive
          </h2>
          <div className="flex flex-col gap-6 text-[17px] text-[var(--color-text-muted)] leading-[1.85]">
            <p>
              I&apos;ve spoken with marketing managers who booked a photographer at
              a low rate for a company conference and received a gallery they
              couldn&apos;t use publicly — motion blur on the keynote speaker, flat
              light on the networking moments, no usable portrait of the CEO. The
              event was over. There was no second chance. What they saved on
              photography they spent rebuilding the situation: stock images for the
              press release, no content for LinkedIn, and an annual report page that
              went out without the photos it was designed around.
            </p>
          </div>

          <div className="bg-[#F5F8FB] border border-[var(--color-border-hairline)] rounded-[20px] px-8 py-7">
            <p className="text-xl md:text-2xl font-normal text-[var(--color-text-main)] leading-relaxed italic">
              This pattern is specific and common enough to have a name in the
              industry: the invisible cost of a bad hire.
            </p>
          </div>

          <div className="flex flex-col gap-6 text-[17px] text-[var(--color-text-muted)] leading-[1.85]">
            <p>
              Low rates in event photography typically mean some combination of
              the following — no professional backup equipment, limited experience
              with the light and pace conditions of real corporate events, no
              meaningful post-production, and no contractual clarity if something
              goes wrong. Any one of these is manageable in isolation. Together
              they produce a gallery that looks like the event was covered by
              someone&apos;s colleague with a new camera. Which, often enough, is
              exactly what happened.
            </p>
          </div>
        </div>
      </section>

      {/* What a solid quote contains */}
      <section className="py-16 md:py-24 border-b border-[var(--color-border-hairline)]">
        <div className="max-w-[900px] mx-auto px-6 md:px-12 flex flex-col gap-8">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[var(--color-text-main)]">
            What a solid quote actually contains
          </h2>
          <p className="text-[17px] text-[var(--color-text-muted)] leading-[1.85]">
            These are the points I cover in every quote I send — because
            they&apos;re what clients most often don&apos;t think to ask about
            upfront, and where mismatched expectations come from.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "What's included and what isn't",
                text: "Post-production, number of final images, delivery format, gallery hosting — make sure these are explicit, not assumed. A quote that lists only the hours and a price is incomplete.",
              },
              {
                title: "Usage rights",
                text: "In Germany, copyright stays with the photographer by law. What you receive are usage rights. A well-structured quote defines these clearly: internal communications, press, social media, website.",
              },
              {
                title: "Delivery timeline",
                text: "A full edited gallery within 24 hours is standard for professional event work. Same-day highlights — 5 to 10 images for live social media or press — are a distinct service, planned in advance.",
              },
              {
                title: "Backup systems",
                text: "Ask directly. Professional photographers write to multiple memory cards simultaneously throughout a shoot. A card failure — which happens — loses nothing. Standard practice, not a premium feature.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-3 p-6 border border-[var(--color-border-hairline)] rounded-[20px]"
              >
                <h3 className="text-lg font-semibold text-[var(--color-text-main)]">
                  {item.title}
                </h3>
                <p className="text-[15px] text-[var(--color-text-muted)] leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          {/* Payment terms — full width */}
          <div className="flex flex-col gap-3 p-6 border border-[var(--color-border-hairline)] rounded-[20px]">
            <h3 className="text-lg font-semibold text-[var(--color-text-main)]">
              Payment and cancellation terms
            </h3>
            <p className="text-[15px] text-[var(--color-text-muted)] leading-relaxed">
              When I moved to Germany and was starting out in a new market, I
              didn&apos;t ask for a deposit. I travelled to another city to
              photograph a corporate event, delivered the work, received a thank
              you — and never got paid. No contract, no deposit, no recourse. That
              happened once. It won&apos;t happen again, and it&apos;s why I now
              treat payment terms as non-negotiable regardless of how
              straightforward a client seems. A professional photographer holds
              your date exclusively and turns down other work to be at yours.
              Serious quotes include a deposit structure, clear payment terms, and
              cancellation conditions for both sides. If a quote doesn&apos;t
              mention any of this, ask why.
            </p>
          </div>

          <p className="text-[15px] text-[var(--color-text-muted)] leading-relaxed">
            The{" "}
            <a
              href="https://www.bff.de/"
              target="_blank"
              rel="noopener"
              className="text-[var(--color-text-main)] underline underline-offset-2 hover:text-[var(--color-accent)]"
            >
              BFF (Bundesverband Freie Fotografen und Filmgestalter)
            </a>
            , Germany&apos;s professional photographers&apos; association,
            publishes standard usage rights frameworks that most professional
            photographers follow.
          </p>
        </div>
      </section>

      {/* Realistic numbers */}
      <section className="py-16 md:py-24 border-b border-[var(--color-border-hairline)]">
        <div className="max-w-[1000px] mx-auto px-6 md:px-12 flex flex-col gap-10">
          <div className="flex flex-col gap-2">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[var(--color-text-main)]">
              Standard Price Ranges
            </h2>
            <p className="text-[14px] text-[var(--color-text-muted)]">
              Net prices, excluding VAT.&ensp;·&ensp;Professional photographers in Germany generally do not bill simply for the time spent shooting; their rates account for preparation, post-production, professional equipment, insurance, and business overhead. Most professionals will not accept a 1-hour booking and have a minimum requirement of 2 to 3 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col gap-3 p-6 border border-[var(--color-border-hairline)] rounded-[20px]">
              <h3 className="text-lg font-semibold text-[var(--color-text-main)]">Hourly Rate</h3>
              <p className="text-xl font-medium text-[var(--color-text-main)]">€200 – €300+ / hr</p>
              <p className="text-[14px] text-[var(--color-text-muted)] mt-2">
                <strong className="font-medium text-[var(--color-text-main)]">Note:</strong> The first hour is sometimes billed higher to cover basic setup and travel, with subsequent hours dropping slightly. Hourly rates are often used to calculate overtime rather than initial bookings.
              </p>
            </div>

            <div className="flex flex-col gap-3 p-6 border border-[var(--color-border-hairline)] rounded-[20px]">
              <h3 className="text-lg font-semibold text-[var(--color-text-main)]">Half-Day Rate <span className="text-[15px] font-normal text-[var(--color-text-muted)]">(approx. 4 hours)</span></h3>
              <p className="text-xl font-medium text-[var(--color-text-main)]">€900 – €1400</p>
              <p className="text-[14px] text-[var(--color-text-muted)] mt-2">
                This is the most common package for evening corporate receptions, medium-sized PR events, or half-day conferences.
              </p>
              <p className="text-[14px] text-[var(--color-text-muted)] mt-1 italic">
                In a major business hub like Hamburg, expect most reliable professionals to quote between €1000 and €1500 for a half-day.
              </p>
            </div>

            <div className="flex flex-col gap-3 p-6 border border-[var(--color-border-hairline)] rounded-[20px]">
              <h3 className="text-lg font-semibold text-[var(--color-text-main)]">Full-Day Rate <span className="text-[15px] font-normal text-[var(--color-text-muted)]">(approx. 8 hours)</span></h3>
              <p className="text-xl font-medium text-[var(--color-text-main)]">€1400 – €2,500+</p>
              <p className="text-[14px] text-[var(--color-text-muted)] mt-2">
                In Hamburg, a standard full-day corporate shoot will typically land around €1600 to €2,500+ depending on specific usage rights, post-production complexity, and same-day delivery options.
              </p>
            </div>
          </div>

          <div className="bg-[#F5F8FB] border border-[var(--color-border-hairline)] rounded-[20px] px-6 py-5 mt-2">
            <p className="text-[14px] text-[var(--color-text-muted)] leading-relaxed">
              <strong className="font-semibold text-[var(--color-text-main)]">Note:</strong> Students or semi-professionals might charge €60–€100 per hour, but they generally lack the commercial liability insurance, backup equipment, and low-light expertise expected for high-stakes corporate events.
            </p>
          </div>
        </div>
      </section>

      {/* Mid-article CTA */}
      <section className="py-16 md:py-20 bg-[#F5F8FB] border-b border-[var(--color-border-hairline)]">
        <div className="max-w-[700px] mx-auto px-6 md:px-12 flex flex-col items-center gap-6 text-center">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-[var(--color-text-main)]">
            Need a precise quote for your event?
          </h2>
          <p className="text-[17px] text-[var(--color-text-muted)] font-normal">
            Tell me about your event — date, location, and deliverables. I&apos;ll send a clear quote tailored to your scope.
          </p>
          <Link
            href="/contact"
            className="bg-[var(--color-accent)] text-white px-8 py-3.5 rounded-2xl text-[15px] font-semibold transition-colors hover:bg-[var(--color-accent-hover)]"
          >
            Get in Touch
          </Link>
        </div>
      </section>

      {/* In-body image — Hamburg venue */}
      <section className="py-10 md:py-14">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="relative aspect-[16/9] rounded-[20px] overflow-hidden bg-[var(--color-border-hairline)] border border-gray-100 shadow-sm">
            <Image
              src="/images/insights/event-photographer-hamburg-venue-guests.webp"
              alt="Corporate event guests walking through a Hamburg venue, photographed by Liza Holiarchuk"
              fill
              className="object-cover"
              sizes="(max-width: 1248px) 100vw, 1200px"
            />
          </div>
        </div>
      </section>

      {/* The actual question worth asking */}
      <section className="py-16 md:py-24 border-b border-[var(--color-border-hairline)]">
        <div className="max-w-[900px] mx-auto px-6 md:px-12 flex flex-col gap-8">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[var(--color-text-main)]">
            The actual question worth asking
          </h2>
          <div className="flex flex-col gap-6 text-[17px] text-[var(--color-text-muted)] leading-[1.85]">
            <p>
              Most clients arrive focused on price per hour and number of photos
              delivered. Both are the wrong starting point.
            </p>
            <p>
              The images from your event will be used — on your website, in a press
              release, on LinkedIn, in the invitation for next year&apos;s edition —
              or they won&apos;t be used at all. That outcome is decided largely
              before the photographer arrives: by who you book, what briefing you
              give them, and whether they understand what the images are actually
              for.
            </p>
            <p>
              A photographer who asks for your event agenda and researches your
              keynote speakers before arriving is not being difficult. They&apos;re
              making sure the right moments don&apos;t get missed in a room with no
              second takes. A photographer who delivers 40 curated, usable images
              instead of 300 mediocre ones is not giving you less. They&apos;re
              giving you more of what you&apos;ll actually publish.
            </p>
            <p>
              Price is one variable. It matters. But the question that produces
              better results is simpler: <em className="text-[var(--color-text-main)] font-medium">do the images from this photographer look
              like something my company would be proud to put its name next to?</em>
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/portfolio"
              className="bg-[var(--color-accent)] text-white px-8 py-3.5 rounded-2xl text-[15px] font-semibold transition-colors hover:bg-[var(--color-accent-hover)]"
            >
              View Portfolio
            </Link>
            <Link
              href="/contact"
              className="border border-[var(--color-border-hairline)] text-[var(--color-text-main)] px-8 py-3.5 rounded-2xl text-[15px] font-semibold transition-colors hover:border-[var(--color-text-main)]"
            >
              Request a Quote
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ — using FaqAccordion component */}
      <section className="py-16 md:py-24 border-b border-[var(--color-border-hairline)]">
        <div className="max-w-[900px] mx-auto px-6 md:px-12 flex flex-col gap-10">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[var(--color-text-main)]">
            Frequently Asked Questions
          </h2>
          <FaqAccordion items={FAQ_ITEMS} />
        </div>
      </section>

      {/* Also worth reading */}
      <section className="py-16 md:py-24 border-b border-[var(--color-border-hairline)]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col gap-10">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[var(--color-text-main)]">
            Also Worth Reading
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {relatedPosts.map((p) =>
              p ? (
                <Link
                  key={p.slug}
                  href={`/insights/${p.slug}`}
                  className="group flex flex-col gap-3 border border-[var(--color-border-hairline)] rounded-[20px] overflow-hidden hover:border-[var(--color-text-muted)] transition-colors"
                >
                  {p.coverImage && (
                    <div className="relative aspect-[16/9] overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={p.coverImage}
                        alt={p.title}
                        className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700"
                        loading="lazy"
                      />
                    </div>
                  )}
                  <div className="px-5 pb-5 flex flex-col gap-1">
                    <span className="text-[11px] font-semibold uppercase tracking-widest text-[var(--color-text-muted)]">
                      {p.category}
                    </span>
                    <h3 className="text-base font-semibold text-[var(--color-text-main)] group-hover:underline underline-offset-2 leading-snug">
                      {p.title}
                    </h3>
                  </div>
                </Link>
              ) : null
            )}
          </div>
        </div>
      </section>

      {/* Explore Related */}
      <section className="py-16 md:py-24 border-b border-[var(--color-border-hairline)]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col gap-8">
          <h2 className="text-2xl font-semibold text-[var(--color-text-main)]">Explore My Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { href: "/pricing", label: "Pricing" },
              { href: "/event-photographer-hamburg", label: "Event Photography Hamburg" },
              { href: "/conference-photography-hamburg", label: "Conference Photography" },
              { href: "/trade-show-photography-hamburg", label: "Trade Show Photography" },
            ].map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="border border-[var(--color-border-hairline)] rounded-xl px-5 py-4 text-[15px] font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text-main)] hover:border-[var(--color-text-main)] transition-colors"
              >
                {s.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Author */}
      <section className="py-16 md:py-20 border-b border-[var(--color-border-hairline)]">
        <div className="max-w-[900px] mx-auto px-6 md:px-12 flex flex-col md:flex-row gap-8 items-center">
          <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden shrink-0 border border-[var(--color-border-hairline)] shadow-sm">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/home/10-about/01-about.webp"
              alt="Liza Holiarchuk — Event Photographer Hamburg"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col gap-2 text-center md:text-left">
            <p className="text-lg font-semibold text-[var(--color-text-main)]">Liza Holiarchuk</p>
            <p className="text-[15px] text-[var(--color-text-muted)] leading-relaxed max-w-[55ch]">
              Hamburg-based freelance photographer specializing in corporate event photography, business portraits, and conference documentation. Over 5 years of experience working with companies, agencies, and event organizers across Hamburg, Germany, and Europe.
            </p>
            <div className="flex flex-wrap gap-4 mt-1 justify-center md:justify-start">
              <Link href="/about" className="text-[14px] text-[var(--color-text-main)] font-medium underline underline-offset-4 decoration-1 hover:text-[var(--color-accent)]">
                About
              </Link>
              <Link href="/contact" className="text-[14px] text-[var(--color-text-main)] font-medium underline underline-offset-4 decoration-1 hover:text-[var(--color-accent)]">
                Contact
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-[#DDE7F0] text-[var(--color-text-main)] flex justify-center text-center">
        <div className="max-w-[700px] w-full px-6 flex flex-col gap-8 items-center">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1]">
            Have an Event Coming Up?
          </h2>
          <p className="text-xl opacity-80 font-light">
            Send your inquiry — I&apos;ll reply within 24 hours.
          </p>
          <Link
            href="/contact"
            className="bg-[var(--color-text-main)] text-white px-10 py-4 text-base font-semibold transition-colors hover:bg-[var(--color-accent-hover)] rounded-2xl"
          >
            Contact Me
          </Link>
        </div>
      </section>
    </>
  );
}
