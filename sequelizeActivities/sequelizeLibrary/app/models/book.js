var Sequelize = require('sequelize');
var sequelize = require("../config/connection");

var Book = sequelize.define("book", {
    title: Sequelize.STRING,
    author: Sequelize.STRING,
    genre: Sequelize.STRING,
    pages: Sequelize.INTEGER
});

Book.sync();

module.exports = Book;