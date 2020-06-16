const express = require("express");
const app = express();
const books = require("./app/books/books");
const morgan = require("morgan"); //logs requste
const morganBody = require("morgan-body"); //logs body
const cors = require("cors"); // allow you to get and send data from defrent server or diffrent port
const bodyParser = require("body-parser"); //body-parser extract the entire body portion of an incoming request stream and exposes it on req.body.
const db = require("./models");

app.use(express.json()); // allow to read or decode json

app.use(bodyParser.json()); //tells the system that you want json to be used.
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
app.use(morgan("dev"));
morganBody(app);
app.use("/books", books);
app.listen(5000, () => {
  console.log("works at 5000");
});
