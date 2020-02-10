// controllers/PagesController.js

// Reglas para la respuesta para la petición "/"
exports.homepage = (req, res) => {
  res.send('Hello World!');
}

// Reglas para la respuesta para la petición "/about"
exports.about = (req, res) => {
  res.send('About us');
}