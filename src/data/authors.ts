export interface Author {
  name: string;
  role: string;
  bio: string | null; // set to null until bio is ready — page shows nothing
}

// ─────────────────────────────────────────────────────────
//  ADD / EDIT BIOS BELOW
//  • Set bio to a string with the author's bio text.
//  • Set bio to null to hide the bio section entirely.
// ─────────────────────────────────────────────────────────

const authors: Author[] = [
  {
    name: 'Aden Light',
    role: 'Co-Editor',
    bio: null,
    // bio: 'Paste Aden Light\'s bio here.',
  },
  {
    name: 'Christopher Duarte',
    role: 'Contributor',
    bio: 'Christopher Duarte is a first-generation American and first-generation college student at George Washington University, where he studies Political Science and Finance. He is interested in U.S.–Mexico relations and how policy decisions shape cross-border communities and economic development. In examining these regions, he observed the effect U.S.–Mexico relations have had on communities far from the capitals of Washington, D.C. and Mexico City.',
  },
  {
    name: 'Daniel Davis',
    role: 'Contributor',
    bio: 'Daniel Davis was born in Mount Kisco, New York, and lived there for 18 years until attending The George Washington University\'s Columbian College of Arts and Sciences as a Political Science major with a minor in Music. There, he is expected to graduate in May as a member of the 2026 graduating class.',
  },
  {
    name: 'Dimitrios Donas',
    role: 'Contributor',
    bio: 'Dimitrios Donas is a graduating junior at GW, majoring in Political Science with minors in Communications and Philosophy. Dimitrios is passionate about politics and journalism, having served on both editorial boards and political campaigns.',
  },
  {
    name: 'Lucy Bird',
    role: 'Co-Editor',
    bio: 'Lucy Bird is a senior from Connecticut studying economics and political science with a concentration in public policy.',
  },
  {
    name: 'Nico Schwartz',
    role: 'Contributor',
    bio: 'Nico Schwartz is a Senior from Boston Massachusetts majoring in Political Science and minoring in Data Science.',
  },
  {
    name: 'Oliver Manko',
    role: 'Contributor',
    bio: 'Oliver Manko was born in New Jersey and raised in South Florida before continuing his education at The George Washington University\'s Columbian College of Arts and Sciences. Majoring in Political Science, he is expecting to graduate in May with the Class of 2026.',
  },
  {
    name: 'Sydney Sharpley',
    role: 'Contributor',
    bio: 'Sydney Sharpley was raised in Chicago, IL before moving to Austin, TX. A senior at George Washington University, Sydney is a declared Political Science Major at the Columbian College of Arts and Sciences.',
  },
];

export function getAuthorByName(name: string): Author | undefined {
  return authors.find(a => a.name === name);
}
