var express = require('express');
var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//================================================================================

var mysql = require('mysql');
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "movie_planner_db"
});

connection.connect(function(err) {
    if (err) {
        console.error("Error connecting: " + err.stack);
        return;
    }
    console.log("Connected as id " + connection.threadId);
});

//=====================================================================================

var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.get("/", function(req, res) {
    connection.query("SELECT * FROM movies;", function(err, data) {
        if (err) {
            return res.status(500).end();
        }
        res.render("index", { movies: data });
    });
});

app.post("/movies", function(req, res) {
    connection.query("INSERT INTO movies (movie) VALUES (?)", [req.body.movie], function(err, result) {
        if (err) {
            return res.status(500).end();
        }

        res.json({ id: result.insertId });
        console.log({ id: result.insertId });
    });
});

app.get("/movies", function(req, res) {
    connection.query("SELECT * FROM movies;", function(err, result) {
        if (err) {
            return res.status(500).end();
        }
        res.json(data);
    });
});

app.put("/movies/:id", function(req, res) {
    connection.query("UPDATE movies SET movie = ? WHERE id = ?", [req.body.movie, req.params.id], function(err, result) {
        if (err) {
            return res.status(500).end();
        }
        else if (result.changedRows === 0) {
            return res.status(404).end();
        }
        res.status(200).end();
    });
});

app.delete("/movies/:id", function(req, res) {
    connection.query("DELETE FROM movies WHERE id = ?", [req.params.id], function(err, result) {
        if (err) {
            return res.status(500).end();
        }
        else if (result.affectedRows === 0) {
            return res.status(404).end();
        }
        res.status(200).end();
    });
});

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});