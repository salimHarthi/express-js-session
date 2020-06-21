const app = require("../../routes");
var Authors = require("./controller");
var Authors = new Authors();
var router = require("express").Router();
const utils = require("../../middleware/utils");

router.post("/add/author/", async (req, res) => {
  try {
    var author = await Authors.addAuther(req, res);
    utils.responseWithDataCheck(res, author);
  } catch (error) {
    utils.createErrorResponse(res, "error", error);
  }
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////

router.get("/get/author", async (req, res) => {
  try {
    var author = await Authors.getAllauthors(req, res);
    utils.responseWithDataCheck(res, author);
  } catch (error) {
    utils.createErrorResponse(res, "error", error);
  }
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////

router.put("/edit/author/:authorId", async (req, res) => {
  try {
    var author = await Authors.editOneAuther(req, res);
    utils.responseWithDataCheck(res, author);
  } catch (error) {
    utils.createErrorResponse(res, "error", error);
  }
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////
router.delete("/delete/author/:authorId", async (req, res) => {
  try {
    var author = await Authors.deleteOneAuther(req, res);
    utils.responseWithDataCheck(res, author);
  } catch (error) {
    utils.createErrorResponse(res, "error", error);
  }
});

module.exports = router;
