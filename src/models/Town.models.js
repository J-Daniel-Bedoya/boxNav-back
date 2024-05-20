const db = require("../utils/database");
const DataTypes = require("sequelize");

/**
 * @swagger
 * components:
 *   schemas:
 *     Town:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: Nombre del municipio
 *         boxesNumber:
 *           type: integer
 *           format: int8
 *           nullable: true
 *           description: Número de casillas en el municipio (opcional)
 *         usersNumber:
 *           type: integer
 *           format: int8
 *           nullable: true
 *           description: Número de usuarios en el municipio (opcional)
 *         sectorsNumber:
 *           type: integer
 *           format: int8
 *           nullable: true
 *           description: Número de sectores en el municipio (opcional)
 */

const Town = db.define("town", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  townName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "town_name",
  },
  numberBoxes: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0,
    field: "number_boxes",
  },
  numberUsers: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0,
    field: "number_users",
  },
  numberSectors: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0,
    field: "number_sectors",
  },
});

module.exports = Town;
