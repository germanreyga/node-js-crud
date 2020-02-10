// Importa el paquete de express
let express = require('express');
// Obtiene una instancia de express
let app = express();

// Importa las configuraciones
let appRoutes = require('./routes/app');

// Define que configuraciones de rutas se van a utilizar para la ruta
app.use('/', appRoutes);

// Comienza el servidor en el puerto 3000 de localhost
// para ver el sistema
app.listen(3000,() => {
  console.log('App listening on port 3000! (http://localhost:3000)');
});