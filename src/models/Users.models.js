const db = require("../utils/database");
const DataTypes = require("sequelize");
const Boxes = require("./Boxes.models");
const Town = require("./Town.models");

const Users = db.define(
  "users",
  {
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
    port: {
      type: DataTypes.INTEGER,
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
    sector: {
      type: DataTypes.STRING,
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
    boxId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Boxes,
        key: "id",
      },
      field: "box_id",
    },
    state: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    imgSector: {
      type: DataTypes.STRING,
      allowNull: true,
      field: "img_sector",
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
