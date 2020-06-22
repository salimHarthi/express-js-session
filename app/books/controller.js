const db = require("../../db/models");
const Books = require("../../db/models").books;
const Authors = require("../../db/models").authors;
var Authors_controller = require("../authers/controller");
var Authors_controller = new Authors_controller();
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
      authorId: req.params.authorId,
    });
    return books;
  }

  // edit books
  async editOneBook(req, res) {
    var books = await Books.findByPk(req.params.bookId);
    for (let key in req.body) {
      if (req.body[key] != "" && req.body[key] != null) {
        books[key] = req.body[key];
        await books.save({ fields: [key] });
      }
    }
    return books;
  }

  // edit books
  async deleteOneBook(req, res) {
    var books = await Books.destroy({ where: { id: req.params.bookId } });
    return "deleted";
  }

  //add book and author
  async addBooksAndAuthor(req, res) {
    var author = await Authors_controller.addAuther(req, res);
    newbook = {
      title: req.body.title,
      isbn: req.body.isbn,
      description: req.body.description,
      authorId: author.id,
    };
    const books = await Books.create(newbook);
    return books;
  }

  async getBooksWithAllAuther(req, res) {
    var books = await Books.findByPk(req.params.bookId, {
      include: [{ model: Authors, attributes: ["lastName"] }],
    });
    return books;
  }
}

module.exports = Book_controller;
