const db = require("../utils/database");
const DataTypes = require("sequelize");
const Boxes = require("./Boxes.models");

/**
 * @swagger
 * components:
 *   schemas:
 *     PortsBad:
 *       type: object
 *       properties:
 *         townId:
 *           type: integer
 *           format: int8
 *           description: ID del municipio al que pertenece el puerto problemático
 *         boxId:
 *           type: integer
 *           format: int8
 *           description: ID de la casilla relacionada con el puerto problemático
 *         port:
 *           type: integer
 *           description: Número de puerto problemático
 *         signal:
 *           type: integer
 *           nullable: true
 *           description: Señal asociada al puerto problemático (opcional)
 */

const PortsBad = db.define(
  "portsBad",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    boxId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Boxes,
        key: "id",
      },
      field: "box_id",
    },
    port: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    signal: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = PortsBad;
