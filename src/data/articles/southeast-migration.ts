import { a } from './_helpers';

const SAGE_JOURNALS = 'https://journals.sagepub.com/doi/10.1177/1866802X221079636';
const YUCATAN_MAGAZINE = 'https://yucatanmagazine.com/foreigners-in-yucatan-by-the-numbers/';

export const southeastMigration = {
  id: 'article-3',
  title: 'Beyond Push and Pull: Why Migration Evades the Yucatán',
  author: 'Daniel Davis',
  abstract: 'The absence of migrant flows through the Yucatán Peninsula challenges conventional push and pull models of migration. Despite its relative safety and economic growth, the region remains largely outside dominant migration routes through Mexico. This paper argues that migration patterns are shaped less by the attractiveness of destinations and more by route-dependent systems structured by geography, infrastructure, and social networks. Migrants traveling through Mexico are not selecting destinations, but navigating toward the United States under constraint, relying on established corridors that reduce risk and uncertainty. As a result, regions like the Yucatán, which lack embedded migration infrastructure and lie outside major transit routes, remain peripheral to these flows. The case demonstrates that migration is a path-dependent process in which existing routes, rather than destination-based incentives, determine movement.',
  excerpt: 'Despite being one of Mexico\'s safest and fastest-growing regions, the Yucatán Peninsula is largely bypassed by migrants — a pattern explained not by lack of opportunity, but by geography, infrastructure, and the self-reinforcing structure of migration systems.',
  sections: [
    {
      heading: 'Introduction',
      paragraphs: [
        `Migration through Mexico is often understood in terms of push and pull factors, where violence, poverty, and political instability push migrants out of their home countries, while safety and economic opportunity pull them toward new destinations. Under this framework, the Yucatán Peninsula appears to be a strong potential destination.`,
        `However, most migrants travelling through Mexico are not selecting destinations, but rather navigating towards the United States. Yucatán demonstrates that the structure of the routes is a larger factor in shaping migration destinations rather than the attractiveness of the destinations. Geography, infrastructure, and migrant networks shape where people move, often being more important factors than safety. As a result, the Yucatán remains peripheral to migration flows even as it becomes more economically successful.`,
      ],
    },
    {
      heading: 'Geography and Route Formation',
      paragraphs: [
        `Migration routes are structured based on geographical efficiency, meaning that deviations to other areas are more costly. Those entering Mexico from Guatemala typically cross into Chiapas and follow routes that move northward toward the United States. These routes pass through states such as Veracruz or connect to central Mexico, forming corridors that have been used consistently over time.`,
        `The Yucatán lies to the east of these pathways. Reaching it requires a significant detour, increasing both the time and cost of travel. For migrants undertaking a journey that is already risky and expensive, efficiency and costs are central concerns. Moving toward the peninsula is not logical compared to the routes directed towards the U.S.`,
        `However, geography alone is not sufficient to explain migration patterns. Other regions with difficult terrain or longer distances still experience high levels of migration. This suggests that geography interacts with additional factors, particularly infrastructure and networks, to shape migration routes.`,
      ],
    },
    {
      heading: 'Migration Infrastructure and Network',
      paragraphs: [
        `Migration is structured by what scholars describe as migration infrastructure: the systems and resources that enable movement. According to research published in ${a('SAGE Journals', SAGE_JOURNALS)}, this includes transportation networks, migrant shelters, legal frameworks, informal knowledge sharing, and even smuggling operations. These elements make certain routes more viable than others.`,
        `Over time, migration routes become self-reinforcing. Migrants rely on information shared through social networks. This includes family members, friends, and online communities. These networks guide individuals toward routes that are known to work, reducing uncertainty and risk. As more people use the same pathways, those routes become further consolidated.`,
        `The Yucatán lacks this type of embedded infrastructure. Compared to major migration pathways, it has fewer shelters, less institutional support, and fewer established transit systems. This does not make the region less safe, but it does make it less accessible for migrants who depend on structured routes. As a result, the peninsula remains outside the dominant migration system. The strength of the migration infrastructure plays a much greater role in migration patterns than any pull factor the Yucatán has.`,
      ],
    },
    {
      heading: 'Economic Structure',
      paragraphs: [
        `Economic growth in the Yucatán Peninsula does not correlate with increased migratory systems. While tourism has driven expansion in cities such as Cancún and Playa del Carmen, this growth is concentrated in sectors that are not structurally connected to migrant pathways.`,
        `Rather than focusing on whether jobs are available, it is more useful to ask whether those jobs are embedded in migration networks. In northern Mexico, industries such as manufacturing and agriculture are closely tied to cross-border economies and have long histories of employing migrant labor. These sectors are integrated into established migration routes, meaning that migrants not only know about these opportunities but can access them through existing social and logistical networks.`,
        `The Yucatán's economy operates differently. Tourism is spatially concentrated, often requiring workers to enter specific urban or coastal zones that are not part of major migration corridors. More importantly, these jobs are not linked to migrant networks in the same way. There is less shared knowledge about how to access them, fewer intermediaries facilitating entry, and fewer established communities that can absorb new arrivals. The labor markets are concentrated around the metropolitan areas in which they are based.`,
        `This helps explain why the region attracts foreign retirees and remote workers but not northbound migrants. As noted by Yucatán Magazine, many new arrivals to the region are individuals who can choose their destination based on lifestyle preferences rather than constraints imposed by mobility and access. Migrants traveling through Mexico, by contrast, operate within a system where movement is shaped by existing routes and connections.`,
        `In this sense, the Yucatán is not economically unappealing; it is economically misaligned with the structure of migration. Its opportunities are visible and accessible to some populations, but largely disconnected from the networks that guide migrants moving north.`,
      ],
    },
    {
      heading: 'Distinct Migration Patterns in the Yucatán',
      paragraphs: [
        `Although the Yucatán is not a major destination for Central and South American migrants, it is experiencing other forms of migration. Reporting from ${a('Yucatán Magazine', YUCATAN_MAGAZINE)} highlights a growing population of foreign residents, particularly from the United States and Canada. These individuals are often retirees, remote workers, or investors attracted by safety, affordability, and quality of life.`,
        `This pattern demonstrates that the region is not inherently unattractive to migrants. Instead, it attracts a different type of migration shaped by different incentives. For foreign residents, long-term livability is a primary concern. For migrants traveling north, mobility and access to established routes are more important.`,
        `The presence of these remote workers and retirees migrating into the country demonstrates that push and pull factors will be the strongest indicators of migration. However, since it is such a small portion of migration in Mexico in general, it is logical to conclude that structural immigration networks have a larger impact on overall migration patterns than push and pull factors.`,
      ],
    },
    {
      heading: 'Conclusion',
      paragraphs: [
        `The limited migration to the Yucatán Peninsula is not a result of its lack of opportunity or safety. Instead, it reflects the undulating demands of the migration system. Routes are not simply created by external safety or economic conditions, but rather rooted in long-lasting, historic systems that realistically allow for migrants to travel.`,
        `The Yucatán remains peripheral not because it is undesirable, but because it is disconnected from the systems that enable migration. Recognizing this helps to explain broader patterns of migration through Mexico and migration patterns as a whole.`,
        { image: '/images/southeast-migration-yucatan.png' },
      ],
    },
  ],
};
