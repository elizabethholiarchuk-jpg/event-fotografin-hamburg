import { Metadata } from "next";
import Link from "next/link";
import LiteYouTube from "@/components/LiteYouTube";
import { videoOptions, SOCIAL_CLIP_YOUTUBE_ID } from "@/data/videoOptions";

export const metadata: Metadata = {
  title: { absolute: "Trade Show & Event Video Hamburg | Photo and Video from One Team" },
  description:
    "Trade show and event video from Hamburg: a social clip the next day or a full event video with a videographer. One contact for photo and video.",
  openGraph: {
      url: "/en/video-support",
      locale: "en_US",
      alternateLocale: ["de_DE"],
    },
    alternates: {
    canonical: "/en/video-support",
    languages: {
        en: "/en/video-support",
        de: "/video-support",
        'x-default': "/video-support",
      },
  },
};

const VIDEO_EXAMPLES = [
  {
    title: "Lloyd's Register at SMM 2026 — Messe Hamburg",
    category: "Trade Show / Messe",
    description: "Video of the Lloyd's Register stand at the SMM maritime trade fair in Hamburg: booth activity, live product demos and conversations with visitors.",
    embedUrl: "https://www.youtube-nocookie.com/embed/oqufTncvJCM?rel=0",
  },
  {
    title: "GP Solutions at ITB Berlin 2025",
    category: "Trade Show / Messe",
    description: "Video of GP Solutions at ITB Berlin, one of the world's biggest travel trade shows: stand presentations, networking and the feel of an international B2B fair.",
    embedUrl: "https://www.youtube-nocookie.com/embed/5wxq_WBbmew?rel=0",
  },
  {
    title: "The Performance & Style Days 2024 — Hannover",
    category: "Conference & Event",
    description: "Highlight film from The Performance & Style Days in Hannover: stage presentations, audience reactions and the atmosphere across the full programme.",
    embedUrl: "https://www.youtube-nocookie.com/embed/RDZAh_2PDa4?rel=0",
  },
];

