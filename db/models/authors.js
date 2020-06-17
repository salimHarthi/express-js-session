"use strict";
module.exports = (sequelize, DataTypes) => {
  const authors = sequelize.define(
    "authors",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      address: DataTypes.STRING,
    },
    {}
  );
  authors.associate = function (models) {
    authors.hasMany(models.books);
  };
  return authors;
};
