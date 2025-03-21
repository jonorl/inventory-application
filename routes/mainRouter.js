// Load Router

const { Router } = require("express");
const mainController = require("../controllers/mainController");

const mainRouter = Router();

mainRouter.get("/", mainController.getUsernames);

mainRouter.get("/new", mainController.createUsernameGet);

mainRouter.post("/new", mainController.createUsernamePost);

mainRouter.get("/search",mainController.searchUserPost)

mainRouter.get("/delete",mainController.deleteGet)

// Always export back to app.js at the end

module.exports = mainRouter;
