const sequelize = require("sequelize");
const db = require("./db");
const databaseURL =
  process.env.DATABASE_URL ||
  "postgres://postgres:security@localhost:5432/postgres";

  const db = new sequelize(databaseURL)

  db.sync()
  .then(() => console.log("Database schema updated booya!"))
  .catch(console.error);

module.exports = db;
