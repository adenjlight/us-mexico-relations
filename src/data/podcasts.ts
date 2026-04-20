export interface Podcast {
  title: string;
  date: string;
  duration: string;
  description: string;
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
    title: 'The Maquiladora Belt: Industry Along the Pacific Corridor',
    date: 'March 2025',
    duration: '32 min',
    description: 'A conversation about how export-processing zones transformed Baja California and Sonora — and what that means for workers and border communities on both sides.',
    audioUrl: null,
  },
  northeast: {
    title: 'Monterrey and the Texas Border: Trade, Migration, and Identity',
    date: 'March 2025',
    duration: '28 min',
    description: 'How Nuevo León became Mexico\'s industrial powerhouse, and why the ties between Monterrey and Texas cities like Laredo and McAllen are unlike anywhere else on the border.',
    audioUrl: null,
  },
  west: {
    title: 'The Jalisco Diaspora: Migration, Remittances, and Return',
    date: 'February 2025',
    duration: '35 min',
    description: 'Jalisco sends more migrants to the United States than almost any other Mexican state. This episode explores the circular migration patterns that have shaped communities on both ends.',
    audioUrl: null,
  },
  'north-central': {
    title: 'Copper Canyon to Ciudad Juárez: The Long Road North',
    date: 'February 2025',
    duration: '30 min',
    description: 'The North Central plateau has been a corridor for migration for over a century. We trace the routes — economic, cultural, and physical — that connect Chihuahua to the United States.',
    audioUrl: null,
  },
  southwest: {
    title: 'Indigenous Mexico and the US Border: Oaxacan Communities Abroad',
    date: 'January 2025',
    duration: '33 min',
    description: 'Millions of Oaxacans live and work in the United States, many of them speaking indigenous languages rather than Spanish. This episode examines their unique place in the migration story.',
    audioUrl: null,
  },
  southeast: {
    title: 'The Yucatán Peninsula: Tourism, Maya Identity, and US Influence',
    date: 'December 2024',
    duration: '29 min',
    description: 'Cancún and the Riviera Maya are economic engines built largely on American tourism. But behind the resorts lies a complex story about land, heritage, and who benefits from development.',
    audioUrl: null,
  },
};

export function getPodcastBySlug(slug: string): Podcast | undefined {
  return podcasts[slug];
}
