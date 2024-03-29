var mysql = require('mysql');
var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "playlist_db"
});

connection.connect(function(err) {
    if(err) throw err;
    console.log("connected as id " + connection.threadId);
    queryAllSongs();
    queryMetalSongs();
});

function queryAllSongs() {
    connection.query("SELECT * FROM songs", function(err, res) {
        if(err) throw err;
        console.log("===========================================================");
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].id + " | " + res[i].title + " | " + res[i].artist + " | " + res[i].genre);
        }
        console.log("=======================================================");
    });
}

function queryMetalSongs() {
    connection.query("SELECT * FROM songs WHERE genre=?", ["Heavy Metal"], function(err, res) {
        if(err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log(res[i].id + " | " + res[i].title + " | " + res[i].artist + " | " + res[i].genre);
        }
        console.log("=======================================================");
        connection.end();
    });
}