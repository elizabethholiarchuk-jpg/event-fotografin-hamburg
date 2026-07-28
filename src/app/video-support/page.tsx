import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Event Photography & Video Support — Valeriy Riyako | Liza Holiarchuk",
  description:
    "Combined professional event photography and video documentation for conferences and trade shows in Hamburg and across Europe with Valeriy Riyako.",
  robots: {
    index: false,
    follow: false,
  },
  alternates: {
    canonical: "/video-support",
    languages: {
      en: "/video-support",
      de: "/de/video-support",
      "x-default": "/video-support",
    },
  },
};

const VIDEO_EXAMPLES = [
  {
    title: "Lloyd's Register at SMM 2026 — Messe Hamburg",
    category: "Trade Show / Messe",
    description: "Comprehensive video documentation of Lloyd's Register exhibition stand at the SMM maritime trade fair in Hamburg — capturing booth activity, live product demonstrations, and visitor interactions on the exhibition floor.",
    embedUrl: "https://www.youtube-nocookie.com/embed/oqufTncvJCM?rel=0",
  },
  {
    title: "GP Solutions at ITB Berlin 2025",
    category: "Trade Show / Messe",
    description: "Dynamic video coverage of GP Solutions at ITB Berlin, one of the world's leading travel industry trade shows — highlighting booth presentations, networking moments, and the energy of an international B2B exhibition.",
    embedUrl: "https://www.youtube-nocookie.com/embed/5wxq_WBbmew?rel=0",
  },
  {
    title: "The Performance & Style Days 2024 — Hannover",
    category: "Conference & Event",
    description: "Atmospheric highlight film from The Performance & Style Days in Hannover — capturing stage presentations, audience engagement, and the overall event experience across the full programme.",
    embedUrl: "https://www.youtube-nocookie.com/embed/RDZAh_2PDa4?rel=0",
  },
];

