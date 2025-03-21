// controllers/mainController.js

const db = require("../db/queries");

async function getCategories(req, res) {
  const categories = await db.getAllCategories();
  res.render("categories", {
    title: "Categories",
    usernames: categories.map((cat) => cat.name).join(", "),
  })
}

async function getConsoles(req, res) {
  const consoles = await db.getAllCategories();
  res.render("consoles", {
    title: "Consoles",
    consoles: consoles.map((con) => con.name).join(", "),
  })
}

module.exports = {
  getCategories,
  getConsoles,
};
