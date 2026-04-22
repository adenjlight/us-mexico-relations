import { a } from './_helpers';

const AZAOLA = 'https://www.academia.edu/111078476/The_Weaknesses_of_Public_Security_Forces_in_Mexico_City';
const SILVA = 'https://www.scielo.org.mx/pdf/mlr/v9n1/2448-5306-mlr-9-01-00003.pdf';
const NYT_CDMX = 'https://www.nytimes.com/2022/08/09/world/americas/mexico-city-police-abuse.html';

export const centralCorruption = {
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
};
