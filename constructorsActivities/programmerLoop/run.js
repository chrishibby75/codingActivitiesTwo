var inquirer = require('inquirer');

function Programmer(name, position, age, language) {
    this.name = name;
    this.position = position;
    this.age = age;
    this.language = language
}

Programmer.prototype.printInfo = function() {
    console.log("");
    console.log("Name: " + this.name + "\nPosition: " +
    this.position + "\nAge: " + this.age + "\nLanguage: " + this.language);
    console.log("============================================================");
};

var count = 0;
var programmerArray = [];

var askQuestion = function() {
    if (count < 5) {
        console.log("NEW PROGRAMMER");
        inquirer.prompt([
            {
                name: "name",
                message: "What is your name?"
            },
            {
                name: "position",
                message: "What is your current position?"
            },
            {
                name: "age",
                message: "How old are you?"
            },
            {
                name: "language",
                message: "What is your favorite programming language?"
            }
        ]).then(function(answer) {
            newProgrammer = new Programmer(answer.name, answer.position, answer.age, answer.language);
            programmerArray.push(newProgrammer);
            count++;
            askQuestion();
        });
    }
    else{
        for (var i = 0; i < programmerArray.length; i++) {
            programmerArray[i].printInfo();
        }
    }
};

askQuestion();