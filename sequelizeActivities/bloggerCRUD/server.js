var express = require('express');
var app = express();
var PORT = process.env.PORT || 8080;

var db = require('./models');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

require('./routes/author-api-routes')(app);
require('./routes/html-routes')(app);
require('./routes/post-api-routes')(app);

db.sequelize.sync({ force: true }).then(function() {
    app.listen(PORT, function() {
        console.log("App listening on: http://localhost:" + PORT);
    });
});