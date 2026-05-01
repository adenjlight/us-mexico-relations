import { a } from './_helpers';

const SIPAZ_II = 'https://www.sipaz.org/facts-about-chiapas-ii/?lang=en';
const CSM = 'https://www.csmonitor.com/1994/0303/03071.html';
const BRITANNICA_MARCOS = 'https://www.britannica.com/biography/Subcomandante-Marcos';
const RESEARCHGATE_POVERTY = 'https://www.researchgate.net/figure/Poverty-in-Mexico-by-state-Map-created-by-Usfirstgov-with-data-from-government-website_fig5_223961283';
const IATP = 'https://www.iatp.org/unfair-us-trade-practices-undermine-mexicos-food-self-sufficiency-efforts';
const PUBLIC_CITIZEN = 'https://www.citizen.org/wp-content/uploads/NAFTA-Factsheet_Mexico-Legacy_Oct-2019.pdf';
const ARTICLE27 = 'https://legalculturessubsoil.ilcs.sas.ac.uk/legal-actions/1992-reform-of-article-27-of-mexican-constitution/';
const SAN_ANDRES = 'https://schoolsforchiapas.org/library/indigenous-rights-san-andres/';
const ACTEAL = 'https://mexiconewsdaily.com/news/government-apologizes-for-its-role-in-acteal-massacre/';
const BBVA = 'https://www.bbvaresearch.com/en/publicaciones/mexico-notable-progress-poverty-at-its-lowest-level-of-296-but-inequalities-persist/';
const TREN_MAYA = 'https://www.latinorebels.com/2023/03/31/mayantrainindigenous/';
const INSIGHT_CRIME_CHIAPAS = 'https://insightcrime.org/news/chiapas-bleeds-cjng-sinaloa-cartel-guatemala-trafficking-routes/';
const SIPAZ_VIOLENCE = 'https://www.sipaz.org/focus-chiapas-in-the-spiral-of-armed-and-criminal-violence/?lang=en';
const SCHOOLS_CARTEL = 'https://schoolsforchiapas.org/war-between-the-cjng-and-sinaloa-cartel-keeps-chiapas-immobilized/';
const SIPAZ_I = 'https://www.sipaz.org/facts-about-chiapas-i/?lang=en';

