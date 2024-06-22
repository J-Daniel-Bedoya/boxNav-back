const db = require("../utils/database");
const DataTypes = require("sequelize");
const Boxes = require("./Boxes.models");
const Town = require("./Town.models");
const Sectors = require("./Sectors.models");
const TypeService = require("./TypeService.models");

/**
 * @openapi
 * components:
 *   schemas:
 *     Users:
 *       type: object
 *       properties:
 *         townId:
 *           type: integer
 *           format: int8
 *           description: ID del municipio al que pertenece el usuario
 *         sectorId:
 *           type: integer
 *           format: int8
 *           description: ID del sector al que pertenece el usuario
 *         boxId:
 *           type: integer
 *           format: int8
 *           description: ID de la casilla asignada al usuario
 *         name:
 *           type: string
 *           description: Nombre del usuario
 *         port:
 *           type: integer
 *           description: Puerto del usuario
 *         tel:
 *           type: string
 *           description: Número de teléfono del usuario
 *         service:
 *           type: string
 *           description: Tipo de servicio del usuario
 *         state:
 *           type: boolean
 *           description: Estado del usuario (activo/inactivo)
 *         coordinates:
 *           type: string
 *           description: Coordenadas del usuario (opcional)
 *         imgMac:
 *           type: string
 *           description: Imagen MAC del usuario (opcional)
 */

const Users = db.define(
  "users",
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
      field: "town_id",
      references: {
        model: Town,
        key: "id",
      },
      allowNull: false,
    },
    sectorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "sector_id",
      references: {
        model: Sectors,
        key: "id",
      },
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
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "user_name",
    },
    portNumber: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "port_number",
    },
    tel: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    serviceId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: TypeService,
        key: "id",
      },
      field: "service_id",
    },
    state: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    coordinates: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    imgMac: {
      type: DataTypes.STRING,
      allowNull: true,
      field: "img_mac",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Users;
