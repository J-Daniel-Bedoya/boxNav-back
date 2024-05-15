const db = require("../utils/database");
const DataTypes = require("sequelize");

/**
 * @swagger
 * components:
 *   schemas:
 *     TypeService:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: Nombre del tipo de servicio
 *         usersNumber:
 *           type: integer
 *           format: int8
 *           nullable: true
 *           description: Número de usuarios relacionados con este tipo de servicio (opcional)
 */

const TypeService = db.define("typeService", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  usersNumber: {
    type: DataTypes.INTEGER,
    allowNull: true,
    field: "boxes_number",
  },
});

module.exports = TypeService;
