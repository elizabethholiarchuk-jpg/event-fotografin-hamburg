import { Metadata } from "next";
import Link from "next/link";
import { insightsPosts } from "@/data/insights";

export const metadata: Metadata = {
  title: "Event Photography Insights",
  description:
    "Practical insights on conference photography, trade show coverage, and event documentation for B2B marketing and communications teams.",
  alternates: { canonical: "/insights" },
  openGraph: {
    title: "Event Photography Insights | Liza Holiarchuk",
    url: "/insights",
  },
};

const categoryColors: Record<string, string> = {
  "Conference Photography": "bg-blue-50 text-blue-700",
  "Trade Show Photography": "bg-amber-50 text-amber-700",
  "Behind the Scenes": "bg-purple-50 text-purple-700",
  "Tips & Workflow": "bg-green-50 text-green-700",
};

export default function InsightsPage() {
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
              { "@type": "ListItem", position: 2, name: "Insights", item: "https://www.event-fotografin-hamburg.de/insights" },
            ],
          }),
        }}
      />

      {/* Hero */}
      <section className="pt-32 md:pt-44 pb-16 md:pb-24 border-b border-[var(--color-border-hairline)]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col gap-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[var(--color-text-main)] leading-[1.08]">
            Insights
          </h1>
          <p className="text-xl text-[var(--color-text-muted)] max-w-[55ch] font-normal leading-relaxed">
            Practical guides on conference photography, trade show coverage, and event documentation — for marketing and communications teams.
          </p>
        </div>
      </section>

      {/* Post grid */}
      <section className="py-16 md:py-24 border-b border-[var(--color-border-hairline)]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {insightsPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/insights/${post.slug}`}
                className="group flex flex-col gap-4 border border-[var(--color-border-hairline)] rounded-2xl overflow-hidden hover:border-[var(--color-text-muted)] transition-colors"
              >
                <div className="relative aspect-[16/9] bg-[var(--color-border-hairline)] overflow-hidden">
                  {post.coverImage ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                      loading="lazy"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-[#DDE7F0]">
                      <span className="text-[var(--color-text-muted)] text-sm font-medium">Insights</span>
                    </div>
                  )}
                </div>
                <div className="px-5 pb-5 flex flex-col gap-2">
                  <span className={`text-[11px] font-semibold uppercase tracking-widest px-2 py-0.5 rounded-full w-fit ${categoryColors[post.category] ?? "bg-gray-50 text-gray-600"}`}>
                    {post.category}
                  </span>
                  <h2 className="text-base font-semibold text-[var(--color-text-main)] leading-snug group-hover:underline underline-offset-2">
                    {post.title}
                  </h2>
                  <p className="text-[13px] text-[var(--color-text-muted)] leading-relaxed">{post.excerpt}</p>
                  <p className="text-[12px] text-[var(--color-text-muted)] mt-1">{post.date}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Internal links to services */}
      <section className="py-16 md:py-20 border-b border-[var(--color-border-hairline)]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col gap-8">
          <h2 className="text-2xl font-semibold text-[var(--color-text-main)]">Explore My Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { href: "/conference-photography-hamburg", label: "Conference Photography" },
              { href: "/trade-show-photography-hamburg", label: "Trade Show Photography" },
              { href: "/corporate-event-photography-hamburg", label: "Corporate Events" },
              { href: "/event-photographer-hamburg", label: "All Services" },
            ].map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="border border-[var(--color-border-hairline)] rounded-xl px-5 py-4 text-[15px] font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text-main)] hover:border-[var(--color-text-muted)] transition-colors"
              >
                {s.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 md:py-32 bg-[#DDE7F0] text-[var(--color-text-main)] flex justify-center text-center">
        <div className="max-w-[600px] w-full px-6 flex flex-col gap-8 items-center">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1]">Have an Event Coming Up?</h2>
          <p className="text-xl opacity-80 font-light">Send your inquiry — I'll reply within 24 hours.</p>
          <Link href="/contact" className="bg-[var(--color-text-main)] text-white px-10 py-4 text-base font-semibold transition-colors hover:bg-[var(--color-accent-hover)] rounded-2xl">
            Contact Me
          </Link>
        </div>
      </section>
    </>
  );
}
