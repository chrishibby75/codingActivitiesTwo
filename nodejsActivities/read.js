var fs = require('fs');

fs.readFile("movies.txt", "utf8", function(error, data) {
    if(error) {
        return console.log(error);
    }
    console.log(data);

    var dataArr = data.split(",");

    console.log(dataArr);
});