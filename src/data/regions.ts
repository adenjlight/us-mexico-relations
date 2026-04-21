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
  imagePosition?: string;
  imageContain?: boolean;
  articleCount?: number;
}

export const regions: Region[] = [
  {
    id: 'path16',
    slug: 'northwest',
    name: 'North West',
    color: '#b07030',
    hoverColor: '#d09050',
    states: ['Baja California', 'Baja California Sur', 'Sonora', 'Sinaloa'],
    population: '10.5M',
    description: 'Spanning Baja California, Sonora, and Sinaloa — a region defined by maquiladora industries, Pacific trade routes, and a border culture forged by decades of migration and economic exchange with California and Arizona.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/1f/San_Isidro%2C_West_Coastal%2C_Baja_California_Sur%2C_Mexico.jpg',
    imageAlt: 'San Isidro, Baja California Sur',
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
    population: '12.5M',
    description: 'Spanning Tamaulipas, Nuevo León, and Coahuila — a region defined by industrial growth, cross-border trade corridors, and a rapidly evolving cultural identity shaped by proximity to Texas.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/12/Skyline_de_Monterrey.jpg',
    imageAlt: 'Monterrey Skyline, Nuevo León',
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
    population: '15.1M',
    description: 'The West region encompasses Jalisco, Michoacán, Nayarit, and Colima, states defined by Pacific coastline, volcanic highlands, and deep Indigenous heritage. Jalisco is widely considered the cultural heart of Mexico, birthplace of mariachi and tequila, and home to Guadalajara, the country\'s second largest city and a growing technology hub. Michoacán is one of Mexico\'s most important farming states, dominating global avocado markets while also hosting the world-renowned Monarch Butterfly Biosphere Reserve. Nayarit and Colima round out the region with rich coastal geography, and Colima\'s port at Manzanillo serves as one of Mexico\'s most important commercial gateways for Pacific trade. Together, these states form one of Mexico\'s largest sources of migration to the United States, with deep and lasting ties to communities across California and the Southwest.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/e1/Catedral_de_Guadalajara_Jalisco_M%C3%A9xico.jpg',
    imageAlt: 'Guadalajara Cathedral, Jalisco',
    imageCredit: 'Wikimedia Commons',
    imageCreditUrl: 'https://commons.wikimedia.org/wiki/File:Catedral_de_Guadalajara_Jalisco_M%C3%A9xico.jpg',
  },
  {
    id: 'path27',
    slug: 'north-central',
    name: 'North Central',
    color: '#1e7878',
    hoverColor: '#40a0a0',
    states: ['Chihuahua', 'Durango', 'Zacatecas', 'San Luis Potosí', 'Aguascalientes', 'Guanajuato'],
    population: '17.4M',
    description: 'Spanning Chihuahua, Durango, and the high plateau — a vast region defined by ranching heritage, extractive industries, and a long history of migration to the US Southwest.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2b/Barrancas_del_Cobre.JPG',
    imageAlt: 'Copper Canyon, Chihuahua',
    imageCredit: 'Wikimedia Commons',
    imageCreditUrl: 'https://commons.wikimedia.org/wiki/File:Barrancas_del_Cobre.JPG',
  },
  {
    id: 'path09',
    slug: 'east',
    name: 'East',
    articleCount: 1,
    color: '#30b8d8',
    hoverColor: '#70d0e8',
    states: ['Veracruz', 'Tabasco', 'Hidalgo'],
    population: '13.5M',
    description: 'Spanning Veracruz, Tabasco, and Hidalgo — a region anchored by Gulf port commerce, oil production, and a rich Afro-Mexican and indigenous heritage with deep roots in the colonial trade economy.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/1f/Prismas_Bas%C3%A1lticos%2C_Huasca_de_Ocampo%2C_Hidalgo%2C_M%C3%A9xico%2C_2013-10-10%2C_DD_13.JPG',
    imageAlt: 'The Basaltic Prisms of Santa María Regla, Hidalgo',
    imageCredit: 'Diego Delso, delso.photo, License CC BY-SA',
    imageCreditUrl: 'https://commons.wikimedia.org/wiki/File:Prismas_Bas%C3%A1lticos,_Huasca_de_Ocampo,_Hidalgo,_M%C3%A9xico,_2013-10-10,_DD_13.JPG',
  },
  {
    id: 'path12',
    slug: 'central',
    name: 'Central',
    articleCount: 1,
    color: '#a04020',
    hoverColor: '#c86840',
    states: ['Mexico City', 'State of Mexico', 'Puebla', 'Tlaxcala', 'Morelos', 'Querétaro'],
    population: '38.5M',
    description: 'Anchored by Mexico City and the surrounding Valley of Mexico — the political, economic, and cultural core of the country, where ancient civilizations, colonial history, and modern governance converge.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/15/Ciudad.de.Mexico.City.-_Paseo.Reforma.Skyline_CDMX_2016_%28cropped%29.jpg',
    imageAlt: 'Paseo de la Reforma, Mexico City',
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
    population: '13.2M',
    description: 'Spanning Guerrero, Oaxaca, and Chiapas — Mexico\'s most indigenous region, where dozens of native languages persist alongside deep inequalities, grassroots political movements, and extraordinary biodiversity.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/16/Monte_Alban_at_High_Noon_02.jpg',
    imageAlt: 'Monte Albán, Oaxaca',
    imageCredit: 'Kellihayden / Wikimedia Commons',
    imageCreditUrl: 'https://commons.wikimedia.org/wiki/File:Monte_Alban_at_High_Noon_02.jpg',
    imagePosition: '90% 85%',
  },
  {
    id: 'path2809',
    slug: 'southeast',
    name: 'South East',
    color: '#cc1020',
    hoverColor: '#e04458',
    states: ['Yucatán', 'Campeche', 'Quintana Roo'],
    population: '5.1M',
    description: 'Spanning the Yucatán Peninsula — a region shaped by Maya civilization, Caribbean tourism, and a distinct cultural identity that has long stood apart from central Mexican politics and institutions.',
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Chichen_Itza_3.jpg',
    imageAlt: 'Chichén Itzá, Yucatán',
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
