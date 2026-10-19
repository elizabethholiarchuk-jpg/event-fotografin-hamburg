import Link from "next/link";
import Image, { getImageProps } from "next/image";
import FaqAccordion from "@/components/FaqAccordion";
import KeyFacts from "@/components/KeyFacts";
import { weihnachtsfeierPhotos as photos, type WeihnachtsfeierPhoto } from "@/data/weihnachtsfeier";

type Lang = "de" | "en";

export interface ChristmasPartyContent {
  h1: string;
  intro: string;
  ctaLabel: string;
  ctaHref: string;
  trustLine: string[];
  whatYouGetTitle: string;
  whatYouGet: string[];
  howItWorksTitle: string;
  howItWorks: string[];
  galleryTitle: string;
  gallerySubtitle: string;
  faq: { q: string; a: string }[];
  finalTitle: string;
  finalText: string;
}

// Warm palette for these two pages only. Light colours and the muted text are the
// site's own colours with the OKLCH hue turned to ~70; the dark ones are kept close
// to neutral so they read as warm black, not brown.
const WARM_THEME = `
:root {
  --page-bg: #F4EFE9;
  --header-bg: #FAF7F2;
  --footer-bg: #FAF7F2;
  --color-accent: #1E1915;
  --color-accent-hover: #2C2823;
  --color-text-main: #1C1713;
  --color-text-muted: #5E5245;
  --color-border-hairline: rgba(30, 25, 21, 0.1);
  --color-dark-bg: #16130F;
}
`;

const DARK_BG = "bg-[#16130F]";
const ON_DARK = "text-[#F5F0E8]";
const ON_DARK_MUTED = "text-[#F5F0E8]/70";
const GOLD_LINE = "block w-12 h-px bg-[#C9A46A]";
// #C9A46A only reaches 2:1 on the light background, so step numbers there use a darker gold (4.3:1)
const GOLD_ON_LIGHT = "text-[#8F6A34]";
const LIGHT_BUTTON =
  "inline-block bg-[#F5F0E8] text-[#1E1915] px-8 py-4 rounded-2xl text-[15px] font-semibold transition-colors hover:bg-white text-center";

function alt(p: WeihnachtsfeierPhoto, lang: Lang) {
  return p.alt[lang];
}

function SectionHeading({ children, dark = false }: { children: React.ReactNode; dark?: boolean }) {
  return (
    <div className="flex flex-col gap-4">
      <h2
        className={`text-3xl md:text-4xl font-semibold tracking-tight text-balance ${
          dark ? ON_DARK : "text-[var(--color-text-main)]"
        }`}
      >
        {children}
      </h2>
      <span className={GOLD_LINE} aria-hidden="true" />
    </div>
  );
}

