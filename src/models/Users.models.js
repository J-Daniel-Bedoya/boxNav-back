const db = require("../utils/database");
const DataTypes = require("sequelize");
const Boxes = require("./Boxes.models");
const Town = require("./Town.models");
const Sectors = require("./Sectors.models");

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
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    port: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },

    tel: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    service: {
      type: DataTypes.STRING,
      allowNull: false,
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
