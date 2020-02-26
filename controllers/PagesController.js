let ProductModel = require("../models/Product");
var express = require("express");
var router = express.Router();

// GET petition for all products in no particular order
exports.homepage = (req, res) => {
  ProductModel.allProducts().then(data => {
    const products = data;
    res.render("pages/homepage", { products: products });
  });
};

// GET petition for a specific product
exports.get = (req, res) => {
  const id = req.params.id;
  ProductModel.getProduct(id).then(data => {
    const products = data;
    if (products.length == 0) {
      const messages = ["No product matching said criteria"];
      res.render("pages/homepage", {
        messages: messages
      });
    } else {
      res.render("pages/homepage", { products: products });
    }
  });
};

// GET petition for all products in a specific order
exports.ordered = (req, res) => {
  const name = req.params.name;
  const order = req.params.order;
  ProductModel.allProductsOrdered(name, order).then(data => {
    const products = data;
    res.render("pages/homepage", { products: products });
  });
};

// POST petition to create a new product
exports.create = (req, res) => {
  const name = req.body.name;
  const price = req.body.price;
  const description = req.body.description;

  ProductModel.createProduct(name, description, price, res).then(data => {
    res.redirect("../");
  });
};

// DELETE petition for a specific product
exports.delete = (req, res) => {
  const id = req.params.id;
  ProductModel.deleteProduct(id).then(data => {
    res.render("pages/homepage");
  });
};

// PUT petition to update a specific product
exports.update = (req, res) => {
  const id = req.params.id;
  const name = req.body.name;
  const description = req.body.description;
  const price = req.body.price;
  ProductModel.updateProduct(id, name, description, price).then(data => {
    res.render("pages/homepage");
  });
};
