// controllers/mainController.js

const db = require("../db/queries");

async function getUsernames(req, res) {
  const usernames = await db.getAllUsernames();
  console.log("Usernames: ", usernames);
  res.render("index", {
    title: "Index",
    usernames: usernames.map((user) => user.username).join(", "),
  });
}

async function createUsernameGet(req, res) {
  res.render("form", {
    title: "New form",
  });
}

async function createUsernamePost(req, res) {
  const { username } = req.body;
  await db.insertUsername(username);
  res.redirect("/");
}

async function searchUserPost(req, res) {
  const searchUser = req.query.searchUser;
  const search = await db.searchUser(searchUser);
  console.log(search);
  res.render("search", {
    title: "Search",
    username: search,
  });
}

async function deleteGet(req, res) {
  await db.deleteUsers();
  res.redirect("/");
}

module.exports = {
  getUsernames,
  createUsernameGet,
  createUsernamePost,
  searchUserPost,
  deleteGet,
};
