export interface Podcast {
  title: string;
  description: string;
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
    audioUrl: null,
  },
  northeast: {
    title: 'Placeholder Podcast Title',
    description: 'How Nuevo León became Mexico\'s industrial powerhouse, and why the ties between Monterrey and Texas cities like Laredo and McAllen are unlike anywhere else on the border.',
    audioUrl: null,
  },
  west: {
    title: 'Cartel Fragmentation and Violence',
    description: 'Jalisco sends more migrants to the United States than almost any other Mexican state. This episode explores the circular migration patterns that have shaped communities on both ends.',
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
