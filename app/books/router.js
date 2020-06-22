const app = require("../../routes");
var Books = require("./controller");
var Books = new Books();
var router = require("express").Router();
const utils = require("../../middleware/utils");

router.post("/add/book/:authorId", async (req, res) => {
  try {
    var book = await Books.addBooks(req, res);
    utils.responseWithDataCheck(res, book);
  } catch (error) {
    utils.createErrorResponse(res, "error", error);
  }
});

router.post("/add/book_author/", async (req, res) => {
  try {
    var book = await Books.addBooksAndAuthor(req, res);
    utils.responseWithDataCheck(res, book);
  } catch (error) {
    utils.createErrorResponse(res, "error", error);
  }
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////

router.get("/get/book", async (req, res) => {
  try {
    var book = await Books.getAllBooks(req, res);
    utils.responseWithDataCheck(res, book);
  } catch (error) {
    utils.createErrorResponse(res, "error", error);
  }
});
router.get("/get/book/a/:bookId", async (req, res) => {
  try {
    var book = await Books.getBooksWithAllAuther(req, res);
    utils.responseWithDataCheck(res, book);
  } catch (error) {
    utils.createErrorResponse(res, "error", error);
  }
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////

router.put("/edit/book/:bookId", async (req, res) => {
  try {
    var book = await Books.editOneBook(req, res);
    utils.responseWithDataCheck(res, book);
  } catch (error) {
    utils.createErrorResponse(res, "error", error);
  }
});
////////////////////////////////////////////////////////////////////////////////////////////////////////////
router.delete("/delete/book/:bookId", async (req, res) => {
  try {
    var book = await Books.deleteOneBook(req, res);
    utils.responseWithDataCheck(res, book);
  } catch (error) {
    utils.createErrorResponse(res, "error", error);
  }
});

module.exports = router;
