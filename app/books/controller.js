const db = require("../../db/models");
const Books = require("../../db/models").books;

class Book_controller {
  // get books
  async getAllBooks(req, res) {
    const books = await Books.findAll();
    return books;
  }

  //add book
  async addBooks(req, res) {
    const books = await Books.create({
      title: req.body.title,
      isbn: req.body.isbn,
      description: req.body.description,
      authorId: req.body.authorId,
    });
    return books;
  }
}

module.exports = Book_controller;
