/**
 * Sample utility for e2e testing of review cap
 */

function greet(name) {
  return `Hello, ${name}!`;
}

function add(a, b) {
  return a + b;
}

function capitalize(str) {
  if (!str) return '';
  return str.charAt(0).toUpperCase() + str.slice(1);
}

// O(n²) when O(n) possible - inefficient nested loop
function findDuplicates(arr) {
  const duplicates = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j] && !duplicates.includes(arr[i])) {
        duplicates.push(arr[i]);
      }
    }
  }
  return duplicates;
}

// Possible division by zero
function safeDivide(a, b) {
  return a / b;
}

// Hardcoded "secret" - security concern
const API_KEY = 'sk-test-12345-mock-key';

module.exports = { greet, add, findDuplicates, safeDivide, capitalize, API_KEY };