export default function VideoSupportPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 md:pt-44 pb-16 md:pb-24 border-b border-[var(--color-border-hairline)]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="max-w-[900px] flex flex-col gap-6">
            <nav aria-label="Breadcrumb" className="text-[13px] text-[var(--color-text-muted)] font-light">
              <Link href="/" className="hover:text-[var(--color-accent)] transition-colors">Home</Link>
              <span className="mx-2" aria-hidden="true">›</span>
              <span className="text-[var(--color-text-main)]">Video Support & Team Partnership</span>
            </nav>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[var(--color-text-main)] leading-[1.08]">
              Event Photography & <br className="hidden sm:inline" />
              Professional Video Support
            </h1>
            
            <p className="text-xl text-[var(--color-text-muted)] font-normal leading-relaxed">
              Comprehensive visual documentation for conferences, corporate summits, and trade shows in Hamburg and across Europe — seamlessly combined from one trusted team.
            </p>
            
            <p className="text-[17px] text-[var(--color-text-muted)] leading-[1.85]">
              When your upcoming event requires both high-end still photography and dynamic motion coverage, coordinating two separate agencies can lead to inconsistent visuals and competing cameras on site. For client video requests, I team up with my trusted colleague and dedicated video specialist, <strong>Valeriy Riyako</strong>, to deliver a cohesive, unified visual package.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-4">
              <Link href="/contact" className="bg-[var(--color-accent)] text-white px-8 py-3.5 rounded-2xl text-[15px] font-semibold transition-colors hover:bg-[var(--color-accent-hover)] shadow-sm">
                Request Combined Support
              </Link>
              <a href="#examples" className="border border-[var(--color-border-hairline)] bg-white/50 text-[var(--color-text-main)] px-8 py-3.5 rounded-2xl text-[15px] font-semibold transition-colors hover:border-[var(--color-text-main)] hover:bg-white">
                View Video Examples
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Teamwork & Partnership Advantage */}
      <section className="py-16 md:py-24 border-b border-[var(--color-border-hairline)] bg-white/40">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 grid md:grid-cols-12 gap-12 md:gap-16 items-start">
          <div className="md:col-span-5 flex flex-col gap-6">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[var(--color-text-main)]">
              One Team, Seamless Coordination on Site
            </h2>
            <p className="text-[17px] text-[var(--color-text-muted)] leading-[1.85]">
              While I focus entirely on capturing pristine photographic moments, Valeriy leads all video and motion production. Together, we provide a unified workflow from early planning through to final media delivery.
            </p>
            <div className="p-6 bg-white/80 border border-[var(--color-border-hairline)] rounded-2xl shadow-sm mt-2">
              <div className="flex items-start gap-5">
                <div className="w-20 h-20 rounded-full overflow-hidden shrink-0 border-2 border-[var(--color-border-hairline)]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/services/Valeriy.webp"
                    alt="Valeriy Riyako — Event Video Specialist"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-[17px] text-[var(--color-text-main)]">Valeriy Riyako</h3>
                  <p className="text-[14px] text-[var(--color-text-muted)] mt-1 font-medium">Co-working Event Video Specialist</p>
                </div>
              </div>
              <p className="text-[15px] text-[var(--color-text-muted)] leading-relaxed mt-4">
                Valeriy specialises in fast-paced B2B video production, filming everything from engaging conference wrap-up movies to executive interviews and dynamic exhibition stand features at Hamburg Messe and nationwide.
              </p>
            </div>
          </div>

          <div className="md:col-span-7 flex flex-col gap-8">
            <h3 className="text-2xl font-semibold text-[var(--color-text-main)]">
              Why clients love our coordinated approach:
            </h3>
            
            <div className="grid gap-6">
              <div className="p-6 bg-white rounded-2xl border border-[var(--color-border-hairline)] shadow-xs">
                <h4 className="text-lg font-semibold text-[var(--color-text-main)] mb-2">1. Single, Unified Briefing</h4>
                <p className="text-[16px] text-[var(--color-text-muted)] leading-[1.75]">
                  You don&apos;t have to instruct two separate creative teams. You share your timeline, stage agenda, and must-have priorities just once, and our entire photo and video team aligns to execute your vision.
                </p>
              </div>

              <div className="p-6 bg-white rounded-2xl border border-[var(--color-border-hairline)] shadow-xs">
                <h4 className="text-lg font-semibold text-[var(--color-text-main)] mb-2">2. Zero On-Site Friction</h4>
                <p className="text-[16px] text-[var(--color-text-muted)] leading-[1.75]">
                  Unconnected photographers and videographers often get in each other&apos;s way or cross into each other&apos;s camera frames during pivotal stage moments. We operate quietly and synchronously, anticipating each other&apos;s angles to ensure flawless shots for both photo and video.
                </p>
              </div>

              <div className="p-6 bg-white rounded-2xl border border-[var(--color-border-hairline)] shadow-xs">
                <h4 className="text-lg font-semibold text-[var(--color-text-main)] mb-2">3. Cohesive Brand Aesthetic</h4>
                <p className="text-[16px] text-[var(--color-text-muted)] leading-[1.75]">
                  Our visual workflows are designed to complement one another. Your delivered photo gallery and video highlights will look like they belong to the same polished aesthetic — perfect for cross-channel marketing, LinkedIn campaigns, and PR distributions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Showcase Grid */}
      <section id="examples" className="py-16 md:py-24 border-b border-[var(--color-border-hairline)] scroll-mt-24">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col gap-12">
          <div className="flex flex-col gap-4 max-w-[800px]">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[var(--color-text-main)]">
              Video Examples: Conferences & Messe
            </h2>
            <p className="text-[17px] text-[var(--color-text-muted)] leading-relaxed">
              Below is a selection of video formats captured by Valeriy during international trade fairs, conferences, and corporate events.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-12 md:gap-16">
            {VIDEO_EXAMPLES.map((video, index) => (
              <div key={index} className="flex flex-col md:flex-row gap-8 items-start bg-white/60 border border-[var(--color-border-hairline)] p-6 md:p-8 rounded-3xl shadow-sm">
                <div className="w-full md:w-3/5 aspect-video bg-slate-900 rounded-2xl overflow-hidden shadow-md relative group border border-slate-800">
                  <iframe
                    src={video.embedUrl}
                    title={video.title}
                    className="w-full h-full rounded-2xl bg-slate-900 border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
                <div className="w-full md:w-2/5 flex flex-col justify-center py-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-900 mb-2">
                    {video.category}
                  </span>
                  <h3 className="text-2xl font-semibold text-[var(--color-text-main)] tracking-tight mb-4">
                    {video.title}
                  </h3>
                  <p className="text-[16px] text-[var(--color-text-muted)] leading-[1.8]">
                    {video.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Offer / Deliverables */}
      <section className="py-16 md:py-24 border-b border-[var(--color-border-hairline)] bg-white/30">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col gap-12">
          <div className="max-w-[800px]">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[var(--color-text-main)]">
              What Our Combined Package Includes
            </h2>
            <p className="text-[17px] text-[var(--color-text-muted)] mt-4 leading-relaxed">
              Depending on your specific event requirements, our coordinated photo and video coverage can include:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Event Highlight Reels", text: "Dynamic 60–90 second summary films designed to generate maximum engagement on LinkedIn and external marketing channels." },
              { title: "Trade Show & Booth Tours", text: "Targeted coverage of your exhibition presence at Hamburg Messe, emphasizing booth activity and guest networking." },
              { title: "Speaker & VIP Interviews", text: "Lavalier and handheld wireless audio recording for executive soundbites, expert opinions, and attendee reflections." },
              { title: "Vertical Social Media Shorts", text: "Optimized 9:16 vertical video edits ready for instant posting to LinkedIn Video, Instagram Reels, or YouTube Shorts." },
              { title: "Pristine Still Photo Gallery", text: "Liza's complete photo documentation delivered in an organized, optional password-protected online gallery within 48 hours." },
              { title: "Simple Commercial Licensing", text: "Transparent usage rights included for all delivered photos and video cuts for corporate PR, web, and internal communication." },
            ].map((item, i) => (
              <div key={i} className="p-6 bg-white rounded-2xl border border-[var(--color-border-hairline)] shadow-xs flex flex-col gap-2">
                <h4 className="font-semibold text-lg text-[var(--color-text-main)]">{item.title}</h4>
                <p className="text-[15px] text-[var(--color-text-muted)] leading-[1.7]">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-[#DDE7F0] text-[var(--color-text-main)] flex justify-center text-center">
        <div className="max-w-[600px] w-full px-6 flex flex-col gap-8 items-center">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1]">
            Let&apos;s Cover Your Next Event Together
          </h2>
          <p className="text-xl opacity-80 font-light">
            Reply directly to our email conversation to include Valeriy&apos;s video support in your proposal, or reach out below.
          </p>
          <Link href="/contact" className="bg-[var(--color-text-main)] text-white px-10 py-4 text-base font-semibold transition-colors hover:bg-[var(--color-accent-hover)] rounded-2xl shadow-sm">
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
