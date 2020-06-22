const utils = require("../middleware/utils");

async function allUsers(req, res, next) {
  try {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (!token) throw new Error("No token supplied");

    jwt.verify(token, "jashdkjashdlasjcuahkasjdlas", (error, userId) => {
      if (error) {
        throw new Error("Invalid or expired token");
      } else {
        req.token = userId;
        next();
      }
    });
  } catch (error) {
    utils.createErrorResponse(res, "Unauthenticated", error);
  }
}
