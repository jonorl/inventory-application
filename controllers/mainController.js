// controllers/mainController.js

const db = require("../db/queries");

async function getCategories(req, res) {
  const categories = await db.getAllCategories();
  res.render("categories", {
    title: "Categories",
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
  const categories = await db.getAllCategories();
  res.render("consoles", {
    title: "Consoles",
    consoles: consoles,
    categories: categories,
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

async function delCategory(req,res) {
  const { id } = req.params;
  await db.delCategory(id);
  res.redirect("/");
}

module.exports = {
  getCategories,
  getConsoles,
  postCategories,
  postConsoles,
  delConsoles,
  delCategory,
};
