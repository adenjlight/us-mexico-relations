export interface Region {
  id: string;
  slug: string;
  name: string;
  color: string;
  hoverColor: string;
  states: string[];
}

export const regions: Region[] = [
  {
    id: 'path16',
    slug: 'northwest',
    name: 'North West',
    color: '#b07030',
    hoverColor: '#d09050',
    states: ['Baja California', 'Baja California Sur', 'Sonora', 'Sinaloa'],
  },
  {
    id: 'path21',
    slug: 'northeast',
    name: 'North East',
    color: '#f0c020',
    hoverColor: '#f5d860',
    states: ['Tamaulipas', 'Nuevo León', 'Coahuila'],
  },
  {
    id: 'path33',
    slug: 'west',
    name: 'West',
    color: '#9a9f58',
    hoverColor: '#bcbf80',
    states: ['Jalisco', 'Nayarit', 'Colima', 'Michoacán'],
  },
  {
    id: 'path27',
    slug: 'north-central',
    name: 'North Central',
    color: '#1e7878',
    hoverColor: '#40a0a0',
    states: ['Chihuahua', 'Durango', 'Zacatecas', 'San Luis Potosí'],
  },
  {
    id: 'path09',
    slug: 'east',
    name: 'East',
    color: '#30b8d8',
    hoverColor: '#70d0e8',
    states: ['Veracruz', 'Tabasco', 'Hidalgo'],
  },
  {
    id: 'path12',
    slug: 'central',
    name: 'Central',
    color: '#a04020',
    hoverColor: '#c86840',
    states: ['Mexico City', 'State of Mexico', 'Puebla', 'Tlaxcala', 'Morelos', 'Querétaro'],
  },
  {
    id: 'path05',
    slug: 'southwest',
    name: 'South West',
    color: '#006848',
    hoverColor: '#20986a',
    states: ['Guerrero', 'Oaxaca', 'Chiapas'],
  },
  {
    id: 'path2809',
    slug: 'southeast',
    name: 'South East',
    color: '#cc1020',
    hoverColor: '#e04458',
    states: ['Yucatán', 'Campeche', 'Quintana Roo'],
  },
];

export function getRegionBySlug(slug: string): Region | undefined {
  return regions.find((r) => r.slug === slug);
}

export function getRegionById(id: string): Region | undefined {
  return regions.find((r) => r.id === id);
}
