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
    bio: null,
    // bio: 'Paste Christopher Duarte\'s bio here.',
  },
  {
    name: 'Daniel Davis',
    role: 'Contributor',
    bio: null,
    // bio: 'Paste Daniel Davis\'s bio here.',
  },
  {
    name: 'Dimitri Donas',
    role: 'Contributor',
    bio: null,
    // bio: 'Paste Dimitri Donas\'s bio here.',
  },
  {
    name: 'Lucy Bird',
    role: 'Co-Editor',
    bio: null,
    // bio: 'Paste Lucy Bird\'s bio here.',
  },
  {
    name: 'Nico Schwartz',
    role: 'Contributor',
    bio: null,
    // bio: 'Paste Nico Schwartz\'s bio here.',
  },
  {
    name: 'Oliver Manko',
    role: 'Contributor',
    bio: null,
    // bio: 'Paste Oliver Manko\'s bio here.',
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
