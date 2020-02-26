var jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = new JSDOM("").window;
global.document = document;
var $ = (jQuery = require("jquery")(window));

// Import express package
let express = require("express");
// Obtiene una instancia de express
let app = express();

// Import body-parser and use it
bodyParser = require("body-parser");
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: false }));

// Import app routes and defines the app routes to use
let appRoutes = require("./routes/app");
app.use("/", appRoutes);

// Static files service
app.use("/static", express.static(__dirname + "/static"));
app.use("/bower_components", express.static(__dirname + "/bower_components"));

// View engine config
let exphbs = require("express-handlebars");
const extNameHbs = "hbs";
let hbs = exphbs.create({
  extname: extNameHbs
});
app.engine(extNameHbs, hbs.engine);
app.set("view engine", extNameHbs);

// Import appConfig configuration
let appConfig = require("./configs/app");

// Start server in port deckared on appConfig
app.listen(appConfig.express_port, () => {
  let show =
    "App listening on port " +
    appConfig.express_port +
    "! (http://localhost:" +
    appConfig.express_port +
    ")";
  console.log(show);
});
