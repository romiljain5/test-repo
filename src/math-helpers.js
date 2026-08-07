/**
 * Tiny math helpers for demos.
 */

function multiply(a, b) {
  return a * b;
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function roundTo(value, decimals) {
  const p = 10 ** decimals;
  return Math.round(value * p) / p;
}

module.exports = { multiply, clamp, roundTo };
