const db = require("../../models");
const Books = require("../../models").books;

var router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Hi im the server");
});

router.post("/add/book", async (req, res) => {
  try {
    var books = await Books.create({
      title: req.body.title,
      isbn: req.body.isbn,
      description: req.body.description,
      authorId: req.body.authorId,
    });
    res.json(books);
  } catch (error) {
    res.json(error);
  }
});

router.get("/get/book", async (req, res) => {
  try {
    var books = await Books.findAll();
    res.json(books);
  } catch (error) {
    res.json(error);
  }
});

router.get("/get/data/", (req, res) => {
  res.send("home");
});

module.exports = router;
