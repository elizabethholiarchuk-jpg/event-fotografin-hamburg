import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { insightsPosts } from "@/data/insights";

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
  return {
    title: `${post.title} | Liza Holiarchuk`,
    description: post.excerpt,
    alternates: { canonical: `/insights/${slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://lizaholiarchuk.com/insights/${slug}`,
      ...(post.coverImage && { images: [{ url: post.coverImage, width: 1200, height: 630, alt: post.title }] }),
    },
  };
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
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: "https://lizaholiarchuk.com" },
              { "@type": "ListItem", position: 2, name: "Insights", item: "https://lizaholiarchuk.com/insights" },
              { "@type": "ListItem", position: 3, name: post.title, item: `https://lizaholiarchuk.com/insights/${slug}` },
            ],
          }),
        }}
      />

      {/* Hero */}
      <section className="pt-32 md:pt-44 pb-12 border-b border-[var(--color-border-hairline)]">
        <div className="max-w-[900px] mx-auto px-6 md:px-12 flex flex-col gap-6">
          <div className="flex items-center gap-2 text-sm text-[var(--color-text-muted)]">
            <Link href="/insights" className="hover:text-[var(--color-text-main)] transition-colors">Insights</Link>
            <span>/</span>
            <span>{post.category}</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-[var(--color-text-main)] leading-[1.1]">
            {post.title}
          </h1>
          <p className="text-lg text-[var(--color-text-muted)] leading-relaxed">{post.excerpt}</p>
          <p className="text-sm text-[var(--color-text-muted)]">{post.date}</p>
        </div>
      </section>

      {/* Cover image */}
      {post.coverImage && (
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 py-10">
          <div className="relative aspect-[16/7] rounded-2xl overflow-hidden bg-[var(--color-border-hairline)]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={post.coverImage} alt={post.title} className="w-full h-full object-cover" />
          </div>
        </div>
      )}

      {/* Article body placeholder */}
      <article className="max-w-[900px] mx-auto px-6 md:px-12 py-12 flex flex-col gap-8 text-[17px] text-[var(--color-text-muted)] leading-[1.85]">
        <p>
          <strong className="text-[var(--color-text-main)]">Coming soon.</strong> Full article content is being prepared. In the meantime, explore related case studies and service pages below.
        </p>

        {/* Internal links */}
        <div className="flex flex-col gap-4 mt-4 p-6 border border-[var(--color-border-hairline)] rounded-2xl">
          <p className="text-base font-semibold text-[var(--color-text-main)]">Explore Related</p>
          <ul className="flex flex-col gap-2">
            <li>
              <Link href="/conference-photography-hamburg" className="text-[var(--color-accent)] hover:underline underline-offset-2 text-[15px]">
                Conference Photography Hamburg →
              </Link>
            </li>
            <li>
              <Link href="/trade-show-photography-hamburg" className="text-[var(--color-accent)] hover:underline underline-offset-2 text-[15px]">
                Trade Show Photography Hamburg →
              </Link>
            </li>
            <li>
              <Link href="/portfolio" className="text-[var(--color-accent)] hover:underline underline-offset-2 text-[15px]">
                View Portfolio →
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-[var(--color-accent)] hover:underline underline-offset-2 text-[15px]">
                Request a Quote →
              </Link>
            </li>
          </ul>
        </div>
      </article>

      {/* Related posts */}
      {relatedPosts.length > 0 && (
        <section className="py-16 md:py-24 border-t border-[var(--color-border-hairline)]">
          <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col gap-8">
            <h2 className="text-2xl font-semibold text-[var(--color-text-main)]">More Insights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.map((p) => (
                <Link
                  key={p.slug}
                  href={`/insights/${p.slug}`}
                  className="group flex flex-col gap-3 border border-[var(--color-border-hairline)] rounded-2xl overflow-hidden hover:border-[var(--color-text-muted)] transition-colors"
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
