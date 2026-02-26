export interface PortfolioEvent {
    slug: string;
    title: string;
    category: string;
    count: number;
}

export const portfolioEvents: PortfolioEvent[] = [
    { slug: 'wise-conference-geneva-2024', title: 'WISE Conference der World Federation of United Nations Associations in Genf', category: 'Konferenz', count: 9 },
    { slug: 'lloyds-register-smm-hamburg-2024', title: "Lloyd's Register auf der SMM (Fachmesse für Schiffbau, Maschinen- und Meerestechnik)", category: 'Messe & Stand', count: 9 },
    { slug: 'gut-food-festival-2025', title: 'GUT FOOD Festival 2025', category: 'Corporate Event / Festival', count: 6 },
    { slug: 'sbrs-shell-tech-center', title: 'Veranstaltung, organisiert von SBRS GmbH im Shell Tech Center', category: 'Corporate Event', count: 6 },
    { slug: 'forum-junge-anwaltschaft-2025', title: 'FORUM Junge Anwaltschaft 2025 in Düsseldorf', category: 'Konferenz', count: 6 },
    { slug: 'fems-micro-2025-milan', title: 'FEMS MICRO 2025 in Milan', category: 'Konferenz', count: 6 },
    { slug: 'aerolight-gmbh', title: 'AEROLIGHT GmbH', category: 'Corporate Event', count: 6 },
    { slug: 'oyster-bay-venture-capital', title: 'Oyster Bay Venture Capital', category: 'Corporate Event', count: 6 },
    { slug: 'fems2023-hamburg', title: 'FEMS2023 – der 10. Kongress europäischer Mikrobiolog:innen in Hamburg', category: 'Konferenz', count: 6 },
    { slug: 'testsieger-food-festival', title: 'Testsieger Food-Festival', category: 'Event', count: 6 },
    { slug: 'young-lawyers-camp-2024', title: 'Young Lawyers Camp 2024', category: 'Workshop / Conference', count: 6 },
    { slug: 'akvantis-aquatech-amsterdam', title: 'AKVANTIS auf der Aquatech-Messe in Amsterdam', category: 'Messe & Stand', count: 6 },
    { slug: 'plug-and-play-tech-center', title: 'Plug and Play Tech Center', category: 'Corporate Event', count: 12 },
    { slug: 'immojects-10-years', title: '10 Years IMMOJECTS – Firmenjubiläum / Corporate Celebration', category: 'Corporate Celebration', count: 6 },
    { slug: 'fems-summer-school-croatia', title: 'Federation of European Microbiological Societies Summer School, Croatia', category: 'Summer School / Conference', count: 6 },
    { slug: 'claas-agritechnica-2023', title: 'CLAAS auf der AGRITECHNICA 2023 in Hannover, Deutschland', category: 'Messe', count: 6 },
    { slug: 'mario-game-junico', title: 'Mario Game mit Junico', category: 'Team Event', count: 6 },
    { slug: 'flair-salesforce-hamburg', title: 'Flair bei einem Salesforce-Event in Hamburg', category: 'Messe / Corporate Event', count: 6 },
    { slug: 'charity-event-kyiv', title: 'Charity event in Kyiv, Ukraine', category: 'Charity Event', count: 3 },
    { slug: 'logisticstech-talks', title: 'LogisticsTech Talks', category: 'Conference / Talks', count: 3 }
];
