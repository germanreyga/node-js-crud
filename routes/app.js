let router = require("express").Router();
let PagesController = require("../controllers/PagesController");

// Render homepage
router.get("/", PagesController.homepage);

// POST petition to create users
router.post("/create", PagesController.create);

// DELETE petition to delete user
router.delete("/:id", PagesController.delete);

// Exporta las configuraciones
module.exports = router;
