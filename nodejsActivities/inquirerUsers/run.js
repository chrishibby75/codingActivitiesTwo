var inquirer = require('inquirer');

inquirer.prompt([
    {   
        type: "input",
        name: "name",
        message: "Who are you?"
    },

    {
        type: "list",
        name: "doingWhat",
        message: "What are you doing in my house?",
        choices: ["I made you cookies.", "No lie dude... I'm here to rob you.", "Uh. This is my house. Who the hell are you?"]
    },

    {
        type: "checkbox",
        name: "carryingWhat",
        message: "What's that in you're carrying?",
        choices: ["TV", "Slice of Toast", "the dog"]
    },

    {
        type: "confirm",
        name: "canLeave",
        message: "Can you leave now?"
    },

    {
        type: "password",
        name: "myPassword",
        message: "Okay fine! You can stay if you know the password."
    }
]).then(function(user) {
    if(user.myPassword === "midget") {
        console.log("===========================================================");
        console.log("");
        console.log("Well a deal's a deal " + user.name + ".");
        console.log("You can stay as long as you like.");
        console.log("Just put down the " + user.carryingWhat.join(" and ") + ". It's kind of freaking me out.");
        console.log("");
        console.log("===========================================================");
    }
    else {
        console.log("===========================================================");
        console.log("");
        console.log("Sorry " + user.name + ".");
        console.log("I'm calling the cops!");
        console.log("");
        console.log("===========================================================");
    }
});