export default function ChristmasPartyPage({ lang, content }: { lang: Lang; content: ChristmasPartyContent }) {
  const c = content;

  // Hero: art direction — dance line-up on desktop (ceiling at the top leaves room for text), dancing crowd on mobile
  const heroCommon = { alt: alt(photos.stimmung, lang), sizes: "100vw", fetchPriority: "high" as const, loading: "eager" as const };
  const {
    props: { srcSet: desktopSrcSet },
  } = getImageProps({ ...heroCommon, src: photos.tanzAufstellung.src, width: photos.tanzAufstellung.width, height: photos.tanzAufstellung.height });
  const { props: mobileImg } = getImageProps({ ...heroCommon, src: photos.stimmung.src, width: photos.stimmung.width, height: photos.stimmung.height });

  const gallery: { photo: WeihnachtsfeierPhoto; tile: string }[] = [
    { photo: photos.koecheSelfie, tile: "col-span-2 aspect-[3/2] md:aspect-auto md:col-span-4 md:row-span-2" },
    { photo: photos.gaesteSmoking, tile: "aspect-[4/5] md:aspect-auto md:col-span-2 md:row-span-2" },
    { photo: photos.bar, tile: "aspect-[4/5] md:aspect-auto md:col-span-2 md:row-span-2" },
    { photo: photos.gruppenfoto, tile: "col-span-2 aspect-[3/2] md:aspect-auto md:col-span-4 md:row-span-2" },
    { photo: photos.detailMaske, tile: "aspect-[4/5] md:aspect-auto md:col-span-3 md:row-span-2" },
    { photo: photos.paarBallsaal, tile: "aspect-[4/5] md:aspect-auto md:col-span-3 md:row-span-2" },
  ];

  return (
    <>
      <style>{WARM_THEME}</style>

      {/* 1. Hero */}
      <section className="relative w-full h-[calc(100svh-72px)] min-h-[560px] overflow-hidden bg-[#16130F]">
        <picture>
          <source media="(min-width: 768px)" srcSet={desktopSrcSet} sizes="100vw" />
          {/* eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text */}
          <img {...mobileImg} className="absolute inset-0 w-full h-full object-cover" />
        </picture>
        {/* Mobile: text sits at the bottom; desktop: text sits at the top over the ceiling */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/55 to-black/10 md:bg-gradient-to-b md:from-black/70 md:via-black/30 md:to-transparent" />
        <div className="absolute inset-0 hidden md:block bg-gradient-to-r from-black/60 via-black/25 to-transparent" />
        <div className="relative z-10 h-full max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col justify-end md:justify-start pb-12 md:pb-0 md:pt-20 lg:pt-24">
          <div className="max-w-[760px] flex flex-col gap-6">
            <h1 className={`text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.08] text-balance ${ON_DARK}`}>
              {c.h1}
            </h1>
            <p className="text-lg md:text-xl text-[#F5F0E8]/90 leading-relaxed max-w-[60ch]">{c.intro}</p>
            <div className="mt-2">
              <Link href={c.ctaHref} className={LIGHT_BUTTON}>
                {c.ctaLabel}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Trust line */}
      <section className="border-b border-[var(--color-border-hairline)]">
        <ul className="max-w-[1200px] mx-auto px-6 md:px-12 py-6 flex flex-col sm:flex-row sm:flex-wrap sm:justify-center gap-y-1 text-[15px] text-[var(--color-text-muted)] text-center">
          {c.trustLine.map((item, i) => (
            <li key={item}>
              {i > 0 && (
                <span className="hidden sm:inline mx-3" aria-hidden="true">
                  ·
                </span>
              )}
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* 3. Three large photos */}
      <section className={`${DARK_BG} p-2 md:p-3`}>
        <div className="grid grid-cols-2 md:grid-cols-3 md:grid-rows-2 gap-2 md:gap-3 md:aspect-[9/4]">
          <div className="relative col-span-2 md:row-span-2 aspect-[3/2] md:aspect-auto overflow-hidden">
            <Image src={photos.tanzflaeche.src} alt={alt(photos.tanzflaeche, lang)} fill sizes="(min-width: 768px) 66vw, 100vw" className="object-cover" />
          </div>
          <div className="relative aspect-[3/2] md:aspect-auto overflow-hidden">
            <Image src={photos.gaesteMasken.src} alt={alt(photos.gaesteMasken, lang)} fill sizes="(min-width: 768px) 33vw, 50vw" className="object-cover" />
          </div>
          <div className="relative aspect-[3/2] md:aspect-auto overflow-hidden">
            <Image src={photos.paarTanz.src} alt={alt(photos.paarTanz, lang)} fill sizes="(min-width: 768px) 33vw, 50vw" className="object-cover" />
          </div>
        </div>
      </section>

      {/* 4. What you get */}
      <section className="py-16 md:py-24 border-b border-[var(--color-border-hairline)]">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col gap-10">
          <SectionHeading>{c.whatYouGetTitle}</SectionHeading>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {c.whatYouGet.map((item) => (
              <li key={item} className="flex items-start gap-3 text-[var(--color-text-main)] text-base leading-relaxed">
                <span className="mt-2 shrink-0 w-2 h-2 rounded-full bg-[var(--color-accent)]" aria-hidden="true" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 5. How it works */}
      <section className="py-16 md:py-24">
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <div className="flex flex-col gap-10">
            <SectionHeading>{c.howItWorksTitle}</SectionHeading>
            <ol className="flex flex-col gap-8">
              {c.howItWorks.map((step, i) => (
                <li key={i} className="flex gap-6 items-baseline">
                  <span className={`text-5xl font-semibold leading-none tabular-nums ${GOLD_ON_LIGHT}`}>{String(i + 1).padStart(2, "0")}</span>
                  <p className="text-[17px] text-[var(--color-text-main)] leading-relaxed">{step}</p>
                </li>
              ))}
            </ol>
          </div>
          <div className="relative w-full max-w-[480px] md:max-w-none mx-auto aspect-[4/5] overflow-hidden">
            <Image src={photos.paarportraet.src} alt={alt(photos.paarportraet, lang)} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
          </div>
        </div>
      </section>

      {/* 6. Gallery */}
      <section className={`${DARK_BG} py-16 md:py-24`}>
        <div className="max-w-[1200px] mx-auto px-6 md:px-12 flex flex-col gap-10">
          <div className="flex flex-col gap-4">
            <h2 className={`text-3xl md:text-4xl font-semibold tracking-tight text-balance ${ON_DARK}`}>{c.galleryTitle}</h2>
            <span className={GOLD_LINE} aria-hidden="true" />
            <p className="text-lg text-[#C9A46A]">{c.gallerySubtitle}</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-6 md:auto-rows-[150px] lg:auto-rows-[190px] gap-2 md:gap-3">
            {gallery.map(({ photo, tile }) => (
              <div key={photo.src} className={`relative overflow-hidden ${tile}`}>
                <Image
                  src={photo.src}
                  alt={alt(photo, lang)}
                  fill
                  loading="lazy"
                  sizes="(min-width: 1200px) 750px, (min-width: 768px) 66vw, 100vw"
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6b. Key facts */}
      <KeyFacts lang={lang} variant="weihnachtsfeier" />

      {/* 7. FAQ */}
      <section className="py-16 md:py-24 border-b border-[var(--color-border-hairline)]">
        <div className="max-w-[900px] mx-auto px-6 md:px-12 flex flex-col gap-10">
          <SectionHeading>FAQ</SectionHeading>
          <FaqAccordion items={c.faq} />
        </div>
      </section>

      {/* 8. Final CTA */}
      <section className="relative overflow-hidden">
        <Image src={photos.gaesteFeiern.src} alt="" fill sizes="100vw" className="object-cover" />
        <div className="absolute inset-0 bg-[#16130F]/75" />
        <div className="relative z-10 max-w-[700px] mx-auto px-6 py-24 md:py-32 flex flex-col gap-8 items-center text-center">
          <h2 className={`text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1] text-balance ${ON_DARK}`}>{c.finalTitle}</h2>
          <p className={`text-xl font-light ${ON_DARK_MUTED}`}>{c.finalText}</p>
          <Link href={c.ctaHref} className={LIGHT_BUTTON}>
            {c.ctaLabel}
          </Link>
        </div>
      </section>
    </>
  );
}
