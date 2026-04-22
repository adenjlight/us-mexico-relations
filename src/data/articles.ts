export interface ArticleSection {
  heading?: string;
  paragraphs: string[];
  imageAfterParagraph?: Record<number, string>;
}

export interface Article {
  id: string;
  title: string;
  author: string;
  abstract?: string;
  abstractImage?: string;
  excerpt: string;
  sections: ArticleSection[];
}

const SPRINGERLINK = 'https://link.springer.com/article/10.1186/s42055-020-00031-4/figures/3';
const CONAGUA_REPORT = 'https://sinav30.conagua.gob.mx:8080/Descargas/pdf/EAM2023_f.pdf';
const ELDERLY = 'https://www.sciencedirect.com/science/article/abs/pii/S1474706515000789';
const SPRINGER_NATURE = 'https://link.springer.com/article/10.1007/s00484-009-0283-7';
const MDPI = 'https://www.mdpi.com/2073-4441/10/11/1671';

const SIPAZ_I = 'https://www.sipaz.org/facts-about-chiapas-i/?lang=en';
const SIPAZ_II = 'https://www.sipaz.org/facts-about-chiapas-ii/?lang=en';
const CSM = 'https://www.csmonitor.com/1994/0303/03071.html';
const BRITANNICA_MARCOS = 'https://www.britannica.com/biography/Subcomandante-Marcos';
const IATP = 'https://www.iatp.org/unfair-us-trade-practices-undermine-mexicos-food-self-sufficiency-efforts';
const PUBLIC_CITIZEN = 'https://www.citizen.org/wp-content/uploads/NAFTA-Factsheet_Mexico-Legacy_Oct-2019.pdf';
const ARTICLE27 = 'https://legalculturessubsoil.ilcs.sas.ac.uk/legal-actions/1992-reform-of-article-27-of-mexican-constitution/';
const SAN_ANDRES = 'https://schoolsforchiapas.org/library/indigenous-rights-san-andres/';
const BBVA = 'https://www.bbvaresearch.com/en/publicaciones/mexico-notable-progress-poverty-at-its-lowest-level-of-296-but-inequalities-persist/';
const TREN_MAYA = 'https://www.latinorebels.com/2023/03/31/mayantrainindigenous/';
const INSIGHT_CRIME_CHIAPAS = 'https://insightcrime.org/news/chiapas-bleeds-cjng-sinaloa-cartel-guatemala-trafficking-routes/';
const SIPAZ_VIOLENCE = 'https://www.sipaz.org/focus-chiapas-in-the-spiral-of-armed-and-criminal-violence/?lang=en';
const SCHOOLS_CARTEL = 'https://schoolsforchiapas.org/war-between-the-cjng-and-sinaloa-cartel-keeps-chiapas-immobilized/';

const AZAOLA = 'https://www.academia.edu/111078476/The_Weaknesses_of_Public_Security_Forces_in_Mexico_City';
const SILVA = 'https://www.scielo.org.mx/pdf/mlr/v9n1/2448-5306-mlr-9-01-00003.pdf';
const NYT_CDMX = 'https://www.nytimes.com/2022/08/09/world/americas/mexico-city-police-abuse.html';

const WITS = 'https://wits.worldbank.org/countrysnapshot/en/MEX';
const GARRIGA_PHILLIPS = 'https://journals.sagepub.com/doi/pdf/10.1177/00220027221145870';
const FORBES_NEARSHORING = 'https://www.forbes.com/sites/nathanielparishflannery/2024/02/15/is-organized-crime-activity-threatening-tijuanas-nearshoring-boom/';
const LUNA_PIZANO = 'https://www.scielo.org.mx/scielo.php?pid=S2594-01632024000200109&script=sci_arttext&tlng=en';
const ECONOMIA_SONORA = 'https://www.economia.gob.mx/datamexico/en/profile/geo/sonora-so#industrial-parks';
const ECONOMIA_DATA = 'https://www.economia.gob.mx/datamexico/';

const FREIGHTWAVES = 'https://www.freightwaves.com/news/us-mexico-trade-hits-new-high-of-872b-in-2025';
const LAMP = 'https://onlinelibrary.wiley.com/doi/10.1111/lamp.12340';
const WILSON = 'https://www.wilsoncenter.org/article/mexico-must-take-advantage-moment-secure-investment-and-promote-nearshoring';
const REST_OF_WORLD = 'https://restofworld.org/2023/tesla-new-factory-mexico-drought/';
const MDPI_WATER = 'https://www.mdpi.com/2071-1050/16/3/1011';

