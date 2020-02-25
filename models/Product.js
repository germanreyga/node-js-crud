// Obtiene la conexión con la base de datos
const knex = require("../database/connection");

// Idea y créditos para creación de aplicación CRUD
// http://appsbuilders.org/guides/build-a-full-stack-javascript-crud-app-with-node-express-handlebars-bootstrap-postgres-knex/

// Crea un nuevo Producto (pero no lo almacena en la base)
exports.factory = (name, description, price) => {
  return {
    name: name,
    description: description,
    price: price
  };
};

// Obtiene todos los productos en la base
exports.allProducts = () => {
  return knex.from("products").select("*");
};

// Elimina un producto de la base de datos
// delete from `products` where `id` = id
exports.deleteProduct = (req, res) => {
  const id = req.params.id;
  if (typeof id == "undefined") {
    return false;
  } else {
    result = knex
      .from("products")
      .where("id", id)
      .del();
    return result;
  }
};
