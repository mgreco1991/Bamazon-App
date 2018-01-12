CREATE DATABASE bamazon_db;

USE bamazon_db;

CREATE TABLE products (
item_id INT AUTO_INCREMENT NOT NULL,
product_name VARCHAR(255) NOT NULL,
department_name VARCHAR(255) NOT NULL,
price INT(10) NOT NULL,
stock_quantity INT(10) NOT NULL,
PRIMARY KEY (item_id)
); 

INSERT INTO products (product_name, department_name, price, stock_quantity) VALUE ("Talky Tina Doll (Hasbro Toys, Ltd)", "Toys", 30, 200);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUE ("Nintendo 3DS (Silver Edition)", "Electronics", 150, 100);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUE ("Starwars Episode 4: A New Hope (Limited Edition Pack - George Lucas Uncut Bonus DVD)", "Movies & Entertainment", 20, 300);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUE ("The Secret Life of Bees (Penguin Publishing, Sue Monk Kid)", "Books", 20, 200);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUE ("The North Face Backpack: Borealis (Black)", "Sporting and Outdoors", 50, 100);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUE ("Jagazi Natural's Full Cap Weaving Net Durable Stretchy Weaving Net Weaving Cap Wig Cap - Size M (Chestnut Brown)", "Clothing", 10, 500);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUE ("Bath and Body Works Refreshing Shower Gel (Midnight Lavender)", "Health and Beauty", 20, 1000);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUE ("Apple iPhone X (Rose-Gold iOS Version 11.6.4)", "Electronics", 600, 1000);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUE ("Lenovo Thinkpad T440s Intel CORE i5 vPro Thinkpad Lite (Black)", "Electronics", 600, 700);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUE ("Michael Kors Designer Chic No-Shoulder Turtle-Neck (Black, Cotton)", "Clothing", 300, 100);