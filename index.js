var jsdom = require("jsdom");
const { JSDOM } = jsdom;
const { window } = new JSDOM();
const { document } = new JSDOM("").window;
global.document = document;
var $ = (jQuery = require("jquery")(window));

// Importa el paquete de express
let express = require("express");
// Obtiene una instancia de express
let app = express();

// Import body-parser and use it
bodyParser = require("body-parser");
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: false }));

// Importa las configuraciones
let appRoutes = require("./routes/app");

// Define que configuraciones de rutas se van a utilizar para la ruta
app.use("/", appRoutes);

// Static files service
app.use("/static", express.static(__dirname + "/static"));
app.use("/bower_components", express.static(__dirname + "/bower_components"));

// Configuraciones de las vistas
let exphbs = require("express-handlebars");
// Define la extensión que se va a utilizar para los archivos que representan
// las vistas
const extNameHbs = "hbs";
// Crea una instancia de hbs con las conifugraciones definidas
let hbs = exphbs.create({
  extname: extNameHbs
});
// Establece el uso de handlebars dentro de express.js
app.engine(extNameHbs, hbs.engine);
app.set("view engine", extNameHbs);

// Importa la configuración de la app
let appConfig = require("./configs/app");

// Comienza el servidor en el puerto 3000 de localhost
// para ver el sistema
app.listen(appConfig.express_port, () => {
  let show =
    "App listening on port " +
    appConfig.express_port +
    "! (http://localhost:" +
    appConfig.express_port +
    ")";
  console.log(show);
});
