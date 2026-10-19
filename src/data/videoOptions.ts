// Video options shown on the pricing pages and on /video-support.
// Keep the wording identical in both places — edit it only here.
// The prices below are also used in FAQ answers (Corporate, Weihnachtsfeier, …).

export const SOCIAL_CLIP_PRICE: Record<"de" | "en", string> = {
  de: "450 €",
  en: "€450",
};

export interface VideoOption {
  name: string;
  price: string;
  desc: string;
}

export const videoOptions: Record<"de" | "en", { title: string; items: VideoOption[]; examples: string }> = {
  de: {
    title: "Video",
    items: [
      {
        name: "Social-Clip",
        price: SOCIAL_CLIP_PRICE.de,
        desc: "Ein Clip von ca. 30 Sekunden für LinkedIn oder Instagram. Ich drehe ihn mit dem Smartphone parallel zu den Fotos und schneide ihn selbst. Sie bekommen ihn am nächsten Tag. Ideal, wenn Sie schnell etwas posten möchten.",
      },
      {
        name: "Event-Video",
        price: "Preis nach Projekt",
        desc: "Professionelles Video mit einem erfahrenen Videografen aus meinem Team: Highlight-Film, Interviews am Stand oder Aftermovie. Wir drehen parallel, Sie haben einen Ansprechpartner für Foto und Video. Lieferzeit nach Absprache.",
      },
    ],
    examples: "Beispiele ansehen",
  },
  en: {
    title: "Video",
    items: [
      {
        name: "Social clip",
        price: SOCIAL_CLIP_PRICE.en,
        desc: "One clip of about 30 seconds for LinkedIn or Instagram. I film it on my phone alongside the photos and edit it myself. You get it the next day. Good when you need something to post fast.",
      },
      {
        name: "Event video",
        price: "Quoted per project",
        desc: "Professional video with an experienced videographer from my team: highlight film, stand interviews or an aftermovie. We shoot in parallel, and you have one contact for photo and video. Delivery time agreed per project.",
      },
    ],
    examples: "See examples",
  },
};

// FAQ answer about video, shared by the Corporate pages (DE/EN)
export const videoFaq: Record<"de" | "en", { q: string; a: string; link: { href: string; label: string } }> = {
  de: {
    q: "Bieten Sie neben Fotos auch Video an?",
    a: `Ja, in zwei Varianten. Social-Clip: ein Clip von ca. 30 Sekunden für LinkedIn oder Instagram, mit dem Smartphone gedreht, am nächsten Tag geliefert, ${SOCIAL_CLIP_PRICE.de}. Event-Video: mit einem Videografen aus meinem Team, Preis und Lieferzeit nach Projekt.`,
    link: { href: "/video-support", label: "Video-Beispiele ansehen" },
  },
  en: {
    q: "Do you offer video as well as photos?",
    a: `Yes, in two options. Social clip: one clip of about 30 seconds for LinkedIn or Instagram, filmed on my phone and delivered the next day, ${SOCIAL_CLIP_PRICE.en}. Event video: with a videographer from my team, price and delivery time agreed per project.`,
    link: { href: "/en/video-support", label: "See video examples" },
  },
};

// Social clip example on /video-support
export const SOCIAL_CLIP_YOUTUBE_ID = "dMZ-DGAidJs";
