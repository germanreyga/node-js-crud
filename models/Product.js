const knex = require("../database/connection");

// Idea gotten from
// http://appsbuilders.org/guides/build-a-full-stack-javascript-crud-app-with-node-express-handlebars-bootstrap-postgres-knex/

// Creates a new product in the database
// insert into `products` values (name, description, price)
exports.createProduct = (name, description, price, res) => {
  const result = knex
    .from("products")
    .insert({ name: name, description: description, price: price });
  return result;
};

// Obtains all products from the database in no specific order
// select * from `products`
exports.allProducts = () => {
  return knex.from("products").select("*");
};

// Deletes a product from the database
// delete from `products` where `id` = id
exports.deleteProduct = id => {
  if (typeof id == "undefined") {
    return false;
  } else {
    const result = knex
      .from("products")
      .where("id", id)
      .del();
    return result;
  }
};
