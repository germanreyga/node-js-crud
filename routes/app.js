let router = require("express").Router();
let PagesController = require("../controllers/PagesController");

// GET petition to get all products in no specific order
router.get("/", PagesController.homepage);

// GET petition to get all products in a specific order
router.get("/:name/:order", PagesController.ordered);

// POST petition to create users
router.post("/create", PagesController.create);

// DELETE petition to delete user
router.delete("/:id", PagesController.delete);

// Exporta las configuraciones
module.exports = router;
