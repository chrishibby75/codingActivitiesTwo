var express = require('express');
var mysql = require('mysql');

var app = express();

var PORT = process.env.PORT || 8080;

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "seinfeld_db"
});

connection.connect(function(err) {
    if (err) {
        console.log("Connection error: " + err.stack);
        return;
    }
    console.log("Connected as ID: " + connection.threadId);
});

app.get("/cast", function(req, res) {
    connection.query("SELECT * FROM actors order by id", function(err, result) {
        var html = "<h1> Actors Ordered By ID </h1>";

        html += "<ul>";

        for (var i = 0; i < result.length; i++) {
            html += "<li><p> ID: " + result[i].id + "</p>";
            html += "<p> Name: " + result[i].name + "</p>";
            html += "<p> Coolness Points: " + result[i].coolness_points + "</p>";
            html += "<p> Attitude: " + result[i].attitude + "</p></li>";
        }

        html += "</ul>";

        res.send(html);
    });
});

app.get("/coolness-chart", function(req, res) {
    connection.query("SELECT * FROM actors order by coolness_points DESC", function(err, result) {
        var html = "<h1> Actors by Coolness </h1>";

        html += "<ul>";

        for (var i = 0; i < result.length; i++) {
            html += "<li><p> ID: " + result[i].id + "</p>";
            html += "<p> Name: " + result[i].name + "</p>";
            html += "<p> Coolness Points: " + result[i].coolness_points + "</p>";
            html += "<p> Attitude: " + result[i].attitude + "</p></li>";
        }

        html += "</ul>";

        res.send(html);
    });
});

app.get("/attitude-chart/:att", function(req, res) {
    connection.query("SELECT * FROM actors WHERE attitude = ?", [req.params.att], function(err, result) {
        var html = "<h1> Actors With an Attitude of " + req.params.att + "</h1>";

        html += "<ul>";

        for (var i = 0; i < result.length; i++) {
            html += "<li><p> ID: " + result[i].id + "</p>";
            html += "<p> Name: " + result[i].name + "</p>";
            html += "<p> Coolness Points: " + result[i].coolness_points + "</p>";
            html += "<p> Attitude: " + result[i].attitude + "</p></li>";
        }

        html += "</ul>";

        res.send(html);
    });
});

app.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});