/**
 * Tiny math helpers for demos.
 */

function multiply(a, b) {
  return a * b;
}

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

module.exports = { multiply, clamp };
