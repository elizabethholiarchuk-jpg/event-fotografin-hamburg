// Photos for the Christmas party pages (/weihnachtsfeier-fotograf-hamburg, /en/christmas-party-photographer-hamburg).
// Example event: Weihnachtsfeier im Fairmont Hotel Vier Jahreszeiten Hamburg.

export interface WeihnachtsfeierPhoto {
  src: string;
  width: number;
  height: number;
  alt: { de: string; en: string };
}

const dir = "/images/weihnachtsfeier";

export const weihnachtsfeierPhotos = {
  tanzflaeche: {
    src: `${dir}/weihnachtsfeier-hamburg-tanzflaeche.webp`,
    width: 2000,
    height: 1334,
    alt: {
      de: "Volle Tanzfläche mit Paaren in Masken und Konfetti im Ballsaal, Weihnachtsfeier im Fairmont Hotel Vier Jahreszeiten",
      en: "Packed dance floor with masked couples and confetti in the ballroom, Christmas party at Fairmont Hotel Vier Jahreszeiten",
    },
  },
  gaesteMasken: {
    src: `${dir}/weihnachtsfeier-hamburg-gaeste-masken.webp`,
    width: 2000,
    height: 1334,
    alt: {
      de: "Gäste in Masken und Abendkleidern im Foyer, Weihnachtsfeier im Fairmont Hotel Vier Jahreszeiten Hamburg",
      en: "Guests in masks and evening dresses in the foyer, Christmas party at Fairmont Hotel Vier Jahreszeiten Hamburg",
    },
  },
  tanzAufstellung: {
    src: `${dir}/weihnachtsfeier-hamburg-tanz-aufstellung.webp`,
    width: 2000,
    height: 1334,
    alt: {
      de: "Gäste in Smoking und Abendkleid stellen sich in zwei Reihen zum Tanz auf, Weihnachtsfeier Hamburg",
      en: "Guests in tuxedos and evening gowns line up in two rows for a dance, Christmas party Hamburg",
    },
  },
  paarTanz: {
    src: `${dir}/weihnachtsfeier-hamburg-paar-tanz.webp`,
    width: 2000,
    height: 1334,
    alt: {
      de: "Paar tanzt in der Mitte des Saals, Gäste in Masken klatschen, Weihnachtsfeier Hamburg",
      en: "A couple dances in the middle of the room while masked guests clap, Christmas party Hamburg",
    },
  },
  stimmung: {
    src: `${dir}/weihnachtsfeier-hamburg-stimmung.webp`,
    width: 2000,
    height: 1334,
    alt: {
      de: "Gäste in Masken tanzen mit erhobenen Armen, Stimmung bei der Weihnachtsfeier in Hamburg",
      en: "Masked guests dancing with their arms up, the mood at a Christmas party in Hamburg",
    },
  },
  paarportraet: {
    src: `${dir}/weihnachtsfeier-hamburg-paarportraet.webp`,
    width: 1600,
    height: 2000,
    alt: {
      de: "Porträt eines Paares in Masken, Weihnachtsfeier Hamburg",
      en: "Portrait of a couple in masks, Christmas party Hamburg",
    },
  },
  koecheSelfie: {
    src: `${dir}/weihnachtsfeier-hamburg-koeche-selfie.webp`,
    width: 2000,
    height: 1334,
    alt: {
      de: "Köche machen ein Selfie mit einem Gast in Maske, Weihnachtsfeier im Fairmont Hotel Vier Jahreszeiten Hamburg",
      en: "Chefs take a selfie with a masked guest, Christmas party at Fairmont Hotel Vier Jahreszeiten Hamburg",
    },
  },
  gaesteSmoking: {
    src: `${dir}/weihnachtsfeier-hamburg-gaeste-smoking.webp`,
    width: 2000,
    height: 1334,
    alt: {
      de: "Gäste in Smoking und Abendkleid im Ballsaal, Weihnachtsfeier Hamburg",
      en: "Guests in black tie in the ballroom, Christmas party Hamburg",
    },
  },
  gaesteFeiern: {
    src: `${dir}/weihnachtsfeier-hamburg-gaeste-feiern.webp`,
    width: 2000,
    height: 1126,
    alt: {
      de: "Zwei Gäste singen und feiern Arm in Arm, Weihnachtsfeier Hamburg",
      en: "Two guests singing and celebrating arm in arm, Christmas party Hamburg",
    },
  },
  bar: {
    src: `${dir}/weihnachtsfeier-hamburg-bar.webp`,
    width: 2000,
    height: 1334,
    alt: {
      de: "Gäste bestellen Getränke an der Bar, Weihnachtsfeier im Fairmont Hotel Vier Jahreszeiten",
      en: "Guests ordering drinks at the bar, Christmas party at Fairmont Hotel Vier Jahreszeiten",
    },
  },
  gruppenfoto: {
    src: `${dir}/weihnachtsfeier-hamburg-gruppenfoto.webp`,
    width: 2000,
    height: 1334,
    alt: {
      de: "Vier Gäste in Anzügen posieren mit Getränken, Weihnachtsfeier Hamburg",
      en: "Four guests in suits posing with drinks, Christmas party Hamburg",
    },
  },
  detailMaske: {
    src: `${dir}/weihnachtsfeier-hamburg-detail-maske.webp`,
    width: 2000,
    height: 1334,
    alt: {
      de: "Detail: Narrenmaske, Sektglas und Konfetti auf dem Parkett, Weihnachtsfeier Hamburg",
      en: "Detail: jester mask, champagne glass and confetti on the parquet floor, Christmas party Hamburg",
    },
  },
  paarBallsaal: {
    src: `${dir}/weihnachtsfeier-hamburg-paar-ballsaal.webp`,
    width: 2000,
    height: 1334,
    alt: {
      de: "Paar tanzt im Ballsaal, Weihnachtsfeier im Fairmont Hotel Vier Jahreszeiten Hamburg",
      en: "A couple dancing in the ballroom, Christmas party at Fairmont Hotel Vier Jahreszeiten Hamburg",
    },
  },
} satisfies Record<string, WeihnachtsfeierPhoto>;
