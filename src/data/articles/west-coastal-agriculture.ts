import { a } from './_helpers';

const NAF = 'https://fsi-live.s3.us-west-1.amazonaws.com/s3fs-public/evnts/media/NAF_2011_EG_(Final).pdf';
const PACIFIC = 'https://d1wqtxts1xzle7.cloudfront.net/81718137/PACIFIC-libre.pdf?1646421611=&response-content-disposition=inline;+filename=Pacific_Coast_of_Mexico.pdf&Expires=1773674406&Signature=RQXoyaR~JpVzuxcPlHOhzoZvjfPOaMdlo63ppmr-UMMVF5UqWNM6Y~l~uvgNzm7ZjMYgMHAFPHM4XxXL9iB2PQTOpTJuJ5vSi7fuxw4gS~N7seL1-8F8CpeCCiBdMlKhMXbJvyRZ9Vc~1dQmObtjAKSSfDIjM~HaP~C9I1TDL5l0f~PXBuweLVSJGBFB91LNteVJh1Q9CnVaLT1LqZ0YfgP-26LrnbxbDZ8YpPwldZQvs9GRQ1GO1qINPON-tz6boUY1gQXdYY6qMOlTZab4TB7~rIoyj3KASfminKI8sVsR6ikF6OYoPEN~w-oxDVoJvawq52UHrN4PAhAKlRgE7w__&Key-Pair-Id=APKAJLOHF5GGSLRBV4ZA';
const COFFEE = 'https://apps.fas.usda.gov/newgainapi/api/Report/DownloadReportByFileName?fileName=Coffee+Annual_Mexico+City_Mexico_MX2025-0023.pdf';
const AVOCADO = 'https://www.prospect-journal.org/articles/avocados-to-extortion-cartels';
const TANDF = 'https://www.tandfonline.com/doi/pdf/10.1080/01615440.2020.1752344';
const JSTOR = 'https://www.jstor.org/stable/41428721?seq=8';
const PANORAMA = 'https://panorama.solutions/en/solution/reduce-overfishing-and-improve-livelihoods-artisanal-fishers-smartfish';
const IOM = 'https://mexico.iom.int/sites/g/files/tmzbdl1686/files/documents/2025-05/info-sheet-iom-mexico-eng_1.pdf';

