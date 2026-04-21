export interface ArticleSection {
  heading?: string;
  paragraphs: string[];
}

export interface Article {
  id: string;
  title: string;
  author: string;
  excerpt: string;
  sections: ArticleSection[];
}

const SPRINGERLINK = 'https://link.springer.com/article/10.1186/s42055-020-00031-4/figures/3';
const CONAGUA_REPORT = 'https://sinav30.conagua.gob.mx:8080/Descargas/pdf/EAM2023_f.pdf';
const ELDERLY = 'https://www.sciencedirect.com/science/article/abs/pii/S1474706515000789';
const SPRINGER_NATURE = 'https://link.springer.com/article/10.1007/s00484-009-0283-7';
const MDPI = 'https://www.mdpi.com/2073-4441/10/11/1671';

const NAF = 'https://fsi-live.s3.us-west-1.amazonaws.com/s3fs-public/evnts/media/NAF_2011_EG_(Final).pdf';
const LFM = 'http://141282-the-evolution-of-la-familia-michoacan-a-case-study.pdf';
const JSTOR2 = 'https://www.jstor.org/stable/26586860?seq=1';
const GLOBAL = 'https://globalinitiative.net/wp-content/uploads/2023/03/Romain-Le-Cour-Grandmaison-Ten-years-of-vigilantes-The-Mexican-autodefensas-GI-TOC-March-2023.pdf';
const FLEEING = 'http://report-fleeing-terror-in-guerrero.pdf';
const PACIFIC = 'https://d1wqtxts1xzle7.cloudfront.net/81718137/PACIFIC-libre.pdf?1646421611=&response-content-disposition=inline;+filename=Pacific_Coast_of_Mexico.pdf&Expires=1773674406&Signature=RQXoyaR~JpVzuxcPlHOhzoZvjfPOaMdlo63ppmr-UMMVF5UqWNM6Y~l~uvgNzm7ZjMYgMHAFPHM4XxXL9iB2PQTOpTJuJ5vSi7fuxw4gS~N7seL1-8F8CpeCCiBdMlKhMXbJvyRZ9Vc~1dQmObtjAKSSfDIjM~HaP~C9I1TDL5l0f~PXBuweLVSJGBFB91LNteVJh1Q9CnVaLT1LqZ0YfgP-26LrnbxbDZ8YpPwldZQvs9GRQ1GO1qINPON-tz6boUY1gQXdYY6qMOlTZab4TB7~rIoyj3KASfminKI8sVsR6ikF6OYoPEN~w-oxDVoJvawq52UHrN4PAhAKlRgE7w__&Key-Pair-Id=APKAJLOHF5GGSLRBV4ZA';
const COFFEE = 'https://apps.fas.usda.gov/newgainapi/api/Report/DownloadReportByFileName?fileName=Coffee+Annual_Mexico+City_Mexico_MX2025-0023.pdf';
const AVOCADO = 'https://www.prospect-journal.org/articles/avocados-to-extortion-cartels';
const TANDF = 'https://www.tandfonline.com/doi/pdf/10.1080/01615440.2020.1752344';
const JSTOR = 'https://www.jstor.org/stable/41428721?seq=8';
const PANORAMA = 'https://panorama.solutions/en/solution/reduce-overfishing-and-improve-livelihoods-artisanal-fishers-smartfish';
const IOM = 'https://mexico.iom.int/sites/g/files/tmzbdl1686/files/documents/2025-05/info-sheet-iom-mexico-eng_1.pdf';

const a = (text: string, url: string) =>
  `<a href="${url.replace(/&/g, '&amp;')}" target="_blank" rel="noopener noreferrer">${text}</a>`;

