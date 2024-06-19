const db = require("../utils/database");
const DataTypes = require("sequelize");
const Town = require("./Town.models");

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
  serviceName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "service_name",
  },
  townId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    field: "town_id",
    references: {
      model: Town,
      key: "id",
    },
  },
  numberUsers: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0,
    field: "number_users",
  },
});

module.exports = TypeService;
