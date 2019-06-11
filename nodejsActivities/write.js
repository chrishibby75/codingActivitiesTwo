var fs = require('fs');

fs.writeFile("movies.txt", "The Matrix, Constantine", function(err) {
    if(err) {
        return console.log(err);
    }
    console.log("movies.txt was updated!");
})