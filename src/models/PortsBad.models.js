const db = require("../utils/database");
const DataTypes = require("sequelize");
const Boxes = require("./Boxes.models");
const Town = require("./Town.models");

const PortsBad = db.define(
  "portsBad",
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
    },
    boxId: {
      type: DataTypes.INTEGER,
      references: {
        model: Boxes,
        key: "id",
      },
      field: "box_id",
      allowNull: false,
    },
    port: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    signal: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = PortsBad;
