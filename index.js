// Importa el paquete de express
let express = require('express');
// Obtiene una instancia de express
let app = express();
// Establece que al hacer una petición GET a la ruta / se conteste
// con las palabras "Hello World!"
app.get('/', (req, res) => {
  res.send('Hello World!');
});
// Comienza el servidor en el puerto 3000 de localhost
// para ver el sistema
app.listen(3000,() => {
  console.log('App listening on port 3000! (http://localhost:3000)');
});