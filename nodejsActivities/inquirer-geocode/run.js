var NodeGeocoder = require('node-geocoder');
var inquirer = require('inquirer');

var options = {
    provider: "mapquest",
    apiKey: "rJU5htbPAmU9Iw9wVpcfmvyjGZMhjQgo"
};

var geocoder = NodeGeocoder(options);

inquirer.prompt([
    {
        type: "input",
        name: "userInput",
        message: "Which location or landmark would you like to geocode?"
    }
]).then(function(location) {
    geocoder.geocode(location.userInput, function(err, data) {
        console.log(JSON.stringify(data, null, 2));
    });
});