const pool = require("./pool");

async function getAllCategories() {
  const { rows } = await pool.query("SELECT * FROM categories");
  return rows;
}

async function getAllConsoles() {
  const { rows } = await pool.query("SELECT * FROM consoles");
  return rows;
}

module.exports = {
  getAllCategories,
  getAllConsoles,
  };