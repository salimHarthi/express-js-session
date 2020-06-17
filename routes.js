const express = require("express");
const app = express();

app.use("/books", require("./app/books/router"));

app.use("/authers", require("./app/authers/router"));

module.exports = app;
