// controllers/PagesController.js

// Reglas para la respuesta para la petición "/"
exports.homepage = (req, res) => {
  // Definimos la vista a responder. Nota que se usa la función "render" y no "send".
  res.render('pages/homepage');
}

// Reglas para la respuesta para la petición "/about"
exports.about = (req, res) => {
  res.send('About us');
}
