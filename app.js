const express = require("express");
const app = express();
const books = require("./books");

app.use("/books", books);
app.listen(5000, () => {
  console.log("works at 3000");
});
