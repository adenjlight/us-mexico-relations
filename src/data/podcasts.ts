export interface Podcast {
  title: string;
  description: string;
  descriptionParagraphs?: string[];
  citations?: string[];
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
    title: 'Placeholder Podcast Title',
    description: 'A conversation about how export-processing zones transformed Baja California and Sonora — and what that means for workers and border communities on both sides.',
    author: 'Nico Schwartz',
    audioUrl: '/Audio/Schwartz Podcast U.S. MX Final.mp3',
  },
  northeast: {
    title: 'Placeholder Podcast Title',
    description: 'How Nuevo León became Mexico\'s industrial powerhouse, and why the ties between Monterrey and Texas cities like Laredo and McAllen are unlike anywhere else on the border.',
    audioUrl: null,
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
    description: 'The North Central plateau has been a corridor for migration for over a century. We trace the routes — economic, cultural, and physical — that connect Chihuahua to the United States.',
    audioUrl: null,
  },
  southwest: {
    title: 'Placeholder Podcast Title',
    description: 'Millions of Oaxacans live and work in the United States, many of them speaking indigenous languages rather than Spanish. This episode examines their unique place in the migration story.',
    audioUrl: null,
  },
  southeast: {
    title: 'Placeholder Podcast Title',
    description: 'Cancún and the Riviera Maya are economic engines built largely on American tourism. But behind the resorts lies a complex story about land, heritage, and who benefits from development.',
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
