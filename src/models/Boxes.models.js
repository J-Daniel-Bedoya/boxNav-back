const db = require("../utils/database");
const DataTypes = require("sequelize");
const Address = require("./Address.models");

const Boxes = db.define(
  "boxes",
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
      references: {
        model: Address,
        key: "id",
      },
      field: "address_id",
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
