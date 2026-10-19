// Video options shown on the pricing pages and on /video-support.
// Keep the wording identical in both places — edit it only here.

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
        price: "450 €",
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
        price: "€450",
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

// Social clip example on /video-support
export const SOCIAL_CLIP_YOUTUBE_ID = "dMZ-DGAidJs";
