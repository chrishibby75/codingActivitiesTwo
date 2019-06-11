var express = require('express');
var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//====================================================================================

var exphbs = require('express-handlebars');

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//====================================================================================

var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "quotes_db"
});

connection.connect(function(err) {
    if (err) {
        console.error("Error connecting: " + err.stack);
        return;
    }
    console.log("Connected as id " + connection.threadId);
});

app.get("/", function(req, res) {
    connection.query("SELECT * FROM quotes;", function(err, data) {
        if (err) {
            return res.status(500).end();
        }
        res.render("index", { quotes: data });
    });
});

app.get("/:id", function(req, res) {
    connection.query("SELECT * FROM quotes WHERE id = ?", [req.params.id], function(err, data) {
        if (err) {
            return res.status(500).end();
        }
        console.log(data);
        res.render("single-quote", data[0]);
    });
});

app.post("/api/quotes", function(req, res) {
    connection.query("INSERT INTO quotes (author, quote) VALUES (?, ?)", [req.body.author, req.body.quote], function(err, result) {
        if (err) {
            return res.status(500).end();
        }
        res.json({ id: result.insertId });
    });
});

app.delete("/api/quotes/:id", function(req, res) {
    connection.query("DELETE FROM quotes WHERE id = ?", [req.params.id], function(err, result) {
        if (err) {
            return res.status(500).end();
        }
        else if (result.affectedRows === 0) {
            return res.status(404).end();
        }
        res.status(200).end();
    });
});

app.put("/api/quotes/:id", function(req, res) {
    connection.query("UPDATE quotes SET author = ?, quotes = ? WHERE id = ?",
    [req.body.author, req.body.quote, req.params.id], function(err, result) {
        if (err) {
            return res.status(500).end();
        }
        else if (result.changedRows === 0) {
            return res.status(404).end();
        }
        res.status(200).end();
    });
});

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});