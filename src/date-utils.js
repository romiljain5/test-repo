/**
 * Small date helpers for demos.
 */

function isWeekend(date) {
  const d = date instanceof Date ? date : new Date(date);
  const day = d.getUTCDay();
  return day === 0 || day === 6;
}

function toIsoDateString(date) {
  const d = date instanceof Date ? date : new Date(date);
  return d.toISOString().slice(0, 10);
}

module.exports = { isWeekend, toIsoDateString };
