const fs = require("fs");
const path = require("path");

const p = path.join(
  path.dirname(process.mainModule.filename),
  "data",
  "products.json"
);

const getProductsFromFile = (cb) => {
  fs.readFile(p, (err, fileContent) => {
    if (err || fileContent.length === 0) {
      return cb([]); // Handle error or empty file
    }
    try {
      cb(JSON.parse(fileContent));
    } catch (error) {
      console.log("Error parsing JSON in fetchAll:", error);
      return cb([]); // Return empty array if parsing fails
    }
  });
};

module.exports = class Product {
  constructor(title, imageUrl, description, price) {
    this.title = title;
    this.imageUrl = imageUrl;
    this.description = description;
    this.price = price;
  }

  save() {
    this.id = Math.random().toString();
    getProductsFromFile((products) => {
      products.push(this);
      fs.writeFile(p, JSON.stringify(products), (err) => {
        console.log("Error writing file:", err);
      });
    });
  }

  static fetchAll(cb) {
    getProductsFromFile(cb);
  }

  static findById(id, cb){
    getProductsFromFile(products =>{
      const product = products.find(p => p.id === id);
      cb(product);
    })
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
