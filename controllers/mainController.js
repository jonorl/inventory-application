// controllers/mainController.js

const db = require("../db/queries");

async function getCategories(req, res) {
  const categories = await db.getAllCategories();
  res.render("categories", {
    title: "Categories",
    // categories: categories.map((cat) => cat.name).join(", "),
    categories: categories,
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
    consoles: consoles,
  })
}

async function postConsoles(req,res) {
  const { name } = req.body;
  const { releaseYr } = req.body;
  const { stock } = req.body;
  const { categoryId } = req.body;
  await db.insertConsole(name, releaseYr, stock, categoryId);
  res.redirect("/consoles");
}

async function delConsoles(req,res) {
  const { id } = req.params;
  await db.delConsole(id);
  res.redirect("/consoles");
}

module.exports = {
  getCategories,
  getConsoles,
  postCategories,
  postConsoles,
  delConsoles,
};
