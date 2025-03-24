// Load Router

const { Router } = require("express");
const mainController = require("../controllers/mainController");

const mainRouter = Router();

mainRouter.get("/", mainController.getCategories);

mainRouter.post("/addCategory", mainController.postCategories);

mainRouter.get("/consoles", mainController.getConsoles);

mainRouter.post("/addConsole", mainController.postConsoles);

mainRouter.get("/delConsole/:id", mainController.delConsoles);

// Always export back to app.js at the end

module.exports = mainRouter;
