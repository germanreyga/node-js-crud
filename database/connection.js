// Obtain system config
let appConfig = require("../configs/app");

// Imports file knexfile.js
const knexfile = require("../knexfile");

// Obtain config data dependind on application environment
// Create a knex instance with said config data.
const knex = require("knex")(knexfile[appConfig.env]);

module.exports = knex;
