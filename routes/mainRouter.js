// Load Router

const { Router } = require("express");
const mainController = require("../controllers/mainController");

const mainRouter = Router();

mainRouter.get("/", mainController.getCategories);

mainRouter.get("/consoles", mainController.getConsoles);

// Always export back to app.js at the end

module.exports = mainRouter;
