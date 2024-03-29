var express = require('express');
var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//==================================================

var exphbs = require('express-handlebars');
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//===========================================================

var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "wishes_db"
});

connection.connect(function(err) {
    if(err) {
        console.error("Error connecting: " + err.stack);
        return;
    }
    console.log("Connected as ID: " + connection.threadId);
});

app.get("/", function(req, res) {
    connection.query("SELECT * FROM wishes;", function(err, data) {
        if (err) {
            throw err;
        }
        res.render("index", { wishes: data });
    });
});

app.post("/", function(req, res) {
    connection.query("INSERT INTO wishes (wish) VALUES (?);", [req.body.wish], function(err, result) {
        if(err) {
            throw err;
        }
        res.redirect("/");
    });
});

app.listen(PORT, function() {
    console.log("App listening on: http://localhost:" + PORT);
});