var NodeGeocoder = require('node-geocoder');
var weather = require('weather-js');

var options = {
    provider: "mapquest",
    apiKey: "rJU5htbPAmU9Iw9wVpcfmvyjGZMhjQgo"
};

var geocoder = NodeGeocoder(options);

var address = process.argv.slice(2).join(" ");

geocoder.geocode(address, function(err, data) {
    console.log(JSON.stringify(data[0], null, 2));
    var address = data[0];
    var search = "";

    if(address.city) {
        search += address.city;
    }
    if(address.stateCode) {
        search += ", " + address.stateCode;
    }
    if(address.zipcode) {
        search += " " +address.zipcode;
    }
    if(address.countryCode) {
        search += " " + address.countryCode;
    }

    weather.find({ search: search, degreeType: "F" }, function(err, result) {
        if(err) {
            console.log("\r\n\r\n\r\n");
            console.log("Sorry, we don't have enough data for that location. Try another place.");
            console.log("\r\n\r\n\r\n");
            return;
        }
        console.log("\r\n\r\n\r\n");
        console.log("Weather forecast for " + search);
        console.log("Current temperature " + result[0].current.temperature + "° F");
        console.log("Sky " + result[0].current.skytext);
        console.log("Tomorrow's forecast: Low of " +
        result[0].forecast[1].low +
        "° F | High of " +
        result[0].forecast[1].high +
        "° F"
        );

        console.log("\r\n\r\n\r\n");
    });
});