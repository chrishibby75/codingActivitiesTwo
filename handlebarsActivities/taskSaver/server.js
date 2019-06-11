var express = require('express');
var app = express();

var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// ================================================================

var exphbs = require('express-handlebars');

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
//=================================================================

var mysql = require('mysql');

connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "task_saver_db"
});

connection.connect(function(err) {
    if (err) {
        console.error("error connecting:" + err);
        return;
    }
    console.log("Connected as ID: " + connection.threadId);
});

app.get("/", function(req, res) {
    connection.query("SELECT * FROM tasks;", function(err, data) {
        if(err) throw err;

        res.render("index", {tasks: data});
    });
});

app.post("/", function(req, res) {
    connection.query("INSERT INTO tasks (task) VALUES(?)", [req.body.task], function(err, result) {
        if(err) throw err;

        res.redirect("/");
    });
});

app.listen(PORT, function() {
    console.log("App listening on: http://localhost:" + PORT);
});