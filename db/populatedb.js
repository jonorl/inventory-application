#! /usr/bin/env node

const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "../.env") });

const { Client } = require("pg");

const USER = process.env.USER
const PASSWORD = process.env.PASSWORD

const SQL = `
CREATE TABLE IF NOT EXISTS usernames (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR ( 255 )
);

INSERT INTO usernames (username) 
VALUES
  ('Bryan'),
  ('Odin'),
  ('Damon');
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: `postgresql://${USER}:${PASSWORD}@localhost:5432/top_users`,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
