var fs = require('fs');
var http = require('http');
var PORT = 8080;

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
    var path = req.url;
    switch(path) {
        case "/food":
        case "/movies":
        case "/frameworks":
        return renderHTML(path + ".html", res);

        default:
        return renderHTML("/index.html", res);
    }
}

function renderHTML(filePath, res) {
    return fs.readFile(__dirname + filePath, function(err, data) {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);
    });
}

server.listen(PORT, function(){
    console.log("Server is listening on PORT: " + PORT);
})