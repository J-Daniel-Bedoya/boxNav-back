const db = require("../utils/database");
const DataTypes = require("sequelize");
const Boxes = require("./Boxes.models");
const Address = require("./Town.models");

const FailPorts = db.define(
  "failPorts",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    addressId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "address_id",
      references: {
        model: Address,
        key: "id",
      },
    },
    boxesId: {
      type: DataTypes.INTEGER,
      references: {
        model: Boxes,
        key: "id",
      },
      field: "boxes_id",
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

module.exports = FailPorts;
