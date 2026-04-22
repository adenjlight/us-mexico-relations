export interface Podcast {
  title: string;
  description?: string;
  descriptionParagraphs?: string[];
  citations?: Array<string | { label: string; url: string }>;
  author?: string;
  /*
   * HOW TO ADD AUDIO:
   * 1. Drop your MP3 file into the `public/audio/` folder.
   *    Example: public/audio/northeast.mp3
   * 2. Set audioUrl to the path below, e.g. '/audio/northeast.mp3'
   * 3. Leave audioUrl as null until the file is ready — the player
   *    will show a "coming soon" state instead of a broken player.
   */
  audioUrl: string | null;
}

const podcasts: Record<string, Podcast> = {
  northwest: {
    title: 'Migration',
    description: 'In this podcast, I discuss the issue of "forced immobility" in Tijuana. Migrants wait indefinitely in the border city to seek asylum in the United States\', whose immigration policy limits the amount of people who can apply on a daily basis. Follow along to hear about the challenges these migrants face with housing and basic needs.',
    author: 'Nico Schwartz',
    audioUrl: '/Audio/Schwartz Podcast U.S. MX Final.mp3',
  },
  northeast: {
    title: 'Northeastern Mexican Governors\' Shared Strategy',
    description: 'This episode explores how three governors in northern Mexico, Américo Villarreal (Tamaulipas), Manolo Jiménez (Coahuila), and Samuel García (Nuevo León), are dealing with the US border in ways that challenge traditional narratives. Despite representing different political parties, all three have adopted a pragmatic approach focused on protecting trade, managing migration pressures, and cooperating directly with Texas officials. Drawing on recent migration crises, trade data, and state-level agreements, the episode argues that a new regional governance model is emerging along the U.S-Mexico border. This model contrasts with Texas Governor Greg Abbott\'s more confrontational strategy, highlighting how economic interdependence is driving cross-border cooperation. Ultimately, the episode shows that the future of border policy may be shaped less by national governments and more by local actors responding to shared economic realities.',
    citations: [
      { label: 'Mexico Business News - Critical Success Factors Behind Nuevo León\'s Nearshoring Success', url: 'https://mexicobusiness.news/trade-and-investment/news/critical-success-factors-behind-nuevo-leons-nearshoring-success' },
      { label: 'The Nearshore Company - USMCA Nearshoring in 2025', url: 'https://www.thenearshorecompany.com/usmca-nearshoring-political-developments/' },
      { label: 'Mexico Business News - Nuevo León: Premier Nearshoring Destination', url: 'https://mexicobusiness.news/trade-and-investment/news/nuevo-leon-premier-nearshoring-destination' },
      { label: 'Latin Times - Overcrowded and Overwhelmed: Reynosa Migrant Shelter', url: 'https://www.latintimes.com/asylum-seekers-deportation-border-mexico-reynosa-migrant-shelters-574697' },
      { label: 'Texas Observer - We Are People Too: Scenes of Migration in Matamoros and Reynosa', url: 'https://www.texasobserver.org/asylum-matamoros-reynosa-executive-order-cbpone/' },
      { label: 'Eagle Pass Business Journal - Unprecedented Migrant Surge at Eagle Pass', url: 'https://www.epbusinessjournal.com/2023/12/unprecedented-migrant-surge-at-eagle-pass-strains-local-economy-and-resources/' },
      { label: 'Mexico News Daily - US authorities close bridge at Piedras Negras–Eagle Pass', url: 'https://mexiconewsdaily.com/news/us-authorities-close-bridge-at-piedras-negras-eagle-pass-crossing/' },
      { label: 'Center for Immigration Studies - Texas Governor\'s Unprecedented Trade Disruption Strategy', url: 'https://cis.org/Bensman/Texas-Governors-Unprecedented-Trade-Disruption-Strategy-Yields-First-Fruit' },
      { label: 'Texas Tribune - Abbott ends inspections that clogged commercial traffic', url: 'https://www.texastribune.org/2022/04/15/texas-border-abbott-vehicle-inspections/' },
      { label: 'Center for Immigration Studies - Texas Governor Abbott Ends Trade Disruption on Brownsville Bridge', url: 'https://cis.org/Bensman/Texas-Governor-Abbott-Ends-Trade-Disruption-Brownsville-Bridge' },
    ],
    author: 'Christopher Duarte',
    audioUrl: '/Audio/Duarte- Northeastern Mexican Governers Shared Stratergy.mp3',
  },
  west: {
    title: 'Cartel Fragmentation and Violence',
    description: 'This episode examines how cartel fragmentation has become a major driver of violence and displacement across Mexico\'s Pacific states.',
    descriptionParagraphs: [
      'This podcast examines how cartel fragmentation has become a major driver of violence and displacement across Mexico\'s Pacific states—Jalisco, Michoacán, Guerrero, and Colima. In the form of a narrative explanation the episode breaks down how large criminal organizations such as CJNG, Los Viagras, and La Familia Michoacana have splintered into smaller, competing factions. These fractures intensify territorial warfare, expand extortion economies, and increase forced recruitment, creating conditions that push thousands of families to flee their homes.',
      'The podcast also highlights CJNG\'s unprecedented national expansion, Los Viagras\' transformation from vigilante origins into a powerful criminal actor, and La Familia Michoacana\'s continued influence through its splinter groups throughout the region. It also explores how government "kingpin" strategies, leadership losses, and shifting alliances accelerate fragmentation rather than contain it. As the episode shows, displacement in Pacific Mexico is increasingly tied to security threats, not just economic pressures—making cartel fragmentation a central force behind contemporary migration patterns.',
    ],
    citations: [
      'https://www.cambridge.org/core/services/aop-cambridge-core/content/view/722B5652298B054DE372ECC2149219A7/S2049847025000044a.pdf/criminal-fragmentation-in-mexico.pdf',
      'https://www.latintimes.com/jalisco-new-generation-cartel-becomes-first-cartel-history-have-presence-all-32-mexican-states-585254',
      'https://www.dni.gov/nctc/terrorist_groups/cjng.html',
      'https://www.wilsoncenter.org/article/killing-el-mencho-implications-cartels-and-mexicos-security',
      'https://www.borderlandbeat.com/2025/10/the-viagras-sierra-santana-brothers.html',
      'https://www.cfr.org/global-conflict-tracker/conflict/criminal-violence-mexico',
      'https://smallwarsjournal.com/2026/02/16/transnational-organized-crime-in-mexico-continuity-change-and-uncertainty-under-the-sheinbaum-administration-part-i/',
    ],
    author: 'Sydney Sharpley',
    audioUrl: '/Audio/Sharpley Podcast.mp3',
  },
  'north-central': {
    title: 'Placeholder Podcast Title',
    audioUrl: null,
  },
  southwest: {
    title: 'Placeholder Podcast Title',
    audioUrl: null,
  },
  southeast: {
    title: 'Placeholder Podcast Title',
    audioUrl: null,
  },
};

export function getPodcastBySlug(slug: string): Podcast | undefined {
  return podcasts[slug];
}

export function getPodcastsByAuthor(authorName: string): Array<{ regionSlug: string; podcast: Podcast }> {
  return Object.entries(podcasts)
    .filter(([, p]) => p.author === authorName)
    .map(([regionSlug, podcast]) => ({ regionSlug, podcast }));
}
