"use strict";
module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define(
    "users",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        trim: true,
        validate: {
          isEmail: true,
          notEmpty: true,
        },
      },
      password: {
        type: DataTypes.STRING,
        required: true,
        trim: true,
        minlength: 7,
        allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      username: DataTypes.STRING,
      role: DataTypes.STRING,
    },
    {}
  );
  users.associate = function (models) {
    users.hasMany(models.books);
    users.hasMany(models.authors);
  };
  return users;
};
