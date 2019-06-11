var fs = require('fs');
var http = require('http');

var PORT = 8080;

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
    var path = req.url;

    switch(path) {
        case "/thanks":
        return renderThankYouPage(req, res);

        default:
        return renderWelcomePage(req, res);
    }
}

function renderWelcomePage(req, res) {
    fs.readFile(__dirname + "/index.html", function(err, data) {
        if (err) {
            res.writeHead(500, { "Content-Type": "text/html" });
            res.end("<html><head><title>Oops</title><body><h1>Oops, there was an error.</h1></body></html>");
        }
        else {
            res.writeHead(200, { "Content-Type": "text/html" });
            res.end(data);
        }
    });
}

function renderThankYouPage(req, res) {
    var requestData = "";

    var myHTML = "<html><head><title>Hello Noder!</title></head><body><h1>Oops, I didn't get any data!</h1></body></html>";
    req.on("data", function(data) {
        requestData += data;
        console.log("You just posted some data to the server:\n", requestData);

        myHTML = "<html><head><title>Hello Noder!</title><body><h1>Thank you for the data: </h1><code>" + 
        requestData + "</code></body><html>";
    });

    req.on("end", function() {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(myHTML);
    });
}

server.listen(PORT, function() {
    console.log("Server listening on: http://localhost:" + PORT);
});