export const westCoastalAgriculture = {
  id: 'article-1',
  title: 'Coastal Agricultural Economies and Migration in Pacific Mexico: Coffee, Avocado, and Fishing in Guerrero, Michoacán, and Jalisco',
  author: 'Sydney Sharpley',
  excerpt: 'How coffee, avocado, and fishing industries in Mexico\'s Pacific states have become drivers of migration through market volatility, environmental stress, and criminal governance.',
  sections: [
    {
      heading: 'Introduction',
      paragraphs: [
        'Mexico\'s Pacific states—Guerrero, Michoacán, and Jalisco—sit at the intersection of agricultural transformation, environmental stress, and escalating insecurity. Their coastal and near-coastal economies rely heavily on coffee, avocado, and fishing, sectors that have historically sustained rural livelihoods but now generate both opportunity and profound vulnerability. Over the past three decades, these industries have been reshaped by global markets, climate pressures, and the territorial expansion of organized crime. As a result, migration—internal and international—has become a central strategy for survival. This report examines how these agricultural economies influence migration flows to the United States, emphasizing economic push factors, labor precarity, cartel involvement, and environmental change.',
      ],
    },
    {
      heading: 'Historical Context of Migration in the Pacific States',
      paragraphs: [
        `Migration from Guerrero, Michoacán, and Jalisco to the United States has deep historical roots. During the Bracero Program (1942–1964), workers from these states formed part of the backbone of U.S. agricultural labor, establishing durable transnational ${a('networks', NAF)}. Michoacán and Jalisco became two of the country's most important migrant-sending regions, while Guerrero—historically poorer and more isolated—saw migration intensify later, especially after the 1980s debt crisis and the decline of traditional crops.`,
        `By the early 21st century, all three states were deeply embedded in U.S. migration corridors. Michoacán consistently ranked among the top recipients of remittances nationwide, while Jalisco's migrants diversified into U.S. manufacturing and service sectors. Guerrero's migration, often driven by poverty and violence, increasingly included entire families ${a('seeking safety and stability', PACIFIC)}.`,
      ],
    },
    {
      heading: 'Economic Push Factors in Coffee, Avocado, and Fishing',
      paragraphs: [
        `Coffee production in Guerrero and Jalisco is characterized by smallholder plots, aging trees, and limited access to credit, technical assistance, and processing infrastructure. Many producers rely on traditional polyculture systems that preserve biodiversity but yield lower commercial output. International price volatility—driven by global oversupply, speculative markets, and climate shocks in major producing countries—creates chronic income ${a('instability', COFFEE)}. In Guerrero, Indigenous communities in the Montaña and Costa Chica regions face additional barriers: poor road access, limited market information, and dependence on intermediaries who purchase coffee at low prices. When coffee leaf rust outbreaks devastated plantations in the 2010s, many families lost their primary source of income, accelerating both internal migration to tourist zones like Acapulco and international migration to the U.S.`,
        `The ${a('avocado boom', AVOCADO)} has reshaped rural economies in Michoacán and Jalisco, generating unprecedented export revenue but also deepening social and environmental inequalities. Michoacán's dominance in global avocado production has created a dual economy: prosperous growers with access to export markets and marginalized smallholders unable to compete with rising land prices and water demands. As orchards expand, communal lands and forests are converted—often illegally—into avocado plantations, displacing traditional crops and reducing access to shared ${a('resources', TANDF)}. In Jalisco, the rapid expansion of avocado cultivation since 2022 has intensified land speculation, with investors purchasing or coercing the sale of ejido lands. Guerrero's avocado sector is smaller but increasingly targeted by criminal groups seeking to replicate Michoacán's model of extortion and ${a('territorial control', JSTOR)}. For many rural families, the avocado boom has produced a paradox: while the region becomes wealthier on paper, the benefits are unevenly distributed, and those excluded from the boom face rising costs of living, shrinking land access, and heightened insecurity—conditions that push migration.`,
        `Fishing communities along the coasts of Guerrero, Michoacán, and Jalisco confront a convergence of ecological and economic pressures. Overfishing by industrial fleets has depleted key species, while pollution, mangrove loss, and coastal development have degraded critical ${a('habitats', PANORAMA)}. Climate change intensifies these challenges: stronger tropical storms damage boats and infrastructure, unpredictable weather disrupts fishing seasons, and warming waters alter species distribution. Artisanal fishers often lack cold storage, modern equipment, or direct access to markets, forcing them to sell to intermediaries at low prices. In Guerrero, many coastal communities rely on fishing as a primary livelihood, and declining catches have pushed younger generations to seek work in construction, tourism, or agriculture in northern Mexico. In Michoacán and Jalisco, fishers increasingly combine fishing with seasonal agricultural labor or migrate to urban centers.`,
      ],
    },
    {
      heading: 'Labor Dynamics and Precarity',
      paragraphs: [
        `Agricultural labor in these states is marked by informality, low wages, and limited protections. Seasonal migration within Mexico—especially to Sinaloa's vegetable fields or Baja California's berry farms—remains a key livelihood strategy, but working conditions are often harsh. Labor contractors (enganchadores) recruit workers from rural communities, sometimes withholding wages or charging fees for transportation and housing. Indigenous workers from Guerrero face language barriers and discrimination, making them particularly vulnerable to ${a('exploitation', IOM)}. Women increasingly participate in agricultural labor, especially in packing plants and sorting facilities, but often receive lower wages and face greater risks of harassment. Child labor persists in coffee and fishing communities, where economic necessity forces families to involve children in harvesting or processing. These precarious labor conditions reinforce the appeal of U.S. migration, where wages—despite legal and physical risks—are significantly higher and remittances can stabilize household economies.`,
        `In Michoacán, the avocado industry has become deeply entangled with organized crime. Groups such as CJNG, Los Viagras, and La Familia Michoacana impose protection payments on growers, packers, and ${a('transporters', AVOCADO)}, often charging fees per hectare, per tree, or per truckload. They control access to packing facilities, regulate who can sell to exporters, and sometimes force producers to sell at below-market prices. Violence is used to enforce compliance, with kidnappings, arson, and assassinations targeting those who resist. Jalisco's avocado sector faces similar pressures as CJNG consolidates territorial control, using the industry to finance expansion. In Guerrero, smaller criminal groups extort avocado producers and regulate local markets, creating a climate of fear that undermines investment and pushes families to abandon orchards. Criminal capture of the avocado supply chain not only increases violence but also disrupts local economies, contributing to displacement and migration.`,
        `While less profitable than avocados, coffee and fishing are increasingly targeted by criminal groups seeking diversified revenue streams. In Guerrero, coffee producers report extortion at harvest time, with armed groups demanding payments to allow transport to ${a('market', PACIFIC)}. Some groups also control access to roads, forcing producers to pay multiple fees along a single route. Fishing communities face extortion both at sea and onshore, with criminal groups demanding quotas or controlling the sale of fuel and equipment. In some areas, fishers are forced to transport drugs or serve as lookouts, blurring the line between livelihood and coercion. These dynamics deepen insecurity and accelerate migration, especially among young men targeted for recruitment.`,
      ],
    },
    {
      heading: 'Migration Patterns and Remittances',
      paragraphs: [
        `Migration from Guerrero, Michoacán, and Jalisco follows distinct patterns. Michoacán has long-standing U.S. corridors, ${a('high remittances', IOM)}, strong networks. Jalisco has diversified destinations, including the U.S. South and Midwest. In Guerrero, migration is increasingly driven by violence and displacement. Remittances stabilize household economies, fund agricultural investment, and support education and health. However, they also create dependency and widen inequalities between migrant and non-migrant households.`,
      ],
    },
    {
      heading: 'Policy, Governance, and Security Challenges',
      paragraphs: [
        `Mexican rural development programs—such as Production for Wellbeing and Guaranteed Prices—offer support but struggle to reach marginalized communities. Insecurity, corruption, and cartel infiltration undermine implementation. U.S. immigration policy remains restrictive, pushing migrants into more dangerous routes and increasing reliance on smugglers. Legal pathways like H-2A visas remain limited and often exploitative. Efforts to regulate avocado production, enforce environmental standards, or protect fishers are hampered by weak governance and ${a('criminal interference', PACIFIC)}.`,
      ],
    },
    {
      heading: 'Conclusion',
      paragraphs: [
        'In Guerrero, Michoacán, and Jalisco, the coffee, avocado, and fishing industries shape migration not only through economic opportunity but through structural vulnerability, environmental stress, and criminal governance. The avocado boom has brought wealth but also violence, land dispossession, and ecological crisis. Coffee and fishing, long central to rural livelihoods, now struggle under climate change and market instability. Across all three states, organized crime deepens insecurity and accelerates displacement.',
        'Migration—internal and international—remains a critical survival strategy. Addressing its root causes requires strengthening rural governance, reducing cartel influence, promoting sustainable agriculture and fisheries, and expanding protections for workers and migrants. Only then can migration become a choice rather than a necessity.',
      ],
    },
  ],
};
