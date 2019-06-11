var express = require('express');
var app = express();
var PORT = process.env.PORT || 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("app/public"));

require("./app/routes/api-routes")(app);
require("./app/routes/html-routes")(app);

app.listen(PORT, function() {
    console.log("App listening on: http://localhost:" + PORT);
});