export const southwestChiapas = {
  id: 'article-1',
  title: 'Chiapas, NAFTA, and Thirty Years of Broken Promises',
  author: 'Christopher Duarte',
  abstract: 'On January 1, 1994, the Ejército Zapatista de Liberación Nacional (EZLN) launched an armed uprising in Chiapas, Mexico, timed deliberately to NAFTA\'s implementation. This essay argues that the Zapatistas\' diagnosis was correct: the trade agreement, combined with the 1992 gutting of Article 27\'s ejido protections, structurally deepened poverty and dispossession for indigenous communities. Three decades on, Chiapas remains Mexico\'s poorest state, with roughly 66% of its population in poverty. A figure nearly unchanged since the rebellion, while an active cartel war has produced mass forced displacement that indigenous autonomy alone cannot contain.',
  abstractImage: '/images/chiapas-ezln.png',
  excerpt: 'Thirty years after the Zapatista uprising, NAFTA\'s structural damage to Chiapas\'s indigenous communities remains visible in poverty rates, broken accords, and a cartel war the state never prevented.',
  sections: [
    {
      heading: 'A State Designed for Extraction',
      paragraphs: [
        `Before the first shot was fired, Chiapas was already a textbook case of what scholars call an "internal periphery," a region rich in resources that systematically exports that wealth while its population goes without. The state generated roughly half of Mexico's hydroelectric power and sat atop significant petroleum reserves. And yet, on the eve of NAFTA, nearly two-thirds of residents lacked sewage access, only a third had electricity, and approximately half had no potable water. In the Lacandón Jungle region that would become the Zapatista heartland, ${a('48% of adults were illiterate', SIPAZ_II)}. Infant mortality in indigenous municipalities stood at 55.1 per 1,000 live births, equivalent to Mexico's national average a full decade earlier.`,
        `This was not an accident of geography. By 1988, 4,714 "certificates of inaffectability" — 95% of all such certificates issued nationally since 1934 — shielded roughly 70% of Chiapas cattle-grazing land from redistribution. The same families who owned the land held the municipal offices, the judicial posts, and the PRI party structures. As one campesino leader told the Christian Science Monitor in March 1994: ${a('"The cattle ranchers are the mayors, the judges, and the PRI officials. We have no place to turn."', CSM)} The 1989 collapse of the International Coffee Agreement pushed tens of thousands more smallholders to the brink, and the EZLN founded clandestinely in 1983 and led by the mestizo philosopher later unmasked as ${a('Subcomandante Marcos', BRITANNICA_MARCOS)} spent a decade quietly building its base among them.`,
        { image: '/images/chiapas-poverty-map.png', caption: a('Poverty in Mexico by state. Map created by Usfirstgov with data from government website.', RESEARCHGATE_POVERTY) },
      ],
    },
    {
      heading: 'Why January 1',
      paragraphs: [
        `The Zapatistas chose New Year's Day 1994 for a reason beyond symbolism. Their First Declaration of the Lacandón Jungle named NAFTA explicitly: the trade agreement was, in Marcos's view, a death sentence for the indigenous peoples of Mexico. The reasoning was concrete and, as events confirmed, accurate.`,
        `NAFTA's agricultural provisions were devastating. Mexico agreed to a 15-year phaseout of corn tariffs that negotiators effectively compressed to 30 months. Real Mexican corn prices ${a('fell an estimated 50–68% between 1993 and 2005', IATP)}. U.S. corn exports to Mexico nearly quadrupled in NAFTA's first decade. ${a('Between 1.1 and 2 million small farmers lost their livelihoods', PUBLIC_CITIZEN)}. But the deeper provocation was the ${a('1992 reform to Article 27 of the Constitution', ARTICLE27)}, the Zapata-era clause that made communal ejido lands inalienable. The reform ended obligatory land redistribution and permitted the privatization and sale of ejidos. This was the rural counterpart of NAFTA itself: the trade deal would flood Mexico with cheap imported corn, and the Article 27 amendment ensured that dispossessed campesinos would have no legal claim to ancestral land. Together, the two reforms amounted to a coordinated dismantling of the legal infrastructure that had protected indigenous land tenure since the Revolution.`,
      ],
    },
    {
      heading: 'Accords That Were Never Honored',
      paragraphs: [
        `On January 1, 1994, roughly 3,000 lightly armed combatants seized San Cristóbal de las Casas, Ocosingo, Las Margaritas, and several other Chiapas towns. Between 145 and 300 people died in twelve days of fighting before a 100,000-person march in Mexico City pressured a ceasefire. Negotiations produced the ${a('San Andrés Accords', SAN_ANDRES)} in February 1996, committing Mexico to constitutional recognition of indigenous peoples with rights to autonomy, self-determination, and territorial control. Zedillo rejected the implementing legislation. What followed was deliberate paramilitarization: on December 22, 1997, Máscara Roja paramilitaries ${a('massacred 45 Tzotzil members of the pacifist group Las Abejas inside a chapel at Acteal', ACTEAL)} while soldiers at a nearby outpost did not intervene. The state formally apologized in 2020. No senior official was ever convicted.`,
        `When Vicente Fox broke the PRI's 71-year grip in 2000, he promised to solve Chiapas "in fifteen minutes." In 2001, Comandanta Esther became the first indigenous woman ever to address Mexico's Congress. Months later, Congress passed a gutted amendment that stripped out territorial rights and collective legal standing. The Supreme Court ruled it had no authority to review. The institutional path closed entirely.`,
      ],
    },
    {
      heading: 'The Autonomous Communities',
      paragraphs: [
        `Faced with a state that had repeatedly broken its word, the EZLN built its own. In August 2003, they established caracoles housing Juntas de Buen Gobierno, coordinating thirty-eight Rebel Zapatista Autonomous Municipalities, governed on the principle of mandar obedeciendo — rule by obeying. Autonomous schools, clinics, and cooperative economies functioned for two decades without a peso of government funding. By 2005, 84.2% of Zapatista children were fully vaccinated versus 74.8% in nearby government-aligned communities. But the achievements could not overcome the structural math. ${a('By 2024, Chiapas poverty stood at 66%', BBVA)} — still the highest in Mexico, against a national rate of 29.6%. Roughly 29% of residents remain in extreme poverty. Indigenous-language speakers nationwide showed zero poverty reduction between 2018 and 2022. Meanwhile, López Obrador's Tren Maya megaproject was ${a('declared a matter of national security in 2023 to bypass over fifty indigenous legal injunctions', TREN_MAYA)}.`,
      ],
    },
    {
      heading: 'The Cartel War',
      paragraphs: [
        `Since 2021, Chiapas has become an active battlefield between the Sinaloa Cartel and CJNG, ${a('fighting for trafficking routes along the 960-kilometer', INSIGHT_CRIME_CHIAPAS)} Guatemalan border. The ${a('Frayba human rights center', SIPAZ_VIOLENCE)} documented 20 forced-displacement events affecting 15,780 people between January 2023 and June 2024. Official homicide data recorded 620 killings in 2024 — the highest year on record. Zapatista territory was not spared: paramilitary attacks killed seven community members in 2023, and in October 2024 ${a('Father Marcelo Pérez Pérez', SCHOOLS_CARTEL)} was assassinated outside a San Cristóbal church despite Inter-American Commission protective orders. In November 2023, the EZLN ${a('dissolved its autonomous municipalities', SIPAZ_I)} and closed the caracoles to outsiders, announcing a new decentralized structure of hyperlocal Gobiernos Autónomos Locales.`,
      ],
    },
    {
      heading: 'The Verdict on a Prediction',
      paragraphs: [
        `The Zapatistas' argument in 1994 was analytical as much as political: NAFTA, combined with the gutting of ejido protections, would deepen rural poverty, accelerate dispossession, and leave indigenous communities more vulnerable to external extraction. Thirty-two years of data confirm that diagnosis. The San Andrés Accords were never honored. Corn self-sufficiency collapsed — ${a('Mexico now imports 38% of its corn, up from 7% before NAFTA', IATP)}. The cartel violence tearing through Chiapas today is the predictable consequence of agricultural liberalization, rural abandonment, and three decades of broken state promises. The EZLN achieved real things: schools that outperformed state equivalents, a governance model that influenced movements worldwide, a political vocabulary that ended the fiction of Mexican monoculturalism. But the Zapatistas were right about the essential thing: you cannot dismantle the legal infrastructure that protects subsistence farmers, flood their markets with subsidized imports, and then be surprised when the result is poverty, dispossession, and eventually violent criminal rule. That is not a natural disaster. It is a policy outcome — and the unfinished business of U.S.–Mexico relations.`,
      ],
    },
  ],
};
