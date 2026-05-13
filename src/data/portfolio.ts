export interface PortfolioEvent {
    slug: string;
    title: string;
    category: { en: string; de: string };
    count: number;
}

export const portfolioEvents: PortfolioEvent[] = [
    { slug: 'wise-conference-geneva-2024', title: 'WISE Conference der World Federation of United Nations Associations in Genf', category: { en: 'Conference', de: 'Konferenz' }, count: 9 },
    { slug: 'lloyds-register-smm-hamburg-2024', title: "Lloyd's Register auf der SMM (Fachmesse für Schiffbau, Maschinen- und Meerestechnik)", category: { en: 'Trade Show & Booth', de: 'Messe & Stand' }, count: 9 },
    { slug: 'gut-food-festival-2025', title: 'GUT FOOD Festival 2025', category: { en: 'Corporate Event / Festival', de: 'Corporate Event / Festival' }, count: 6 },
    { slug: 'sbrs-shell-tech-center', title: 'Veranstaltung, organisiert von SBRS GmbH im Shell Tech Center', category: { en: 'Corporate Event', de: 'Corporate Event' }, count: 6 },
    { slug: 'forum-junge-anwaltschaft-2025', title: 'FORUM Junge Anwaltschaft 2025 in Düsseldorf', category: { en: 'Conference', de: 'Konferenz' }, count: 6 },
    { slug: 'fems-micro-2025-milan', title: 'FEMS MICRO 2025 in Milan', category: { en: 'Conference', de: 'Konferenz' }, count: 6 },
    { slug: 'aerolight-gmbh', title: 'AEROLIGHT GmbH', category: { en: 'Corporate Event', de: 'Corporate Event' }, count: 6 },
    { slug: 'oyster-bay-venture-capital', title: 'Oyster Bay Venture Capital', category: { en: 'Corporate Event', de: 'Corporate Event' }, count: 6 },
    { slug: 'fems2023-hamburg', title: 'FEMS2023 – der 10. Kongress europäischer Mikrobiolog:innen in Hamburg', category: { en: 'Conference', de: 'Konferenz' }, count: 6 },
    { slug: 'testsieger-food-festival', title: 'Testsieger Food-Festival', category: { en: 'Event', de: 'Event' }, count: 6 },
    { slug: 'young-lawyers-camp-2024', title: 'Young Lawyers Camp 2024', category: { en: 'Workshop / Conference', de: 'Workshop / Conference' }, count: 6 },
    { slug: 'akvantis-aquatech-amsterdam', title: 'AKVANTIS auf der Aquatech-Messe in Amsterdam', category: { en: 'Trade Show & Booth', de: 'Messe & Stand' }, count: 6 },
    { slug: 'plug-and-play-tech-center', title: 'Plug and Play Tech Center', category: { en: 'Corporate Event', de: 'Corporate Event' }, count: 12 },
    { slug: 'immojects-10-years', title: '10 Years IMMOJECTS – Firmenjubiläum / Corporate Celebration', category: { en: 'Corporate Celebration', de: 'Firmenjubiläum / Corporate Celebration' }, count: 6 },
    { slug: 'fems-summer-school-croatia', title: 'Federation of European Microbiological Societies Summer School, Croatia', category: { en: 'Summer School / Conference', de: 'Summer School / Conference' }, count: 6 },
    { slug: 'claas-agritechnica-2023', title: 'CLAAS auf der AGRITECHNICA 2023 in Hannover, Deutschland', category: { en: 'Trade Show', de: 'Messe' }, count: 6 },
    { slug: 'mario-game-junico', title: 'Mario Game mit Junico', category: { en: 'Team Event', de: 'Team Event' }, count: 6 },
    { slug: 'flair-salesforce-hamburg', title: 'Flair bei einem Salesforce-Event in Hamburg', category: { en: 'Trade Show / Corporate Event', de: 'Messe / Corporate Event' }, count: 6 },
    { slug: 'charity-event-kyiv', title: 'Charity event in Kyiv, Ukraine', category: { en: 'Charity Event', de: 'Charity Event' }, count: 3 },
    { slug: 'logisticstech-talks', title: 'LogisticsTech Talks', category: { en: 'Conference / Talks', de: 'Conference / Talks' }, count: 3 }
];
