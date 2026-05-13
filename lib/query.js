// E2E harness: parameterized style (L1-B clean).
module.exports.run = (userId, db) => db.query("SELECT * FROM users WHERE id = ?", [userId]);
