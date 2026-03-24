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
    color: '#ef9ba0',
    hoverColor: '#ffb8bb',
  },
  {
    id: 'path21',
    slug: 'northeast',
    name: 'North East',
    color: '#ff9900',
    hoverColor: '#ffbe5c',
  },
  {
    id: 'path33',
    slug: 'west',
    name: 'West',
    color: '#f5dd00',
    hoverColor: '#fff176',
  },
  {
    id: 'path27',
    slug: 'north-central',
    name: 'North Central',
    color: '#00aad4',
    hoverColor: '#7ad8f0',
  },
  {
    id: 'path09',
    slug: 'east',
    name: 'East',
    color: '#d42aff',
    hoverColor: '#e97dff',
  },
  {
    id: 'path12',
    slug: 'central',
    name: 'Central',
    color: '#ffffff',
    hoverColor: '#e8f4fb',
  },
  {
    id: 'path05',
    slug: 'southwest',
    name: 'South West',
    color: '#8080ff',
    hoverColor: '#b3b3ff',
  },
  {
    id: 'path2809',
    slug: 'southeast',
    name: 'South East',
    color: '#ccff00',
    hoverColor: '#e4ff7a',
  },
];

export function getRegionBySlug(slug: string): Region | undefined {
  return regions.find((r) => r.slug === slug);
}

export function getRegionById(id: string): Region | undefined {
  return regions.find((r) => r.id === id);
}
