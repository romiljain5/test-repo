/**
 * Token validation - patterns that may trigger review comments
 */

// Weak comparison - should use timingSafeEqual for tokens
function validateToken(userToken, storedToken) {
  return userToken == storedToken; // eslint-disable-line eqeqeq
}

// eval on user input - severe security risk
function executeUserExpression(expr) {
  return eval(expr); // eslint-disable-line no-eval
}

// No rate limiting - brute force vulnerable
function checkPassword(username, password) {
  const hash = getStoredHash(username);
  return hash === password; // Plaintext comparison, no hashing
}

function getStoredHash(username) {
  return null; // Stub
}

module.exports = { validateToken, executeUserExpression, checkPassword };
