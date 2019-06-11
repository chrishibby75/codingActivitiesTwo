var TV = require("./tv");

var tv = new TV();

var search = process.argv[2];
var term = process.argv.slice(3).join(" ");

if (!search) {
    search = "show";
}

if (!term) {
    term = "Breaking Bad";
}

if (search === "show") {
    console.log("Searching for TV show");
    tv.findShow(term);
}
else {
    console.log("Searching for Actor");
    tv.findActor(term);
}