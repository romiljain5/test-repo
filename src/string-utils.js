/**
 * Small string helpers for demos.
 */

function truncate(str, maxLen) {
  if (!str || str.length <= maxLen) return str || '';
  return `${str.slice(0, maxLen - 1)}…`;
}

function slugify(str) {
  return (str || '')
    .trim()
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

module.exports = { truncate, slugify };
