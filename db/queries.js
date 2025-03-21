const { ppid } = require("process");
const pool = require("./pool");

async function getAllUsernames() {
  const { rows } = await pool.query("SELECT * FROM usernames");
  return rows;
}

async function insertUsername(username) {
  await pool.query("INSERT INTO usernames (username) VALUES ($1)", [username]);
}

async function searchUser(username) {
    const { rows } = await pool.query("SELECT username FROM usernames WHERE username = $1",
    [username])
    if (rows.length === 0) {
        return "Username not found";
    }
    const rowResult = rows[0]
    return rowResult;
}

async function deleteUsers(){
    await pool.query("UPDATE usernames SET username = NULL");

}

module.exports = {
  getAllUsernames,
  insertUsername,
  searchUser,
  deleteUsers,
};
