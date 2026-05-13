// E2E harness: OWASP SQLi pattern on changed line (reverted in step4).
module.exports.run = (userId) => "SELECT * FROM users WHERE id = " + userId;
