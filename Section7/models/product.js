const fs = require('fs');
const path = require('path');

module.exports = class Product {
    constructor(title) {
        this.title = title;
    }

    save() {
        const p = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json'); // adding data in products.json in 'data' folder
        fs.readFile(p, (err, fileContent) => {
            let products = [];
            if (!err  && fileContent.length > 0) {
                try {
                    products = JSON.parse(fileContent);
                } catch (error) {
                    console.log('Error parsing JSON:', error);
                }
            }
            products.push(this);
            fs.writeFile(p, JSON.stringify(products), (err) => {
                console.log('Error writing file:', err);
            });
        });
    }

    static fetchAll(cb) {
        const p = path.join(path.dirname(process.mainModule.filename), 'data', 'products.json');
        fs.readFile(p, (err, fileContent) => {
            if (err || fileContent.length === 0) {
                cb([]); // Handle error or empty file
            }
            try {
                cb(JSON.parse(fileContent));
            } catch (error) {
                console.log('Error parsing JSON in fetchAll:', error);
                cb([]); // Return empty array if parsing fails
            }
        });
    }
};



//  We could write above code in function-based approach
//  const products = [];

// function Product(title) {
//     this.title = title;
// }

// Product.prototype.save = function() {
//     products.push(this);
// };

// Product.fetchAll = function() {
//     return products;
// };

// module.exports = Product;
