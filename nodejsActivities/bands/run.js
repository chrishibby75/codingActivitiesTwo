var bands = require('./bands');

if (process.argv[2]) {
    var genre = process.argv[2];
}

for (var key in bands) {
    if (key === genre || genre === undefined) {
        console.log("A " + key + " band is " + bands[key] + ".");
    }
}