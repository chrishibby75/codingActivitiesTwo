var mysql = require('mysql');
var inquirer = require('inquirer');

var connection = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "password",
    database: "greatbay_db"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected as ID " + connection.threadId);
    start();
});

function start() {
    inquirer.prompt({
        name: "postOrBid",
        type: "rawlist",
        message: "Would you like to [POST] an auction or [BID] on an auction?",
        choices: ["POST", "BID"]
    }).then(function (answer) {
        if (answer.postOrBid.toUpperCase() === "POST") {
            postAuction();
        }
        else {
            bidAuction();
        }
    });
}

function postAuction() {
    inquirer.prompt([
        {
            name: "item",
            type: "input",
            message: "What is the item you would like to submit?"
        },
        {
            name: "category",
            type: "input",
            message: "What category does your item fit into?"
        },
        {
            name: "startingBid",
            type: "input",
            message: "What would you like your starting bid to be?",
            validate: function (value) {
                if (isNaN(value) === false) {
                    return true;
                }
                return false;
            }
        }
    ]).then(function (answer) {
        connection.query("INSERT INTO auctions SET ?",
            {
                item_name: answer.item,
                category: answer.category,
                starting_bid: answer.startingBid,
                highest_bid: answer.startingBid
            },
            function (err) {
                if (err) throw err;
                console.log("Your auction was created successfully!");
                start();
            }
        );
    });
}

function bidAuction() {
    connection.query("SELECT * FROM auctions", function (err, res) {
        if (err) throw err;
        inquirer.prompt([
            {
                name: "choice",
                type: "rawlist",
                choices: function () {
                    var choiceArray = [];
                    for (var i = 0; i < res.length; i++) {
                        choiceArray.push(res[i].item_name);
                    }
                    return choiceArray;
                },
                message: "What auction would you like to bid on?"
            },
            {
                name: "bid",
                type: "input",
                message: "How much would you like to bid?"
            }
        ]).then(function (answer) {
            var chosenItem;
            for (var i = 0; i < res.length; i++) {
                if (res[i].item_name === answer.choice) {
                    chosenItem = res[i];
                }
            }

            if (chosenItem.highest_bid < parseInt(answer.bid)) {
                connection.query("UPDATE auctions SET ? WHERE ?",
                    [
                        {
                            highest_bid: answer.bid
                        },
                        {
                            id: chosenItem.id
                        }
                    ],
                    function (err) {
                        if (err) throw err;
                        console.log("Bid placed successfully!");
                        start();
                    }
                );
            }
            else {
                console.log("Your bid was not large enough. Please try again...");
                start();
            }
        });
    });
}
