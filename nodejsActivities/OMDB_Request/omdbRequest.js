var request = require('request');

var nodeArgs = process.argv;

movieName = "";

for (var i = 2; i < nodeArgs.length; i++) {
    if (i > 2 && i < nodeArgs.length) {
        movieName = movieName + "+" + nodeArgs[i];
    }
    else {
        movieName += nodeArgs[i];
    }
}

var apiKey = "bf1cc516";
var queryUrl = "https://www.omdbapi.com/?t=" + movieName + "&y=&plot=full&apikey=" + apiKey;
console.log(queryUrl);

request(queryUrl, function(error, response, body) {
    if(!error && response.statusCode === 200) {
        console.log("Release Year: " + JSON.parse(body).Year);
        console.log("Plot: " + JSON.parse(body).Plot);
        console.log("Cast: " + JSON.parse(body).Actors);
    }
});