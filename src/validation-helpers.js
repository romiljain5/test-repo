/**
 * Input validation helpers
 */

function isEmail(str) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str);
}

function isURL(str) {
  try {
    new URL(str);
    return true;
  } catch {
    return false;
  }
}

function isNumeric(value) {
  return !isNaN(value) && !isNaN(parseFloat(value));
}

function isEmpty(value) {
  if (value == null) return true;
  if (typeof value === 'string') return value.trim().length === 0;
  if (Array.isArray(value)) return value.length === 0;
  if (typeof value === 'object') return Object.keys(value).length === 0;
  return false;
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

module.exports = { isEmail, isURL, isNumeric, isEmpty, clamp };
