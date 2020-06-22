const db = require("../../db/models");
const Authors = require("../../db/models").authors;
const Books = require("../../db/models").books;
class Book_controller {
  // get authors
  async getAllauthors(req, res) {
    const authors = await Authors.findAll();
    return authors;
  }

  //add Auther
  async addAuther(req, res) {
    const authors = await Authors.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      address: req.body.address,
    });
    return authors;
  }

  // edit authors
  async editOneAuther(req, res) {
    var authors = await Authors.findByPk(req.params.authorId);
    for (let key in req.body) {
      if (req.body[key] != "" && req.body[key] != null) {
        authors[key] = req.body[key];
        await authors.save({ fields: [key] });
      }
    }
    return authors;
  }

  // edit authors
  async deleteOneAuther(req, res) {
    await Books.destroy({ where: { authorId: req.params.authorId } });
    await Authors.destroy({ where: { id: req.params.authorId } });
    return "deleted";
  }
  // get auther with all books
  async getAutherWithAllBooks(req, res) {
    var authors = await Authors.findByPk(req.params.authorId, {
      include: [{ model: Books }],
    });
    return authors;
  }
}

module.exports = Book_controller;