const NAF ='https://fsi-live.s3.us-west-1.amazonaws.com/s3fs-public/evnts/media/NAF_2011_EG_(Final).pdf';
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
  northeast: [
    {
      id: 'article-1',
      title: 'Boom on Borrowed Water',
      author: 'Christopher Duarte',
      abstract: 'Northeast Mexico — which includes the states of Nuevo León, Coahuila, and Tamaulipas — has emerged as the epicenter of the U.S. nearshoring wave, capturing the bulk of foreign investment as companies restructure supply chains away from Asia. The economic gains are real: record trade figures, falling unemployment, and a landmark industrial footprint. But the boom is colliding with a hard ecological constraint. The 2022 Monterrey water crisis exposed the fragility of a semi-arid region being asked to power North America\'s manufacturing renaissance. This article argues that the region\'s industrial model cannot be sustained without confronting a structural water deficit that nearshoring is actively deepening, and that Washington, Mexico City, and corporate boardrooms have yet to seriously grapple with that trade-off.',
      excerpt: 'Northeast Mexico has captured the bulk of North America\'s nearshoring boom, but a structural water deficit — worsened by every new factory — is the constraint that record trade figures and falling unemployment cannot paper over.',
      sections: [
        {
          heading: 'A Manufacturing Boom in Three States',
          paragraphs: [
            `Mexico overtook China as the United States' top trading partner in 2023, and by 2025 bilateral goods trade had reached a record ${a('$872.8 billion', FREIGHTWAVES)} even as U.S. imports from China fell by nearly 29%. The border corridor of Nuevo León, Coahuila, Tamaulipas, Chihuahua, and Baja California now produces ${a('more than half of Mexico\'s manufacturing exports', LAMP)}, with Nuevo León as the undisputed hub. ${a('State GDP grew 4.2% in mid-2025', FREIGHTWAVES)}, unemployment fell to a 20-year low of 2.75%, and extreme poverty in the state dropped from 2.1% to 0.5% since 2020.`,
            `The corporate roster that has expanded in NE Mexico makes the story concrete. LEGO added $508 million to what is now the world's largest brick factory in Ciénega de Flores. Volvo is completing a $1 billion heavy-truck plant — its largest globally. Mattel's Montoi facility is the world's biggest toy factory, exporting to 30 countries. Kia, Carrier, John Deere, Caterpillar, Whirlpool, and Amazon have all expanded, while Taiwanese electronics giants Quanta and Foxconn now anchor a technology manufacturing corridor outside Monterrey. At Hofusan Industrial Park in Salinas Victoria, ${a('roughly one in five new tenants is a Chinese firm', WILSON)} — including Hisense, Kuka Home, and Man Wah — openly seeking to sidestep U.S. tariffs by manufacturing in Mexico. The numbers are staggering in scale. Nuevo León hosts more than 120 industrial parks and has attracted cumulative foreign direct investment in the tens of billions since the nearshoring surge began. ${a('Port Laredo moved $354 billion in goods in 2025 alone', FREIGHTWAVES)} — more than any other U.S. trade gateway.`,
          ],
        },
        {
          heading: 'USMCA, Tariffs, and the Uncertain Policy Landscape',
          paragraphs: [
            `The legal architecture driving nearshoring is the United States-Mexico-Canada Agreement (USMCA). Its strict rules of origin — ${a('requiring 75% North American content in autos', LAMP)}, with 40–45% of labor value coming from workers earning at least $16 per hour — were designed to pull production from Asia toward the continent. They worked, but they also created a supply chain highly sensitive to political disruption.`,
            `Donald Trump's return to the White House has introduced significant turbulence. In early 2025, his administration invoked emergency trade powers to impose ${a('25% blanket tariffs on Mexico', WILSON)}, citing fentanyl and migration concerns. Mexican President Claudia Sheinbaum's measured response — deploying 10,000 National Guard troops to the border and extraditing cartel operatives — eventually secured an exemption for USMCA-compliant goods. But 25% tariffs on automobiles, 50% on steel and aluminum, and 25% on medium and heavy trucks remain in effect. In February 2026, a federal court struck down a key portion of the tariff regime, though a new global surcharge followed days later. The net effect is uncertainty rather than collapse. ${a('Mexico\'s effective U.S. tariff rate on compliant goods sits around 2.3%', WILSON)}, far below the global average, but manufacturers are hesitating. Monterrey's industrial vacancy rate tripled, roughly $10 billion in investment announcements are on hold, and the most symbolic project of all, ${a('Tesla\'s planned gigafactory in Santa Catarina', REST_OF_WORLD)}, remains paused more than two years after Elon Musk's 2023 announcement. The USMCA joint review opening July 1, 2026 will determine whether the legal foundations of the nearshoring boom hold.`,
          ],
        },
        {
          heading: 'The Binding Constraint: Water',
          paragraphs: [
            `The harder limit facing Northeast Mexico is not a tariff. In the summer of 2022, Monterrey — a metropolitan area of 5.3 million people — nearly ran out of water. ${a('The Cerro Prieto reservoir fell to 0.5% of capacity', MDPI_WATER)}. Taps ran for only six hours a day. Tanker-truck lines stretched for blocks, scuffles broke out, and then-President Andrés Manuel López Obrador declared the situation a national security crisis. Only a fortuitous tropical storm averted total collapse.`,
            `The crisis was not simply a drought. It reflected a structural mismatch between the region's ecological capacity and its industrial ambitions. ${a('Nuevo León sits atop a semi-arid watershed; 13 of its 23 aquifers are already classified as overexploited', MDPI_WATER)}. Researchers project that ${a('water availability in northern Mexico will fall below 1,600 cubic meters per person per year by 2030', MDPI_WATER)} — down from 3,000 in 1960. Yet industrial water concessions in the state amount to roughly 100 times the share allocated for domestic use, according to federal water agency data. Five beverage companies alone, including Heineken and Coca-Cola, draw 16% of the state's industrial water. Ternium's steel complex holds concessions for over 14.6 million cubic meters per year and is currently completing a $4 billion expansion.`,
            `The Tesla controversy crystallized the politics of water in the starkest terms. When the gigafactory was first announced, critics immediately pointed to Monterrey's water crisis. Before approving the project, López Obrador said Nuevo León was unsuitable because "there is no water." ${a('Governor Samuel García\'s response became infamous', REST_OF_WORLD)}: he assured investors that Nuevo León had enough water for companies, even if not for household consumption. Protesters filled the streets chanting "No es sequía, es saqueo" — it's not drought, it's plunder. Neighboring Coahuila adds an air quality dimension. The state produces the majority of Mexico's coal and hosts two of three national coal-fired power plants. ${a('The escalating water and energy demand linked to increased economic activity is already triggering political and social conflicts', MDPI_WATER)} among different users across the region. As energy-intensive nearshoring facilities multiply, pressure on an already-stressed grid and on local air quality will only grow.`,
          ],
          imageAfterParagraph: { 0: '/images/northeast-cerro-prieto.png' },
        },
        {
          heading: 'Policy Contradictions No One Is Resolving',
          paragraphs: [
            `Sheinbaum's Plan México, announced in January 2025, promises ${a('$277 billion in public and private investment across 2,000 projects', WILSON)}, with tax deductions designed to attract manufacturing and a 45% renewables target by 2030. It is explicitly designed to capitalize on nearshoring. Yet the same administration's 2025 energy reforms guarantee the state utility, CFE, at least 54% of national electricity generation, dissolved independent regulators, and have stalled private clean-power contracts, even as 70% of Mexico's natural gas is imported from Texas. Wilson Center analysts have warned that these ${a('energy reforms could themselves threaten USMCA compliance', WILSON)} and the stable, affordable electricity that manufacturers require. Federal water policy creates a parallel contradiction: a pending constitutional amendment would prioritize domestic water use over commercial concessions, a direct threat to the industrial investment that economic policy is simultaneously courting.`,
            `At the state level, Nuevo León has pursued infrastructure fixes, including the El Cuchillo II Aqueduct and La Libertad Dam. Water experts caution that these are stopgap measures. ${a('Around 70% of Mexico\'s water concessions are held by just 7% of concessionaires', MDPI_WATER)}, indicating a deeply unequal distribution of resources that new infrastructure alone cannot fix. Mexico has also been releasing water from El Cuchillo to fulfill its treaty obligations to Texas under the 1944 Rio Grande Water Treaty, tightening an already-stressed supply.`,
          ],
        },
        {
          heading: 'Growth on a Deficit',
          paragraphs: [
            `Northeast Mexico's nearshoring boom is not a mirage. The factories, the jobs, and the trade flows are real, and USMCA's legal architecture, despite Trump's tariff pressure, continues to shelter the region from the worst disruptions. But the boom is being built on two credit lines the region may not be able to extend indefinitely: the political patience of a U.S. administration that increasingly views tariffs as a permanent feature, and a physical environment whose aquifers, reservoirs, and air quality were already under stress before the latest wave of industrial investment arrived. The analytical question for policymakers on both sides of the border is not whether nearshoring delivers growth; it plainly does. ${a('The global reconfiguration of value chains is a complex, multifaceted process', LAMP)}, and Mexico's geographic and trade advantages make it uniquely positioned to benefit. But whether Nuevo León can extract industrial value at this scale without draining itself dry is an open question. ${a('Governor García\'s now-notorious line about water for companies but not for people', REST_OF_WORLD)} was intended to reassure investors. The deeper it sinks in, the more it should worry them instead.`,
          ],
        },
      ],
    },
  ],
  northwest: [
    {
      id: 'article-1',
      title: 'Climate, Sustainability, and Human Security in Northwest Mexico',
      author: 'Nico Schwartz',
      abstract: 'The following essay will discuss how environmental crises in Northwest Mexico have led to human security issues that I believe will promote migration away from the region. I rely on evidence 1300–1400, when there was a huge migration away from the Southwest United States and Northwest Mexico when human security was being threatened in the region. I will prove that the environment and climate change are central detriments to human security today, which could signify another episode of depopulation in the future.',
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
            `<figure class="ap-figure"><img src="/images/northwest-aquifers.png" alt="Map of overexploited aquifers in Mexico, 2021 and 2022" /></figure>`,
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
    {
      id: 'article-2',
      title: 'Nearshoring and Crime in Northwest Mexico',
      author: 'Nico Schwartz',
      abstract: 'The following paper discusses the relationship between American companies nearshoring their operations to Northwest Mexico and increases in violence in the region. I argue that there is a lack of evidence showing a causal relationship between increases in foreign direct investment (FDI)– which I use to quantify nearshoring efforts– and violent crime. Instead, I argue that cartel fragmentation and volatility might be a better explanation for why FDI decreases as the number of criminal organizations in the region increase. American companies are deterred more by political instability and economic competition than they are by cartel violence. Mexico can benefit from nearshoring, but only if it improves its infrastructure and capacity to prevent cartel fragmentation.',
      excerpt: 'American companies nearshoring to Northwest Mexico face a more complex landscape than cartel violence alone — cartel fragmentation, not violence per se, is what most deters foreign investment.',
      sections: [
        {
          paragraphs: [
            `As the United States and China have become global hegemons of international trade, Mexico has come to realize its competitive advantages in markets such as manufacturing, retail, and services. But this landscape of economic hierarchy presents a challenge for Mexico; Mexico's economy is stuck between one of innovation and wealth, and one of development and self-sufficiency. To counter this problem, Mexico has relied on its trade relationship with the United States. According to ${a('World Integrated Trade Solution', WITS)}, the United States receives 79.95% of Mexico's exports and sends Mexico 42.82% of its imports. Mexico's economy is heavily reliant on its trade relationship with the United States, which keeps it stable but limits its ceiling for growth. Due to this dynamic, U.S. companies have taken advantage of nearshoring— offshoring production closer to the continental U.S.— in order to reduce transportation costs and increase efficiency. Critics of nearshoring in Mexico have argued that U.S. companies could potentially disrupt cartel activities in Northwest Mexico, creating more danger for the people that live in the region. However, as ${a('Garriga and Phillips', GARRIGA_PHILLIPS)} point out, the media is conflicting in its assessment of the relationship between organized crime and foreign direct investment (FDI)— a metric used here to quantify nearshoring efforts, as it measures how much money American companies are investing into Mexico. Some reports have argued that companies are disincentivized to nearshore, while others argue that there is no impact at all. Because there is no clear causal evidence linking nearshoring to increased violence, the overall benefit of foreign direct investment makes it a favorable method for creating economic growth in Mexico.`,
          ],
        },
        {
          heading: 'Evidence on Nearshoring and Violence',
          paragraphs: [
            `There is little evidence to suggest that the recent surge in nearshoring by American corporations to Mexico has contributed to an increase in violence. A ${a('Forbes article', FORBES_NEARSHORING)} highlights that, in 2023, only 12 cargo trucks were hijacked across the entire Baja California region, which is known for its cartel activity and for being a hub for nearshoring. This contrasts sharply with states like Estado de Mexico and Puebla, which saw thousands of truck hijackings that same year. Of course, this comparison should be interpreted cautiously. Differences in crime levels across states may reflect broader regional dynamics— such as cartel presence, local governance capacity, or geography— rather than the effects of nearshoring itself. However, the relatively low number of hijackings in a major nearshoring hub like Baja California suggests that increased foreign investment does not necessarily coincide with higher levels of this type of crime. Instead, there is no clear causal evidence between nearshoring and violence, highlighting the need to distinguish between correlation and causation when assessing the impact of nearshoring on criminal activity. While it may seem intuitive that increased economic activity would lead to more cartel violence, there is little evidence to support this claim.`,
          ],
        },
        {
          heading: 'Cartel Fragmentation and Foreign Direct Investment',
          paragraphs: [
            `This does not mean that crime is completely irrelevant when considering the effects of nearshoring. Arguments to the contrary of the aforementioned points emphasize the volatility of the cartels when assessing the potential impact of nearshoring on cities in Northwest Mexico. Laura Calderon, director of the think tank Justice in Mexico, also highlights how Tijuana— which was a Sinaloa cartel stronghold in the past— has recently become contested after an alliance between the Jalisco Nueva Generación Cartel and Cartel de Tijuana was broken due to internal infighting. Now, three groups fight for control over Tijuana, contributing to the uptick in violence in the region. ${a('Data from Phillips and Garriga', GARRIGA_PHILLIPS)} confirms that there is a statistically significant negative correlation between FDI and the number of criminal groups in a state.`,
            `<figure class="ap-figure"><img src="/images/northwest-nearshoring-fdi.png" alt="Figure 4: Predictive margins of criminal groups on new foreign direct investment" /></figure>`,
            `This means that states with more criminal groups tend to receive less foreign investment, though again there is limited evidence of causation. The explanation for this negative correlation is more nuanced than simply saying "more cartels lead to more violence, which disincentivizes FDI." Instead, more research would have to be done to truly understand what exactly it is about cartel fragmentation that disincentivizes FDI, but that is outside the scope of this paper. Based on Garriga and Phillips' analysis, we can only conclude the FDI is related to the number of organized criminal groups that exist in Mexico, not the extent to which they are violent.`,
          ],
        },
        {
          heading: 'The Case for Nearshoring',
          paragraphs: [
            `Considering these two perspectives, nearshoring is still beneficial and should be encouraged in policymaking situations. A ${a('report by Luna Pizano and Domínguez', LUNA_PIZANO)} argues that nearshoring can be beneficial for the Mexican economy— if they take the necessary steps to facilitate its integration. They argue that Mexico still needs to develop the road, air, and port infrastructure to manage the scale of the workforce that would result from an increase in nearshoring. They claim that an increase in industrial parks would also improve conditions for nearshoring. As it stands, Baja California has ten ${a('industrial parks', ECONOMIA_SONORA)}, where there are "adequate location conditions with infrastructure, equipment, basic services and permanent administration that allows continuous operation," according to the ${a('Mexican Government', ECONOMIA_DATA)}. In terms of their working population and capacity for acquiring the labor for nearshoring, Sonora and Baja California also have excellent conditions: their unemployment rates are 2.57% and 2.16%, and their economically active populations are 60.1% and 60%, respectively. In both states, an extremely high proportion of the population that can work actually does work, which is good for American companies looking for cheaper labor costs and Mexican workers seeking employment.`,
          ],
        },
        {
          heading: 'Conclusion',
          paragraphs: [
            `Northwest Mexico has experienced more and more nearshoring as a result of its increasing economic reliance on the United States. Its proximity to the U.S. also allows trade— both legal and illicit— to flourish. Simultaneously, crime has continued to increase in Northwest Mexico, specifically in cities like Tijuana, Ciudad Juarez, and Chihuahua. The findings of Garriga and Phillips indicate that reducing fragmentation among criminal groups— or strengthening state capacity to limit their influence— may be more important for attracting investment than reducing overall violence levels alone. This suggests that policies focused on improving local and federal capacity to confront the cartels may be more effective than those that simply respond to visible indicators of violence. Crime trends in Mexico appear to be driven more by cartel fragmentation and competition than by levels of foreign direct investment. Additionally, cartels will continue to operate as long as local governments lack the capacity to stop them. Discouraging foreign investment is unlikely to reduce crime and may instead undermine economic opportunities. A more effective approach is to promote nearshoring while simultaneously strengthening institutions to address the underlying drivers of organized crime. Mexico should continue to attract foreign investment while investing in infrastructure, education, and institutional capacity to support long-term economic growth.`,
          ],
        },
      ],
    },
  ],
  central: [
    {
      id: 'article-1',
      title: 'Exacerbating Insecurity: Law Enforcement Corruption in Mexico City',
      author: 'Lucy Bird',
      abstract: 'This essay examines how law enforcement corruption contributes to insecurity in Mexico City, challenging narratives that focus solely on organized crime. The analysis highlights two key mechanisms: the use of excessive force for coercion and personal gain, and the targeting of vulnerable populations for exploitation. These practices erode public trust, reduce cooperation with authorities, and weaken the state\'s ability to maintain security. The essay also emphasizes how institutional weaknesses, including poor working conditions and limited accountability, sustain these dynamics and complicate reform efforts.',
      excerpt: 'Law enforcement corruption in Mexico City — through excessive force, exploitation of vulnerable populations, and eroded public trust — is itself a driver of insecurity, not merely a symptom of it.',
      sections: [
        {
          paragraphs: [
            'Conversations surrounding security in Mexico are often framed through the lens of organized crime and drug cartels. However, insecurity is not driven solely by external criminal actors; it is also shaped by the institutions responsible for maintaining public safety. Law enforcement in Mexico City exemplifies this contradiction. The city\'s preventive police system is large but fragmented, consisting of regular police, auxiliary forces, and specialized units. A significant share of these officers operate under irregular employment conditions, lacking full labor rights and operating with considerable autonomy. While formally tasked with protecting citizens, elements within the police force contribute directly to the persistence of insecurity by facilitating coercive practices and enabling the exploitation of vulnerable populations, ultimately eroding public trust.',
          ],
        },
        {
          heading: 'Defining Corruption',
          paragraphs: [
            `Corruption within Mexico City's law enforcement can be understood through two primary forms: predatory and strategic corruption. Predatory corruption occurs when officers use their authority for personal gain, such as requesting bribes in exchange for avoiding arrest. In contrast, strategic corruption is embedded in institutional practices and is often justified by informal norms or hierarchical pressures. This form includes coercive tactics such as forced confessions, planted evidence, or the manipulation of charges to meet internal expectations. Both understandings of corruption undermine the foundational purpose of policing so that, rather than serving the public, law enforcement becomes a mechanism for private benefit or institutional convenience.`,
            `Evidence suggests these practices are systemic rather than isolated. Thousands of complaints alleging bodily harm and violations of personal liberty point to a persistent pattern of misconduct within Mexico City's ${a('police force', SILVA)}.`,
          ],
        },
        {
          heading: 'Excessive Force as a Mechanism of Corruption',
          paragraphs: [
            `One of the clearest ways corruption contributes to insecurity is through excessive force. Police brutality in Mexico City is not only a matter of over-enforcement but is frequently tied to efforts to extract personal or financial gain. ${a('Carlos Silva Forné', SILVA)}, a researcher at the Institute for Legal Research, identifies the pursuit of monetary benefit as a key driver of police violence. His analysis of complaints filed with the Mexico City Human Rights Commission between 2007 and 2011 finds that a meaningful share (10.3 percent) of cases involving violations of physical integrity were linked to corruption or personal gain.`,
            'In these situations, force is not incidental but instrumental. Officers may resort to violence to compel confessions or pressure detainees into paying bribes. This overlap between police brutality and corruption reveals how law enforcement practices can actively generate insecurity. Rather than deterring crime, these actions contribute to an environment in which violence is normalized, and citizens face threats not only from criminals but from state actors themselves. When individuals cannot distinguish between legitimate law enforcement and predatory behavior, the perceived risk of interacting with law enforcement increases, further destabilizing public safety.',
          ],
        },
        {
          heading: 'Targeting Vulnerable Populations',
          paragraphs: [
            `Corruption within policing disproportionately affects vulnerable populations, such as low-income residents, migrants, and informal workers. Officers often perceive these groups as less capable of asserting their rights or pursuing legal recourse. As a result, they become primary targets for extortion and abuse. Former Mexico City police officer ${a('Jaime Ramón Bernal García', SILVA)} noted that officers frequently target such individuals precisely because they are less likely to challenge misconduct.`,
            `Recent ${a('cases', NYT_CDMX)} illustrate how these dynamics unfold in practice. In one instance, a young man was detained by police officers and pressured to confess to a murder he did not commit. When he refused, officers reportedly subjected him to near suffocation, forcing a confession that was later dismissed in court due to evidence of torture. In another case, a worker was abducted and beaten by individuals later revealed to be police officers, who demanded a substantial bribe in exchange for his release. When payment was not provided, he was formally charged with a crime. These incidents highlight how law enforcement authority can be weaponized to extract resources from individuals, particularly those with limited means.`,
            'As seen with the use of excessive force, these practices have profound implications for public trust. When citizens view the police as predatory rather than protective, they are less likely to cooperate with investigations when facing external criminal forces and more likely to take matters into their own hands. This erosion of trust creates a feedback loop: reduced cooperation weakens law enforcement effectiveness, which in turn allows criminal activity to persist. In this way, corruption within policing not only harms individuals directly but also undermines the state\'s broader capacity to maintain security.',
          ],
        },
        {
          heading: 'Institutional Challenges',
          paragraphs: [
            `Institutional weaknesses within Mexico City's police force play a critical role in enabling corruption, as poor organizational capacity creates conditions in which misconduct can thrive. ${a('Research by Elena Azaola', AZAOLA)} highlights widespread dissatisfaction among police officers, driven by poor working conditions and a lack of institutional support. Drawing on a qualitative study of 200 preventive officers, Azaola finds that many officers experience a sense of abandonment that diminishes their commitment to professional standards.`,
            'Within this context, corruption emerges through multiple pathways. For some officers, it functions as a survival strategy to supplement low wages. For others, it represents an expected benefit of the profession. Crucially, these practices are not confined to individual behavior but are reinforced by informal networks within the institution. These networks operate through unwritten agreements that prioritize personal and political relationships over formal rules, effectively creating a parallel system of governance. In some cases, officers are diverted from their official duties to provide private security for political elites or other influential individuals, therefore blurring the line between public service and private interest. These practices reinforce a system in which accountability is limited and corruption is embedded within institutional structures.',
            'These institutional dynamics make reform particularly challenging. Efforts to address corruption must address not only individual misconduct but also entrenched practices and incentives that sustain it. Without strengthening institutional capacity and accountability, corruption will continue to undermine law enforcement effectiveness.',
          ],
        },
        {
          heading: 'Conclusion',
          paragraphs: [
            'Law enforcement corruption in Mexico City plays a central role in exacerbating insecurity. Through the strategic use of excessive force, the systematic targeting of vulnerable populations, and the erosion of public trust, corrupt practices transform policing into a source of risk rather than protection. Institutional weaknesses further entrench these dynamics, embedding corruption within the police force\'s structure.',
            'Understanding this relationship is essential for both domestic and international policy discussions. Mexico City serves as a critical case study for understanding the role institutions play in perpetuating instability across the country. Moreover, these dynamics have implications beyond Mexico\'s borders. Issues such as migration and transnational crime are shaped in part by internal conditions of security and governance. When law enforcement institutions fail to provide reliable protection, they contribute to patterns of instability with regional consequences. Addressing corruption within policing is therefore not only a matter of improving public safety within Mexico City, but also a key component of broader efforts to strengthen governance and security across North America.',
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
  southwest: [
    {
      id: 'article-1',
      title: 'Chiapas, NAFTA, and Thirty Years of Broken Promises',
      author: 'Christopher Duarte',
      abstract: 'On January 1, 1994, the Ejército Zapatista de Liberación Nacional (EZLN) launched an armed uprising in Chiapas, Mexico, timed deliberately to NAFTA\'s implementation. This essay argues that the Zapatistas\' diagnosis was correct: the trade agreement, combined with the 1992 gutting of Article 27\'s ejido protections, structurally deepened poverty and dispossession for indigenous communities. Three decades on, Chiapas remains Mexico\'s poorest state, with roughly 66% of its population in poverty — a figure nearly unchanged since the rebellion — while an active cartel war has produced mass forced displacement that indigenous autonomy alone cannot contain.',
      abstractImage: '/images/chiapas-ezln.png',
      excerpt: 'Thirty years after the Zapatista uprising, NAFTA\'s structural damage to Chiapas\'s indigenous communities remains visible in poverty rates, broken accords, and a cartel war the state never prevented.',
      sections: [
        {
          heading: 'A State Designed for Extraction',
          paragraphs: [
            `Before the first shot was fired, Chiapas was already a textbook case of what scholars call an "internal periphery" — a region rich in resources that systematically exports that wealth while its population goes without. The state generated roughly half of Mexico's hydroelectric power and sat atop significant petroleum reserves. And yet, on the eve of NAFTA, nearly two-thirds of residents lacked sewage access, only a third had electricity, and approximately half had no potable water. In the Lacandón Jungle region that would become the Zapatista heartland, ${a('48% of adults were illiterate', SIPAZ_II)}. Infant mortality in indigenous municipalities stood at 55.1 per 1,000 live births, equivalent to Mexico's national average a full decade earlier.`,
            `This was not an accident of geography. By 1988, 4,714 "certificates of inaffectability" — 95% of all such certificates issued nationally since 1934 — shielded roughly 70% of Chiapas cattle-grazing land from redistribution. The same families who owned the land held the municipal offices, the judicial posts, and the PRI party structures. As one campesino leader ${a('told the Christian Science Monitor', CSM)} in March 1994: "The cattle ranchers are the mayors, the judges, and the PRI officials. We have no place to turn." The 1989 collapse of the International Coffee Agreement pushed tens of thousands more smallholders to the brink, and the EZLN — founded clandestinely in 1983 and led by the mestizo philosopher later unmasked as ${a('Subcomandante Marcos', BRITANNICA_MARCOS)} — spent a decade quietly building its base among them.`,
          ],
          imageAfterParagraph: { 1: '/images/chiapas-poverty-map.png' },
        },
        {
          heading: 'Why January 1',
          paragraphs: [
            'The Zapatistas chose New Year\'s Day 1994 for a reason beyond symbolism. Their First Declaration of the Lacandón Jungle named NAFTA explicitly: the trade agreement was, in Marcos\'s view, a death sentence for the indigenous peoples of Mexico. The reasoning was concrete and, as events confirmed, accurate.',
            `NAFTA's agricultural provisions were devastating. Mexico agreed to a 15-year phaseout of corn tariffs that negotiators effectively compressed to 30 months. ${a('Real Mexican corn prices fell an estimated 50–68% between 1993 and 2005', IATP)}. U.S. corn exports to Mexico nearly quadrupled in NAFTA's first decade. ${a('Between 1.1 and 2 million small farmers lost their livelihoods', PUBLIC_CITIZEN)}. But the deeper provocation was the ${a('1992 reform to Article 27', ARTICLE27)} of the Constitution — the Zapata-era clause that made communal ejido lands inalienable. The reform ended obligatory land redistribution and permitted the privatization and sale of ejidos. This was the rural counterpart of NAFTA itself: the trade deal would flood Mexico with cheap imported corn, and the Article 27 amendment ensured that dispossessed campesinos would have no legal claim to ancestral land. Together, the two reforms amounted to a coordinated dismantling of the legal infrastructure that had protected indigenous land tenure since the Revolution.`,
          ],
        },
        {
          heading: 'Accords That Were Never Honored',
          paragraphs: [
            `On January 1, 1994, roughly 3,000 lightly armed combatants seized San Cristóbal de las Casas, Ocosingo, Las Margaritas, and several other Chiapas towns. Between 145 and 300 people died in twelve days of fighting before a 100,000-person march in Mexico City pressured a ceasefire. Negotiations produced the ${a('San Andrés Accords', SAN_ANDRES)} in February 1996, committing Mexico to constitutional recognition of indigenous peoples with rights to autonomy, self-determination, and territorial control. Zedillo rejected the implementing legislation. What followed was deliberate paramilitarization: on December 22, 1997, Máscara Roja paramilitaries massacred 45 Tzotzil members of the pacifist group Las Abejas inside a chapel at Acteal while soldiers at a nearby outpost did not intervene. The state formally apologized in 2020. No senior official was ever convicted.`,
            'When Vicente Fox broke the PRI\'s 71-year grip in 2000, he promised to solve Chiapas "in fifteen minutes." In 2001, Comandanta Esther became the first indigenous woman ever to address Mexico\'s Congress. Months later, Congress passed a gutted amendment that stripped out territorial rights and collective legal standing. The Supreme Court ruled it had no authority to review. The institutional path closed entirely.',
          ],
        },
        {
          heading: 'The Autonomous Communities',
          paragraphs: [
            `Faced with a state that had repeatedly broken its word, the EZLN built its own. In August 2003, they established caracoles housing Juntas de Buen Gobierno, coordinating thirty-eight Rebel Zapatista Autonomous Municipalities, governed on the principle of mandar obedeciendo (rule by obeying). Autonomous schools, clinics, and cooperative economies functioned for two decades without a peso of government funding. By 2005, 84.2% of Zapatista children were fully vaccinated versus 74.8% in nearby government-aligned communities. But the achievements could not overcome the structural math. By 2024, ${a('Chiapas poverty stood at 66%', BBVA)} — still the highest in Mexico, against a national rate of 29.6%. Roughly 29% of residents remain in extreme poverty. Indigenous-language speakers nationwide showed zero poverty reduction between 2018 and 2022. Meanwhile, López Obrador's ${a('Tren Maya megaproject was declared a matter of national security', TREN_MAYA)} in 2023 to bypass over fifty indigenous legal injunctions.`,
          ],
        },
        {
          heading: 'The Cartel War',
          paragraphs: [
            `Since 2021, Chiapas has become an active battlefield between the Sinaloa Cartel and CJNG, ${a('fighting for trafficking routes along the 960-kilometer Guatemalan border', INSIGHT_CRIME_CHIAPAS)}. The ${a('Frayba human rights center documented 20 forced-displacement events affecting 15,780 people', SIPAZ_VIOLENCE)} between January 2023 and June 2024. Official homicide data recorded 620 killings in 2024 — the highest year on record. Zapatista territory was not spared: paramilitary attacks killed seven community members in 2023, and in October 2024 Father Marcelo Pérez Pérez was assassinated outside a San Cristóbal church despite Inter-American Commission protective orders. In November 2023, the ${a('EZLN dissolved its autonomous municipalities and closed the caracoles to outsiders', SCHOOLS_CARTEL)}, announcing a new decentralized structure of hyperlocal Gobiernos Autónomos Locales.`,
          ],
        },
        {
          heading: 'The Verdict on a Prediction',
          paragraphs: [
            `The Zapatistas' argument in 1994 was analytical as much as political: NAFTA, combined with the gutting of ejido protections, would deepen rural poverty, accelerate dispossession, and leave indigenous communities more vulnerable to external extraction. Thirty-two years of data confirm that diagnosis. The ${a('San Andrés Accords were never honored', SIPAZ_I)}. Corn self-sufficiency collapsed — ${a('Mexico now imports 38% of its corn, up from 7% before NAFTA', IATP)}. The cartel violence tearing through Chiapas today is the predictable consequence of agricultural liberalization, rural abandonment, and three decades of broken state promises. The EZLN achieved real things: schools that outperformed state equivalents, a governance model that influenced movements worldwide, a political vocabulary that ended the fiction of Mexican monoculturalism. But the Zapatistas were right about the essential thing: you cannot dismantle the legal infrastructure that protects subsistence farmers, flood their markets with subsidized imports, and then be surprised when the result is poverty, dispossession, and eventually violent criminal rule. That is not a natural disaster. It is a policy outcome — and the unfinished business of U.S.–Mexico relations.`,
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