export default function VideoSupportPage() {
  const video = videoOptions.en;
  const [socialClip, eventVideo] = video.items;

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 md:pt-44 pb-16 md:pb-24 border-b border-[var(--color-border-hairline)]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="max-w-[900px] flex flex-col gap-6">
            <nav aria-label="Breadcrumb" className="text-[13px] text-[var(--color-text-muted)] font-light">
              <Link href="/en" className="hover:text-[var(--color-accent)] transition-colors">Home</Link>
              <span className="mx-2" aria-hidden="true">›</span>
              <span className="text-[var(--color-text-main)]">Photo & Video</span>
            </nav>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[var(--color-text-main)] leading-[1.08]">
              Photo and Video for Trade Shows and Events
            </h1>

            <p className="text-xl text-[var(--color-text-muted)] font-normal leading-relaxed">
              Photos, a quick social clip or a full event video. For trade shows, conferences and corporate events in Hamburg and across Europe.
            </p>

            <p className="text-[17px] text-[var(--color-text-muted)] leading-[1.85]">
              If you need photo and video, you don&apos;t have to coordinate two suppliers. For event videos I work with videographer <strong>Valeriy Riyako</strong>. We shoot in parallel, and you have one contact.
            </p>

            <div className="flex flex-wrap gap-4 mt-4">
              <Link href="/en/contact" className="bg-[var(--color-accent)] text-white px-8 py-3.5 rounded-2xl text-[15px] font-semibold transition-colors hover:bg-[var(--color-accent-hover)] shadow-sm">
                Ask about photo and video
              </Link>
              <a href="#examples" className="border border-[var(--color-border-hairline)] bg-white/50 text-[var(--color-text-main)] px-8 py-3.5 rounded-2xl text-[15px] font-semibold transition-colors hover:border-[var(--color-text-main)] hover:bg-white">
                View Video Examples
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Video options */}
      <section className="py-16 md:py-24 border-b border-[var(--color-border-hairline)]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col gap-10">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[var(--color-text-main)]">
            Video: two options
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-start">
            <div className="flex flex-col gap-4 p-6 md:p-8 bg-white/60 border border-[var(--color-border-hairline)] rounded-3xl">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-xl font-semibold text-[var(--color-text-main)]">{socialClip.name}</h3>
                <span className="text-[17px] font-semibold text-[var(--color-text-main)] whitespace-nowrap">{socialClip.price}</span>
              </div>
              <p className="text-[16px] text-[var(--color-text-muted)] leading-relaxed">{socialClip.desc}</p>
              <LiteYouTube id={SOCIAL_CLIP_YOUTUBE_ID} title="Social clip example" playLabel="Play video" />
            </div>
            <div className="flex flex-col gap-4 p-6 md:p-8 bg-white/60 border border-[var(--color-border-hairline)] rounded-3xl">
              <div className="flex items-baseline justify-between gap-4">
                <h3 className="text-xl font-semibold text-[var(--color-text-main)]">{eventVideo.name}</h3>
                <span className="text-[17px] font-semibold text-[var(--color-text-main)] whitespace-nowrap">{eventVideo.price}</span>
              </div>
              <p className="text-[16px] text-[var(--color-text-muted)] leading-relaxed">{eventVideo.desc}</p>
              <a href="#examples" className="text-[15px] font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text-main)] transition-colors underline underline-offset-4 w-fit">
                {video.examples}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Working together */}
      <section className="py-16 md:py-24 border-b border-[var(--color-border-hairline)] bg-white/40">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 grid md:grid-cols-12 gap-12 md:gap-16 items-start">
          <div className="md:col-span-5 flex flex-col gap-6">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[var(--color-text-main)]">
              One team, one plan
            </h2>
            <p className="text-[17px] text-[var(--color-text-muted)] leading-[1.85]">
              I take the photos, Valeriy handles the video. We coordinate directly with each other, from planning to delivery.
            </p>
            <div className="p-6 bg-white/80 border border-[var(--color-border-hairline)] rounded-2xl shadow-sm mt-2">
              <div className="flex items-start gap-5">
                <div className="w-20 h-20 rounded-full overflow-hidden shrink-0 border-2 border-[var(--color-border-hairline)]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/images/services/Valeriy.webp"
                    alt="Valeriy Riyako, videographer for events and trade shows"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-[17px] text-[var(--color-text-main)]">Valeriy Riyako</h3>
                  <p className="text-[14px] text-[var(--color-text-muted)] mt-1 font-medium">Videographer for events and trade shows</p>
                </div>
              </div>
              <p className="text-[15px] text-[var(--color-text-muted)] leading-relaxed mt-4">
                Valeriy films B2B video: conference wrap-up films, interviews with executives and stand features at Hamburg Messe and across Germany.
              </p>
            </div>
          </div>

          <div className="md:col-span-7 flex flex-col gap-8">
            <h3 className="text-2xl font-semibold text-[var(--color-text-main)]">
              What you get from it:
            </h3>

            <div className="grid gap-6">
              <div className="p-6 bg-white rounded-2xl border border-[var(--color-border-hairline)] shadow-xs">
                <h4 className="text-lg font-semibold text-[var(--color-text-main)] mb-2">1. One briefing instead of two</h4>
                <p className="text-[16px] text-[var(--color-text-muted)] leading-[1.75]">
                  You send us your timeline, stage agenda and must-have shots once. We split the work between us.
                </p>
              </div>

              <div className="p-6 bg-white rounded-2xl border border-[var(--color-border-hairline)] shadow-xs">
                <h4 className="text-lg font-semibold text-[var(--color-text-main)] mb-2">2. We stay out of each other&apos;s shots</h4>
                <p className="text-[16px] text-[var(--color-text-muted)] leading-[1.75]">
                  A photographer and a videographer who don&apos;t know each other often get in each other&apos;s way during key stage moments. We know how the other works and keep out of each other&apos;s frame, so both get good angles.
                </p>
              </div>

              <div className="p-6 bg-white rounded-2xl border border-[var(--color-border-hairline)] shadow-xs">
                <h4 className="text-lg font-semibold text-[var(--color-text-main)] mb-2">3. Photos and video look alike</h4>
                <p className="text-[16px] text-[var(--color-text-muted)] leading-[1.75]">
                  Our editing is matched, so the photo gallery and the video look like they belong together. That helps on your website, on LinkedIn and in PR.
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
              Event video examples
            </h2>
            <p className="text-[17px] text-[var(--color-text-muted)] leading-relaxed">
              A few videos Valeriy filmed at international trade fairs, conferences and corporate events.
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
              What it can include
            </h2>
            <p className="text-[17px] text-[var(--color-text-muted)] mt-4 leading-relaxed">
              Depending on your event, photo and video coverage can include:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Event highlight films", text: "Summary films of 60–90 seconds for LinkedIn and your marketing." },
              { title: "Trade show and stand videos", text: "Video of your stand at Hamburg Messe, focused on booth activity and conversations with guests." },
              { title: "Speaker and guest interviews", text: "Lavalier and handheld wireless audio for executive soundbites, expert comments and attendee feedback." },
              { title: "Vertical clips for social media", text: "9:16 edits ready to post on LinkedIn, Instagram Reels or YouTube Shorts." },
              { title: "Photo gallery", text: "My complete edited photos in an online gallery, password-protected if you want, within 48 hours." },
              { title: "Usage rights", text: "Usage rights included for all photos and video edits, for PR, your website and internal communication." },
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
            Plan photo and video for your event
          </h2>
          <p className="text-xl opacity-80 font-light">
            Write to me through the contact form. If we&apos;re already in touch by email, just reply there and I&apos;ll add Valeriy&apos;s video to your quote.
          </p>
          <Link href="/en/contact" className="bg-[var(--color-text-main)] text-white px-10 py-4 text-base font-semibold transition-colors hover:bg-[var(--color-accent-hover)] rounded-2xl shadow-sm">
            Contact me
          </Link>
        </div>
      </section>
    </>
  );
}
