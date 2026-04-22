export const a = (text: string, url: string) =>
  `<a href="${url.replace(/&/g, '&amp;')}" target="_blank" rel="noopener noreferrer">${text}</a>`;
