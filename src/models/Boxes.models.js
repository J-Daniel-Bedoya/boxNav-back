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
    ports: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    failPorts: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "fail_ports",
    },
    address: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = Boxes;
