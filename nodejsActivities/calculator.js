var inputString = process.argv;

var operand = process.argv[2];
var num1 = process.argv[3];
var num2 = process.argv[4];

var outputNum;

switch(operand) {
    case "add":
    outputNum = parseFloat(num1) + parseFloat(num2);
    break;

    case "subtract":
    outputNum = parseFloat(num1) - parseFloat(num2);
    break;

    case "multiply":
    outputNum = parseFloat(num1) * parseFloat(num2);
    break;

    case "divide":
    outputNum = parseFloat(num1) / parseFloat(num2);
    break;

    case "remainder":
    outputNum = parseFloat(num1) % parseFloat(num2);
    break;

    case "exp":
    outputNum = Math.pow(num1, num2);
    break;

    case "algebra":
    outputNum = parseAlgebra(num1);
    break;

    default:
    outputNum = "Not a recognized command";
    break;
}

console.log(outputNum);

