export interface Region {
  id: string;
  slug: string;
  name: string;
  color: string;
  hoverColor: string;
  states: string[];
  population: string;
  description: string;
  image: string;
  imageAlt: string;
  imageCredit: string;
  imageCreditUrl: string;
}

export const regions: Region[] = [
  {
    id: 'path16',
    slug: 'northwest',
    name: 'North West',
    color: '#b07030',
    hoverColor: '#d09050',
    states: ['Baja California', 'Baja California Sur', 'Sonora', 'Sinaloa'],
    population: '9.2M',
    description: 'Spanning Baja California, Sonora, and Sinaloa — a region defined by maquiladora industries, Pacific trade routes, and a border culture forged by decades of migration and economic exchange with California and Arizona.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/1f/San_Isidro%2C_West_Coastal%2C_Baja_California_Sur%2C_Mexico.jpg',
    imageAlt: 'Coastal landscape of Baja California Sur, Mexico',
    imageCredit: 'Wonderlane / Wikimedia Commons',
    imageCreditUrl: 'https://commons.wikimedia.org/wiki/File:San_Isidro,_West_Coastal,_Baja_California_Sur,_Mexico.jpg',
  },
  {
    id: 'path21',
    slug: 'northeast',
    name: 'North East',
    color: '#f0c020',
    hoverColor: '#f5d860',
    states: ['Tamaulipas', 'Nuevo León', 'Coahuila'],
    population: '12.4M',
    description: 'Spanning Tamaulipas, Nuevo León, and Coahuila — a region defined by industrial growth, cross-border trade corridors, and a rapidly evolving cultural identity shaped by proximity to Texas.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/12/Skyline_de_Monterrey.jpg',
    imageAlt: 'Skyline of Monterrey, Nuevo León',
    imageCredit: 'Wikimedia Commons',
    imageCreditUrl: 'https://commons.wikimedia.org/wiki/File:Skyline_de_Monterrey.jpg',
  },
  {
    id: 'path33',
    slug: 'west',
    name: 'West',
    color: '#9a9f58',
    hoverColor: '#bcbf80',
    states: ['Jalisco', 'Nayarit', 'Colima', 'Michoacán'],
    population: '13.1M',
    description: 'Spanning Jalisco, Michoacán, and the Pacific coast — a region shaped by agricultural exports, deep cultural traditions, and one of Mexico\'s largest diaspora communities with strong ties to the United States.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/e1/Catedral_de_Guadalajara_Jalisco_M%C3%A9xico.jpg',
    imageAlt: 'Cathedral of Guadalajara, Jalisco',
    imageCredit: 'Wikimedia Commons',
    imageCreditUrl: 'https://commons.wikimedia.org/wiki/File:Catedral_de_Guadalajara_Jalisco_M%C3%A9xico.jpg',
  },
  {
    id: 'path27',
    slug: 'north-central',
    name: 'North Central',
    color: '#1e7878',
    hoverColor: '#40a0a0',
    states: ['Chihuahua', 'Durango', 'Zacatecas', 'San Luis Potosí'],
    population: '9.8M',
    description: 'Spanning Chihuahua, Durango, and the high plateau — a vast region defined by ranching heritage, extractive industries, and a long history of migration to the US Southwest.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2b/Barrancas_del_Cobre.JPG',
    imageAlt: 'Copper Canyon (Barrancas del Cobre), Chihuahua',
    imageCredit: 'Wikimedia Commons',
    imageCreditUrl: 'https://commons.wikimedia.org/wiki/File:Barrancas_del_Cobre.JPG',
  },
  {
    id: 'path09',
    slug: 'east',
    name: 'East',
    color: '#30b8d8',
    hoverColor: '#70d0e8',
    states: ['Veracruz', 'Tabasco', 'Hidalgo'],
    population: '13.3M',
    description: 'Spanning Veracruz, Tabasco, and Hidalgo — a region anchored by Gulf port commerce, oil production, and a rich Afro-Mexican and indigenous heritage with deep roots in the colonial trade economy.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/0/07/Typische_Stra%C3%9Fenszene_in_Veracruz_Mexiko_fcm.JPG',
    imageAlt: 'Street scene in Veracruz, Mexico',
    imageCredit: 'Wikimedia Commons',
    imageCreditUrl: 'https://commons.wikimedia.org/wiki/File:Typische_Stra%C3%9Fenszene_in_Veracruz_Mexiko_fcm.JPG',
  },
  {
    id: 'path12',
    slug: 'central',
    name: 'Central',
    color: '#a04020',
    hoverColor: '#c86840',
    states: ['Mexico City', 'State of Mexico', 'Puebla', 'Tlaxcala', 'Morelos', 'Querétaro'],
    population: '30.6M',
    description: 'Anchored by Mexico City and the surrounding Valley of Mexico — the political, economic, and cultural core of the country, where ancient civilizations, colonial history, and modern governance converge.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Ciudad.de.Mexico.City.-_Paseo.Reforma.Skyline_CDMX_2016_%28cropped%29.jpg',
    imageAlt: 'Paseo de la Reforma skyline, Mexico City',
    imageCredit: 'Wikimedia Commons',
    imageCreditUrl: 'https://commons.wikimedia.org/wiki/File:Ciudad.de.Mexico.City.-_Paseo.Reforma.Skyline_CDMX_2016_(cropped).jpg',
  },
  {
    id: 'path05',
    slug: 'southwest',
    name: 'South West',
    color: '#006848',
    hoverColor: '#20986a',
    states: ['Guerrero', 'Oaxaca', 'Chiapas'],
    population: '12.8M',
    description: 'Spanning Guerrero, Oaxaca, and Chiapas — Mexico\'s most indigenous region, where dozens of native languages persist alongside deep inequalities, grassroots political movements, and extraordinary biodiversity.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/8/83/Coloridas_fachadas_de_Oaxaca._-_panoramio.jpg',
    imageAlt: 'Colorful facades of Oaxaca city',
    imageCredit: 'Wikimedia Commons',
    imageCreditUrl: 'https://commons.wikimedia.org/wiki/File:Coloridas_fachadas_de_Oaxaca._-_panoramio.jpg',
  },
  {
    id: 'path2809',
    slug: 'southeast',
    name: 'South East',
    color: '#cc1020',
    hoverColor: '#e04458',
    states: ['Yucatán', 'Campeche', 'Quintana Roo'],
    population: '4.9M',
    description: 'Spanning the Yucatán Peninsula — a region shaped by Maya civilization, Caribbean tourism, and a distinct cultural identity that has long stood apart from central Mexican politics and institutions.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Chichen_Itza_3.jpg',
    imageAlt: 'Chichén Itzá pyramid, Yucatán',
    imageCredit: 'Wikimedia Commons',
    imageCreditUrl: 'https://commons.wikimedia.org/wiki/File:Chichen_Itza_3.jpg',
  },
];

export function getRegionBySlug(slug: string): Region | undefined {
  return regions.find((r) => r.slug === slug);
}

export function getRegionById(id: string): Region | undefined {
  return regions.find((r) => r.id === id);
}
