var router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Hi im the server");
});

router.get("/home", (req, res) => {
  book = { isbn: "5456465", title: "book of books" };
  title = book.title;
  res.send(title);
});

router.get("/about", (req, res) => {
  res.send("Hi im the server");
});

router.get("/get/data/", (req, res) => {
  res.send("home");
});

module.exports = router;
