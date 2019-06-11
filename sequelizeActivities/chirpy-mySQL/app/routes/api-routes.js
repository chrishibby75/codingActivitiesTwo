var connection = require("../config/connection");

module.exports = function(app) {
    app.get("/api/all", function(req, res) {
        var queryString = "SELECT * FROM chirps";

        connection.query(queryString, function(err, result) {
            if (err) throw err;
            res.json(result);
        });
    });

    app.post("/api/new", function(req, res) {
        console.log("Chirp data: ");
        console.log(req.body);

        var queryString = "INSERT INTO chirps (author, body, created_at) VALUES (?,?,?)";

        connection.query(queryString, [req.body.author, req.body.body, req.body.created_at], function(err, result) {
            if (err) throw err;

            console.log("Chirp successfully saved!");

            res.end();
        });
    });
};