let router = require("express").Router();
let PagesController = require("../controllers/PagesController");

// GET petition to get all products in no specific order
router.get("/", PagesController.homepage);

// GET petition to get information of a specific product
router.get("/:id", PagesController.get);

// GET petition to get all products in a specific order
router.get("/:name/:order", PagesController.ordered);

// PUT petition to update information of a specific product
router.put("/:id", PagesController.update);

// POST petition to create products
router.post("/create", PagesController.create);

// DELETE petition to delete product
router.delete("/:id", PagesController.delete);

module.exports = router;
