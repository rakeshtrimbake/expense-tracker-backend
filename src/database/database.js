const { Sequelize } = require("sequelize");
const db = new Sequelize("expense", "root", "rakesh", {
  dialect: "mysql2",
  host: "localhost",
});

export default db;