const articlesByRegion: Record<string, Article[]> = {
  northwest: [
    {
      id: 'article-1',
      title: 'Climate, Sustainability, and Human Security in Northwest Mexico',
      author: 'Nico Schwartz',
      excerpt: 'Environmental crises in Northwest Mexico — drought, heat waves, and aquifer overexploitation — are threatening human security in ways that echo a historic depopulation of the region 600 years ago.',
      sections: [
        {
          heading: 'Environmental Impacts in Northwest Mexico',
          paragraphs: [
            `Environmental impacts have become drastic in Northwest Mexico. The map below shows the ${a('water security index', SPRINGERLINK)} throughout the country as of 2020, with notable implications for the Northwest and Baja California.`,
            `<figure class="ap-figure"><img src="/images/northwest-water-security.png" alt="Global Water Security Index in Mexico, showing very low security in Baja California and Sonora" /><figcaption>Global Water Security Index in Mexico, from Springer Link</figcaption></figure>`,
          ],
        },
        {
          heading: 'Drought',
          paragraphs: [
            `Drought has become arguably the worst environmental problem in Sonora and Baja California. According to a ${a('report from CONAGUA', CONAGUA_REPORT)}, Mexico's water commission, from 1991 until 2020 there has been less than 200 millimeters of rainfall in Baja California. That means that, on a basic year-to-year average, there was 6⅔ millimeters of rainfall per year during that time — an amount a person somewhere else could experience in one day, or even one hour. The situation in Sonora isn't much different, where there was between 200–600 millimeters of rain — depending on the area — during that 30-year period.`,
            `Additionally, the same report finds that areas of Baja California and Sonora had D3 levels of drought risk in May of 2022, which CONAGUA defines as "Major loss of crops and grass, the risk of forest fires is extreme, and restrictions on water use are widespread due to scarcity." During the same period, almost all of Baja California and Sonora were at a D2 risk. Drought has become a primary issue in Sonora and Baja California, and it is one of the factors that contributes most to human security problems in Northwest Mexico.`,
          ],
        },
        {
          heading: 'Heat Waves',
          paragraphs: [
            `Heat waves have also become problematic for human security in the area. Drought has been exacerbated by heatwaves that have targeted more vulnerable populations, such as children and ${a('elderly people', ELDERLY)}. Heat waves can cause respiratory diseases and renal malfunction, phenomena that are more common in those populations. According to Martínez-Austria et al., "under global warming scenarios, it is expected that Baja California and Sonora States show the largest increases in temperature over the course of this century."`,
            `Another ${a('report published by Springer Nature', SPRINGER_NATURE)} does a particular case study of the Northwestern city of Mexicali, where many heat-wave attributed deaths have been reported this century. The authors define "heat days" (HDs) as days where the temperature exceeds the 90th percentile (44°C), and find that "with emissions scenario A2, for the 2020s, 2050s, and 2080s, the HDs will increase relative to the 1961–1990 period by 2.1, 3.6, and 5.1 times, respectively." They further argue that a growth in periods of intense heat will necessitate an increase in emergency planning efforts in the region in order to protect the elderly, mentally ill, and other vulnerable people. Not only is there evidence of environmental decline in Northwest Mexico, but it is starting to create conditions incompatible with life for the people that live there.`,
          ],
        },
        {
          heading: 'Aquifer Overexploitation',
          paragraphs: [
            `A counter argument to the aforementioned points might be that there is no evidence of climate change that has been made specifically worse by humans. But this is not true. According to the ${a('Multidisciplinary Publishing Institute (MDPI)', MDPI)}, overexploitation of over 100 of Mexico's aquifers — underground layers of permeable rock that store groundwater used in reservoirs and springs — has had major implications for water and food security in the country. The article also points out that almost one-third of these aquifers — 31 in total — are located in Baja California Peninsula, Sonora, and the Central Mexican Plateau.`,
            `<figure class="ap-figure"><img src="/images/northwest-aquifers.png" alt="Map of overexploited aquifers in Mexico, 2021 and 2022, showing concentration in Baja California and Sonora" /><figcaption>Mapa 2.8: Acuíferos sobreexplotados, 2021 y 2022. Of 653 total aquifers, 111 are overexploited — nearly a third located in Northwest Mexico. Source: CONAGUA (2023).</figcaption></figure>`,
            `Additionally, the MDPI article mentions that "in some cases, for instance the Hermosillo (Sonora) coastal aquifer, excessive pumping has resulted in salt water intrusion and saltpeter presence in agricultural fields." This can have especially bad consequences for farmers, which is alarming for an area that is more reliant on agriculture when compared to others.`,
          ],
        },
        {
          heading: 'Conclusion',
          paragraphs: [
            `Mexico's environmental problems are particularly prevalent in Northwest Mexico, where human security is currently threatened by droughts, heat waves, and human degradation of resources. The problem has both scientific and social dimensions, in which natural climate change processes combined with a lack of sustainability efforts have accelerated the climate crisis in the region. This will have implications for the safety of the people living in Northwest Mexico. Those that have less socio-economic mobility, such as children and the elderly, who are unable to simply move away when facing more dangerous living conditions, will face increased risk of developing diseases that are directly linked to climate change. On top of that, agriculture and economic self-sufficiency will become obsolete if farmers no longer have the means to grow food.`,
            `Northwest Mexico will inevitably face the threat of population decline if steps are not taken to address the impacts of climate change on human security. The area was depopulated before when human security was being threatened, and it is bound to happen again if the environment continues to be degraded.`,
          ],
        },
      ],
    },
  ],
  west: [
    {
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
    },
    {
      id: 'article-2',
      title: 'Criminal Fragmentation, Territorial Control, and Migration in Michoacán and Guerrero',
      author: 'Sydney Sharpley',
      excerpt: 'How criminal organizations in Michoacán and Guerrero have evolved into territorial governments — and how extortion, forced recruitment, and displacement are driving migration to the United States.',
      sections: [
        {
          heading: 'Introduction',
          paragraphs: [
            'The Mexican states of Michoacán and Guerrero have become emblematic of the profound crisis generated by organized crime. Over the past two decades, criminal groups have evolved from drug-trafficking organizations into territorial powers that govern through extortion, forced recruitment, disappearances, and social control. These dynamics have reshaped rural and urban life, targeting farmers, youth, merchants, and entire communities. As violence intensifies, patterns of internal displacement and international migration—particularly toward the United States—have accelerated. This report analyzes how criminal organizations in Michoacán and Guerrero influence migration decisions through extortion, forced recruitment, and territorial control, drawing on historical context, major actors, governance mechanisms, and the lived experiences of affected populations.',
          ],
        },
        {
          heading: 'Historical Background: The Evolution of Organized Crime',
          paragraphs: [
            'Organized crime in Michoacán and Guerrero emerged from a combination of geographic isolation, weak state presence, and the profitability of illicit markets. In the 1970s and 1980s, both states became major producers of marijuana and opium poppy, integrating local actors into transnational trafficking networks. By the 1990s, criminal groups had consolidated territorial control, exploiting longstanding grievances and the absence of effective governance.',
            `The 2000s marked a turning point with the rise of La Familia Michoacana (LFM), which blended pseudo-religious ideology with brutal ${a('enforcement', LFM)}. LFM portrayed itself as a protector of local communities, but quickly expanded into extortion, kidnapping, and forced recruitment. In Guerrero, fragmentation of larger cartels produced a proliferation of splinter groups, each seeking control over heroin production, illegal mining, and extortion ${a('economies', JSTOR2)}.`,
            `The federal government's 2006 militarized "war on drugs" destabilized existing criminal hierarchies. Military interventions fragmented cartels, creating power vacuums filled by new groups such as La Nueva Familia Michoacana (LNFM), Los Viagras, Cárteles Unidos, and the expansionist ${a('CJNG', GLOBAL)}. Instead of reducing violence, militarization dispersed it, increasing civilian exposure to conflict and weakening trust in state institutions. Communities responded by forming autodefensas (self-defense groups), especially in Michoacán's Tierra Caliente and Guerrero's Indigenous regions. While initially protective, many autodefensas were later co-opted by criminal interests or repressed by the state.`,
          ],
        },
        {
          heading: 'Major Criminal Actors',
          paragraphs: [
            `The southern regions of Michoacán and Guerrero are home to many cartels and criminal organizations that use violence and coercion against local populations. In Michoacán, La Familia Michoacana / La Nueva Familia Michoacana (LNFM)—led by the Hurtado Olascoaga brothers—now dominates parts of Tierra Caliente, controlling extortion, drug trafficking, and the avocado ${a('industry', JSTOR2)}. The Knights Templar, a splinter of LFM, established a quasi-governmental system, collecting "taxes," regulating markets, and infiltrating local politics. Los Viagras and Cárteles Unidos, initially self-defense actors, became a criminal coalition resisting CJNG's incursion. CJNG is known for militarized tactics and rapid expansion, using drones, armored vehicles, and forced recruitment.`,
            `In Guerrero, LNFM is also active, especially in mountainous poppy-producing regions. Los Ardillos, Los Tlacos, and Los Granados are highly localized groups with deep political ties, controlling extortion, mining, and drug ${a('routes', FLEEING)}. CJNG's attempts to expand into Guerrero have triggered violent clashes, including drone attacks and mass kidnappings.`,
            `Criminal groups in both states operate as parallel governments, exerting authority through violence, taxation, and regulation of daily ${a('life', JSTOR2)}. Their governance mechanisms include systematic extortion (cobro de piso) of farmers, merchants, transporters, and households; forced recruitment of youth under threat of death; kidnapping and disappearances to enforce compliance and generate revenue; market regulation dictating prices and supply chains; and political infiltration of elections and municipal governments. This "criminal governance" creates a climate in which civilians must navigate overlapping systems of coercion and survival.`,
          ],
        },
        {
          heading: 'Extortion Targeting Farmers and Agribusiness',
          paragraphs: [
            `Michoacán's avocado and lemon industries—worth billions annually—have become prime targets for extortion. Cartels charge fees per hectare, per tree, or per kilo harvested. In 2025, lemon extortion fees reached four pesos per kilo, generating over 4 billion pesos for criminal ${a('groups', JSTOR2)}. Farmers who resist face arson, kidnapping, or assassination. The murder of citrus leader Bernardo Bravo after protesting extortion exemplifies the lethal consequences of defiance. Cartels also seize land, establish their own orchards, and manipulate transportation routes, forcing many farmers into bankruptcy or displacement.`,
            `In Guerrero, extortion extends to mining, poppy cultivation, and basic goods distribution. Criminal groups tax merchants, transporters, and even schoolteachers. The 2024 killing of 11 merchants in Chautipan illustrates the extreme risks faced by those who refuse to ${a('pay', FLEEING)}.`,
          ],
        },
        {
          heading: 'Forced Recruitment and Youth Coercion',
          paragraphs: [
            `Criminal groups recruit youth through threats, abduction, or ${a('manipulation', GLOBAL)}. Boys are forced into armed roles, surveillance, or drug transport; girls face risks of trafficking and sexual violence. Families often migrate preemptively to protect children, making forced recruitment a major driver of displacement.`,
          ],
        },
        {
          heading: 'Kidnapping, Disappearances, and Coercive Control',
          paragraphs: [
            `Cartels use kidnapping and disappearance as tools of ransom extraction, punishment for resistance, terror and social control, and silencing of activists or journalists. Michoacán and Guerrero rank among Mexico's highest in disappearances, with impunity approaching 100% in some ${a('regions', JSTOR2)}. Women and girls are disproportionately targeted for trafficking or retaliation.`,
          ],
        },
        {
          heading: 'Violence, Insecurity, and Erosion of State Authority',
          paragraphs: [
            'The militarization of security has not restored order. Criminal groups challenge or replace state institutions; autodefensas emerge, fragment, or become criminalized; advanced weaponry including IEDs and drones escalates conflict; and civilians navigate shifting territorial boundaries. The result is a hybrid security landscape where state and criminal authority overlap.',
          ],
        },
        {
          heading: 'Community Responses: Self-Defense Groups',
          paragraphs: [
            'Autodefensas emerged as community responses to state failure. In Ostula, Michoacán, the Nahua Communal Guard defends against CJNG incursions despite repeated attacks. In Tierra Caliente, groups that expelled the Knights Templar later fractured or were co-opted. In Costa Chica, Guerrero, Indigenous communal police provide security but face retaliation from both criminals and the state. While initially protective, many groups now struggle with legitimacy, infiltration, or repression.',
          ],
        },
        {
          heading: 'Internal Displacement and International Migration',
          paragraphs: [
            `Displacement in both states is widespread and often sudden. The IDMC reports thousands displaced annually, with entire villages fleeing massacres, extortion demands, or recruitment ${a('threats', FLEEING)}. Indigenous communities are especially vulnerable due to territorial encroachment and limited state protection. Displaced families move to nearby urban centers, other states, or—when networks or resources allow—the United States. However, most remain unregistered and lack access to services.`,
            'Violence-driven migration from Michoacán and Guerrero has surged in recent years. Many migrants now cite extortion, recruitment, or threats as primary reasons for fleeing. Smuggling networks—often controlled by the same cartels causing displacement—charge migrants for safe passage. Failure to pay can result in kidnapping or death. The U.S.–Mexico border has become the world\'s deadliest migration route, with hundreds of deaths annually.',
            'Migration from this region increasingly comes from duress: extortion destroys livelihoods, recruitment threats endanger youth, territorial control restricts movement and access to markets, disappearances create pervasive fear, and gender-based violence forces women and girls to flee. Migration becomes a survival strategy, not a choice.',
          ],
        },
      ],
    },
  ],
};

export function getArticlesByRegion(slug: string): Article[] {
  return articlesByRegion[slug] ?? [];
}

export function getArticle(regionSlug: string, articleId: string): Article | undefined {
  return articlesByRegion[regionSlug]?.find((a) => a.id === articleId);
}
