var mysql = require('mysql');

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "password",
    database: "ice_creamDB"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    createProduct();
});

function createProduct() {
    console.log("Inserting a new product...\n");
    var query = connection.query(
        "INSERT INTO products SET ?",
        {
            flavor: "Rocky Road",
            price: 3.0,
            quantity: 50
        },
        function (err, res) {
            console.log(res.affectedRows + " product inserted!\n");
            updateProduct();
        }
    );
    console.log(query.sql);
}

function updateProduct() {
    console.log("Updating all Rocky Road quantities...\n");
    var query = connection.query(
        "UPDATE products SET ? WHERE ?",
        [
            { quantity: 100 },
            { flavor: "Rocky Road" }
        ],
        function (err, res) {
            console.log(res.affectedRows + " products updated!\n");
            deleteProduct();
        }
    );
    console.log(query.sql);
}

function deleteProduct() {
    console.log("Deleting all mint chocolate chip ice cream...\n");
    connection.query(
        "DELETE FROM products WHERE ?",
        { flavor: "mint chocolate chip" },
        function (err, res) {
            console.log(res.affectedRows + " products deleted!\n");
            readProducts();
        }
    );
}

function readProducts(){
    console.log("Selecting all products.\n");
    connection.query("SELECT * FROM products", function(err, res) {
        if(err) throw err;
        console.log(res);
        connection.end();
    });
}