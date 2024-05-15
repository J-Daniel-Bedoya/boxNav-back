const db = require("../utils/database");
const { DataTypes } = require("sequelize");
const bcrypt = require("bcrypt");

/**
 * @swagger
 * components:
 *   schemas:
 *     Admin:
 *       type: object
 *       properties:
 *         adminName:
 *           type: string
 *           description: Nombre del administrador
 *         email:
 *           type: string
 *           format: email
 *           description: Correo electrónico del administrador
 *         password:
 *           type: string
 *           format: password
 *           description: Contraseña del administrador (se almacenará encriptada)
 *     login:
 *         id:
 *           type: number
 *           example: 1
 *         email:
 *           type: string
 *           format: email
 *         token:
 *           type: string
 *           format: token
 *     registerLogin:
 *         email:
 *           type: string
 *           format: email
 *         password:
 *           type: string
 *           format: password
 *   securitySchemes:
 *     bearerAuth:
 *       type: http
 *       scheme: Bearer
 *       bearerFormat: JWT
 */

const Admin = db.define(
  "admin",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    adminName: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "admin_name",
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    hooks: {
      beforeCreate: (admin, options) => {
        const { password } = admin;
        const hash = bcrypt.hashSync(password, 8);
        admin.password = hash;
      },
    },
  }
);

module.exports = Admin;
