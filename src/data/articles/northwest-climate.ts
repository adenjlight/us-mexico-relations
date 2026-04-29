import { a } from './_helpers';

const INGRAM_PATRICK = 'https://www.researchgate.net/profile/Scott-Ingram-2/publication/351133574_Human_securities_sustainability_and_migration_in_the_ancient_US_Southwest_and_Mexican_Northwest/links/615e429cfbd5153f47e9484b/Human-securities-sustainability-and-migration-in-the-ancient-US-Southwest-and-Mexican-Northwest.pdf';
const SPRINGERLINK = 'https://link.springer.com/article/10.1186/s42055-020-00031-4/figures/3';
const CONAGUA_REPORT = 'https://sinav30.conagua.gob.mx:8080/Descargas/pdf/EAM2023_f.pdf';
const MARTINEZ_AUSTRIA = 'https://www.sciencedirect.com/science/article/abs/pii/S1474706515000789';
const SPRINGER_NATURE = 'https://link.springer.com/article/10.1007/s00484-009-0283-7';
const MDPI = 'https://www.mdpi.com/2073-4441/10/11/1671';

export const northwestClimate = {
  id: 'article-1',
  title: 'Climate, Sustainability, and Human Security in Northwest Mexico',
  author: 'Nico Schwartz',
  abstract: 'This essay argues that climate change has become the primary driver of human security threats in Northwest Mexico and is already producing measurable consequences. Increasing water scarcity, extreme heat, and aquifer depletion are undermining public health, agriculture, and economic stability in the region. These environmental pressures are making Baja California and Sonora increasingly difficult to inhabit on a long-term basis. As these conditions intensify, they will force migration, reshape local economies, and contribute to long-term population decline.',
  excerpt: 'Environmental crises in Northwest Mexico — drought, heat waves, and aquifer overexploitation — are threatening human security in ways that echo a historic depopulation of the region 600 years ago.',
  sections: [
    {
      paragraphs: [
        `The narrative regarding insecurity in Northwest Mexico is commonly centered on border proximity and cartel violence. While these factors undoubtedly contribute to instability, this framing overlooks a rapidly intensifying threat: environmental degradation. Human security, defined by ${a('Patrick and Ingram', INGRAM_PATRICK)} as, "the totality of conditions (e.g. economic, food, health, etc.) that impact human beings", is increasingly shaped by climate-related factors in the region. In Northwest Mexico, environmental change is a primary driver of social and political issues. In this essay, I will argue that climate change is affecting the local population of Northwest Mexico more so than ever before. Its drought problem is compounded by global warming and human mismanagement of critical resources. Climate change is underlying the ability of communities to sustain themselves and will inevitably lead to migration away from the region.`,
      ],
    },
    {
      paragraphs: [
        `Environmental stress in Northwest Mexico is most clearly visible in the region's worsening water crisis. Baja California and Sonora are among the driest regions in Mexico, but recent decades have seen a significant intensification of drought conditions. A ${a('map', SPRINGERLINK)} below shows the water security index throughout the country as of 2020.`,
        { image: '/images/northwest-water-security.png', caption: 'Global Water Security Index of Mexico by State, 2020' },
      ],
    },
    {
      paragraphs: [
        `According to data from ${a('CONAGUA', CONAGUA_REPORT)}, Mexico's national water commission, Baja California received less than 200 millimeters of rainfall between 1991 and 2020. This equates to an average of roughly 6⅔ millimeters per year, an extraordinarily low level of precipitation that highlights the severity of the region's aridity. Sonora, while somewhat less extreme, still received only between 200 and 600 millimeters of rainfall over the same period, depending on the specific area. These figures indicate not just a dry climate, but a sustained and worsening lack of water availability that directly affects ecosystems and human communities. The consequences of this prolonged drought are not abstract—they translate directly into economic and social instability. In May 2022, CONAGUA reported that large portions of Baja California and Sonora reached D3 levels of drought risk, defined as "major loss of crops and grass, the risk of forest fires is extreme, and restrictions on water use are widespread due to scarcity". Even areas not classified as D3 were largely experiencing D2 drought levels. Under such conditions, water becomes a scarce and contested resource. Farmers struggle to irrigate crops, urban areas face restrictions on water use, and industries that rely on water supplies face uncertainty and instability. For communities that depend on agriculture as a primary source of livelihood, albeit only 10-13% of the country, these pressures are particularly dire. When farming becomes unreliable, migration becomes a necessity.`,
      ],
    },
    {
      paragraphs: [
        `In addition to water scarcity, rising temperatures are significantly worsening human security conditions in the region. According to ${a('Martínez-Austria et al', MARTINEZ_AUSTRIA)}, "under global warming scenarios, it is expected that Baja California and Sonora States show the largest increases in temperature over the course of this century." Heat waves have become more frequent and intense in the region, which amplifies the effects of drought and places additional stress on human health. Vulnerable populations, particularly children and the elderly, are put at risk. Extreme heat is associated with respiratory illnesses, dehydration, and kidney failure, all of which can lead to increased mortality. Research by Martínez-Austria et al. indicates that Baja California and Sonora are expected to experience some of the largest temperature increases in Mexico over the course of the 21st century. This trend is already observable in urban centers such as Mexicali, where extreme heat has become a defining feature of the local climate. A ${a('study', SPRINGER_NATURE)} focusing on Mexicali defines "heat days" as days in which temperatures exceed 44°C and finds that, under a high-emissions scenario, the number of such days will increase dramatically. Relative to data from 1961–1990, heat days are projected to increase by 2.1 times in the 2020s, 3.6 times in the 2050s, and 5.1 times in the 2080s. This not only affects public health but also reduces economic productivity and increases the cost of living, as households must spend more on electricity and healthcare. Over time, these financial pressures will make relocation a rational and necessary response.`,
      ],
    },
    {
      paragraphs: [
        `Human activity has also intensified the environmental crisis through unsustainable water management practices. Groundwater extraction has been widely used to compensate for the lack of surface water, but this strategy has proven to be unsustainable. Research from the ${a('Multidisciplinary Publishing Institute', MDPI)} (MDPI) shows that more than 100 aquifers across Mexico are currently overexploited, with 31 located in Baja California, Sonora, and the Central Mexican Plateau. This overexploitation leads to reduced long-term water availability and irreversible environmental damage. One of the most serious consequences of excessive groundwater extraction is saltwater intrusion in coastal aquifers. In the Hermosillo coastal aquifer in Sonora, over-pumping has allowed seawater to seep into freshwater reserves, contaminating them and making them unsuitable for drinking and irrigation. Additionally, the presence of saltpeter in agricultural soils further degrades land quality, making it increasingly difficult to grow crops. These processes represent Conagua's incapacity to manage their water resources, putting local economies at risk.`,
        { image: '/images/Nico Article 1 Picutre 2.0.png', caption: 'Figure from CONAGUA showing the locations of the overexploited aquifers in Mexico' },
      ],
    },
    {
      paragraphs: [
        `This combination of drought, heat, and aquifer depletion creates a feedback loop that accelerates human insecurity. Water scarcity reduces agricultural output, which weakens local economies and increases poverty. Rising temperatures exacerbate water demand while simultaneously increasing health risks. Overuse of groundwater worsens long-term water availability. Together, these factors produce a situation in which environmental degradation directly threatens the sustainability of communities. The most significant outcome of these changes is migration. As environmental conditions deteriorate, individuals and families are increasingly forced to leave in search of more stable and livable environments. This migration may occur internally, with people moving from rural to urban areas, or internationally, particularly toward the United States. Importantly, this movement is not driven by a single factor but by the cumulative impact of multiple environmental stressors that make it difficult to remain in place. In this sense, climate change acts as a compounding factor, intensifying existing vulnerabilities and accelerating displacement. Those with fewer resources—such as small-scale farmers, low-income households, and marginalized communities—are often the most affected, as they have limited capacity to adapt to changing conditions. As a result, Northwest Mexico is likely to experience rising levels of migration and long-term population decline in the coming decades. Climate change is not simply an environmental issue in this region—it is a direct and accelerating force that is reshaping where and how people can live.`,
      ],
    },
  ],
};
