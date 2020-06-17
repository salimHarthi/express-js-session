"use strict";
module.exports = (sequelize, DataTypes) => {
  const books = sequelize.define(
    "books",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      title: DataTypes.STRING,
      isbn: DataTypes.INTEGER,
      description: DataTypes.TEXT,
    },
    {}
  );
  books.associate = function (models) {
    books.belongsTo(models.authors);
  };
  return books;
};
