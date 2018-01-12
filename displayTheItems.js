//require the cli-table2 and save it into a variable for later use
Table = require('cli-table2');
var displayTable = function() {

    this.table = new Table({
        head: ['Item ID', 'Product Name', 'Price', 'Stock Quantity'],
    });

    this.displayInventoryTable = function(results) {
    	this.results = results;
	    for (var i=0; i <this.results.length; i++) {
	        this.table.push(
	            [this.results[i].item_id, this.results[i].product_name, '$'+ this.results[i].price, this.results[i].stock_quantity] );
	    }
    	console.log(this.table.toString());
	};
}
module.exports = displayTable;