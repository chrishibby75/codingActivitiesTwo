var http = require('http');

PORTONE = 7000;
PORTTWO = 7500;

function handleRequestOne(request, response) {
    response.end("To err is human, but you need a computer to really foul things up!");
}

function handleRequestTwo(request, response) {
    response.end("Never trust a skinny chef!");
}

var serverOne = http.createServer(handleRequestOne);
var serverTwo = http.createServer(handleRequestTwo);

serverOne.listen(PORTONE, function() {
    console.log("Server listening on: http://localhost:" + PORTONE);
});

serverTwo.listen(PORTTWO, function() {
    console.log("Server listening on: http://localhost:" + PORTTWO);
});