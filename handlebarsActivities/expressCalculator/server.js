var express = require('express');
var app = express();

var PORT = process.env.PORT || 8080;

app.get("/:operation/:firstNum/:secondNum", function(req,res) {
    var operation = req.params.operation;

    var firstNum = parseInt(req.params.firstNum);
    var secondNum = parseInt(req.params.secondNum);
    var result;

    switch(operation) {

        case "plus":
        case "+":
        result = firstNum + secondNum;
        break;

        case "minus":
        case "-":
        result = firstNum - secondNum;
        break;

        case "times":
        case "*":
        result = firstNum * secondNum;
        break;

        case "divide":
        case "/":
        result = firstNum / secondNum;
        break;

        default:
        result = "Sorry! You can only choose plus, minus, times or divide. Please try again.";
        break;
    };

    res.send(result.toString());
});

app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});