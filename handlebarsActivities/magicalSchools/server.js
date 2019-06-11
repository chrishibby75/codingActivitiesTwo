var express = require('express');
var mysql = require('mysql');

var app = express();

var PORT = process.env.PORT || 8080;

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "wizard_schools_db"
});

connection.connect(function(err) {
    if (err) {
        console.log("error connecting " + err.stack);
        return;
    }
    console.log("Connected as ID: " + connection.threadId);
});

app.get("/", function(req, res) {
    connection.query("SELECT * FROM schools", function(err, result) {
        var html = "<h1> Magical Schools </h1>";
        html += "<ul>";
        
        for (var i = 0; i < result.length; i++) {
            html += "<li><p>ID: " + result[i].id + "</p>";
            html += "<p>School: " + result[i].name + "</p></li>";
        }

        html += "</ul>";

        res.send(html);
    });
});

app.listen(PORT, function() {
    console.log("App listening on: http://localhost:" + PORT);
});