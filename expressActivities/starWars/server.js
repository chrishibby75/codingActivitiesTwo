var express = require('express');
var path = require('path');

var app = express();
var PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var characters = [
    {
        routeName: "yoda",
        name: "Yoda",
        role: "Jedi Master",
        age: 90,
        forcePoints: 2000
    },
    {
        routeName: "darthmaul",
        name: "Darth Maul",
        role: "Sith Lord",
        age: 200,
        forcePoints: 1200
    },
    {
        routeName: "obiwankenobi",
        name: "Obi Wan Kenobi",
        role: "Jedi",
        age: 75,
        forcePoints: 1500
    },
    {
        routeName: "darthvader",
        name: "Darth Vader",
        role: "World Destroyer",
        age: 45,
        forcePoints: 2500
    }
];

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "add.html"));
});

app.get("/all", function(req, res) {
    res.sendFile(path.join(__dirname, "all.html"));
})

app.get("/api/characters", function(req, res) {
    return res.json(characters);
});

app.get("/api/characters/:character", function(req, res) {
    var chosen = req.params.character;
    console.log(chosen);
    for (var i = 0; i < characters.length; i++) {
        if (chosen === characters[i].routeName) {
            return res.json(characters[i]);
        }
    }
    res.json(false);
});

app.post("/api/characters", function(req, res) {
    var newcharacter = req.body;
    newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();
    console.log(newcharacter);
    characters.push(newcharacter);
    res.json(newcharacter);
});

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
})