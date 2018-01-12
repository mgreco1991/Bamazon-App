//require mysql, a table constructor package to put the table into the 
//command line, and inquirer
var mysql = require('mysql');
var Table = require('cli-table2');
var inquirer = require('inquirer');

//store the exported displayTheItems file into a variable
//so that we can manipulate it 
var displayTable = require('./displayTheItems.js');

//create the connection to the database 
var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'A5h1noYUB1mon1keya', 
  database: 'bamazon_db'
});

//Throw an error if the server cannot connect to the database
connection.connect(function (err) {
  if (err) {
    console.log("Error connecting to the database.");
    throw err;
  }
});

// Display products database using a table made with the npm package cli-table2
// Prompt the user to determine item and quantity they want to purchase
var displayForUser = function() {
  //create a variable called display which creates a new display table 
  //in the command line  
  var display = new displayTable();
  //create the db query - select everything from the products table
  //create a callback function so that tthis will run only after the 
  //query is made 
  connection.query('SELECT * FROM products', function(err, results){
    //actually show the table 
    display.displayInventoryTable(results);
    //call back purchaseItem after the query is made 
    purchaseItem();
  });
}

// Prompt user to enter id of item and quantity they wish to purchase
var purchaseItem = function() {
  //console.log('\n  ');
  inquirer.prompt([{
    name: "id",
    type: "input",
    message: " Enter the Item ID of the product you want to purchase",

  }, {
    name: "quantity",
    type: "input",
    message: " Enter the quantity you want to purchase",

  }]).then(function(answer) {
    // Query the database for info about the item including the quantity currently in stock.
    // create an object with a key-value pair in which the item_id is equal to the id of the answer (of the query)
    //then create a callback function that will run after this query is made
    connection.query('SELECT product_name, department_name, price, stock_quantity FROM products WHERE ?', {item_id: answer.id}, function(err,res) {
      
    //log this message to the console. answer.quantity will be equal to the item's (current) quantity. the res[0] is index zero because it is 
    //the first number that you type into the command line.  
    console.log('You would like to buy ' + answer.quantity + ' ' + res[0].product_name + ' ' + res[0].department_name + ' at $' + res[0].price + ' each'
      );
      if (res[0].stock_quantity >= answer.quantity) {
        //If enough inventory to complete order, process order by updating database inventory and notifying customer that order is complete. 
        var item_quantity = res[0].stock_quantity - answer.quantity;
        connection.query("UPDATE products SET ? WHERE ?", [
        {
          stock_quantity: item_quantity
        }, {
          item_id: answer.id
        }], function(err,res) {
          }); 
        var cost = res[0].price * answer.quantity;
        console.log('Order fulfilled! Your cost is $' + cost.toFixed(2));
        // Order completed
        customerPrompt();
          
      } else {
        //If not enought inventory notify customer and prompt customer for desire to shop more
        console.log('Sorry, insufficient quantity to fulfill your order!');
        // Order not completed
        customerPrompt();
      }
    })
    });
}

var customerPrompt = function() {
    inquirer.prompt({
        name: "action",
        type: "list",

        message: " Would like to continue shopping?",
        choices: ["Yes", "No"]
    }).then(function(answer) {
        switch(answer.action) {
            case 'Yes':
                displayForUser();
            break;

            case 'No':
                connection.end();
            break;
        }
    })
};

// Start app by Prompting the customer
customerPrompt();