var fs = require('fs');
var request = require('request');

var TV = function() {
    var divider = "\n===========================================================\n\n";

    this.findShow = function(show) {
        var URL = "http://api.tvmaze.com/singlesearch/shows?q=" + show;

        request(URL, function(err, response, body) {
            var jsonData = JSON.parse(body);

            var showData = [
                "Show: " + jsonData.name,
                "Genre(s): " + jsonData.genres.join(", "),
                "Rating: " + jsonData.rating.average,
                "Network: " + jsonData.network.name,
                "Summary: " + jsonData.summary
            ].join("\n\n");

            fs.appendFile("log.txt", showData + divider, function(err) {
                if(err) throw err;
                console.log(showData);
            });
        });
    };
    
    this.findActor = function(actor) {
        var URL = "http://api.tvmaze.com/search/people?q=" + actor;
        request(URL, function(err, response, body) {
            var jsonData = JSON.parse(body)[0].person;

            var actorData = [
                "Name: " + jsonData.name,
                "Birthday: " + jsonData.birthday,
                "Gender: " + jsonData.gender,
                "Country: " + jsonData.country.name,
                "URL: " + jsonData.url 
            ].join("\n\n");

            fs.appendFile("log.txt", actorData + divider, function(err) {
                if(err) throw err;
                console.log(actorData);
            });
        });
    };
};

module.exports = TV;