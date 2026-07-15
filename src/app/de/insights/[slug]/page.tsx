import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { insightsPosts } from "@/data/insights";
import { buildArticleBreadcrumbJsonLd } from "@/lib/schema";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return insightsPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = insightsPosts.find((p) => p.slug === slug);
  if (!post) return {};
  
  const baseMetadata: Metadata = {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/de/insights/${slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `/de/insights/${slug}`,
      ...(post.coverImage && { images: [{ url: post.coverImage, width: 1200, height: 630, alt: post.title }] }),
    },
  };

  if (post.isPlaceholder) {
    baseMetadata.robots = { index: false, follow: true };
  }

  return baseMetadata;
}

export default async function InsightsPostPage({ params }: Props) {
  const { slug } = await params;
  const post = insightsPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const relatedPosts = insightsPosts.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            buildArticleBreadcrumbJsonLd('de', post.title, slug),
          ),
        }}
      />

      {/* Hero */}
      <section className="pt-32 md:pt-44 pb-16 md:pb-24 border-b border-[var(--color-border-hairline)]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col gap-6">
          <nav aria-label="Breadcrumb" className="text-[13px] text-[var(--color-text-muted)] font-light">
            <Link href="/de" className="hover:text-[var(--color-accent)] transition-colors">Startseite</Link>
            <span className="mx-2" aria-hidden="true">›</span>
            <Link href="/de/insights" className="hover:text-[var(--color-accent)] transition-colors">Insights</Link>
            <span className="mx-2" aria-hidden="true">›</span>
            <span className="text-[var(--color-text-main)]">{post.category}</span>
          </nav>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[var(--color-text-main)] leading-[1.08] max-w-4xl">
            {post.title}
          </h1>
          <p className="text-lg md:text-xl text-[var(--color-text-muted)] max-w-[60ch] font-normal leading-relaxed">
            {post.excerpt}
          </p>
          <div className="flex items-center gap-4 text-[14px] text-[var(--color-text-muted)]">
            <span>Von <Link href="/de/about" className="text-[var(--color-text-main)] font-medium hover:underline underline-offset-2">Liza Holiarchuk</Link></span>
            <span className="w-1 h-1 rounded-full bg-[var(--color-text-muted)] opacity-50" />
            <span>{post.date}</span>
          </div>
        </div>
      </section>

      {/* Cover image */}
      {post.coverImage && (
        <section className="py-10 md:py-14">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12">
            <div className="relative aspect-[16/7] rounded-[20px] overflow-hidden bg-[var(--color-border-hairline)] border border-gray-100 shadow-sm">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover" />
            </div>
          </div>
        </section>
      )}

      {/* Article body placeholder */}
      <section className="py-16 md:py-24 border-b border-[var(--color-border-hairline)]">
        <div className="max-w-[900px] mx-auto px-6 md:px-12 flex flex-col gap-8">
          <p className="text-[17px] text-[var(--color-text-muted)] leading-[1.85]">
            <strong className="text-[var(--color-text-main)]">Demnächst verfügbar.</strong> Der vollständige Artikel wird derzeit vorbereitet. In der Zwischenzeit können Sie sich verwandte Beiträge und Leistungen ansehen.
          </p>

          {/* Internal links */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              { href: "/de/konferenzfotografie-hamburg", label: "Konferenzfotografie Hamburg" },
              { href: "/de/messefotograf-hamburg", label: "Messefotografie Hamburg" },
              { href: "/de/portfolio", label: "Portfolio ansehen" },
              { href: "/de/kontakt", label: "Angebot anfordern" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="border border-[var(--color-border-hairline)] rounded-xl px-5 py-4 text-[15px] font-medium text-[var(--color-text-muted)] hover:text-[var(--color-text-main)] hover:border-[var(--color-text-main)] transition-colors"
              >
                {link.label} →
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Related posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 md:py-24 border-b border-[var(--color-border-hairline)]">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col gap-10">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[var(--color-text-main)]">Weitere Insights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/de/insights/${p.slug}`}
                  className="group flex flex-col gap-3 border border-[var(--color-border-hairline)] rounded-[20px] overflow-hidden hover:border-[var(--color-text-muted)] transition-colors"
                >
                  {p.coverImage && (
                    <div className="relative aspect-[16/9] overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={p.coverImage} alt={p.title} className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-700" loading="lazy" />
                    </div>
                  )}
                  <div className="px-5 pb-5 flex flex-col gap-1">
                    <span className="text-[11px] font-semibold uppercase tracking-widest text-[var(--color-text-muted)]">{p.category}</span>
                    <h3 className="text-base font-semibold text-[var(--color-text-main)] group-hover:underline underline-offset-2 leading-snug">{p.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-24 md:py-32 bg-[#DDE7F0] text-[var(--color-text-main)] flex justify-center text-center">
        <div className="max-w-[700px] w-full px-6 flex flex-col gap-8 items-center">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1]">Planen Sie ein Event?</h2>
          <p className="text-xl opacity-80 font-light">Senden Sie Ihre Anfrage — ich melde mich innerhalb von 24 Stunden.</p>
          <Link href="/de/kontakt" className="bg-[var(--color-text-main)] text-white px-10 py-4 text-base font-semibold transition-colors hover:bg-[var(--color-accent-hover)] rounded-2xl">
            Kontakt aufnehmen
          </Link>
        </div>
      </section>
    </>
  );
}
