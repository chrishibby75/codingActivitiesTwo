var express = require('express');
var exphbs = require('express-handlebars');

var app = express();

var PORT = process.env.PORT || 8080;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var icecreams = [
    { name: "vanilla", price: 3, awesomeness: 3 },
    { name: "chocolate", price: 4, awesomeness: 5 },
    { name: "mint chocolate chip", price: 7, awesomeness: 10 },
    { name: "rocky road", price: 6, awesomeness: 7 },
    { name: "green tea", price: 4, awesomeness: 5 },
    { name: "bubblegum", price: 4, awesomeness: 5 },
    { name: "caramel cashew", price: 7, awesomeness: 9 },
    { name: "strawberry", price: 3, awesomeness: 4 }
];

app.get("/icecream/:name", function(req, res) {
    for (var i = 0; i < icecreams.length; i++) {
        if (icecreams[i].name === req.params.name) {
            res.render("icecream", icecreams[i]);
        }
    }
});

app.get("/icecream", function(req, res) {
    res.render("ics", { ics: icecreams });
});

app.listen(PORT, function() {
    console.log("App listening on: http://localhost:" + PORT);
});