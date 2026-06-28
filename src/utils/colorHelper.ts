import config from '../config.json';

const colors = ['emerald', 'orange', 'blue', 'purple', 'pink', 'indigo'];

export const getTagColor = (tag: string): string => {
  const normalized = tag.toLowerCase();
  
  // cast tag_colors to index signature type to prevent TypeScript indexing errors
  const tagColors = config.tag_colors as Record<string, string>;
  
  if (tagColors && tagColors[normalized]) {
    return tagColors[normalized];
  }
  
  // Generate a stable color index based on the characters of the tag string
  let hash = 0;
  for (let i = 0; i < normalized.length; i++) {
    hash = normalized.charCodeAt(i) + ((hash << 5) - hash);
  }
  const index = Math.abs(hash) % colors.length;
  return colors[index];
};
