const db = require("../utils/database");
const DataTypes = require("sequelize");
const Town = require("./Town.models");

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
    number: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    portsNumber: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    portsUsed: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "ports_used",
    },
    portsBad: {
      type: DataTypes.INTEGER,
      allowNull: true,
      field: "ports_bad",
    },
    sectorId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    imgAddres: {
      type: DataTypes.STRING,
      allowNull: true,
      field: "img_sector",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Boxes;
