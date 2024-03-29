var express = require('express');
var app = express();

var PORT = process.env.PORT || 3000;

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require('express-handlebars');

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/catsController");

app.use(routes);

app.listen(PORT, function() {
    console.log("Sever listening on: http://localhost:" + PORT);
});