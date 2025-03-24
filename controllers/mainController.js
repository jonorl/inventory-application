// controllers/mainController.js

const db = require("../db/queries");

async function getCategories(req, res) {
  const categories = await db.getAllCategories();
  res.render("categories", {
    title: "Categories",
    categories: categories.map((cat) => cat.name).join(", "),
  })
}

async function postCategories(req,res) {
  const { name } = req.body;
  await db.insertCategory(name);
  res.redirect("/");
}

async function getConsoles(req, res) {
  const consoles = await db.getAllConsoles();
  res.render("consoles", {
    title: "Consoles",
    consoles: consoles.map((con) => con.name).join(", "),
    categoryId: consoles.map((con) => con.category_id).join(", "),
  })
}

async function postConsoles(req,res) {
  const { name } = req.body;
  const { categoryId } = req.body;
  await db.insertConsole(name, categoryId);
  res.redirect("/consoles");
}

module.exports = {
  getCategories,
  getConsoles,
  postCategories,
  postConsoles,
};
