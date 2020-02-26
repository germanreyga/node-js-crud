const dotenv = require("dotenv");

// Loads environment config
dotenv.config();

const appConfig = {
  // Establish default values
  env: process.env.NODE_ENV || "development",
  express_port: process.env.EXPRESS_PORT || 3306
};

module.exports = appConfig;
