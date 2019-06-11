var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "pets_db"
});

connection.connect(function(err) {
    if (err) {
        console.log("Error connecting: " + err.stack);
    }
    console.log("connected as ID: " + connection.threadId);
});

module.exports = connection;