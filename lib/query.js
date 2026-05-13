// E2E-C-A: intentional bad pattern for OWASP SQLi L1.
module.exports.run = (userId) => "SELECT * FROM users WHERE id = " + userId;
