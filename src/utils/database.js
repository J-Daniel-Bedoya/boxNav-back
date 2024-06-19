// const { Sequelize } = require("sequelize");
// require("dotenv").config();

// const db = new Sequelize({
//   database: process.env.DB_NAME,
//   username: process.env.DB_USER,
//   host: process.env.DB_HOST,
//   port: process.env.DB_PORT,
//   password: process.env.DB_PASSWORD,
//   dialect: "postgres",
//   logging: false,
// });

// module.exports = db;

const { Sequelize } = require("sequelize");
require("dotenv").config();

const db = new Sequelize(process.env.DATABASE_URL, {
  dialect: "postgres",
  protocol: "postgres",
  logging: false,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, // Necesario para evitar errores con certificados SSL auto-firmados
    },
  },
});

module.exports = db;
