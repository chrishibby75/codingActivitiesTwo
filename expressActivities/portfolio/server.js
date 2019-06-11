var http = require('http');

var PORT = 8080;

var server = http.createServer(handleRequest);

server.listen(PORT, function() {
    console.log("Server listening on: http://localhost: " + PORT);
});

function handleRequest(req, res) {
    var path = req.url;
    switch(path) {
        case "/":
        return displayRoot(path, req, res);

        case "/portfolio":
        return diplayPortfolio(path, req, res);

        default:
        return display404(path, req, res);

    }
}

function displayRoot(url, req, res) {
    var myHTML = "<html>" + 
    "<body><h1>Home</h1>" + 
    "<a href = '/portfolio'>Porfolio</a>" +
    "</body></html>";

    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(myHTML);
}

function diplayPortfolio(url, req, res) {
    var myHTML = "<html><body><h1>MY Portfolio</h1>" +
    "<a href='/'>Go Home</a>" +
    "</body></html>";
    
    res.writeHead(200, { "Content-Type": "text/html" });

    res.end(myHTML);
}

function display404(url, req, res) {
    var myHTML = "<html><body><h1>404 Not Found </h1>" +
    "<p>The page you are looking for: " + url + " can't be found.</p>" +
    "</body></html>";

    res.writeHead(404, { "Content-Type": "text/html" });

    res.end(myHTML);
}