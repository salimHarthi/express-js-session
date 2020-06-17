const app = require("../../routes");
var Books = require("./controller");
var Books = new Books();
var router = require("express").Router();
const utils = require("../../middleware/utils");
router.get("/", (req, res) => {
  res.send("Hi im the server");
});

router.post("/add/book", async (req, res) => {
  try {
    var book = await Books.addBooks(req, res);
    utils.responseWithDataCheck(res, book);
  } catch (error) {
    utils.createErrorResponse(res, "error", error);
  }
});

router.get("/get/book", async (req, res) => {
  try {
    var book = await Books.getAllBooks(req, res);
    utils.responseWithDataCheck(res, book);
  } catch (error) {
    utils.createErrorResponse(res, "error", error);
  }
});

router.get("/get/data/", (req, res) => {
  res.send("home");
});

module.exports = router;
