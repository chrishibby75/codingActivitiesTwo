var express = require('express');
var exphbs = require('express-handlebars');

var app = express();

var PORT = process.env.PORT || 8080;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var lunches = [
    {
        lunch: "Fried haddock, clam chowder and rice pilaf with a pinot grigio."
    },
    {
        lunch: "Pho, fried spring roles and Kirin beer."
    },
    {
        lunch: "Two enchiladas, a taco with rice and beans"
    },
    {
        lunch: "Mongolian stir fry with ham fried rice and sake."
    },
    {
        lunch: "Fried chicken and waffles, mac and cheese and a PBR."
    }
];

app.get("/monday", function(req, res) {
    res.render("index", lunches[0]);
});

app.get("/tuesday", function(req, res) {
    res.render("index", lunches[1]);
});

app.get("/wednesday", function(req, res) {
    res.render("index", lunches[2]);
});

app.get("/thursday", function(req, res) {
    res.render("index", lunches[3]);
});

app.get("/friday", function(req, res) {
    res.render("index", lunches[4]);
});

app.get("/lunches", function(req, res) {
    res.render("all-lunches", {
        foods: lunches,
        eater: "Chris"
    });
});

app.listen(PORT, function() {
    console.log("App listening on: http://localhost:" + PORT);
});