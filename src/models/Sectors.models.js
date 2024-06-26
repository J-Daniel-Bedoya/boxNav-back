const db = require("../utils/database");
const DataTypes = require("sequelize");
const Town = require("./Town.models");

/**
 * @swagger
 * components:
 *   schemas:
 *     Sector:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *           description: Nombre del sector
 *         townId:
 *           type: integer
 *           format: int8
 *           description: ID del municipio al que pertenece el sector
 *         boxesNumber:
 *           type: integer
 *           format: int8
 *           nullable: true
 *           description: Número de casillas en el sector (opcional)
 *         usersNumber:
 *           type: integer
 *           format: int8
 *           nullable: true
 *           description: Número de usuarios en el sector (opcional)
 */

const Sectors = db.define("sectors", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  sectorName: {
    type: DataTypes.STRING,
    allowNull: false,
    field: "sector_name",
  },
  townId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Town,
      key: "id",
      field: "town_id",
    },
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
});

module.exports = Sectors;
