import { a } from './_helpers';

const AZAOLA = 'https://www.academia.edu/111078476/The_Weaknesses_of_Public_Security_Forces_in_Mexico_City';
const SILVA = 'https://www.scielo.org.mx/pdf/mlr/v9n1/2448-5306-mlr-9-01-00003.pdf';
const NYT_CDMX = 'https://www.nytimes.com/2022/08/09/world/americas/mexico-city-police-abuse.html';

export const centralCorruption = {
  id: 'article-1',
  title: 'Law Enforcement Corruption in Mexico City: Security Challenges of Institutional Weakness',
  author: 'Lucy Bird',
  abstract: 'Weak institutional capacity within Mexico City\'s law enforcement enables corruption, which in turn exacerbates insecurity. Drawing on evidence of officer dissatisfaction, this essay shows how internal deficiencies translate into external harms. Addressing this security issue requires institutional reform, as corruption stems from structural weaknesses rather than isolated individual behavior',
  excerpt: 'In Mexico City, corruption within law enforcement is not simply a byproduct of individual misconduct but a consequence of systemic incapacity that actively exacerbates security threats.',
  sections: [
    {
      paragraphs: [
        `Conversations surrounding security in Mexico are often framed through the lens of organized crime and drug cartels. While these actors are significant, such perspectives overlook the role of state institutions in shaping security outcomes. In Mexico City, law enforcement illustrates this dynamic. The city's preventive police system is large but fragmented, comprising regular police, auxiliary forces, and specialized units that operate under uneven oversight and accountability. Within an institution that does not effectively support its officers, corruption becomes a tool of survival and an expectation of the job. Rather than protecting citizens, these weaknesses enable practices that harm communities and erode public trust. As a result, corruption within law enforcement is not simply a byproduct of individual misconduct but a consequence of systemic incapacity that actively exacerbates security threats.`,
      ],
    },
    {
      heading: 'Internal Perspectives',
      paragraphs: [
        `Institutional weaknesses within Mexico City's police force are central to understanding corruption as a security threat. Research by ${a('Elena Azaola', AZAOLA)} highlights widespread dissatisfaction among police officers, driven by inadequate working conditions and limited institutional support. In a qualitative study of about 200 preventive officers, conducted between 2001 and 2005, Azaola examines what officers perceive as obstacles in carrying out their duties. The findings reveal a workforce characterized by low morale and diminished commitment to professional standards. Officers frequently cite low wages, insufficient equipment, long working hours, and faulty promotion systems as key sources of frustration. Together, these conditions weaken institutional effectiveness and create an environment in which corruption can persist.`,
        `Under these circumstances, corruption emerges simultaneously as a survival strategy to supplement low wages and as an expected benefit of the profession. For example, one of the officers interviewed in ${a('Azaola\'s', AZAOLA)} study revealed that many on the force want to be traffic police because they believe it offers the greatest opportunity to extort those who have violated the traffic code. With more opportunities to abuse power for personal gain, they have more income to mitigate their unsatisfactory wages.`,
        `Corruption is also reinforced through informal institutional dynamics. Another finding from ${a('Azaola\'s', AZAOLA)} work was that advancement within the police force is often shaped by personal connections rather than merit. Positions are therefore allocated through networks of favoritism that privilege loyalty over performance. These unwritten rules create a parallel system of governance in which formal regulations are routinely bypassed. As a result, accountability mechanisms are weakened, and corrupt practices are allowed to persist across different levels of the organization. These internal dynamics demonstrate how institutional weakness not only permits corruption but actively sustains it.`,
      ],
    },
    {
      heading: 'External Consequences',
      paragraphs: [
        { image: '/images/Picture.jpeg', caption: 'Municipal policeman managing city traffic on a bustling street with vehicles, by Brian Jiz.', maxWidth: '320px' },
        `The effects of institutional weakness and corruption extend beyond the police force and into the broader community. ${a('Corruption', SILVA)} manifests in both predatory and institutionalized forms. At the individual level, officers may exploit their authority for personal gain by demanding bribes to avoid arrest. More broadly, corruption is embedded in coercive policing practices. For example, forced confessions, planted evidence, and the manipulation of charges. In both cases, the core function of law enforcement is distorted, transforming policing into an instrument of extraction rather than protection.`,
        `${a('Thousands', NYT_CDMX)} of complaints alleging bodily harm and violations of personal liberty point to a persistent pattern of misconduct within Mexico City's police force. One of the most visible consequences of this corruption is the use of excessive force. Police brutality is not simply the result of over-enforcement, but is often directly tied to efforts to extract financial or personal benefits. ${a('Carlos Silva Forné', SILVA)} identifies the pursuit of monetary gain as a key driver of police violence, finding that a significant share of complaints involving violations of physical integrity are linked to corruption. In these situations, force becomes a deliberate tool. This overlap between brutality and corruption fundamentally alters the role of law enforcement. Rather than deterring crime, policing contributes to an environment in which coercion is normalized. Citizens are forced to navigate not only the risk of criminal activity but also the threat posed by state actors themselves.`,
        `The consequences are particularly severe for vulnerable populations such as migrants and informal workers. ${a('Officers', AZAOLA)} often perceive these groups as less capable of asserting their legal rights or pursuing legal resources. Cases in which individuals are coerced into false confessions or extorted for payment illustrate how police authority can be weaponized against those least able to resist. ${a('In one instance', NYT_CDMX)}, a young man was detained by police officers and pressured to confess to a murder he did not commit. When he refused, officers reportedly subjected him to near suffocation and then forced him to confess on a recorded video. ${a('In another case', NYT_CDMX)}, a worker was abducted and beaten by individuals later revealed to be police officers, who demanded a substantial bribe in exchange for his release. When payment was not provided, he was formally charged with a crime. These practices deepen existing inequalities while reinforcing cycles of insecurity.`,
        `Over time, these dynamics erode public trust in law enforcement. When citizens perceive the police as predatory rather than protective, they are less likely to report crimes or cooperate with investigations. This erosion of trust creates a self-reinforcing cycle: reduced cooperation weakens law enforcement's effectiveness, which in turn allows criminal activity to persist. In this way, corruption not only causes individual harm but also undermines the state's broader capacity to maintain security.`,
      ],
    },
    {
      heading: 'Conclusion',
      paragraphs: [
        `Law enforcement corruption in Mexico City is not an isolated phenomenon but a structural outcome of weak institutional capacity. Internal deficiencies create an environment in which corruption can persist and become normalized. These internal dynamics translate into external consequences, including the use of excessive force, the exploitation of vulnerable populations, and the erosion of public trust.`,
        `Addressing insecurity in Mexico City requires more than targeting external criminal actors. It demands a critical examination of the institutions responsible for maintaining public safety. Without meaningful reforms that strengthen institutional capacity, corruption will continue to undermine law enforcement effectiveness and perpetuate insecurity. These challenges have implications not only for Mexico City but also for broader regional stability. As a central political hub, Mexico City's development shapes national governance and influences the dynamics of the U.S.–Mexico relationship. Strengthening law enforcement institutional capacity is therefore essential to improving both domestic security and cross-border cooperation.`,
      ],
    },
  ],
};
