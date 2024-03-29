var Book = require("../models/book");

module.exports = function(app) {
    app.get("/api/all", function(req, res) {
        Book.findAll({}).then(function(results) {
            res.json(results);
        });
    });

    app.get("/api/:book", function(req, res) {
        Book.findAll({
            where: {
                title: req.params.book
            }
        }).then(function(results){
            res.json(results);
        });
    });

    app.get("/api/author/:author", function(req, res) {
        Book.findAll({
            where: {
                author: req.params.author
            }
        }).then(function(results) {
            res.json(results);
        });
    });

    app.get("/api/genre/:genre", function(req, res) {
        Book.findAll({
            where: {
                genre: req.params.genre
            }
        }).then(function(results) {
            res.json(results);
        });
    });

    app.get("/api/books/long", function(req, res) {
        Book.findAll({
            where: {
                pages: {
                    $gte: 150
                }
            }, 
            order: [["pages", "DESC"]]
        }).then(function(results) {
            res.json(results);
        });
    });

    app.get("/api/books/short", function(req, res) {
        Book.findAll({
            where: {
                pages: {
                    $lt: 150
                }
            },
            order: [["pages", "ASC"]]
        }).then(function(results) {
            res.json(results);
        });
    });

    app.post("/api/new", function(req, res) {
        console.log("Book Data: ");
        console.log(req.body);
        Book.create({
            title: req.body.title,
            author: req.body.author,
            genre: req.body.genre,
            pages: req.body.pages
        }).then(function(results) {
            res.json(results);
        });
    });

    app.delete("/api/book/:id", function(req, res) {
        console.log("Book ID: ");
        console.log(req.params.id);
        Book.destroy({
            where: {
                id: req.params.id
            }
        }).then(function() {
            res.end();
        });
    });
};