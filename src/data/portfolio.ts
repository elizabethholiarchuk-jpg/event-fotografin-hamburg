export interface PortfolioEvent {
    slug: string;
    /** Legacy single-language title — used as fallback if title_i18n is absent */
    title: string;
    category: { en: string; de: string };
    count: number;
    /** Per-language title */
    title_i18n?: { en: string; de: string };
    /** City + country */
    location_i18n?: { en: string; de: string };
    /** Venue name(s) */
    venue_i18n?: { en: string; de: string };
    /** Short SEO-optimised one-liner */
    oneLiner_i18n?: { en: string; de: string };
}

export const portfolioEvents: PortfolioEvent[] = [
    {
        slug: 'wise-conference-geneva-2024',
        title: 'WISE Conference der World Federation of United Nations Associations in Genf',
        title_i18n: {
            en: 'WISE Conference — World Federation of United Nations Associations',
            de: 'WISE Conference — World Federation of United Nations Associations',
        },
        location_i18n: { en: 'Geneva, Switzerland', de: 'Genf, Schweiz' },
        venue_i18n: { en: 'UN Office at Geneva (UNOG) · CICG', de: 'UN Office at Geneva (UNOG) · CICG' },
        category: { en: 'Conference', de: 'Konferenz' },
        oneLiner_i18n: {
            en: 'Conference photography at the UN Office in Geneva for WFUNA\'s international WISE summit.',
            de: 'Konferenzfotografie im UN Office Genf für den internationalen WISE-Gipfel der WFUNA.',
        },
        count: 9,
    },
    {
        slug: 'lloyds-register-smm-hamburg-2024',
        title: "Lloyd's Register auf der SMM (Fachmesse für Schiffbau, Maschinen- und Meerestechnik)",
        title_i18n: {
            en: "Lloyd's Register at SMM Hamburg",
            de: "Lloyd's Register auf der SMM Hamburg",
        },
        location_i18n: { en: 'Hamburg, Germany', de: 'Hamburg, Deutschland' },
        venue_i18n: { en: 'Hamburg Messe und Congress', de: 'Hamburg Messe und Congress' },
        category: { en: 'Trade Show', de: 'Messe' },
        oneLiner_i18n: {
            en: 'Trade show photography at SMM — the world\'s leading maritime trade fair.',
            de: 'Messefotografie auf der SMM — der weltweit führenden Fachmesse für die maritime Industrie.',
        },
        count: 9,
    },
    {
        slug: 'gut-food-festival-2025',
        title: 'GUT FOOD Festival 2025',
        title_i18n: {
            en: 'GUT FOOD Festival 2025',
            de: 'GUT FOOD Festival 2025',
        },
        location_i18n: { en: 'Hamburg Region, Germany', de: 'Hamburg, Deutschland' },
        venue_i18n: { en: 'Gut Wulksfelde', de: 'Gut Wulksfelde' },
        category: { en: 'Festival', de: 'Festival' },
        oneLiner_i18n: {
            en: 'Festival photography at Gut Wulksfelde — sustainable food, live music and community.',
            de: 'Festivaldokumentation auf Gut Wulksfelde — nachhaltige Ernährung, Live-Musik und Community.',
        },
        count: 6,
    },
    {
        slug: 'sbrs-shell-tech-center',
        title: 'Veranstaltung, organisiert von SBRS GmbH im Shell Tech Center',
        title_i18n: {
            en: 'Shell Global Solutions Event — SBRS GmbH',
            de: 'Shell Global Solutions Event — SBRS GmbH',
        },
        location_i18n: { en: 'Hamburg, Germany', de: 'Hamburg, Deutschland' },
        venue_i18n: { en: 'Shell Technology Centre Hamburg', de: 'Shell Technology Centre Hamburg' },
        category: { en: 'Corporate Event', de: 'Corporate Event' },
        oneLiner_i18n: {
            en: 'Corporate event photography at the Shell Technology Centre Hamburg.',
            de: 'Corporate-Event-Fotografie im Shell Technology Centre Hamburg.',
        },
        count: 6,
    },
    {
        slug: 'forum-junge-anwaltschaft-2025',
        title: 'FORUM Junge Anwaltschaft 2025 in Düsseldorf',
        title_i18n: {
            en: 'FORUM Junge Anwaltschaft 2025',
            de: 'FORUM Junge Anwaltschaft 2025',
        },
        location_i18n: { en: 'Düsseldorf, Germany', de: 'Düsseldorf, Deutschland' },
        category: { en: 'Conference', de: 'Konferenz' },
        oneLiner_i18n: {
            en: 'Conference photography for the German Bar Association\'s Young Lawyers Forum.',
            de: 'Konferenzfotografie beim Forum Junge Anwaltschaft des Deutschen Anwaltvereins.',
        },
        count: 6,
    },
    {
        slug: 'fems-micro-2025-milan',
        title: 'FEMS MICRO 2025 in Milan',
        title_i18n: {
            en: 'FEMS MICRO 2025',
            de: 'FEMS MICRO 2025',
        },
        location_i18n: { en: 'Milan, Italy', de: 'Mailand, Italien' },
        venue_i18n: { en: 'Fiera Milano City', de: 'Fiera Milano City' },
        category: { en: 'Conference', de: 'Konferenz' },
        oneLiner_i18n: {
            en: 'Conference photography at FEMS MICRO 2025 — microbiology congress at Fiera Milano.',
            de: 'Konferenzfotografie bei FEMS MICRO 2025 — Mikrobiologie-Kongress auf der Fiera Milano.',
        },
        count: 6,
    },
    {
        slug: 'aerolight-gmbh',
        title: 'AEROLIGHT GmbH',
        title_i18n: {
            en: 'AEROLIGHT GmbH Corporate Event',
            de: 'AEROLIGHT GmbH Corporate Event',
        },
        location_i18n: { en: 'Hamburg, Germany', de: 'Hamburg, Deutschland' },
        category: { en: 'Corporate Event', de: 'Corporate Event' },
        oneLiner_i18n: {
            en: 'Corporate event photography for AEROLIGHT GmbH in Hamburg.',
            de: 'Corporate-Event-Fotografie für die AEROLIGHT GmbH in Hamburg.',
        },
        count: 6,
    },
    {
        slug: 'oyster-bay-venture-capital',
        title: 'Oyster Bay Venture Capital',
        title_i18n: {
            en: 'Oyster Bay Venture Capital Event',
            de: 'Oyster Bay Venture Capital Event',
        },
        location_i18n: { en: 'Hamburg, Germany', de: 'Hamburg, Deutschland' },
        venue_i18n: { en: 'foodlab Hamburg', de: 'foodlab Hamburg' },
        category: { en: 'Corporate Event', de: 'Corporate Event' },
        oneLiner_i18n: {
            en: 'Investor event photography for Oyster Bay Venture Capital at foodlab Hamburg.',
            de: 'Investor-Event-Fotografie für Oyster Bay Venture Capital im foodlab Hamburg.',
        },
        count: 6,
    },
    {
        slug: 'fems2023-hamburg',
        title: 'FEMS2023 – der 10. Kongress europäischer Mikrobiolog:innen in Hamburg',
        title_i18n: {
            en: 'FEMS 2023 — 10th Congress of European Microbiologists',
            de: 'FEMS 2023 — 10. Kongress europäischer Mikrobiolog:innen',
        },
        location_i18n: { en: 'Hamburg, Germany', de: 'Hamburg, Deutschland' },
        venue_i18n: { en: 'Hamburg Messe und Congress', de: 'Hamburg Messe und Congress' },
        category: { en: 'Conference', de: 'Konferenz' },
        oneLiner_i18n: {
            en: 'Conference photography at FEMS 2023 — the 10th European microbiology congress in Hamburg.',
            de: 'Konferenzfotografie bei FEMS 2023 — dem 10. europäischen Mikrobiologie-Kongress in Hamburg.',
        },
        count: 6,
    },
    {
        slug: 'testsieger-food-festival',
        title: 'Testsieger Food-Festival',
        title_i18n: {
            en: 'Testsieger Food Festival (Genuss-Guide Hamburg)',
            de: 'Testsieger Food-Festival (Genuss-Guide Hamburg)',
        },
        location_i18n: { en: 'Hamburg, Germany', de: 'Hamburg, Deutschland' },
        venue_i18n: { en: 'Fabrik Ottensen', de: 'Fabrik Ottensen' },
        category: { en: 'Festival', de: 'Festival' },
        oneLiner_i18n: {
            en: 'Food festival photography at Fabrik Ottensen for Hamburg\'s Genuss-Guide Testsieger event.',
            de: 'Food-Festival-Fotografie in der Fabrik Ottensen für das Genuss-Guide Testsieger-Event.',
        },
        count: 6,
    },
    {
        slug: 'young-lawyers-camp-2024',
        title: 'Young Lawyers Camp 2024',
        title_i18n: {
            en: 'Young Lawyers Camp 2024 (DAV)',
            de: 'Young Lawyers Camp 2024 (DAV)',
        },
        location_i18n: { en: 'Hamburg, Germany', de: 'Hamburg, Deutschland' },
        venue_i18n: { en: 'Hamburger Ding', de: 'Hamburger Ding' },
        category: { en: 'Conference / Community Event', de: 'Konferenz / Community Event' },
        oneLiner_i18n: {
            en: 'Event photography for the Young Lawyers Camp by the German Bar Association in Hamburg.',
            de: 'Event-Fotografie beim Young Lawyers Camp des Deutschen Anwaltvereins in Hamburg.',
        },
        count: 6,
    },
    {
        slug: 'akvantis-aquatech-amsterdam',
        title: 'AKVANTIS auf der Aquatech-Messe in Amsterdam',
        title_i18n: {
            en: 'AKVANTIS at Aquatech Amsterdam',
            de: 'AKVANTIS auf der Aquatech Amsterdam',
        },
        location_i18n: { en: 'Amsterdam, Netherlands', de: 'Amsterdam, Niederlande' },
        category: { en: 'Trade Show', de: 'Messe' },
        oneLiner_i18n: {
            en: 'Trade show photography for AKVANTIS at Aquatech — the international water technology expo.',
            de: 'Messefotografie für AKVANTIS auf der Aquatech — der internationalen Wassertechnik-Messe.',
        },
        count: 6,
    },
    {
        slug: 'plug-and-play-tech-center',
        title: 'Plug and Play Tech Center',
        title_i18n: {
            en: 'Plug and Play Tech Center Hamburg Events',
            de: 'Plug and Play Tech Center Hamburg Events',
        },
        location_i18n: { en: 'Hamburg, Germany', de: 'Hamburg, Deutschland' },
        venue_i18n: { en: 'Factory Hammerbrooklyn · ASKÅ', de: 'Factory Hammerbrooklyn · ASKÅ' },
        category: { en: 'Corporate Event', de: 'Corporate Event' },
        oneLiner_i18n: {
            en: 'Ongoing event photography for Plug and Play Tech Center Hamburg\'s startup and innovation events.',
            de: 'Laufende Event-Fotografie für die Startup- und Innovationsveranstaltungen des Plug and Play Tech Center Hamburg.',
        },
        count: 12,
    },
    {
        slug: 'immojects-10-years',
        title: '10 Years IMMOJECTS – Firmenjubiläum / Corporate Celebration',
        title_i18n: {
            en: '10 Years IMMOJECTS — Company Anniversary',
            de: '10 Jahre IMMOJECTS — Firmenjubiläum',
        },
        location_i18n: { en: 'Hamburg, Germany', de: 'Hamburg, Deutschland' },
        category: { en: 'Corporate Celebration', de: 'Firmenjubiläum' },
        oneLiner_i18n: {
            en: 'Corporate anniversary photography for IMMOJECTS\' 10-year celebration in Hamburg.',
            de: 'Fotografie beim 10-jährigen Firmenjubiläum von IMMOJECTS in Hamburg.',
        },
        count: 6,
    },
    {
        slug: 'fems-summer-school-croatia',
        title: 'Federation of European Microbiological Societies Summer School, Croatia',
        title_i18n: {
            en: 'FEMS Summer School for Postdocs',
            de: 'FEMS Summer School für Postdocs',
        },
        location_i18n: { en: 'Split, Croatia', de: 'Split, Kroatien' },
        venue_i18n: { en: 'MedILS', de: 'MedILS' },
        category: { en: 'Summer School / Conference', de: 'Summer School / Konferenz' },
        oneLiner_i18n: {
            en: 'Event photography at the FEMS postdoc summer school at MedILS in Split, Croatia.',
            de: 'Event-Fotografie bei der FEMS Postdoc-Summer School im MedILS in Split, Kroatien.',
        },
        count: 6,
    },
    {
        slug: 'claas-agritechnica-2023',
        title: 'CLAAS auf der AGRITECHNICA 2023 in Hannover, Deutschland',
        title_i18n: {
            en: 'CLAAS at AGRITECHNICA 2023',
            de: 'CLAAS auf der AGRITECHNICA 2023',
        },
        location_i18n: { en: 'Hanover, Germany', de: 'Hannover, Deutschland' },
        category: { en: 'Trade Show', de: 'Messe' },
        oneLiner_i18n: {
            en: 'Trade show photography for CLAAS at AGRITECHNICA — the world\'s leading agricultural machinery fair.',
            de: 'Messefotografie für CLAAS auf der AGRITECHNICA — der weltweit führenden Landmaschinenmesse.',
        },
        count: 6,
    },
    {
        slug: 'mario-game-junico',
        title: 'Mario Game mit Junico',
        title_i18n: {
            en: 'Mario Game Activation — Junico GmbH',
            de: 'Mario Game Aktivierung — Junico GmbH',
        },
        location_i18n: { en: 'Hamburg, Germany', de: 'Hamburg, Deutschland' },
        venue_i18n: { en: 'Factory Hammerbrooklyn', de: 'Factory Hammerbrooklyn' },
        category: { en: 'Brand Activation', de: 'Brand Activation' },
        oneLiner_i18n: {
            en: 'Brand activation photography for Junico\'s Mario Game event at Factory Hammerbrooklyn.',
            de: 'Brand-Activation-Fotografie für Junico\'s Mario Game-Event in der Factory Hammerbrooklyn.',
        },
        count: 6,
    },
    {
        slug: 'flair-salesforce-hamburg',
        title: 'Flair bei einem Salesforce-Event in Hamburg',
        title_i18n: {
            en: 'Salesforce World Tour Hamburg 2023 — Flair',
            de: 'Salesforce World Tour Hamburg 2023 — Flair',
        },
        location_i18n: { en: 'Hamburg, Germany', de: 'Hamburg, Deutschland' },
        venue_i18n: { en: 'Schuppen 52', de: 'Schuppen 52' },
        category: { en: 'Conference', de: 'Konferenz' },
        oneLiner_i18n: {
            en: 'Conference photography for Flair at Salesforce World Tour Hamburg at Schuppen 52.',
            de: 'Konferenzfotografie für Flair auf der Salesforce World Tour Hamburg im Schuppen 52.',
        },
        count: 6,
    },
    {
        slug: 'charity-event-kyiv',
        title: 'Charity event in Kyiv, Ukraine',
        title_i18n: {
            en: 'Charity Event in Kyiv',
            de: 'Charity-Event in Kyiv',
        },
        location_i18n: { en: 'Kyiv, Ukraine', de: 'Kyiv, Ukraine' },
        category: { en: 'Charity Event', de: 'Charity Event' },
        oneLiner_i18n: {
            en: 'Charity event photography in Kyiv, Ukraine.',
            de: 'Charity-Event-Fotografie in Kyiv, Ukraine.',
        },
        count: 3,
    },
    {
        slug: 'logisticstech-talks',
        title: 'LogisticsTech Talks',
        title_i18n: {
            en: 'LogisticsTech Talks',
            de: 'LogisticsTech Talks',
        },
        location_i18n: { en: 'Hamburg, Germany', de: 'Hamburg, Deutschland' },
        category: { en: 'Conference / Talks', de: 'Konferenz / Talks' },
        oneLiner_i18n: {
            en: 'Event photography at LogisticsTech Talks in Hamburg.',
            de: 'Event-Fotografie bei den LogisticsTech Talks in Hamburg.',
        },
        count: 3,
    },
];
