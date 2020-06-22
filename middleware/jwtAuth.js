const jwt = require("jsonwebtoken");

function generateToken(userId) {
  return jwt.sign(userId, "jashdkjashdlasjcuahkasjdlas", {
    expiresIn: "12h",
  });
}

module.exports = {
  generateToken,
};
