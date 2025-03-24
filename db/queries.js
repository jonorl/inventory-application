const pool = require("./pool");

async function getAllCategories() {
  const { rows } = await pool.query("SELECT * FROM categories");
  return rows;
}

async function insertCategory(name) {
    await pool.query("INSERT INTO categories (name) VALUES ($1)", [name]);
}

async function getAllConsoles() {
  const { rows } = await pool.query("SELECT * FROM consoles");
  return rows;
}

async function insertConsole(name, releaseYr, stock, categoryId) {
  await pool.query("INSERT INTO consoles (name, release_yr, stock, category_id) VALUES ($1, $2, $3, $4)", [name, releaseYr, stock, categoryId]);
}

module.exports = {
  getAllCategories,
  getAllConsoles,
  insertCategory,
  insertConsole,
  };