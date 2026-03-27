/**
 * Small array helpers for demos.
 */

function unique(arr) {
  return [...new Set(arr)];
}

function chunk(arr, size) {
  if (size < 1) return [];
  const out = [];
  for (let i = 0; i < arr.length; i += size) {
    out.push(arr.slice(i, i + size));
  }
  return out;
}

module.exports = { unique, chunk };
