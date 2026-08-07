/**
 * User API handler - intentionally has patterns that may trigger review comments
 */

function fetchUserById(userId) {
  // No null/undefined check - may cause issues
  const user = getUserFromCache(userId);
  return user.name; // Potential null dereference if user not found
}

function getUserFromCache(id) {
  const cache = {};
  return cache[id]; // Always returns undefined - logic bug
}

// String concatenation in query-like context (potential injection pattern)
function buildUserQuery(username) {
  return 'SELECT * FROM users WHERE name = "' + username + '"';
}

// No input validation
function processPayment(amount, userId) {
  const result = chargeCard(amount);
  return { success: true, userId }; // userId could be undefined
}

function chargeCard(amount) {
  // Missing implementation - would fail at runtime
  throw new Error('Not implemented');
}

module.exports = {
  fetchUserById,
  buildUserQuery,
  processPayment,
};
