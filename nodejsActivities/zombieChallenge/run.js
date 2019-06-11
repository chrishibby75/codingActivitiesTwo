var inquirer = require('inquirer');

var userHealth = 70;
var zombieHealth = 15;

function checkRound() {
    console.log("");
    console.log("");

    if (userHealth <= 0) {
        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        console.log("");
        console.log("Game over. You're dead!");
        console.log("");
        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

        process.exit();
    }

    if (zombieHealth <= 0) {
        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
        console.log("");
        console.log("Victory! You're really good at killing zombies!");
        console.log("");
        console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

        process.exit();
    }

    playRound();
}

function playRound() {
    inquirer.prompt([
        {
            type: "list",
            name: "userGuess",
            message: "Try to stay alive! Guess a number between [1-5].",
            choices: ["1","2","3","4","5"]
        }
    ]).then(function(guess) {
        if (userHealth > 0 || zombieHealth > 0) {
            var damage = Math.floor(Math.random() * 5) + 1;
            var zombieNum = Math.floor((Math.random() * 5) ) + 1;
            console.log("");
            console.log("");
            console.log("Zombie rolled " + zombieNum);

            if(zombieNum === parseInt(guess.userGuess)) {
                zombieHealth -= damage;
                console.log("You hit the zombie with " + damage + " damage!");
                console.log("You have " + userHealth + " health left. The zombie has " + zombieHealth + " health left.");

                checkRound();
            }
            else {
                userHealth -= damage;
                console.log("Oh No. The zombie bit you. He caused " + damage + " damage!");
                console.log("You have " + userHealth + " health left. The zombie has " + zombieHealth + " health left.");

                checkRound();
            }
        }
    });
}
playRound();