const db = require("../utils/database");
const DataTypes = require("sequelize");
const Town = require("./Town.models");

/**
 * @swagger
 * components:
 *   schemas:
 *     Boxes:
 *       type: object
 *       properties:
 *         townId:
 *           type: integer
 *           format: int8
 *           description: ID del municipio al que pertenece la caja
 *         number:
 *           type: integer
 *           description: Número de la caja
 *         portsNumber:
 *           type: integer
 *           description: Número total de puertos de la caja (opcional)
 *         portsUsed:
 *           type: integer
 *           description: Número de puertos utilizados de la caja (opcional)
 *         portsBad:
 *           type: integer
 *           description: Número de puertos problemáticos de la caja (opcional)
 *         sectorId:
 *           type: integer
 *           description: ID del sector al que pertenece la caja
 *         coordinates:
 *           type: string
 *           nullable: true
 *           description: Dirección de la caja (opcional)
 */

const Boxes = db.define(
  "boxes",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    townId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Town,
        key: "id",
      },
      field: "town_id",
    },
    sectorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    numberBox: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: "number_box",
    },
    numberPorts: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "number_ports",
    },
    numberUsers: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: "number_users",
      defaultValue: 0,
    },
    portsBad: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: "ports_bad",
      defaultValue: 0,
    },

    coordinates: {
      type: DataTypes.STRING,
      allowNull: true,
      field: "img_sector",
      defaultValue: "",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Boxes;
