var express = require('express');
var exphbs = require('express-handlebars');

var app = express();

var PORT = process.env.PORT || 3000;

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var animals = [
    {
        animalType: "dog",
        pet: true,
        fierceness: 4
    },
    {
        animalType: "cat",
        pet: true,
        fierceness: 7
    },
    {
        animalType: "lion",
        pet: false,
        fierceness: 9
    },
    {
        animalType: "gorilla",
        pet: false,
        fierceness: 8
    },
    {
        animalType: "giraffe",
        pet: false,
        fierceness: 2
    },
    {
        animalType: "rabbit",
        pet: true,
        fierceness: 1
    },
    {
        animalType: "hamster",
        pet: true,
        fierceness: 3
    }
];

app.get("/dog", function(req, res) {
    res.render("dog", animals[0]);
});

app.get("/all-pets", function(req, res) {
    var data = {
        animals: []
    };
    for (var i = 0; i < animals.length; i += 1) {
        var currentAnimal = animals[i];

        if(currentAnimal.pet) {
            data.animals.push(currentAnimal);
        }
    }

    res.render("index", data);
});

app.get("/all-non-pets", function(req, res) {
    var data = {
        animals: []
    };
    for (var i = 0; i < animals.length; i += 1) {
        var currentAnimal = animals[i];

        if(!currentAnimal.pet) {
            data.animals.push(currentAnimal);
        }
    }

    res.render("index", data);
});

app.listen(PORT, function() {
    console.log("App listening on: http://localhost:" + PORT);
});