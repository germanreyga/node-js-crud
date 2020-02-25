// Import 'Product' model
let ProductModel = require("../models/Product");

// Rules for HOMEPAGE (/) petition
exports.homepage = (req, res) => {
  ProductModel.allProducts().then(data => {
    // Save products (returned data) in a var
    const products = data;
    // Send data to view
    res.render("pages/homepage", { products: products });
  });
};

// Rules for ABOUT petition
exports.about = (req, res) => {
  res.send("About us");
};

// Rules for DELETE petition
exports.delete = (req, res) => {
  ProductModel.deleteProduct(req, res).then(data => {
    res.render("pages/homepage");
  });
};
