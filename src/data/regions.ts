export interface Region {
  id: string;       // SVG path ID
  slug: string;     // URL slug
  name: string;     // Display name
  color: string;    // Original SVG fill color
  hoverColor: string; // Pastel highlight color on hover
}

export const regions: Region[] = [
  {
    id: 'path16',
    slug: 'northwest',
    name: 'North West',
    color: '#b07030',
    hoverColor: '#d09050',
  },
  {
    id: 'path21',
    slug: 'northeast',
    name: 'North East',
    color: '#f0c020',
    hoverColor: '#f5d860',
  },
  {
    id: 'path33',
    slug: 'west',
    name: 'West',
    color: '#9a9f58',
    hoverColor: '#bcbf80',
  },
  {
    id: 'path27',
    slug: 'north-central',
    name: 'North Central',
    color: '#1e7878',
    hoverColor: '#40a0a0',
  },
  {
    id: 'path09',
    slug: 'east',
    name: 'East',
    color: '#30b8d8',
    hoverColor: '#70d0e8',
  },
  {
    id: 'path12',
    slug: 'central',
    name: 'Central',
    color: '#a04020',
    hoverColor: '#c86840',
  },
  {
    id: 'path05',
    slug: 'southwest',
    name: 'South West',
    color: '#006848',
    hoverColor: '#20986a',
  },
  {
    id: 'path2809',
    slug: 'southeast',
    name: 'South East',
    color: '#cc1020',
    hoverColor: '#e04458',
  },
];

export function getRegionBySlug(slug: string): Region | undefined {
  return regions.find((r) => r.slug === slug);
}

export function getRegionById(id: string): Region | undefined {
  return regions.find((r) => r.id === id);
}
