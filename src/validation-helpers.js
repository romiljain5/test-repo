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

/** RFC 4122 UUID (versions 1–5) */
function isUUID(str) {
  if (typeof str !== 'string') return false;
  return /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i.test(
    str
  );
}

module.exports = { isEmail, isURL, isNumeric, isEmpty, clamp, isUUID };
