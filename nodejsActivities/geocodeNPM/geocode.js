var nodeGeocode = require('node-geocoder');

var options = {
    provider: "mapquest",
    apiKey: "rJU5htbPAmU9Iw9wVpcfmvyjGZMhjQgo"
};

var geocoder = nodeGeocode(options);
var address = process.argv.slice(2).join(" ");

console.log("Searching for the " + address + ".");

geocoder.geocode(address, function(err, data) {
    console.log(JSON.stringify(data, null, 2));
});